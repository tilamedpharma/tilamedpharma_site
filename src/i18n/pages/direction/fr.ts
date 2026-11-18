// Page « Direction » · français (référence).
// Sources : PROFIL TILAMED FR (DG, expérience des actionnaires : 13 ans, 15 pays), ancien site (biographie, parcours, organisation).
// Textes du rôle du pharmacien responsable et de l'appel Carrières rédigés pour le site.
const direction = {
  meta: {
    title: 'Direction · TILAMED Pharma',
    description: 'Une équipe dirigeante qui connaît le terrain de la santé en Afrique de l\'Ouest : le directeur général, nos actionnaires et une organisation pharmaceutique.',
  },
  hero: {
    lead: 'Une équipe dirigeante qui connaît le terrain de la santé en Afrique de l\'Ouest.',
    ctaDg: 'Le directeur général',
    ctaOrg: 'Notre organisation',
  },
  facts: [
    { value: '13', unit: 'ans +', label: 'd\'expérience de nos actionnaires dans le secteur médical' },
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest où s\'est construite cette expérience' },
    { value: '2013', unit: '', label: 'création de SEDIS SARL, devenue TILAMED PHARMA SA en 2023' },
  ],
  dg: {
    eyebrow: 'Le directeur général',
    name: 'Casime LASSISSI',
    role: 'Directeur général',
    bio: [
      'Initiateur du projet TILAMED Pharma, Casime LASSISSI est un professionnel de la finance et de l\'audit formé en France. Depuis 2013, il dirige des entreprises de fourniture, d\'installation et de maintenance de dispositifs médicaux en Afrique de l\'Ouest.',
      'Au fil de ces années, il a conduit des projets d\'équipement d\'hôpitaux et de laboratoires pour des organisations internationales et des ministères de la santé de la région.',
    ],
    convictionLabel: 'Sa conviction',
    conviction: 'L\'Afrique de l\'Ouest doit produire elle-même ses médicaments essentiels.',
    pathTitle: 'Son parcours',
    path: [
      'Formation supérieure en comptabilité, contrôle et audit (France).',
      'Expérience en cabinet d\'audit international et en contrôle interne de grands groupes.',
      'Plus de dix ans de gestion de projets médicaux clés en main en Afrique de l\'Ouest.',
      'Maîtrise des procédures d\'appels d\'offres publics et internationaux.',
    ],
  },
  org: {
    eyebrow: 'Notre organisation',
    title: 'Une organisation pharmaceutique',
    intro: 'Autour du directeur général, l\'équipe de direction réunit un pharmacien responsable, garant de la conformité pharmaceutique, et quatre directions opérationnelles.',
    items: [
      { title: 'Pharmacien responsable', text: 'Garant de la conformité pharmaceutique et de la libération des lots.' },
      { title: 'Direction financière et administrative', text: 'Finances, administration et contrôle interne.' },
      { title: 'Direction commerciale', text: 'Relations avec les centrales d\'achat, distributeurs et organisations de santé.' },
      { title: 'Direction des achats', text: 'Approvisionnement en matières premières, emballages et équipements.' },
      { title: 'Direction de la production', text: 'Fabrication, maintenance et utilités de l\'usine.' },
    ],
    badge: 'Garant de la conformité',
    note: 'Le pharmacien responsable veille au respect des bonnes pratiques de fabrication et libère chaque lot avant sa mise à disposition des patients.',
  },
  cta: {
    eyebrow: 'Carrières',
    title: 'Rejoignez une équipe en construction',
    text: 'L\'usine de Sèmè-Podji recrute ses équipes techniques et administratives. Découvrez nos métiers et proposez votre candidature.',
  },
};
export default direction;
export type DirectionDict = typeof direction;
