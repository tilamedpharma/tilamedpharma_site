import type { PresenceDict } from './fr';
const presence: PresenceDict = {
  meta: {
    title: 'Regional presence · Markets · TILAMED Pharma',
    description: 'A plant in BENIN, all 15 ECOWAS countries covered and offices in BENIN, BURKINA FASO and FRANCE.',
  },
  hero: {
    lead: 'A plant in BENIN, 15 West African countries covered and an international presence.',
  },
  facts: [
    { value: '15', unit: 'countries', label: 'covered across the ECOWAS region' },
    { value: '400', unit: 'M +', label: 'people in West Africa' },
    { value: '1', unit: 'plant', label: 'in Sèmè-Podji, on the border with NIGERIA' },
    { value: '3', unit: 'offices', label: 'in BENIN, BURKINA FASO and FRANCE' },
  ],
  map: {
    legend: 'From the Sèmè-Podji plant, our supply routes serve the capitals of the sub-region.',
  },
  sites: {
    eyebrow: 'Our locations',
    title: 'One plant, three offices',
    more: 'Addresses and phone numbers',
  },
  why: {
    eyebrow: 'Why the whole sub-region',
    title: 'Fifteen countries, shared health challenges',
    text: 'We are not only targeting BENIN: the sub-region shares similar needs, and a regional plant can meet them.',
    items: [
      { title: 'Similar diseases', text: 'The same needs for infusion fluids, anti-infectives and essential care, from one country to the next.' },
      { title: 'Young populations', text: 'Over 400 million people, growing fast: health needs that increase every year.' },
      { title: 'The same dependence', text: 'Medicines that are almost all imported, at the cost of long lead times and frequent stock-outs.' },
    ],
  },
  gallery: {
    title: 'One region, fifteen markets',
    captions: ['Lagos · NIGERIA', 'Abidjan · CÔTE D\'IVOIRE', 'Accra · GHANA', 'Dakar · SENEGAL', 'Cotonou · BENIN', 'Port of Tema · GHANA'],
  },
  serve: {
    eyebrow: 'How we serve each country',
    title: 'Directly or through our distributors',
    direct: { title: 'Directly', text: 'For public procurement agencies and regional and international organisations.' },
    partners: { title: 'Through our distributors', text: 'For wholesalers, pharmacies and private clinics, with an approved distributor in each country.' },
  },
  cta: {
    eyebrow: 'Distributors',
    title: 'Are you a wholesaler in one of these 15 countries?',
    text: 'Join our network of approved distributors.',
  },
};
export default presence;
