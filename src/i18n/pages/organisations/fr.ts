// Page « Organisations de santé » · français (référence).
// Sources : ancien site (intro, dossiers qualité, livraison 15 pays), PROFIL TILAMED FR 2026 (exemples OOAS, MURAZ,
// CIRDES, GIZ, AFD, OMS), page Centrale d'achat (stockage et distribution pour les programmes, appels d'offres).
// « Ce que nous apportons », « Votre dossier d'appel d'offres » et « Des objectifs partagés » rédigés pour le site :
// à valider par le client. Ne jamais réintroduire de mention « BPF de l'OMS » (demande du 19/11).
const organisations = {
  meta: {
    title: 'Organisations de santé · Marchés · TILAMED Pharma',
    description: 'Un partenaire local pour les programmes de santé régionaux et internationaux : production au BÉNIN, dossiers qualité complets, appels d\'offres, livraison dans 15 pays.',
  },
  hero: {
    lead: 'Un partenaire local pour les programmes de santé régionaux et internationaux.',
    cta1: 'Nous écrire',
  },
  facts: [
    { value: '15', unit: 'pays', label: 'de l\'espace CEDEAO couverts' },
    { value: '2013', unit: '', label: 'au service des programmes et des ministères de la santé' },
    { value: '6', unit: 'agréments', label: 'et autorisations obtenus au BÉNIN' },
  ],
  intro: {
    eyebrow: 'Organisations de santé',
    title: 'Nos équipes connaissent vos procédures',
    text: [
      'Les organisations internationales, régionales et non gouvernementales accordent une grande importance à l\'amélioration des systèmes de santé en Afrique de l\'Ouest.',
      'Depuis 2013, nous équipons des hôpitaux et des laboratoires et approvisionnons des programmes de santé : nous connaissons vos procédures d\'achat et vos exigences de qualité.',
    ],
    already: 'Ils travaillent déjà avec nous',
    names: ['OOAS', 'Centre MURAZ', 'CIRDES', 'GIZ', 'AFD', 'OMS'],
    imageAlt: 'Médecin animant une séance de santé devant un groupe de femmes',
  },
  bring: {
    eyebrow: 'Ce que nous apportons',
    title: 'Un fournisseur à la mesure de vos programmes',
    items: [
      { title: 'Une production régionale', text: 'Des solutés fabriqués au BÉNIN : des délais courts, moins de dépendance aux importations et des stocks plus faciles à reconstituer.' },
      { title: 'Des dossiers qualité complets', text: 'Pour chaque produit, la documentation technique et réglementaire ; pour chaque lot, un certificat d\'analyse.' },
      { title: 'La pratique des appels d\'offres', text: 'Une équipe habituée aux procédures d\'achat nationales et internationales et à leurs exigences.' },
      { title: 'Stockage et distribution', text: 'Sur une base contractuelle, nous stockons, gérons et distribuons médicaments et matériel médical pour vos programmes.' },
    ],
  },
  file: {
    eyebrow: 'Votre dossier d\'appel d\'offres',
    title: 'Ce que nous pouvons vous fournir',
    items: [
      'Les autorisations délivrées par l\'ABRP et le ministère, avec leurs numéros.',
      'La documentation technique et réglementaire de chaque produit.',
      'Le certificat d\'analyse de chaque lot, libéré par notre pharmacien responsable.',
      'La traçabilité de chaque lot, de la fabrication à la livraison.',
      'Un calendrier de livraisons planifié sur la durée de votre programme.',
    ],
  },
  goals: {
    eyebrow: 'Des objectifs partagés',
    title: 'Un partenaire aligné sur vos objectifs de développement',
    more: 'En savoir plus',
    items: [
      { text: 'Former des techniciens béninois et transférer les savoir-faire de la production pharmaceutique.' },
      { text: 'Une usine qui promeut l\'égalité femmes-hommes et l\'inclusion des personnes handicapées.' },
      { text: 'Un bâtiment engagé dans la certification EDGE pour la construction durable.' },
    ],
  },
  cta: {
    eyebrow: 'Parlons de votre programme',
    title: 'Préparons ensemble votre prochain approvisionnement',
    text: 'Décrivez-nous votre programme, les produits recherchés et les pays concernés : notre équipe vous répond avec une offre et la documentation nécessaire.',
  },
};
export default organisations;
export type OrganisationsDict = typeof organisations;
