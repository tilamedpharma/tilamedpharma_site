import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {},
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
};
export default marches;
