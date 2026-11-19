<?php
/**
 * TILAMED Pharma · pages produits servies à partir de la base du back office.
 * Appelé par public/.htaccess (réécriture d'adresse) pour :
 *   /produits/ · /serums/ · /medicaments/ · /solutions-nutritionnelles/ · /dispositifs-medicaux/ · /sante-animale/
 *   /produits/{slug}/  (fiche d'un produit)          — et leurs versions /en/, /es/, /pt/, /it/, /zh/, /ar/
 * La page générée par Astro sert de gabarit : ses emplacements <!--tlm:…--> reçoivent les produits.
 */
declare(strict_types=1);

const TLM_PUBLIC = true; // repli sur le catalogue d'origine si la base est indisponible (voir bootstrap.php)
require __DIR__ . '/lib/tilamed/render.php';
require __DIR__ . '/lib/tilamed/auth.php';

use function Tlm\{valid_lang, template, render_catalog, render_family, render_product, family_of, product_by_slug, session_open, current_user, fill, root};

const PAGES = ['produits', 'serums', 'medicaments', 'solutions-nutritionnelles', 'dispositifs-medicaux', 'sante-animale'];

function send_html(string $html, int $code = 200): never
{
    http_response_code($code);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-cache');
    echo $html;
    exit;
}

function not_found(): never
{
    $page = @file_get_contents(root() . '/404.html');
    send_html($page !== false ? $page : 'Page introuvable', 404);
}

$lang = valid_lang($_GET['l'] ?? '');
$page = (string) ($_GET['p'] ?? '');
$html = null;

try {
    if ($page === 'fiche') {
        $slug = (string) ($_GET['s'] ?? '');
        if (!preg_match('/^[a-z0-9-]{1,80}$/', $slug) || $slug === 'fiche-modele') { not_found(); }
        $p = product_by_slug($slug);
        if (!$p) { not_found(); }
        $preview = false;
        if ($p['state'] !== 'published') {
            // Produit masqué ou archivé : visible uniquement par un membre connecté du back office (aperçu).
            if (!(session_open(false) && current_user())) { not_found(); }
            $preview = true;
        }
        if (session_status() === PHP_SESSION_ACTIVE) { session_write_close(); }
        $tpl = template($lang, 'produits/fiche-modele');
        if ($tpl === null) { throw new RuntimeException('gabarit fiche-modele absent'); }
        if ($preview) { header('X-Robots-Tag: noindex, nofollow'); }
        send_html(render_product($tpl, $p, $lang, $preview));
    }

    if (!in_array($page, PAGES, true)) { not_found(); }
    $html = template($lang, $page);
    if ($html === null) { not_found(); }
    send_html($page === 'produits' ? render_catalog($html, $lang) : render_family($html, $lang, $page));
} catch (Throwable $e) {
    error_log('[tilamed-catalogue] ' . $e->getMessage() . ' @ ' . $e->getFile() . ':' . $e->getLine());
    // Secours : la page sans les produits plutôt qu'une erreur blanche.
    if ($html !== null) { send_html(fill($html, []), 200); }
    http_response_code(503);
    header('Retry-After: 60');
    echo 'Service momentanément indisponible.';
}
