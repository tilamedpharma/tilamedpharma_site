import type { AchatsCarrieresDict } from './fr';

const d: AchatsCarrieresDict = {
  pages: {
    carrieres: {
      meta: { title: 'Working at TILAMED · Careers · TILAMED Pharma', description: '150 planned direct jobs, 70% technical positions and 5 years of skills transfer: join BENIN\'s first injectable solutions industry.' },
      lead: 'Join BENIN\'s first injectable solutions industry.',
      intro: '',
      facts: [
        { value: '150', unit: '', label: 'planned direct jobs' },
        { value: '70', unit: '%', label: 'technical positions' },
        { value: '30', unit: '%', label: 'administrative positions' },
        { value: '5', unit: 'years', label: 'of skills transfer' },
      ],
      blocks: [
        { kind: 'prose', title: 'A team in the making', items: [
          'We are building a team of qualified professionals, trained in industrial manufacturing and committed to quality.',
          'BENIN has a young, dynamic and skilled workforce: we recruit and train locally first.',
        ] },
        { kind: 'points', title: 'An employer open to everyone', items: [
          'Open, fair recruitment based on skills alone.',
          'Positions open to people with disabilities.',
          'Fair sharing of responsibilities between women and men, at every level.',
          'Training open to everyone, with five years of support from the equipment manufacturers.',
        ] },
      ],
      note: 'No job offers are published at the moment. You can submit a speculative application.',
    },
    metiers: {
      meta: { title: 'Our jobs · Careers · TILAMED Pharma', description: 'Production, quality assurance, laboratory, maintenance, logistics, support functions: the jobs of a pharmaceutical plant.' },
      lead: 'Production, quality, maintenance, logistics, support functions: discover the jobs of a pharmaceutical plant.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Six job families', items: [
          { title: 'Production', text: 'Line operators, machine operators, team leaders.' },
          { title: 'Quality assurance', text: 'Pharmacists, quality managers, validation specialists.' },
          { title: 'Laboratory', text: 'Physico-chemical and microbiology analysts.' },
          { title: 'Maintenance and utilities', text: 'Mechanical, electrical, automation and refrigeration technicians.' },
          { title: 'Logistics', text: 'Storekeepers, stock managers, delivery drivers.' },
          { title: 'Support functions', text: 'Finance, human resources, purchasing, sales, IT.' },
        ] },
        { kind: 'points', title: 'The management team', items: [
          'Managing director',
          'Responsible pharmacist',
          'Administration, finance and human resources director',
          'Sales and marketing director, with medical representatives',
          'Purchasing manager',
          'Chief accountant',
        ] },
      ],
      note: '',
    },
  },
  cand: {
    meta: { title: 'Speculative application · Careers · TILAMED Pharma', description: 'Introduce yourself: TILAMED Pharma will review your profile as soon as recruitment opens.' },
    lead: 'Introduce yourself: we will review your profile as soon as recruitment opens.',
    intro: 'We review every application on the basis of skills alone. Applications are open to everyone.',
    formTitle: 'Your application',
    fields: {
      name: 'Full name', email: 'Email address', phone: 'Phone', country: 'Country of residence',
      family: 'Desired job', level: 'Level of education', experience: 'Years of experience',
      cv: 'Your CV', cvHint: 'PDF or Word, 5 MB maximum.', message: 'Your motivation',
      consent: 'I agree that TILAMED Pharma may keep this information to review my application.',
      submit: 'Send my application', required: 'Required field', select: 'Choose…',
    },
    families: ['Production', 'Quality assurance', 'Laboratory', 'Maintenance and utilities', 'Logistics', 'Support functions', 'Other'],
    levels: ['Lower secondary or vocational certificate', 'Secondary school diploma', 'Two-year higher diploma', 'Bachelor\'s degree', 'Master\'s or engineering degree', 'Doctorate or Doctor of Pharmacy'],
    experience: ['Less than a year', '1 to 3 years', '3 to 5 years', '5 to 10 years', 'More than 10 years'],
    asideTitle: 'Good to know',
    asideItems: ['No job offers are published at the moment', 'Your profile will be reviewed when recruitment opens', 'Technical and administrative positions', 'Training provided by the equipment manufacturers'],
  },
};
export default d;
