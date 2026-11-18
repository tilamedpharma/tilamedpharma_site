// Ajoute `chain` (section animée « Notre chaîne de distribution » de la page d'accueil) dans les 7 dictionnaires principaux.
// Source : accueil de l'ancien site (schéma « De Sèmè-Podji jusqu'au patient »), demande client 18/11/2026.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../src/i18n/', import.meta.url));
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

const T = {
  fr: { eyebrow: 'Notre chaîne de distribution', title: 'De Sèmè-Podji jusqu\'au patient', intro: 'Un circuit court, rapide et traçable : fabriquées au Bénin, nos solutions arrivent aux patients en moins d\'un mois.', label: 'Chaîne de distribution en trois étapes',
    steps: [['Usine de Sèmè-Podji', 'Fabriqué et contrôlé au Bénin'], ['Centrales d\'achat, grossistes et distributeurs', 'Coopératives publiques régionales, grossistes privés et autres distributeurs'], ['Patients', 'Soignés en moins d\'un mois']],
    badge: ['Moins d\'un mois', 'de notre usine jusqu\'au patient'], cta: 'Découvrir notre distribution' },
  en: { eyebrow: 'Our distribution chain', title: 'From Sèmè-Podji to the patient', intro: 'A short, fast and traceable supply chain: made in Benin, our solutions reach patients in less than a month.', label: 'Three-step distribution chain',
    steps: [['Sèmè-Podji plant', 'Made and tested in Benin'], ['Purchasing centres, wholesalers and distributors', 'Regional public cooperatives, private wholesalers and other distributors'], ['Patients', 'Treated in less than a month']],
    badge: ['Less than a month', 'from our plant to the patient'], cta: 'Discover our distribution' },
  es: { eyebrow: 'Nuestra cadena de distribución', title: 'De Sèmè-Podji al paciente', intro: 'Un circuito corto, rápido y trazable: fabricadas en Benín, nuestras soluciones llegan a los pacientes en menos de un mes.', label: 'Cadena de distribución en tres etapas',
    steps: [['Planta de Sèmè-Podji', 'Fabricado y controlado en Benín'], ['Centrales de compras, mayoristas y distribuidores', 'Cooperativas públicas regionales, mayoristas privados y otros distribuidores'], ['Pacientes', 'Atendidos en menos de un mes']],
    badge: ['Menos de un mes', 'de nuestra planta al paciente'], cta: 'Descubrir nuestra distribución' },
  pt: { eyebrow: 'A nossa cadeia de distribuição', title: 'De Sèmè-Podji até ao doente', intro: 'Um circuito curto, rápido e rastreável: fabricadas no Benim, as nossas soluções chegam aos doentes em menos de um mês.', label: 'Cadeia de distribuição em três etapas',
    steps: [['Fábrica de Sèmè-Podji', 'Fabricado e controlado no Benim'], ['Centrais de compras, grossistas e distribuidores', 'Cooperativas públicas regionais, grossistas privados e outros distribuidores'], ['Doentes', 'Tratados em menos de um mês']],
    badge: ['Menos de um mês', 'da nossa fábrica até ao doente'], cta: 'Descobrir a nossa distribuição' },
  it: { eyebrow: 'La nostra catena distributiva', title: 'Da Sèmè-Podji al paziente', intro: 'Un circuito corto, rapido e tracciabile: prodotte in Benin, le nostre soluzioni arrivano ai pazienti in meno di un mese.', label: 'Catena distributiva in tre fasi',
    steps: [['Stabilimento di Sèmè-Podji', 'Prodotto e controllato in Benin'], ['Centrali d\'acquisto, grossisti e distributori', 'Cooperative pubbliche regionali, grossisti privati e altri distributori'], ['Pazienti', 'Curati in meno di un mese']],
    badge: ['Meno di un mese', 'dal nostro stabilimento al paziente'], cta: 'Scopri la nostra distribuzione' },
  zh: { eyebrow: '我们的分销链', title: '从塞梅-波吉到患者', intro: '短、快、可追溯的供应链：我们的产品在贝宁生产，不到一个月即可送达患者。', label: '三步分销链',
    steps: [['塞梅-波吉工厂', '在贝宁生产和检验'], ['采购中心、批发商和分销商', '地区公共合作社、私营批发商及其他分销商'], ['患者', '不到一个月即可获得治疗']],
    badge: ['不到一个月', '从我们的工厂到患者'], cta: '了解我们的分销' },
  ar: { eyebrow: 'سلسلة التوزيع لدينا', title: 'من سيمي-بودجي إلى المريض', intro: 'مسار قصير وسريع وقابل للتتبع: تُصنع محاليلنا في بنين وتصل إلى المرضى في أقل من شهر.', label: 'سلسلة توزيع من ثلاث مراحل',
    steps: [['مصنع سيمي-بودجي', 'مصنوع ومراقَب في بنين'], ['مراكز الشراء وتجار الجملة والموزعون', 'التعاونيات العامة الإقليمية وتجار الجملة الخاصون وموزعون آخرون'], ['المرضى', 'يتلقون العلاج في أقل من شهر']],
    badge: ['أقل من شهر', 'من مصنعنا إلى المريض'], cta: 'اكتشف شبكة التوزيع لدينا' },
};

for (const [lang, c] of Object.entries(T)) {
  const file = `${dir}${lang}.ts`;
  let src = readFileSync(file, 'utf8');
  src = src.replace(/  chain: \{\n[\s\S]*?\n  \},\n/, ''); // remplace une version précédente
  const anchor = '  impact: {\n';
  if (!src.includes(anchor)) throw new Error(`${lang}: ancre introuvable`);
  const block = '  chain: {\n'
    + `    eyebrow: ${q(c.eyebrow)}, title: ${q(c.title)},\n`
    + `    intro: ${q(c.intro)},\n`
    + `    label: ${q(c.label)},\n`
    + '    steps: [\n' + c.steps.map(([t, x]) => `      { title: ${q(t)}, text: ${q(x)} },`).join('\n') + '\n    ],\n'
    + `    badge: { strong: ${q(c.badge[0])}, text: ${q(c.badge[1])} },\n`
    + `    cta: ${q(c.cta)},\n`
    + '  },\n';
  src = src.replace(anchor, block + anchor);
  writeFileSync(file, src, 'utf8');
  console.log(`${lang}: ok`);
}
