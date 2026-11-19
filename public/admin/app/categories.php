<?php
/**
 * Back office TILAMED · catégories de produits (réservé aux administrateurs) :
 * libellés dans les 7 langues, gamme, ordre d'affichage.
 */
declare(strict_types=1);

namespace Tlm\Admin;

use function Tlm\{h, db, audit, categories, slugify, clear_pdf_cache};

use const Tlm\{LANGS, GROUPS};

function categories_page(): void
{
    $errors = [];
    $open = '';
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
        $action = (string) ($_POST['action'] ?? '');
        $id = post_str('id', 60);
        $cats = categories(true);
        $labels = [];
        foreach (LANGS as $l) { $labels[$l] = mb_substr(trim((string) ($_POST['labels'][$l] ?? '')), 0, 80); }
        $grp = post_str('grp', 20);
        $pos = post_str('position', 5);
        if ($action === 'delete') {
            $n = db()->prepare('SELECT COUNT(*) FROM products WHERE cat = ?');
            $n->execute([$id]);
            if (!isset($cats[$id])) { not_found(); }
            if ((int) $n->fetchColumn() > 0) {
                flash('error', 'Impossible de supprimer une catégorie qui contient encore des produits (archivés compris) : déplacez-les d\'abord.');
            } else {
                db()->prepare('DELETE FROM categories WHERE id = ?')->execute([$id]);
                audit('category.delete', 'category', null, $cats[$id]['labels']['fr'] ?? $id);
                flash('success', 'Catégorie supprimée.');
            }
            redirect('categories');
        }
        if ($labels['fr'] === '') { $errors['fr'] = 'Le libellé français est obligatoire.'; }
        if (!in_array($grp, GROUPS, true)) { $errors['grp'] = 'Choisissez une gamme.'; }
        if ($pos !== '' && !ctype_digit($pos)) { $errors['position'] = 'Nombre entier attendu.'; }
        if ($action === 'update' && !isset($cats[$id])) { not_found(); }
        if (!$errors) {
            $json = json_encode($labels, JSON_UNESCAPED_UNICODE);
            if ($action === 'create') {
                $base = slugify($labels['fr']);
                $new = $base;
                for ($i = 2; isset($cats[$new]); $i++) { $new = $base . '-' . $i; }
                $position = $pos !== '' ? (int) $pos : 1 + max(array_merge([0], array_map(fn ($c) => (int) $c['position'], array_values($cats))));
                db()->prepare('INSERT INTO categories (id, grp, position, labels) VALUES (?, ?, ?, ?)')->execute([$new, $grp, $position, $json]);
                audit('category.create', 'category', null, $labels['fr']);
                flash('success', 'Catégorie « ' . h($labels['fr']) . ' » créée. Elle apparaîtra sur le site dès qu\'un produit en ligne y sera rangé.');
            } else {
                $moved = $cats[$id]['grp'] !== $grp;
                db()->prepare('UPDATE categories SET grp = ?, position = ?, labels = ? WHERE id = ?')->execute([$grp, $pos !== '' ? (int) $pos : $cats[$id]['position'], $json, $id]);
                if ($moved) { db()->prepare('UPDATE products SET grp = ? WHERE cat = ?')->execute([$grp, $id]); }
                audit('category.update', 'category', null, $labels['fr']);
                flash('success', 'Catégorie « ' . h($labels['fr']) . ' » enregistrée.' . ($moved ? ' Ses produits ont été déplacés dans la nouvelle gamme.' : ''));
            }
            clear_pdf_cache();
            redirect('categories');
        }
        $open = $action === 'create' ? '__new' : $id;
        flash('error', 'Catégorie non enregistrée : ' . h(implode(' ', $errors)));
    }

    $cats = categories(true);
    $counts = [];
    foreach (db()->query('SELECT cat, COUNT(*) n, SUM(state = \'published\') online FROM products GROUP BY cat')->fetchAll() as $r) { $counts[$r['cat']] = $r; }
    $groups = group_options();
    $form = function (array $c, string $action) use ($groups, $open): string {
        $f = '<form method="post" class="acatform">' . csrf_field() . '<input type="hidden" name="action" value="' . $action . '"><input type="hidden" name="id" value="' . h($c['id']) . '"><div class="agrid">';
        foreach (LANGS as $l) {
            $f .= field('Libellé · ' . LANG_NAMES[$l], input('labels[' . $l . ']', (string) ($c['labels'][$l] ?? ''), ['dir' => $l === 'ar' ? 'rtl' : 'ltr', 'lang' => $l, 'maxlength' => 80, 'required' => $l === 'fr']), '', '', $l === 'fr');
        }
        $f .= field('Gamme', select('grp', $groups, $c['grp']), $action === 'update' ? 'Changer de gamme déplace aussi ses produits.' : '')
            . field('Ordre d\'affichage', input('position', (string) $c['position'], ['type' => 'number', 'min' => 0, 'max' => 9999]), 'Les plus petits en premier.')
            . '</div><div class="aform__act"><button class="abtn" type="submit">' . aicon('check') . 'Enregistrer</button></div></form>';
        return $f;
    };

    $o = page_head('Catégories', 'Les catégories regroupent les produits dans chaque gamme (ex. « Solutés de base » dans Sérums). Leurs libellés s\'affichent sur le site dans les 7 langues.');
    $o .= '<details class="acard acollapse"' . ($open === '__new' ? ' open' : '') . '><summary class="acard__h"><h2>' . aicon('plus', 20) . 'Nouvelle catégorie</h2></summary>'
        . $form(['id' => '', 'grp' => 'serum', 'position' => '', 'labels' => []], 'create') . '</details>';
    foreach ($groups as $g => $glabel) {
        $list = array_filter($cats, fn ($c) => $c['grp'] === $g);
        $o .= '<section class="acard"><div class="acard__h"><h2>' . h($glabel) . '</h2><p class="acard__sub">' . count($list) . ' catégorie(s)</p></div>';
        if (!$list) { $o .= '<p class="aempty">Aucune catégorie.</p></section>'; continue; }
        $o .= '<ul class="acats">';
        foreach ($list as $c) {
            $n = (int) ($counts[$c['id']]['n'] ?? 0);
            $on = (int) ($counts[$c['id']]['online'] ?? 0);
            $missing = count(array_filter(LANGS, fn ($l) => trim((string) ($c['labels'][$l] ?? '')) === ''));
            $o .= '<li><details' . ($open === $c['id'] ? ' open' : '') . '><summary><span class="acats__pos">' . (int) $c['position'] . '</span><span class="acats__t"><b>' . h($c['labels']['fr'] ?? $c['id']) . '</b><small>'
                . $n . ' produit(s) · ' . $on . ' en ligne' . ($missing ? ' · ' . $missing . ' traduction(s) manquante(s)' : '') . '</small></span><a class="alink" href="' . url('produits?categorie=' . rawurlencode($c['id'])) . '">Voir les produits</a><span class="acats__edit">' . aicon('chevron', 16) . 'Modifier</span></summary>'
                . $form($c, 'update')
                . ($n === 0 ? post_button('categories', 'Supprimer la catégorie', 'abtn abtn--danger abtn--sm', ['action' => 'delete', 'id' => $c['id']], 'Supprimer la catégorie « ' . ($c['labels']['fr'] ?? '') . ' » ?', 'close') : '')
                . '</details></li>';
        }
        $o .= '</ul></section>';
    }
    layout('Catégories', $o, 'categories');
}
