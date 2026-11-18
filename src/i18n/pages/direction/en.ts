import type { DirectionDict } from './fr';

const direction: DirectionDict = {
  meta: {
    title: 'Management · TILAMED Pharma',
    description: 'A leadership team that knows healthcare in West Africa first-hand: our managing director, our shareholders and a pharmaceutical organisation.',
  },
  hero: {
    lead: 'A leadership team that knows healthcare in West Africa first-hand.',
    ctaDg: 'Our managing director',
    ctaOrg: 'Our organisation',
  },
  facts: [
    { value: '13', unit: 'years +', label: 'of experience in the medical sector for our shareholders' },
    { value: '15', unit: 'countries', label: 'in West Africa where this experience was built' },
    { value: '2013', unit: '', label: 'SEDIS SARL founded, renamed TILAMED PHARMA SA in 2023' },
  ],
  dg: {
    eyebrow: 'Our managing director',
    name: 'Casime LASSISSI',
    role: 'Managing Director',
    bio: [
      'The initiator of the TILAMED Pharma project, Casime LASSISSI is a finance and audit professional trained in France. Since 2013 he has run companies that supply, install and maintain medical devices in West Africa.',
      'Over these years he has led hospital and laboratory equipment projects for international organisations and ministries of health in the region.',
    ],
    convictionLabel: 'His conviction',
    conviction: 'West Africa must produce its own essential medicines.',
    pathTitle: 'His background',
    path: [
      'Higher education in accounting, control and audit (France).',
      'Experience in an international audit firm and in the internal control of large groups.',
      'More than ten years managing turnkey medical projects in West Africa.',
      'Command of public and international tender procedures.',
    ],
  },
  org: {
    eyebrow: 'Our organisation',
    title: 'A pharmaceutical organisation',
    intro: 'Alongside the managing director, the management team brings together a responsible pharmacist, who guarantees pharmaceutical compliance, and four operational departments.',
    items: [
      { title: 'Responsible pharmacist', text: 'Guarantor of pharmaceutical compliance and batch release.' },
      { title: 'Finance and administration', text: 'Finance, administration and internal control.' },
      { title: 'Sales', text: 'Relations with procurement agencies, distributors and health organisations.' },
      { title: 'Purchasing', text: 'Supply of raw materials, packaging and equipment.' },
      { title: 'Production', text: 'Manufacturing, maintenance and plant utilities.' },
    ],
    badge: 'Compliance guarantor',
    note: 'The responsible pharmacist ensures compliance with good manufacturing practice and releases each batch before it is made available to patients.',
  },
  cta: {
    eyebrow: 'Careers',
    title: 'Join a team in the making',
    text: 'The Sèmè-Podji plant is building its technical and administrative teams. Discover our professions and send us your application.',
  },
};
export default direction;
