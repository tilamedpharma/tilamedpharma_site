// Chantier 5 (18/11/2026) : « 150 emplois / 70 % / 5 ans » gardés seulement sur accueil (impact), carrieres (maison),
// rse (chiffres), transfert-technologie, presse. Ailleurs : l'idée sans le chiffre.
import fs from 'node:fs';

const LANGS = ['fr', 'en', 'es', 'pt', 'it', 'zh', 'ar'];
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const STR = String.raw`'(?:[^'\\\n]|\\.)*'`;

// [fichier, regex de la ligne (doit matcher 1 fois), clé à remplacer, textes par langue]
const T = [
  ['{l}.ts', /carrieres: \{ label:[^\n]*/, 'blurb', {
    fr: 'Pourquoi nous rejoindre, nos métiers et les candidatures.',
    en: 'Why join us, our professions and how to apply.',
    es: 'Por qué unirse a nosotros, nuestros oficios y las candidaturas.',
    pt: 'Porquê juntar-se a nós, as nossas profissões e as candidaturas.',
    it: 'Perché lavorare con noi, i nostri mestieri e le candidature.',
    zh: '加入我们的理由、岗位类别与申请方式。',
    ar: 'لماذا تنضمّون إلينا، مهننا وطريقة الترشّح.' }],
  ['{l}.ts', /\{ title: '(Des compétences locales|Local skills|Competencias locales|Competências locais|Competenze locali|本地人才|كفاءات محلية)'[^\n]*/, 'text', {
    fr: 'Des emplois qualifiés et un transfert de compétences pour les techniciens béninois.',
    en: 'Skilled jobs and a skills-transfer programme for Beninese technicians.',
    es: 'Empleos cualificados y una transferencia de competencias para los técnicos beninenses.',
    pt: 'Empregos qualificados e uma transferência de competências para os técnicos beninenses.',
    it: 'Posti di lavoro qualificati e un trasferimento di competenze per i tecnici beninesi.',
    zh: '提供高技能岗位，并为贝宁技术人员开展技能转移。',
    ar: 'وظائف مؤهّلة وبرنامج لنقل المهارات إلى الفنيين البنينيين.' }],
  ['{l}.ts', /\{ title: '(Candidats|Candidates|Candidatos|Candidati|求职者|المرشحون)', text:[^\n]*/, 'text', {
    fr: 'Des métiers techniques et administratifs, ouverts à toutes et à tous.',
    en: 'Technical and administrative roles, open to everyone.',
    es: 'Oficios técnicos y administrativos, abiertos a todas y todos.',
    pt: 'Profissões técnicas e administrativas, abertas a todas e a todos.',
    it: 'Mestieri tecnici e amministrativi, aperti a tutte e a tutti.',
    zh: '技术与行政岗位，向所有人开放。',
    ar: 'وظائف تقنية وإدارية، مفتوحة للجميع.' }],
  ['pages/direction/{l}.ts', /\n    text: '[^\n]*150[^\n]*/, 'text', {
    fr: 'L\'usine de Sèmè-Podji recrute ses équipes techniques et administratives. Découvrez nos métiers et proposez votre candidature.',
    en: 'The Sèmè-Podji plant is building its technical and administrative teams. Discover our professions and send us your application.',
    es: 'La planta de Sèmè-Podji está formando sus equipos técnicos y administrativos. Descubra nuestros oficios y envíenos su candidatura.',
    pt: 'A fábrica de Sèmè-Podji está a constituir as suas equipas técnicas e administrativas. Descubra as nossas profissões e envie a sua candidatura.',
    it: 'Lo stabilimento di Sèmè-Podji sta formando i suoi team tecnici e amministrativi. Scoprite i nostri mestieri e inviateci la vostra candidatura.',
    zh: '塞梅-波吉工厂正在组建技术与行政团队。了解我们的岗位并提交您的申请。',
    ar: 'يعمل مصنع سيمي-بودجي على تكوين فرقه التقنية والإدارية. اكتشفوا مهننا وأرسلوا ترشيحكم.' }],
  ['pages/vision/{l}.ts', /\{ title: [^\n]*text: '150[^\n]*/, 'text', {
    fr: 'Des emplois qualifiés au Bénin et un transfert de compétences vers les techniciens locaux.',
    en: 'Skilled jobs in Benin and a skills-transfer programme for local technicians.',
    es: 'Empleos cualificados en Benín y una transferencia de competencias hacia los técnicos locales.',
    pt: 'Empregos qualificados no Benim e uma transferência de competências para os técnicos locais.',
    it: 'Posti di lavoro qualificati in Benin e un trasferimento di competenze verso i tecnici locali.',
    zh: '在贝宁创造高技能岗位，并向本地技术人员转移技能。',
    ar: 'وظائف مؤهّلة في بنين ونقل للمهارات إلى الفنيين المحليين.' }],
  ['pages/benin/{l}.ts', /\{ title: [^\n]*text: '150[^\n]*/, 'text', {
    fr: 'Des emplois qualifiés et un transfert de savoir-faire industriel.',
    en: 'Skilled jobs and a transfer of industrial know-how.',
    es: 'Empleos cualificados y una transferencia de saber hacer industrial.',
    pt: 'Empregos qualificados e uma transferência de saber-fazer industrial.',
    it: 'Posti di lavoro qualificati e un trasferimento di know-how industriale.',
    zh: '高技能就业岗位及工业技术转让。',
    ar: 'وظائف مؤهّلة ونقل للمعرفة الصناعية.' }],
  ['pages/rse/{l}.ts', /\{ title: [^\n]*text: '150[^\n]*/, 'text', {
    fr: 'Des postes majoritairement techniques, pourvus en priorité localement.',
    en: 'Mostly technical positions, filled locally as a priority.',
    es: 'Puestos mayoritariamente técnicos, cubiertos prioritariamente a nivel local.',
    pt: 'Postos maioritariamente técnicos, preenchidos localmente com prioridade.',
    it: 'Posizioni in gran parte tecniche, ricoperte in via prioritaria a livello locale.',
    zh: '以技术岗位为主，优先在本地招聘。',
    ar: 'وظائف معظمها تقنية، تُشغل محليًا بالأولوية.' }],
  // RSE · 4e impact (« Savoir-faire ») : les 5 ans sont déjà dans les chiffres et le bloc transfert de la même page.
  ['pages/rse/{l}.ts', /\{ title: [^\n]*\},(?=\n    \],\n  \},\n  pillars)/, 'text', {
    fr: 'Un programme de transfert de compétences pour les techniciens locaux.',
    en: 'A skills-transfer programme for local technicians.',
    es: 'Un programa de transferencia de competencias para los técnicos locales.',
    pt: 'Um programa de transferência de competências para os técnicos locais.',
    it: 'Un programma di trasferimento di competenze per i tecnici locali.',
    zh: '面向本地技术人员的技能转让计划。',
    ar: 'برنامج لنقل الكفاءات لفائدة الفنيين المحليين.' }],
  ['pages/parcours/{l}.ts', /\{ date: [^\n]*state: 'next' \}/, 'text', {
    fr: 'Démarrage de la production et recrutement des premières équipes.',
    en: 'Start of production and recruitment of the first teams.',
    es: 'Inicio de la producción y contratación de los primeros equipos.',
    pt: 'Início da produção e recrutamento das primeiras equipas.',
    it: 'Inizio della produzione e assunzione dei primi team.',
    zh: '启动生产并招聘首批团队。',
    ar: 'انطلاق الإنتاج وتوظيف الفرق الأولى.' }],
  ['pages/egalite/{l}.ts', /\n    text: '[^\n]*150[^\n]*/, 'text', {
    fr: 'Des postes techniques et administratifs, à tous les niveaux. Chaque candidature est examinée sur la seule base des compétences.',
    en: 'Technical and administrative positions at every level. Every application is assessed on skills alone.',
    es: 'Puestos técnicos y administrativos en todos los niveles. Cada candidatura se evalúa únicamente según las competencias.',
    pt: 'Postos técnicos e administrativos a todos os níveis. Cada candidatura é avaliada apenas com base nas competências.',
    it: 'Posizioni tecniche e amministrative a tutti i livelli. Ogni candidatura è valutata unicamente sulla base delle competenze.',
    zh: '技术与行政岗位，覆盖各个层级。每份申请只以能力为依据进行评估。',
    ar: 'وظائف تقنية وإدارية على جميع المستويات. يُدرس كل ترشيح على أساس الكفاءات وحدها.' }],
];

