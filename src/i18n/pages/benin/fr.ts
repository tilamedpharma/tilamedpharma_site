// Page « Pourquoi le Bénin ? » · français (référence).
// Sources : ancien site (constat, bénéfices, environnement favorable, note COVID) ; couverture 15 pays confirmée par le client.
// Comparaison « importée / fabriquée au Bénin » et section « position stratégique » rédigées pour le site à partir de ces faits.
const benin = {
  meta: {
    title: 'Pourquoi produire au Bénin ? · TILAMED Pharma',
    description: 'Le Bénin importe la totalité de ses solutions injectables. Produire sur place améliore la disponibilité, la traçabilité, les prix et l\'emploi.',
  },
  hero: {
    lead: 'Le Bénin importe aujourd\'hui la totalité de ses solutions injectables. Produire sur place change la donne pour les patients.',
    cta: 'Le constat',
  },
  facts: [
    { value: '100', unit: '%', label: 'des solutions injectables consommées au Bénin sont importées' },
    { value: '0', unit: '', label: 'fabricant local de solutions pharmaceutiques liquides avant TILAMED' },
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest à approvisionner depuis le Bénin' },
    { value: '400', unit: 'M +', label: 'd\'habitants en Afrique de l\'Ouest' },
  ],
  problem: {
    eyebrow: 'Le constat',
    title: 'Un produit lourd, coûteux à importer',
    text: 'Une solution de perfusion est composée essentiellement d\'eau. Elle est lourde et volumineuse : son transport coûte cher, car le fret est calculé au poids et au volume, et son stockage occupe beaucoup de place. Les grossistes doivent pourtant garder en permanence plusieurs mois de stock pour éviter les ruptures.',
    todayLabel: 'Aujourd\'hui · importée',
    today: ['Fabrication à l\'étranger', 'Fret maritime facturé au poids et au volume', 'Plusieurs mois de stock chez les grossistes', 'Hôpitaux et patients'],
    tomorrowLabel: 'Demain · fabriquée au Bénin',
    tomorrow: ['Fabrication à Sèmè-Podji', 'Livraison par la route, selon les besoins réels', 'Hôpitaux et patients'],
  },
  benefits: {
    eyebrow: 'Les bénéfices',
    title: 'Ce que change la production locale',
    items: [
      { title: 'Disponibilité', text: 'Des stocks à proximité, livrés selon les besoins réels des clients, sans des mois de délai.' },
      { title: 'Traçabilité', text: 'Un circuit court et maîtrisé, qui aide à lutter contre les médicaments falsifiés.' },
      { title: 'Prix', text: 'Moins de fret, moins de stockage, moins de pertes de change : des prix plus justes.' },
      { title: 'Emploi', text: 'Des emplois qualifiés et un transfert de savoir-faire industriel.' },
    ],
  },
  position: {
    eyebrow: 'Une position stratégique',
    title: 'Au cœur de l\'Afrique de l\'Ouest',
    text: 'Notre usine s\'installe à Sèmè-Podji, entre Cotonou et la frontière du Nigeria : un emplacement pensé pour approvisionner toute la région.',
    corridor: 'Sur le corridor côtier Abidjan – Lagos',
    port: 'Port',
    border: 'Frontière',
    items: [
      { title: 'Le Nigeria à la porte', text: 'Le site jouxte la frontière du pays le plus peuplé d\'Afrique.' },
      { title: 'Le port de Cotonou à proximité', text: 'La porte d\'entrée commerciale du pays, pour les matières premières comme pour les équipements.' },
      { title: 'Toute la région à desservir', text: 'Quinze pays et plus de 400 millions d\'habitants à approvisionner depuis une seule usine.' },
    ],
  },
  env: {
    eyebrow: 'Le cadre',
    title: 'Un environnement favorable',
    items: [
      'Une volonté politique affirmée de développer l\'industrie pharmaceutique nationale.',
      'Un code des investissements qui place la santé et la transformation industrielle parmi les secteurs prioritaires.',
      'Des avantages douaniers et fiscaux dans les zones économiques spéciales.',
      'Une main-d\'œuvre jeune et qualifiée, formée dans les universités de la région et au-delà.',
    ],
  },
  covid: {
    eyebrow: 'Souveraineté sanitaire',
    text: 'La crise du COVID-19 a montré combien la dépendance aux importations fragilise les systèmes de santé. Produire localement, c\'est sécuriser l\'accès aux médicaments essentiels.',
  },
};
export default benin;
export type BeninDict = typeof benin;
