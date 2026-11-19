<?php
/**
 * TILAMED Pharma · lecture des produits, catégories et documents (site public et back office).
 */
declare(strict_types=1);

namespace Tlm;

require_once __DIR__ . '/bootstrap.php';

/** Catégories, triées par gamme puis position : [id => ['id','grp','position','labels'=>[lang=>…]]]. */
function categories(bool $fresh = false): array
{
    static $cache = null;
    if ($cache === null || $fresh) {
        $cache = [];
        $order = array_flip(GROUPS);
        $rows = db()->query('SELECT * FROM categories')->fetchAll();
        usort($rows, fn ($a, $b) => [$order[$a['grp']] ?? 9, (int) $a['position'], $a['id']] <=> [$order[$b['grp']] ?? 9, (int) $b['position'], $b['id']]);
        foreach ($rows as $r) {
            $r['labels'] = json_decode($r['labels'], true) ?: [];
            $cache[$r['id']] = $r;
        }
    }
    return $cache;
}

function cat_label(string $id, string $lang): string
{
    $l = categories()[$id]['labels'] ?? [];
    foreach ([$lang, 'en', 'fr'] as $x) {
        if (($l[$x] ?? '') !== '') { return $l[$x]; }
    }
    return $id;
}

/**
 * Produits avec leurs textes (toutes langues), triés comme sur le site (gamme, catégorie, position).
 * @param string[]|null $states états retenus (null = tous)
 */
function products(?array $states = ['published'], ?string $group = null): array
{
    $sql = 'SELECT * FROM products';
    $where = [];
    $args = [];
    if ($states !== null) {
        $where[] = 'state IN (' . implode(',', array_fill(0, count($states), '?')) . ')';
        array_push($args, ...$states);
    }
    if ($group !== null) { $where[] = 'grp = ?'; $args[] = $group; }
    if ($where) { $sql .= ' WHERE ' . implode(' AND ', $where); }
    $st = db()->prepare($sql);
    $st->execute($args);
    $rows = $st->fetchAll();
    if (!$rows) { return []; }
    $byId = [];
    foreach ($rows as $r) { $byId[(int) $r['id']] = hydrate($r); }
    $texts = db()->query('SELECT * FROM product_texts WHERE product_id IN (' . implode(',', array_keys($byId)) . ')')->fetchAll();
    foreach ($texts as $t) { $byId[(int) $t['product_id']]['texts'][$t['lang']] = $t; }
    $list = array_values($byId);
    sort_products($list);
    return $list;
}

function sort_products(array &$list): void
{
    $g = array_flip(GROUPS);
    $cats = categories();
    usort($list, fn ($a, $b) => [$g[$a['grp']] ?? 9, (int) ($cats[$a['cat']]['position'] ?? 999), (int) $a['position'], (int) $a['id']]
        <=> [$g[$b['grp']] ?? 9, (int) ($cats[$b['cat']]['position'] ?? 999), (int) $b['position'], (int) $b['id']]);
}

function hydrate(array $r): array
{
    $r['id'] = (int) $r['id'];
    $r['position'] = (int) $r['position'];
    $r['phase'] = $r['phase'] === null ? null : (int) $r['phase'];
    $r['formats'] = json_decode($r['formats'] ?: '[]', true) ?: [];
    $r['texts'] = [];
    return $r;
}

function product(int $id): ?array
{
    $st = db()->prepare('SELECT * FROM products WHERE id = ?');
    $st->execute([$id]);
    $r = $st->fetch();
    return $r ? with_texts(hydrate($r)) : null;
}

function product_by_slug(string $slug): ?array
{
    $st = db()->prepare('SELECT * FROM products WHERE slug = ?');
    $st->execute([$slug]);
    $r = $st->fetch();
    return $r ? with_texts(hydrate($r)) : null;
}

function with_texts(array $p): array
{
    $st = db()->prepare('SELECT * FROM product_texts WHERE product_id = ?');
    $st->execute([$p['id']]);
    foreach ($st->fetchAll() as $t) { $p['texts'][$t['lang']] = $t; }
    return $p;
}

/**
 * Texte d'un champ dans la langue demandée, avec repli anglais puis français (champ par champ).
 * @return array{0:string,1:string} [texte, langue réellement utilisée]
 */
function ptext(array $p, string $lang, string $field): array
{
    foreach (array_unique([$lang, 'en', 'fr']) as $l) {
        $v = trim((string) ($p['texts'][$l][$field] ?? ''));
        if ($v !== '') { return [$v, $l]; }
    }
    return ['', $lang];
}

function product_url(array $p, string $lang): string
{
    return lang_path($lang, 'produits/' . $p['slug']);
}

function pdf_url(array $p, string $lang): string
{
    return product_url($p, $lang) . 'fiche-technique.pdf';
}

function image_url(array $p): string
{
    return $p['image'] !== '' ? '/api/fiche.php?img=' . rawurlencode($p['image']) : '';
}

function documents(int $productId): array
{
    $st = db()->prepare('SELECT * FROM documents WHERE product_id = ? ORDER BY position, id');
    $st->execute([$productId]);
    return $st->fetchAll();
}

function document_url(array $p, array $d, string $lang): string
{
    $name = slugify(pathinfo($d['original'] ?: $d['title'], PATHINFO_FILENAME)) . '.pdf';
    return product_url($p, $lang) . 'documents/' . (int) $d['id'] . '/' . $name;
}

/** Nombre de rubriques de fiche technique remplies (en français). */
function fiche_filled(array $p, string $lang = 'fr'): int
{
    $n = 0;
    foreach (array_keys(FICHE_FIELDS) as $f) {
        if (trim((string) ($p['texts'][$lang][$f] ?? '')) !== '') { $n++; }
    }
    return $n;
}

/** Taille de fichier lisible (Ko / Mo). */
function human_size(int $bytes): string
{
    return $bytes >= 1048576 ? number_format($bytes / 1048576, 1, ',', ' ') . ' Mo' : max(1, (int) round($bytes / 1024)) . ' Ko';
}

/** Vide le cache des fiches PDF (d'un produit, ou de tous). */
function clear_pdf_cache(?int $productId = null): void
{
    foreach (glob(data_dir() . '/cache/pdf/' . ($productId === null ? '' : $productId . '-') . '*.pdf') ?: [] as $f) { @unlink($f); }
}
