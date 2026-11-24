import type { BeninDict } from './fr';

const benin: BeninDict = {
  meta: {
    title: 'Why produce in BENIN? · TILAMED Pharma',
    description: 'BENIN imports all of its injectable solutions. Producing locally improves availability, traceability, prices and jobs.',
  },
  hero: {
    lead: 'BENIN currently imports all of its injectable solutions. Producing locally changes things for patients.',
    cta: 'The situation',
  },
  facts: [
    { value: '100', unit: '%', label: 'of the injectable solutions used in BENIN are imported' },
    { value: '0', unit: '', label: 'local maker of injectable solutions before TILAMED' },
    { value: '15', unit: 'countries', label: 'in West Africa to supply from BENIN' },
    { value: '400', unit: 'M +', label: 'people in West Africa' },
  ],
  problem: {
    eyebrow: 'The situation',
    title: 'A heavy product that is costly to import',
    text: 'An infusion solution is mostly water. It is heavy and bulky: shipping it is expensive because freight is charged by weight and volume, and storing it takes a lot of space. Yet wholesalers must permanently hold several months of stock to avoid shortages.',
    todayLabel: 'Today · imported',
    today: ['Manufactured abroad', 'Sea freight charged by weight and volume', 'Several months of stock at wholesalers', 'Hospitals and patients'],
    tomorrowLabel: 'Tomorrow · made in BENIN',
    tomorrow: ['Manufactured in Sèmè-Podji', 'Delivered by road, to match real demand', 'Hospitals and patients'],
  },
  benefits: {
    eyebrow: 'The benefits',
    title: 'What local production changes',
    items: [
      { title: 'Availability', text: 'Stock close at hand, delivered to match real demand, without months of delay.' },
      { title: 'Traceability', text: 'A short, controlled supply chain that helps fight falsified medicines.' },
      { title: 'Price', text: 'Less freight, less storage, fewer currency losses: fairer prices.' },
      { title: 'Jobs', text: 'Skilled jobs and a transfer of industrial know-how.' },
    ],
  },
  position: {
    eyebrow: 'A strategic location',
    title: 'At the heart of West Africa',
    text: 'Our plant is being built in Sèmè-Podji, between Cotonou and the Nigerian border: a location chosen to supply the whole region.',
    corridor: 'On the Abidjan – Lagos coastal corridor',
    port: 'Port',
    border: 'Border',
    items: [
      { title: 'NIGERIA on the doorstep', text: 'The site borders Africa\'s most populous country.' },
      { title: 'Close to the Port of Cotonou', text: 'The country\'s main trade gateway, for raw materials and equipment alike.' },
      { title: 'A whole region to serve', text: 'Fifteen countries and more than 400 million people supplied from a single plant.' },
    ],
  },
  env: {
    eyebrow: 'The framework',
    title: 'A supportive environment',
    items: [
      'A clear political will to develop a national pharmaceutical industry.',
      'An investment code that lists health and industrial processing among priority sectors.',
      'Customs and tax advantages in special economic zones.',
      'A young, skilled workforce trained in universities in the region and beyond.',
    ],
  },
  covid: {
    eyebrow: 'Health sovereignty',
    text: 'The COVID-19 crisis showed how dependence on imports weakens health systems. Producing locally secures access to essential medicines.',
  },
};
export default benin;
