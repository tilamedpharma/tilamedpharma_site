// Corrige la capacité : 15 M LVP (grand volume) + 35 M SVP (petit volume) — deux lignes distinctes.
import fs from 'node:fs';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const C = {
  fr: ['Capacité de production annuelle', 'Solutions injectables fabriquées à Sèmè-Podji, par an', [['15', 'millions', 'LVP', 'Solutés de grand volume : poches et flacons de perfusion'], ['35', 'millions', 'SVP', 'Injectables de petit volume : ampoules et flacons']]],
  en: ['Annual production capacity', 'Injectable solutions made in Sèmè-Podji, per year', [['15', 'million', 'LVP', 'Large-volume parenterals: infusion bags and bottles'], ['35', 'million', 'SVP', 'Small-volume parenterals: ampoules and vials']]],
  es: ['Capacidad de producción anual', 'Soluciones inyectables fabricadas en Sèmè-Podji, por año', [['15', 'millones', 'LVP', 'Parenterales de gran volumen: bolsas y frascos de perfusión'], ['35', 'millones', 'SVP', 'Parenterales de pequeño volumen: ampollas y viales']]],
  pt: ['Capacidade de produção anual', 'Soluções injetáveis fabricadas em Sèmè-Podji, por ano', [['15', 'milhões', 'LVP', 'Parentéricos de grande volume: sacos e frascos de perfusão'], ['35', 'milhões', 'SVP', 'Parentéricos de pequeno volume: ampolas e frascos']]],
  it: ['Capacità produttiva annua', 'Soluzioni iniettabili prodotte a Sèmè-Podji, all\'anno', [['15', 'milioni', 'LVP', 'Parenterali di grande volume: sacche e flaconi per infusione'], ['35', 'milioni', 'SVP', 'Parenterali di piccolo volume: fiale e flaconcini']]],
  zh: ['年产能', '塞梅-波吉工厂每年生产的注射剂', [['1500', '万', 'LVP', '大容量注射剂：输液袋与输液瓶'], ['3500', '万', 'SVP', '小容量注射剂：安瓿与西林瓶']]],
  ar: ['الطاقة الإنتاجية السنوية', 'محاليل حقن تُصنع في سيمي-بودجي سنويًا', [['15', 'مليون', 'LVP', 'محاليل حقن كبيرة الحجم: أكياس وعبوات التسريب'], ['35', 'مليون', 'SVP', 'محاليل حقن صغيرة الحجم: أمبولات وقوارير']]],
};
for (const [lang, [title, sub, items]] of Object.entries(C)) {
  const file = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(file, 'utf8');
  const block = `    capacity: {
      title: ${q(title)},
      sub: ${q(sub)},
      items: [
${items.map(([v, u, code, l]) => `        { value: ${q(v)}, unit: ${q(u)}, code: ${q(code)}, label: ${q(l)} },`).join('\n')}
      ],
    },
`;
  const re = /    capacity: \{\n[\s\S]*?\n    \},\n/;
  if (!re.test(s)) throw new Error(lang + ' : bloc capacity introuvable');
  s = s.replace(re, block);
  fs.writeFileSync(file, s);
  console.log(lang, 'OK');
}
