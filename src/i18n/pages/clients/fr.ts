// Page « Nos clients » · français (référence). Maison de la liste des clients (5 familles + exemples).
// Sources : PROFIL TILAMED FR 2026 (principaux clients et exemples), ancien site (« Comment nous travaillons »).
// Textes « ce que nous leur apportons », chiffres « 3 canaux / 1 interlocuteur » et ressources rédigés pour le site :
// à valider par le client.
const clients = {
  meta: {
    title: 'Nos clients · Marchés · TILAMED Pharma',
    description: 'Centrales d\'achat publiques, grossistes répartiteurs, organisations régionales et internationales, pharmacies et cliniques : les clients de TILAMED Pharma en Afrique de l\'Ouest.',
  },
  hero: {
    lead: 'Nous fournissons les acteurs publics et privés de la santé au BÉNIN et en Afrique de l\'Ouest.',
    cta1: 'Demander une offre',
  },
  facts: [
    { value: '5', unit: 'familles', label: 'de clients, publics et privés' },
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest desservis' },
    { value: '3', unit: 'canaux', label: 'ventes directes, appels d\'offres, distributeurs' },
    { value: '1', unit: 'interlocuteur', label: 'notre direction commerciale, pour toutes les ventes' },
  ],
  who: {
    eyebrow: 'À qui nous nous adressons',
    title: 'Ils achètent nos produits',
    text: 'Du marché public au comptoir de la pharmacie, nos produits passent par cinq familles de clients. Pour chacune, nous avons adapté notre façon de travailler.',
    items: [
      { title: 'Centrales d\'achat publiques d\'Afrique de l\'Ouest', examples: ['SOBAPS', 'CAMEG', 'ONPPC', 'SONIPHARM'], text: 'Des réponses complètes à leurs appels d\'offres et des livraisons planifiées selon la consommation réelle.' },
      { title: 'Grossistes répartiteurs privés internationaux', examples: ['UBIPHARM', 'UBPHAR', 'GAPOB'], text: 'Un fournisseur dans la région : des commandes plus fréquentes et moins de stock immobilisé.' },
      { title: 'Organisations régionales', examples: ['OOAS', 'Centre MURAZ', 'CIRDES'], text: 'Un partenaire local pour les programmes de santé de la sous-région.' },
      { title: 'Organisations internationales', examples: ['GIZ', 'AFD', 'OMS'], text: 'Des dossiers qualité complets et une capacité de livraison dans les 15 pays d\'Afrique de l\'Ouest.' },
      { title: 'Pharmacies et cliniques privées', examples: ['Dans toute l\'Afrique de l\'Ouest'], text: 'Des produits de santé essentiels disponibles près de chez elles, par nos distributeurs agréés.' },
    ],
    more: 'En savoir plus',
  },
  how: {
    eyebrow: 'Comment nous travaillons',
    title: 'Trois façons d\'acheter nos produits',
    items: [
      { title: 'Ventes directes', text: 'Aux centrales d\'achat publiques et privées, sur commande ou en livraisons planifiées.', for: 'Centrales d\'achat, grands comptes' },
      { title: 'Appels d\'offres', text: 'Nous répondons aux appels d\'offres et aux consultations restreintes, nationaux et internationaux, avec un dossier technique et réglementaire complet.', for: 'Ministères, organisations de santé' },
      { title: 'Réseau de distributeurs', text: 'Pour le secteur privé, nos produits sont vendus par l\'intermédiaire de nos distributeurs agréés dans chaque pays.', for: 'Pharmacies, cliniques, grossistes' },
    ],
    forLabel: 'Pour',
    central: 'Toutes les ventes sont centralisées par notre direction commerciale, avec des délais de réponse courts.',
  },
  resources: {
    eyebrow: 'Pour nos acheteurs',
    title: 'Tout ce qu\'il faut pour préparer une commande',
    items: [
      { text: 'Toutes nos références, par gamme, avec leurs présentations.' },
      { text: 'Fiches techniques et certificats d\'analyse, sur demande.' },
      { text: 'Nos autorisations, avec leurs numéros et leurs dates.' },
    ],
  },
  cta: {
    eyebrow: 'Direction commerciale',
    title: 'Un besoin, un appel d\'offres en préparation ?',
    text: 'Écrivez à notre direction commerciale en précisant les produits, les quantités et le pays de livraison : nous vous répondons rapidement.',
    imageAlt: 'Une cliente et un pharmacien dans une officine',
  },
};
export default clients;
export type ClientsDict = typeof clients;
