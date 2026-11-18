import type { VisionDict } from './fr';

const vision: VisionDict = {
  meta: {
    title: 'Vision, mission and values · TILAMED Pharma',
    description: 'Within ten years, to become the benchmark of the pharmaceutical industry in West Africa. Our mission, our motto, our values and our commitments.',
  },
  hero: {
    lead: 'One ambition, one mission and four values that guide every decision we make, from the design of the plant to the patient.',
    ctaValues: 'Our values',
    ctaCommit: 'Our commitments',
  },
  motto: {
    eyebrow: 'Our motto',
    translation: 'Closer, safer for your health',
    near: { title: 'Closer', text: 'Our products are made next to the hospitals that use them: shorter lead times, fewer stock-outs.' },
    safe: { title: 'Safer', text: 'Every batch is manufactured and tested according to good manufacturing practice, then traced all the way to delivery.' },
  },
  vision: {
    eyebrow: 'Our vision',
    text: 'A manufacturer known for the quality of its products, the reliability of its deliveries and the fairness of its prices.',
    horizon: '10',
    horizonUnit: 'years',
    horizonLabel: 'to become the regional benchmark',
  },
  mission: {
    eyebrow: 'Our mission',
    keys: [
      { title: 'In quantity', text: 'Industrial capacity designed for the needs of hospitals in Benin and the sub-region.' },
      { title: 'Of quality', text: 'Products made to WHO standards and tested batch by batch in our laboratory.' },
      { title: 'At an affordable price', text: 'Local production that cuts freight, storage and currency-exchange losses.' },
    ],
  },
  values: {
    eyebrow: 'Our values',
    title: 'Four values, every day',
    intro: 'They apply to every step, from the choice of raw materials to delivery to the patient.',
    items: [
      { title: 'Rigour', text: 'Written procedures, followed and checked at every step, from the choice of raw materials to the patient.' },
      { title: 'Excellence', text: 'Demanding quality standards, constantly checked by our laboratory.' },
      { title: 'Compliance with the most demanding standards', text: 'A plant designed to WHO good manufacturing practice and authorised by the Benin Pharmaceutical Regulatory Agency.' },
      { title: 'Reliability', text: 'Products available when caregivers need them, deliveries on schedule and batches traced from end to end.' },
    ],
  },
  commitments: {
    eyebrow: 'Our commitments',
    title: 'Values put into action',
    items: [
      { title: 'Equality and inclusion', text: 'The first pharmaceutical manufacturer in Benin to build gender equality and the inclusion of people with disabilities into its organisation from the outset.' },
      { title: 'Local development', text: 'Skilled jobs in Benin and a skills-transfer programme for local technicians.' },
      { title: 'A green plant', text: 'IFC EDGE green-building certification in progress, with ISO 14001 certification targeted.' },
    ],
  },
  cta: {
    eyebrow: 'Let\'s work together',
    title: 'Share our ambition',
    text: 'Hospitals, purchasing centres, distributors or health organisations: let\'s build access to essential medicines in West Africa together.',
    cta1: 'Contact us',
  },
};
export default vision;
