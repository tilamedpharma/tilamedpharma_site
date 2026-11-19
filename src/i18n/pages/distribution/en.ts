// "Our distribution" page · English.
import type { DistributionDict } from './fr';

const distribution: DistributionDict = {
  meta: {
    title: 'Our distribution · Purchasing centre · TILAMED Pharma',
    description: 'From our plant and our suppliers to the patient: a short, controlled and traceable supply chain, in BENIN and across West Africa.',
  },
  hero: {
    lead: 'From our plant and our suppliers to the patient: a short, controlled and traceable supply chain.',
    cta1: 'Our supply chain',
  },
  facts: [
    { value: '< 1', unit: 'month', label: 'from our Sèmè-Podji plant to the patient' },
    { value: '15', unit: 'countries', label: 'in West Africa within our distribution area' },
    { value: '2', unit: 'sources', label: 'what we make and what we buy, in a single supply chain' },
  ],
  flow: {
    eyebrow: 'Our supply chain',
    title: 'Two sources, one supply chain',
    intro: 'Injectable solutions made in Sèmè-Podji and products bought from major manufacturers follow the same path: inspection, storage, then delivery to our customers.',
    label: 'Diagram of the distribution chain',
    sources: [
      { title: 'Made in BENIN', text: 'Injectable solutions produced, tested and released batch by batch in Sèmè-Podji.' },
      { title: 'Bought from major manufacturers', text: 'Medicines, medical devices and laboratory products, checked on receipt.' },
    ],
    hub: { title: 'Our warehouse', text: 'Controlled storage, tracked by batch and expiry date.' },
    dests: ['Public purchasing centres', 'Distributors and wholesalers', 'Hospitals, clinics and pharmacies', 'Health programmes'],
    end: { title: 'Patients', text: 'Quality products, available close to home.' },
  },
  steps: {
    eyebrow: 'Step by step',
    title: 'The stages, one by one',
    imageAlt: 'Customers choosing a medicine in a pharmacy',
    items: [
      { title: 'Our plant and our suppliers', text: 'Every batch we make is tested by our laboratory and released by the qualified pharmacist. Every product we buy is checked on receipt: documents, labelling, condition of the parcels.' },
      { title: 'Our warehouse', text: 'Products are stored under controlled conditions and tracked by batch and expiry date: the first to expire are the first to leave.' },
      { title: 'Purchasing centres and distributors', text: 'We deliver to public purchasing centres, health organisations and our licensed distributors in BENIN and across the sub-region.' },
      { title: 'Hospitals, clinics and pharmacies', text: 'Health facilities receive products faster, in quantities matched to what they actually use.' },
      { title: 'Patients', text: 'Quality health products, available close to home, at an affordable price.' },
    ],
  },
  guarantees: {
    eyebrow: 'Our commitments',
    title: 'What we guarantee our customers',
    items: [
      { title: 'Controlled storage', text: 'Storage conditions respected and stock rotated according to expiry dates.' },
      { title: 'Traceability', text: 'Every shipment recorded by customer and batch, and a recall procedure run with the authorities.' },
      { title: 'Availability', text: 'Reserve stocks to cope with shortages and price rises on the market.' },
      { title: 'Proximity', text: 'A plant in BENIN and a regional office in Ouagadougou, close to our customers across the sub-region.' },
    ],
  },
  why: {
    eyebrow: 'Why it matters',
    text: 'Nearly half of Africa\'s population lacks regular access to essential medicines. Shortening the supply chain brings medicines closer to patients.',
  },
  cta: {
    eyebrow: 'Distribution',
    title: 'Distribute our products',
    text: 'Wholesaler, distributor or purchasing centre: join our network and make our products available in your country.',
  },
};
export default distribution;
