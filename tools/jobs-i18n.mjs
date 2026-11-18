// Ajoute les détails « emplois » (mise en avant des 150 emplois) au bloc impact des 7 langues.
import fs from 'node:fs';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const J = {
  fr: ['Emplois directs', '70 % de postes techniques', 'Transfert de compétences sur 5 ans', 'Rejoindre l\'équipe'],
  en: ['Direct jobs', '70% technical positions', '5-year skills transfer', 'Join the team'],
  es: ['Empleos directos', '70 % de puestos técnicos', 'Transferencia de competencias en 5 años', 'Unirse al equipo'],
  pt: ['Empregos diretos', '70 % de postos técnicos', 'Transferência de competências em 5 anos', 'Juntar-se à equipa'],
  it: ['Posti di lavoro diretti', '70% di posizioni tecniche', 'Trasferimento di competenze in 5 anni', 'Unisciti al team'],
  zh: ['直接就业岗位', '70% 为技术岗位', '为期 5 年的技能转移', '加入我们'],
  ar: ['وظائف مباشرة', '70% وظائف تقنية', 'نقل المهارات على مدى 5 سنوات', 'انضم إلى الفريق'],
};
for (const [lang, [badge, a, b, cta]] of Object.entries(J)) {
  const file = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(file, 'utf8');
  if (s.includes('    jobs: {')) { console.log(lang, 'déjà fait'); continue; }
  const block = `    jobs: {\n      badge: ${q(badge)},\n      facts: [${q(a)}, ${q(b)}],\n      cta: ${q(cta)},\n    },\n`;
  if (!s.includes('    capacity: {')) throw new Error(lang + ' : ancre introuvable');
  s = s.replace('    capacity: {', block + '    capacity: {');
  fs.writeFileSync(file, s);
  console.log(lang, 'OK');
}
