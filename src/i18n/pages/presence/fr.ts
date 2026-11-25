// Page « Présence régionale » · français (référence). Maison de la carte et des 15 pays (CEDEAO + AES).
// Sources : ancien site (chapô, note sur les défis de santé), PROFIL TILAMED FR 2026 (sites, bureaux),
// accueil (rôles des sites : t.presenceSites). Textes « Pourquoi toute la sous-région » et « Comment nous servons
// chaque pays » rédigés pour le site à partir de la note de l'ancien site : à valider par le client.
const presence = {
  meta: {
    title: 'Présence régionale · Marchés · TILAMED Pharma',
    description: 'Une usine au BÉNIN, 15 pays d\'Afrique de l\'Ouest couverts et des bureaux au BÉNIN, au BURKINA FASO et en FRANCE.',
  },
  hero: {
    lead: 'Une usine au BÉNIN, 15 pays d\'Afrique de l\'Ouest couverts et une présence internationale.',
  },
  facts: [
    { value: '15', unit: 'pays', label: 'd\'Afrique de l\'Ouest couverts' },
    { value: '400', unit: 'M +', label: 'd\'habitants en Afrique de l\'Ouest' },
    { value: '1', unit: 'usine', label: 'à Sèmè-Podji, à la frontière avec le NIGÉRIA' },
    { value: '3', unit: 'bureaux', label: 'au BÉNIN, au BURKINA FASO et en FRANCE' },
  ],
  map: {
    legend: 'Depuis l\'usine de Sèmè-Podji, nos routes d\'approvisionnement desserviront les capitales de la sous-région.',
  },
  sites: {
    eyebrow: 'Nos implantations',
    title: 'Une usine, trois bureaux',
    more: 'Adresses et téléphones',
  },
  why: {
    eyebrow: 'Pourquoi toute la sous-région',
    title: 'Quinze pays, des défis de santé communs',
    text: 'Nous ne visons pas seulement le BÉNIN : la sous-région partage des besoins proches, et une usine régionale peut y répondre.',
    items: [
      { title: 'Des maladies semblables', text: 'Les mêmes besoins en solutés, en anti-infectieux et en soins essentiels, d\'un pays à l\'autre.' },
      { title: 'Des populations jeunes', text: 'Plus de 400 millions d\'habitants, en forte croissance : des besoins de santé qui augmentent chaque année.' },
      { title: 'Une même dépendance', text: 'Des médicaments presque tous importés, au prix de longs délais et de ruptures fréquentes.' },
    ],
  },
  gallery: {
    title: 'Une région, quinze marchés',
    captions: ['Lagos · NIGÉRIA', 'Abidjan · CÔTE D\'IVOIRE', 'Accra · GHANA', 'Dakar · SÉNÉGAL', 'Cotonou · BÉNIN', 'Port de Tema · GHANA'],
  },
  serve: {
    eyebrow: 'Comment nous servons chaque pays',
    title: 'En direct ou avec nos distributeurs',
    direct: { title: 'En direct', text: 'Pour les centrales d\'achat publiques et les organisations régionales et internationales.' },
    partners: { title: 'Avec nos distributeurs', text: 'Pour les grossistes, les pharmacies et les cliniques privées, avec un distributeur agréé dans chaque pays.' },
  },
  cta: {
    eyebrow: 'Distributeurs',
    title: 'Vous êtes grossiste dans l\'un de ces 15 pays ?',
    text: 'Rejoignez notre réseau de distributeurs agréés.',
  },
};
export default presence;
export type PresenceDict = typeof presence;
