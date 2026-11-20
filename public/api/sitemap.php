<?php
/**
 * TILAMED Pharma · plan du site des fiches produits, lu dans la base du back office à chaque visite.
 * Servi à l'adresse /sitemap-produits.xml (réécriture dans public/.htaccess), déclaré dans /sitemap.xml.
 * Seuls les produits publiés y figurent, dans les 7 langues (hreflang).
 */
declare(strict_types=1);

const TLM_PUBLIC = true;
require __DIR__ . '/lib/tilamed/products.php';

use function Tlm\{products, product_url, site_url};
use const Tlm\LANGS;

const HREFLANG = ['fr' => 'fr', 'en' => 'en', 'es' => 'es', 'pt' => 'pt', 'it' => 'it', 'zh' => 'zh-Hans', 'ar' => 'ar'];

$x = static fn (string $s): string => htmlspecialchars($s, ENT_XML1 | ENT_QUOTES, 'UTF-8');

try {
    $list = products(['published']);
} catch (Throwable $e) {
    $list = [];
}

header('Content-Type: application/xml; charset=utf-8');
header('Cache-Control: public, max-age=3600');
header('X-Robots-Tag: noindex');

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n";
foreach ($list as $p) {
    $alts = '';
    foreach (LANGS as $l) {
        $alts .= '    <xhtml:link rel="alternate" hreflang="' . HREFLANG[$l] . '" href="' . $x(site_url() . product_url($p, $l)) . '"/>' . "\n";
    }
    $alts .= '    <xhtml:link rel="alternate" hreflang="x-default" href="' . $x(site_url() . product_url($p, 'fr')) . '"/>' . "\n";
    $mod = substr((string) ($p['updated_at'] ?? ''), 0, 10);
    foreach (LANGS as $l) {
        echo "  <url>\n    <loc>" . $x(site_url() . product_url($p, $l)) . "</loc>\n" . $alts;
        if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $mod)) { echo "    <lastmod>$mod</lastmod>\n"; }
        echo "    <priority>0.5</priority>\n  </url>\n";
    }
}
echo "</urlset>\n";
