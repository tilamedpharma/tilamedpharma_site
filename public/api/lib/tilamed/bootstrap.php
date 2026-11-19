<?php
/**
 * TILAMED Pharma · socle commun du back office et des pages produits dynamiques.
 *
 * - Configuration : même fichier que les formulaires (tilamed-forms-config.php, HORS de public_html).
 * - Données : base SQLite + fichiers déposés (photos, PDF) dans un dossier HORS de public_html
 *   (par défaut « tilamed-data », à côté de public_html), donc conservés à chaque déploiement GitHub → Hostinger.
 * - Libellés du site : dist/api/data/site.json, généré par Astro à chaque build.
 */
declare(strict_types=1);

namespace Tlm;

use PDO;

const VERSION = '1.0.0';
const LANGS = ['fr', 'en', 'es', 'pt', 'it', 'zh', 'ar'];
const GROUPS = ['serum', 'medicines', 'nutrition', 'devices', 'vet'];
const KINDS = ['iv', 'liquids', 'devices', 'vet'];
const STATES = ['published', 'hidden', 'archived'];
/** Champs texte traduisibles d'un produit (table product_texts). */
const TEXT_FIELDS = ['name', 'use', 'composition', 'form', 'indications', 'dosage', 'contraindications', 'warnings', 'storage', 'shelf_life', 'specs', 'regulatory'];
/** Rubriques de la fiche technique, dans l'ordre d'affichage (clés des libellés : fiche.fields). */
const FICHE_FIELDS = ['composition' => 'composition', 'form' => 'form', 'indications' => 'indications', 'dosage' => 'dosage', 'contraindications' => 'contraindications', 'warnings' => 'warnings', 'storage' => 'storage', 'shelf_life' => 'shelfLife', 'specs' => 'specs', 'regulatory' => 'regulatory'];
/** Slugs réservés (gabarit Astro des pages produits). */
const RESERVED_SLUGS = ['fiche-modele'];

/** Dossier public du site (public_html en ligne, dist/ en local). */
function root(): string
{
    return dirname(__DIR__, 3);
}

/** Configuration serveur (secrets SMTP, clé d'installation…), cherchée hors du dossier public. */
function config(): array
{
    static $config = null;
    if ($config === null) {
        $config = [];
        $api = root() . '/api';
        foreach ([dirname($api, 2) . '/tilamed-forms-config.php', dirname($api, 3) . '/tilamed-forms-config.php', $api . '/config.php'] as $path) {
            if (is_file($path)) {
                $c = require $path;
                if (is_array($c)) { $config = $c; }
                break;
            }
        }
    }
    return $config;
}

/** Dossier des données (base + fichiers déposés), créé au besoin. */
function data_dir(): string
{
    static $dir = null;
    if ($dir === null) {
        $dir = getenv('TLM_DATA_DIR') ?: (config()['data_dir'] ?? dirname(root()) . '/tilamed-data');
        $dir = rtrim(str_replace('\\', '/', (string) $dir), '/');
        foreach (['', '/uploads/images', '/uploads/docs', '/cache/pdf', '/tmp', '/sessions'] as $sub) {
            if (!is_dir($dir . $sub) && !@mkdir($dir . $sub, 0750, true) && !is_dir($dir . $sub)) {
                throw new \RuntimeException('Dossier de données impossible à créer : ' . $dir . $sub);
            }
        }
        // Protection si jamais le dossier se trouvait dans la partie publique.
        if (!is_file($dir . '/.htaccess')) { @file_put_contents($dir . '/.htaccess', "Require all denied\n"); }
    }
    return $dir;
}

function now(): string
{
    return gmdate('Y-m-d H:i:s');
}

