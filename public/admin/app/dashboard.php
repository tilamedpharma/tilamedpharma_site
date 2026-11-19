<?php
/**
 * Back office TILAMED · tableau de bord et journal des actions.
 */
declare(strict_types=1);

namespace Tlm\Admin;

use function Tlm\{h, db, current_user, products, fiche_filled};

/** Lien vers l'élément concerné par une ligne du journal. */
function audit_target(array $a): string
{
    $label = h($a['label']);
    if ($a['entity'] === 'product' && $a['entity_id'] && $a['action'] !== 'product.delete') {
        return '<a href="' . url('produits/' . (int) $a['entity_id']) . '">' . $label . '</a>';
    }
    return $label;
}

function audit_rows(array $rows, bool $withUser = true): string
{
    if (!$rows) { return '<p class="aempty">Aucune action enregistrée pour le moment.</p>'; }
    $o = '<ul class="afeed">';
    foreach ($rows as $a) {
        $o .= '<li><span class="afeed__dot afeed__dot--' . h(explode('.', $a['action'])[0]) . '" aria-hidden="true"></span><div><p><b>' . h(ACTIONS[$a['action']] ?? $a['action']) . '</b>'
            . ($a['label'] !== '' && !in_array($a['action'], ['login', 'setup', 'password.change', 'password.reset'], true) ? ' · ' . audit_target($a) : '') . '</p>'
            . '<p class="afeed__m">' . h(dt($a['at'])) . ($withUser && $a['user_name'] !== '' ? ' · ' . h($a['user_name']) : '') . '</p></div></li>';
    }
    return $o . '</ul>';
}

