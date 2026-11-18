// Page « Environnement » · français (référence).
// Sources : ancien site (ISO 14001 visée, zone économique spéciale, trajectoire renouvelables), faits confirmés (EDGE en cours),
// accueil (6 leviers, dont énergie solaire et bâtiment bioclimatique : propositions à confirmer par le client).
// Seuils EDGE (20 % d'économies d'énergie, d'eau et d'énergie grise des matériaux) : exigence publique du standard IFC, pas un résultat TILAMED.
const environnement = {
  meta: {
    title: 'Environnement · TILAMED Pharma',
    description: 'Une usine pensée pour limiter son impact : certification EDGE en cours, ISO 14001 visée, eau, énergie, matière, déchets et transport.',
  },
  hero: {
    lead: 'Une usine pensée pour limiter son impact : eau, énergie, matière, déchets.',
    cta: 'Nos leviers',
  },
  edge: {
    eyebrow: 'Certification EDGE en cours',
    figLabel: 'le standard green building de l\'IFC, Groupe de la Banque mondiale',
    text: 'EDGE est le standard de construction durable de la Société financière internationale (IFC). Il certifie les bâtiments qui consomment nettement moins de ressources qu\'un bâtiment de référence. Notre usine de Sèmè-Podji est en cours de certification.',
    criteria: [
      { value: '20', label: 'd\'énergie en moins' },
      { value: '20', label: 'd\'eau en moins' },
      { value: '20', label: 'd\'énergie grise des matériaux en moins' },
    ],
    criteriaNote: 'Économies minimales exigées par EDGE, par rapport à un bâtiment de référence.',
  },
  levers: {
    eyebrow: 'Nos leviers',
    title: 'Six leviers pour réduire notre empreinte',
    intro: 'Nous visons la certification ISO 14001 pour le management environnemental. Notre site s\'inscrit dans une zone économique spéciale conçue pour répondre à des normes environnementales et sociales élevées.',
  },
  certs: {
    eyebrow: 'Certifications',
    title: 'Où en sommes-nous ?',
    status: { done: 'Obtenu', progress: 'En cours', target: 'Visé' },
    edge: { title: 'Certification EDGE', text: 'Standard green building de l\'IFC (Groupe de la Banque mondiale).' },
    iso: { title: 'Certification ISO 14001', text: 'Norme internationale de management environnemental.' },
  },
  band: {
    eyebrow: 'Énergies renouvelables',
    text: 'Les pays de la région se sont fixé d\'augmenter fortement la part des énergies renouvelables dans leur mix énergétique. Nous suivrons cette trajectoire.',
  },
};
export default environnement;
export type EnvDict = typeof environnement;
