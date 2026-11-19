<?php
/**
 * Back office TILAMED · installation, connexion, déconnexion, mot de passe oublié / nouveau mot de passe.
 */
declare(strict_types=1);

namespace Tlm\Admin;

use function Tlm\{h, db, now, config, current_user, login, logout, audit, user_count, password_problem, reset_token_create, reset_token_user, send_mail, base_url, client_ip};

function guest(string $title, string $intro, string $body): never
{
    layout($title, '<div class="aguest"><div class="aguest__card"><img class="aguest__logo" src="/brand/Tilamed_logo_principal.svg" alt="TILAMED Pharma" width="180" height="100">'
        . '<p class="aguest__tag">Back office</p><div class="aduo aduo--short" aria-hidden="true"><span></span><span></span></div><h1 class="aguest__t">' . h($title) . '</h1>'
        . ($intro !== '' ? '<p class="aguest__i">' . $intro . '</p>' : '') . $body . '</div><p class="aguest__foot">TILAMED Pharma · <a href="/">www.tilamedpharma.com</a></p></div>', '', 'adm--center');
}

function password_fields(array $errors, string $label = 'Mot de passe'): string
{
    return field($label, input('password', '', ['type' => 'password', 'autocomplete' => 'new-password', 'required' => true, 'minlength' => \Tlm\PASSWORD_MIN, 'data-pw' => true]),
            'Au moins ' . \Tlm\PASSWORD_MIN . ' caractères, avec des lettres et des chiffres.', $errors['password'] ?? '', true)
        . field('Confirmer le mot de passe', input('password2', '', ['type' => 'password', 'autocomplete' => 'new-password', 'required' => true]), '', $errors['password2'] ?? '', true);
}

/** Création du premier compte administrateur (uniquement tant qu'aucun compte n'existe). */
function setup_page(): void
{
    if (user_count() > 0) { redirect('connexion'); }
    $key = (string) (config()['admin_setup_key'] ?? '');
    if (strlen($key) < 16) {
        $suggest = bin2hex(random_bytes(12));
        guest('Installation du back office', 'Pour créer le premier compte administrateur, ajoutez une clé d\'installation dans le fichier de configuration du serveur.',
            '<ol class="aguest__steps"><li>Dans le gestionnaire de fichiers Hostinger, ouvrez <code>tilamed-forms-config.php</code> (dossier qui contient <code>public_html</code>).</li>'
            . '<li>Ajoutez cette ligne juste après <code>return [</code> :<pre>\'admin_setup_key\' => \'' . h($suggest) . '\',</pre></li><li>Enregistrez, puis rechargez cette page.</li></ol>');
    }
    $errors = [];
    $v = ['name' => '', 'email' => ''];
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
        $v = ['name' => post_str('name', 80), 'email' => mb_strtolower(post_str('email', 160))];
        $pw = (string) ($_POST['password'] ?? '');
        if (!hash_equals($key, post_str('key', 200))) { $errors['key'] = 'Clé d\'installation incorrecte.'; }
        if ($v['name'] === '') { $errors['name'] = 'Indiquez votre nom.'; }
        if (!filter_var($v['email'], FILTER_VALIDATE_EMAIL)) { $errors['email'] = 'Adresse e-mail invalide.'; }
        if ($p = password_problem($pw, $v['email'])) { $errors['password'] = $p; }
        if ($pw !== (string) ($_POST['password2'] ?? '')) { $errors['password2'] = 'Les deux mots de passe ne sont pas identiques.'; }
        if (!$errors && user_count() === 0) {
            db()->prepare("INSERT INTO users (email, name, role, pass, created_at) VALUES (?, ?, 'admin', ?, ?)")->execute([$v['email'], $v['name'], password_hash($pw, PASSWORD_DEFAULT), now()]);
            $id = (int) db()->lastInsertId();
            login($v['email'], $pw);
            audit('setup', 'user', $id, $v['name']);
            flash('success', 'Bienvenue ! Votre compte administrateur est créé. Vous pouvez maintenant gérer les produits et inviter d\'autres personnes (menu Utilisateurs).');
            redirect('');
        }
    }
    guest('Installation du back office', 'Créez le compte administrateur principal. Il pourra ensuite ajouter d\'autres comptes.',
        '<form method="post" class="aform" novalidate>' . csrf_field()
        . field('Clé d\'installation', input('key', '', ['type' => 'password', 'required' => true, 'autocomplete' => 'off']), 'Celle du fichier de configuration du serveur.', $errors['key'] ?? '', true)
        . field('Votre nom', input('name', $v['name'], ['required' => true, 'autocomplete' => 'name']), '', $errors['name'] ?? '', true)
        . field('Adresse e-mail', input('email', $v['email'], ['type' => 'email', 'required' => true, 'autocomplete' => 'email']), 'Servira à vous connecter et à recevoir les liens de mot de passe.', $errors['email'] ?? '', true)
        . password_fields($errors)
        . '<button class="abtn abtn--block" type="submit">Créer le compte' . aicon('arrow') . '</button></form>');
}

