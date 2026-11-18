// Gammes de produits : page, groupe du catalogue, visuel.
import type { ImageMetadata } from 'astro';
import type { Group } from './catalog';
import imgSerums from '../assets/images/stock/perfusion-poche-pied.jpg';
import imgMed from '../assets/images/stock/flacons-mains-gants.jpg';
import imgNut from '../assets/images/stock/perfusion-glucose-pied.jpg';
import imgDev from '../assets/images/stock/dispositif-stethoscope-main.jpg';
import imgVet from '../assets/images/stock/veterinaire-chien-calin.jpg';
import imgCatalogue from '../assets/images/stock/flacons-boite.jpg';

export const productFamilies: { slug: string; group: Group; image: ImageMetadata; icon: string }[] = [
  { slug: 'serums', group: 'serum', image: imgSerums, icon: 'drop' },
  { slug: 'medicaments', group: 'medicines', image: imgMed, icon: 'vial' },
  { slug: 'solutions-nutritionnelles', group: 'nutrition', image: imgNut, icon: 'leaf' },
  { slug: 'dispositifs-medicaux', group: 'devices', image: imgDev, icon: 'stetho' },
  { slug: 'sante-animale', group: 'vet', image: imgVet, icon: 'paw' },
];
export const catalogueImage = imgCatalogue;
