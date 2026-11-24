// Find FR strings by substring and print the same key path in all languages.
// Usage: node tools/i18n-find.mjs <dict path with {lang}> "<fr substring>" ["<fr substring>"...]
// Example: node tools/i18n-find.mjs src/i18n/{lang}.ts "distribué dans 15 pays"
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const LANGS = ['fr', 'en', 'es', 'pt', 'it', 'zh', 'ar'];
const [pat, ...needles] = process.argv.slice(2);
const load = async l => { const m = await import(pathToFileURL(path.resolve(pat.replace('{lang}', l))).href); return m.default ?? Object.values(m)[0]; };
const dicts = {}; for (const l of LANGS) dicts[l] = await load(l);
function* walk(o, p = []) { if (typeof o === 'string') { yield [p, o]; return; } if (o && typeof o === 'object') for (const k of Object.keys(o)) yield* walk(o[k], [...p, k]); }
const get = (o, p) => p.reduce((a, k) => (a == null ? a : a[k]), o);
for (const n of needles) {
  const hits = [...walk(dicts.fr)].filter(([, v]) => v.includes(n));
  if (!hits.length) { console.log('### NOT FOUND:', n); continue; }
  for (const [p] of hits) { console.log('### ' + p.join('.')); for (const l of LANGS) console.log(`  ${l}: ${JSON.stringify(get(dicts[l], p))}`); }
}
