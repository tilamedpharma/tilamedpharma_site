import type { RseDict } from './fr';

const rse: RseDict = {
  meta: {
    title: 'Social responsibility · TILAMED Pharma',
    description: 'Public health, skilled jobs, health sovereignty, equality and the environment: TILAMED Pharma\'s impact and commitments.',
  },
  hero: {
    lead: 'Our value is also measured by our impact on patients, our teams and the region.',
    cta1: 'Our impact',
    cta2: 'Our commitments',
  },
  facts: [
    { value: '150', unit: '', label: 'direct jobs when the plant starts up' },
    { value: '70', unit: '%', label: 'technical positions' },
    { value: '5', unit: 'years', label: 'of on-site skills transfer' },
  ],
  impact: {
    eyebrow: 'Our impact',
    title: 'What our plant brings',
    items: [
      { title: 'Public health', text: 'Keeping quality essential injectable solutions available at all times.' },
      { title: 'Skilled jobs', text: 'Mostly technical positions, filled locally as a priority.' },
      { title: 'Health sovereignty', text: 'Less dependence on imports and less foreign-currency outflow.' },
      { title: 'Know-how', text: 'A skills-transfer programme for local technicians.' },
    ],
  },
  pillars: {
    eyebrow: 'Our three pillars',
    items: [
      { title: 'Useful', text: 'Essential injectable solutions, made close to the hospitals and tested batch by batch.' },
      { title: 'Inclusive', text: 'Real equality between women and men, and positions open to people with disabilities.' },
      { title: 'Green', text: 'A plant undergoing EDGE certification, ISO 14001 certification targeted and waste managed safely.' },
    ],
  },
  transfer: {
    eyebrow: 'Skills transfer',
    title: 'Know-how that stays in Benin',
    value: '5',
    unit: 'years',
    label: 'of on-site support from the manufacturers\' engineers',
  },
  commitments: {
    eyebrow: 'Our commitments',
    title: 'Five commitments, every day',
    items: [
      'Manufacture to good practice and test every batch before release.',
      'Recruit and train locally first.',
      'Guarantee equality between women and men, from hiring to responsibilities.',
      'Reduce our environmental footprint and manage waste safely.',
      'Act with integrity in all our business relationships.',
    ],
  },
  cta: {
    eyebrow: 'Partnerships',
    title: 'Let\'s build a lasting impact together',
    text: 'International organisations, development agencies, financial institutions: join an industrial project that strengthens access to essential medicines in West Africa.',
    cta2: 'Contact us',
  },
};
export default rse;
