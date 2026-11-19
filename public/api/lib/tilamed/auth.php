<?php
/**
 * TILAMED Pharma · comptes du back office : sessions, connexion, rôles, jeton CSRF, journal, e-mails.
 * Rôles : « admin » (tout, dont les comptes et les catégories) et « editor » (produits, sans suppression définitive).
 */
declare(strict_types=1);

namespace Tlm;

require_once __DIR__ . '/bootstrap.php';

const SESSION_NAME = 'tlm_admin';
const SESSION_IDLE = 7200;       // déconnexion après 2 h sans activité
const SESSION_MAX = 43200;       // et au plus tard après 12 h
const LOGIN_MAX_EMAIL = 5;       // échecs tolérés par adresse…
const LOGIN_MAX_IP = 20;         // …et par adresse IP…
const LOGIN_WINDOW = 900;        // …sur 15 minutes
const PASSWORD_MIN = 10;

function is_https(): bool
{
    return (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https' || (int) ($_SERVER['SERVER_PORT'] ?? 0) === 443;
}

/**
 * Ouvre la session du back office. Avec $create = false (pages publiques : aperçu des produits masqués),
 * ne fait rien si le navigateur n'a pas déjà de cookie de session.
 */
function session_open(bool $create = true): bool
{
    if (session_status() === PHP_SESSION_ACTIVE) { return true; }
    if (!$create && empty($_COOKIE[SESSION_NAME])) { return false; }
    session_save_path(data_dir() . '/sessions');
    ini_set('session.gc_maxlifetime', (string) SESSION_MAX);
    ini_set('session.use_strict_mode', '1');
    ini_set('session.use_only_cookies', '1');
    session_name(SESSION_NAME);
    session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'secure' => is_https(), 'httponly' => true, 'samesite' => 'Lax']);
    session_start();
    $now = time();
    if (isset($_SESSION['uid']) && (($now - (int) ($_SESSION['last'] ?? 0)) > SESSION_IDLE || ($now - (int) ($_SESSION['t0'] ?? 0)) > SESSION_MAX)) {
        $_SESSION = [];
        session_regenerate_id(true);
        $_SESSION['expired'] = true;
    }
    if (isset($_SESSION['uid'])) { $_SESSION['last'] = $now; }
    return true;
}

/** Empreinte du mot de passe gardée en session : changer de mot de passe déconnecte les autres sessions. */
function pass_fingerprint(string $hash): string
{
    return substr(hash('sha256', $hash), 0, 16);
}

function current_user(): ?array
{
    static $user = false;
    if ($user !== false) { return $user; }
    $user = null;
    if (session_status() !== PHP_SESSION_ACTIVE || empty($_SESSION['uid'])) { return null; }
    $st = db()->prepare('SELECT * FROM users WHERE id = ? AND active = 1');
    $st->execute([(int) $_SESSION['uid']]);
    $u = $st->fetch();
    if ($u && hash_equals(pass_fingerprint($u['pass']), (string) ($_SESSION['ph'] ?? ''))) {
        $u['id'] = (int) $u['id'];
        $user = $u;
    }
    return $user;
}

function is_admin(): bool
{
    return (current_user()['role'] ?? '') === 'admin';
}

