// Ajoute le bloc `heroNet` (2e slide du héros : carte du réseau) dans les 7 dictionnaires, avant `figures`.
import fs from 'node:fs';

const data = {
  fr: { eyebrow: 'Notre réseau', title: 'Fabriqué au Bénin, distribué dans 15 pays d\'Afrique de l\'Ouest.', lead: 'Depuis Sèmè-Podji, à la frontière du Nigeria, nos solutions injectables rejoignent les centrales d\'achat, les distributeurs et les hôpitaux de toute la région.', count: 'pays couverts', tabs: ['Notre usine', 'Notre réseau'], label: 'Diaporama de présentation' },
  en: { eyebrow: 'Our network', title: 'Made in Benin, supplied to 15 West African countries.', lead: 'From Sèmè-Podji, on the Nigerian border, our injectable solutions reach procurement agencies, distributors and hospitals across the region.', count: 'countries covered', tabs: ['Our plant', 'Our network'], label: 'Presentation slideshow' },
  es: { eyebrow: 'Nuestra red', title: 'Fabricado en Benín, distribuido en 15 países de África Occidental.', lead: 'Desde Sèmè-Podji, en la frontera con Nigeria, nuestras soluciones inyectables llegan a las centrales de compra, los distribuidores y los hospitales de toda la región.', count: 'países cubiertos', tabs: ['Nuestra planta', 'Nuestra red'], label: 'Presentación' },
  pt: { eyebrow: 'A nossa rede', title: 'Fabricado no Benim, distribuído em 15 países da África Ocidental.', lead: 'A partir de Sèmè-Podji, na fronteira com a Nigéria, as nossas soluções injetáveis chegam às centrais de compras, aos distribuidores e aos hospitais de toda a região.', count: 'países cobertos', tabs: ['A nossa fábrica', 'A nossa rede'], label: 'Apresentação' },
  it: { eyebrow: 'La nostra rete', title: 'Prodotto in Benin, distribuito in 15 paesi dell\'Africa occidentale.', lead: 'Da Sèmè-Podji, al confine con la Nigeria, le nostre soluzioni iniettabili raggiungono centrali d\'acquisto, distributori e ospedali di tutta la regione.', count: 'paesi coperti', tabs: ['Il nostro stabilimento', 'La nostra rete'], label: 'Presentazione' },
  zh: { eyebrow: '我们的网络', title: '贝宁制造，供应西非 15 个国家。', lead: '从紧邻尼日利亚边境的塞梅-波吉出发，我们的注射液送达整个区域的采购中心、经销商和医院。', count: '个覆盖国家', tabs: ['我们的工厂', '我们的网络'], label: '轮播展示' },
  ar: { eyebrow: 'شبكتنا', title: 'صُنع في بنين، ويُوزَّع في 15 دولة في غرب أفريقيا.', lead: 'من سيمي-بودجي على الحدود مع نيجيريا، تصل محاليل الحقن التي ننتجها إلى مراكز الشراء والموزعين والمستشفيات في المنطقة بأكملها.', count: 'دولة مشمولة', tabs: ['مصنعنا', 'شبكتنا'], label: 'عرض تقديمي' },
};
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

for (const [lang, d] of Object.entries(data)) {
  const file = new URL(`../src/i18n/${lang}.ts`, import.meta.url);
  let src = fs.readFileSync(file, 'utf8');
  if (src.includes('heroNet:')) { console.log(lang, 'déjà présent'); continue; }
  const at = src.indexOf('\n  figures: {');
  if (at < 0) throw new Error(`${lang}: figures introuvable`);
  const block = `\n  heroNet: {\n    eyebrow: ${q(d.eyebrow)},\n    title: ${q(d.title)},\n    lead: ${q(d.lead)},\n    count: ${q(d.count)},\n    tabs: [${d.tabs.map(q).join(', ')}],\n    label: ${q(d.label)},\n  },`;
  src = src.slice(0, at) + block + src.slice(at);
  fs.writeFileSync(file, src);
  console.log(lang, 'ok');
}
