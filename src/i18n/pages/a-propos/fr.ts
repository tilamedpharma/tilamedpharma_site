// Page « Qui sommes-nous ? » · français (référence). Source : page a-propos de l'ancien site + données de l'accueil.
const aPropos = {
  meta: {
    title: 'Qui sommes-nous ? · TILAMED Pharma',
    description: 'TILAMED PHARMA SA construit au BÉNIN une unité de production de solutions pharmaceutiques liquides aux normes de l\'OMS. Histoire, activités, objectifs et partenaires.',
  },
  hero: {
    lead: 'TILAMED Pharma est une société pharmaceutique qui construit au BÉNIN une unité de production de solutions pharmaceutiques liquides, aux normes de l\'Organisation mondiale de la santé.',
    imageAlt: 'Équipe de professionnelles en réunion de travail',
  },
  facts: [
    { value: '2013', unit: '', label: 'création de SEDIS SARL, devenue TILAMED PHARMA SA en 2023' },
    { value: '1', unit: 'Md FCFA', label: 'de capital social, société anonyme' },
    { value: 'Cotonou', unit: '', label: 'siège de la filiale Afrique de l\'Ouest' },
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest couverts' },
    { value: '4', unit: 'métiers', label: 'production, dispositifs médicaux, laboratoire, santé animale' },
  ],
  story: {
    eyebrow: 'Notre histoire',
    title: 'Une entreprise pharmaceutique africaine, ouverte sur le monde',
    text: [
      'TILAMED Pharma réunit des professionnels du secteur médical présents en Afrique de l\'Ouest et en Europe.',
      'Née en 2013 sous le nom de SEDIS SARL pour distribuer des dispositifs médicaux en Afrique de l\'Ouest, l\'entreprise devient TILAMED PHARMA SA en 2023 et se consacre désormais à la production industrielle.',
      'Notre première usine, à Sèmè-Podji, produira des solutions injectables de grand volume : solutés de perfusion pour la réhydratation, l\'apport en glucose et l\'administration de médicaments par voie intraveineuse.',
    ],
    countriesTitle: 'Neuf pays dans notre réseau',
    cta: 'Notre parcours',
    imageAlt: 'Scientifique au travail dans un laboratoire pharmaceutique',
  },
  pillarsCta: 'Vision, mission et valeurs',
  objectives: {
    eyebrow: 'Nos objectifs',
    title: 'Produire ici ce dont les patients ont besoin',
    items: [
      'Créer un outil national de production pharmaceutique conforme aux normes de l\'OMS.',
      'Fournir localement des solutions pharmaceutiques liquides, en qualité et en quantité.',
      'Proposer ces solutions à des prix accessibles à tous.',
      'Réduire la dépendance aux importations et les risques qui l\'accompagnent.',
      'Encourager la consommation de produits fabriqués localement.',
    ],
    cta: 'Pourquoi produire au BÉNIN ?',
  },
  partnership: {
    eyebrow: 'Partenariats',
    title: 'Ouverts aux partenariats internationaux',
    text: 'TILAMED Pharma souhaite travailler avec les organisations internationales de santé, les agences de développement et les institutions financières engagées pour l\'accès aux médicaments en Afrique. Notre ambition : devenir un partenaire industriel de confiance pour leurs programmes au BÉNIN et dans la sous-région.',
    cta1: 'Organisations de santé',
    cta2: 'Nous contacter',
  },
};
export default aPropos;
export type AProposDict = typeof aPropos;
