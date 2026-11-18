// Vérifie les liens internes du site généré (dist) : liste les pages cibles manquantes.
import fs from 'node:fs';
import path from 'node:path';
const dist = 'dist';
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(dist);
const missing = new Map();
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (/\.(css|js|ico|png|jpe?g|svg|webp|avif|mp4|woff2?)$/.test(href) || href.startsWith('/_astro')) continue;
    const target = path.join(dist, href, href.endsWith('/') ? 'index.html' : '');
    if (!fs.existsSync(target)) missing.set(href, (missing.get(href) ?? 0) + 1);
  }
}
const filter = process.argv[2];
const list = [...missing.keys()].filter((h) => !filter || filter.split(',').some((s) => h.replace(/^\/(en|es|pt|it|zh|ar)\//, '/').startsWith('/' + s + '/')));
console.log(`${files.length} pages, ${missing.size} liens internes cassés au total${filter ? `, dont ${list.length} dans le filtre` : ''}`);
if (filter) console.log(list.join('\n') || '(aucun)');