// Candidature (aside) : 3e puce « 70 % des postes seront techniques ».
const ASIDE = {
  fr: 'Postes techniques et administratifs', en: 'Technical and administrative positions', es: 'Puestos técnicos y administrativos',
  pt: 'Postos técnicos e administrativos', it: 'Posizioni tecniche e amministrative', zh: '技术与行政岗位', ar: 'وظائف تقنية وإدارية',
};
// Parcours : fait « 150 emplois » → « 2023 », placé après « 2013 ».
const Y2023 = {
  fr: 'SEDIS SARL devient TILAMED PHARMA SA', en: 'SEDIS SARL becomes TILAMED PHARMA SA', es: 'SEDIS SARL se convierte en TILAMED PHARMA SA',
  pt: 'a SEDIS SARL torna-se TILAMED PHARMA SA', it: 'SEDIS SARL diventa TILAMED PHARMA SA', zh: 'SEDIS SARL 更名为 TILAMED PHARMA SA',
  ar: 'تحوّل SEDIS SARL إلى TILAMED PHARMA SA',
};

const files = new Map();
const load = (rel) => {
  if (!files.has(rel)) files.set(rel, fs.readFileSync(new URL(`../src/i18n/${rel}`, import.meta.url), 'utf8'));
  return files.get(rel);
};

