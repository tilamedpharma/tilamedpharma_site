import type { ProduitsDict } from './fr';

const produits: ProduitsDict = {
  ui: { seeRange: 'See the range', docCta: 'Request documentation', contactCta: 'Contact our sales department', inThisRange: 'In this range', categories: 'categories' },
  catalogue: {
    meta: { title: 'Product catalogue · TILAMED Pharma', description: 'Infusion fluids, injectable and oral medicines, nutritional solutions, medical devices and veterinary products: the TILAMED Pharma catalogue.' },
    lead: 'Search our injectable solutions, our future liquid products and the medical devices we distribute.',
    familiesTitle: 'Five ranges',
    searchTitle: 'The full catalogue',
    searchIntro: 'Filter by range or search by name, use or category.',
  },
  families: {
    serums: { meta: { title: 'Infusion fluids · Products · TILAMED Pharma', description: 'Sodium chloride, glucose, Ringer lactate, bicarbonate, mannitol: infusion fluids made in Sèmè-Podji.' }, lead: 'Our first range, made in Sèmè-Podji: infusion fluids in plastic bottles formed, filled and sealed on site.' },
    medicaments: { meta: { title: 'Medicines · Products · TILAMED Pharma', description: 'Ampoule injectables, medicated solutions, injectable antibiotics, vaccines and sera, oral liquids.' }, lead: 'Ampoule injectables, antibiotics, vaccines and sera, oral liquids: a range rolled out in three production phases.' },
    'solutions-nutritionnelles': { meta: { title: 'Nutritional solutions · Products · TILAMED Pharma', description: 'Concentrated glucose and injectable or oral vitamins for calorie supply and correcting deficiencies.' }, lead: 'Concentrated glucose and vitamins, injectable or oral, for calorie supply and correcting deficiencies.' },
    'dispositifs-medicaux': { meta: { title: 'Medical devices · Products · TILAMED Pharma', description: 'Diagnosis, surgical instruments, sterilisation and equipment: the medical devices distributed by TILAMED Pharma.' }, lead: 'Diagnosis, surgical instruments, sterilisation and equipment: the medical devices we distribute.' },
    'sante-animale': { meta: { title: 'Veterinary products · Products · TILAMED Pharma', description: 'Food, parasite control, care and medicines for dogs and cats, distributed by our procurement centre.' }, lead: 'Food, parasite control, care and medicines for dogs and cats.' },
  },
  formats: {
    title: 'Bottles suited to every use',
    intro: 'Light, unbreakable plastic bottles, made by blow-fill-seal.',
    items: [
      { value: '100', label: 'Antibiotics, pain relief, dilutions' },
      { value: '250', label: 'Basic fluids, paediatrics' },
      { value: '500', label: 'The most used size in hospitals' },
      { value: '1000', label: 'Rehydration, volume replacement' },
    ],
    cards: [
      { title: 'Unbreakable', text: 'The plastic bottle withstands knocks during transport and storage.' },
      { title: 'Light', text: 'Lighter than glass: easier to ship and handle.' },
      { title: 'Closed system', text: 'The bottle empties without letting air in, limiting the risk of contamination.' },
    ],
    note: 'Each carton contains the leaflet and is labelled to ensure batch traceability.',
  },
  phases: { title: 'A range rolled out in three phases', intro: 'Medicines enter production as lines open and regulatory authorisations are granted.' },
  devices: {
    text: 'With long experience in supplying, installing and maintaining medical equipment in West Africa, TILAMED Pharma distributes a range of CE-marked medical devices from recognised international manufacturers.',
    cta: 'For a quote, a list of references or a tender request, contact our sales department.',
  },
  vet: { text: 'Veterinary products selected and distributed by our procurement centre. They will be available soon.', cta: 'Be notified of the launch' },
  doc: {
    meta: { title: 'Documentation request · TILAMED Pharma', description: 'Healthcare professionals and buyers: request technical information on TILAMED Pharma products.' },
    lead: 'Healthcare professionals and buyers: request technical information on our products.',
    intro: 'Tell us which products interest you. Our team will send you the available information as soon as it is published.',
    formTitle: 'Your request',
    fields: {
      name: 'Full name', org: 'Organisation', profile: 'You are', country: 'Country', email: 'Email address', phone: 'Phone',
      ranges: 'Ranges of interest', products: 'Specific products (optional)', productsHint: 'E.g. sodium chloride 0.9% 500 ml, ceftriaxone 1 g…',
      message: 'Your message', consent: 'I agree that TILAMED Pharma may use this information to answer my request.', submit: 'Send request',
      required: 'Required field', select: 'Choose…',
    },
    profiles: ['Procurement agency', 'Hospital or clinic', 'Pharmacy', 'Wholesaler or distributor', 'Health organisation', 'Other'],
    asideTitle: 'What you will receive',
    asideItems: ['Technical data sheets and compositions as soon as published', 'Planned presentations and packaging', 'Availability schedule', 'Contact details of our sales department'],
    direct: 'Prefer to write to us directly?',
  },
};
export default produits;
