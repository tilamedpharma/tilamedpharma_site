// "Become a distributor" page · English.
import type { DistributeursDict } from './fr';

const distributeurs: DistributeursDict = {
  hero: { cta1: 'Apply' },
  facts: [
    { value: '15', unit: 'countries', label: 'in West Africa within our distribution area' },
    { value: '2', unit: 'sources', label: 'our plant in BENIN and leading international manufacturers' },
    { value: '< 1', unit: 'month', label: 'target, from our future plant to the patient' },
    { value: '5', unit: 'families', label: 'of products, from a single supplier' },
  ],
  why: {
    eyebrow: 'Why join us',
    title: 'Why distribute TILAMED Pharma?',
    items: [
      { title: 'A local supplier', text: 'A plant in BENIN, a few hours away by road rather than weeks away by sea: more frequent orders, less capital tied up in stock, fewer shortages.' },
      { title: 'Controlled quality', text: 'Every batch will be tested by our laboratory and then released by the qualified pharmacist, under the oversight of the ABRP.' },
      { title: 'A full range', text: 'IV fluids, injectable medicines, nutritional solutions, medical devices and veterinary products.' },
      { title: 'Support', text: 'Technical and regulatory documentation for our products, and help with your tender submissions.' },
    ],
  },
  partner: {
    eyebrow: 'A partnership',
    title: 'Commitments on both sides',
    giveTitle: 'What we bring you',
    give: [
      'Products from our future plant in BENIN and from major international manufacturers, delivered from our warehouse.',
      'Full documentation for every product: technical data sheets and certificates of analysis.',
      'Deliveries scheduled to match your actual needs.',
      'A regular dialogue on your sales, your stock and the needs of your market.',
    ],
  },
  steps: {
    eyebrow: 'How it works',
    title: 'Become a distributor in four steps',
    items: [
      { title: 'Application', text: 'Fill in the form below: your company, your licences, your channels.' },
      { title: 'Discussion and assessment', text: 'We review your application, then discuss your market, your customers and your storage capacity.' },
      { title: 'Distribution agreement', text: 'A contract sets out the territory, the ranges, each party\'s commitments and the commercial terms.' },
      { title: 'Launch and follow-up', text: 'First orders and documentation, then regular follow-up of sales and stock.' },
    ],
  },
  coverage: {
    eyebrow: 'Territory',
    title: '15 West African countries',
    text: 'We are looking for partners in each of the 15 West African countries, for both public and private channels.',
  },
  contact: 'Prefer to write to us?',
  formLead: 'A few details about your company are enough to get started: we will get back to you to talk it through.',
};
export default distributeurs;
