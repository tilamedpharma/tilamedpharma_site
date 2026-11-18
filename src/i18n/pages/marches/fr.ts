// Rubrique Marchés · français (référence). Source : pages clients, centrales-achat, hopitaux-cliniques,
// organisations-sante, distributeurs et presence de l'ancien site. Liste des clients cibles : accueil (t.clients).
import type { Topic } from '../usine-plus/fr';

const pages: Record<string, Topic> = {
  clients: {
    meta: { title: 'Nos clients · Marchés · TILAMED Pharma', description: 'Centrales d\'achat, grossistes, organisations de santé, hôpitaux et pharmacies : les clients de TILAMED Pharma au Bénin et en Afrique de l\'Ouest.' },
    lead: 'Nous fournissons les acteurs publics et privés de la santé au Bénin et en Afrique de l\'Ouest.',
    intro: '',
    facts: [
      { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest couverts' },
    ],
    blocks: [
      { kind: 'points', title: 'Comment nous travaillons', items: [
        'Ventes directes aux centrales d\'achat publiques et privées.',
        'Réponses aux appels d\'offres et aux consultations restreintes.',
        'Ventes au secteur privé et par l\'intermédiaire de nos distributeurs.',
        'Toutes les ventes sont centralisées par notre direction commerciale, avec des délais de réponse courts.',
      ] },
    ],
    note: '',
  },
  'centrales-achat': {
    meta: { title: 'Centrales d\'achat · Marchés · TILAMED Pharma', description: 'Un fournisseur local, capable de livrer selon vos besoins réels : moins de stock immobilisé, moins de ruptures, des dossiers d\'appels d\'offres complets.' },
    lead: 'Un fournisseur local, capable de livrer selon vos besoins réels.',
    intro: 'Les centrales d\'achat doivent aujourd\'hui commander plusieurs mois à l\'avance et stocker de grands volumes de solutés importés. Avec une production locale, les commandes peuvent suivre la consommation réelle.',
    facts: [],
    blocks: [
      { kind: 'cards', title: 'Ce que vous y gagnez', items: [
        { title: 'Moins de stock immobilisé', text: 'Des livraisons plus fréquentes, des entrepôts moins encombrés.' },
        { title: 'Moins de ruptures', text: 'Un fournisseur à quelques heures de route plutôt qu\'à plusieurs semaines de mer.' },
        { title: 'Dossiers complets', text: 'Une équipe habituée aux procédures d\'appels d\'offres nationaux et internationaux.' },
      ] },
    ],
    note: '',
  },
  'hopitaux-cliniques': {
    meta: { title: 'Hôpitaux, cliniques et pharmacies · Marchés · TILAMED Pharma', description: 'Des solutions de perfusion essentielles, disponibles près de chez vous, en flacons plastiques incassables.' },
    lead: 'Des solutions de perfusion essentielles, disponibles près de chez vous.',
    intro: 'Les solutés de perfusion sont utilisés chaque jour dans tous les services : urgences, chirurgie, médecine, pédiatrie, maternité. Leur disponibilité est vitale.',
    facts: [],
    blocks: [
      { kind: 'points', title: 'Une gamme pensée pour l\'hôpital', items: [
        'Une gamme couvrant les besoins de base : sérum physiologique, glucose, Ringer lactate.',
        'Des solutions spécifiques : antalgique, anti-infectieux, antibiotiques.',
        'Des injectables en ampoules pour les urgences, la maternité et les soins courants.',
        'Des flacons plastiques incassables, faciles à manipuler et à stocker.',
      ] },
    ],
    note: '',
  },
  'organisations-sante': {
    meta: { title: 'Organisations de santé · Marchés · TILAMED Pharma', description: 'Un partenaire local pour les programmes de santé régionaux et internationaux : BPF de l\'OMS, dossiers qualité complets, livraison dans 15 pays.' },
    lead: 'Un partenaire local pour les programmes de santé régionaux et internationaux.',
    intro: 'Les organisations internationales, régionales et non gouvernementales accordent une grande importance à l\'amélioration des systèmes de santé en Afrique de l\'Ouest. Nos équipes connaissent leurs procédures d\'achat et leurs exigences de qualité.',
    facts: [
      { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest couverts' },
    ],
    blocks: [
      { kind: 'points', title: 'Nos engagements', items: [
        'Fabrication selon les bonnes pratiques de l\'OMS.',
        'Dossiers de qualité complets pour chaque produit.',
        'Capacité de livraison dans les 15 pays d\'Afrique de l\'Ouest couverts.',
      ] },
    ],
    note: '',
  },
};

const distrib = {
  meta: { title: 'Devenir distributeur · Marchés · TILAMED Pharma', description: 'Grossistes et distributeurs pharmaceutiques d\'Afrique de l\'Ouest : rejoignez le réseau de distributeurs agréés TILAMED Pharma.' },
  lead: 'Vous êtes grossiste ou distributeur pharmaceutique en Afrique de l\'Ouest ? Parlons-en.',
  intro: 'Nous développons un réseau de distributeurs agréés pour rendre nos produits disponibles dans toute la sous-région.',
  reqTitle: 'Ce que nous recherchons',
  reqs: [
    'Être titulaire des autorisations de distribution pharmaceutique de votre pays.',
    'Disposer d\'un entrepôt conforme aux bonnes pratiques de distribution.',
    'Connaître les circuits de distribution publics et privés de votre marché.',
  ],
  formTitle: 'Votre candidature',
  fields: {
    company: 'Raison sociale', country: 'Pays', name: 'Nom et prénom du contact', role: 'Fonction', email: 'Adresse e-mail', phone: 'Téléphone',
    licence: 'Autorisation de distribution pharmaceutique', warehouse: 'Entrepôt conforme aux BPD', yes: 'Oui', no: 'Non', pending: 'En cours',
    channels: 'Circuits couverts', ranges: 'Gammes qui vous intéressent', message: 'Présentez votre entreprise',
    messageHint: 'Zones couvertes, clients, volumes, équipe…', consent: 'J\'accepte que TILAMED Pharma utilise ces informations pour étudier ma candidature.',
    submit: 'Envoyer ma candidature', required: 'Champ obligatoire', select: 'Choisir…',
  },
  channels: ['Centrales d\'achat publiques', 'Hôpitaux et cliniques', 'Pharmacies d\'officine', 'Organisations de santé', 'Export sous-régional'],
};

const presence = {
  meta: { title: 'Présence régionale · Marchés · TILAMED Pharma', description: 'Une usine au Bénin, 15 pays d\'Afrique de l\'Ouest couverts et des bureaux au Bénin, au Burkina Faso et en France.' },
  lead: 'Une usine au Bénin, 15 pays d\'Afrique de l\'Ouest couverts et une présence internationale.',
  facts: [
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest couverts' },
    { value: '3', unit: '', label: 'bureaux : Bénin, Burkina Faso, France' },
    { value: '400', unit: 'M +', label: 'd\'habitants en Afrique de l\'Ouest' },
  ],
  note: 'La sous-région partage des défis de santé proches : des maladies semblables, des populations jeunes et en forte croissance, et une même dépendance aux médicaments importés.',
};

const marches = { pages, distrib, presence };
export default marches;
export type MarchesDict = typeof marches;
