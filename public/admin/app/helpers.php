<?php
/**
 * Back office TILAMED · outils communs aux écrans : gabarit, messages, formulaires, libellés, dates.
 */
declare(strict_types=1);

namespace Tlm\Admin;

use function Tlm\{h, csrf_token, current_user, is_admin, t, site};

const BASE = '/admin';
const TZ = 'Africa/Porto-Novo';

/** Libellés français des langues du site. */
const LANG_NAMES = ['fr' => 'Français', 'en' => 'Anglais', 'es' => 'Espagnol', 'pt' => 'Portugais', 'it' => 'Italien', 'zh' => 'Chinois', 'ar' => 'Arabe'];
const STATE_LABELS = ['published' => 'En ligne', 'hidden' => 'Masqué', 'archived' => 'Archivé'];
const ROLE_LABELS = ['admin' => 'Administrateur', 'editor' => 'Éditeur'];
const SPECIES = ['' => '—', 'dog' => 'Chien', 'cat' => 'Chat', 'both' => 'Chien et chat'];
const ACTIONS = [
    'login' => 'Connexion', 'setup' => 'Installation du back office',
    'product.create' => 'Produit créé', 'product.update' => 'Produit modifié', 'product.duplicate' => 'Produit dupliqué',
    'product.published' => 'Produit mis en ligne', 'product.hidden' => 'Produit masqué', 'product.archived' => 'Produit archivé',
    'product.delete' => 'Produit supprimé', 'doc.add' => 'Document ajouté', 'doc.delete' => 'Document retiré', 'image.delete' => 'Photo retirée',
    'category.create' => 'Catégorie créée', 'category.update' => 'Catégorie modifiée', 'category.delete' => 'Catégorie supprimée',
    'user.create' => 'Compte créé', 'user.update' => 'Compte modifié', 'user.invite' => 'Lien de mot de passe envoyé',
    'password.change' => 'Mot de passe changé', 'password.reset' => 'Mot de passe réinitialisé',
];

function url(string $path = ''): string
{
    return BASE . '/' . ltrim($path, '/');
}

function redirect(string $path): never
{
    header('Location: ' . (str_starts_with($path, '/') ? $path : url($path)), true, 303);
    exit;
}

/** Retour à l'écran précédent du back office (en-tête Referer, même site uniquement). */
function back(string $fallback): never
{
    $ref = (string) ($_SERVER['HTTP_REFERER'] ?? '');
    $host = explode(':', (string) ($_SERVER['HTTP_HOST'] ?? ''))[0];
    $path = (string) parse_url($ref, PHP_URL_PATH);
    $query = (string) parse_url($ref, PHP_URL_QUERY);
    if ($ref !== '' && parse_url($ref, PHP_URL_HOST) === $host && str_starts_with($path, BASE . '/')) {
        redirect($path . ($query !== '' ? '?' . $query : ''));
    }
    redirect($fallback);
}

function flash(string $type, string $msg): void
{
    $_SESSION['flash'][] = [$type, $msg];
}

function take_flash(): array
{
    $f = $_SESSION['flash'] ?? [];
    unset($_SESSION['flash']);
    return $f;
}

function csrf_field(): string
{
    return '<input type="hidden" name="_csrf" value="' . h(csrf_token()) . '">';
}

/** Petit formulaire POST à un bouton (actions de ligne, avec confirmation éventuelle). */
function post_button(string $action, string $label, string $class = 'abtn abtn--ghost', array $hidden = [], string $confirm = '', string $icon = ''): string
{
    $out = '<form method="post" action="' . h(url($action)) . '" class="ainline"' . ($confirm !== '' ? ' data-confirm="' . h($confirm) . '"' : '') . '>' . csrf_field();
    foreach ($hidden as $k => $v) { $out .= '<input type="hidden" name="' . h($k) . '" value="' . h((string) $v) . '">'; }
    return $out . '<button type="submit" class="' . h($class) . '">' . ($icon !== '' ? aicon($icon) : '') . '<span>' . h($label) . '</span></button></form>';
}

function post_str(string $k, int $max = 5000): string
{
    $v = $_POST[$k] ?? '';
    return is_string($v) ? mb_substr(trim(str_replace("\r\n", "\n", $v)), 0, $max) : '';
}

