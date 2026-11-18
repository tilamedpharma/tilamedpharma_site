// Ajoute la capacité de production LVP (15 M au démarrage → 35 M à pleine capacité) au bloc impact des 7 langues.
import fs from 'node:fs';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const C = {
  fr: ['Capacité de production annuelle', 'Solutés de grand volume (LVP) : poches et flacons de perfusion', [['15', 'millions', 'd\'unités LVP par an au démarrage'], ['35', 'millions', 'd\'unités LVP par an à pleine capacité']]],
  en: ['Annual production capacity', 'Large-volume parenterals (LVP): infusion bags and bottles', [['15', 'million', 'LVP units a year at start-up'], ['35', 'million', 'LVP units a year at full capacity']]],
  es: ['Capacidad de producción anual', 'Soluciones parenterales de gran volumen (LVP): bolsas y frascos de perfusión', [['15', 'millones', 'de unidades LVP al año en el arranque'], ['35', 'millones', 'de unidades LVP al año a plena capacidad']]],
  pt: ['Capacidade de produção anual', 'Soluções parentéricas de grande volume (LVP): sacos e frascos de perfusão', [['15', 'milhões', 'de unidades LVP por ano no arranque'], ['35', 'milhões', 'de unidades LVP por ano em plena capacidade']]],
  it: ['Capacità produttiva annua', 'Soluzioni parenterali di grande volume (LVP): sacche e flaconi per infusione', [['15', 'milioni', 'di unità LVP all\'anno all\'avvio'], ['35', 'milioni', 'di unità LVP all\'anno a pieno regime']]],
  zh: ['年产能', '大容量注射剂（LVP）：输液袋与输液瓶', [['1500', '万', '投产初期每年 LVP 产量（件）'], ['3500', '万', '满负荷每年 LVP 产量（件）']]],
  ar: ['الطاقة الإنتاجية السنوية', 'محاليل الحقن كبيرة الحجم (LVP): أكياس وعبوات التسريب', [['15', 'مليون', 'وحدة LVP سنويًا عند بدء التشغيل'], ['35', 'مليون', 'وحدة LVP سنويًا بكامل الطاقة']]],
};
for (const [lang, [title, sub, items]] of Object.entries(C)) {
  const file = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(file, 'utf8');
  if (s.includes('    capacity: {')) { console.log(lang, 'déjà fait'); continue; }
  const block = `    capacity: {
      title: ${q(title)},
      sub: ${q(sub)},
      items: [
${items.map(([v, u, l]) => `        { value: ${q(v)}, unit: ${q(u)}, label: ${q(l)} },`).join('\n')}
      ],
    },
`;
  const at = s.indexOf('  impact: {');
  const badge = s.indexOf('\n    badge: ', at);
  if (at < 0 || badge < 0) throw new Error(lang + ' : ancre introuvable');
  s = s.slice(0, badge + 1) + block + s.slice(badge + 1);
  fs.writeFileSync(file, s);
  console.log(lang, 'OK');
}