/** Connexion à la base SQLite (créée et mise à jour automatiquement). */
function db(): PDO
{
    static $pdo = null;
    if ($pdo === null) {
        $opts = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];
        try {
            $pdo = new PDO('sqlite:' . data_dir() . '/tilamed.sqlite', null, null, $opts);
            $pdo->exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000; PRAGMA synchronous = NORMAL;');
            migrate($pdo);
        } catch (\Throwable $e) {
            // Pages publiques seulement (TLM_PUBLIC) : plutôt qu'un catalogue vide, base temporaire en mémoire
            // remplie avec les références d'origine. Le back office, lui, signale l'erreur.
            if (!defined('TLM_PUBLIC')) { throw $e; }
            error_log('[tilamed-catalogue] base indisponible, catalogue d\'origine affiché : ' . $e->getMessage());
            $pdo = new PDO('sqlite::memory:', null, null, $opts);
            migrate($pdo);
        }
    }
    return $pdo;
}

function migrate(PDO $pdo): void
{
    $version = (int) $pdo->query('PRAGMA user_version')->fetchColumn();
    if ($version < 1) {
        $pdo->exec(<<<'SQL'
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY,
          email TEXT NOT NULL UNIQUE COLLATE NOCASE,
          name TEXT NOT NULL,
          role TEXT NOT NULL CHECK (role IN ('admin', 'editor')),
          pass TEXT NOT NULL DEFAULT '',
          active INTEGER NOT NULL DEFAULT 1,
          created_at TEXT NOT NULL,
          last_login TEXT,
          reset_hash TEXT,
          reset_until TEXT
        );
        CREATE TABLE IF NOT EXISTS login_attempts (id INTEGER PRIMARY KEY, ip TEXT NOT NULL, email TEXT NOT NULL, at INTEGER NOT NULL);
        CREATE INDEX IF NOT EXISTS login_attempts_at ON login_attempts (at);
        CREATE TABLE IF NOT EXISTS audit (
          id INTEGER PRIMARY KEY,
          at TEXT NOT NULL,
          user_id INTEGER,
          user_name TEXT NOT NULL DEFAULT '',
          action TEXT NOT NULL,
          entity TEXT NOT NULL DEFAULT '',
          entity_id INTEGER,
          label TEXT NOT NULL DEFAULT ''
        );
        CREATE INDEX IF NOT EXISTS audit_at ON audit (at);
        CREATE TABLE IF NOT EXISTS categories (
          id TEXT PRIMARY KEY,
          grp TEXT NOT NULL,
          position INTEGER NOT NULL DEFAULT 0,
          labels TEXT NOT NULL DEFAULT '{}'
        );
        CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY,
          code TEXT UNIQUE,
          slug TEXT NOT NULL UNIQUE,
          grp TEXT NOT NULL,
          kind TEXT NOT NULL,
          cat TEXT NOT NULL REFERENCES categories (id) ON UPDATE CASCADE,
          state TEXT NOT NULL DEFAULT 'hidden' CHECK (state IN ('published', 'hidden', 'archived')),
          position INTEGER NOT NULL DEFAULT 0,
          formats TEXT NOT NULL DEFAULT '[]',
          route TEXT NOT NULL DEFAULT '',
          line TEXT NOT NULL DEFAULT '',
          phase INTEGER,
          pack TEXT NOT NULL DEFAULT '',
          species TEXT NOT NULL DEFAULT '',
          atc TEXT NOT NULL DEFAULT '',
          keywords TEXT NOT NULL DEFAULT '',
          image TEXT NOT NULL DEFAULT '',
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          created_by TEXT NOT NULL DEFAULT '',
          updated_by TEXT NOT NULL DEFAULT ''
        );
        CREATE INDEX IF NOT EXISTS products_grp ON products (grp, state);
        CREATE TABLE IF NOT EXISTS product_texts (
          product_id INTEGER NOT NULL REFERENCES products (id) ON DELETE CASCADE,
          lang TEXT NOT NULL,
          name TEXT NOT NULL DEFAULT '',
          use TEXT NOT NULL DEFAULT '',
          composition TEXT NOT NULL DEFAULT '',
          form TEXT NOT NULL DEFAULT '',
          indications TEXT NOT NULL DEFAULT '',
          dosage TEXT NOT NULL DEFAULT '',
          contraindications TEXT NOT NULL DEFAULT '',
          warnings TEXT NOT NULL DEFAULT '',
          storage TEXT NOT NULL DEFAULT '',
          shelf_life TEXT NOT NULL DEFAULT '',
          specs TEXT NOT NULL DEFAULT '',
          regulatory TEXT NOT NULL DEFAULT '',
          PRIMARY KEY (product_id, lang)
        );
        CREATE TABLE IF NOT EXISTS documents (
          id INTEGER PRIMARY KEY,
          product_id INTEGER NOT NULL REFERENCES products (id) ON DELETE CASCADE,
          lang TEXT NOT NULL DEFAULT '',
          title TEXT NOT NULL,
          file TEXT NOT NULL,
          original TEXT NOT NULL DEFAULT '',
          size INTEGER NOT NULL DEFAULT 0,
          position INTEGER NOT NULL DEFAULT 0,
          created_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT NOT NULL);
        PRAGMA user_version = 1;
        SQL);
    }
    seed_if_empty($pdo);
}

