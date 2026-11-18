// Ajoute EDGE (green building en cours) + « usine inclusive » (égalité femmes-hommes, handicap) aux 7 dictionnaires.
import fs from 'node:fs';

// Récupère les textes d'origine du premier script (pour les remplacer à l'identique)
const prev = fs.readFileSync('tools/impact-i18n.mjs', 'utf8');
const OLD = new Function(prev.match(/const I = (\{[\s\S]*?\n\});/)[0].replace('const I =', 'return'))();
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

const N = {
  fr: {
    proofs: ['Normes OMS', 'Fabriqué en République du Bénin', 'Bâtiment vert · EDGE en cours', 'Usine inclusive'],
    edge: ['EDGE', '', 'certification green building en cours d\'obtention'],
    first: ['1re', 'usine', 'pharmaceutique du Bénin engagée pour l\'égalité femmes-hommes et l\'inclusion du handicap'],
    title: 'Une usine utile, verte et inclusive',
    intro: 'Produire au plus près des patients, réduire notre empreinte environnementale et ouvrir nos métiers à toutes et à tous : notre impact se mesure sur ces trois plans.',
    gextra: ' L\'usine est en cours de certification EDGE, le standard green building de l\'IFC (Groupe de la Banque mondiale).',
    gproofs: ['Certification EDGE en cours d\'obtention', 'Certificat de conformité environnementale et sociale · 7 août 2024', 'Certification ISO 14001 visée'],
    std: 'Certification green building de l\'IFC en cours d\'obtention',
    inc: {
      badge: 'Usine inclusive', title: 'Première usine pharmaceutique du Bénin engagée pour l\'égalité et l\'inclusion',
      text: 'Dès sa conception, TILAMED Pharma inscrit dans son organisation l\'égalité réelle entre les femmes et les hommes et l\'inclusion des personnes en situation de handicap.',
      items: [['users', 'Égalité femmes-hommes', 'Recrutement, rémunération et évolution de carrière fondés sur les seules compétences.'], ['accessible', 'Inclusion du handicap', 'Des postes ouverts aux personnes en situation de handicap, avec des aménagements adaptés.'], ['shield', 'Responsabilités partagées', 'Un partage équitable des responsabilités, à tous les niveaux de l\'entreprise.'], ['flask', 'Formation pour toutes et tous', 'Un programme de transfert de compétences accessible à chacune et à chacun.']],
      cta: 'Notre politique d\'égalité', imageAlt: 'Femmes africaines exerçant différents métiers', insetAlt: 'Collaborateur en fauteuil roulant au travail',
    },
  },
  en: {
    proofs: ['WHO standards', 'Made in the Republic of Benin', 'Green building · EDGE in progress', 'Inclusive plant'],
    edge: ['EDGE', '', 'green building certification in progress'],
    first: ['1st', 'plant', 'in Benin’s pharmaceutical sector committed to gender equality and disability inclusion'],
    title: 'A useful, green and inclusive plant',
    intro: 'Producing close to patients, reducing our environmental footprint and opening our jobs to everyone: our impact is measured on all three fronts.',
    gextra: ' The plant is undergoing EDGE certification, the green building standard of IFC (World Bank Group).',
    gproofs: ['EDGE certification in progress', 'Environmental and social compliance certificate · 7 August 2024', 'ISO 14001 certification targeted'],
    std: 'IFC green building certification in progress',
    inc: {
      badge: 'Inclusive plant', title: 'Benin’s first pharmaceutical plant committed to equality and inclusion',
      text: 'From the outset, TILAMED Pharma has built real equality between women and men and the inclusion of people with disabilities into its organisation.',
      items: [['users', 'Gender equality', 'Recruitment, pay and career progression based on skills alone.'], ['accessible', 'Disability inclusion', 'Jobs open to people with disabilities, with suitable adjustments.'], ['shield', 'Shared responsibilities', 'A fair sharing of responsibilities at every level of the company.'], ['flask', 'Training for all', 'A skills-transfer programme open to every woman and man.']],
      cta: 'Our equality policy', imageAlt: 'African women in a range of professions', insetAlt: 'Employee in a wheelchair at work',
    },
  },
  es: {
    proofs: ['Normas OMS', 'Fabricado en la República de Benín', 'Edificio verde · EDGE en curso', 'Planta inclusiva'],
    edge: ['EDGE', '', 'certificación green building en curso de obtención'],
    first: ['1.ª', 'planta', 'farmacéutica de Benín comprometida con la igualdad de género y la inclusión de la discapacidad'],
    title: 'Una planta útil, verde e inclusiva',
    intro: 'Producir cerca de los pacientes, reducir nuestra huella ambiental y abrir nuestros oficios a todas y todos: nuestro impacto se mide en estos tres planos.',
    gextra: ' La planta está en proceso de certificación EDGE, el estándar de edificio verde de la IFC (Grupo Banco Mundial).',
    gproofs: ['Certificación EDGE en curso de obtención', 'Certificado de conformidad ambiental y social · 7 de agosto de 2024', 'Certificación ISO 14001 prevista'],
    std: 'Certificación de edificio verde de la IFC en curso',
    inc: {
      badge: 'Planta inclusiva', title: 'Primera planta farmacéutica de Benín comprometida con la igualdad y la inclusión',
      text: 'Desde su concepción, TILAMED Pharma integra en su organización la igualdad real entre mujeres y hombres y la inclusión de las personas con discapacidad.',
      items: [['users', 'Igualdad de género', 'Contratación, remuneración y carrera basadas únicamente en las competencias.'], ['accessible', 'Inclusión de la discapacidad', 'Puestos abiertos a personas con discapacidad, con adaptaciones adecuadas.'], ['shield', 'Responsabilidades compartidas', 'Un reparto equitativo de las responsabilidades en todos los niveles.'], ['flask', 'Formación para todas y todos', 'Un programa de transferencia de competencias accesible a cada persona.']],
      cta: 'Nuestra política de igualdad', imageAlt: 'Mujeres africanas de distintas profesiones', insetAlt: 'Empleado en silla de ruedas trabajando',
    },
  },
  pt: {
    proofs: ['Normas OMS', 'Fabricado na República do Benim', 'Edifício verde · EDGE em curso', 'Fábrica inclusiva'],
    edge: ['EDGE', '', 'certificação green building em curso de obtenção'],
    first: ['1.ª', 'fábrica', 'farmacêutica do Benim empenhada na igualdade de género e na inclusão da deficiência'],
    title: 'Uma fábrica útil, verde e inclusiva',
    intro: 'Produzir perto dos doentes, reduzir a nossa pegada ambiental e abrir as nossas profissões a todas e a todos: o nosso impacto mede-se nestes três planos.',
    gextra: ' A fábrica está em processo de certificação EDGE, a norma de edifício verde da IFC (Grupo Banco Mundial).',
    gproofs: ['Certificação EDGE em curso de obtenção', 'Certificado de conformidade ambiental e social · 7 de agosto de 2024', 'Certificação ISO 14001 visada'],
    std: 'Certificação de edifício verde da IFC em curso',
    inc: {
      badge: 'Fábrica inclusiva', title: 'Primeira fábrica farmacêutica do Benim empenhada na igualdade e na inclusão',
      text: 'Desde a sua conceção, a TILAMED Pharma integra na sua organização a igualdade real entre mulheres e homens e a inclusão das pessoas com deficiência.',
      items: [['users', 'Igualdade de género', 'Recrutamento, remuneração e progressão na carreira baseados apenas nas competências.'], ['accessible', 'Inclusão da deficiência', 'Postos abertos a pessoas com deficiência, com adaptações adequadas.'], ['shield', 'Responsabilidades partilhadas', 'Uma partilha equitativa das responsabilidades a todos os níveis.'], ['flask', 'Formação para todas e todos', 'Um programa de transferência de competências acessível a cada pessoa.']],
      cta: 'A nossa política de igualdade', imageAlt: 'Mulheres africanas de diferentes profissões', insetAlt: 'Colaborador em cadeira de rodas a trabalhar',
    },
  },
  it: {
    proofs: ['Standard OMS', 'Prodotto nella Repubblica del Benin', 'Edificio verde · EDGE in corso', 'Stabilimento inclusivo'],
    edge: ['EDGE', '', 'certificazione green building in corso di ottenimento'],
    first: ['1º', 'stabilimento', 'farmaceutico del Benin impegnato per la parità di genere e l\'inclusione della disabilità'],
    title: 'Uno stabilimento utile, verde e inclusivo',
    intro: 'Produrre vicino ai pazienti, ridurre la nostra impronta ambientale e aprire i nostri mestieri a tutte e a tutti: il nostro impatto si misura su questi tre piani.',
    gextra: ' Lo stabilimento è in fase di certificazione EDGE, lo standard per gli edifici verdi dell\'IFC (Gruppo Banca Mondiale).',
    gproofs: ['Certificazione EDGE in corso di ottenimento', 'Certificato di conformità ambientale e sociale · 7 agosto 2024', 'Certificazione ISO 14001 prevista'],
    std: 'Certificazione green building dell\'IFC in corso',
    inc: {
      badge: 'Stabilimento inclusivo', title: 'Il primo stabilimento farmaceutico del Benin impegnato per la parità e l\'inclusione',
      text: 'Fin dalla sua progettazione, TILAMED Pharma integra nella propria organizzazione la parità reale tra donne e uomini e l\'inclusione delle persone con disabilità.',
      items: [['users', 'Parità di genere', 'Assunzioni, retribuzione e carriera basate unicamente sulle competenze.'], ['accessible', 'Inclusione della disabilità', 'Posti aperti alle persone con disabilità, con adattamenti adeguati.'], ['shield', 'Responsabilità condivise', 'Un\'equa ripartizione delle responsabilità a tutti i livelli.'], ['flask', 'Formazione per tutte e tutti', 'Un programma di trasferimento di competenze accessibile a ciascuno.']],
      cta: 'La nostra politica di parità', imageAlt: 'Donne africane di diverse professioni', insetAlt: 'Collaboratore in sedia a rotelle al lavoro',
    },
  },
  zh: {
    proofs: ['世卫组织标准', '贝宁共和国制造', '绿色建筑 · EDGE 认证中', '包容性工厂'],
    edge: ['EDGE', '', '绿色建筑认证正在申请中'],
    first: ['首家', '', '致力于性别平等和残障人士融合的贝宁制药工厂'],
    title: '有益、绿色、包容的工厂',
    intro: '贴近患者生产、减少环境足迹、向所有人开放岗位：我们从这三个层面衡量自身影响。',
    gextra: '工厂正在申请 EDGE 认证——国际金融公司（世界银行集团）的绿色建筑标准。',
    gproofs: ['EDGE 认证申请中', '环境与社会合规证书 · 2024 年 8 月 7 日', '目标获得 ISO 14001 认证'],
    std: '国际金融公司绿色建筑认证申请中',
    inc: {
      badge: '包容性工厂', title: '贝宁首家致力于平等与包容的制药工厂',
      text: 'TILAMED Pharma 从设计之初就将男女实质平等和残障人士融合纳入企业组织。',
      items: [['users', '性别平等', '招聘、薪酬和职业发展只看能力。'], ['accessible', '残障融合', '向残障人士开放岗位，并提供相应的便利安排。'], ['shield', '责任共担', '在公司各个层级公平分配责任。'], ['flask', '人人可享培训', '技能转移计划向每一位员工开放。']],
      cta: '我们的平等政策', imageAlt: '从事不同职业的非洲女性', insetAlt: '坐轮椅的员工在工作',
    },
  },
  ar: {
    proofs: ['معايير منظمة الصحة العالمية', 'صُنع في جمهورية بنين', 'مبنى أخضر · شهادة EDGE قيد الإنجاز', 'مصنع دامج'],
    edge: ['EDGE', '', 'شهادة المباني الخضراء قيد الحصول عليها'],
    first: ['أول', 'مصنع', 'أدوية في بنين ملتزم بالمساواة بين الجنسين ودمج الأشخاص ذوي الإعاقة'],
    title: 'مصنع مفيد وأخضر ودامج',
    intro: 'الإنتاج بالقرب من المرضى، وتقليص بصمتنا البيئية، وفتح مهننا أمام الجميع: هكذا نقيس أثرنا على هذه الأصعدة الثلاثة.',
    gextra: ' ويخضع المصنع حاليًا لإجراءات الحصول على شهادة EDGE، معيار المباني الخضراء لمؤسسة التمويل الدولية (مجموعة البنك الدولي).',
    gproofs: ['شهادة EDGE قيد الحصول عليها', 'شهادة المطابقة البيئية والاجتماعية · 7 أغسطس 2024', 'السعي إلى شهادة ISO 14001'],
    std: 'شهادة المباني الخضراء لمؤسسة التمويل الدولية قيد الإنجاز',
    inc: {
      badge: 'مصنع دامج', title: 'أول مصنع أدوية في بنين ملتزم بالمساواة والدمج',
      text: 'منذ تصميمها، أدرجت TILAMED Pharma في تنظيمها المساواة الفعلية بين النساء والرجال ودمج الأشخاص ذوي الإعاقة.',
      items: [['users', 'المساواة بين الجنسين', 'التوظيف والأجور والتطور المهني على أساس الكفاءة وحدها.'], ['accessible', 'دمج ذوي الإعاقة', 'وظائف مفتوحة للأشخاص ذوي الإعاقة مع تهيئة مناسبة.'], ['shield', 'مسؤوليات مشتركة', 'توزيع عادل للمسؤوليات على جميع مستويات الشركة.'], ['flask', 'تدريب للجميع', 'برنامج لنقل المهارات متاح للجميع.']],
      cta: 'سياسة المساواة لدينا', imageAlt: 'نساء أفريقيات يمارسن مهنًا مختلفة', insetAlt: 'موظف على كرسي متحرك أثناء العمل',
    },
  },
};

