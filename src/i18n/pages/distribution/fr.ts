// Page « Notre distribution » · français (référence).
// Sources : page précédente (5 étapes, note sur l'accès aux médicaments), accueil (« moins d'un mois » de l'usine
// au patient), ancien site (missions de la centrale : stocks de réserve, programmes de santé), profil 2026 (15 pays,
// bureau régional de Ouagadougou). Schéma « deux sources, un seul circuit », contrôle à réception et textes des
// garanties rédigés pour le site : à valider par le client.
const distribution = {
  meta: {
    title: 'Notre distribution · Centrale d\'achat · TILAMED Pharma',
    description: 'De notre usine et de nos fournisseurs jusqu\'au patient : un circuit court, maîtrisé et traçable, au BÉNIN et dans toute l\'Afrique de l\'Ouest.',
  },
  hero: {
    lead: 'De notre usine et de nos fournisseurs jusqu\'au patient : un circuit court, maîtrisé et traçable.',
    cta1: 'Notre circuit',
  },
  facts: [
    { value: '< 1', unit: 'mois', label: 'de notre usine de Sèmè-Podji jusqu\'au patient' },
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest dans notre zone de distribution' },
    { value: '2', unit: 'sources', label: 'nos fabrications et nos achats, réunis dans un même circuit' },
  ],
  flow: {
    eyebrow: 'Notre circuit',
    title: 'Deux sources, un seul circuit',
    intro: 'Les solutions injectables fabriquées à Sèmè-Podji et les produits achetés auprès de grands fabricants suivent le même chemin : contrôle, stockage, puis livraison à nos clients.',
    label: 'Schéma du circuit de distribution',
    sources: [
      { title: 'Fabriqué au BÉNIN', text: 'Solutions injectables produites, contrôlées et libérées lot par lot à Sèmè-Podji.' },
      { title: 'Acheté auprès de grands fabricants', text: 'Médicaments, dispositifs médicaux et produits de laboratoire, vérifiés à réception.' },
    ],
    hub: { title: 'Notre entrepôt', text: 'Stockage maîtrisé, suivi par lot et par date de péremption.' },
    dests: ['Centrales d\'achat publiques', 'Distributeurs et grossistes', 'Hôpitaux, cliniques et pharmacies', 'Programmes de santé'],
    end: { title: 'Les patients', text: 'Des produits de qualité, disponibles près de chez eux.' },
  },
  steps: {
    eyebrow: 'Pas à pas',
    title: 'Les étapes, une à une',
    imageAlt: 'Clients choisissant un médicament dans une pharmacie',
    items: [
      { title: 'L\'usine et nos fournisseurs', text: 'Chaque lot fabriqué est contrôlé par notre laboratoire et libéré par le pharmacien responsable. Chaque produit acheté est vérifié à réception : documents, étiquetage, état des colis.' },
      { title: 'Notre entrepôt', text: 'Les produits sont stockés dans des conditions maîtrisées, avec un suivi par lot et par date de péremption : les premiers produits à expirer sont les premiers à sortir.' },
      { title: 'Centrales d\'achat et distributeurs', text: 'Nous livrons les centrales d\'achat publiques, les organisations de santé et nos distributeurs agréés au BÉNIN et dans la sous-région.' },
      { title: 'Hôpitaux, cliniques et pharmacies', text: 'Les établissements de santé reçoivent des produits disponibles plus vite, en quantité adaptée à leur consommation réelle.' },
      { title: 'Les patients', text: 'Des produits de santé de qualité, disponibles près de chez eux, à un prix accessible.' },
    ],
  },
  guarantees: {
    eyebrow: 'Nos engagements',
    title: 'Ce que nous garantissons à nos clients',
    items: [
      { title: 'Un stockage maîtrisé', text: 'Des conditions de conservation respectées et une rotation des stocks selon les dates de péremption.' },
      { title: 'La traçabilité', text: 'Chaque expédition enregistrée par client et par lot, et une procédure de rappel en lien avec les autorités.' },
      { title: 'La disponibilité', text: 'Des stocks de réserve pour faire face aux ruptures et à la hausse des prix sur le marché.' },
      { title: 'La proximité', text: 'Une usine au BÉNIN et un bureau régional à Ouagadougou, au plus près de nos clients de la sous-région.' },
    ],
  },
  why: {
    eyebrow: 'Pourquoi c\'est important',
    text: 'Près de la moitié de la population africaine n\'a pas un accès régulier aux médicaments essentiels. Raccourcir le circuit, c\'est rapprocher les médicaments des patients.',
  },
  cta: {
    eyebrow: 'Distribution',
    title: 'Distribuez nos produits',
    text: 'Grossiste, distributeur ou centrale d\'achat : rejoignez notre réseau pour rendre nos produits disponibles dans votre pays.',
  },
};
export default distribution;
export type DistributionDict = typeof distribution;