function login_page(): void
{
    if (current_user()) { redirect(''); }
    $error = '';
    $email = '';
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
        $email = post_str('email', 160);
        $r = login($email, (string) ($_POST['password'] ?? ''));
        if ($r['ok']) {
            $next = (string) ($_SESSION['after_login'] ?? '');
            unset($_SESSION['after_login']);
            redirect(preg_match('#^[a-z0-9/-]*$#', $next) ? $next : '');
        }
        $error = $r['error'] === 'locked'
            ? 'Trop de tentatives. Par sécurité, la connexion est bloquée pendant 15 minutes.'
            : 'Adresse e-mail ou mot de passe incorrect.';
    }
    guest('Connexion', 'Espace réservé à l\'équipe TILAMED Pharma.',
        ($error !== '' ? '<p class="aerr" role="alert">' . aicon('close', 18) . h($error) . '</p>' : '')
        . '<form method="post" class="aform">' . csrf_field()
        . field('Adresse e-mail', input('email', $email, ['type' => 'email', 'required' => true, 'autocomplete' => 'username', 'autofocus' => $email === '']))
        . field('Mot de passe', '<span class="apw">' . input('password', '', ['type' => 'password', 'required' => true, 'autocomplete' => 'current-password', 'autofocus' => $email !== '']) . '<button type="button" class="apw__t" data-pw-toggle aria-label="Afficher le mot de passe">' . aicon('eye') . '</button></span>')
        . '<button class="abtn abtn--block" type="submit">Se connecter' . aicon('arrow') . '</button></form>'
        . '<p class="aguest__alt"><a href="' . url('mot-de-passe-oublie') . '">Mot de passe oublié ?</a></p>');
}

function logout_action(): void
{
    logout();
    \Tlm\session_open();
    flash('success', 'Vous êtes déconnecté.');
    redirect('connexion');
}

/** E-mail contenant un lien de (ré)initialisation du mot de passe. Renvoie le lien (affiché si l'envoi échoue). */
function send_password_link(array $u, bool $invite): array
{
    $token = reset_token_create((int) $u['id'], $invite ? 259200 : 3600);
    $link = base_url() . url('nouveau-mot-de-passe') . '?jeton=' . $token;
    $subject = $invite ? 'Votre accès au back office TILAMED Pharma' : 'Réinitialisation de votre mot de passe · TILAMED Pharma';
    $intro = $invite
        ? 'Un compte vient d\'être créé pour vous sur le back office du site TILAMED Pharma. Choisissez votre mot de passe en suivant ce lien (valable 3 jours) :'
        : 'Vous avez demandé à réinitialiser votre mot de passe du back office TILAMED Pharma. Choisissez-en un nouveau en suivant ce lien (valable 1 heure) :';
    $html = '<div style="font-family:Calibri,Arial,sans-serif;font-size:15px;color:#34445a;max-width:560px">'
        . '<div style="height:4px;background:#1c64ba;width:70%;display:inline-block"></div><div style="height:4px;background:#39a845;width:30%;display:inline-block"></div>'
        . '<p style="font-size:18px;font-weight:bold;color:#12305a">Bonjour ' . h($u['name']) . ',</p><p>' . h($intro) . '</p>'
        . '<p><a href="' . h($link) . '" style="display:inline-block;padding:12px 22px;background:#1c64ba;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold">Choisir mon mot de passe</a></p>'
        . '<p style="font-size:13px;color:#64748b">Si vous n\'êtes pas à l\'origine de cette demande, ignorez ce message : votre mot de passe actuel reste valable.</p>'
        . '<p style="font-size:13px;color:#64748b">TILAMED Pharma · www.tilamedpharma.com</p></div>';
    $text = "Bonjour {$u['name']},\n\n{$intro}\n{$link}\n\nSi vous n'êtes pas à l'origine de cette demande, ignorez ce message.\n\nTILAMED Pharma";
    return ['sent' => send_mail($u['email'], $subject, $html, $text), 'link' => $link];
}

