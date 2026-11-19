// "Our purchasing centre" page · English.
import type { CentraleDict } from './fr';

const centrale: CentraleDict = {
  meta: {
    title: 'Our purchasing centre · TILAMED Pharma',
    description: 'A licensed medical device distributor since 2013: TILAMED Pharma sources, stores and distributes quality health products wholesale, at affordable prices.',
  },
  hero: {
    lead: 'Sourcing, storage and wholesale distribution of quality health products, at prices the population can afford.',
    cta1: 'What we supply',
  },
  facts: [
    { value: '2013', unit: '', label: 'start of our distribution business, as SEDIS SARL' },
    { value: 'Licensed', unit: '', label: 'medical device distributor' },
    { value: '5', unit: 'ranges', label: 'of health products, for human and animal medicine' },
    { value: '15', unit: 'countries', label: 'in West Africa served from Cotonou and Ouagadougou' },
  ],
  intro: {
    eyebrow: 'Who we are',
    title: 'Distribution, our first business',
    text: [
      'TILAMED Pharma grew out of a distribution business: from 2013, SEDIS SARL supplied, installed and maintained medical devices across West Africa. Renamed TILAMED PHARMA SA in 2023, the company has added manufacturing to this know-how.',
      'Our purchasing centre sources, stores and distributes health products wholesale, making sure they are sold at prices the population can afford.',
    ],
    duo: [
      { title: 'Manufacturing', text: 'Injectable solutions produced in our Sèmè-Podji plant.' },
      { title: 'Purchasing and distribution', text: 'Health products selected from major international manufacturers.' },
    ],
    badge: 'Licensed medical device distributor',
    imageAlt: 'Warehouse worker stacking boxes',
  },
  ranges: {
    eyebrow: 'What we supply',
    title: 'Five ranges of health products',
    intro: 'We supply public and private health facilities, pharmaceutical establishments and health services, for human and animal medicine.',
    items: [
      { title: 'Generic medicines', text: 'Quality essential medicines, including our own injectable solutions.' },
      { title: 'Medical devices', text: 'Diagnostics, surgery, sterilisation and equipment, with installation and maintenance.' },
      { title: 'Laboratory', text: 'Reagents, consumables and equipment for testing laboratories.' },
      { title: 'Animal health', text: 'Veterinary inputs, pet food, parasite control and care products.' },
      { title: 'Chemical and pharmaceutical products', text: 'Chemical and pharmaceutical products for health facilities.' },
    ],
    more: 'View the catalogue',
  },
  missions: {
    eyebrow: 'Our missions',
    title: 'Six missions serving public health',
    items: [
      'Supply public and private health facilities, pharmaceutical establishments and health services with essential health products.',
      'Build up reserve stocks to cope with price rises and market shortages.',
      'Provide storage, management and distribution of medicines and medical equipment for health programmes, under contract.',
      'Help promote generic medicines.',
      'Sell as is or repackage human and animal health products, as health policy requires.',
      'Build expertise in new fields: chemicals, veterinary inputs, laboratory reagents and consumables.',
    ],
  },
  expertise: {
    eyebrow: 'Our know-how',
    title: 'Equip, supply, support',
    items: [
      'Supply, installation and maintenance of medical devices since 2013.',
      'Hospital and laboratory equipment projects delivered for international organisations and ministries of health in the region.',
      'Command of public and international tender procedures.',
      'A network of major international manufacturers of medical devices and laboratory equipment.',
    ],
    fairs: 'At international trade fairs',
    captions: ['Arab Health, Dubai', 'MEDICA 2021 trade fair', 'International trade fairs'],
  },
  audience: {
    eyebrow: 'Who do we serve?',
    title: 'We supply every player in healthcare',
    items: [
      { text: 'National and regional tenders, scheduled deliveries.' },
      { text: 'Products in stock, in quantities matched to actual use.' },
      { text: 'Storage, management and distribution for health programmes.' },
      { text: 'Licensed partners to cover the whole sub-region.' },
    ],
  },
  vision: {
    eyebrow: 'Our vision',
    text: 'To become a leading pharmaceutical purchasing centre, well governed, resilient and regional in reach, ensuring a steady supply of quality health products at affordable prices.',
  },
  cta: {
    eyebrow: 'Suppliers',
    title: 'Would you like to become a supplier?',
    text: 'Read our selection criteria, then write to us with "Purchasing" in the subject line.',
  },
};
export default centrale;