function must(src, a, b, label, lang) {
  if (!src.includes(a)) throw new Error(`${lang}: introuvable (${label})`);
  return src.replace(a, b);
}

for (const [lang, n] of Object.entries(N)) {
  const o = OLD[lang];
  const file = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(file, 'utf8');
  if (s.includes('inclusion: {')) { console.log(lang, 'déjà fait'); continue; }
  // Bandeau du hero : 4 preuves
  s = s.replace(/(  hero: \{[\s\S]*?\n    proofs: )\[[^\n]*\],/, (m, p) => `${p}[${n.proofs.map(q).join(', ')}],`);
  // Chiffres : ISO 14001 → EDGE + 1re usine inclusive
  s = must(s, `      { value: ${q(o.fig.value)}, unit: '', label: ${q(o.fig.label)} },\n`,
    `      { value: ${q(n.edge[0])}, unit: ${q(n.edge[1])}, label: ${q(n.edge[2])} },\n      { value: ${q(n.first[0])}, unit: ${q(n.first[1])}, label: ${q(n.first[2])} },\n`, 'figure', lang);
  // Impact : titre, intro, texte green, preuves
  s = must(s, `    title: ${q(o.impact.title)},\n    intro: ${q(o.impact.intro)},`, `    title: ${q(n.title)},\n    intro: ${q(n.intro)},`, 'titre impact', lang);
  s = must(s, `    greenText: ${q(o.impact.gtext)},`, `    greenText: ${q(o.impact.gtext + n.gextra)},`, 'greenText', lang);
  s = must(s, `    proofs: [${o.impact.proofs.map(q).join(', ')}],`, `    proofs: [${n.gproofs.map(q).join(', ')}],`, 'preuves green', lang);
  // Bloc inclusion, à la fin du bloc impact
  const inc = n.inc;
  const block = `    inclusion: {
      badge: ${q(inc.badge)},
      title: ${q(inc.title)},
      text: ${q(inc.text)},
      items: [
${inc.items.map(([i, t, x]) => `        { icon: ${q(i)}, title: ${q(t)}, text: ${q(x)} },`).join('\n')}
      ],
      cta: ${q(inc.cta)},
      imageAlt: ${q(inc.imageAlt)},
      insetAlt: ${q(inc.insetAlt)},
    },
`;
  s = must(s, `    techAlt: ${q(o.impact.techAlt)},\n`, `    techAlt: ${q(o.impact.techAlt)},\n${block}`, 'techAlt', lang);
  // Référentiels : ajout EDGE après ISO
  s = s.replace(/(      \{ code: 'ISO', label: [^\n]*\n)/, `$1      { code: 'EDGE', label: ${q(n.std)} },\n`);
  fs.writeFileSync(file, s);
  console.log(lang, 'OK', (s.match(/code: 'EDGE'/g) || []).length, (s.match(/value: 'EDGE'/g) || []).length);
}
