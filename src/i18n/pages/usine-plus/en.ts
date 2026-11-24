import type { Topic } from './fr';

const pages: Record<string, Topic> = {
  'site-seme-podji': {
    meta: { title: 'The Sèmè-Podji site · Our plant · TILAMED Pharma', description: 'A 2-hectare site in the Sèmè-Podji industrial zone, close to the Kraké border, Cotonou and its port.' },
    lead: 'A 2-hectare site, just past the Kraké border, between Cotonou and NIGERIA.',
    intro: '',
    facts: [
      { value: '2', unit: 'ha', label: 'industrial site, i.e. 20,000 m²' },
    ],
    blocks: [
      { kind: 'points', title: 'A strategic location', items: [
        'In the municipality of Sèmè-Podji, Ouémé department, southern BENIN.',
        'Right next to the Kraké border, the main crossing point into NIGERIA.',
        'Close to Cotonou and its autonomous port, which handles most of the country\'s trade.',
        'In the Sèmè-Podji industrial zone.',
      ] },
      { kind: 'cards', title: 'How the site is organised', text: 'The site will clearly separate clean areas from general areas.', items: [
        { title: 'Production building', text: 'The manufacturing lines, in controlled-atmosphere areas.' },
        { title: 'Receipt and quarantine', text: 'Raw materials wait here for testing before use.' },
        { title: 'Laboratory', text: 'Quality control of materials, water and batches.' },
        { title: 'Finished goods warehouse', text: 'Storage of released products before delivery.' },
        { title: 'Technical utilities', text: 'The water, steam, air and cooling that keep the plant running.' },
        { title: 'Changing rooms and airlocks', text: 'Controlled passage between general and clean areas.' },
      ] },
    ],
    note: '',
  },
  'salles-propres': {
    meta: { title: 'Clean rooms · Our plant · TILAMED Pharma', description: 'Grade C areas and grade A protection at the filling point: HEPA filtration, pressure cascade, smooth materials and continuous monitoring.' },
    lead: 'Critical steps will take place in a controlled-atmosphere environment.',
    intro: 'Injectable solutions are manufactured in grade C areas, with grade A protection at the filling point, in line with good manufacturing practice.',
    facts: [
      { value: 'C', unit: '', label: 'Grade of manufacturing areas' },
      { value: 'A', unit: '', label: 'Protection at the filling point' },
    ],
    blocks: [
      { kind: 'cards', title: 'A controlled atmosphere', items: [
        { title: 'HEPA filtration', text: 'Air supplied to the rooms passes through high-efficiency filters.' },
        { title: 'Pressure cascade', text: 'The cleanest rooms are kept at overpressure to keep contaminants out.' },
        { title: 'Smooth materials', text: 'Panels, doors and epoxy resin floors that are easy to clean and disinfect.' },
        { title: 'Monitoring', text: 'Particles, pressure, temperature and humidity are tracked, with alarms.' },
      ] },
    ],
    note: 'Staff enter clean areas through dedicated changing rooms and airlocks, wearing garments suited to each grade.',
  },
  utilites: {
    meta: { title: 'Industrial utilities · Our plant · TILAMED Pharma', description: 'Compressed air, steam, chilled water, purified water and pure steam networks, on-site maintenance: the plant\'s technical services.' },
    lead: 'Compressed air, steam, chilled water: the technical services that keep the plant running.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'cards', title: 'The technical services', items: [
        { title: 'Compressed air', text: 'Oil-free compressed air for production equipment.' },
        { title: 'Industrial steam', text: 'A boiler produces industrial steam.' },
        { title: 'Chilled water', text: 'Chiller and cooling tower for processes and air handling.' },
        { title: 'Piping networks', text: 'For purified water, water for injection, pure steam and compressed air.' },
        { title: 'On-site maintenance', text: 'Maintenance workshop and spare parts store on site.' },
      ] },
    ],
    note: 'Preventive and corrective maintenance is carried out by our technicians, trained by the equipment manufacturers.',
  },
  'transfert-technologie': {
    meta: { title: 'Technology transfer · Our plant · TILAMED Pharma', description: 'Five years of permanent on-site technical assistance and training for operators, laboratory and maintenance staff: the know-how stays in BENIN.' },
    lead: 'Five years of permanent assistance so that the know-how stays in BENIN.',
    intro: 'From installation and commissioning, the equipment manufacturers train our teams in BENIN. Their engineers then remain seconded on site for five years to support production.',
    facts: [
      { value: '5', unit: 'years', label: 'of permanent technical assistance, extendable' },
      { value: '70', unit: '%', label: 'technical positions' },
    ],
    blocks: [
      { kind: 'points', title: 'Planned training', items: [
        'Functional and technical training for operators and technicians.',
        'Training in good manufacturing practice and clean-area hygiene.',
        'Training of laboratory staff in analytical methods.',
        'Training of the maintenance team on critical equipment.',
      ] },
    ],
    note: '',
  },
};
export default pages;
