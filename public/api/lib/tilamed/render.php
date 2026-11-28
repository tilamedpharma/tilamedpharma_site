<?php
/**
 * TILAMED Pharma · rendu HTML des produits pour le site public.
 * Les pages sont générées par Astro (en-tête, pied, textes) avec des emplacements <!--tlm:clé-->,
 * remplis ici à chaque visite à partir de la base (voir src/components/produits/Live.astro).
 * Les classes CSS sont celles du site (src/styles/pages.css, rubrique PRODUITS).
 */
declare(strict_types=1);

namespace Tlm;

require_once __DIR__ . '/products.php';
require_once __DIR__ . '/packshot.php';

/** Lit la page générée par Astro (gabarit) pour une langue et un slug. */
function template(string $lang, string $slug): ?string
{
    $file = root() . lang_path($lang, $slug) . 'index.html';
    $html = is_file($file) ? file_get_contents($file) : false;
    return $html === false ? null : $html;
}

/** Remplace les emplacements, puis efface ceux qui restent. */
function fill(string $html, array $slots): string
{
    $html = (string) preg_replace_callback('/<!--tlm:([a-z0-9:_-]+)-->/i', fn ($m) => $slots[$m[1]] ?? '', $html);
    return $html;
}

/** Attribut lang quand un texte s'affiche dans une langue de repli. */
function lang_attr(string $used, string $lang): string
{
    return $used === $lang ? '' : ' lang="' . h(site()['locales'][$used]['htmlLang'] ?? $used) . '"';
}

function results_label(string $lang, int $n): string
{
    $ui = t($lang)['ui'];
    return $n === 1 ? $ui['results1'] : str_replace('999', (string) $n, $ui['resultsMany']);
}

/**
 * Carte produit (catalogue, pages des gammes, produits similaires d'une fiche) : carte entière cliquable vers la fiche.
 * Visuel : photo du produit (back office) > visuel « étiquette » généré (packshot.php) > illustration de la catégorie.
 * $catalog : ajoute les données de recherche / tri et le nom de la gamme (page Catalogue).
 */
function card(array $p, string $lang, bool $catalog = false): string
{
    $t = t($lang);
    [$name, $nl] = ptext($p, $lang, 'name');
    [$use, $ul] = ptext($p, $lang, 'use');
    $st = $t['status'][$p['kind']] ?? ['badge' => '', 'note' => ''];
    $catLabel = cat_label($p['cat'], $lang);
    $groupLabel = $t['groups'][$p['grp']]['label'] ?? '';
    $out = '<li class="pcard pcard--' . h($p['kind']) . '" data-g="' . h($p['grp']) . '" data-c="' . h($p['cat']) . '"';
    if ($catalog) {
        $search = norm(implode(' ', [$name, $use, $p['texts']['fr']['name'] ?? '', $p['texts']['en']['name'] ?? '', $catLabel, $groupLabel, $p['keywords']]));
        $out .= ' data-s="' . h($search) . '" data-n="' . h($name) . '"';
    }
    $out .= '><a class="pcard__in" href="' . h(product_url($p, $lang)) . '">';
    $vis = visual($p);
    $pk = $vis['photo'] ? '' : packshot($p, $lang);
    // Statut en pastille sur le visuel
    $status = '<span class="pcard__st pcard__st--' . h($p['kind']) . '" title="' . h($st['note']) . '">' . h($st['badge']) . '</span>';
    if ($vis['photo']) {
        $out .= '<span class="pcard__vis pcard__vis--photo"><img src="' . h($vis['url']) . '" alt="" width="480" height="360" loading="lazy" decoding="async">' . $status . '</span>';
    } elseif ($pk !== '') {
        $out .= '<span class="pcard__vis">' . $pk . $status . '</span>';
    } else {
        $out .= '<span class="pcard__vis pcard__vis--illu">' . ($vis['url'] !== '' ? '<img src="' . h($vis['url']) . '" alt="" width="480" height="360" loading="lazy" decoding="async">' : '') . $status . '</span>';
    }
    $out .= '<span class="pcard__body"><span class="pcard__k">' . h($catalog ? $groupLabel . ' · ' . $catLabel : $catLabel) . '</span>';
    $out .= '<h3 class="pcard__name"' . lang_attr($nl, $lang) . '>' . h($name) . '</h3>';
    if ($use !== '') { $out .= '<span class="pcard__use"' . lang_attr($ul, $lang) . '>' . h($use) . '</span>'; }
    if ($p['formats']) {
        $out .= '<span class="pcard__f" aria-label="' . h($t['ui']['formats']) . '">';
        foreach ($p['formats'] as $f) { $out .= '<span dir="ltr">' . h(format_label($lang, (string) $f)) . '</span>'; }
        $out .= '</span>';
    }
    $out .= '<span class="pcard__foot"><span class="pcard__go">' . h($t['fiche']['seeSheet']) . icon('arrow', 15, 'flip-rtl') . '</span></span>';
    return $out . '</span></a></li>';
}

