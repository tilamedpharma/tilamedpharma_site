import type { ClientsDict } from './fr';
const clients: ClientsDict = {
  meta: {
    title: 'Our customers · Markets · TILAMED Pharma',
    description: 'Public procurement agencies, wholesale distributors, regional and international organisations, pharmacies and clinics: TILAMED Pharma\'s customers in West Africa.',
  },
  hero: {
    lead: 'We supply public and private healthcare players in BENIN and West Africa.',
    cta1: 'Request a quote',
  },
  facts: [
    { value: '5', unit: 'groups', label: 'of customers, public and private' },
    { value: '15', unit: 'countries', label: 'served across the ECOWAS region' },
    { value: '3', unit: 'channels', label: 'direct sales, tenders, distributors' },
    { value: '1', unit: 'contact', label: 'our sales department, for every sale' },
  ],
  who: {
    eyebrow: 'Who we serve',
    title: 'They buy our products',
    text: 'From public tenders to the pharmacy counter, our products reach five groups of customers. For each one, we have adapted the way we work.',
    items: [
      { title: 'Public procurement agencies of the ECOWAS region', examples: ['SOBAPS', 'CAMEG', 'ONPPC', 'SONIPHARM'], text: 'Complete responses to their tenders and deliveries planned around actual consumption.' },
      { title: 'International private wholesale distributors', examples: ['UBIPHARM', 'UBPHAR', 'GAPOB'], text: 'A supplier within the region: more frequent orders and less tied-up stock.' },
      { title: 'Regional organisations', examples: ['WAHO', 'Centre MURAZ', 'CIRDES'], text: 'A local partner for the sub-region\'s health programmes.' },
      { title: 'International organisations', examples: ['GIZ', 'AFD', 'WHO'], text: 'Complete quality files and the capacity to deliver to all 15 ECOWAS countries.' },
      { title: 'Private pharmacies and clinics', examples: ['Throughout West Africa'], text: 'Essential health products available close to them, through our approved distributors.' },
    ],
    more: 'Find out more',
  },
  how: {
    eyebrow: 'How we work',
    title: 'Three ways to buy our products',
    items: [
      { title: 'Direct sales', text: 'To public and private procurement agencies, on order or through planned deliveries.', for: 'Procurement agencies, key accounts' },
      { title: 'Tenders', text: 'We respond to national and international tenders and restricted consultations, with a complete technical and regulatory file.', for: 'Ministries, health organisations' },
      { title: 'Distributor network', text: 'For the private sector, our products are sold through our approved distributors in each country.', for: 'Pharmacies, clinics, wholesalers' },
    ],
    forLabel: 'For',
    central: 'All sales are handled centrally by our sales department, with short response times.',
  },
  resources: {
    eyebrow: 'For our buyers',
    title: 'Everything you need to prepare an order',
    items: [
      { text: 'All our references, by range, with their presentations.' },
      { text: 'Technical data sheets and certificates of analysis, on request.' },
      { text: 'Our authorisations, with their numbers and dates.' },
    ],
  },
  cta: {
    eyebrow: 'Sales department',
    title: 'A need, a tender in preparation?',
    text: 'Write to our sales department with the products, quantities and country of delivery: we will get back to you quickly.',
    imageAlt: 'A customer and a pharmacist in a pharmacy',
  },
};
export default clients;
