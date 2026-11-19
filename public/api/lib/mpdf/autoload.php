<?php
/**
 * Chargeur de classes de mPDF 8.2.5 et de ses dépendances (copiées depuis leurs dépôts GitHub officiels,
 * sans Composer). Sert à produire les fiches techniques PDF des produits.
 *   mpdf/mpdf 8.2.5 (GPL-2.0) · psr/log 3.0.2 · psr/http-message 2.0 · mpdf/psr-log-aware-trait 3.0.0
 *   mpdf/psr-http-message-shim 2.0.1 · setasign/fpdi 2.6.4 · myclabs/deep-copy 1.13.4
 * Les polices d'origine de mPDF (88 Mo) ne sont pas copiées : on utilise celles de la charte (../fonts).
 */
declare(strict_types=1);

spl_autoload_register(static function (string $class): void {
    static $map = [
        'Mpdf\\PsrLogAwareTrait\\'    => '/deps/psr-log-aware-trait/',
        'Mpdf\\PsrHttpMessageShim\\'  => '/deps/psr-http-message-shim/',
        'Mpdf\\'                      => '/src/',
        'Psr\\Log\\'                  => '/deps/psr-log/',
        'Psr\\Http\\Message\\'        => '/deps/psr-http-message/',
        'setasign\\Fpdi\\'            => '/deps/fpdi/',
        'DeepCopy\\'                  => '/deps/deep-copy/',
    ];
    foreach ($map as $prefix => $dir) {
        if (strncmp($class, $prefix, strlen($prefix)) === 0) {
            $file = __DIR__ . $dir . str_replace('\\', '/', substr($class, strlen($prefix))) . '.php';
            if (is_file($file)) require $file;
            return;
        }
    }
});

require_once __DIR__ . '/src/functions.php';
require_once __DIR__ . '/deps/deep-copy/deep_copy.php';
