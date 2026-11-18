// Dé-duplication de la page Usine (18/11/2026) : retire des dictionnaires usine/*.ts les blocs recopiés
// des pages détaillées (bfs, clean, lab, utilities, transfer, site.units) et ajoute la section « explore ».
import fs from 'node:fs';

const explore = {
  fr: ['Autour de la production', 'Ce qui rend la production possible', 'Zones propres, services techniques, formation des équipes et le site lui-même : chaque sujet a sa page.', 'En savoir plus'],
  en: ['Beyond production', 'What makes production possible', 'Clean areas, technical services, team training and the site itself: each topic has its own page.', 'Learn more'],
  es: ['Más allá de la producción', 'Lo que hace posible la producción', 'Zonas limpias, servicios técnicos, formación de los equipos y el propio emplazamiento: cada tema tiene su página.', 'Saber más'],
  pt: ['Para além da produção', 'O que torna a produção possível', 'Zonas limpas, serviços técnicos, formação das equipas e o próprio terreno: cada tema tem a sua página.', 'Saber mais'],
  it: ['Oltre la produzione', 'Ciò che rende possibile la produzione', 'Zone pulite, servizi tecnici, formazione delle squadre e il sito stesso: ogni tema ha la sua pagina.', 'Scopri di più'],
  zh: ['生产之外', '支撑生产的关键', '洁净区、技术服务、团队培训以及厂址本身：每个主题都有专门页面。', '了解更多'],
  ar: ['ما وراء الإنتاج', 'ما يجعل الإنتاج ممكنًا', 'المناطق النظيفة والخدمات التقنية وتدريب الفرق والموقع نفسه: لكل موضوع صفحته.', 'اعرف المزيد'],
};
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

for (const [lang, [eyebrow, title, intro, more]] of Object.entries(explore)) {
  const file = new URL(`../src/i18n/pages/usine/${lang}.ts`, import.meta.url);
  let src = fs.readFileSync(file, 'utf8');
  const a = src.indexOf('\n  bfs: {');
  const b = src.indexOf('\n  green: {');
  if (a < 0 || b < 0 || b < a) throw new Error(`${lang}: blocs introuvables`);
  const block = `\n  explore: {\n    eyebrow: ${q(eyebrow)},\n    title: ${q(title)},\n    intro: ${q(intro)},\n    more: ${q(more)},\n  },`;
  src = src.slice(0, a) + block + src.slice(b);
  src = src.replace(/\n    units: \[[\s\S]*?\n    \],/, '');
  fs.writeFileSync(file, src);
  console.log(lang, 'ok');
}
