// Plan du site pour les moteurs de recherche (étape « postbuild », lancée après chaque `npm run build`).
// Parcourt les pages générées dans dist/ et écrit :
//   dist/sitemap.xml        index : pages du site + fiches produits
//   dist/sitemap-pages.xml  toutes les pages Astro, avec leurs versions dans les 7 langues (hreflang)
// Les fiches produits viennent de la base du back office : /sitemap-produits.xml est servi par public/api/sitemap.php.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const SITE = 'https://www.tilamedpharma.com';
const SKIP = [/^admin\//, /^api\//, /^_/, /(^|\/)produits\/fiche-modele\//, /^404\//];

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name === 'index.html') files.push(p);
  }
})(DIST);

const attr = (tag, name) => (tag.match(new RegExp(`${name}="([^"]*)"`)) || [])[1];
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const today = new Date().toISOString().slice(0, 10);

const entries = [];
for (const f of files) {
  const rel = relative(DIST, f).split(sep).join('/').replace(/index\.html$/, '');
  if (SKIP.some((r) => r.test(rel))) continue;
  const html = readFileSync(f, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  if (/<meta name="robots" content="[^"]*noindex/i.test(head)) continue;
  const canonical = attr(head.match(/<link rel="canonical"[^>]*>/)?.[0] ?? '', 'href') ?? `${SITE}/${rel}`;
  if (canonical !== `${SITE}/${rel}`) continue; // page qui renvoie vers une autre adresse : pas dans le plan
  const alternates = [...head.matchAll(/<link rel="alternate" hreflang="[^"]+" href="[^"]+"[^>]*>/g)].map((m) => [attr(m[0], 'hreflang'), attr(m[0], 'href')]);
  const depth = rel.split('/').filter(Boolean).length - (/^(en|es|pt|it|zh|ar)\//.test(rel) ? 1 : 0);
  entries.push({ loc: canonical, alternates, priority: depth === 0 ? '1.0' : depth === 1 ? '0.8' : '0.6' });
}
entries.sort((a, b) => a.loc.localeCompare(b.loc));

const pages = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map((e) => `  <url>
    <loc>${esc(e.loc)}</loc>
${e.alternates.map(([l, h]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${esc(h)}"/>`).join('\n')}
    <lastmod>${today}</lastmod>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(DIST, 'sitemap-pages.xml'), pages);

writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${SITE}/sitemap-pages.xml</loc><lastmod>${today}</lastmod></sitemap>
  <sitemap><loc>${SITE}/sitemap-produits.xml</loc></sitemap>
</sitemapindex>
`);

console.log(`sitemap : ${entries.length} pages`);
