// Libellés communs des pages intérieures (fil d'Ariane, navigation de rubrique).
import fs from 'node:fs';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const T = {
  fr: { home: 'Accueil', breadcrumb: 'Fil d\'Ariane', inSection: 'Dans cette rubrique', illustration: 'Images d\'illustration', step: 'Étape', current: 'Vous êtes ici' },
  en: { home: 'Home', breadcrumb: 'Breadcrumb', inSection: 'In this section', illustration: 'Illustrative images', step: 'Step', current: 'You are here' },
  es: { home: 'Inicio', breadcrumb: 'Ruta de navegación', inSection: 'En esta sección', illustration: 'Imágenes ilustrativas', step: 'Etapa', current: 'Está aquí' },
  pt: { home: 'Início', breadcrumb: 'Caminho de navegação', inSection: 'Nesta secção', illustration: 'Imagens ilustrativas', step: 'Etapa', current: 'Está aqui' },
  it: { home: 'Home', breadcrumb: 'Percorso di navigazione', inSection: 'In questa sezione', illustration: 'Immagini illustrative', step: 'Fase', current: 'Sei qui' },
  zh: { home: '首页', breadcrumb: '导航路径', inSection: '本栏目内容', illustration: '示意图片', step: '步骤', current: '当前页面' },
  ar: { home: 'الرئيسية', breadcrumb: 'مسار التصفح', inSection: 'في هذا القسم', illustration: 'صور توضيحية', step: 'المرحلة', current: 'أنت هنا' },
};
for (const [lang, v] of Object.entries(T)) {
  const f = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes('\n  page: {')) { console.log(lang, 'déjà fait'); continue; }
  const body = Object.entries(v).map(([k, x]) => `${k}: ${q(x)}`).join(', ');
  const anchor = '\n  header: {';
  if (!s.includes(anchor)) throw new Error(lang + ' ancre');
  s = s.replace(anchor, `\n  page: { ${body} },${anchor}`);
  fs.writeFileSync(f, s);
  console.log(lang, 'OK');
}