function forgot_page(): void
{
    $done = false;
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
        $email = mb_strtolower(post_str('email', 160));
        $pdo = db();
        $c = $pdo->prepare('SELECT COUNT(*) FROM login_attempts WHERE (email = ? OR ip = ?) AND at > ?');
        $c->execute(['reset:' . $email, 'reset:' . client_ip(), time() - 900]);
        if ((int) $c->fetchColumn() < 3 && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $pdo->prepare('INSERT INTO login_attempts (ip, email, at) VALUES (?, ?, ?)')->execute(['reset:' . client_ip(), 'reset:' . $email, time()]);
            $st = $pdo->prepare('SELECT * FROM users WHERE email = ? AND active = 1');
            $st->execute([$email]);
            if ($u = $st->fetch()) { send_password_link($u, false); }
        }
        $done = true;
    }
    if ($done) {
        guest('Mot de passe oublié', '', '<p class="aok">' . aicon('check-circle', 20) . 'Si cette adresse correspond à un compte, un e-mail vient de lui être envoyé avec un lien valable 1 heure. Pensez à regarder dans les indésirables.</p>'
            . '<p class="aguest__alt"><a href="' . url('connexion') . '">Retour à la connexion</a></p>');
    }
    guest('Mot de passe oublié', 'Indiquez l\'adresse e-mail de votre compte : nous vous enverrons un lien pour choisir un nouveau mot de passe.',
        '<form method="post" class="aform">' . csrf_field() . field('Adresse e-mail', input('email', '', ['type' => 'email', 'required' => true, 'autocomplete' => 'email', 'autofocus' => true]))
        . '<button class="abtn abtn--block" type="submit">Recevoir le lien' . aicon('arrow') . '</button></form><p class="aguest__alt"><a href="' . url('connexion') . '">Retour à la connexion</a></p>');
}

function reset_page(): void
{
    $token = (string) ($_GET['jeton'] ?? '');
    $u = reset_token_user($token);
    if (!$u) {
        guest('Lien expiré', '', '<p class="aerr">' . aicon('close', 18) . 'Ce lien n\'est plus valable (déjà utilisé ou expiré).</p><p class="aguest__alt"><a href="' . url('mot-de-passe-oublie') . '">Demander un nouveau lien</a></p>');
    }
    $errors = [];
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
        $pw = (string) ($_POST['password'] ?? '');
        if ($p = password_problem($pw, $u['email'])) { $errors['password'] = $p; }
        if ($pw !== (string) ($_POST['password2'] ?? '')) { $errors['password2'] = 'Les deux mots de passe ne sont pas identiques.'; }
        if (!$errors) {
            db()->prepare('UPDATE users SET pass = ?, reset_hash = NULL, reset_until = NULL WHERE id = ?')->execute([password_hash($pw, PASSWORD_DEFAULT), $u['id']]);
            audit('password.reset', 'user', (int) $u['id'], $u['name'], $u);
            logout();
            \Tlm\session_open();
            flash('success', 'Mot de passe enregistré. Vous pouvez vous connecter.');
            redirect('connexion');
        }
    }
    guest('Nouveau mot de passe', 'Compte : <b>' . h($u['email']) . '</b>',
        '<form method="post" class="aform" novalidate>' . csrf_field() . password_fields($errors, 'Nouveau mot de passe')
        . '<button class="abtn abtn--block" type="submit">Enregistrer le mot de passe' . aicon('arrow') . '</button></form>');
}
