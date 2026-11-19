// Gammes de produits : page, groupe du catalogue, visuel.
import type { ImageMetadata } from 'astro';
import type { Group } from './catalog';
import imgSerums from '../assets/images/stock/perfusion-poche-pied.jpg';
import imgMed from '../assets/images/stock/medicaments-medecin-ampoule.jpg';
import imgNut from '../assets/images/stock/perfusion-glucose-pied.jpg';
import imgDev from '../assets/images/stock/dispositif-medecin-stethoscope.jpg';
import imgVet from '../assets/images/stock/veterinaire-afrique-chien.jpg';
// Visuels des cartes du catalogue (page produits) : distincts des en-têtes des pages familles (une image = un seul endroit).
import cardSerums from '../assets/images/stock/perfusion-main-reglage.jpg';
import cardMed from '../assets/images/stock/medicaments-seringues-table.jpg';
import cardNut from '../assets/images/stock/ampoules-seringue-vert.jpg';
import cardDev from '../assets/images/stock/sante-tension-kaduna.jpg';
import cardVet from '../assets/images/stock/veterinaire-injection-animal.jpg';
import imgCatalogue from '../assets/images/stock/flacons-boite.jpg';

export const productFamilies: { slug: string; group: Group; image: ImageMetadata; card: ImageMetadata; icon: string }[] = [
  { slug: 'serums', group: 'serum', image: imgSerums, card: cardSerums, icon: 'drop' },
  { slug: 'medicaments', group: 'medicines', image: imgMed, card: cardMed, icon: 'vial' },
  { slug: 'solutions-nutritionnelles', group: 'nutrition', image: imgNut, card: cardNut, icon: 'leaf' },
  { slug: 'dispositifs-medicaux', group: 'devices', image: imgDev, card: cardDev, icon: 'stetho' },
  { slug: 'sante-animale', group: 'vet', image: imgVet, card: cardVet, icon: 'paw' },
];
export const catalogueImage = imgCatalogue;
