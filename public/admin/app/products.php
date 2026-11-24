<?php
/**
 * Back office TILAMED · produits : liste, ajout, modification, mise en ligne, masquage, archivage,
 * duplication, suppression, photo et documents PDF.
 */
declare(strict_types=1);

namespace Tlm\Admin;

use function Tlm\{h, db, now, current_user, is_admin, audit, products, product, categories, cat_label, slugify, fiche_filled, clear_pdf_cache, data_dir, product_url, pdf_url, documents, document_url, image_url, lang_path, visual, category_image};

use const Tlm\{LANGS, GROUPS, KINDS, STATES, TEXT_FIELDS, FICHE_FIELDS, RESERVED_SLUGS};

const MAX_IMAGE = 8 * 1024 * 1024;
const MAX_DOC = 15 * 1024 * 1024;

/** Libellés français des rubriques de la fiche + aides de saisie. */
function fiche_labels(): array
{
    $l = cat_t()['fiche']['fields'];
    return [
        'composition' => [$l['composition'], 'Substance(s) active(s) et dosage, excipients. Ex. : « Chlorure de sodium 9 g · Eau pour préparations injectables q.s.p. 1 000 ml ».'],
        'form' => [$l['form'], 'Forme pharmaceutique, contenant, aspect. Ex. : « Solution injectable pour perfusion, flacon plastique ».'],
        'indications' => [$l['indications'], ''],
        'dosage' => [$l['dosage'], ''],
        'contraindications' => [$l['contraindications'], ''],
        'warnings' => [$l['warnings'], ''],
        'storage' => [$l['storage'], 'Ex. : « À conserver à une température ne dépassant pas 30 °C. »'],
        'shelf_life' => [$l['shelfLife'], 'Ex. : « 3 ans ».'],
        'specs' => [$l['specs'], 'Surtout pour les dispositifs médicaux : matériau, dimensions, stérilisation, normes…'],
        'regulatory' => [$l['regulatory'], 'Ex. : « Autorisation de mise sur le marché en cours ».'],
    ];
}

function group_options(): array
{
    $t = cat_t();
    $o = [];
    foreach (GROUPS as $g) { $o[$g] = $t['groups'][$g]['label']; }
    return $o;
}

function kind_options(): array
{
    $t = cat_t();
    $o = [];
    foreach (KINDS as $k) { $o[$k] = $t['status'][$k]['badge'] . ' — ' . $t['status'][$k]['note']; }
    return $o;
}

/** Catégories groupées par gamme (pour les listes déroulantes). */
function category_options(bool $withEmpty = false): array
{
    $groups = group_options();
    $o = $withEmpty ? ['' => 'Toutes les catégories'] : [];
    foreach (categories() as $c) { $o[$groups[$c['grp']] ?? $c['grp']][$c['id']] = $c['labels']['fr'] ?? $c['id']; }
    return $o;
}

function product_name(array $p): string
{
    return trim((string) ($p['texts']['fr']['name'] ?? '')) ?: '(sans nom)';
}

/** Met à jour la date et l'auteur de la dernière modification (et invalide la fiche PDF). */
function touch_product(int $id): void
{
    db()->prepare('UPDATE products SET updated_at = ?, updated_by = ? WHERE id = ?')->execute([now(), current_user()['name'] ?? '', $id]);
    clear_pdf_cache($id);
}

/* ======================================================================
   Liste
   ====================================================================== */

