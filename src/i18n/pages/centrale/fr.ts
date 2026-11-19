// Page « Notre centrale d'achat » · français (référence).
// Sources : PROFIL TILAMED FR 2026 (SEDIS SARL 2013 = distribution, « Distributeur agréé de dispositifs médicaux »,
// gammes, principaux clients), ancien site (présentation, 6 missions, vision), biographie de la Direction
// (équipement d'hôpitaux et de laboratoires, appels d'offres). Intitulés de gammes, textes « Pour qui » et
// « Notre savoir-faire » rédigés pour le site à partir de ces sources : à valider par le client.
const centrale = {
  meta: {
    title: 'Notre centrale d\'achat · TILAMED Pharma',
    description: 'Distributeur agréé de dispositifs médicaux depuis 2013 : TILAMED Pharma approvisionne, stocke et distribue en gros des produits de santé de qualité, à des prix accessibles.',
  },
  hero: {
    lead: 'Approvisionnement, stockage et distribution en gros de produits de santé de qualité, à des prix accessibles à la population.',
    cta1: 'Ce que nous fournissons',
  },
  facts: [
    { value: '2013', unit: '', label: 'début de notre activité de distribution, sous le nom SEDIS SARL' },
    { value: 'Agréé', unit: '', label: 'distributeur de dispositifs médicaux' },
    { value: '5', unit: 'gammes', label: 'de produits de santé, pour la médecine humaine et animale' },
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest desservis depuis Cotonou et Ouagadougou' },
  ],
  intro: {
    eyebrow: 'Notre présentation',
    title: 'La distribution, notre premier métier',
    text: [
      'TILAMED Pharma est née d\'une activité de distribution : dès 2013, SEDIS SARL fournit, installe et entretient des dispositifs médicaux en Afrique de l\'Ouest. Devenue TILAMED PHARMA SA en 2023, l\'entreprise ajoute la fabrication à ce savoir-faire.',
      'Notre centrale d\'achat a pour mission l\'approvisionnement, le stockage et la distribution en gros de produits de santé, en veillant à ce qu\'ils soient vendus à des prix accessibles à la population.',
    ],
    duo: [
      { title: 'Fabriquer', text: 'Des solutions injectables produites dans notre usine de Sèmè-Podji.' },
      { title: 'Acheter et distribuer', text: 'Des produits de santé sélectionnés auprès de grands fabricants internationaux.' },
    ],
    badge: 'Distributeur agréé de dispositifs médicaux',
    imageAlt: 'Magasinier rangeant des cartons dans un entrepôt',
  },
  ranges: {
    eyebrow: 'Ce que nous fournissons',
    title: 'Cinq gammes de produits de santé',
    intro: 'Nous approvisionnons les formations sanitaires publiques et privées, les établissements pharmaceutiques et les services de santé, pour la médecine humaine et animale.',
    items: [
      { title: 'Médicaments génériques', text: 'Des médicaments essentiels de qualité, dont nos propres solutions injectables.' },
      { title: 'Dispositifs médicaux', text: 'Diagnostic, chirurgie, stérilisation et équipements, avec leur installation et leur maintenance.' },
      { title: 'Laboratoire', text: 'Réactifs, consommables et équipements pour les laboratoires d\'analyses.' },
      { title: 'Santé animale', text: 'Intrants vétérinaires, alimentation, antiparasitaires et soins.' },
      { title: 'Produits chimiques et pharmaceutiques', text: 'Des produits chimiques et pharmaceutiques destinés aux établissements de santé.' },
    ],
    more: 'Voir le catalogue',
  },
  missions: {
    eyebrow: 'Nos missions',
    title: 'Six missions au service de la santé publique',
    items: [
      'Approvisionner les formations sanitaires publiques et privées, les établissements pharmaceutiques et les services de santé en produits de santé essentiels.',
      'Constituer des stocks de réserve pour faire face à la hausse des prix et aux ruptures sur le marché.',
      'Assurer, sur une base contractuelle pour les programmes de santé, le stockage, la gestion et la distribution de médicaments et de matériel médical.',
      'Participer à la promotion des médicaments génériques.',
      'Procéder, selon les besoins de la politique de santé, à la vente en l\'état ou au reconditionnement de produits de santé humaine et animale.',
      'Développer notre expertise dans de nouveaux domaines : produits chimiques, intrants vétérinaires, réactifs et consommables de laboratoire.',
    ],
  },
  expertise: {
    eyebrow: 'Notre savoir-faire',
    title: 'Équiper, approvisionner, accompagner',
    items: [
      'La fourniture, l\'installation et la maintenance de dispositifs médicaux depuis 2013.',
      'Des projets d\'équipement d\'hôpitaux et de laboratoires conduits pour des organisations internationales et des ministères de la santé de la région.',
      'La maîtrise des procédures d\'appels d\'offres publics et internationaux.',
      'Un réseau de grands fabricants internationaux de dispositifs médicaux et d\'équipements de laboratoire.',
    ],
    fairs: 'Sur les salons internationaux',
    captions: ['Arab Health, Dubaï', 'Salon MEDICA 2021', 'Salons internationaux'],
  },
  audience: {
    eyebrow: 'Pour qui ?',
    title: 'Nous fournissons tous les acteurs de la santé',
    items: [
      { text: 'Appels d\'offres nationaux et régionaux, livraisons planifiées.' },
      { text: 'Des produits disponibles, en quantités adaptées à la consommation réelle.' },
      { text: 'Stockage, gestion et distribution pour les programmes de santé.' },
      { text: 'Des partenaires agréés pour couvrir toute la sous-région.' },
    ],
  },
  vision: {
    eyebrow: 'Notre vision',
    text: 'Devenir une centrale d\'achat pharmaceutique de référence, bien gouvernée, résiliente et à portée sous-régionale, qui assure la disponibilité continue de produits de santé de qualité à des prix abordables.',
  },
  cta: {
    eyebrow: 'Fournisseurs',
    title: 'Vous souhaitez devenir fournisseur ?',
    text: 'Consultez nos critères de sélection, puis écrivez-nous en indiquant « Achats » dans l\'objet de votre message.',
  },
};
export default centrale;
export type CentraleDict = typeof centrale;
