// Inventaire des images visibles du site (pages françaises de dist/) : pour chaque photo ou vidéo,
// les pages où elle apparaît et le nombre d'apparitions. Règle du client (19/11/2026) : une image = un seul endroit.
// Usage : npm run build puis `node tools/image-usage.mjs` (ajouter `--all` pour lister aussi les images uniques).
// Les logos (partenaires, référentiels, confiance) et les balises meta (og:image) ne sont pas comptés.
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const langs = /^(en|es|pt|it|zh|ar)(\/|$)/;
const pages = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const rel = path.relative(dist, p).replace(/\\/g, '/');
    if (fs.statSync(p).isDirectory()) { if (!langs.test(rel) && rel !== '_astro' && rel !== 'media' && rel !== 'brand' && rel !== 'api') walk(p); }
    else if (f === 'index.html') pages.push(p);
  }
})(dist);

const ignore = /\/(partners|standards|trust|signature|flags?)\/|logo|favicon|icon/i;
const nameOf = (url) => decodeURIComponent(url.split('?')[0].split('/').pop()).split('.')[0];

const usage = new Map(); // nom → Map(page → nombre)
for (const file of pages) {
  const page = '/' + path.relative(dist, path.dirname(file)).replace(/\\/g, '/') + (path.dirname(file) === dist ? '' : '/');
  let html = fs.readFileSync(file, 'utf8').replace(/<head>[\s\S]*?<\/head>/, '');
  // Une <picture> = une seule apparition : on ne garde que son <img>.
  html = html.replace(/<picture>[\s\S]*?(<img[^>]*>)[\s\S]*?<\/picture>/g, '$1');
  const seen = [];
  for (const m of html.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)) seen.push(m[1]);
  for (const m of html.matchAll(/<video[^>]*\sposter="([^"]+)"/g)) seen.push(m[1]);
  for (const m of html.matchAll(/data-src="([^"]+\.(?:jpe?g|webp|avif|png|mp4))"/g)) seen.push(m[1]);
  for (const m of html.matchAll(/url\((['"]?)([^'")]+\.(?:jpe?g|webp|avif|png))\1\)/g)) seen.push(m[2]);
  for (const url of seen) {
    if (ignore.test(url) || url.startsWith('data:')) continue;
    const n = nameOf(url);
    if (!usage.has(n)) usage.set(n, new Map());
    usage.get(n).set(page, (usage.get(n).get(page) ?? 0) + 1);
  }
}

const all = process.argv.includes('--all');
const rows = [...usage].map(([n, m]) => ({ n, places: [...m.values()].reduce((a, b) => a + b, 0), m })).sort((a, b) => b.places - a.places || a.n.localeCompare(b.n));
const dup = rows.filter((r) => r.places > 1);
for (const r of all ? rows : dup) console.log(`${r.places > 1 ? '✗' : '✓'} ${r.n} (${r.places}) : ${[...r.m].map(([p, c]) => c > 1 ? `${p} ×${c}` : p).join(', ')}`);
console.log(`\n${pages.length} pages FR · ${rows.length} images visibles · ${dup.length} utilisées à plusieurs endroits`);