function products_page(): void
{
    $all = products(null);
    $state = (string) ($_GET['etat'] ?? '');
    if (!in_array($state, ['', 'published', 'hidden', 'archived'], true)) { $state = ''; }
    $q = trim((string) ($_GET['q'] ?? ''));
    $grp = (string) ($_GET['gamme'] ?? '');
    $cat = (string) ($_GET['categorie'] ?? '');
    $todo = (string) ($_GET['a-completer'] ?? '');
    $counts = ['' => 0, 'published' => 0, 'hidden' => 0, 'archived' => 0];
    foreach ($all as $p) {
        $counts[$p['state']]++;
        if ($p['state'] !== 'archived') { $counts['']++; }
    }
    $words = array_filter(preg_split('/\s+/u', \Tlm\norm($q)) ?: []);
    $list = array_values(array_filter($all, function ($p) use ($state, $grp, $cat, $todo, $words) {
        if ($state === '' ? $p['state'] === 'archived' : $p['state'] !== $state) { return false; }
        if ($grp !== '' && $p['grp'] !== $grp) { return false; }
        if ($cat !== '' && $p['cat'] !== $cat) { return false; }
        if ($todo === 'fiche' && fiche_filled($p) > 0) { return false; }
        if ($todo === 'traduction') {
            $missing = false;
            foreach (LANGS as $l) { if (trim((string) ($p['texts'][$l]['name'] ?? '')) === '') { $missing = true; } }
            if (!$missing) { return false; }
        }
        if ($words) {
            $hay = \Tlm\norm(implode(' ', array_merge(array_map(fn ($t) => $t['name'] . ' ' . $t['use'], $p['texts']), [$p['code'] ?? '', $p['slug'], $p['keywords']])));
            foreach ($words as $w) { if (!str_contains($hay, $w)) { return false; } }
        }
        return true;
    }));

    $qs = fn (array $over) => url('produits') . (($s = http_build_query(array_filter(array_merge(['etat' => $state, 'q' => $q, 'gamme' => $grp, 'categorie' => $cat, 'a-completer' => $todo], $over), fn ($v) => $v !== ''))) !== '' ? '?' . $s : '');
    $t = cat_t();
    $o = page_head('Produits', count($list) . ' produit' . (count($list) > 1 ? 's' : '') . ' affiché' . (count($list) > 1 ? 's' : '') . ' · ' . $counts['published'] . ' en ligne sur le site',
        '<a class="abtn" href="' . url('produits/nouveau') . '">' . aicon('plus') . 'Ajouter un produit</a>');
    $o .= '<nav class="asegs" aria-label="État des produits">';
    foreach (['' => 'Actifs', 'published' => 'En ligne', 'hidden' => 'Masqués', 'archived' => 'Archives'] as $k => $label) {
        $o .= '<a href="' . h($qs(['etat' => $k])) . '"' . ($state === $k ? ' aria-current="page"' : '') . '>' . h($label) . ' <span>' . $counts[$k] . '</span></a>';
    }
    $o .= '</nav>';
    $o .= '<form class="afilters" method="get" action="' . url('produits') . '" data-autosubmit>'
        . ($state !== '' ? '<input type="hidden" name="etat" value="' . h($state) . '">' : '')
        . ($todo !== '' ? '<input type="hidden" name="a-completer" value="' . h($todo) . '">' : '')
        . '<label class="asearch">' . aicon('search') . '<span class="sr-only">Rechercher</span><input type="search" name="q" value="' . h($q) . '" placeholder="Nom, référence, mot-clé…"></label>'
        . '<label><span class="sr-only">Gamme</span>' . select('gamme', ['' => 'Toutes les gammes'] + group_options(), $grp) . '</label>'
        . '<label><span class="sr-only">Catégorie</span>' . select('categorie', category_options(true), $cat) . '</label>'
        . '<button class="abtn abtn--ghost" type="submit">Filtrer</button>'
        . ($q !== '' || $grp !== '' || $cat !== '' || $todo !== '' ? '<a class="alink" href="' . h(url('produits') . ($state !== '' ? '?etat=' . $state : '')) . '">Effacer les filtres</a>' : '')
        . '</form>';
    if ($todo !== '') {
        $o .= '<p class="anote">' . aicon('filter', 18) . ($todo === 'fiche' ? 'Produits sans aucune rubrique de fiche technique (en français).' : 'Produits dont le nom manque dans au moins une langue.') . '</p>';
    }
    if (!$list) {
        $o .= '<div class="aempty-card">' . aicon('search', 28) . '<p>Aucun produit ne correspond.</p></div>';
        layout('Produits', $o, 'products');
    }

    $bulk = ['' => 'Action groupée…', 'published' => 'Mettre en ligne', 'hidden' => 'Masquer', 'archived' => 'Archiver'];
    if (is_admin()) { $bulk['delete'] = 'Supprimer définitivement'; }
    $o .= '<form id="bulk" method="post" action="' . url('produits/groupe') . '" data-confirm-bulk>' . csrf_field() . '</form>';
    $o .= '<div class="abulk" data-bulk><label class="acheck"><input type="checkbox" data-check-all aria-label="Tout sélectionner"><span></span></label><span class="abulk__n" data-bulk-n>Sélectionnez des produits pour agir sur plusieurs à la fois.</span>'
        . select('action', $bulk, '', ['form' => 'bulk', 'aria-label' => 'Action groupée', 'data-bulk-action' => true]) . '<button class="abtn abtn--sm" type="submit" form="bulk" data-bulk-go disabled>Appliquer</button></div>';
    $o .= '<div class="atable-wrap"><table class="atable aprod"><thead><tr><th class="atable__ck"><span class="sr-only">Sélection</span></th><th>Produit</th><th>Gamme · catégorie</th><th>Langues</th><th>Fiche</th><th>État</th><th>Modifié</th><th><span class="sr-only">Actions</span></th></tr></thead><tbody>';
    foreach ($list as $p) {
        $id = $p['id'];
        $langs = '';
        foreach (LANGS as $l) {
            $on = trim((string) ($p['texts'][$l]['name'] ?? '')) !== '';
            $langs .= '<span class="alang' . ($on ? ' is-on' : '') . '" title="' . h(LANG_NAMES[$l]) . ($on ? ' : traduit' : ' : à traduire') . '">' . strtoupper($l) . '</span>';
        }
        $n = fiche_filled($p);
        $vis = visual($p);
        $thumb = $vis['url'] !== '' ? '<img class="aprod__img" src="' . h($vis['url']) . '" alt="" width="44" height="44" loading="lazy">' : '<span class="aprod__img aprod__img--none" aria-hidden="true">' . aicon('vial', 18) . '</span>';
        $menu = '<a href="' . url('produits/' . $id) . '">' . aicon('check') . 'Modifier</a><a href="' . h($p['state'] === 'published' ? product_url($p, 'fr') : url('produits/' . $id . '/apercu')) . '" target="_blank" rel="noopener">' . aicon('eye') . ($p['state'] === 'published' ? 'Voir sur le site' : 'Aperçu') . '</a>';
        if ($p['state'] !== 'published') { $menu .= post_button('produits/' . $id . '/etat', 'Mettre en ligne', 'amenu__btn', ['etat' => 'published'], '', 'check-circle'); }
        if ($p['state'] === 'published') { $menu .= post_button('produits/' . $id . '/etat', 'Masquer', 'amenu__btn', ['etat' => 'hidden'], '', 'filter'); }
        if ($p['state'] !== 'archived') { $menu .= post_button('produits/' . $id . '/etat', 'Archiver', 'amenu__btn', ['etat' => 'archived'], 'Archiver « ' . product_name($p) . ' » ? Il sera retiré du site (restauration possible).', 'box'); }
        else { $menu .= post_button('produits/' . $id . '/etat', 'Restaurer (masqué)', 'amenu__btn', ['etat' => 'hidden'], '', 'recycle'); }
        $menu .= post_button('produits/' . $id . '/dupliquer', 'Dupliquer', 'amenu__btn', [], '', 'layers');
        $o .= '<tr><td class="atable__ck"><label class="acheck"><input type="checkbox" name="ids[]" value="' . $id . '" form="bulk" data-check aria-label="Sélectionner ' . h(product_name($p)) . '"><span></span></label></td>'
            . '<td data-label="Produit"><a class="aprod__name" href="' . url('produits/' . $id) . '">' . $thumb . '<span><b>' . h(product_name($p)) . '</b><small>' . h(strtoupper((string) ($p['code'] ?? '')) ?: '—') . ' · ' . h($t['status'][$p['kind']]['badge'] ?? '') . '</small></span></a></td>'
            . '<td data-label="Gamme"><span class="aprod__g">' . h($t['groups'][$p['grp']]['label'] ?? $p['grp']) . '</span><small class="aprod__c">' . h(cat_label($p['cat'], 'fr')) . '</small></td>'
            . '<td data-label="Langues"><span class="alangs">' . $langs . '</span></td>'
            . '<td data-label="Fiche"><span class="ameter" title="' . $n . ' rubrique(s) sur ' . count(FICHE_FIELDS) . ' remplie(s) en français"><span style="--v:' . round($n / count(FICHE_FIELDS) * 100) . '%"></span></span><small>' . $n . '/' . count(FICHE_FIELDS) . '</small></td>'
            . '<td data-label="État">' . state_badge($p['state']) . '</td>'
            . '<td data-label="Modifié"><small class="aprod__d">' . h(dt($p['updated_at'], false)) . '<br>' . h(str_starts_with($p['updated_by'], 'Reprise') ? 'Reprise ancien site' : $p['updated_by']) . '</small></td>'
            . '<td class="atable__act"><details class="amenu"><summary aria-label="Plus d\'actions">' . aicon('menu') . '</summary><div class="amenu__pop">' . $menu . '</div></details></td></tr>';
    }
    $o .= '</tbody></table></div>';
    layout('Produits', $o, 'products');
}

