// Ajoute le bloc « impact » (green building) aux 7 dictionnaires et remplace le 5e chiffre (capital) par ISO 14001.
import fs from 'node:fs';

const I = {
  fr: {
    fig: { value: 'ISO 14001', unit: '', label: 'certification environnementale visée pour l\'usine' },
    impact: {
      eyebrow: 'Notre impact', title: 'Utile à la santé, sobre pour la planète',
      intro: 'Produire au plus près des patients, créer des emplois qualifiés et réduire notre empreinte environnementale : notre impact se mesure sur ces trois plans.',
      badge: 'Green building', gtitle: 'Une usine conçue comme un bâtiment vert',
      gtext: 'De l\'architecture du site à l\'énergie qui l\'alimente, chaque choix vise à réduire l\'empreinte environnementale de la production pharmaceutique.',
      items: [
        ['sun', 'Énergie verte', 'Solaire photovoltaïque en toiture pour alimenter le site, dans la trajectoire des énergies renouvelables fixée par les pays de la région.'],
        ['building', 'Bâtiment bioclimatique', 'Isolation, ventilation et lumière naturelle optimisées pour réduire les besoins en climatisation hors zones propres.'],
        ['drop', 'Eau maîtrisée', 'Une eau traitée sur place, distribuée en boucle et utilisée au plus juste.'],
        ['leaf', 'Moins de plastique', 'Le procédé soufflage-remplissage-scellage fabrique le flacon au remplissage : moins d\'emballages transportés.'],
        ['recycle', 'Déchets maîtrisés', 'Tri, traitement et élimination sûre des déchets industriels et de laboratoire.'],
        ['route', 'Moins de transport', 'Produire au Bénin évite de longs trajets maritimes et routiers entre l\'Asie et nos hôpitaux.'],
      ],
      proofs: ['Certificat de conformité environnementale et sociale · 7 août 2024', 'Certification ISO 14001 visée'],
      cta: 'Notre engagement environnemental', imageAlt: 'Toiture industrielle équipée de panneaux solaires', techAlt: 'Technicien installant des panneaux solaires',
    },
  },
  en: {
    fig: { value: 'ISO 14001', unit: '', label: 'environmental certification targeted for the plant' },
    impact: {
      eyebrow: 'Our impact', title: 'Good for health, light on the planet',
      intro: 'Producing close to patients, creating skilled jobs and reducing our environmental footprint: our impact is measured on all three fronts.',
      badge: 'Green building', gtitle: 'A plant designed as a green building',
      gtext: 'From site architecture to the energy that powers it, every choice aims to reduce the environmental footprint of pharmaceutical production.',
      items: [
        ['sun', 'Green energy', 'Rooftop solar PV to power the site, in line with the renewable-energy path set by the countries of the region.'],
        ['building', 'Bioclimatic building', 'Insulation, ventilation and daylight optimised to cut air-conditioning needs outside the clean rooms.'],
        ['drop', 'Controlled water use', 'Water treated on site, distributed in a loop and used sparingly.'],
        ['leaf', 'Less plastic', 'Blow-fill-seal makes the container at the moment of filling: less packaging transported.'],
        ['recycle', 'Managed waste', 'Sorting, treatment and safe disposal of industrial and laboratory waste.'],
        ['route', 'Less transport', 'Producing in Benin avoids long sea and road journeys between Asia and our hospitals.'],
      ],
      proofs: ['Environmental and social compliance certificate · 7 August 2024', 'ISO 14001 certification targeted'],
      cta: 'Our environmental commitment', imageAlt: 'Industrial roof fitted with solar panels', techAlt: 'Technician installing solar panels',
    },
  },
  es: {
    fig: { value: 'ISO 14001', unit: '', label: 'certificación ambiental prevista para la planta' },
    impact: {
      eyebrow: 'Nuestro impacto', title: 'Útil para la salud, sobria para el planeta',
      intro: 'Producir cerca de los pacientes, crear empleos cualificados y reducir nuestra huella ambiental: nuestro impacto se mide en estos tres planos.',
      badge: 'Green building', gtitle: 'Una planta concebida como un edificio verde',
      gtext: 'De la arquitectura del sitio a la energía que lo alimenta, cada decisión busca reducir la huella ambiental de la producción farmacéutica.',
      items: [
        ['sun', 'Energía verde', 'Solar fotovoltaica en cubierta para alimentar el sitio, en la senda de energías renovables fijada por los países de la región.'],
        ['building', 'Edificio bioclimático', 'Aislamiento, ventilación y luz natural optimizados para reducir la climatización fuera de las salas limpias.'],
        ['drop', 'Agua controlada', 'Agua tratada in situ, distribuida en circuito y utilizada con mesura.'],
        ['leaf', 'Menos plástico', 'El soplado-llenado-sellado fabrica el envase en el momento del llenado: menos embalajes transportados.'],
        ['recycle', 'Residuos controlados', 'Clasificación, tratamiento y eliminación segura de los residuos industriales y de laboratorio.'],
        ['route', 'Menos transporte', 'Producir en Benín evita largos trayectos marítimos y por carretera entre Asia y nuestros hospitales.'],
      ],
      proofs: ['Certificado de conformidad ambiental y social · 7 de agosto de 2024', 'Certificación ISO 14001 prevista'],
      cta: 'Nuestro compromiso ambiental', imageAlt: 'Cubierta industrial equipada con paneles solares', techAlt: 'Técnico instalando paneles solares',
    },
  },
  pt: {
    fig: { value: 'ISO 14001', unit: '', label: 'certificação ambiental visada para a fábrica' },
    impact: {
      eyebrow: 'O nosso impacto', title: 'Útil para a saúde, sóbria para o planeta',
      intro: 'Produzir perto dos doentes, criar empregos qualificados e reduzir a nossa pegada ambiental: o nosso impacto mede-se nestes três planos.',
      badge: 'Green building', gtitle: 'Uma fábrica concebida como um edifício verde',
      gtext: 'Da arquitetura do local à energia que o alimenta, cada escolha visa reduzir a pegada ambiental da produção farmacêutica.',
      items: [
        ['sun', 'Energia verde', 'Solar fotovoltaico na cobertura para alimentar o local, na trajetória de energias renováveis definida pelos países da região.'],
        ['building', 'Edifício bioclimático', 'Isolamento, ventilação e luz natural otimizados para reduzir a climatização fora das salas limpas.'],
        ['drop', 'Água controlada', 'Água tratada no local, distribuída em circuito e utilizada com rigor.'],
        ['leaf', 'Menos plástico', 'O sopro-enchimento-selagem fabrica o recipiente no momento do enchimento: menos embalagens transportadas.'],
        ['recycle', 'Resíduos controlados', 'Triagem, tratamento e eliminação segura dos resíduos industriais e de laboratório.'],
        ['route', 'Menos transporte', 'Produzir no Benim evita longos trajetos marítimos e rodoviários entre a Ásia e os nossos hospitais.'],
      ],
      proofs: ['Certificado de conformidade ambiental e social · 7 de agosto de 2024', 'Certificação ISO 14001 visada'],
      cta: 'O nosso compromisso ambiental', imageAlt: 'Cobertura industrial equipada com painéis solares', techAlt: 'Técnico a instalar painéis solares',
    },
  },
  it: {
    fig: { value: 'ISO 14001', unit: '', label: 'certificazione ambientale prevista per lo stabilimento' },
    impact: {
      eyebrow: 'Il nostro impatto', title: 'Utile alla salute, sobria per il pianeta',
      intro: 'Produrre vicino ai pazienti, creare posti di lavoro qualificati e ridurre la nostra impronta ambientale: il nostro impatto si misura su questi tre piani.',
      badge: 'Green building', gtitle: 'Uno stabilimento concepito come un edificio verde',
      gtext: 'Dall\'architettura del sito all\'energia che lo alimenta, ogni scelta mira a ridurre l\'impronta ambientale della produzione farmaceutica.',
      items: [
        ['sun', 'Energia verde', 'Fotovoltaico sul tetto per alimentare il sito, in linea con il percorso sulle rinnovabili fissato dai paesi della regione.'],
        ['building', 'Edificio bioclimatico', 'Isolamento, ventilazione e luce naturale ottimizzati per ridurre la climatizzazione fuori dalle camere bianche.'],
        ['drop', 'Acqua sotto controllo', 'Acqua trattata in loco, distribuita in circuito e utilizzata con parsimonia.'],
        ['leaf', 'Meno plastica', 'Il soffiaggio-riempimento-sigillatura crea il contenitore al momento del riempimento: meno imballaggi trasportati.'],
        ['recycle', 'Rifiuti gestiti', 'Selezione, trattamento e smaltimento sicuro dei rifiuti industriali e di laboratorio.'],
        ['route', 'Meno trasporti', 'Produrre in Benin evita lunghi tragitti marittimi e stradali tra l\'Asia e i nostri ospedali.'],
      ],
      proofs: ['Certificato di conformità ambientale e sociale · 7 agosto 2024', 'Certificazione ISO 14001 prevista'],
      cta: 'Il nostro impegno ambientale', imageAlt: 'Tetto industriale dotato di pannelli solari', techAlt: 'Tecnico che installa pannelli solari',
    },
  },
  zh: {
    fig: { value: 'ISO 14001', unit: '', label: '工厂目标获得的环境管理认证' },
    impact: {
      eyebrow: '我们的影响', title: '造福健康，善待地球',
      intro: '贴近患者生产、创造高技能岗位、减少环境足迹：我们从这三个层面衡量自身影响。',
      badge: '绿色建筑', gtitle: '按绿色建筑理念设计的工厂',
      gtext: '从厂区建筑到供能方式，每一项选择都旨在减少药品生产的环境足迹。',
      items: [
        ['sun', '绿色能源', '屋顶光伏为厂区供电，契合区域各国设定的可再生能源发展路径。'],
        ['building', '生物气候建筑', '优化隔热、通风与自然采光，降低洁净区以外的空调需求。'],
        ['drop', '节约用水', '水在厂内处理、循环输送并精确使用。'],
        ['leaf', '减少塑料', '吹灌封工艺在灌装时成型容器，减少包装材料的运输。'],
        ['recycle', '规范处置废弃物', '对工业及实验室废弃物进行分类、处理和安全处置。'],
        ['route', '减少运输', '在贝宁生产，免去从亚洲到我们医院的长途海运与陆运。'],
      ],
      proofs: ['环境与社会合规证书 · 2024 年 8 月 7 日', '目标获得 ISO 14001 认证'],
      cta: '我们的环境承诺', imageAlt: '安装了太阳能电池板的工业屋顶', techAlt: '安装太阳能电池板的技术人员',
    },
  },
  ar: {
    fig: { value: 'ISO 14001', unit: '', label: 'شهادة بيئية يسعى المصنع للحصول عليها' },
    impact: {
      eyebrow: 'أثرنا', title: 'مفيد للصحة، رفيق بالكوكب',
      intro: 'الإنتاج بالقرب من المرضى، وخلق وظائف مؤهلة، وتقليص بصمتنا البيئية: هكذا نقيس أثرنا على هذه الأصعدة الثلاثة.',
      badge: 'مبنى أخضر', gtitle: 'مصنع مصمَّم كمبنى أخضر',
      gtext: 'من هندسة الموقع إلى الطاقة التي تغذيه، يهدف كل خيار إلى تقليص البصمة البيئية للإنتاج الصيدلاني.',
      items: [
        ['sun', 'طاقة خضراء', 'ألواح شمسية كهروضوئية على الأسطح لتغذية الموقع، تماشيًا مع مسار الطاقات المتجددة الذي حددته دول المنطقة.'],
        ['building', 'مبنى مناخي حيوي', 'عزل وتهوية وإضاءة طبيعية محسَّنة لتقليل الحاجة إلى التكييف خارج الغرف النظيفة.'],
        ['drop', 'مياه مُدارة بعناية', 'مياه تُعالج في الموقع، وتُوزَّع في دائرة مغلقة، وتُستخدم بقدر الحاجة.'],
        ['leaf', 'بلاستيك أقل', 'تقنية النفخ والتعبئة والإغلاق تصنع العبوة لحظة تعبئتها: عبوات أقل يتم نقلها.'],
        ['recycle', 'نفايات مُدارة', 'فرز النفايات الصناعية ونفايات المختبر ومعالجتها والتخلص منها بأمان.'],
        ['route', 'نقل أقل', 'الإنتاج في بنين يجنّب رحلات بحرية وبرية طويلة بين آسيا ومستشفياتنا.'],
      ],
      proofs: ['شهادة المطابقة البيئية والاجتماعية · 7 أغسطس 2024', 'السعي إلى شهادة ISO 14001'],
      cta: 'التزامنا البيئي', imageAlt: 'سطح صناعي مزوّد بألواح شمسية', techAlt: 'فني يركّب ألواحًا شمسية',
    },
  },
};