/** Premier démarrage : reprise des 120 références et des catégories du site (dist/api/data/seed.json). */
function seed_if_empty(PDO $pdo): void
{
    if ($pdo->query("SELECT v FROM meta WHERE k = 'seeded'")->fetchColumn()) { return; }
    $file = root() . '/api/data/seed.json';
    if (!is_file($file)) { return; }
    $seed = json_decode((string) file_get_contents($file), true);
    if (!is_array($seed)) { return; }
    $pdo->beginTransaction();
    try {
        $cat = $pdo->prepare('INSERT OR IGNORE INTO categories (id, grp, position, labels) VALUES (?, ?, ?, ?)');
        foreach ($seed['categories'] as $c) {
            $cat->execute([$c['id'], $c['group'], (int) $c['position'], json_encode($c['labels'], JSON_UNESCAPED_UNICODE)]);
        }
        $now = now();
        $ins = $pdo->prepare('INSERT INTO products (code, slug, grp, kind, cat, state, position, formats, route, line, phase, pack, species, keywords, created_at, updated_at, created_by, updated_by)
                              VALUES (?, ?, ?, ?, ?, \'published\', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, \'Reprise de l\'\'ancien site\', \'Reprise de l\'\'ancien site\')');
        $txt = $pdo->prepare('INSERT INTO product_texts (product_id, lang, name, use) VALUES (?, ?, ?, ?)');
        $used = [];
        foreach ($seed['products'] as $p) {
            $base = slugify($p['texts']['fr']['name'] ?? $p['code']);
            $slug = $base;
            for ($i = 2; isset($used[$slug]); $i++) { $slug = $base . '-' . $i; }
            $used[$slug] = true;
            $ins->execute([$p['code'], $slug, $p['group'], $p['kind'], $p['cat'], (int) $p['position'], json_encode($p['formats'], JSON_UNESCAPED_UNICODE),
                $p['route'], $p['line'], $p['phase'], $p['pack'], $p['species'], $p['keywords'], $now, $now]);
            $id = (int) $pdo->lastInsertId();
            foreach ($p['texts'] as $lang => $t) { $txt->execute([$id, $lang, $t['name'], $t['use']]); }
        }
        $pdo->prepare("INSERT INTO meta (k, v) VALUES ('seeded', ?)")->execute([$now]);
        $pdo->commit();
    } catch (\Throwable $e) {
        $pdo->rollBack();
        throw $e;
    }
}

/* ---------- Libellés et données du site (générés par Astro) ---------- */

function site(): array
{
    static $site = null;
    if ($site === null) {
        $site = json_decode((string) @file_get_contents(root() . '/api/data/site.json'), true);
        if (!is_array($site)) { throw new \RuntimeException('site.json introuvable : lancer « npm run build ».'); }
    }
    return $site;
}

/** Libellés d'une langue (catalogue, fiche, pages). */
function t(string $lang): array
{
    return site()['t'][$lang] ?? site()['t']['fr'];
}

function valid_lang(?string $lang): string
{
    $lang = trim((string) $lang, '/');
    return in_array($lang, LANGS, true) ? $lang : 'fr';
}

/** Chemin localisé : français à la racine, autres langues sous /{lang}/ (comme localizePath côté Astro). */
function lang_path(string $lang, string $slug = ''): string
{
    $slug = trim($slug, '/');
    $base = $lang === 'fr' ? '' : '/' . $lang;
    return $slug === '' ? $base . '/' : $base . '/' . $slug . '/';
}

function site_url(): string
{
    return 'https://www.tilamedpharma.com';
}

function h(?string $s): string
{
    return htmlspecialchars((string) $s, ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML5, 'UTF-8');
}

/** Icône du site (mêmes tracés que src/components/Icon.astro). */
function icon(string $name, int $size = 20, string $class = ''): string
{
    $icons = site()['icons'];
    $fill = isset($icons['fill'][$name]);
    $body = $fill ? $icons['fill'][$name] : ($icons['stroke'][$name] ?? $icons['stroke']['plus']);
    return '<svg class="icon' . ($class !== '' ? ' ' . h($class) : '') . '" width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" fill="' . ($fill ? 'currentColor' : 'none')
        . '" stroke="' . ($fill ? 'none' : 'currentColor') . '" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $body . '</svg>';
}

/** Minuscules sans accents (recherche). */
function norm(string $s): string
{
    if (class_exists('Normalizer')) {
        $s = (string) \Normalizer::normalize($s, \Normalizer::FORM_D);
        $s = (string) preg_replace('/\p{Mn}+/u', '', $s);
    }
    return mb_strtolower($s, 'UTF-8');
}

/** Adresse lisible à partir d'un nom : « Chlorure de sodium 0,9 % » → « chlorure-de-sodium-0-9 ». */
function slugify(string $s): string
{
    $s = norm(str_replace(['œ', 'Œ', 'æ', 'Æ', 'ß'], ['oe', 'oe', 'ae', 'ae', 'ss'], $s));
    if (function_exists('iconv')) {
        $t = @iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $s);
        if (is_string($t) && $t !== '') { $s = $t; }
    }
    $s = (string) preg_replace('/[^a-z0-9]+/', '-', strtolower($s));
    $s = trim($s, '-');
    return substr($s !== '' ? $s : 'produit', 0, 80);
}