function products_bulk(): void
{
    $ids = array_values(array_filter(array_map('intval', (array) ($_POST['ids'] ?? []))));
    $action = (string) ($_POST['action'] ?? '');
    if (!$ids || !in_array($action, ['published', 'hidden', 'archived', 'delete'], true)) {
        flash('error', 'Choisissez au moins un produit et une action.');
        back('produits');
    }
    if ($action === 'delete' && !is_admin()) { forbidden(); }
    $n = 0;
    foreach ($ids as $id) {
        $p = product($id);
        if (!$p) { continue; }
        if ($action === 'delete') { delete_product($p); }
        elseif ($p['state'] !== $action) { set_state($p, $action); }
        $n++;
    }
    $labels = ['published' => 'mis en ligne', 'hidden' => 'masqué(s)', 'archived' => 'archivé(s)', 'delete' => 'supprimé(s)'];
    flash('success', $n . ' produit(s) ' . $labels[$action] . '.');
    back('produits');
}

/* ======================================================================
   Changements d'état, duplication, suppression
   ====================================================================== */

function set_state(array $p, string $state): void
{
    db()->prepare('UPDATE products SET state = ? WHERE id = ?')->execute([$state, $p['id']]);
    touch_product($p['id']);
    audit('product.' . $state, 'product', $p['id'], product_name($p));
}

function product_state(int $id): void
{
    $p = product($id) ?? not_found();
    $state = (string) ($_POST['etat'] ?? '');
    if (!in_array($state, STATES, true)) { back('produits/' . $id); }
    set_state($p, $state);
    $msg = ['published' => 'est maintenant <b>en ligne</b> sur le site.', 'hidden' => 'est <b>masqué</b> : il n\'apparaît plus sur le site.', 'archived' => 'est <b>archivé</b> et retiré du site.'];
    flash('success', '« ' . h(product_name($p)) . ' » ' . $msg[$state]);
    back('produits/' . $id);
}