const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
for (const [lang, d] of Object.entries(I)) {
  const file = `src/i18n/${lang}.ts`;
  let src = fs.readFileSync(file, 'utf8');
  // remplace le 5e chiffre (capital social) par ISO 14001
  src = src.replace(/(      \{ value: '13'[^\n]*\n      \{ value: '10'[^\n]*\n)      \{ value: '1'[^\n]*\n/, (m, keep) => `${keep}      { value: ${q(d.fig.value)}, unit: '', label: ${q(d.fig.label)} },\n`);
  const im = d.impact;
  const block = `  impact: {
    eyebrow: ${q(im.eyebrow)},
    title: ${q(im.title)},
    intro: ${q(im.intro)},
    badge: ${q(im.badge)},
    greenTitle: ${q(im.gtitle)},
    greenText: ${q(im.gtext)},
    items: [
${im.items.map(([icon, t, x]) => `      { icon: ${q(icon)}, title: ${q(t)}, text: ${q(x)} },`).join('\n')}
    ],
    proofs: [${im.proofs.map(q).join(', ')}],
    cta: ${q(im.cta)},
    imageAlt: ${q(im.imageAlt)},
    techAlt: ${q(im.techAlt)},
  },
`;
  if (!src.includes('  impact: {')) src = src.replace('  about: {', block + '  about: {');
  fs.writeFileSync(file, src);
  console.log(lang, src.includes("value: 'ISO 14001'"), src.includes('  impact: {'));
}