/** Date/heure locale (Bénin) à partir d'une date UTC de la base. */
function dt(?string $utc, bool $time = true): string
{
    if (!$utc) { return '—'; }
    try {
        $d = new \DateTime($utc, new \DateTimeZone('UTC'));
        $d->setTimezone(new \DateTimeZone(TZ));
        $months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
        return $d->format('j') . ' ' . $months[(int) $d->format('n') - 1] . ' ' . $d->format('Y') . ($time ? ' à ' . $d->format('H:i') : '');
    } catch (\Throwable) {
        return $utc;
    }
}

/** Icône (jeu du site). */
function aicon(string $name, int $size = 18): string
{
    return \Tlm\icon($name, $size);
}

function state_badge(string $state): string
{
    return '<span class="abadge abadge--' . h($state) . '">' . h(STATE_LABELS[$state] ?? $state) . '</span>';
}

/** Libellés français du catalogue (gammes, statuts, lignes, conditionnements, phases…). */
function cat_t(): array
{
    return t('fr');
}

/**
 * Gabarit d'un écran du back office.
 * @param string $active entrée de menu active (dashboard, products, categories, journal, users)
 */
function layout(string $title, string $content, string $active = '', string $bodyClass = ''): never
{
    $u = current_user();
    header('Content-Type: text/html; charset=utf-8');
    $v = substr(md5((string) @filemtime(dirname(__DIR__) . '/assets/admin.css') . (string) @filemtime(dirname(__DIR__) . '/assets/admin.js')), 0, 8);
    $nav = [
        ['dashboard', '', 'gauge', 'Tableau de bord', false],
        ['products', 'produits', 'vial', 'Produits', false],
        ['categories', 'categories', 'layers', 'Catégories', true],
        ['journal', 'journal', 'clock', 'Journal', false],
        ['users', 'utilisateurs', 'users', 'Utilisateurs', true],
    ];
    echo '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
        . '<meta name="robots" content="noindex, nofollow"><title>' . h($title) . ' · Back office TILAMED Pharma</title>'
        . '<link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml"><link rel="stylesheet" href="/fonts/admin.css">'
        . '<link rel="stylesheet" href="' . url('assets/admin.css') . '?v=' . $v . '"><script src="' . url('assets/admin.js') . '?v=' . $v . '" defer></script></head>'
        . '<body class="adm' . ($u ? '' : ' adm--guest') . ($bodyClass !== '' ? ' ' . h($bodyClass) : '') . '">';
    if ($u) {
        echo '<a class="askip" href="#acontent">Aller au contenu</a><aside class="aside" id="aside"><a class="aside__logo" href="' . url() . '"><img src="/brand/Tilamed_logo_principal.svg" alt="TILAMED Pharma" width="148" height="82"></a>'
            . '<p class="aside__tag">Back office</p><nav class="aside__nav" aria-label="Menu du back office"><ul>';
        foreach ($nav as [$key, $path, $ic, $label, $adminOnly]) {
            if ($adminOnly && !is_admin()) { continue; }
            echo '<li><a href="' . url($path) . '"' . ($active === $key ? ' aria-current="page"' : '') . '>' . aicon($ic, 20) . '<span>' . h($label) . '</span></a></li>';
        }
        echo '</ul></nav><div class="aside__foot"><a href="/produits/" target="_blank" rel="noopener">' . aicon('arrow-up-right', 18) . '<span>Voir le catalogue en ligne</span></a></div></aside>'
            . '<div class="ashade" data-aside-close hidden></div>';
    }
    echo '<div class="amain">';
    if ($u) {
        echo '<header class="atop"><button class="atop__menu" type="button" data-aside-toggle aria-controls="aside" aria-expanded="false">' . aicon('menu', 22) . '<span class="sr-only">Menu</span></button>'
            . '<p class="atop__title">' . h($title) . '</p><details class="aumenu"><summary><span class="aumenu__av" aria-hidden="true">' . h(initials($u['name'])) . '</span><span class="aumenu__n">' . h($u['name'])
            . '<small>' . h(ROLE_LABELS[$u['role']] ?? $u['role']) . '</small></span>' . aicon('chevron', 16) . '</summary><div class="aumenu__pop"><a href="' . url('compte') . '">' . aicon('users', 18) . 'Mon compte</a>'
            . post_button('deconnexion', 'Se déconnecter', 'aumenu__out', [], '', 'arrow') . '</div></details></header><div class="aduo" aria-hidden="true"><span></span><span></span></div>';
    }
    echo '<main class="acontent" id="acontent">';
    foreach (take_flash() as [$type, $msg]) {
        echo '<div class="aflash aflash--' . h($type) . '" role="status">' . aicon($type === 'error' ? 'close' : 'check-circle', 20) . '<p>' . $msg . '</p><button type="button" class="aflash__x" data-dismiss aria-label="Fermer">' . aicon('close', 16) . '</button></div>';
    }
    echo $content . '</main></div></body></html>';
    exit;
}