/* ---------- Page « Catalogue » ---------- */

function render_catalog(string $html, string $lang): string
{
    $items = products(['published']);
    $slots = ['n:all' => (string) count($items), 'results' => h(results_label($lang, count($items)))];
    // Catégories de la colonne de gauche, par gamme, dans l'ordre du catalogue (seules celles qui ont des produits).
    $cats = [];
    foreach ($items as $p) { $cats[$p['grp']][$p['cat']] = ($cats[$p['grp']][$p['cat']] ?? 0) + 1; }
    $side = '';
    foreach (GROUPS as $g) {
        $list = array_values(array_filter($items, fn ($p) => $p['grp'] === $g));
        $slots['count:' . $g] = (string) count($list);
        $slots['n:' . $g] = (string) count($list);
        if (empty($cats[$g])) { continue; }
        $side .= '<div class="pcx-cats" data-cats-of="' . h($g) . '"><p class="pcx-cats__h">' . h(t($lang)['groups'][$g]['label'] ?? $g) . '</p><ul>';
        foreach ($cats[$g] as $cat => $n) {
            $side .= '<li><button type="button" class="pcx-c" data-cat-c="' . h((string) $cat) . '" data-cat-cg="' . h($g) . '" aria-pressed="false">'
                . h(cat_label((string) $cat, $lang)) . '<span>' . $n . '</span></button></li>';
        }
        $side .= '</ul></div>';
    }
    $slots['cats'] = $side;
    $slots['n:cats'] = (string) array_sum(array_map('count', $cats));
    $slots['cards'] = implode('', array_map(fn ($p) => card($p, $lang, true), $items));
    return fill($html, $slots);
}

/* ---------- Pages des gammes ---------- */

function family_of(string $slug): ?array
{
    foreach (site()['families'] as $f) {
        if ($f['slug'] === $slug) { return $f; }
    }
    return null;
}