function product_duplicate(int $id): void
{
    $p = product($id) ?? not_found();
    $pdo = db();
    $pdo->beginTransaction();
    $slug = unique_slug($p['slug'] . '-copie');
    $u = current_user()['name'] ?? '';
    $pdo->prepare('INSERT INTO products (code, slug, grp, kind, cat, state, position, formats, route, line, phase, pack, species, atc, keywords, image, created_at, updated_at, created_by, updated_by)
                   VALUES (NULL, ?, ?, ?, ?, \'hidden\', ?, ?, ?, ?, ?, ?, ?, ?, ?, \'\', ?, ?, ?, ?)')
        ->execute([$slug, $p['grp'], $p['kind'], $p['cat'], $p['position'] + 1, json_encode($p['formats'], JSON_UNESCAPED_UNICODE), $p['route'], $p['line'], $p['phase'], $p['pack'], $p['species'], $p['atc'], $p['keywords'], now(), now(), $u, $u]);
    $new = (int) $pdo->lastInsertId();
    $cols = implode(', ', TEXT_FIELDS);
    $pdo->prepare("INSERT INTO product_texts (product_id, lang, {$cols}) SELECT ?, lang, {$cols} FROM product_texts WHERE product_id = ?")->execute([$new, $id]);
    $pdo->prepare("UPDATE product_texts SET name = name || ' (copie)' WHERE product_id = ? AND lang = 'fr'")->execute([$new]);
    $pdo->commit();
    audit('product.duplicate', 'product', $new, product_name($p) . ' (copie)');
    flash('success', 'Copie créée (masquée). Modifiez-la puis mettez-la en ligne. La photo et les documents ne sont pas copiés.');
    redirect('produits/' . $new);
}

function delete_product(array $p): void
{
    foreach (documents($p['id']) as $d) { @unlink(data_dir() . '/uploads/docs/' . basename($d['file'])); }
    if ($p['image'] !== '') { @unlink(data_dir() . '/uploads/images/' . basename($p['image'])); }
    clear_pdf_cache($p['id']);
    db()->prepare('DELETE FROM products WHERE id = ?')->execute([$p['id']]);
    audit('product.delete', 'product', $p['id'], product_name($p));
}

function product_delete(int $id): void
{
    $p = product($id) ?? not_found();
    delete_product($p);
    flash('success', '« ' . h(product_name($p)) . ' » a été supprimé définitivement.');
    redirect('produits');
}

function product_preview(int $id): void
{
    $p = product($id) ?? not_found();
    redirect(product_url($p, 'fr'));
}

/* ======================================================================
   Formulaire produit
   ====================================================================== */

function unique_slug(string $base, int $exceptId = 0): string
{
    $base = slugify($base);
    if (in_array($base, RESERVED_SLUGS, true)) { $base .= '-produit'; }
    $slug = $base;
    $st = db()->prepare('SELECT COUNT(*) FROM products WHERE slug = ? AND id != ?');
    for ($i = 2; ; $i++) {
        $st->execute([$slug, $exceptId]);
        if ((int) $st->fetchColumn() === 0) { return $slug; }
        $slug = substr($base, 0, 75) . '-' . $i;
    }
}

/** Valeurs du formulaire : produit existant, ou saisie envoyée. */
function form_values(?array $p): array
{
    $v = [
        'grp' => $p['grp'] ?? 'serum', 'cat' => $p['cat'] ?? '', 'kind' => $p['kind'] ?? 'iv', 'state' => $p['state'] ?? 'hidden',
        'slug' => $p['slug'] ?? '', 'code' => (string) ($p['code'] ?? ''), 'position' => (string) ($p['position'] ?? ''),
        'formats' => implode("\n", $p['formats'] ?? []), 'route' => $p['route'] ?? '', 'line' => $p['line'] ?? '', 'phase' => (string) ($p['phase'] ?? ''),
        'pack' => $p['pack'] ?? '', 'species' => $p['species'] ?? '', 'atc' => $p['atc'] ?? '', 'keywords' => $p['keywords'] ?? '', 't' => [],
    ];
    foreach (LANGS as $l) {
        foreach (TEXT_FIELDS as $f) { $v['t'][$l][$f] = (string) ($p['texts'][$l][$f] ?? ''); }
    }
    return $v;
}

function posted_values(): array
{
    $v = [];
    foreach (['grp' => 20, 'cat' => 60, 'kind' => 20, 'state' => 20, 'slug' => 90, 'code' => 40, 'position' => 6, 'formats' => 1000, 'route' => 40, 'line' => 20, 'phase' => 2, 'pack' => 20, 'species' => 10, 'atc' => 20, 'keywords' => 600] as $k => $max) {
        $v[$k] = post_str($k, $max);
    }
    $t = is_array($_POST['t'] ?? null) ? $_POST['t'] : [];
    foreach (LANGS as $l) {
        foreach (TEXT_FIELDS as $f) {
            $raw = $t[$l][$f] ?? '';
            $max = $f === 'name' ? 200 : ($f === 'use' ? 600 : 6000);
            $v['t'][$l][$f] = is_string($raw) ? mb_substr(trim(str_replace("\r\n", "\n", $raw)), 0, $max) : '';
        }
    }
    return $v;
}

function validate(array &$v, int $id): array
{
    $e = [];
    $t = cat_t();
    if ($v['t']['fr']['name'] === '') { $e['name_fr'] = 'Le nom en français est obligatoire.'; }
    if (!in_array($v['grp'], GROUPS, true)) { $e['grp'] = 'Choisissez une gamme.'; }
    $cats = categories();
    if (!isset($cats[$v['cat']])) { $e['cat'] = 'Choisissez une catégorie.'; }
    elseif ($cats[$v['cat']]['grp'] !== $v['grp']) { $e['cat'] = 'Cette catégorie n\'appartient pas à la gamme choisie.'; }
    if (!in_array($v['kind'], KINDS, true)) { $e['kind'] = 'Choisissez un statut commercial.'; }
    if (!in_array($v['state'], STATES, true)) { $v['state'] = 'hidden'; }
    if ($v['line'] !== '' && !isset($t['lines'][$v['line']])) { $v['line'] = ''; }
    if ($v['pack'] !== '' && !isset($t['packs'][$v['pack']])) { $v['pack'] = ''; }
    if (!in_array($v['phase'], ['', '1', '2', '3'], true)) { $v['phase'] = ''; }
    if (!array_key_exists($v['species'], SPECIES)) { $v['species'] = ''; }
    if ($v['position'] !== '' && !ctype_digit($v['position'])) { $e['position'] = 'Nombre entier attendu.'; }
    if ($v['code'] !== '') {
        if (!preg_match('/^[A-Za-z0-9._-]{1,40}$/', $v['code'])) { $e['code'] = 'Lettres, chiffres, points, tirets uniquement.'; }
        else {
            $st = db()->prepare('SELECT COUNT(*) FROM products WHERE code = ? COLLATE NOCASE AND id != ?');
            $st->execute([$v['code'], $id]);
            if ((int) $st->fetchColumn() > 0) { $e['code'] = 'Cette référence est déjà utilisée par un autre produit.'; }
        }
    }
    if ($v['slug'] === '') {
        $v['slug'] = $v['t']['fr']['name'] !== '' ? unique_slug($v['t']['fr']['name'], $id) : '';
    } else {
        $clean = slugify($v['slug']);
        $st = db()->prepare('SELECT COUNT(*) FROM products WHERE slug = ? AND id != ?');
        $st->execute([$clean, $id]);
        if (in_array($clean, RESERVED_SLUGS, true) || (int) $st->fetchColumn() > 0) { $e['slug'] = 'Cette adresse est déjà utilisée : choisissez-en une autre.'; }
        $v['slug'] = $clean;
    }
    return $e;
}

function product_page(int $id = 0): void
{
    $p = $id ? (product($id) ?? not_found()) : null;
    $errors = [];
    $v = form_values($p);
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
        $v = posted_values();
        $errors = validate($v, $id);
        $imgErr = '';
        if (!$errors) {
            $id = save_product($p, $v);
            $file = $_FILES['image'] ?? null;
            if (is_array($file) && ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
                $name = save_image($file, $id, $imgErr);
                if ($name !== null) {
                    $old = product($id)['image'] ?? '';
                    db()->prepare('UPDATE products SET image = ? WHERE id = ?')->execute([$name, $id]);
                    if ($old !== '') { @unlink(data_dir() . '/uploads/images/' . basename($old)); }
                }
            } elseif (!empty($_POST['remove_image']) && $p && $p['image'] !== '') {
                db()->prepare("UPDATE products SET image = '' WHERE id = ?")->execute([$id]);
                @unlink(data_dir() . '/uploads/images/' . basename($p['image']));
                audit('image.delete', 'product', $id, $v['t']['fr']['name']);
            }
            clear_pdf_cache($id);
            $saved = product($id);
            $where = $saved['state'] === 'published' ? ' Il est <b>en ligne</b> : <a href="' . h(product_url($saved, 'fr')) . '" target="_blank" rel="noopener">voir la fiche sur le site</a>.' : ' Il n\'est <b>pas visible</b> sur le site (' . h(mb_strtolower(STATE_LABELS[$saved['state']])) . ').';
            flash($imgErr !== '' ? 'error' : 'success', ($p ? 'Modifications enregistrées.' : 'Produit créé.') . $where . ($imgErr !== '' ? ' Photo non enregistrée : ' . h($imgErr) : ''));
            redirect('produits/' . $id);
        }
    }
    product_form($p, $v, $errors);
}

