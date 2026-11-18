// Retire la section « Nos activités » de l'accueil et renumérote les sections suivantes.
import fs from 'node:fs';
const f = 'src/components/home/HomePage.astro';
let s = fs.readFileSync(f, 'utf8');
const a = s.indexOf('<!-- ACTIVITÉS -->');
const b = s.indexOf('<!-- POURQUOI LE BÉNIN -->');
if (a < 0 || b < 0) throw new Error('ancres introuvables');
s = s.slice(0, a) + s.slice(b);
s = s.replace(/^import imgAct\d from .*\r?\n/gm, '');
s = s.replace(/^const act(Imgs|Icons|Links) = .*\r?\n/gm, '');
s = s.replace(/<span class="eyebrow__n">(\d\d)<\/span>/g, (m, n) => {
  const k = Number(n);
  return k >= 3 ? `<span class="eyebrow__n">${String(k - 1).padStart(2, '0')}</span>` : m;
});
fs.writeFileSync(f, s);
console.log('numéros :', [...s.matchAll(/eyebrow__n">(\d\d)/g)].map((m) => m[1]).join(' '));
console.log('restes act :', /actImgs|imgAct|acts-title/.test(s));
