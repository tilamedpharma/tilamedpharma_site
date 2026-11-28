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

/**
 * Visuel d'un produit : photo du back office > visuel « étiquette » (packshot.php) > illustration de la catégorie.
 * $alt : texte alternatif d'une photo (les visuels générés et les illustrations sont décoratifs).
 */
function product_visual(array $p, string $lang, string $alt = '', bool $eager = false): string
{
    $vis = visual($p);
    if ($vis['photo']) {
        return '<img class="pv pv--photo" src="' . h($vis['url']) . '" alt="' . h($alt) . '" width="480" height="360" loading="' . ($eager ? 'eager' : 'lazy') . '" decoding="async">';
    }
    $pk = packshot($p, $lang);
    if ($pk !== '') { return $pk; }
    return $vis['url'] !== '' ? '<img class="pv" src="' . h($vis['url']) . '" alt="" width="480" height="360" loading="' . ($eager ? 'eager' : 'lazy') . '" decoding="async">' : '';
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

    // Mise en page « Vitrine » (validée le 28/11/2026, planche src/pages/_planches/fiche.astro, proposition C) :
    // plateau (visuel + étiquettes), bande « En bref », rubriques en accordéon, bandeau contact, produits similaires.
    $o = '';
    if ($preview) {
        $o .= '<div class="pfpreview"><div class="wrap">' . icon('eye', 18) . '<span>' . h($f['preview']) . '</span><a href="/admin/produits/' . $p['id'] . '">Modifier dans le back office</a></div></div>';
    }
    $b = $t['browse'] ?? [];
    $catLabel = cat_label($p['cat'], $lang);
    $made = in_array($p['kind'], ['iv', 'liquids'], true);
    // Liens vers le formulaire de contact, objet et produit pré-remplis (voir ContactPage.astro)
    $contact = fn (string $objet = '') => lang_path($lang, 'contact') . '?' . http_build_query(array_filter(['objet' => $objet, 'produit' => $name]));

    // Précédent / suivant dans la même catégorie (ordre du catalogue)
    $siblings = array_values(array_filter(products(['published'], $p['grp']), fn ($x) => $x['cat'] === $p['cat']));
    $idx = array_search($p['id'], array_column($siblings, 'id'), true);
    $prev = ($idx !== false && $idx > 0) ? $siblings[$idx - 1] : null;
    $next = ($idx !== false && $idx < count($siblings) - 1) ? $siblings[$idx + 1] : null;

    // Informations clés : étiquettes autour du visuel
    $formats = array_map(fn ($x) => format_label($lang, (string) $x), $p['formats']);
    $species = $p['species'] !== '' ? (string) ($f['speciesList'][$p['species']] ?? '') : '';
    $facts = [];
    if ($formats) { $facts[] = ['vial', $t['ui']['formats'], implode(' · ', $formats)]; }
    if ($p['route'] !== '') { $facts[] = ['route', $t['ui']['route'], route_label($lang, $p['route'])]; }
    elseif ($species !== '') { $facts[] = ['paw', $f['species'], $species]; }
    if ($p['pack'] !== '' && isset($t['packs'][$p['pack']])) { $facts[] = ['box', $t['ui']['pack'], $t['packs'][$p['pack']]]; }
    if ($p['line'] !== '' && isset($t['lines'][$p['line']])) { $facts[] = ['factory', $t['ui']['line'], $t['lines'][$p['line']]]; }
    $facts = array_slice($facts, 0, 4);
    $tag = fn (array $k) => '<li>' . icon($k[0], 18) . '<span><small>' . h($k[1]) . '</small><bdi>' . h($k[2]) . '</bdi></span></li>';
    $half = (int) ceil(count($facts) / 2);

    // Plateau
    $o .= '<section class="pfc" aria-labelledby="phero-title"><div class="wrap">';
    $o .= '<div class="pfc-top"><nav class="crumbs crumbs--dark" aria-label="' . h($t['breadcrumb']) . '"><ol>';
    foreach ($crumbs as [$label, $href]) {
        $o .= '<li>' . ($href ? '<a href="' . h($href) . '">' . h($label) . '</a>' : '<span aria-current="page">' . h($label) . '</span>') . '</li>';
    }
    $o .= '</ol></nav>';
    if ($prev || $next) {
        $o .= '<nav class="pfc-pn" aria-label="' . h($catLabel) . '">';
        if ($prev) {
            [$pn] = ptext($prev, $lang, 'name');
            $o .= '<a href="' . h(product_url($prev, $lang)) . '" rel="prev" title="' . h($pn) . '">' . icon('arrow', 14, 'flip-rtl pfc-pn__back') . '<span>' . h($b['prev'] ?? '') . '</span></a>';
        }
        $o .= '<span class="pfc-pn__pos" dir="ltr">' . ($idx + 1) . ' / ' . count($siblings) . '</span>';
        if ($next) {
            [$nn] = ptext($next, $lang, 'name');
            $o .= '<a href="' . h(product_url($next, $lang)) . '" rel="next" title="' . h($nn) . '"><span>' . h($b['next'] ?? '') . '</span>' . icon('arrow', 14, 'flip-rtl') . '</a>';
        }
        $o .= '</nav>';
    }
    $o .= '</div>';
    $o .= '<p class="pfc-eyebrow"><a href="' . h($famUrl) . '">' . h($groupLabel) . '</a> · <a href="' . h(lang_path($lang, 'produits') . '?c=' . rawurlencode($p['cat'])) . '">' . h($catLabel) . '</a></p>';
    $o .= '<h1 class="pfc-title" id="phero-title"' . lang_attr($nl, $lang) . '>' . h($name) . '</h1>';
    if ($use !== '') { $o .= '<p class="pfc-lead"' . lang_attr($ul, $lang) . '>' . h($use) . '</p>'; }
    $o .= '<p class="pfc-st pfc-st--' . h($p['kind']) . '">' . h($st['badge']) . '</p>';
    $o .= '<div class="pfc-scene' . ($facts ? '' : ' pfc-scene--solo') . '">';
    if ($facts) { $o .= '<ul class="pfc-tags pfc-tags--s">' . implode('', array_map($tag, array_slice($facts, 0, $half))) . '</ul>'; }
    $o .= '<div class="pfc-v">' . product_visual($p, $lang, $name, true) . '</div>';
    if ($facts) { $o .= '<ul class="pfc-tags pfc-tags--e">' . implode('', array_map($tag, array_slice($facts, $half))) . '</ul>'; }
    $o .= '</div><div class="pfc-ctas">';
    $o .= '<a class="btn" href="' . h($pdf) . '" download>' . icon('download', 18) . h($f['download']) . ' <small class="pfc-pdf">' . h($f['pdf']) . '</small></a>';
    $o .= '<a class="btn btn--ghost" href="' . h($contact('cotation')) . '">' . h($f['quote'] ?? '') . '</a>';
    $o .= '</div></div>';
    $o .= '<script type="application/ld+json">' . json_encode($ld, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_HEX_TAG) . '</script></section>';

    // Bande « En bref » : identité du produit (les étiquettes ci-dessus donnent déjà présentation, voie, conditionnement, ligne)
    $band = [[$groupLabel, $f['range']], [$catLabel, $f['category']]];
    if ($made && $p['phase'] && isset($t['phases'][(string) $p['phase']])) {
        $ph = explode(' · ', (string) $t['phases'][(string) $p['phase']], 2);
        $band[] = [$ph[0], $ph[1] ?? $f['phase']];
    } else {
        $nt = explode(' · ', (string) $st['note'], 2);
        $band[] = [$nt[0], $nt[1] ?? ''];
    }
    if ($p['atc'] !== '') { $band[] = [$p['atc'], $f['atc']]; }
    $o .= '<section class="pfc-band" aria-label="' . h($f['keyFacts']) . '"><div class="wrap"><p class="pfc-band__h">' . h($f['keyFacts']) . '</p><ul>';
    foreach ($band as [$v, $l]) { $o .= '<li><b><bdi>' . h($v) . '</bdi></b>' . ($l !== '' ? '<span>' . h($l) . '</span>' : '') . '</li>'; }
    $o .= '</ul></div></section>';

    // Rubriques en accordéon (seules celles qui sont remplies), documents
    $acc = '';
    foreach (FICHE_FIELDS as $field => $key) {
        [$v, $vl] = ptext($p, $lang, $field);
        if ($v === '') { continue; }
        if ($vl !== $lang) { $fallbacks[] = $vl; }
        $acc .= '<details class="pfc-acc"' . ($acc === '' ? ' open' : '') . '><summary><h2>' . h($f['fields'][$key] ?? $field) . '</h2>' . icon('chevron', 20) . '</summary><div class="pfc-acc__b"' . lang_attr($vl, $lang) . '>' . rich_text($v) . '</div></details>';
    }
    $docs = documents($p['id']);
    if ($docs) {
        $acc .= '<details class="pfc-acc"' . ($acc === '' ? ' open' : '') . '><summary><h2>' . h($f['docsTitle']) . '</h2>' . icon('chevron', 20) . '</summary><ul class="pfc-docs">';
        foreach ($docs as $d) {
            $dl = $d['lang'] === '' ? $f['allLangs'] : (site()['locales'][$d['lang']]['name'] ?? $d['lang']);
            $o_d = '<li><a href="' . h(document_url($p, $d, $lang)) . '" target="_blank" rel="noopener"><span class="pfc-docs__ic">' . icon('download', 20) . '</span><span><b>' . h($d['title']) . '</b><small>PDF · ' . h(human_size((int) $d['size'])) . ' · ' . h($dl) . '</small></span>' . icon('arrow', 16, 'flip-rtl') . '</a></li>';
            $acc .= $o_d;
        }
        $acc .= '</ul></details>';
    }
    $o .= '<section class="pfc-body"><div class="wrap pfc-body__in">';
    if ($fallbacks) {
        $fl = reset($fallbacks);
        $o .= '<p class="note pfc-note">' . icon('globe', 18) . h(str_replace('{lang}', site()['locales'][$fl]['name'] ?? $fl, $f['langNote'])) . '</p>';
    }
    if ($acc !== '') {
        $o .= $acc;
    } else {
        // Fiche sans textes détaillés : le dossier complet est communiqué sur demande
        $o .= '<div class="pfc-req"><span class="pfc-req__ic">' . icon('book', 26) . '</span><div><h2 class="pfc-req__t">' . h($f['onRequestTitle']) . '</h2><p>' . h($f['onRequest']) . '</p></div>'
            . '<a class="btn" href="' . h($contact('doc')) . '">' . h($f['requestFile'] ?? '') . '</a></div>';
    }
    $o .= '<p class="pfc-disc">' . h($f['disclaimer']) . '</p>';
    // « Produits fabriqués par TILAMED : en préparation » ne concerne que la fabrication (iv, liquids), pas les produits distribués.
    $legal = $made ? $t['ui']['legal'] : array_slice($t['ui']['legal'], 1);
    $o .= '<ul class="pcat__legal">' . implode('', array_map(fn ($x) => '<li>' . h($x) . '</li>', $legal)) . '</ul>';
    $o .= '</div></section>';

    // Bandeau contact
    $o .= '<section class="pfc-cta"><div class="wrap pfc-cta__in"><div><h2 class="pfc-cta__t">' . h($f['askTitle']) . '</h2><p>' . h($f['askText']) . '</p></div>'
        . '<a class="btn btn--light" href="' . h($contact()) . '">' . h($t['headerCta']) . icon('arrow', 18, 'flip-rtl') . '</a></div></section>';

    // Produits similaires : même catégorie d'abord, puis même gamme (4 au plus)
    $others = array_values(array_filter(products(['published'], $p['grp']), fn ($x) => $x['id'] !== $p['id']));
    usort($others, fn ($a, $c) => ($a['cat'] === $p['cat'] ? 0 : 1) <=> ($c['cat'] === $p['cat'] ? 0 : 1));
    $related = array_slice($others, 0, 4);
    if ($related) {
        $o .= '<section class="section pfc-rel" aria-labelledby="pfrel-title"><div class="wrap"><div class="pfc-rel__h"><h2 class="h2" id="pfrel-title">' . h($f['related']) . '</h2>'
            . '<a class="link-arrow" href="' . h($famUrl) . '">' . h($f['backRange']) . icon('arrow', 16, 'flip-rtl') . '</a></div><ul class="pfc-grid">';
        foreach ($related as $x) {
            [$xn, $xl] = ptext($x, $lang, 'name');
            $xf = implode(' · ', array_map(fn ($v) => format_label($lang, (string) $v), $x['formats']));
            $xs = $t['status'][$x['kind']]['badge'] ?? '';
            $o .= '<li><a href="' . h(product_url($x, $lang)) . '"><span class="pfc-grid__v">' . product_visual($x, $lang, '', false) . '</span><b' . lang_attr($xl, $lang) . '>' . h($xn) . '</b><small dir="auto">' . h($xf !== '' ? $xf : $xs) . '</small></a></li>';
        }
        $o .= '</ul></div></section>';
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
