// Dé-duplication de « Notre distribution » (chaine-distribution), 18/11/2026 :
// - intro réduite à ce qui est propre au circuit (le constat « tout est importé » est sur pourquoi-le-benin) ;
// - bloc « Ce que change la production locale » retiré (= pourquoi-le-benin).
import fs from 'node:fs';

const intros = {
  fr: 'Nos produits sont fabriqués au Bénin, à quelques heures de route des hôpitaux qui les utilisent. Voici le chemin qu\'ils suivent, de l\'usine jusqu\'au patient.',
  en: 'Our products are made in Benin, a few hours by road from the hospitals that use them. Here is the route they follow, from the plant to the patient.',
  es: 'Nuestros productos se fabrican en Benín, a pocas horas por carretera de los hospitales que los utilizan. Este es el camino que siguen, de la planta al paciente.',
  pt: 'Os nossos produtos são fabricados no Benim, a poucas horas de estrada dos hospitais que os utilizam. Eis o caminho que percorrem, da fábrica até ao doente.',
  it: 'I nostri prodotti sono fabbricati in Benin, a poche ore di strada dagli ospedali che li utilizzano. Ecco il percorso che seguono, dallo stabilimento al paziente.',
  zh: '我们的产品在贝宁生产，距使用它们的医院仅几小时车程。以下是产品从工厂到患者的流转路径。',
  ar: 'تُصنع منتجاتنا في بنين، على بُعد ساعات بالطريق من المستشفيات التي تستخدمها. وهذا هو المسار الذي تسلكه من المصنع إلى المريض.',
};
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

for (const [lang, intro] of Object.entries(intros)) {
  const file = new URL(`../src/i18n/pages/achats-carrieres/${lang}.ts`, import.meta.url);
  const src = fs.readFileSync(file, 'utf8');
  const a = src.indexOf("'chaine-distribution': {");
  const b = src.indexOf('note:', a);
  if (a < 0 || b < 0) throw new Error(`${lang}: entrée introuvable`);
  let seg = src.slice(a, b);
  const before = seg.length;
  seg = seg.replace(/intro: '(?:[^'\\]|\\.)*',/, `intro: ${q(intro)},`);
  seg = seg.replace(/\n\s*\{ kind: 'cards'[\s\S]*?\] \},/, '');
  if (seg.length === before) throw new Error(`${lang}: rien remplacé`);
  fs.writeFileSync(file, src.slice(0, a) + seg + src.slice(b));
  console.log(lang, 'ok', before, '→', seg.length);
}