function client_ip(): string
{
    return substr((string) ($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0'), 0, 64);
}

/** @return array{ok:bool,error?:string} error : locked | invalid */
function login(string $email, string $password): array
{
    $email = mb_strtolower(trim($email));
    $pdo = db();
    $since = time() - LOGIN_WINDOW;
    $pdo->prepare('DELETE FROM login_attempts WHERE at < ?')->execute([time() - 86400]);
    $c = $pdo->prepare('SELECT (SELECT COUNT(*) FROM login_attempts WHERE email = ? AND at > ?), (SELECT COUNT(*) FROM login_attempts WHERE ip = ? AND at > ?)');
    $c->execute([$email, $since, client_ip(), $since]);
    [$byEmail, $byIp] = $c->fetch(\PDO::FETCH_NUM);
    if ($byEmail >= LOGIN_MAX_EMAIL || $byIp >= LOGIN_MAX_IP) { return ['ok' => false, 'error' => 'locked']; }

    $st = $pdo->prepare('SELECT * FROM users WHERE email = ? AND active = 1');
    $st->execute([$email]);
    $u = $st->fetch();
    // Vérification même sans compte, pour ne pas révéler par le temps de réponse qu'une adresse existe.
    $ok = $u ? password_verify($password, $u['pass']) : (password_hash($password, PASSWORD_DEFAULT) && false);
    if (!$u || !$ok || $u['pass'] === '') {
        $pdo->prepare('INSERT INTO login_attempts (ip, email, at) VALUES (?, ?, ?)')->execute([client_ip(), $email, time()]);
        return ['ok' => false, 'error' => 'invalid'];
    }
    if (password_needs_rehash($u['pass'], PASSWORD_DEFAULT)) {
        $u['pass'] = password_hash($password, PASSWORD_DEFAULT);
        $pdo->prepare('UPDATE users SET pass = ? WHERE id = ?')->execute([$u['pass'], $u['id']]);
    }
    session_regenerate_id(true);
    $_SESSION = ['uid' => (int) $u['id'], 'ph' => pass_fingerprint($u['pass']), 't0' => time(), 'last' => time()];
    $pdo->prepare('UPDATE users SET last_login = ? WHERE id = ?')->execute([now(), $u['id']]);
    $pdo->prepare('DELETE FROM login_attempts WHERE email = ?')->execute([$email]);
    audit('login', 'user', (int) $u['id'], $u['name'], $u);
    return ['ok' => true];
}

function logout(): void
{
    if (session_status() !== PHP_SESSION_ACTIVE) { return; }
    $_SESSION = [];
    session_regenerate_id(true);
    session_destroy();
}

function csrf_token(): string
{
    if (empty($_SESSION['csrf'])) { $_SESSION['csrf'] = bin2hex(random_bytes(32)); }
    return $_SESSION['csrf'];
}

function csrf_valid(): bool
{
    return isset($_SESSION['csrf'], $_POST['_csrf']) && is_string($_POST['_csrf']) && hash_equals($_SESSION['csrf'], $_POST['_csrf']);
}

/** Journal des actions (qui a fait quoi, quand). */
function audit(string $action, string $entity = '', ?int $entityId = null, string $label = '', ?array $user = null): void
{
    $user ??= current_user();
    db()->prepare('INSERT INTO audit (at, user_id, user_name, action, entity, entity_id, label) VALUES (?, ?, ?, ?, ?, ?, ?)')
        ->execute([now(), $user['id'] ?? null, $user['name'] ?? '', $action, $entity, $entityId, mb_substr($label, 0, 200)]);
}

function user_count(): int
{
    return (int) db()->query('SELECT COUNT(*) FROM users')->fetchColumn();
}

function admin_count(): int
{
    return (int) db()->query("SELECT COUNT(*) FROM users WHERE role = 'admin' AND active = 1")->fetchColumn();
}

/** Message d'erreur si le mot de passe est trop faible, sinon null. */
function password_problem(string $p, string $email = ''): ?string
{
    if (mb_strlen($p) < PASSWORD_MIN) { return 'Le mot de passe doit contenir au moins ' . PASSWORD_MIN . ' caractères.'; }
    if (!preg_match('/\p{L}/u', $p) || !preg_match('/\d/', $p)) { return 'Le mot de passe doit mêler des lettres et des chiffres.'; }
    if ($email !== '' && stripos($p, explode('@', $email)[0]) !== false) { return 'Le mot de passe ne doit pas reprendre l\'adresse e-mail.'; }
    return null;
}

/** Lien de (ré)initialisation du mot de passe : jeton aléatoire, seule son empreinte est gardée. */
function reset_token_create(int $userId, int $ttl = 3600): string
{
    $token = bin2hex(random_bytes(24));
    db()->prepare('UPDATE users SET reset_hash = ?, reset_until = ? WHERE id = ?')->execute([hash('sha256', $token), gmdate('Y-m-d H:i:s', time() + $ttl), $userId]);
    return $token;
}

function reset_token_user(string $token): ?array
{
    if (!preg_match('/^[a-f0-9]{48}$/', $token)) { return null; }
    $st = db()->prepare('SELECT * FROM users WHERE reset_hash = ? AND reset_until > ? AND active = 1');
    $st->execute([hash('sha256', $token), now()]);
    $u = $st->fetch();
    return $u ?: null;
}

function base_url(): string
{
    $host = preg_replace('/[^a-zA-Z0-9.:-]/', '', (string) ($_SERVER['HTTP_HOST'] ?? 'www.tilamedpharma.com'));
    return (is_https() ? 'https://' : 'http://') . $host;
}

/** Envoi d'un e-mail par le SMTP des formulaires (PHPMailer). */
function send_mail(string $to, string $subject, string $html, string $text): bool
{
    $c = config();
    if (empty($c['smtp_host']) || empty($c['smtp_pass']) || ($c['smtp_pass'] ?? '') === 'MOT_DE_PASSE_DE_LA_BOITE') {
        error_log('[tilamed-admin] SMTP non configuré : e-mail non envoyé à ' . $to);
        return false;
    }
    $lib = root() . '/api/lib/PHPMailer';
    require_once $lib . '/Exception.php';
    require_once $lib . '/PHPMailer.php';
    require_once $lib . '/SMTP.php';
    try {
        $m = new \PHPMailer\PHPMailer\PHPMailer(true);
        $m->isSMTP();
        $m->Host = $c['smtp_host'];
        $m->Port = (int) ($c['smtp_port'] ?? 465);
        $m->SMTPSecure = ($c['smtp_secure'] ?? 'ssl') === 'tls' ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS : \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $m->SMTPAuth = true;
        $m->Username = $c['smtp_user'];
        $m->Password = $c['smtp_pass'];
        $m->CharSet = 'UTF-8';
        $m->setFrom($c['from'] ?? $c['smtp_user'], 'TILAMED Pharma · Back office');
        $m->addAddress($to);
        $m->Subject = $subject;
        $m->isHTML(true);
        $m->Body = $html;
        $m->AltBody = $text;
        $m->send();
        return true;
    } catch (\Throwable $e) {
        error_log('[tilamed-admin] envoi impossible : ' . $e->getMessage());
        return false;
    }
}
