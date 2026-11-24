// Données de référence de l'entreprise (source : PROFIL TILAMED FR.pdf + charte graphique 2026).
export const company = {
  name: 'TILAMED Pharma',
  legal: 'TILAMED PHARMA SA',
  email: 'contact@tilamedpharma.com',
  web: 'www.tilamedpharma.com',
  rccm: 'RB/COT/23 B34825',
  ifu: '3202342942694',
  capital: '1 000 000 000 FCFA',
  plant: { lat: 6.3667, lng: 2.6167, maps: 'https://www.google.com/maps/dir/?api=1&destination=6.3667,2.6167' },
};

export const offices = [
  { id: 'bj', country: 'BJ', city: 'Cotonou', address: ['Haie vive · Les Cocotiers', 'Cotonou'], phone: '+229 01 97 37 44 26', tel: '+2290197374426', hq: true },
  { id: 'bf', country: 'BF', city: 'Ouagadougou', address: ['Dassasgho, Ouagadougou', '01 BP 1347 Ouagadougou 01'], phone: '+226 66 81 42 14', tel: '+22666814214' },
  { id: 'fr', country: 'FR', city: 'Orgeval', address: ['136 chemin de la Cave', '78630 Orgeval'], phone: '+33 6 40 46 10 98', tel: '+33640461098' },
] as const;

export const socials = [
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/share/1BtuiF8qqR/' },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/tilamedpharma' },
  { id: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/2290197374426' },
  { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@tilamed.pharma' },
  { id: 'x', label: 'X', url: 'https://x.com/tilamedpharma' },
] as const;

/** Pays de couverture : les 15 pays de la CEDEAO — codes ISO alpha-2 et numériques (pour la carte). */
export const coverage = [
  { iso: 'BJ', num: '204' }, { iso: 'BF', num: '854' }, { iso: 'CV', num: '132' }, { iso: 'CI', num: '384' },
  { iso: 'GN', num: '324' }, { iso: 'LR', num: '430' }, { iso: 'ML', num: '466' }, { iso: 'NE', num: '562' },
  { iso: 'SN', num: '686' }, { iso: 'TG', num: '768' }, { iso: 'GM', num: '270' }, { iso: 'GH', num: '288' },
  { iso: 'GW', num: '624' }, { iso: 'NG', num: '566' }, { iso: 'SL', num: '694' },
] as const;

/** Capitales desservies depuis l'usine (carte du profil). */
export const routes = [
  { iso: 'SN', city: 'Dakar', lng: -17.4467, lat: 14.6928 },
  { iso: 'GN', city: 'Conakry', lng: -13.5784, lat: 9.6412 },
  { iso: 'ML', city: 'Bamako', lng: -8.0029, lat: 12.6392 },
  { iso: 'BF', city: 'Ouagadougou', lng: -1.5197, lat: 12.3714 },
  { iso: 'NE', city: 'Niamey', lng: 2.1098, lat: 13.5116 },
  { iso: 'CI', city: 'Abidjan', lng: -4.0083, lat: 5.36 },
  { iso: 'TG', city: 'Lomé', lng: 1.2123, lat: 6.1375 },
] as const;

/** Arborescence du site (slugs communs à toutes les langues). Les libellés sont dans les dictionnaires. */
export const navTree = {
  entreprise: ['a-propos', 'vision-valeurs', 'direction', 'parcours', 'pourquoi-le-benin', 'rse', 'egalite', 'environnement'],
  achats: ['centrale-achat', 'fournisseurs', 'chaine-distribution'],
  usine: ['usine', 'site-seme-podji', 'traitement-eau', 'preparation-solutions', 'soufflage-remplissage-scellage', 'sterilisation', 'inspection', 'laboratoire', 'conditionnement-logistique', 'salles-propres', 'utilites', 'transfert-technologie'],
  produits: ['produits', 'serums', 'medicaments', 'solutions-nutritionnelles', 'dispositifs-medicaux', 'sante-animale', 'documentation'],
  qualite: ['qualite', 'agrements', 'controle-qualite', 'tracabilite', 'pharmacovigilance', 'certifications'],
  marches: ['clients', 'hopitaux-cliniques', 'organisations-sante', 'distributeurs', 'presence'],
  carrieres: ['carrieres', 'metiers', 'candidature'],
  medias: ['actualites', 'mediatheque', 'presse'],
  contact: ['contact', 'bureaux', 'faq'],
} as const;
export type SectionKey = keyof typeof navTree;

/**
 * Logos « Ils nous font déjà confiance » (accueil), dans le MÊME ORDRE que `partners.trust` des dictionnaires :
 * OMS, CEDEAO, GIZ, AFD, Banque mondiale, BAD, BID, Enabel, CRS, PSI, Institut Pasteur, Centre MURAZ, Ministère de la Santé (Bénin).
 * Fichiers dans /public/media/trust (18/11/2026) : Wikimedia (GIZ, AFD, Banque mondiale, BAD, CRS), sites officiels pour les autres.
 * Sans logo (undefined) → le nom s'affiche dans la tuile.
 */
export const trustLogos: (string | undefined)[] = [
  '/media/trust/oms.svg', '/media/trust/cedeao.png', '/media/trust/giz.svg', '/media/trust/afd.svg', '/media/trust/banque-mondiale.svg', '/media/trust/bad.png',
  '/media/trust/bid.svg', '/media/trust/enabel.svg', '/media/trust/crs.png', '/media/trust/psi.png', '/media/trust/pasteur.svg', '/media/trust/muraz.jpg',
  '/media/trust/ministere-sante.png',
];

/** Principaux fournisseurs (logos dans /public/media/partners). */
export const suppliers: { name: string; logo?: string }[] = [
  { name: 'Spengler Holtex Group', logo: '/media/partners/spengler-holtex.png' },
  { name: 'Fresenius Kabi', logo: '/media/partners/fresenius-kabi.png' },
  { name: 'Veolia', logo: '/media/partners/veolia.png' },
  { name: 'Siemens Healthineers', logo: '/media/partners/siemens-healthineers.png' },
  { name: 'AEONMED' },
  { name: 'B. Braun' },
];

/** Les 7 étapes du procédé (ordre de fabrication) et leur vidéo dans /public/media/video. */
export const processSteps = [
  { slug: 'traitement-eau', video: 'traitement-eau' },
  { slug: 'preparation-solutions', video: 'cuve-tourbillon' },
  { slug: 'soufflage-remplissage-scellage', video: 'tetes-remplissage' },
  { slug: 'sterilisation', video: 'autoclave' },
  { slug: 'inspection', video: 'inspection-lumiere' },
  { slug: 'laboratoire', video: 'labo-technicien-microscope' },
  { slug: 'conditionnement-logistique', video: 'palette-filmee' },
] as const;

export const sectionKeys = Object.keys(navTree) as SectionKey[];
export const legalPages = ['mentions-legales', 'confidentialite', 'cookies', 'plan-du-site'] as const;
