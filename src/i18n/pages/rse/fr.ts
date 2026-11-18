// Page « Responsabilité sociétale » · français (référence).
// Sources : ancien site (impact, engagements, transfert de compétences sur 5 ans), accueil (« utile, verte et inclusive »),
// pages Égalité et Environnement. Textes des trois piliers et de l'appel aux partenaires rédigés pour le site.
const rse = {
  meta: {
    title: 'Responsabilité sociétale · TILAMED Pharma',
    description: 'Santé publique, emploi qualifié, souveraineté sanitaire, égalité et environnement : l\'impact de TILAMED Pharma et ses engagements.',
  },
  hero: {
    lead: 'Notre utilité se mesure aussi à notre impact sur les patients, nos équipes et le territoire.',
    cta1: 'Notre impact',
    cta2: 'Nos engagements',
  },
  facts: [
    { value: '150', unit: '', label: 'emplois directs au démarrage de l\'usine' },
    { value: '70', unit: '%', label: 'de postes techniques' },
    { value: '5', unit: 'ans', label: 'de transfert de compétences sur site' },
  ],
  impact: {
    eyebrow: 'Notre impact',
    title: 'Ce que notre usine apporte',
    items: [
      { title: 'Santé publique', text: 'Rendre disponibles, en permanence, des solutions injectables essentielles de qualité.' },
      { title: 'Emploi qualifié', text: 'Des postes majoritairement techniques, pourvus en priorité localement.' },
      { title: 'Souveraineté sanitaire', text: 'Moins de dépendance aux importations, moins de sorties de devises.' },
      { title: 'Savoir-faire', text: 'Un programme de transfert de compétences pour les techniciens locaux.' },
    ],
  },
  pillars: {
    eyebrow: 'Nos trois piliers',
    items: [
      { title: 'Utile', text: 'Des solutions injectables essentielles, fabriquées au plus près des hôpitaux et contrôlées lot par lot.' },
      { title: 'Inclusive', text: 'Une égalité réelle entre les femmes et les hommes et des postes ouverts aux personnes en situation de handicap.' },
      { title: 'Verte', text: 'Une usine en cours de certification EDGE, une certification ISO 14001 visée et des déchets gérés de façon sûre.' },
    ],
  },
  transfer: {
    eyebrow: 'Transfert de compétences',
    title: 'Un savoir-faire qui reste au BÉNIN',
    value: '5',
    unit: 'ans',
    label: 'd\'accompagnement sur site par les ingénieurs des fabricants',
  },
  commitments: {
    eyebrow: 'Nos engagements',
    title: 'Cinq engagements, au quotidien',
    items: [
      'Fabriquer selon les bonnes pratiques et contrôler chaque lot avant sa libération.',
      'Recruter et former localement, en priorité.',
      'Garantir l\'égalité entre les femmes et les hommes, du recrutement aux responsabilités.',
      'Réduire notre empreinte environnementale et gérer nos déchets de façon sûre.',
      'Agir avec intégrité dans toutes nos relations commerciales.',
    ],
  },
  cta: {
    eyebrow: 'Partenariats',
    title: 'Construisons ensemble un impact durable',
    text: 'Organisations internationales, agences de développement, institutions financières : associez-vous à un projet industriel qui renforce l\'accès aux médicaments essentiels en Afrique de l\'Ouest.',
    cta2: 'Nous contacter',
  },
};
export default rse;
export type RseDict = typeof rse;