function render_family(string $html, string $lang, string $slug): string
{
    $fam = family_of($slug);
    if (!$fam) { return fill($html, []); }
    $t = t($lang);
    $items = products(['published'], $fam['group']);
    $byCat = [];
    foreach ($items as $p) { $byCat[$p['cat']][] = $p; }
    $kinds = array_values(array_unique(array_map(fn ($p) => $p['kind'], $items)));

    $status = '';
    foreach ($kinds as $k) {
        $status .= '<li class="pst pst--' . h($k) . '">' . icon($k === 'devices' ? 'truck' : ($k === 'vet' ? 'clock' : 'factory'), 16) . h($t['status'][$k]['note'] ?? '') . '</li>';
    }
    // Filtres au-dessus des produits : toute la gamme est affichée d'emblée (« Tout »), l'internaute affine s'il le souhaite.
    $filters = '';
    if (count($byCat) > 1) {
        $filters = '<button type="button" class="pcat__chip" aria-pressed="true" data-fam-c="">' . h($t['ui']['all'] ?? 'Tout') . ' <span>' . count($items) . '</span></button>';
    }
    $range = '';
    $i = 0;
    foreach ($byCat as $cat => $list) {
        $i++;
        $label = cat_label((string) $cat, $lang);
        if (count($byCat) > 1) {
            $filters .= '<button type="button" class="pcat__chip" aria-pressed="false" data-fam-c="' . h((string) $cat) . '">' . h($label) . ' <span>' . count($list) . '</span></button>';
        }
        $range .= '<div class="prange__cat" id="cat-' . h((string) $cat) . '" data-cat="' . h((string) $cat) . '"><h2 class="prange__h" data-reveal><span>' . str_pad((string) $i, 2, '0', STR_PAD_LEFT) . '</span>'
            . h($label) . '<small>' . count($list) . '</small></h2><ul class="pcards">' . implode('', array_map(fn ($p) => card($p, $lang), $list)) . '</ul></div>';
    }
    $phases = '';
    $d = 0;
    foreach ([1, 2, 3] as $n) {
        $ph = array_filter($items, fn ($p) => $p['phase'] === $n);
        if (!$ph) { continue; }
        $lines = array_values(array_unique(array_filter(array_map(fn ($p) => $p['line'], $ph))));
        $phases .= '<li data-reveal style="--d:' . $d++ . '"><span class="pphases__n">P' . $n . '</span><h3>' . h($t['phases'][(string) $n] ?? '') . '</h3><ul>'
            . implode('', array_map(fn ($l) => '<li>' . icon('check', 16) . h($t['lines'][$l] ?? $l) . '</li>', $lines))
            . '</ul><p class="pphases__c">' . count($ph) . ' ' . h($t['ui']['refs']) . '</p></li>';
    }
    return fill($html, [
        'fam:status' => $status, 'fam:filters' => $filters, 'fam:n' => (string) count($items), 'fam:ncats' => (string) count($byCat),
        'fam:phases' => $phases, 'fam:range' => $range,
    ]);
}

/* ---------- Page d'un produit ---------- */

/** Texte saisi dans le back office → paragraphes et listes (lignes commençant par « - » ou « • »). */
function rich_text(string $s): string
{
    $out = '';
    foreach (preg_split('/\R\s*\R/u', trim($s)) ?: [] as $block) {
        $lines = array_values(array_filter(array_map('trim', preg_split('/\R/u', $block) ?: []), fn ($l) => $l !== ''));
        if (!$lines) { continue; }
        $bullets = array_filter($lines, fn ($l) => (bool) preg_match('/^[-•*–]\s+/u', $l));
        if (count($bullets) === count($lines)) {
            $out .= '<ul>' . implode('', array_map(fn ($l) => '<li>' . h((string) preg_replace('/^[-•*–]\s+/u', '', $l)) . '</li>', $lines)) . '</ul>';
        } else {
            $out .= '<p>' . implode('<br>', array_map('Tlm\h', $lines)) . '</p>';
        }
    }
    return $out;
}

/** Lignes du tableau « caractéristiques » : [libellé, valeur texte, dir]. */
function spec_rows(array $p, string $lang): array
{
    $t = t($lang);
    $f = $t['fiche'];
    $rows = [];
    // La « référence interne » du back office n'est pas affichée au public (codes hérités de l'ancien site).
    $rows[] = [$f['range'], $t['groups'][$p['grp']]['label'] ?? $p['grp'], ''];
    $rows[] = [$f['category'], cat_label($p['cat'], $lang), ''];
    $rows[] = [$f['status'], $t['status'][$p['kind']]['note'] ?? '', ''];
    if ($p['formats']) { $rows[] = [$t['ui']['formats'], implode(' · ', array_map(fn ($x) => format_label($lang, (string) $x), $p['formats'])), 'ltr']; }
    if ($p['route'] !== '') { $rows[] = [$t['ui']['route'], route_label($lang, $p['route']), 'auto']; }
    if ($p['line'] !== '' && isset($t['lines'][$p['line']])) { $rows[] = [$t['ui']['line'], $t['lines'][$p['line']], '']; }
    if ($p['pack'] !== '' && isset($t['packs'][$p['pack']])) { $rows[] = [$t['ui']['pack'], $t['packs'][$p['pack']], '']; }
    if ($p['phase']) { $rows[] = [$f['phase'], $t['phases'][(string) $p['phase']] ?? ('P' . $p['phase']), '']; }
    if ($p['species'] !== '' && isset($f['speciesList'][$p['species']])) { $rows[] = [$f['species'], $f['speciesList'][$p['species']], '']; }
    if ($p['atc'] !== '') { $rows[] = [$f['atc'], $p['atc'], 'ltr']; }
    return $rows;
}

