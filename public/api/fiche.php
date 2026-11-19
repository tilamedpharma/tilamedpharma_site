<?php
/**
 * TILAMED Pharma · fichiers des produits :
 *   ?l=fr&s={slug}   fiche technique PDF générée (adresse publique /produits/{slug}/fiche-technique.pdf)
 *   ?doc={id}        document PDF joint dans le back office (/produits/{slug}/documents/{id}/{nom}.pdf)
 *   ?img={fichier}   photo du produit
 * Les fichiers sont stockés hors de public_html (dossier tilamed-data) et ne sont servis que pour les
 * produits en ligne, ou à un membre connecté du back office (aperçu).
 */
declare(strict_types=1);

require __DIR__ . '/lib/tilamed/pdf.php';
require __DIR__ . '/lib/tilamed/auth.php';

use function Tlm\{valid_lang, product, product_by_slug, fiche_pdf, fiche_filename, session_open, current_user, data_dir, db, slugify};

function deny(int $code = 404): never
{
    http_response_code($code);
    header('Content-Type: text/plain; charset=utf-8');
    echo $code === 404 ? 'Fichier introuvable.' : 'Service momentanément indisponible.';
    exit;
}

function visible(array $p): bool
{
    if ($p['state'] === 'published') { return true; }
    $ok = session_open(false) && current_user() !== null;
    if (session_status() === PHP_SESSION_ACTIVE) { session_write_close(); }
    return $ok;
}

function send_file(string $path, string $type, string $name, bool $inline, int $maxAge, bool $private): never
{
    $size = filesize($path);
    $etag = '"' . substr(md5($path . $size . filemtime($path)), 0, 16) . '"';
    header('Content-Type: ' . $type);
    header('X-Content-Type-Options: nosniff');
    header('Cache-Control: ' . ($private ? 'private, no-store' : 'public, max-age=' . $maxAge));
    header('ETag: ' . $etag);
    if (!$private && trim((string) ($_SERVER['HTTP_IF_NONE_MATCH'] ?? '')) === $etag) { http_response_code(304); exit; }
    if ($name !== '') {
        $ascii = preg_replace('/[^A-Za-z0-9._-]/', '_', $name);
        header('Content-Disposition: ' . ($inline ? 'inline' : 'attachment') . '; filename="' . $ascii . '"; filename*=UTF-8\'\'' . rawurlencode($name));
    }
    header('Content-Length: ' . $size);
    readfile($path);
    exit;
}

try {
    // Photo d'un produit
    if (isset($_GET['img'])) {
        $file = (string) $_GET['img'];
        if (!preg_match('/^p\d+-[a-f0-9]{8,32}\.jpg$/', $file)) { deny(); }
        $st = db()->prepare('SELECT id, state FROM products WHERE image = ?');
        $st->execute([$file]);
        $row = $st->fetch();
        $path = data_dir() . '/uploads/images/' . $file;
        if (!$row || !is_file($path) || !visible(['state' => $row['state']])) { deny(); }
        send_file($path, 'image/jpeg', '', true, 604800, $row['state'] !== 'published');
    }

    // Document joint
    if (isset($_GET['doc'])) {
        $st = db()->prepare('SELECT * FROM documents WHERE id = ?');
        $st->execute([(int) $_GET['doc']]);
        $d = $st->fetch();
        $p = $d ? product((int) $d['product_id']) : null;
        $path = $d ? data_dir() . '/uploads/docs/' . basename($d['file']) : '';
        if (!$d || !$p || !is_file($path) || !visible($p)) { deny(); }
        $name = 'TILAMED_' . slugify(pathinfo($d['original'] ?: $d['title'], PATHINFO_FILENAME)) . '.pdf';
        send_file($path, 'application/pdf', $name, true, 3600, $p['state'] !== 'published');
    }

    // Fiche technique générée
    $slug = (string) ($_GET['s'] ?? '');
    if (!preg_match('/^[a-z0-9-]{1,80}$/', $slug)) { deny(); }
    $p = product_by_slug($slug);
    if (!$p || !visible($p)) { deny(); }
    $lang = valid_lang($_GET['l'] ?? '');
    send_file(fiche_pdf($p, $lang), 'application/pdf', fiche_filename($p, $lang), empty($_GET['dl']), 3600, $p['state'] !== 'published');
} catch (Throwable $e) {
    error_log('[tilamed-fiche] ' . $e->getMessage() . ' @ ' . $e->getFile() . ':' . $e->getLine());
    deny(503);
}
