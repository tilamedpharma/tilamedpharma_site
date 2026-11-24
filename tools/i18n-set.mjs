// Replace i18n string values by key path in the 7 language source files.
// Usage: node tools/i18n-set.mjs <edits.mjs>
// edits.mjs default-exports [{ pat: 'src/i18n/{lang}.ts', path: 'a.b.0.c', v: { fr, en, es, pt, it, zh, ar } }]
// The current value is read by importing the dict; its source literal must occur exactly once in the file.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const LANGS = ['fr', 'en', 'es', 'pt', 'it', 'zh', 'ar'];
const edits = (await import(pathToFileURL(path.resolve(process.argv[2])).href)).default;
const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
const lit = s => [ "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'", JSON.stringify(s), '`' + s + '`' ];
const enc = s => "'" + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const cache = {};
let fail = 0, ok = 0;
for (const e of edits) {
  for (const l of LANGS) {
    if (e.v[l] == null) continue;
    const file = path.resolve(e.pat.replace('{lang}', l));
    cache[file] ??= { src: fs.readFileSync(file, 'utf8'), mod: (await import(pathToFileURL(file).href + '?t=' + Date.now())) };
    const d = cache[file].mod.default ?? Object.values(cache[file].mod)[0];
    const cur = get(d, e.path);
    if (typeof cur !== 'string') { console.log(`FAIL ${l} ${e.path}: not a string`); fail++; continue; }
    let done = false;
    for (const L of lit(cur)) {
      const n = cache[file].src.split(L).length - 1;
      if (n === 1) { cache[file].src = cache[file].src.replace(L, () => enc(e.v[l])); done = true; break; }
      if (n > 1) { console.log(`FAIL ${l} ${e.path}: ${n} occurrences of ${L.slice(0, 60)}`); break; }
    }
    if (done) ok++; else { if (!cache[file].src.includes(cur)) console.log(`FAIL ${l} ${e.path}: literal not found ${JSON.stringify(cur).slice(0, 70)}`); fail++; }
  }
}
for (const [f, c] of Object.entries(cache)) fs.writeFileSync(f, c.src);
console.log(`ok ${ok}, fail ${fail}`);
