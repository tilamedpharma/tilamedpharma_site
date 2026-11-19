// Page « Agréments et autorisations » · français (référence) : textes propres à la mise en page dédiée.
// Les 6 agréments (intitulé, n°, date, autorité) viennent de l'accueil (t.compliance.items) ; le chapô, le rôle de
// l'ABRP et « ce que nous transmettons » du dictionnaire Qualité (useQualite(lang).pages.agrements).
const agrements = {
  hero: { cta1: 'Nos agréments' },
  facts: [
    { value: '6', unit: '', label: 'agréments et autorisations obtenus auprès des autorités béninoises' },
    { value: '2023', unit: '', label: 'première autorisation de l\'ABRP, le 30 juin, après l\'avis favorable du 16 mai' },
    { value: '8', unit: 'ans', label: 'd\'exonération fiscale et sociale (Waiver, régime B)' },
  ],
  timeline: {
    eyebrow: 'Chronologie',
    by: 'Délivré par',
  },
  abrp: {
    eyebrow: 'Le régulateur',
  },
  standards: {
    eyebrow: 'Normes',
    text: 'Au-delà des autorisations, l\'usine suit des référentiels internationaux. Où en sommes-nous pour chacun ?',
  },
  cta: {
    eyebrow: 'Documents',
    title: 'Besoin d\'une copie de nos autorisations ?',
    text: 'Centrales d\'achat, autorités ou partenaires : écrivez-nous pour recevoir les documents dont vous avez besoin, ou demandez la documentation de nos produits.',
  },
};
export default agrements;
export type AgrementsDict = typeof agrements;
