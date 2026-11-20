<?php
/**
 * Routeur LOCAL pour tester le back office et les pages produits sans Apache :
 * imite les règles de public/.htaccess et public/admin/.htaccess.
 *
 *   npm run build
 *   set TLM_DATA_DIR=C:\chemin\vers\tilamed-data-local   (PowerShell : $env:TLM_DATA_DIR = "...")
 *   php -S 127.0.0.1:8080 -t dist tools/php-router.php
 *
 * Puis http://127.0.0.1:8080/produits/ et http://127.0.0.1:8080/admin/
 */
declare(strict_types=1);

$root = rtrim(str_replace('\\', '/', (string) $_SERVER['DOCUMENT_ROOT']), '/');
$uri = rawurldecode((string) parse_url((string) $_SERVER['REQUEST_URI'], PHP_URL_PATH));
$L = '(?:(en|es|pt|it|zh|ar)/)?';

$run = static function (string $script, array $get = []) use ($root): bool {
    $_GET = $get + $_GET;
    $_SERVER['SCRIPT_NAME'] = '/' . $script;
    $_SERVER['SCRIPT_FILENAME'] = $root . '/' . $script;
    chdir(dirname($root . '/' . $script));
    require $root . '/' . $script;
    return true;
};

// Dossiers jamais servis
if (preg_match('#^/(api/lib|api/data|admin/app)(/|$)#', $uri) || preg_match('#/\.#', $uri)) {
    http_response_code(403);
    echo 'Accès refusé';
    return true;
}
// Back office : tout passe par admin/index.php, sauf les fichiers de admin/assets
if (preg_match('#^/admin(/|$)#', $uri)) {
    if (str_starts_with($uri, '/admin/assets/') && is_file($root . $uri)) { return false; }
    if ($uri === '/admin') { header('Location: /admin/', true, 301); return true; }
    return $run('admin/index.php');
}
if (preg_match("#^/{$L}produits/([a-z0-9-]+)$#", $uri, $m)) {
    header('Location: ' . ($m[1] ? '/' . $m[1] : '') . '/produits/' . $m[2] . '/', true, 301);
    return true;
}
if (preg_match("#^/{$L}(produits|serums|medicaments|solutions-nutritionnelles|dispositifs-medicaux|sante-animale)/$#", $uri, $m)) {
    return $run('api/catalogue.php', ['l' => $m[1] ?? '', 'p' => $m[2]]);
}
if (preg_match("#^/{$L}produits/([a-z0-9-]+)/$#", $uri, $m)) {
    return $run('api/catalogue.php', ['l' => $m[1] ?? '', 'p' => 'fiche', 's' => $m[2]]);
}
if (preg_match("#^/{$L}produits/([a-z0-9-]+)/fiche-technique\\.pdf$#", $uri, $m)) {
    return $run('api/fiche.php', ['l' => $m[1] ?? '', 's' => $m[2]]);
}
if (preg_match("#^/{$L}produits/[a-z0-9-]+/documents/([0-9]+)/[A-Za-z0-9._-]*$#", $uri, $m)) {
    return $run('api/fiche.php', ['doc' => $m[2]]);
}
if ($uri === '/sitemap-produits.xml') {
    return $run('api/sitemap.php');
}
if (preg_match('#^/api/(catalogue|fiche|form|sitemap)\.php$#', $uri, $m)) {
    return $run('api/' . $m[1] . '.php');
}
// Fichiers statiques et dossiers avec index.html
$path = $root . $uri;
if (is_file($path) || is_file(rtrim($path, '/') . '/index.html')) { return false; }
http_response_code(404);
readfile($root . '/404.html');
return true;
