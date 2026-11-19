// Pages de détail construites sur le gabarit commun (PageHero + TopicBody + rubrique).
import type { ImageMetadata } from 'astro';
import type { SectionKey } from './site';
import imgSite from '../assets/images/stock/route-abuja-camion.jpg';
import imgTransfert from '../assets/images/stock/labo-etudiants-equipement.jpg';
import imgQualite from '../assets/images/stock/labo-medecin-microscope.jpg';
import imgCq from '../assets/images/stock/labo-scientifique-kinshasa.jpg';
import imgTrace from '../assets/images/stock/logistique-entrepot-pharma.jpg';
import imgCertif from '../assets/images/stock/labo-microscope.jpg';
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
  { slug: 'site-seme-podji', section: 'usine', image: imgSite, icons: ['factory', 'truck', 'flask', 'box', 'gauge', 'shield'], map: true },
  { slug: 'salles-propres', section: 'usine', video: 'couloir-zone-propre', icons: ['filter', 'layers', 'building', 'eye'] },
  { slug: 'utilites', section: 'usine', video: 'goutte-poche', icons: ['wind', 'flame', 'snow', 'pipe', 'wrench'] },
  { slug: 'transfert-technologie', section: 'usine', image: imgTransfert, icons: [] },
  // À propos
  // Qualité
  { slug: 'qualite', section: 'qualite', image: imgQualite, icons: ['shield', 'check-circle', 'building', 'truck'] },
  { slug: 'controle-qualite', section: 'qualite', image: imgCq, icons: [] },
  { slug: 'tracabilite', section: 'qualite', image: imgTrace, icons: [] },
  { slug: 'certifications', section: 'qualite', image: imgCertif, icons: [] },
  // Marchés
  // Centrale d'achat
  // Carrières
  { slug: 'carrieres', section: 'carrieres', image: imgCarrieres, icons: [] },
  { slug: 'metiers', section: 'carrieres', image: imgMetiers, icons: ['vial', 'shield', 'flask', 'wrench', 'truck', 'building'] },
];
