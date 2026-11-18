// Page « Vision, mission et valeurs » · français (référence).
// Sources : PROFIL TILAMED FR (vision, mission, 4 valeurs), ancien site (devise, textes des valeurs Rigueur/Excellence),
// pages Égalité, RSE et Environnement (engagements). Textes des valeurs « Respect des normes » et « Fiabilité » rédigés pour le site.
const vision = {
  meta: {
    title: 'Vision, mission et valeurs · TILAMED Pharma',
    description: 'Devenir, d\'ici dix ans, la référence de l\'industrie pharmaceutique en Afrique de l\'Ouest. Notre mission, notre devise, nos valeurs et nos engagements.',
  },
  hero: {
    lead: 'Une ambition, une mission et quatre valeurs qui guident chacune de nos décisions, de la conception de l\'usine jusqu\'au patient.',
    ctaValues: 'Nos valeurs',
    ctaCommit: 'Nos engagements',
  },
  motto: {
    eyebrow: 'Notre devise',
    translation: '',
    near: { title: 'Plus près', text: 'Nos produits sont fabriqués à côté des hôpitaux qui les utilisent : moins de délais, moins de ruptures de stock.' },
    safe: { title: 'Plus sûr', text: 'Chaque lot est fabriqué et contrôlé selon les bonnes pratiques de fabrication, puis tracé jusqu\'à sa livraison.' },
  },
  vision: {
    eyebrow: 'Notre vision',
    text: 'Un fabricant reconnu pour la qualité de ses produits, la fiabilité de ses livraisons et la juste valeur de ses prix.',
    horizon: '10',
    horizonUnit: 'ans',
    horizonLabel: 'pour devenir la référence régionale',
  },
  mission: {
    eyebrow: 'Notre mission',
    keys: [
      { title: 'En quantité', text: 'Une capacité industrielle pensée pour les besoins des hôpitaux du Bénin et de la sous-région.' },
      { title: 'De qualité', text: 'Des produits fabriqués selon les normes de l\'OMS et contrôlés lot par lot par notre laboratoire.' },
      { title: 'À un prix accessible', text: 'Une production locale qui réduit le fret, le stockage et les pertes de change.' },
    ],
  },
  values: {
    eyebrow: 'Nos valeurs',
    title: 'Quatre valeurs, au quotidien',
    intro: 'Elles s\'appliquent à chaque geste, du choix des matières premières jusqu\'à la livraison au patient.',
    items: [
      { title: 'Rigueur', text: 'Des procédures écrites, suivies et vérifiées à chaque étape, du choix des matières premières jusqu\'au patient.' },
      { title: 'Excellence', text: 'Un haut niveau d\'exigence sur la qualité, contrôlé en permanence par notre laboratoire.' },
      { title: 'Respect des normes les plus exigeantes', text: 'Une usine conçue selon les bonnes pratiques de fabrication de l\'OMS et autorisée par l\'Agence béninoise de régulation pharmaceutique.' },
      { title: 'Fiabilité', text: 'Des produits disponibles quand les soignants en ont besoin, des livraisons tenues et des lots tracés de bout en bout.' },
    ],
  },
  commitments: {
    eyebrow: 'Nos engagements',
    title: 'Des valeurs qui se traduisent en actes',
    items: [
      { title: 'Égalité et inclusion', text: 'Première industrie pharmaceutique du Bénin à inscrire, dès sa conception, l\'égalité femmes-hommes et l\'inclusion des personnes en situation de handicap.' },
      { title: 'Développement local', text: 'Des emplois qualifiés au Bénin et un transfert de compétences vers les techniciens locaux.' },
      { title: 'Une usine verte', text: 'Certification EDGE de l\'IFC (bâtiment écologique) en cours d\'obtention et certification ISO 14001 visée.' },
    ],
  },
  cta: {
    eyebrow: 'Travaillons ensemble',
    title: 'Partagez notre ambition',
    text: 'Hôpitaux, centrales d\'achat, distributeurs ou organisations de santé : construisons ensemble l\'accès aux médicaments essentiels en Afrique de l\'Ouest.',
    cta1: 'Nous contacter',
  },
};
export default vision;
export type VisionDict = typeof vision;