function initials(string $name): string
{
    $parts = preg_split('/\s+/u', trim($name)) ?: [];
    $i = '';
    foreach (array_slice($parts, 0, 2) as $p) { $i .= mb_strtoupper(mb_substr($p, 0, 1)); }
    return $i !== '' ? $i : '?';
}

/** En-tête d'écran : titre, sous-titre, actions. */
function page_head(string $title, string $sub = '', string $actions = '', string $crumb = ''): string
{
    return '<div class="ahead"><div>' . ($crumb !== '' ? '<p class="ahead__crumb">' . $crumb . '</p>' : '') . '<h1 class="ahead__t">' . h($title) . '</h1>'
        . ($sub !== '' ? '<p class="ahead__sub">' . $sub . '</p>' : '') . '</div>' . ($actions !== '' ? '<div class="ahead__act">' . $actions . '</div>' : '') . '</div>';
}

/** Champ de formulaire (libellé + contrôle + aide + erreur). */
function field(string $label, string $control, string $hint = '', string $error = '', bool $required = false, string $class = ''): string
{
    return '<div class="afield' . ($error !== '' ? ' afield--err' : '') . ($class !== '' ? ' ' . $class : '') . '"><span class="afield__l">' . h($label) . ($required ? ' <b aria-hidden="true">*</b>' : '') . '</span>'
        . $control . ($hint !== '' ? '<span class="afield__h">' . $hint . '</span>' : '') . ($error !== '' ? '<span class="afield__e" role="alert">' . h($error) . '</span>' : '') . '</div>';
}

function input(string $name, string $value, array $attrs = []): string
{
    $a = '';
    foreach ($attrs + ['type' => 'text'] as $k => $v) { $a .= $v === true ? ' ' . h($k) : ($v === false || $v === null ? '' : ' ' . h($k) . '="' . h((string) $v) . '"'); }
    return '<input name="' . h($name) . '" value="' . h($value) . '"' . $a . '>';
}

function textarea(string $name, string $value, array $attrs = []): string
{
    $a = '';
    foreach ($attrs as $k => $v) { $a .= $v === true ? ' ' . h($k) : ' ' . h($k) . '="' . h((string) $v) . '"'; }
    return '<textarea name="' . h($name) . '"' . $a . '>' . h($value) . '</textarea>';
}

/** Liste déroulante ; $options = [valeur => libellé] ou [groupe => [valeur => libellé]]. */
function select(string $name, array $options, string $value, array $attrs = []): string
{
    $a = '';
    foreach ($attrs as $k => $v) { $a .= $v === true ? ' ' . h($k) : ' ' . h($k) . '="' . h((string) $v) . '"'; }
    $o = '';
    foreach ($options as $k => $v) {
        if (is_array($v)) {
            $o .= '<optgroup label="' . h((string) $k) . '">';
            foreach ($v as $kk => $vv) { $o .= '<option value="' . h((string) $kk) . '"' . ((string) $kk === $value ? ' selected' : '') . '>' . h((string) $vv) . '</option>'; }
            $o .= '</optgroup>';
        } else {
            $o .= '<option value="' . h((string) $k) . '"' . ((string) $k === $value ? ' selected' : '') . '>' . h((string) $v) . '</option>';
        }
    }
    return '<select name="' . h($name) . '"' . $a . '>' . $o . '</select>';
}

function forbidden(): never
{
    http_response_code(403);
    layout('Accès refusé', page_head('Accès refusé', 'Cette action est réservée aux administrateurs.'));
}

function not_found(): never
{
    http_response_code(404);
    layout('Introuvable', page_head('Élément introuvable', 'Il a peut-être été supprimé. <a href="' . url('produits') . '">Retour aux produits</a>'));
}
