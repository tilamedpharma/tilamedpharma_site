import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {
    clients: {
      meta: { title: 'Our customers · Markets · TILAMED Pharma', description: 'Procurement agencies, wholesalers, health organisations, hospitals and pharmacies: TILAMED Pharma\'s customers in BENIN and West Africa.' },
      lead: 'We supply public and private healthcare players in BENIN and West Africa.',
      intro: '',
      facts: [{ value: '15', unit: 'countries', label: 'in West Africa covered' }],
      blocks: [
        { kind: 'points', title: 'How we work', items: [
          'Direct sales to public and private procurement agencies.',
          'Responses to tenders and restricted consultations.',
          'Sales to the private sector and through our distributors.',
          'All sales are handled centrally by our sales department, with short response times.',
        ] },
      ],
      note: '',
    },
    'centrales-achat': {
      meta: { title: 'Procurement agencies · Markets · TILAMED Pharma', description: 'A local supplier able to deliver to your real needs: less tied-up stock, fewer shortages, complete tender files.' },
      lead: 'A local supplier able to deliver to your real needs.',
      intro: 'Procurement agencies currently have to order several months ahead and store large volumes of imported infusion fluids. With local production, orders can follow actual consumption.',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'What you gain', items: [
          { title: 'Less tied-up stock', text: 'More frequent deliveries, less crowded warehouses.' },
          { title: 'Fewer shortages', text: 'A supplier a few hours away by road rather than several weeks by sea.' },
          { title: 'Complete files', text: 'A team used to national and international tender procedures.' },
        ] },
      ],
      note: '',
    },
    'hopitaux-cliniques': {
      meta: { title: 'Hospitals, clinics and pharmacies · Markets · TILAMED Pharma', description: 'Essential infusion solutions, available close to you, in unbreakable plastic bottles.' },
      lead: 'Essential infusion solutions, available close to you.',
      intro: 'Infusion fluids are used every day in every department: emergency, surgery, medicine, paediatrics, maternity. Their availability is vital.',
      facts: [],
      blocks: [
        { kind: 'points', title: 'A range designed for hospitals', items: [
          'A range covering basic needs: normal saline, glucose, Ringer lactate.',
          'Specific solutions: analgesic, anti-infective, antibiotics.',
          'Ampoule injectables for emergencies, maternity and routine care.',
          'Unbreakable plastic bottles, easy to handle and store.',
        ] },
      ],
      note: '',
    },
    'organisations-sante': {
      meta: { title: 'Health organisations · Markets · TILAMED Pharma', description: 'A local partner for regional and international health programmes: WHO GMP, complete quality files, delivery to 15 countries.' },
      lead: 'A local partner for regional and international health programmes.',
      intro: 'International, regional and non-governmental organisations attach great importance to strengthening health systems in West Africa. Our teams know their procurement procedures and quality requirements.',
      facts: [{ value: '15', unit: 'countries', label: 'in West Africa covered' }],
      blocks: [
        { kind: 'points', title: 'Our commitments', items: [
          'Manufacturing to WHO good practice.',
          'Complete quality files for every product.',
          'Ability to deliver to the 15 West African countries covered.',
        ] },
      ],
      note: '',
    },
  },
  distrib: {
    meta: { title: 'Become a distributor · Markets · TILAMED Pharma', description: 'Pharmaceutical wholesalers and distributors in West Africa: join TILAMED Pharma\'s network of approved distributors.' },
    lead: 'Are you a pharmaceutical wholesaler or distributor in West Africa? Let\'s talk.',
    intro: 'We are building a network of approved distributors to make our products available throughout the sub-region.',
    reqTitle: 'What we are looking for',
    reqs: [
      'Hold the pharmaceutical distribution authorisations of your country.',
      'Have a warehouse that complies with good distribution practice.',
      'Know the public and private distribution channels of your market.',
    ],
    formTitle: 'Your application',
    fields: {
      company: 'Company name', country: 'Country', name: 'Contact name', role: 'Position', email: 'Email address', phone: 'Phone',
      licence: 'Pharmaceutical distribution authorisation', warehouse: 'GDP-compliant warehouse', yes: 'Yes', no: 'No', pending: 'In progress',
      channels: 'Channels covered', ranges: 'Ranges of interest', message: 'Tell us about your company',
      messageHint: 'Areas covered, customers, volumes, team…', consent: 'I agree that TILAMED Pharma may use this information to review my application.',
      submit: 'Send my application', required: 'Required field', select: 'Choose…',
    },
    channels: ['Public procurement agencies', 'Hospitals and clinics', 'Retail pharmacies', 'Health organisations', 'Sub-regional export'],
  },
  presence: {
    meta: { title: 'Regional presence · Markets · TILAMED Pharma', description: 'A plant in BENIN, 15 West African countries covered and offices in BENIN, BURKINA FASO and FRANCE.' },
    lead: 'A plant in BENIN, 15 West African countries covered and an international presence.',
    facts: [
      { value: '15', unit: 'countries', label: 'in West Africa covered' },
      { value: '3', unit: '', label: 'offices: BENIN, BURKINA FASO, FRANCE' },
      { value: '400', unit: 'M +', label: 'people in West Africa' },
    ],
    note: 'The sub-region shares similar health challenges: comparable diseases, young and fast-growing populations, and the same dependence on imported medicines.',
  },
};
export default marches;
