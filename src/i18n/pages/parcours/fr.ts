// Page « Notre parcours » · français (référence).
// Sources : PROFIL TILAMED FR (dates des agréments, bail, sites), ancien site (constat, études, avis ABRP 16 mai 2023).
// Les étapes avec `comp` reprennent titre + référence de la liste officielle des agréments (t.compliance.items[comp]).
export type Milestone = { date: string; title: string; text: string; comp?: number; ref?: string; state?: 'now' | 'next' };
export type Phase = { range: string; title: string; items: Milestone[] };

const parcours = {
  meta: {
    title: 'Notre parcours · TILAMED Pharma',
    description: 'De SEDIS SARL en 2013 à l\'usine de Sèmè-Podji : dix ans de terrain, six agréments et autorisations, un site industriel de 2 hectares.',
  },
  hero: {
    lead: 'D\'une expérience de terrain dans le secteur médical à la création d\'une industrie pharmaceutique locale.',
    cta: 'Les grandes étapes',
  },
  facts: [
    { value: '2013', unit: '', label: 'premiers pas dans le secteur médical en Afrique de l\'Ouest' },
    { value: '2023', unit: '', label: 'SEDIS SARL devient TILAMED PHARMA SA' },
    { value: '6', unit: '', label: 'agréments, autorisations et certificats obtenus' },
    { value: '2', unit: 'ha', label: 'de site industriel à Sèmè-Podji' },
  ],
  timeline: {
    eyebrow: 'Les grandes étapes',
    title: 'Plus de dix ans de terrain, une ambition industrielle',
    refLabel: 'Référence',
    nowLabel: 'En cours',
    nextLabel: 'Prochaine étape',
    phases: [
      {
        range: '2013 – 2022',
        title: 'Les fondations',
        items: [
          { date: '2013', title: 'Création de SEDIS SARL', text: 'L\'entreprise naît pour fournir, installer et entretenir des dispositifs médicaux en Afrique de l\'Ouest, au contact des hôpitaux, des laboratoires et des centrales d\'achat.' },
          { date: '2013 – 2022', title: 'Dix ans de terrain, un constat', text: 'Au Bénin, aucune solution injectable n\'est fabriquée localement. Études de marché, rencontres avec les autorités de santé, les centrales d\'achat et des fabricants européens d\'équipements : le projet industriel prend forme.' },
        ],
      },
      {
        range: '2023 – 2024',
        title: 'Les autorisations',
        items: [
          { date: '2023', title: 'Naissance de TILAMED PHARMA SA', text: 'SEDIS SARL devient TILAMED PHARMA SA, société anonyme au capital d\'un milliard de francs CFA, tournée vers la production industrielle.' },
          { date: '16 mai 2023', title: 'Avis favorable de l\'ABRP', text: 'Réunie en commission, l\'Agence béninoise de régulation pharmaceutique rend un avis favorable à l\'ouverture et à l\'exploitation d\'une usine pharmaceutique.' },
          { date: '30 juin 2023', title: '', text: 'L\'installation et l\'exploitation de l\'usine pharmaceutique sont autorisées.', comp: 0 },
          { date: '7 août 2024', title: '', text: 'Le projet est reconnu conforme aux exigences environnementales et sociales.', comp: 2 },
          { date: '9 septembre 2024', title: '', text: 'L\'activité industrielle de TILAMED Pharma est autorisée.', comp: 1 },
          { date: '28 octobre 2024', title: '', text: 'La liste des équipements de production exonérés est fixée.', comp: 3 },
          { date: '28 novembre 2024', title: '', text: 'Le projet est encadré par arrêté ministériel et bénéficie d\'une exonération fiscale et sociale (régime B, 8 ans) pour ses phases d\'investissement et d\'exploitation.', comp: 4 },
        ],
      },
      {
        range: '2025 →',
        title: 'Le site et l\'usine',
        items: [
          { date: '9 septembre 2025', title: 'Le site de Sèmè-Podji', text: 'L\'État béninois confie à TILAMED PHARMA SA un site industriel de 2 hectares, par bail emphytéotique, dans la zone industrielle de Sèmè-Podji, à la frontière du Nigeria.', ref: 'Bail emphytéotique N° 2494/MEF/DC/SGM/ANDF/DAJuF/DGDE/S' },
          { date: 'Aujourd\'hui', title: 'La construction de l\'usine', text: 'TILAMED Pharma prépare son unité de production de solutions injectables dans la zone économique spéciale de Sèmè-Podji.', state: 'now' },
          { date: 'Demain', title: 'La mise en service', text: 'Démarrage de la production et recrutement des premières équipes.', state: 'next' },
        ],
      },
    ] as Phase[],
  },
  sites: {
    eyebrow: 'Nos implantations',
    title: 'Un ancrage au Bénin et dans la région',
    items: [
      { title: 'Site de production', place: 'Sèmè-Podji · Bénin', text: '2 hectares (20 000 m²) dans la zone industrielle de Sèmè-Podji, à la frontière du Nigeria.' },
      { title: 'Siège administratif', place: 'Cotonou · Bénin', text: 'Un immeuble administratif aux Cocotiers, en centre-ville, propriété de TILAMED PHARMA SA.' },
      { title: 'Bureau régional', place: 'Ouagadougou · Burkina Faso', text: 'Un immeuble administratif de 1 000 m² à Dassasgho.' },
    ],
  },
  cta: {
    eyebrow: 'La suite',
    title: 'Suivez la construction de l\'usine',
    text: 'Chaque nouvelle étape du projet est annoncée dans nos actualités. Découvrez dès aujourd\'hui le procédé de fabrication de notre future usine.',
  },
};
export default parcours;
export type ParcoursDict = typeof parcours;
