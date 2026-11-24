// Page « Devenir distributeur » · français (référence) : sections de présentation.
// Le formulaire, les 3 critères et le chapô restent dans le dictionnaire Marchés (`useMarches(lang).distrib`).
// Sources : ancien site (critères), profil 2026 (15 pays, gammes), accueil (« moins d'un mois », normes OMS),
// ancienne page Marchés › Centrales d'achat (stock immobilisé, ruptures, appels d'offres).
// Avantages, « Ce que nous vous apportons » et les 4 étapes rédigés pour le site : à valider par le client.
const distributeurs = {
  hero: {
    cta1: 'Candidater',
  },
  facts: [
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest dans notre zone de distribution' },
    { value: '2', unit: 'sources', label: 'notre usine au BÉNIN et de grands fabricants internationaux' },
    { value: '< 1', unit: 'mois', label: 'de notre usine de Sèmè-Podji jusqu\'au patient' },
    { value: '5', unit: 'familles', label: 'de produits, chez un seul fournisseur' },
  ],
  why: {
    eyebrow: 'Pourquoi nous rejoindre',
    title: 'Pourquoi distribuer TILAMED Pharma ?',
    items: [
      { title: 'Un fournisseur local', text: 'Une usine au BÉNIN, à quelques heures de route plutôt qu\'à plusieurs semaines de mer : des commandes plus fréquentes, moins de stock immobilisé, moins de ruptures.' },
      { title: 'Une qualité contrôlée', text: 'Chaque lot est contrôlé par notre laboratoire puis libéré par le pharmacien responsable, sous le contrôle de l\'ABRP.' },
      { title: 'Une gamme complète', text: 'Sérums, médicaments injectables, solutions nutritionnelles, dispositifs médicaux et produits vétérinaires.' },
      { title: 'Un accompagnement', text: 'La documentation technique et réglementaire de nos produits, et un appui pour vos réponses aux appels d\'offres.' },
    ],
  },
  partner: {
    eyebrow: 'Un partenariat',
    title: 'Des engagements des deux côtés',
    giveTitle: 'Ce que nous vous apportons',
    give: [
      'Des produits fabriqués au BÉNIN et des produits de grands fabricants internationaux, livrés depuis notre entrepôt.',
      'Une documentation complète pour chaque produit : fiches techniques et certificats d\'analyse.',
      'Des livraisons planifiées selon vos besoins réels.',
      'Un dialogue régulier sur vos ventes, vos stocks et les besoins de votre marché.',
    ],
  },
  steps: {
    eyebrow: 'Comment ça marche',
    title: 'Devenir distributeur en quatre étapes',
    items: [
      { title: 'Candidature', text: 'Vous remplissez le formulaire ci-dessous : votre société, vos autorisations, vos circuits.' },
      { title: 'Échange et évaluation', text: 'Nous étudions votre dossier, puis nous échangeons sur votre marché, vos clients et vos capacités de stockage.' },
      { title: 'Accord de distribution', text: 'Un contrat fixe la zone, les gammes, les engagements de chacun et les conditions commerciales.' },
      { title: 'Lancement et suivi', text: 'Premières commandes, documentation, puis un suivi régulier des ventes et des stocks.' },
    ],
  },
  coverage: {
    eyebrow: 'Zone couverte',
    title: '15 pays d\'Afrique de l\'Ouest',
    text: 'Nous recherchons des partenaires dans chacun des 15 pays de la CEDEAO, pour les circuits publics comme privés.',
  },
  contact: 'Vous préférez nous écrire ?',
  formLead: 'Quelques informations sur votre société suffisent pour commencer : nous revenons vers vous pour en parler.',
};
export default distributeurs;
export type DistributeursDict = typeof distributeurs;