function dashboard_page(): void
{
    $u = current_user();
    $all = products(['published', 'hidden', 'archived']);
    $count = ['published' => 0, 'hidden' => 0, 'archived' => 0];
    $noFiche = 0;
    $noTr = 0;
    foreach ($all as $p) {
        $count[$p['state']]++;
        if ($p['state'] !== 'published') { continue; }
        if (fiche_filled($p) === 0) { $noFiche++; }
        foreach (\Tlm\LANGS as $l) {
            if (trim((string) ($p['texts'][$l]['name'] ?? '')) === '') { $noTr++; break; }
        }
    }
    $recent = [];
    $rs = db()->query("SELECT id FROM products WHERE state != 'archived' ORDER BY updated_at DESC, id DESC LIMIT 6")->fetchAll(\PDO::FETCH_COLUMN);
    $byId = [];
    foreach ($all as $p) { $byId[$p['id']] = $p; }
    foreach ($rs as $id) { if (isset($byId[(int) $id])) { $recent[] = $byId[(int) $id]; } }

    $tiles = [
        ['published', 'En ligne', 'Produits visibles sur le site', 'produits?etat=published', 'eye'],
        ['hidden', 'Masqués', 'Enregistrés mais non visibles', 'produits?etat=hidden', 'filter'],
        ['archived', 'Archivés', 'Retirés du catalogue', 'produits?etat=archived', 'box'],
    ];
    $o = page_head('Bonjour ' . explode(' ', $u['name'])[0], 'Gérez le catalogue du site : produits, fiches techniques, documents et traductions.',
        '<a class="abtn" href="' . url('produits/nouveau') . '">' . aicon('plus') . 'Ajouter un produit</a>');
    $o .= '<ul class="atiles">';
    foreach ($tiles as [$k, $label, $sub, $href, $ic]) {
        $o .= '<li><a class="atile atile--' . $k . '" href="' . url($href) . '"><span class="atile__ic">' . aicon($ic, 22) . '</span><span class="atile__n">' . $count[$k] . '</span><span class="atile__l">' . h($label) . '</span><span class="atile__s">' . h($sub) . '</span></a></li>';
    }
    $o .= '<li><a class="atile atile--todo" href="' . url('produits?etat=published&a-completer=fiche') . '"><span class="atile__ic">' . aicon('book', 22) . '</span><span class="atile__n">' . $noFiche . '</span><span class="atile__l">Fiches à compléter</span><span class="atile__s">En ligne, sans rubrique de fiche technique</span></a></li>';
    $o .= '<li><a class="atile atile--todo" href="' . url('produits?etat=published&a-completer=traduction') . '"><span class="atile__ic">' . aicon('globe', 22) . '</span><span class="atile__n">' . $noTr . '</span><span class="atile__l">Traductions incomplètes</span><span class="atile__s">En ligne, nom absent dans au moins une langue</span></a></li>';
    $o .= '</ul>';

    $o .= '<div class="agrid2"><section class="acard"><div class="acard__h"><h2>Derniers produits modifiés</h2><a class="alink" href="' . url('produits') . '">Tous les produits' . aicon('arrow', 16) . '</a></div><ul class="arecent">';
    foreach ($recent as $p) {
        $o .= '<li><a href="' . url('produits/' . $p['id']) . '"><span><b>' . h($p['texts']['fr']['name'] ?? '(sans nom)') . '</b><small>' . h(cat_t()['groups'][$p['grp']]['label'] ?? '') . ' · ' . h(dt($p['updated_at'])) . ($p['updated_by'] !== '' ? ' · ' . h($p['updated_by']) : '') . '</small></span>' . state_badge($p['state']) . '</a></li>';
    }
    $o .= '</ul></section>';
    $feed = db()->query('SELECT * FROM audit ORDER BY id DESC LIMIT 8')->fetchAll();
    $o .= '<section class="acard"><div class="acard__h"><h2>Activité récente</h2><a class="alink" href="' . url('journal') . '">Journal complet' . aicon('arrow', 16) . '</a></div>' . audit_rows($feed) . '</section></div>';

    $o .= '<section class="acard ahelp"><h2>' . aicon('book', 20) . 'Bon à savoir</h2><ul>'
        . '<li><b>En ligne</b> : le produit apparaît aussitôt dans le catalogue, sa gamme et sa fiche, dans les 7 langues.</li>'
        . '<li><b>Masqué</b> : le produit reste dans le back office mais disparaît du site. Vous pouvez le prévisualiser.</li>'
        . '<li><b>Archivé</b> : le produit est retiré du site et rangé à part ; il peut être restauré à tout moment.</li>'
        . '<li>La <b>fiche technique PDF</b> est générée automatiquement à partir des rubriques saisies, dans la langue du visiteur.</li>'
        . '<li>Une langue non remplie s\'affiche en anglais, sinon en français.</li></ul></section>';
    layout('Tableau de bord', $o, 'dashboard');
}

function journal_page(): void
{
    $per = 50;
    $page = max(1, (int) ($_GET['page'] ?? 1));
    $total = (int) db()->query('SELECT COUNT(*) FROM audit')->fetchColumn();
    $st = db()->prepare('SELECT * FROM audit ORDER BY id DESC LIMIT ? OFFSET ?');
    $st->execute([$per, ($page - 1) * $per]);
    $rows = $st->fetchAll();
    $o = page_head('Journal', 'Toutes les actions effectuées dans le back office : qui a fait quoi, et quand (heure du Bénin).');
    $o .= '<section class="acard">' . audit_rows($rows) . '</section>';
    $pages = (int) ceil($total / $per);
    if ($pages > 1) {
        $o .= '<nav class="apager" aria-label="Pages">';
        if ($page > 1) { $o .= '<a class="abtn abtn--ghost abtn--sm" href="' . url('journal?page=' . ($page - 1)) . '">Plus récentes</a>'; }
        $o .= '<span>Page ' . $page . ' / ' . $pages . '</span>';
        if ($page < $pages) { $o .= '<a class="abtn abtn--ghost abtn--sm" href="' . url('journal?page=' . ($page + 1)) . '">Plus anciennes</a>'; }
        $o .= '</nav>';
    }
    layout('Journal', $o, 'journal');
}
