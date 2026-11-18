import type { ParcoursDict } from './fr';

const parcours: ParcoursDict = {
  meta: {
    title: 'Our journey · TILAMED Pharma',
    description: 'From SEDIS SARL in 2013 to the Sèmè-Podji plant: ten years in the field, six approvals and authorisations, a 2-hectare industrial site.',
  },
  hero: {
    lead: 'From hands-on experience in the medical sector to the creation of a local pharmaceutical industry.',
    cta: 'Key milestones',
  },
  facts: [
    { value: '2013', unit: '', label: 'first steps in the medical sector in West Africa' },
    { value: '2023', unit: '', label: 'SEDIS SARL becomes TILAMED PHARMA SA' },
    { value: '6', unit: '', label: 'approvals, authorisations and certificates obtained' },
    { value: '2', unit: 'ha', label: 'industrial site in Sèmè-Podji' },
  ],
  timeline: {
    eyebrow: 'Key milestones',
    title: 'More than ten years in the field, an industrial ambition',
    refLabel: 'Reference',
    nowLabel: 'In progress',
    nextLabel: 'Next step',
    phases: [
      {
        range: '2013 – 2022',
        title: 'The foundations',
        items: [
          { date: '2013', title: 'SEDIS SARL is founded', text: 'The company is set up to supply, install and maintain medical devices in West Africa, working closely with hospitals, laboratories and procurement agencies.' },
          { date: '2013 – 2022', title: 'Ten years in the field, one finding', text: 'In BENIN, no injectable solution is manufactured locally. Market studies and meetings with health authorities, procurement agencies and European equipment manufacturers: the industrial project takes shape.' },
        ],
      },
      {
        range: '2023 – 2024',
        title: 'The authorisations',
        items: [
          { date: '2023', title: 'TILAMED PHARMA SA is born', text: 'SEDIS SARL becomes TILAMED PHARMA SA, a public limited company with a share capital of one billion CFA francs, focused on industrial production.' },
          { date: '16 May 2023', title: 'Favourable opinion from the ABRP', text: 'Meeting in committee, the BENIN Pharmaceutical Regulatory Agency issues a favourable opinion on the opening and operation of a pharmaceutical plant.' },
          { date: '30 June 2023', title: '', text: 'The installation and operation of the pharmaceutical plant are authorised.', comp: 0 },
          { date: '7 August 2024', title: '', text: 'The project is recognised as compliant with environmental and social requirements.', comp: 2 },
          { date: '9 September 2024', title: '', text: 'TILAMED Pharma\'s industrial activity is authorised.', comp: 1 },
          { date: '28 October 2024', title: '', text: 'The list of tax-exempt production equipment is set.', comp: 3 },
          { date: '28 November 2024', title: '', text: 'The project is governed by ministerial order and benefits from a tax and social-security exemption (regime B, 8 years) for its investment and operating phases.', comp: 4 },
        ],
      },
      {
        range: '2025 →',
        title: 'The site and the plant',
        items: [
          { date: '9 September 2025', title: 'The Sèmè-Podji site', text: 'The State of BENIN entrusts TILAMED PHARMA SA with a 2-hectare industrial site, under a long-term lease, in the Sèmè-Podji industrial zone on the Nigerian border.', ref: 'Long-term lease No. 2494/MEF/DC/SGM/ANDF/DAJuF/DGDE/S' },
          { date: 'Today', title: 'Building the plant', text: 'TILAMED Pharma is preparing its injectable-solutions production unit in the Sèmè-Podji special economic zone.', state: 'now' },
          { date: 'Tomorrow', title: 'Commissioning', text: 'Start of production and recruitment of the first teams.', state: 'next' },
        ],
      },
    ],
  },
  sites: {
    eyebrow: 'Our locations',
    title: 'Rooted in BENIN and the region',
    items: [
      { title: 'Production site', place: 'Sèmè-Podji · BENIN', text: '2 hectares (20,000 m²) in the Sèmè-Podji industrial zone, on the Nigerian border.' },
      { title: 'Head office', place: 'Cotonou · BENIN', text: 'An office building in Les Cocotiers, in the city centre, owned by TILAMED PHARMA SA.' },
      { title: 'Regional office', place: 'Ouagadougou · BURKINA FASO', text: 'A 1,000 m² office building in Dassasgho.' },
    ],
  },
  cta: {
    eyebrow: 'What\'s next',
    title: 'Follow the construction of the plant',
    text: 'Every new stage of the project is announced in our news. Discover the manufacturing process of our future plant today.',
  },
};
export default parcours;
