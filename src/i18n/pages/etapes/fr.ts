// Pages des 7 étapes du procédé · français (référence). Source : pages Usine de l'ancien site.
export type Item = { title: string; text: string };
export type Fact = { value: string; unit: string; label: string };
export type Block =
  | { kind: 'sequence' | 'cards'; title: string; text?: string; items: Item[] }
  | { kind: 'points' | 'prose'; title: string; text?: string; items: string[] }
  | { kind: 'table'; title: string; text?: string; head: string[]; rows: string[][] }
  | { kind: 'refs'; title: string; text?: string; items: { title: string; ref: string; by: string }[] };
export type Step = {
  meta: { title: string; description: string };
  lead: string;
  intro: string;
  facts: Fact[];
  block: Block;
  note: string;
};

const etapes = {
  ui: {
    step: 'Étape',
    of: 'sur',
    rail: 'Les 7 étapes du procédé',
    figures: 'En chiffres',
    prev: 'Étape précédente',
    next: 'Étape suivante',
    overview: 'Vue d\'ensemble de l\'usine',
    backTo: 'Notre usine',
    others: 'Le reste de la rubrique Usine',
  },
  steps: {
    'traitement-eau': {
      meta: { title: 'Traitement de l\'eau · Notre usine · TILAMED Pharma', description: 'Eau purifiée et eau pour préparations injectables produites sur place à Sèmè-Podji : osmose inverse, électrodéionisation, distillation et boucle chaude en inox.' },
      lead: 'L\'eau est le premier ingrédient d\'une solution injectable. Sa pureté est contrôlée en continu.',
      intro: 'Une solution de perfusion contient plus de 90 % d\'eau. Nous produisons sur place deux qualités d\'eau pharmaceutique, conformes aux exigences des pharmacopées.',
      facts: [
        { value: '> 90', unit: '%', label: 'd\'eau dans une solution de perfusion' },
        { value: '2', unit: '', label: 'qualités d\'eau pharmaceutique produites sur place' },
      ],
      block: { kind: 'sequence', title: 'Les étapes du traitement', items: [
        { title: 'Prétraitement', text: 'Filtration et adoucissement de l\'eau d\'alimentation.' },
        { title: 'Eau purifiée', text: 'Double osmose inverse puis électrodéionisation (EDI).' },
        { title: 'Eau pour préparations injectables (EPPI)', text: 'Distillation dans un distillateur multi-colonnes, qui élimine les endotoxines.' },
        { title: 'Vapeur pure', text: 'Un générateur dédié produit la vapeur utilisée pour stériliser les équipements.' },
        { title: 'Stockage et boucle', text: 'L\'EPPI est stockée et circule en boucle chaude, en acier inoxydable, pour rester stérile jusqu\'au point d\'utilisation.' },
      ] },
      note: 'La conductivité et la température de l\'eau sont mesurées en continu, avec enregistrement et alarmes.',
    },
    'preparation-solutions': {
      meta: { title: 'Préparation des solutions · Notre usine · TILAMED Pharma', description: 'Préparation par lots, selon une formule validée, dans des cuves en acier inoxydable : pesée, contrôles en cours de fabrication et filtration.' },
      lead: 'Le mélange précis des principes actifs et de l\'eau pour préparations injectables.',
      intro: 'Chaque solution est préparée par lots, selon une formule validée. Les matières premières sont pesées et ajoutées à l\'eau pour préparations injectables dans des cuves en acier inoxydable.',
      facts: [
        { value: '2', unit: '', label: 'cuves de préparation en acier inoxydable' },
      ],
      block: { kind: 'points', title: 'Équipements et contrôles', items: [
        'Deux cuves de préparation, équipées de cellules de pesée et d\'agitateurs magnétiques.',
        'Contrôles en cours de fabrication : concentration, pH, aspect.',
        'Filtration de la solution avant son transfert vers la ligne de remplissage.',
        'Nettoyage et stérilisation des cuves et des circuits entre deux lots.',
      ] },
      note: '',
    },
    'soufflage-remplissage-scellage': {
      meta: { title: 'Soufflage, remplissage, scellage · Notre usine · TILAMED Pharma', description: 'La technologie blow-fill-seal : une seule machine forme le flacon, le remplit et le scelle, sans contact humain. Formats de 100 à 1000 ml.' },
      lead: 'Une seule machine forme le flacon, le remplit et le scelle, sans aucun contact humain.',
      intro: 'La technologie de soufflage-remplissage-scellage (en anglais blow-fill-seal) est aujourd\'hui l\'une des plus sûres pour fabriquer des solutions stériles. Le flacon en plastique est fabriqué au moment même où il est rempli.',
      facts: [
        { value: '100', unit: 'ml', label: 'Antibiotiques, antalgiques' },
        { value: '250', unit: 'ml', label: 'Solutés de base' },
        { value: '500', unit: 'ml', label: 'Le format le plus utilisé' },
        { value: '1000', unit: 'ml', label: 'Réhydratation' },
      ],
      block: { kind: 'sequence', title: 'Un cycle en cinq temps', items: [
        { title: 'Extrusion', text: 'Le polymère de qualité pharmaceutique est fondu puis extrudé en tube.' },
        { title: 'Soufflage', text: 'Le moule se ferme et le flacon est formé par de l\'air stérile filtré.' },
        { title: 'Remplissage', text: 'La solution est dosée avec précision dans le flacon, sous flux d\'air protégé.' },
        { title: 'Scellage', text: 'La tête du flacon est formée et scellée hermétiquement dans le moule.' },
        { title: 'Démoulage', text: 'Les flacons sortent fermés, prêts pour la stérilisation.' },
      ] },
      note: 'Le changement de format se fait en une demi-heure environ, ce qui permet de répondre rapidement aux besoins des clients.',
    },
    sterilisation: {
      meta: { title: 'Stérilisation · Notre usine · TILAMED Pharma', description: 'Stérilisation terminale des flacons dans leur emballage final, en autoclave à aspersion d\'eau surchauffée, avec cycles validés et enregistrés.' },
      lead: 'Chaque flacon rempli est stérilisé dans son emballage final.',
      intro: 'Après le scellage, les flacons subissent une stérilisation terminale dans un autoclave à aspersion d\'eau surchauffée. Cette méthode chauffe les flacons de façon homogène tout en protégeant le plastique.',
      facts: [],
      block: { kind: 'points', title: 'Une stérilisation maîtrisée', items: [
        'Cycles validés : temps, température et pression enregistrés pour chaque charge.',
        'Indicateurs et contrôles qui confirment l\'efficacité de chaque cycle.',
        'Parties en contact avec le produit en acier inoxydable de qualité pharmaceutique.',
        'Séparation physique entre les flacons avant et après stérilisation.',
      ] },
      note: '',
    },
    inspection: {
      meta: { title: 'Contrôle à 100 % · Notre usine · TILAMED Pharma', description: 'Séchage, test d\'étanchéité, inspection visuelle, mise en carton et rejet automatique : aucun flacon ne quitte l\'usine sans avoir été contrôlé.' },
      lead: 'Aucun flacon ne quitte l\'usine sans avoir été contrôlé.',
      intro: '',
      facts: [
        { value: '100', unit: '%', label: 'des flacons contrôlés avant leur sortie de l\'usine' },
      ],
      block: { kind: 'sequence', title: 'Du séchage au carton', items: [
        { title: 'Séchage', text: 'Les flacons sont séchés à la sortie de l\'autoclave.' },
        { title: 'Test d\'étanchéité', text: 'Chaque flacon est testé pour détecter la moindre fuite.' },
        { title: 'Inspection visuelle', text: 'Contrôle sous lumière de l\'aspect de la solution et du flacon.' },
        { title: 'Suremballage et mise en carton', text: 'Insertion de la notice et du certificat, fermeture et étiquetage du carton.' },
        { title: 'Rejet automatique', text: 'Les cartons au poids non conforme ou à l\'étiquette erronée sont écartés automatiquement.' },
      ] },
      note: '',
    },
    laboratoire: {
      meta: { title: 'Laboratoire de contrôle qualité · Notre usine · TILAMED Pharma', description: 'Chromatographie, spectrométrie, chambres de stabilité et microbiologie : chaque lot est analysé et libéré par le pharmacien responsable.' },
      lead: 'Notre laboratoire analyse les matières premières, les eaux et chaque lot avant sa libération.',
      intro: '',
      facts: [],
      block: { kind: 'cards', title: 'Nos moyens d\'analyse', items: [
        { title: 'Chromatographie (HPLC)', text: 'Identification et dosage des principes actifs.' },
        { title: 'Spectrométrie', text: 'Absorption atomique, UV et infrarouge pour l\'identité et la pureté.' },
        { title: 'Chambres de stabilité', text: 'Études de stabilité pour confirmer la durée de conservation.' },
        { title: 'Microbiologie', text: 'Stérilité, endotoxines et surveillance de l\'environnement.' },
      ] },
      note: 'Aucun lot n\'est mis sur le marché sans la décision du pharmacien responsable, sur la base des résultats du laboratoire et de la revue du dossier de lot.',
    },
    'conditionnement-logistique': {
      meta: { title: 'Conditionnement et livraison · Notre usine · TILAMED Pharma', description: 'Stockage selon les bonnes pratiques de distribution et livraison par notre propre service logistique, au Bénin et à l\'export.' },
      lead: 'Des produits livrés au bon endroit, au bon moment, dans de bonnes conditions.',
      intro: 'Les produits finis sont stockés dans notre entrepôt selon les bonnes pratiques de distribution, puis livrés à nos clients au Bénin par notre propre service logistique.',
      facts: [],
      block: { kind: 'points', title: 'Notre service logistique', items: [
        'Livraison selon les besoins réels des clients, sans obligation de stocker plusieurs mois de produits.',
        'Suivi en temps réel des commandes et des stocks grâce à un logiciel de gestion intégré.',
        'Pour l\'export, enlèvement par les transitaires de nos clients ou livraison organisée par nos soins.',
      ] },
      note: '',
    },
  } as Record<string, Step>,
};
export default etapes;
export type EtapesDict = typeof etapes;
