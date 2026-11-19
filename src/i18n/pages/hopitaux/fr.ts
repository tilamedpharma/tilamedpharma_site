// Page « Hôpitaux, cliniques, pharmacies » · français (référence).
// Sources : ancien site (services, gamme, flacons incassables), PROFIL TILAMED FR 2026 (exemples de produits par
// gamme, mention « Gamme en préparation, sous réserve d'autorisation »), pages Usine (soufflage-remplissage-scellage).
// Textes « Comment vous approvisionner » et « Le flacon plastique » rédigés pour le site : à valider par le client.
const hopitaux = {
  meta: {
    title: 'Hôpitaux, cliniques et pharmacies · Marchés · TILAMED Pharma',
    description: 'Solutés de perfusion, médicaments injectables, solutions nutritionnelles et dispositifs médicaux fabriqués ou distribués au BÉNIN, en flacons plastiques incassables.',
  },
  hero: {
    lead: 'Des solutions de perfusion essentielles, disponibles près de chez vous.',
    cta1: 'Voir le catalogue',
  },
  intro: {
    eyebrow: 'Au cœur des soins',
    title: 'Disponibles chaque jour, dans tous les services',
    text: [
      'Les solutés de perfusion sont utilisés chaque jour dans tous les services. Leur disponibilité est vitale : une rupture, et ce sont des soins qui s\'arrêtent.',
      'Fabriquées à Sèmè-Podji, nos solutions ne dépendent plus de plusieurs semaines de transport maritime. Votre pharmacie peut commander plus souvent, en quantités plus justes.',
    ],
    services: ['Urgences', 'Chirurgie', 'Médecine', 'Pédiatrie', 'Maternité'],
    badge: 'Fabriqué au BÉNIN',
    imageAlt: 'Infirmière avec du matériel médical dans un couloir d\'hôpital',
  },
  range: {
    eyebrow: 'Notre gamme pour les soins',
    title: 'Les produits du quotidien hospitalier',
    text: 'Quatre gammes pour la médecine humaine, des solutés de base aux dispositifs médicaux.',
    items: [
      ['Chlorure de sodium 0,9 %', 'Glucose 5 %', 'Ringer lactate', 'Mannitol 20 %'],
      ['Paracétamol 1 %', 'Ceftriaxone 1 g', 'Ocytocine 10 UI', 'Quinine injectable'],
      ['Glucose 10 %', 'Vitamine C 0,5 g/5 ml', 'Complexe vitaminique B'],
      ['Stéthoscope', 'Tensiomètre', 'Pince hémostatique'],
    ],
    note: 'Gamme en préparation, sous réserve d\'autorisation. Médicaments réservés aux professionnels de santé.',
  },
  bottle: {
    eyebrow: 'Le flacon plastique',
    title: 'Pensé pour le terrain',
    text: 'Nos solutés sont conditionnés en flacons plastiques, plus sûrs et plus pratiques que le verre, du camion jusqu\'au lit du patient.',
    items: [
      { title: 'Incassable', text: 'Pas de verre brisé, ni pendant le transport, ni dans le service.' },
      { title: 'Léger', text: 'Plus facile à porter, à ranger et à stocker en pharmacie.' },
      { title: 'Formé, rempli et scellé d\'un seul geste', text: 'En une seule opération automatique, sans contact humain avec la solution.' },
      { title: 'Contrôlé', text: 'Chaque flacon est inspecté, chaque lot analysé avant sa libération.' },
    ],
    imageAlt: 'Ampoules en plastique, formées et scellées en une seule opération',
  },
  supply: {
    eyebrow: 'Comment vous approvisionner',
    imageAlt: 'Infirmière utilisant un tensiomètre',
    title: 'Trouver nos produits près de chez vous',
    items: [
      { title: 'Hôpitaux publics', text: 'Par la centrale d\'achat de votre pays, que nous approvisionnons directement.' },
      { title: 'Cliniques et pharmacies privées', text: 'Auprès de nos distributeurs et grossistes agréés. Écrivez-nous : nous vous indiquons le plus proche.' },
      { title: 'Un besoin particulier ?', text: 'Grands volumes, projets, appels d\'offres : notre direction commerciale vous répond.' },
    ],
  },
  safety: {
    eyebrow: 'Sécurité des patients',
    title: 'Votre sécurité et celle de vos patients',
    items: [
      { text: 'Signalez un effet indésirable ou un défaut de qualité.' },
      { text: 'Fiches techniques et certificats d\'analyse de nos produits.' },
      { text: 'Chaque flacon porte son numéro de lot, de l\'usine au patient.' },
    ],
  },
};
export default hopitaux;
export type HopitauxDict = typeof hopitaux;