/** Enregistre le produit (création ou modification) ; renvoie son identifiant. */
function save_product(?array $p, array $v): int
{
    $pdo = db();
    $u = current_user()['name'] ?? '';
    $formats = array_values(array_slice(array_filter(array_map('trim', preg_split('/[\n;]+/', $v['formats']) ?: []), fn ($x) => $x !== ''), 0, 30));
    $position = $v['position'] !== '' ? (int) $v['position'] : null;
    $pdo->beginTransaction();
    if ($p) {
        $pdo->prepare('UPDATE products SET code = ?, slug = ?, grp = ?, kind = ?, cat = ?, state = ?, position = COALESCE(?, position), formats = ?, route = ?, line = ?, phase = ?, pack = ?, species = ?, atc = ?, keywords = ?, updated_at = ?, updated_by = ? WHERE id = ?')
            ->execute([$v['code'] !== '' ? $v['code'] : null, $v['slug'], $v['grp'], $v['kind'], $v['cat'], $v['state'], $position, json_encode($formats, JSON_UNESCAPED_UNICODE), $v['route'], $v['line'], $v['phase'] !== '' ? (int) $v['phase'] : null, $v['pack'], $v['species'], $v['atc'], $v['keywords'], now(), $u, $p['id']]);
        $id = $p['id'];
    } else {
        if ($position === null) {
            $st = $pdo->prepare('SELECT COALESCE(MAX(position), -1) + 1 FROM products WHERE cat = ?');
            $st->execute([$v['cat']]);
            $position = (int) $st->fetchColumn();
        }
        $pdo->prepare('INSERT INTO products (code, slug, grp, kind, cat, state, position, formats, route, line, phase, pack, species, atc, keywords, created_at, updated_at, created_by, updated_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
            ->execute([$v['code'] !== '' ? $v['code'] : null, $v['slug'], $v['grp'], $v['kind'], $v['cat'], $v['state'], $position, json_encode($formats, JSON_UNESCAPED_UNICODE), $v['route'], $v['line'], $v['phase'] !== '' ? (int) $v['phase'] : null, $v['pack'], $v['species'], $v['atc'], $v['keywords'], now(), now(), $u, $u]);
        $id = (int) $pdo->lastInsertId();
    }
    $cols = implode(', ', TEXT_FIELDS);
    $marks = implode(', ', array_fill(0, count(TEXT_FIELDS), '?'));
    $up = $pdo->prepare("INSERT OR REPLACE INTO product_texts (product_id, lang, {$cols}) VALUES (?, ?, {$marks})");
    $del = $pdo->prepare('DELETE FROM product_texts WHERE product_id = ? AND lang = ?');
    foreach (LANGS as $l) {
        $row = array_map(fn ($f) => $v['t'][$l][$f], TEXT_FIELDS);
        if (implode('', $row) === '') { $del->execute([$id, $l]); continue; }
        $up->execute(array_merge([$id, $l], $row));
    }
    $pdo->commit();
    audit($p ? 'product.update' : 'product.create', 'product', $id, $v['t']['fr']['name']);
    if ($p && $p['state'] !== $v['state']) { audit('product.' . $v['state'], 'product', $id, $v['t']['fr']['name']); }
    return $id;
}

/** Photo : JPEG/PNG/WebP/GIF ≤ 8 Mo, réduite à 1 600 px, enregistrée en JPEG (fond blanc). */
function save_image(array $file, int $productId, string &$err): ?string
{
    if (($file['error'] ?? 0) !== UPLOAD_ERR_OK || !is_uploaded_file((string) $file['tmp_name'])) { $err = 'l\'envoi a échoué (fichier trop lourd ?).'; return null; }
    if ($file['size'] > MAX_IMAGE) { $err = 'fichier trop lourd (8 Mo au maximum).'; return null; }
    $info = @getimagesize($file['tmp_name']);
    if (!$info || !in_array($info[2], [IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_WEBP, IMAGETYPE_GIF], true)) { $err = 'format non reconnu (JPEG, PNG ou WebP attendu).'; return null; }
    [$w, $h] = $info;
    if ($w * $h > 40_000_000) { $err = 'image trop grande (40 mégapixels au maximum).'; return null; }
    @ini_set('memory_limit', '512M');
    $src = @imagecreatefromstring((string) file_get_contents($file['tmp_name']));
    if (!$src) { $err = 'image illisible.'; return null; }
    if ($info[2] === IMAGETYPE_JPEG && function_exists('exif_read_data')) {
        $o = (int) (@exif_read_data($file['tmp_name'])['Orientation'] ?? 1);
        $rot = [3 => 180, 6 => -90, 8 => 90][$o] ?? 0;
        if ($rot) { $src = imagerotate($src, $rot, 0) ?: $src; [$w, $h] = [imagesx($src), imagesy($src)]; }
    }
    $scale = min(1, 1600 / max($w, $h));
    $nw = max(1, (int) round($w * $scale));
    $nh = max(1, (int) round($h * $scale));
    $dst = imagecreatetruecolor($nw, $nh);
    imagefill($dst, 0, 0, imagecolorallocate($dst, 255, 255, 255));
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $nw, $nh, $w, $h);
    $name = 'p' . $productId . '-' . bin2hex(random_bytes(6)) . '.jpg';
    $ok = imagejpeg($dst, data_dir() . '/uploads/images/' . $name, 85);
    if (!$ok) { $err = 'enregistrement impossible.'; return null; }
    return $name;
}