for (const l of LANGS) {
  for (const [tpl, re, key, texts] of T) {
    const rel = tpl.replace('{l}', l);
    const src = load(rel);
    const g = new RegExp(re.source, 'g');
    const hits = src.match(g);
    if (!hits || hits.length !== 1) throw new Error(`${rel}: ${re} → ${hits ? hits.length : 0} correspondance(s)`);
    const line = hits[0];
    const kre = new RegExp(`${key}: ${STR}`);
    if (!kre.test(line)) throw new Error(`${rel}: clé ${key} absente`);
    files.set(rel, src.replace(line, line.replace(kre, `${key}: ${q(texts[l])}`)));
  }
  // aside candidature
  {
    const rel = `pages/achats-carrieres/${l}.ts`;
    const src = load(rel);
    const m = src.match(/asideItems: \[[^\n]*/);
    const item = m && m[0].match(new RegExp(`'[^'\\n]*70 ?[%٪][^'\\n]*'`));
    if (!item) throw new Error(`${rel}: puce 70 % introuvable`);
    files.set(rel, src.replace(m[0], m[0].replace(item[0], q(ASIDE[l]))));
  }
  // parcours : fait 2023
  {
    const rel = `pages/parcours/${l}.ts`;
    let src = load(rel);
    const f150 = src.match(/\n    \{ value: '150'[^\n]*/);
    if (!f150) throw new Error(`${rel}: fait 150 introuvable`);
    src = src.replace(f150[0], '');
    const f2013 = src.match(/\n    \{ value: '2013'[^\n]*/);
    if (!f2013) throw new Error(`${rel}: fait 2013 introuvable`);
    src = src.replace(f2013[0], `${f2013[0]}\n    { value: '2023', unit: '', label: ${q(Y2023[l])} },`);
    files.set(rel, src);
  }
}

for (const [rel, src] of files) fs.writeFileSync(new URL(`../src/i18n/${rel}`, import.meta.url), src);
console.log(`${files.size} fichiers mis à jour`);
