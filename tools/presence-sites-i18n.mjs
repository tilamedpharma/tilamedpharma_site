// Accueil · section « Où nous opérons » (option 2 « Une usine, trois bureaux, quinze pays », 18/11/2026) :
// ajoute le bloc `presenceSites` dans les 7 dictionnaires, avant `clients`.
// Rôles « Bureau régional · Sahel » et « Relations avec l'Europe » proposés par Claude : à valider par le client.
import fs from 'node:fs';

const data = {
  fr: ['Une usine, trois bureaux, quinze pays', 'Produire au Bénin, être présents là où sont nos clients.', 'Production · 2 hectares à la frontière du Nigeria', 'Siège administratif', 'Bureau régional · Sahel', 'Relations avec l\'Europe'],
  en: ['One plant, three offices, fifteen countries', 'Producing in Benin, present wherever our customers are.', 'Production · 2 hectares on the Nigerian border', 'Head office', 'Regional office · Sahel', 'Relations with Europe'],
  es: ['Una planta, tres oficinas, quince países', 'Producir en Benín y estar presentes allí donde están nuestros clientes.', 'Producción · 2 hectáreas en la frontera con Nigeria', 'Sede administrativa', 'Oficina regional · Sahel', 'Relaciones con Europa'],
  pt: ['Uma fábrica, três escritórios, quinze países', 'Produzir no Benim e estar presentes onde estão os nossos clientes.', 'Produção · 2 hectares na fronteira com a Nigéria', 'Sede administrativa', 'Escritório regional · Sahel', 'Relações com a Europa'],
  it: ['Uno stabilimento, tre uffici, quindici paesi', 'Produrre in Benin, essere presenti dove sono i nostri clienti.', 'Produzione · 2 ettari al confine con la Nigeria', 'Sede amministrativa', 'Ufficio regionale · Sahel', 'Rapporti con l\'Europa'],
  zh: ['一座工厂、三个办事处、十五个国家', '在贝宁生产，在客户所在之处提供服务。', '生产基地 · 紧邻尼日利亚边境，占地 2 公顷', '行政总部', '区域办事处 · 萨赫勒', '对欧联络'],
  ar: ['مصنع واحد، ثلاثة مكاتب، خمس عشرة دولة', 'ننتج في بنين ونحضر حيث يوجد عملاؤنا.', 'الإنتاج · هكتاران على الحدود مع نيجيريا', 'المقر الإداري', 'مكتب إقليمي · الساحل', 'العلاقات مع أوروبا'],
};
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

for (const [lang, [title, lead, plant, hq, bf, fr]] of Object.entries(data)) {
  const file = new URL(`../src/i18n/${lang}.ts`, import.meta.url);
  let src = fs.readFileSync(file, 'utf8');
  if (src.includes('presenceSites:')) { console.log(lang, 'déjà présent'); continue; }
  const at = src.indexOf('\n  clients: {');
  if (at < 0) throw new Error(`${lang}: clients introuvable`);
  const block = `\n  presenceSites: {\n    title: ${q(title)},\n    lead: ${q(lead)},\n    roles: { plant: ${q(plant)}, bj: ${q(hq)}, bf: ${q(bf)}, fr: ${q(fr)} },\n  },`;
  fs.writeFileSync(file, src.slice(0, at) + block + src.slice(at));
  console.log(lang, 'ok');
}
