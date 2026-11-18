// Page « Notre usine » · français (langue de référence).
// Sources : pages Usine de l'ancien site (usine, site-seme-podji, traitement-eau… transfert-technologie) + capacités LVP/SVP validées.
const usine = {
  meta: {
    title: 'Notre usine · TILAMED Pharma, Sèmè-Podji (Bénin)',
    description: 'Une unité moderne de production de solutions injectables à Sèmè-Podji : traitement de l\'eau, soufflage-remplissage-scellage, stérilisation, contrôle à 100 % et laboratoire, selon les BPF de l\'OMS.',
  },
  hero: {
    title: 'Notre usine',
    lead: 'Une unité moderne et extensible de production de solutions injectables, construite à Sèmè-Podji selon les bonnes pratiques de fabrication de l\'OMS.',
    cta1: 'Le procédé en 7 étapes',
    cta2: 'Le site de Sèmè-Podji',
  },
  facts: [
    { value: '15', unit: 'M', code: 'LVP', label: 'solutés de grand volume par an' },
    { value: '35', unit: 'M', code: 'SVP', label: 'injectables de petit volume par an' },
    { value: '2', unit: 'ha', code: '', label: 'de site industriel à Sèmè-Podji' },
    { value: '100–1000', unit: 'ml', code: '', label: 'formats de flacons de perfusion' },
    { value: 'C + A', unit: '', code: '', label: 'classes de propreté des zones critiques' },
  ],
  site: {
    eyebrow: 'Un site intégré',
    title: 'Toute la chaîne de fabrication réunie sur un même site',
    text: 'Notre usine réunit le traitement de l\'eau pharmaceutique, la préparation des solutions, la fabrication des flacons, la stérilisation, l\'inspection, le laboratoire de contrôle qualité et l\'entrepôt. Elle est conçue pour pouvoir augmenter sa capacité.',
    badge: 'Conçue pour augmenter sa capacité',
    imageAlt: 'Équipements en acier inoxydable dans une usine pharmaceutique',
  },
  process: {
    eyebrow: 'Le procédé',
    title: 'Sept étapes, de l\'eau à la livraison',
    intro: 'Chaque étape a sa page détaillée. Voici l\'essentiel de ce qui se passe entre l\'arrivée de l\'eau et le départ des cartons.',
    more: 'Découvrir l\'étape',
    docTitle: 'Besoin des données techniques ?',
    docText: 'Professionnels de santé et acheteurs : demandez les spécifications de nos produits et de notre procédé.',
    docCta: 'Demander la documentation',
    steps: [
      { title: 'Traitement de l\'eau', text: 'Une solution de perfusion contient plus de 90 % d\'eau. Nous produisons sur place deux qualités d\'eau pharmaceutique.', points: ['Double osmose inverse et électrodéionisation', 'Eau pour préparations injectables par distillation', 'Conductivité et température suivies en continu'] },
      { title: 'Préparation des solutions', text: 'Chaque solution est préparée par lots, selon une formule validée, dans des cuves en acier inoxydable.', points: ['Cuves équipées de cellules de pesée et d\'agitateurs', 'Contrôles en cours : concentration, pH, aspect', 'Filtration avant le remplissage'] },
      { title: 'Soufflage, remplissage, scellage', text: 'Une seule machine forme le flacon, le remplit et le scelle, sans aucun contact humain.', points: ['Flacon fabriqué au moment même du remplissage', 'Remplissage sous flux d\'air protégé', 'Changement de format en une demi-heure environ'] },
      { title: 'Stérilisation', text: 'Chaque flacon rempli est stérilisé dans son emballage final, en autoclave à aspersion d\'eau surchauffée.', points: ['Cycles validés et enregistrés pour chaque charge', 'Chauffe homogène qui protège le plastique', 'Séparation physique avant et après stérilisation'] },
      { title: 'Contrôle à 100 %', text: 'Aucun flacon ne quitte l\'usine sans avoir été contrôlé.', points: ['Test d\'étanchéité de chaque flacon', 'Inspection visuelle sous lumière', 'Rejet automatique des cartons non conformes'] },
      { title: 'Laboratoire de contrôle qualité', text: 'Matières premières, eaux et lots sont analysés avant toute libération.', points: ['Chromatographie (HPLC) et spectrométrie', 'Microbiologie : stérilité et endotoxines', 'Libération par le pharmacien responsable'] },
      { title: 'Conditionnement et livraison', text: 'Stockage selon les bonnes pratiques de distribution, puis livraison par notre propre service logistique.', points: ['Livraison selon les besoins réels des clients', 'Suivi des commandes et des stocks en temps réel', 'Export par transitaire ou livraison organisée'] },
    ],
  },
  explore: {
    eyebrow: 'Autour de la production',
    title: 'Ce qui rend la production possible',
    intro: 'Zones propres, services techniques, formation des équipes et le site lui-même : chaque sujet a sa page.',
    more: 'En savoir plus',
  },
  green: {
    badge: 'Green building',
    title: 'Une usine pensée pour limiter son impact',
    text: 'Eau, énergie, déchets : l\'usine est en cours de certification EDGE, le standard green building de l\'IFC (Groupe de la Banque mondiale).',
    cta: 'Notre démarche environnementale',
    imageAlt: 'Toitures industrielles équipées de panneaux solaires',
  },
  location: {
    eyebrow: 'Le site de Sèmè-Podji',
    title: 'Un emplacement stratégique, entre Cotonou et le Nigéria',
    items: [
      'Dans la commune de Sèmè-Podji, département de l\'Ouémé, au sud du Bénin',
      'À proximité immédiate de la frontière de Kraké, principal passage vers le Nigéria',
      'Près de Cotonou et de son port autonome',
      'Au sein d\'une zone économique spéciale aux avantages douaniers et fiscaux',
    ],
    cta: 'Le site de Sèmè-Podji',
    directions: 'Itinéraire',
  },
};
export default usine;
export type UsineDict = typeof usine;
