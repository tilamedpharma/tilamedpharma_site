import type { UsineDict } from './fr';

const usine: UsineDict = {
  meta: {
    title: 'Our plant · TILAMED Pharma, Sèmè-Podji (BENIN)',
    description: 'A modern plant producing injectable solutions in Sèmè-Podji: water treatment, blow-fill-seal, sterilisation, 100% inspection and laboratory.',
  },
  hero: {
    title: 'Our plant',
    lead: 'A modern, expandable plant for injectable solutions, under construction in Sèmè-Podji.',
    cta1: 'The 7-step process',
    cta2: 'The Sèmè-Podji site',
  },
  facts: [
    { value: '15', unit: 'M', code: 'LVP', label: 'large-volume solutions per year' },
    { value: '35', unit: 'M', code: 'SVP', label: 'small-volume injectables per year' },
    { value: '2', unit: 'ha', code: '', label: 'industrial site in Sèmè-Podji' },
    { value: '100–1000', unit: 'ml', code: '', label: 'infusion bottle formats' },
    { value: 'C + A', unit: '', code: '', label: 'cleanliness grades of critical areas' },
  ],
  site: {
    eyebrow: 'An integrated site',
    title: 'The whole manufacturing chain on a single site',
    text: 'Our plant will bring together pharmaceutical water treatment, solution preparation, bottle manufacturing, sterilisation, inspection, the quality control laboratory and the warehouse. It is designed so that its capacity can grow.',
    badge: 'Designed to increase its capacity',
    imageAlt: 'Stainless steel equipment in a pharmaceutical plant',
  },
  process: {
    eyebrow: 'The process',
    title: 'Seven steps, from water to delivery',
    intro: 'Each step has its own detailed page. Here is the essence of what happens between the arrival of water and the departure of the cartons.',
    more: 'Explore the step',
    docTitle: 'Need the technical data?',
    docText: 'Healthcare professionals and buyers: request the specifications of our products and our process.',
    docCta: 'Request documentation',
    steps: [
      { title: 'Water treatment', text: 'An infusion solution is more than 90% water. We will produce two grades of pharmaceutical water on site.', points: ['Double reverse osmosis and electrodeionisation', 'Water for injection by distillation', 'Conductivity and temperature monitored continuously'] },
      { title: 'Solution preparation', text: 'Each solution is prepared in batches, to a validated formula, in stainless steel tanks.', points: ['Tanks fitted with load cells and mixers', 'In-process checks: concentration, pH, appearance', 'Filtration before filling'] },
      { title: 'Blow, fill, seal', text: 'A single machine forms the bottle, fills it and seals it, with no human contact.', points: ['Bottle made at the very moment of filling', 'Filling under protected airflow', 'Format change in about half an hour'] },
      { title: 'Sterilisation', text: 'Each filled bottle is sterilised in its final packaging, in a superheated water spray autoclave.', points: ['Validated cycles recorded for every load', 'Even heating that protects the plastic', 'Physical separation before and after sterilisation'] },
      { title: '100% inspection', text: 'No bottle will leave the plant without being checked.', points: ['Leak test on every bottle', 'Visual inspection under light', 'Automatic rejection of non-compliant cartons'] },
      { title: 'Quality control laboratory', text: 'Raw materials, water and batches are analysed before any release.', points: ['Chromatography (HPLC) and spectrometry', 'Microbiology: sterility and endotoxins', 'Release by the responsible pharmacist'] },
      { title: 'Packaging and delivery', text: 'Storage under good distribution practice, then delivery by our own logistics team.', points: ['Delivery matched to customers\' real needs', 'Real-time tracking of orders and stock', 'Export via forwarder or organised delivery'] },
    ],
  },
  explore: {
    eyebrow: 'Beyond production',
    title: 'What makes production possible',
    intro: 'Clean areas, technical services, team training and the site itself: each topic has its own page.',
    more: 'Learn more',
  },
  green: {
    badge: 'Green building',
    title: 'A plant designed to limit its impact',
    text: 'Water, energy, waste: the plant is undergoing EDGE certification, the green building standard of IFC (World Bank Group).',
    cta: 'Our environmental approach',
    imageAlt: 'Industrial roofs fitted with solar panels',
  },
  location: {
    eyebrow: 'The Sèmè-Podji site',
    title: 'A strategic location between Cotonou and NIGERIA',
    items: [
      'In the municipality of Sèmè-Podji, Ouémé department, southern BENIN',
      'Right next to the Kraké border, the main crossing into NIGERIA',
      'Close to Cotonou and its autonomous port',
      'In the Sèmè-Podji industrial zone',
    ],
    cta: 'The Sèmè-Podji site',
    directions: 'Directions',
  },
};
export default usine;