function tab_state(array $t, string $lang): string
{
    if ($t['name'] === '') { return 'empty'; }
    $n = 0;
    foreach (TEXT_FIELDS as $f) { if ($t[$f] !== '') { $n++; } }
    return $n >= 2 ? 'full' : 'part';
}

function product_form(?array $p, array $v, array $errors): never
{
    $t = cat_t();
    $id = $p['id'] ?? 0;
    $title = $p ? product_name($p) : 'Nouveau produit';
    $err = fn (string $k) => $errors[$k] ?? '';
    $o = '';
    $actions = '';
    if ($p) {
        $actions = '<a class="abtn abtn--ghost" href="' . h($p['state'] === 'published' ? product_url($p, 'fr') : url('produits/' . $id . '/apercu')) . '" target="_blank" rel="noopener">' . aicon('eye') . ($p['state'] === 'published' ? 'Voir sur le site' : 'Aperçu') . '</a>'
            . '<a class="abtn abtn--ghost" href="' . h(pdf_url($p, 'fr')) . '" target="_blank" rel="noopener">' . aicon('download') . 'Fiche PDF</a>';
    }
    $o .= page_head($title, $p ? state_badge($p['state']) . ' <span class="ahead__meta">Modifié le ' . h(dt($p['updated_at'])) . ($p['updated_by'] !== '' ? ' par ' . h($p['updated_by']) : '') . '</span>' : 'Remplissez au moins le nom en français, la gamme et la catégorie.',
        $actions, '<a href="' . url('produits') . '">Produits</a> / ' . ($p ? 'Modifier' : 'Ajouter'));
    if ($errors) { $o .= '<p class="aerr" role="alert">' . aicon('close', 18) . 'Le produit n\'a pas été enregistré : corrigez les champs signalés en rouge.</p>'; }

    $o .= '<div class="aedit"><form id="pf" class="aedit__main" method="post" enctype="multipart/form-data" action="' . url($p ? 'produits/' . $id : 'produits/nouveau') . '" novalidate data-dirty-guard>' . csrf_field();

    // --- Textes (onglets de langue)
    $labels = fiche_labels();
    $o .= '<section class="acard"><div class="acard__h"><h2>Textes et fiche technique</h2><p class="acard__sub">Le français est obligatoire. Une langue laissée vide s\'affiche en anglais, sinon en français.</p></div>';
    $o .= '<div class="atabs" role="tablist" aria-label="Langue des textes">';
    foreach (LANGS as $i => $l) {
        $o .= '<button type="button" role="tab" id="tab-' . $l . '" aria-controls="panel-' . $l . '" aria-selected="' . ($i === 0 ? 'true' : 'false') . '" tabindex="' . ($i === 0 ? '0' : '-1') . '" data-tab="' . $l . '">'
            . '<span class="atabs__c">' . strtoupper($l) . '</span><span class="atabs__n">' . h(LANG_NAMES[$l]) . '</span><span class="atabs__dot atabs__dot--' . tab_state($v['t'][$l], $l) . '" data-tab-dot></span></button>';
    }
    $o .= '</div>';
    foreach (LANGS as $i => $l) {
        $dir = $l === 'ar' ? 'rtl' : 'ltr';
        $req = $l === 'fr';
        $ph = $l === 'fr' ? [] : ['placeholder' => 'Vide = texte ' . ($l === 'en' ? 'français' : 'anglais ou français') . ' affiché'];
        $o .= '<div class="atabpanel" role="tabpanel" id="panel-' . $l . '" aria-labelledby="tab-' . $l . '" data-panel="' . $l . '"' . ($i === 0 ? '' : ' hidden') . '>';
        $o .= '<div class="agrid">'
            . field('Nom du produit', input("t[$l][name]", $v['t'][$l]['name'], ['dir' => $dir, 'lang' => $l, 'required' => $req, 'maxlength' => 200, 'data-name' => $l] + $ph), $l === 'fr' ? 'Sert aussi à créer l\'adresse de la page.' : '', $l === 'fr' ? $err('name_fr') : '', $req, 'afield--wide')
            . field('Usage (texte court des cartes du catalogue)', textarea("t[$l][use]", $v['t'][$l]['use'], ['rows' => 2, 'dir' => $dir, 'lang' => $l, 'maxlength' => 600] + $ph), 'Une phrase : à quoi sert le produit.', '', false, 'afield--wide')
            . '</div><fieldset class="afiche"><legend>Rubriques de la fiche technique</legend><p class="afield__h">Laissez vide une rubrique sans objet : elle n\'apparaîtra ni sur la page ni dans le PDF. Pour une liste, commencez chaque ligne par « - ».</p><div class="agrid">';
        foreach ($labels as $f => [$label, $hint]) {
            $o .= field($label, textarea("t[$l][$f]", $v['t'][$l][$f], ['rows' => in_array($f, ['shelf_life', 'regulatory', 'storage'], true) ? 2 : 4, 'dir' => $dir, 'lang' => $l]), $l === 'fr' ? h($hint) : '', '', false, in_array($f, ['shelf_life', 'regulatory'], true) ? '' : 'afield--wide');
        }
        $o .= '</div></fieldset></div>';
    }
    $o .= '</section>';

    // --- Caractéristiques
    $lines = ['' => '—'] + $t['lines'];
    $packs = ['' => '—'] + $t['packs'];
    $phases = ['' => '—'];
    foreach ($t['phases'] as $n => $label) { $phases[(string) $n] = $label; }
    $o .= '<section class="acard"><div class="acard__h"><h2>Classement et caractéristiques</h2></div><div class="agrid">'
        . field('Gamme', select('grp', group_options(), $v['grp'], ['required' => true, 'data-grp' => true]), 'Page du site où figure le produit.', $err('grp'), true)
        . field('Catégorie', select('cat', ['' => 'Choisir…'] + category_options(), $v['cat'], ['required' => true, 'data-cat' => true]), is_admin() ? 'Les catégories se gèrent dans le menu <a href="' . url('categories') . '">Catégories</a>.' : '', $err('cat'), true)
        . field('Statut commercial', select('kind', kind_options(), $v['kind'], ['required' => true]), 'Pastille affichée sur la carte du produit.', $err('kind'), true, 'afield--wide')
        . field('Présentations', textarea('formats', $v['formats'], ['rows' => 3, 'placeholder' => "100 ml\n500 ml"]), 'Une par ligne (ex. « 500 ml », « 1 g », « 10 ml »).')
        . field('Voie d\'administration', input('route', $v['route'], ['list' => 'routes', 'maxlength' => 40]) . '<datalist id="routes"><option value="IV"><option value="IM"><option value="IM/IV"><option value="SC"><option value="Orale"><option value="Solvant"></datalist>', 'Sigle international (IV, IM, SC…).')
        . field('Ligne de production', select('line', $lines, $v['line']))
        . field('Conditionnement', select('pack', $packs, $v['pack']))
        . field('Phase de production', select('phase', $phases, $v['phase']))
        . field('Espèces (produits vétérinaires)', select('species', SPECIES, $v['species']), '', '', false, 'afield--vet')
        . field('Code ATC', input('atc', $v['atc'], ['maxlength' => 20, 'placeholder' => 'B05BB01']), 'Facultatif.')
        . field('Mots-clés de recherche', textarea('keywords', $v['keywords'], ['rows' => 2]), 'Synonymes et termes que les visiteurs peuvent taper (non affichés).', '', false, 'afield--wide')
        . '</div></section>';

    // --- Photo
    $o .= '<section class="acard"><div class="acard__h"><h2>Photo du produit</h2><p class="acard__sub">Facultative. Affichée sur les cartes du catalogue, la page du produit et le PDF. Sans photo, l\'illustration de la catégorie est utilisée. JPEG, PNG ou WebP, 8 Mo au maximum.</p></div><div class="aphoto">';
    if ($p && $p['image'] !== '') {
        $o .= '<img class="aphoto__img" src="' . h(image_url($p)) . '" alt="Photo actuelle" width="160" height="160"><div><label class="acheckline"><input type="checkbox" name="remove_image" value="1"> Retirer la photo</label>';
    } else {
        $ill = category_image($v['cat'], $v['grp']);
        $o .= ($ill !== '' ? '<img class="aphoto__img aphoto__img--ill" src="' . h($ill) . '" alt="Illustration de la catégorie" width="213" height="160">' : '<span class="aphoto__img aphoto__img--none" aria-hidden="true">' . aicon('vial', 32) . '</span>')
            . '<div>' . ($ill !== '' ? '<p class="afield__h">Illustration provisoire de la catégorie (même image pour tous ses produits).</p>' : '');
    }
    $o .= '<label class="afile">' . aicon('download') . '<span>' . ($p && $p['image'] !== '' ? 'Remplacer la photo' : 'Choisir une photo') . '</span><input type="file" name="image" accept="image/jpeg,image/png,image/webp" data-preview></label><p class="afield__h">Règle du site : une photo n\'est utilisée qu\'à un seul endroit.</p></div></div></section>';
    $o .= '</form>';

    // --- Colonne latérale : publication
    $o .= '<aside class="aedit__side"><section class="acard acard--sticky"><div class="acard__h"><h2>Publication</h2></div><fieldset class="astates"><legend class="sr-only">État</legend>';
    foreach (['published' => ['En ligne', 'Visible sur le site, dans les 7 langues.'], 'hidden' => ['Masqué', 'Enregistré, non visible sur le site.'], 'archived' => ['Archivé', 'Retiré du site et rangé dans les archives.']] as $k => [$label, $desc]) {
        $o .= '<label class="astate astate--' . $k . '"><input type="radio" name="state" value="' . $k . '" form="pf"' . ($v['state'] === $k ? ' checked' : '') . '><span><b>' . $label . '</b><small>' . $desc . '</small></span></label>';
    }
    $o .= '</fieldset>'
        . field('Adresse de la page', '<span class="aslug"><span>/produits/</span>' . input('slug', $v['slug'], ['form' => 'pf', 'maxlength' => 90, 'data-slug' => true, 'placeholder' => 'automatique']) . '</span>', $p && $p['state'] === 'published' ? 'Attention : la changer rend l\'ancienne adresse introuvable.' : 'Laissez vide : elle sera créée à partir du nom.', $err('slug'))
        . '<div class="agrid agrid--2">' . field('Référence interne', input('code', $v['code'], ['form' => 'pf', 'maxlength' => 40]), '', $err('code'))
        . field('Ordre', input('position', $v['position'], ['form' => 'pf', 'type' => 'number', 'min' => 0, 'max' => 99999, 'placeholder' => 'auto']), 'Dans sa catégorie.', $err('position')) . '</div>'
        . '<button class="abtn abtn--block" type="submit" form="pf">' . aicon('check') . 'Enregistrer</button>';
    if ($p) {
        $o .= '<p class="aside-meta">Créé le ' . h(dt($p['created_at'], false)) . ($p['created_by'] !== '' ? ' · ' . h($p['created_by']) : '') . '</p>';
    }
    $o .= '</section>';
    if ($p) {
        $o .= '<section class="acard"><div class="acard__h"><h2>Autres actions</h2></div><div class="astack">'
            . post_button('produits/' . $id . '/dupliquer', 'Dupliquer ce produit', 'abtn abtn--ghost abtn--block', [], '', 'layers')
            . (is_admin() ? post_button('produits/' . $id . '/supprimer', 'Supprimer définitivement', 'abtn abtn--danger abtn--block', [], 'Supprimer définitivement « ' . product_name($p) . ' », sa photo et ses documents ? Cette action est irréversible. (Pour le retirer du site sans le perdre, choisissez plutôt « Archivé ».)', 'close') : '<p class="afield__h">La suppression définitive est réservée aux administrateurs. Vous pouvez archiver le produit.</p>')
            . '</div></section>';
    }
    $o .= '</aside>';

    // --- Documents PDF (formulaire séparé)
    $o .= '<section class="acard aedit__docs" id="documents"><div class="acard__h"><h2>Documents à télécharger</h2><p class="acard__sub">PDF officiels (notice, RCP, certificat…) proposés sur la fiche du produit, en plus de la fiche technique générée automatiquement. 15 Mo au maximum par fichier.</p></div>';
    if (!$p) {
        $o .= '<p class="aempty">Enregistrez d\'abord le produit pour pouvoir y joindre des documents.</p>';
    } else {
        $docs = documents($id);
        if ($docs) {
            $o .= '<ul class="adocs">';
            foreach ($docs as $d) {
                $o .= '<li>' . aicon('book') . '<a href="' . h(document_url($p, $d, 'fr')) . '" target="_blank" rel="noopener"><b>' . h($d['title']) . '</b><small>' . h($d['original']) . ' · ' . h(\Tlm\human_size((int) $d['size'])) . ' · ' . h($d['lang'] === '' ? 'Toutes langues' : LANG_NAMES[$d['lang']] ?? $d['lang']) . '</small></a>'
                    . post_button('produits/' . $id . '/documents/' . (int) $d['id'] . '/supprimer', 'Retirer', 'abtn abtn--ghost abtn--sm', [], 'Retirer le document « ' . $d['title'] . ' » ?') . '</li>';
            }
            $o .= '</ul>';
        }
        $langOpts = ['' => 'Toutes langues'] + LANG_NAMES;
        $o .= '<form class="adocform" method="post" enctype="multipart/form-data" action="' . url('produits/' . $id . '/documents') . '">' . csrf_field()
            . '<div class="agrid">' . field('Titre affiché', input('title', '', ['maxlength' => 120, 'placeholder' => 'Ex. : Notice d\'utilisation']), 'Vide : nom du fichier.')
            . field('Langue du document', select('lang', $langOpts, ''))
            . field('Fichier PDF', '<input type="file" name="doc" accept="application/pdf,.pdf" required>', '', '', true, 'afield--wide') . '</div>'
            . '<button class="abtn abtn--ghost" type="submit">' . aicon('plus') . 'Ajouter le document</button></form>';
    }
    $o .= '</section></div>';
    layout($title, $o, 'products');
}

