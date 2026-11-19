<?php
/**
 * Back office TILAMED Pharma · point d'entrée unique (/admin/…).
 * Code des écrans : admin/app/ (non accessible depuis le web). Données : dossier tilamed-data, hors de public_html.
 */
declare(strict_types=1);

require dirname(__DIR__) . '/api/lib/tilamed/products.php';
require dirname(__DIR__) . '/api/lib/tilamed/auth.php';
require __DIR__ . '/app/helpers.php';
require __DIR__ . '/app/auth.php';
require __DIR__ . '/app/dashboard.php';
require __DIR__ . '/app/products.php';
require __DIR__ . '/app/categories.php';
require __DIR__ . '/app/users.php';

use function Tlm\{session_open, current_user, is_admin, csrf_valid, user_count};
use function Tlm\Admin\{redirect, flash, forbidden, not_found, layout, page_head};

header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');
header('X-Frame-Options: DENY');
header('Referrer-Policy: same-origin');
header("Content-Security-Policy: default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'none'; object-src 'none'");

try {
    session_open();
    $path = trim(substr((string) parse_url((string) ($_SERVER['REQUEST_URI'] ?? '/'), PHP_URL_PATH), strlen(Tlm\Admin\BASE)), '/');
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

    // [méthodes, motif, fonction, accès : public | user | admin]
    $routes = [
        ['GET|POST', 'installation', 'Tlm\Admin\setup_page', 'public'],
        ['GET|POST', 'connexion', 'Tlm\Admin\login_page', 'public'],
        ['GET|POST', 'mot-de-passe-oublie', 'Tlm\Admin\forgot_page', 'public'],
        ['GET|POST', 'nouveau-mot-de-passe', 'Tlm\Admin\reset_page', 'public'],
        ['POST', 'deconnexion', 'Tlm\Admin\logout_action', 'user'],
        ['GET', '', 'Tlm\Admin\dashboard_page', 'user'],
        ['GET', 'produits', 'Tlm\Admin\products_page', 'user'],
        ['POST', 'produits/groupe', 'Tlm\Admin\products_bulk', 'user'],
        ['GET|POST', 'produits/nouveau', 'Tlm\Admin\product_page', 'user'],
        ['GET|POST', 'produits/(\d+)', 'Tlm\Admin\product_page', 'user'],
        ['GET', 'produits/(\d+)/apercu', 'Tlm\Admin\product_preview', 'user'],
        ['POST', 'produits/(\d+)/etat', 'Tlm\Admin\product_state', 'user'],
        ['POST', 'produits/(\d+)/dupliquer', 'Tlm\Admin\product_duplicate', 'user'],
        ['POST', 'produits/(\d+)/supprimer', 'Tlm\Admin\product_delete', 'admin'],
        ['POST', 'produits/(\d+)/documents', 'Tlm\Admin\doc_add', 'user'],
        ['POST', 'produits/(\d+)/documents/(\d+)/supprimer', 'Tlm\Admin\doc_delete', 'user'],
        ['GET|POST', 'categories', 'Tlm\Admin\categories_page', 'admin'],
        ['GET', 'journal', 'Tlm\Admin\journal_page', 'user'],
        ['GET', 'utilisateurs', 'Tlm\Admin\users_page', 'admin'],
        ['GET|POST', 'utilisateurs/nouveau', 'Tlm\Admin\user_page', 'admin'],
        ['GET|POST', 'utilisateurs/(\d+)', 'Tlm\Admin\user_page', 'admin'],
        ['GET|POST', 'compte', 'Tlm\Admin\account_page', 'user'],
    ];

    foreach ($routes as [$methods, $pattern, $fn, $access]) {
        if (!preg_match('#^' . $pattern . '$#', $path, $m)) { continue; }
        if (!in_array($method, explode('|', $methods), true)) { http_response_code(405); exit('Méthode non autorisée'); }
        // Premier lancement : création du compte administrateur.
        if (user_count() === 0 && $fn !== 'Tlm\Admin\setup_page') { redirect('installation'); }
        if ($access !== 'public' && !current_user()) {
            if (!empty($_SESSION['expired'])) { unset($_SESSION['expired']); flash('info', 'Votre session a expiré : reconnectez-vous.'); }
            if ($method === 'GET') { $_SESSION['after_login'] = $path; }
            redirect('connexion');
        }
        if ($access === 'admin' && !is_admin()) { forbidden(); }
        if ($method === 'POST' && !csrf_valid()) {
            flash('error', 'Le formulaire a expiré (sécurité). Merci de recommencer.');
            Tlm\Admin\back('');
        }
        array_shift($m);
        $fn(...array_map('intval', $m));
        exit;
    }
    not_found();
} catch (Throwable $e) {
    error_log('[tilamed-admin] ' . $e->getMessage() . ' @ ' . $e->getFile() . ':' . $e->getLine());
    http_response_code(500);
    layout('Erreur', page_head('Une erreur est survenue', 'L\'opération n\'a pas pu aboutir. Réessayez ; si le problème persiste, transmettez l\'heure de l\'erreur à votre prestataire web (journal des erreurs du serveur).'));
}
