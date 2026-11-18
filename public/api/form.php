<?php
/**
 * TILAMED Pharma · réception des 5 formulaires du site (contact, documentation, pharmacovigilance,
 * distributeur, candidature) et envoi par e-mail via le SMTP de la boîte OVH (contact@tilamedpharma.com).
 *
 * Les identifiants SMTP ne sont PAS dans le dépôt : ils sont lus dans un fichier de configuration
 * placé sur le serveur, en dehors de public_html (voir tilamed-forms-config.example.php).
 *
 * Réponse : JSON {ok:true} si la requête demande du JSON (envoi en JavaScript),
 * sinon redirection vers la page d'origine avec ?envoi=ok|erreur.
 */
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailException;

require __DIR__ . '/lib/PHPMailer/Exception.php';
require __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require __DIR__ . '/lib/PHPMailer/SMTP.php';

const MAX_FIELD = 5000;          // caractères par champ
const MAX_CV = 5 * 1024 * 1024;  // 5 Mo
const RATE_MAX = 5;              // envois par adresse IP…
const RATE_WINDOW = 600;         // …sur 10 minutes

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function done(bool $ok, string $error = ''): never
{
    global $wantsJson;
    if ($wantsJson) {
        http_response_code($ok ? 200 : ($error === 'method' ? 405 : 400));
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-Control: no-store');
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error]);
        exit;
    }
    // Redirection vers la page du formulaire (même hôte uniquement), sinon vers l'accueil.
    $back = '/';
    $ref = $_SERVER['HTTP_REFERER'] ?? '';
    $host = explode(':', (string) ($_SERVER['HTTP_HOST'] ?? ''))[0];
    if ($ref !== '' && parse_url($ref, PHP_URL_HOST) === $host) {
        $back = (string) (parse_url($ref, PHP_URL_PATH) ?: '/');
    }
    header('Location: ' . $back . '?envoi=' . ($ok ? 'ok' : 'erreur'), true, 303);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    done(false, 'method');
}

/* ---------- Configuration (hors du dossier public) ---------- */
$config = null;
foreach ([dirname(__DIR__, 2) . '/tilamed-forms-config.php', dirname(__DIR__, 3) . '/tilamed-forms-config.php', __DIR__ . '/config.php'] as $path) {
    if (is_file($path)) { $config = require $path; break; }
}
if (!is_array($config)) {
    error_log('[tilamed-forms] fichier de configuration introuvable');
    done(false, 'config');
}

/* ---------- Formulaires connus ---------- */
$forms = [
    'contact'           => ['title' => 'Contact',                   'required' => ['objet', 'nom', 'email', 'message']],
    'documentation'     => ['title' => 'Demande de documentation',  'required' => ['nom', 'organisation', 'profil', 'pays', 'email']],
    'pharmacovigilance' => ['title' => 'Pharmacovigilance',         'required' => ['declarant', 'type', 'nom', 'email', 'produit', 'description']],
    'distributeur'      => ['title' => 'Devenir distributeur',      'required' => ['societe', 'pays', 'contact', 'email', 'telephone', 'autorisation', 'entrepot_bpd']],
    'candidature'       => ['title' => 'Candidature spontanée',     'required' => ['nom', 'email', 'metier']],
];
$labels = [
    'objet' => 'Objet', 'nom' => 'Nom', 'organisation' => 'Organisation', 'societe' => 'Société', 'contact' => 'Personne à contacter',
    'fonction' => 'Fonction', 'profil' => 'Profil', 'declarant' => 'Déclarant', 'type' => 'Type d\'événement', 'email' => 'E-mail',
    'telephone' => 'Téléphone', 'pays' => 'Pays', 'produit' => 'Produit', 'lot' => 'N° de lot', 'peremption' => 'Péremption',
    'date_evenement' => 'Date de l\'événement', 'gammes' => 'Gammes', 'produits' => 'Produits', 'circuits' => 'Circuits de distribution',
    'autorisation' => 'Autorisation d\'exercer', 'entrepot_bpd' => 'Entrepôt aux BPD', 'metier' => 'Métier', 'niveau' => 'Niveau',
    'experience' => 'Expérience', 'message' => 'Message', 'description' => 'Description', 'presentation' => 'Présentation',
    'motivation' => 'Motivation',
];
$countries = [
    'BJ' => 'Bénin', 'BF' => 'Burkina Faso', 'CV' => 'Cap-Vert', 'CI' => 'Côte d\'Ivoire', 'GM' => 'Gambie', 'GH' => 'Ghana',
    'GN' => 'Guinée', 'GW' => 'Guinée-Bissau', 'LR' => 'Liberia', 'ML' => 'Mali', 'NE' => 'Niger', 'NG' => 'Nigeria',
    'SN' => 'Sénégal', 'SL' => 'Sierra Leone', 'TG' => 'Togo', 'FR' => 'France',
];
$langs = ['fr' => 'français', 'en' => 'anglais', 'es' => 'espagnol', 'pt' => 'portugais', 'it' => 'italien', 'zh' => 'chinois', 'ar' => 'arabe'];

$formName = (string) ($_POST['form-name'] ?? '');
if (!isset($forms[$formName])) {
    done(false, 'form');
}
$form = $forms[$formName];

// Pot de miel : un robot remplit le champ caché → on fait semblant d'avoir envoyé.
if (trim((string) ($_POST['bot-field'] ?? '')) !== '') {
    done(true);
}
if (empty($_POST['consentement'])) {
    done(false, 'consent');
}

