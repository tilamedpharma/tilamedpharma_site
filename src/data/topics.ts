// Pages de détail construites sur le gabarit commun (PageHero + TopicBody + rubrique).
import type { ImageMetadata } from 'astro';
import type { SectionKey } from './site';
import imgQualite from '../assets/images/stock/labo-medecin-microscope.jpg';
import imgBpf from '../assets/images/stock/salle-propre-couloir-equipe.jpg';
import imgAgrements from '../assets/images/stock/medecins-tablette.jpg';
import imgCq from '../assets/images/stock/labo-scientifique-kinshasa.jpg';
import imgTrace from '../assets/images/stock/logistique-entrepot-pharma.jpg';
import imgCertif from '../assets/images/stock/labo-microscope.jpg';
import imgClients from '../assets/images/stock/perfusion-poches-infirmiere.jpg';
import imgCentrales from '../assets/images/stock/logistique-entrepot-rayonnages.jpg';
import imgHopitaux from '../assets/images/stock/infirmiere-tensiometre.jpg';
import imgOrgs from '../assets/images/stock/inclusion-equipe-discussion.jpg';
import imgCentrale from '../assets/images/stock/logistique-entrepot-equipe.jpg';
import imgFournisseurs from '../assets/images/stock/flacons-inox.jpg';
import imgCarrieres from '../assets/images/stock/inclusion-ingenieure-portrait.jpg';
import imgMetiers from '../assets/images/stock/production-ampoules-ligne.jpg';

export type TopicConf = {
  slug: string;
  section: SectionKey;
  video?: string;
  image?: ImageMetadata;
  icons: string[];
  map?: boolean;
};

export const topicPages: TopicConf[] = [
  // Usine
  { slug: 'site-seme-podji', section: 'usine', video: 'chargement-camion', icons: ['factory', 'truck', 'flask', 'box', 'gauge', 'shield'], map: true },
  { slug: 'salles-propres', section: 'usine', video: 'couloir-zone-propre', icons: ['filter', 'layers', 'building', 'eye'] },
  { slug: 'utilites', section: 'usine', video: 'goutte-poche', icons: ['wind', 'flame', 'snow', 'pipe', 'wrench'] },
  { slug: 'transfert-technologie', section: 'usine', video: 'hero-wide', icons: [] },
  // À propos
  // Qualité
  { slug: 'qualite', section: 'qualite', image: imgQualite, icons: ['shield', 'check-circle', 'building', 'truck'] },
  { slug: 'bpf-oms', section: 'qualite', image: imgBpf, icons: ['users', 'building', 'book', 'factory', 'flask', 'eye'] },
  { slug: 'agrements', section: 'qualite', image: imgAgrements, icons: [] },
  { slug: 'controle-qualite', section: 'qualite', image: imgCq, icons: [] },
  { slug: 'tracabilite', section: 'qualite', image: imgTrace, icons: [] },
  { slug: 'certifications', section: 'qualite', image: imgCertif, icons: [] },
  // Marchés
  { slug: 'clients', section: 'marches', image: imgClients, icons: ['building', 'truck', 'globe', 'shield', 'stetho'] },
  { slug: 'centrales-achat', section: 'marches', image: imgCentrales, icons: ['box', 'truck', 'book'] },
  { slug: 'hopitaux-cliniques', section: 'marches', image: imgHopitaux, icons: [] },
  { slug: 'organisations-sante', section: 'marches', image: imgOrgs, icons: [] },
  // Centrale d'achat
  { slug: 'centrale-achat', section: 'achats', image: imgCentrale, icons: [] },
  { slug: 'fournisseurs', section: 'achats', image: imgFournisseurs, icons: ['shield', 'check-circle', 'eye', 'users'] },
  { slug: 'chaine-distribution', section: 'achats', video: 'chargement-camion', icons: ['truck', 'box', 'route'] },
  // Carrières
  { slug: 'carrieres', section: 'carrieres', image: imgCarrieres, icons: [] },
  { slug: 'metiers', section: 'carrieres', image: imgMetiers, icons: ['vial', 'shield', 'flask', 'wrench', 'truck', 'building'] },
];