function render_product(string $html, array $p, string $lang, bool $preview): string
{
    $t = t($lang);
    $f = $t['fiche'];
    $fam = null;
    foreach (site()['families'] as $x) { if ($x['group'] === $p['grp']) { $fam = $x; } }
    [$name, $nl] = ptext($p, $lang, 'name');
    [$use, $ul] = ptext($p, $lang, 'use');
    $fallbacks = array_filter([$nl, $ul], fn ($l) => $l !== $lang);
    $groupLabel = $t['groups'][$p['grp']]['label'] ?? '';
    $st = $t['status'][$p['kind']] ?? ['badge' => '', 'note' => ''];
    $pdf = pdf_url($p, $lang);
    $famUrl = $fam ? lang_path($lang, $fam['slug']) : lang_path($lang, 'produits');

    // Fil d'Ariane + données structurées
    $crumbs = [[$t['home'], lang_path($lang)], [$t['pages']['produits'], lang_path($lang, 'produits')]];
    if ($fam) { $crumbs[] = [$t['pages'][$fam['slug']] ?? $groupLabel, $famUrl]; }
    $crumbs[] = [$name, null];
    $ld = ['@context' => 'https://schema.org', '@type' => 'BreadcrumbList', 'itemListElement' => []];
    foreach ($crumbs as $i => [$label, $href]) {
        $ld['itemListElement'][] = ['@type' => 'ListItem', 'position' => $i + 1, 'name' => $label, 'item' => site_url() . ($href ?? product_url($p, $lang))];
    }

    $o = '';
    if ($preview) {
        $o .= '<div class="pfpreview"><div class="wrap">' . icon('eye', 18) . '<span>' . h($f['preview']) . '</span><a href="/admin/produits/' . $p['id'] . '">Modifier dans le back office</a></div></div>';
    }
    $o .= '<section class="phero phero--product" aria-labelledby="phero-title"><div class="wrap phero__body pfhero"><div class="pfhero__main">';
    $o .= '<nav class="crumbs" aria-label="' . h($t['breadcrumb']) . '"><ol>';
    foreach ($crumbs as [$label, $href]) {
        $o .= '<li>' . ($href ? '<a href="' . h($href) . '">' . h($label) . '</a>' : '<span aria-current="page">' . h($label) . '</span>') . '</li>';
    }
    $o .= '</ol></nav>';
    $o .= '<p class="phero__eyebrow"><span class="hero__dot" aria-hidden="true"></span>' . h($f['eyebrow']) . ' · ' . h($groupLabel) . '</p>';
    $o .= '<h1 class="phero__title" id="phero-title"' . lang_attr($nl, $lang) . '>' . h($name) . '</h1>';
    if ($use !== '') { $o .= '<p class="phero__lead"' . lang_attr($ul, $lang) . '>' . h($use) . '</p>'; }
    $o .= '<ul class="pfhero__tags"><li class="pfhero__badge pfhero__badge--' . h($p['kind']) . '">' . h($st['badge']) . '</li><li>' . h(cat_label($p['cat'], $lang)) . '</li>';
    if ($p['phase']) { $o .= '<li>P' . (int) $p['phase'] . '</li>'; }
    $o .= '</ul><div class="phero__ctas">';
    $o .= '<a class="btn" href="' . h($pdf) . '" download>' . icon('download', 18) . h($f['download']) . ' <small class="pfhero__pdf">' . h($f['pdf']) . '</small></a>';
    $isDevices = $p['grp'] === 'devices';
    $o .= '<a class="btn btn--outline-light" href="' . h(lang_path($lang, $isDevices || $p['grp'] === 'vet' ? 'contact' : 'documentation')) . '">' . h($isDevices || $p['grp'] === 'vet' ? $t['produits']['contactCta'] : $t['produits']['docCta']) . '</a>';
    $vis = visual($p);
    $pk = $vis['photo'] ? '' : packshot($p, $lang);
    $o .= '</div></div><div class="pfhero__media' . ($vis['photo'] ? ' pfhero__media--photo' : '') . ($pk !== '' ? ' pfhero__media--pk' : '') . '">';
    if ($pk !== '') {
        $o .= $pk; // visuel « étiquette » (décoratif : le nom est dans le titre)
    } elseif ($vis['url'] !== '') {
        // Illustration de catégorie : décorative (alt vide) ; photo du produit : alt = nom.
        $o .= '<img src="' . h($vis['url']) . '" alt="' . ($vis['photo'] ? h($name) : '') . '" width="480" height="360" loading="eager" decoding="async">';    } else {
        $o .= '<span class="pfhero__ic" aria-hidden="true">' . icon($fam['icon'] ?? 'vial', 72) . '</span><span class="pfhero__brand" aria-hidden="true">TILAMED <b>Pharma</b></span>';
    }
    $o .= '</div></div><div class="duo-rule duo-rule--thick" aria-hidden="true"><span></span><span></span></div>';
    $o .= '<script type="application/ld+json">' . json_encode($ld, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) . '</script></section>';

    // Fiche technique
    $o .= '<section class="section pfsheet" aria-labelledby="pfsheet-title"><div class="wrap stepc__grid"><div>';
    $o .= '<p class="eyebrow" data-reveal>' . icon('book', 16, 'eyebrow__ic') . '<span>' . h($f['eyebrow']) . '</span></p>';
    $o .= '<h2 class="h2" id="pfsheet-title" data-reveal>' . h($f['techTitle']) . '</h2><span class="title-rule" aria-hidden="true"></span>';
    $o .= '<p class="lead stepc__intro" data-reveal>' . h($f['techIntro']) . '</p>';
    $o .= '<dl class="pfspec" data-reveal>';
    foreach (spec_rows($p, $lang) as [$label, $value, $dir]) {
        $o .= '<div><dt>' . h($label) . '</dt><dd' . ($dir !== '' ? ' dir="' . $dir . '"' : '') . '>' . h($value) . '</dd></div>';
    }
    $o .= '</dl>';
    $sections = '';
    foreach (FICHE_FIELDS as $field => $key) {
        [$v, $vl] = ptext($p, $lang, $field);
        if ($v === '') { continue; }
        if ($vl !== $lang) { $fallbacks[] = $vl; }
        $sections .= '<section class="pftext__item" data-reveal><h3>' . h($f['fields'][$key] ?? $field) . '</h3><div class="pftext__body"' . lang_attr($vl, $lang) . '>' . rich_text($v) . '</div></section>';
    }
    if ($fallbacks) {
        $fl = reset($fallbacks);
        $o .= '<p class="note pfsheet__note">' . icon('globe', 18) . h(str_replace('{lang}', site()['locales'][$fl]['name'] ?? $fl, $f['langNote'])) . '</p>';
    }
    if ($sections !== '') { $o .= '<div class="pftext">' . $sections . '</div>'; }
    $o .= '<p class="pfsheet__disc">' . h($f['disclaimer']) . '</p>';
    // « Produits fabriqués par TILAMED : en préparation » ne concerne que la fabrication (iv, liquids), pas les produits distribués.
    $legal = in_array($p['kind'], ['iv', 'liquids'], true) ? $t['ui']['legal'] : array_slice($t['ui']['legal'], 1);
    $o .= '<ul class="pcat__legal">' . implode('', array_map(fn ($x) => '<li>' . h($x) . '</li>', $legal)) . '</ul>';
    $o .= '</div><aside class="stepc__aside">';
    $o .= '<a class="sdoc" href="' . h($pdf) . '" download data-reveal>' . icon('download', 24) . '<span class="sdoc__t">' . h($f['techTitle']) . '</span><span class="sdoc__d">'
        . h($name) . ' · ' . h($f['pdf']) . ' · ' . h(site()['locales'][$lang]['name']) . '</span><span class="link-arrow">' . h($f['download']) . icon('arrow', 16, 'flip-rtl') . '</span></a>';
    $docs = documents($p['id']);
    if ($docs) {
        $o .= '<div class="sfacts" data-reveal><p class="sfacts__h">' . h($f['docsTitle']) . '</p><ul class="pfdocs">';
        foreach ($docs as $d) {
            $dl = $d['lang'] === '' ? $f['allLangs'] : (site()['locales'][$d['lang']]['name'] ?? $d['lang']);
            $o .= '<li><a href="' . h(document_url($p, $d, $lang)) . '" target="_blank" rel="noopener">' . icon('download', 18) . '<span><b>' . h($d['title']) . '</b><small>PDF · ' . h(human_size((int) $d['size'])) . ' · ' . h($dl) . '</small></span></a></li>';
        }
        $o .= '</ul></div>';
    }
    $o .= '<div class="sfacts pfask" data-reveal><p class="sfacts__h">' . h($f['askTitle']) . '</p><p class="pfask__t">' . h($f['askText']) . '</p><a class="link-arrow" href="' . h(lang_path($lang, 'contact')) . '">'
        . h($t['headerCta']) . icon('arrow', 16, 'flip-rtl') . '</a></div>';
    $o .= '</aside></div></section>';

    // Produits de la même catégorie
    $related = array_values(array_filter(products(['published'], $p['grp']), fn ($x) => $x['cat'] === $p['cat'] && $x['id'] !== $p['id']));
    if ($related) {
        $o .= '<section class="section prange pfrel" aria-labelledby="pfrel-title"><div class="wrap"><div class="sec-head sec-head--action"><div>'
            . '<p class="eyebrow" data-reveal>' . icon($fam['icon'] ?? 'vial', 16, 'eyebrow__ic') . '<span>' . h($groupLabel) . '</span></p>'
            . '<h2 class="h2" id="pfrel-title" data-reveal>' . h($f['related']) . '</h2><span class="title-rule" aria-hidden="true"></span></div>'
            . '<a class="link-arrow" href="' . h($famUrl) . '" data-reveal>' . h($f['backRange']) . icon('arrow', 16, 'flip-rtl') . '</a></div>'
            . '<ul class="pcards">' . implode('', array_map(fn ($x) => card($x, $lang), array_slice($related, 0, 6))) . '</ul></div></section>';
    }

    // Gabarit : titre, description, adresse, image de partage
    $title = $name . ' · TILAMED Pharma';
    $desc = mb_substr($use !== '' ? $use : $f['techIntro'], 0, 160);
    $html = str_replace(['%%TLM_TITLE%%', '%%TLM_DESC%%', '/produits/fiche-modele/'], [h($title), h($desc), '/produits/' . $p['slug'] . '/'], $html);
    if ($p['image'] !== '') {
        $html = (string) preg_replace('/(<meta property="og:image" content=")[^"]*(")/', '${1}' . site_url() . image_url($p) . '$2', $html);
    }
    if ($preview && $p['state'] !== 'published') {
        $html = str_replace('</head>', '<meta name="robots" content="noindex, nofollow"></head>', $html);
    }
    return fill($html, ['fiche' => $o]);
}