/* ======================================================================
   Documents
   ====================================================================== */

function doc_add(int $id): void
{
    $p = product($id) ?? not_found();
    $f = $_FILES['doc'] ?? null;
    if (!is_array($f) || ($f['error'] ?? 1) !== UPLOAD_ERR_OK || !is_uploaded_file((string) $f['tmp_name'])) {
        flash('error', 'Document non reçu : choisissez un fichier PDF (15 Mo au maximum).');
        back('produits/' . $id);
    }
    $head = (string) file_get_contents($f['tmp_name'], false, null, 0, 5);
    $mime = class_exists('finfo') ? (new \finfo(FILEINFO_MIME_TYPE))->file($f['tmp_name']) : 'application/pdf';
    if ($f['size'] > MAX_DOC || $head !== '%PDF-' || $mime !== 'application/pdf') {
        flash('error', 'Seuls les fichiers PDF de 15 Mo au maximum sont acceptés.');
        back('produits/' . $id);
    }
    $lang = post_str('lang', 2);
    if (!in_array($lang, LANGS, true)) { $lang = ''; }
    $original = mb_substr(basename((string) $f['name']), 0, 160);
    $title = post_str('title', 120) ?: (string) preg_replace('/[_-]+/', ' ', pathinfo($original, PATHINFO_FILENAME));
    $name = 'd' . $id . '-' . bin2hex(random_bytes(8)) . '.pdf';
    if (!move_uploaded_file($f['tmp_name'], data_dir() . '/uploads/docs/' . $name)) {
        flash('error', 'Enregistrement du document impossible.');
        back('produits/' . $id);
    }
    $pos = (int) db()->query('SELECT COALESCE(MAX(position), 0) + 1 FROM documents WHERE product_id = ' . $id)->fetchColumn();
    db()->prepare('INSERT INTO documents (product_id, lang, title, file, original, size, position, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
        ->execute([$id, $lang, $title, $name, $original, (int) $f['size'], $pos, now()]);
    touch_product($id);
    audit('doc.add', 'product', $id, product_name($p) . ' · ' . $title);
    flash('success', 'Document « ' . h($title) . ' » ajouté.' . ($p['state'] === 'published' ? ' Il est proposé sur la fiche du produit.' : ''));
    redirect('produits/' . $id . '#documents');
}

function doc_delete(int $id, int $docId): void
{
    $p = product($id) ?? not_found();
    $st = db()->prepare('SELECT * FROM documents WHERE id = ? AND product_id = ?');
    $st->execute([$docId, $id]);
    $d = $st->fetch() ?: not_found();
    db()->prepare('DELETE FROM documents WHERE id = ?')->execute([$docId]);
    @unlink(data_dir() . '/uploads/docs/' . basename($d['file']));
    touch_product($id);
    audit('doc.delete', 'product', $id, product_name($p) . ' · ' . $d['title']);
    flash('success', 'Document retiré.');
    redirect('produits/' . $id);
}
