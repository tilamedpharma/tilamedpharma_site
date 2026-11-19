// Page « Nos fournisseurs » · français (référence).
// Sources : textes de la page précédente (critères, principes, chaîne durable), profil 2026 (« principaux fournisseurs :
// grands fabricants de dispositifs médicaux et de laboratoire », logos), page Transfert de technologie (5 ans).
// Parcours « Devenir fournisseur » (4 étapes) rédigé pour le site : à valider par le client.
const fournisseurs = {
  meta: {
    title: 'Nos fournisseurs · Centrale d\'achat · TILAMED Pharma',
    description: 'Grands fabricants partenaires, critères de sélection, parcours de référencement et principes d\'achat : ce que nous attendons de nos fournisseurs, et ce qu\'ils peuvent attendre de nous.',
  },
  hero: {
    lead: 'Ce que nous attendons de nos fournisseurs, et ce qu\'ils peuvent attendre de nous.',
    cta1: 'Nos critères de sélection',
    cta2: 'Devenir fournisseur',
  },
  partners: {
    eyebrow: 'Nos partenaires industriels',
    title: 'De grands fabricants à nos côtés',
    text: [
      'Pour notre usine comme pour notre centrale d\'achat, nous travaillons avec de grands fabricants internationaux d\'équipements industriels, de dispositifs médicaux et de produits de laboratoire.',
      'Les fabricants des équipements de l\'usine forment aussi nos équipes pendant cinq ans : c\'est notre programme de transfert de compétences.',
    ],
  },
  criteria: {
    eyebrow: 'Sélection',
    title: 'Cinq critères de sélection',
    text: 'Chaque fournisseur est évalué avant la première commande, puis réévalué régulièrement. Pour les matières qui entrent dans le produit, l\'évaluation comprend un questionnaire, l\'étude du dossier technique et, si nécessaire, un audit sur site.',
    items: [
      { title: 'Qualité', text: 'Un système de management de la qualité reconnu, des certificats d\'analyse pour chaque lot et, pour les matières pharmaceutiques, le respect des bonnes pratiques de fabrication.' },
      { title: 'Conformité réglementaire', text: 'Des produits et des documents conformes aux pharmacopées et aux exigences de l\'Agence béninoise de régulation pharmaceutique (ABRP).' },
      { title: 'Fiabilité', text: 'Des délais tenus, une capacité suffisante, une traçabilité complète et une information rapide en cas de changement ou d\'incident.' },
      { title: 'Coût total', text: 'Un prix juste, apprécié avec le transport, les délais, le stockage et le risque de rupture, et pas seulement le prix d\'achat.' },
      { title: 'Responsabilité', text: 'Le respect des droits humains, de la santé et de la sécurité au travail, de l\'environnement et des règles anticorruption.' },
    ],
  },
  steps: {
    eyebrow: 'Devenir fournisseur',
    title: 'Quatre étapes pour nous rejoindre',
    items: [
      { title: 'Prise de contact', text: 'Vous nous écrivez en indiquant « Achats » dans l\'objet, avec la présentation de votre entreprise, votre catalogue et vos certificats.' },
      { title: 'Évaluation', text: 'Questionnaire, étude du dossier technique et, si nécessaire, audit sur site, au regard de nos cinq critères.' },
      { title: 'Référencement', text: 'Un cahier des charges et, pour les matières pharmaceutiques, un accord qualité fixent les engagements de chacun.' },
      { title: 'Suivi', text: 'Une réévaluation régulière et un dialogue sur la performance : qualité, délais, réactivité.' },
    ],
  },
  principles: {
    eyebrow: 'Nos principes',
    title: 'Une relation fondée sur la confiance',
    items: [
      { title: 'Équité et transparence', text: 'Les mêmes règles pour tous, des consultations claires et des décisions motivées.' },
      { title: 'Intégrité', text: 'Aucun cadeau ni avantage susceptible d\'influencer une décision d\'achat. Tout conflit d\'intérêts est déclaré.' },
      { title: 'Confidentialité', text: 'Les informations techniques et commerciales échangées sont protégées des deux côtés.' },
      { title: 'Partenariat', text: 'Des relations de long terme, des objectifs partagés et un dialogue régulier sur la performance.' },
    ],
  },
  sustainable: {
    eyebrow: 'Achats responsables',
    title: 'Une chaîne d\'approvisionnement durable',
    text: 'Nous attendons de nos fournisseurs qu\'ils partagent nos engagements et qu\'ils les demandent à leur tour à leurs propres sous-traitants.',
    items: [
      'Des conditions de travail dignes : pas de travail des enfants ni de travail forcé, des salaires et des horaires conformes à la loi.',
      'La réduction des déchets, des emballages et des émissions, et une gestion responsable de l\'eau et de l\'énergie.',
      'Le choix de transports et de conditionnements qui limitent l\'impact environnemental.',
      'Le développement de fournisseurs locaux et régionaux, pour rapprocher la production des patients.',
      'La continuité d\'approvisionnement : des plans de secours en cas de crise ou de difficulté de transport.',
    ],
  },
  cta: {
    eyebrow: 'Achats',
    title: 'Proposez vos produits ou services',
    text: 'Écrivez à contact@tilamedpharma.com en indiquant « Achats » dans l\'objet. Notre équipe étudiera votre proposition.',
    mail: 'Écrire au service Achats',
    subject: 'Achats',
  },
};
export default fournisseurs;
export type FournisseursDict = typeof fournisseurs;
