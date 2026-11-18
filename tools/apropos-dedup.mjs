// Qui sommes-nous ? · chantier 4 (18/11/2026) : fait « 150 emplois » → « 4 métiers » (maison 150 = carrieres),
// bloc `suppliers` retiré (logos déjà à l'accueil). `pillarsCta` reste : libellé du lien vers vision-valeurs.
import fs from 'node:fs';

const jobs = {
  fr: "{ value: '4', unit: 'métiers', label: 'production, dispositifs médicaux, laboratoire, santé animale' }",
  en: "{ value: '4', unit: 'activities', label: 'manufacturing, medical devices, laboratory, animal health' }",
  es: "{ value: '4', unit: 'actividades', label: 'producción, dispositivos médicos, laboratorio, salud animal' }",
  pt: "{ value: '4', unit: 'atividades', label: 'produção, dispositivos médicos, laboratório, saúde animal' }",
  it: "{ value: '4', unit: 'attività', label: 'produzione, dispositivi medici, laboratorio, salute animale' }",
  zh: "{ value: '4', unit: '大业务', label: '药品生产、医疗器械、医学检验、动物保健' }",
  ar: "{ value: '4', unit: 'أنشطة', label: 'الإنتاج، الأجهزة الطبية، المختبر، صحة الحيوان' }",
};

for (const [lang, fact] of Object.entries(jobs)) {
  const file = new URL(`../src/i18n/pages/a-propos/${lang}.ts`, import.meta.url);
  let src = fs.readFileSync(file, 'utf8');
  const before = src;
  src = src.replace(/\{ value: '150',[^\n]*\}/, fact);
  src = src.replace(/\n  suppliers: \{\n[\s\S]*?\n  \},/, '');
  if (src === before) throw new Error(`${lang}: rien changé`);
  if (src.includes("value: '150'") || src.includes('suppliers:')) throw new Error(`${lang}: remplacement incomplet`);
  fs.writeFileSync(file, src);
  console.log(lang, 'ok');
}
