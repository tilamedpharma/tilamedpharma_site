// Pourquoi le Bénin · chantier 6 (18/11/2026) : la carte Afrique de l'Ouest (maison = presence) est remplacée
// par un schéma du corridor côtier Abidjan – Lagos. Ajoute position.corridor / port / border dans les 7 dictionnaires.
import fs from 'node:fs';

const data = {
  fr: ['Sur le corridor côtier Abidjan – Lagos', 'Port', 'Frontière'],
  en: ['On the Abidjan – Lagos coastal corridor', 'Port', 'Border'],
  es: ['En el corredor costero Abidjan – Lagos', 'Puerto', 'Frontera'],
  pt: ['No corredor costeiro Abidjan – Lagos', 'Porto', 'Fronteira'],
  it: ['Sul corridoio costiero Abidjan – Lagos', 'Porto', 'Confine'],
  zh: ['位于阿比让—拉各斯沿海走廊', '港口', '边境'],
  ar: ['على الممر الساحلي أبيدجان – لاغوس', 'ميناء', 'الحدود'],
};
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

for (const [lang, [corridor, port, border]] of Object.entries(data)) {
  const file = new URL(`../src/i18n/pages/benin/${lang}.ts`, import.meta.url);
  const src = fs.readFileSync(file, 'utf8');
  if (src.includes('corridor:')) { console.log(lang, 'déjà présent'); continue; }
  const pos = src.indexOf('\n  position: {');
  const at = src.indexOf('\n    items: [', pos);
  if (pos < 0 || at < 0) throw new Error(`${lang}: position introuvable`);
  const block = `\n    corridor: ${q(corridor)},\n    port: ${q(port)},\n    border: ${q(border)},`;
  fs.writeFileSync(file, src.slice(0, at) + block + src.slice(at));
  console.log(lang, 'ok');
}
