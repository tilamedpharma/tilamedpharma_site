// Convertit le catalogue de l'ancien site (data/catalog.json) en module TypeScript du nouveau site.
// Ne garde que les références visibles. Noms et usages fr/en repris tels quels ; autres langues dans src/i18n/catalog/.
import fs from 'node:fs';
const SRC = '../Site actuel/data/catalog.json';
const c = JSON.parse(fs.readFileSync(SRC, 'utf8'));

const catGroup = {
  standard: 'serum', irrigation: 'serum', dialysis: 'serum', 'serum-special': 'serum',
  specific: 'medicines', antibiotic: 'medicines', oral: 'medicines', antiseptic: 'medicines', svp: 'medicines', vaccines: 'medicines',
  nutrition: 'nutrition', vitamins: 'nutrition',
};
const items = c.items.filter((i) => !i.hidden).map((i) => {
  const group = i.family === 'vet' ? 'vet' : i.family === 'devices' ? 'devices' : (i.group ?? catGroup[i.cat]);
  if (!group) throw new Error('groupe inconnu ' + i.id + ' ' + i.cat);
  const o = { id: i.id, group, family: i.family, cat: i.cat, name: i.name, use: i.use };
  if (i.formats?.length) o.formats = i.formats;
  if (i.route) o.route = i.route;
  if (i.phase) o.phase = i.phase;
  if (i.line) o.line = i.line;
  if (i.pack) o.pack = i.pack;
  if (i.species) o.species = i.species;
  o.keywords = i.keywords ?? '';
  return o;
});
const count = {};
items.forEach((i) => (count[i.group] = (count[i.group] ?? 0) + 1));
const out = `// Généré par tools/build-catalog.mjs depuis l'ancien site — ne pas modifier à la main.
// ${items.length} références visibles.
export type Group = 'serum' | 'medicines' | 'nutrition' | 'devices' | 'vet';
export type CatalogItem = {
  id: string; group: Group; family: 'iv' | 'liquids' | 'devices' | 'vet'; cat: string;
  name: { fr: string; en: string }; use: { fr: string; en: string };
  formats?: string[]; route?: string; phase?: number; line?: string; pack?: string; species?: string; keywords: string;
};
export const catalog: CatalogItem[] = ${JSON.stringify(items, null, 1)};
`;
fs.writeFileSync('src/data/catalog.ts', out);
console.log(items.length, 'références', count);
// Liste de travail pour les traductions
fs.writeFileSync(process.argv[2] ?? 'catalog-worklist.txt', items.map((i) => `${i.id}\t${i.name.fr}\t${i.use.fr}\t|| ${i.name.en}\t${i.use.en}`).join('\n'));