/** Présentations : décimales et unités adaptées à la langue (données saisies en français). */
function format_label(string $lang, string $s): string
{
    if (in_array($lang, ['fr', 'es', 'pt', 'it'], true)) { return $s; }
    $s = (string) preg_replace('/(\d),(\d)/', '$1.$2', $s);
    return (string) preg_replace(['/\bMUI\b/u', '/\bUI\b/u', '/\bcp\b/u'], ['MIU', 'IU', 'tab.'], $s);
}

function route_label(string $lang, string $r): string
{
    $solvent = ['fr' => 'Solvant', 'en' => 'Solvent', 'es' => 'Disolvente', 'pt' => 'Solvente', 'it' => 'Solvente', 'zh' => '溶剂', 'ar' => 'مذيب'];
    return $r === 'Solvant' ? $solvent[$lang] : $r;
}

/** Date courte localisée (AAAA-MM-JJ → 19 novembre 2026). */
function format_date(string $lang, string $iso): string
{
    $ts = strtotime($iso . (strlen($iso) > 10 ? ' UTC' : ''));
    if ($ts === false) { return $iso; }
    if (class_exists('IntlDateFormatter')) {
        $f = new \IntlDateFormatter($lang === 'zh' ? 'zh_Hans' : $lang, \IntlDateFormatter::LONG, \IntlDateFormatter::NONE, 'Africa/Porto-Novo');
        $out = $f->format($ts);
        if (is_string($out)) { return $out; }
    }
    return date('d/m/Y', $ts);
}