/* ---------- Limite d'envois par IP ---------- */
$ipKey = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? 'x') . '|tilamed');
$rateFile = sys_get_temp_dir() . '/tilamed-forms-' . $ipKey;
$now = time();
$hits = array_filter(
    is_file($rateFile) ? array_map('intval', explode(',', (string) file_get_contents($rateFile))) : [],
    fn ($t) => $t > $now - RATE_WINDOW
);
if (count($hits) >= RATE_MAX) {
    done(false, 'rate');
}

/* ---------- Lecture et contrôle des champs ---------- */
$clean = static function ($v): string {
    $v = is_array($v) ? implode(', ', array_map('strval', $v)) : (string) $v;
    $v = str_replace("\0", '', trim($v));
    return mb_substr($v, 0, MAX_FIELD);
};
$data = [];
foreach ($labels as $key => $label) {
    if (!array_key_exists($key, $_POST)) continue;
    $value = $clean($_POST[$key]);
    if ($value === '') continue;
    if ($key === 'pays' && isset($countries[$value])) $value = $countries[$value] . " ($value)";
    $data[$key] = $value;
}
foreach ($form['required'] as $key) {
    if (($data[$key] ?? '') === '') done(false, 'missing:' . $key);
}
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
if ($email === false) {
    done(false, 'email');
}

/* ---------- CV (candidature) ---------- */
$attachment = null;
if ($formName === 'candidature') {
    $file = $_FILES['cv'] ?? null;
    if (!$file || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) {
        done(false, 'cv');
    }
    if ($file['size'] > MAX_CV) {
        done(false, 'cv-size');
    }
    $ext = strtolower(pathinfo((string) $file['name'], PATHINFO_EXTENSION));
    $mimes = [
        'pdf' => ['application/pdf'],
        'doc' => ['application/msword', 'application/octet-stream'],
        'docx' => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip', 'application/octet-stream'],
    ];
    $mime = function_exists('finfo_open') ? (string) finfo_file(finfo_open(FILEINFO_MIME_TYPE), $file['tmp_name']) : '';
    if (!isset($mimes[$ext]) || ($mime !== '' && !in_array($mime, $mimes[$ext], true))) {
        done(false, 'cv-type');
    }
    $safeName = 'CV-' . preg_replace('/[^A-Za-z0-9]+/', '-', iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $data['nom']) ?: 'candidat') . '.' . $ext;
    $attachment = [$file['tmp_name'], trim($safeName, '-')];
}

/* ---------- Composition du message ---------- */
$lang = (string) ($_POST['langue'] ?? 'fr');
$who = $data['nom'] ?? $data['societe'] ?? $data['contact'] ?? $email;
$subject = '[Site] ' . $form['title'] . (isset($data['objet']) ? ' · ' . $data['objet'] : '') . ' · ' . $who;

$rows = '';
$text = $form['title'] . "\n" . str_repeat('=', mb_strlen($form['title'])) . "\n\n";
foreach ($data as $key => $value) {
    $label = $labels[$key];
    $rows .= '<tr><th style="text-align:left;vertical-align:top;padding:6px 14px 6px 0;color:#12305A;white-space:nowrap">'
        . htmlspecialchars($label) . '</th><td style="padding:6px 0">' . nl2br(htmlspecialchars($value)) . '</td></tr>';
    $text .= $label . ' : ' . $value . "\n";
}
$meta = 'Envoyé depuis la page ' . htmlspecialchars((string) ($_SERVER['HTTP_REFERER'] ?? 'inconnue'))
    . ' · langue du site : ' . ($langs[$lang] ?? $lang) . ' · ' . date('d/m/Y H:i');
$html = '<div style="font-family:Arial,sans-serif;font-size:15px;color:#222">'
    . '<h2 style="margin:0 0 4px;color:#1C64BA">' . htmlspecialchars($form['title']) . '</h2>'
    . '<p style="margin:0 0 18px;color:#666;font-size:13px">' . $meta . '</p>'
    . '<table style="border-collapse:collapse">' . $rows . '</table>'
    . ($attachment ? '<p style="margin-top:18px">CV joint : ' . htmlspecialchars($attachment[1]) . '</p>' : '')
    . '<p style="margin-top:24px;color:#666;font-size:13px">Répondre à ce message écrit directement à ' . htmlspecialchars($email) . '.</p></div>';
$text .= "\n" . strip_tags(str_replace('&middot;', '·', $meta)) . "\n";

/* ---------- Envoi ---------- */
$mail = new PHPMailer(true);
try {
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->Port = (int) ($config['smtp_port'] ?? 465);
    $secure = $config['smtp_secure'] ?? 'ssl';
    $mail->SMTPSecure = $secure === 'tls' ? PHPMailer::ENCRYPTION_STARTTLS : ($secure === 'none' ? '' : PHPMailer::ENCRYPTION_SMTPS);
    $mail->SMTPAutoTLS = $secure !== 'none';   // 'none' : tests locaux uniquement
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_pass'];
    $mail->Timeout = 20;

    $mail->setFrom($config['from'] ?? $config['smtp_user'], 'Site TILAMED Pharma');
    foreach ((array) ($config['to'][$formName] ?? $config['to']['default'] ?? $config['smtp_user']) as $to) {
        $mail->addAddress($to);
    }
    $mail->addReplyTo($email, $who);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $html;
    $mail->AltBody = $text;
    if ($attachment) {
        $mail->addAttachment($attachment[0], $attachment[1]);
    }
    $mail->send();
} catch (MailException $e) {
    error_log('[tilamed-forms] ' . $formName . ' : ' . $mail->ErrorInfo);
    done(false, 'send');
}

$hits[] = $now;
@file_put_contents($rateFile, implode(',', $hits), LOCK_EX);
done(true);
