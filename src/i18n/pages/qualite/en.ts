import type { QualiteDict } from './fr';

const qualite: QualiteDict = {
  pages: {
    qualite: {
      meta: { title: 'Quality and compliance · TILAMED Pharma', description: 'WHO GMP, favourable opinion from ABRP, ISO 9001 and 14001 targeted, good distribution practice: our pharmaceutical quality system.' },
      lead: 'Quality is built at every step, from raw material to patient.',
      intro: '',
      facts: [
        { value: 'GMP', unit: '', label: 'plant designed to WHO good manufacturing practice' },
        { value: '6', unit: '', label: 'approvals and authorisations obtained from the Beninese authorities' },
      ],
      blocks: [
        { kind: 'cards', title: 'Our standards', items: [
          { title: 'WHO GMP', text: 'A plant designed and operated to WHO good manufacturing practice.' },
          { title: 'ISO 9001 and ISO 14001', text: 'Certifications targeted for quality and the environment.' },
          { title: 'ABRP', text: 'Favourable opinion of 16 May 2023 on the authorisation to open and operate.' },
          { title: 'GDP', text: 'Good distribution practice for our warehouses and deliveries.' },
        ] },
        { kind: 'points', title: 'A pharmaceutical quality system', items: [
          'Written procedures, staff training and records at every step.',
          'Equipment qualification and process validation.',
          'Testing of raw materials, packaging components and finished products.',
          'Release of every batch by the responsible pharmacist.',
          'Management of deviations, complaints and recalls.',
        ] },
      ],
      note: '',
    },
    'bpf-oms': {
      meta: { title: 'WHO GMP · Quality · TILAMED Pharma', description: 'WHO good manufacturing practice: personnel, premises, documentation, production, quality control and self-inspection.' },
      lead: 'The international rules that guarantee consistent quality, batch after batch.',
      intro: 'The World Health Organization\'s good manufacturing practice (GMP) sets the minimum requirements a manufacturer must meet so that its products are always of consistent quality, batch after batch, for their intended use.',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Six pillars', items: [
          { title: 'Personnel', text: 'Qualified, trained and gowned according to each area.' },
          { title: 'Premises and equipment', text: 'Designed, qualified and maintained to prevent any contamination.' },
          { title: 'Documentation', text: 'Every operation is described, performed and recorded.' },
          { title: 'Production', text: 'Validated, controlled and monitored processes.' },
          { title: 'Quality control', text: 'Testing independent of production.' },
          { title: 'Self-inspection', text: 'Regular internal audits to keep improving.' },
        ] },
      ],
      note: 'Our plant is built to WHO GMP standards. Certifications and authorisations will be presented on this site as they are obtained.',
    },
    agrements: {
      meta: { title: 'Approvals and authorisations · Quality · TILAMED Pharma', description: 'Authorisations from ABRP and Beninese ministries, environmental and technical certificates, ministerial order: TILAMED PHARMA SA\'s approvals.' },
      lead: 'In BENIN, pharmaceutical products fall under the BENIN Pharmaceutical Regulatory Agency (ABRP).',
      intro: '',
      facts: [
        { value: '6', unit: '', label: 'approvals and authorisations obtained' },
        { value: '2023', unit: '', label: 'favourable opinion from ABRP, committee of 16 May 2023' },
      ],
      blocks: [
        { kind: 'points', title: 'The role of ABRP', items: [
          'Registration of medicines and health products.',
          'Inspection of premises: good manufacturing, distribution and pharmacy practice.',
          'Quality control of medicines before they are placed on the market.',
        ] },
        { kind: 'points', title: 'What we submit for each product', text: 'Makers of injectable solutions provide ABRP with all the characteristics of the components used, for the bottle as well as for the formula of the solution. These requirements aim to:', items: [
          'guarantee the quality of each component;',
          'allow full traceability of the product and its container;',
          'guarantee the integrity of the solution throughout its period of use;',
          'ensure final packaging that resists breakage and damage.',
        ] },
      ],
      note: '',
    },
    'controle-qualite': {
      meta: { title: 'Quality control · Quality · TILAMED Pharma', description: 'From receipt of raw materials to release by the responsible pharmacist: how every batch is tested.' },
      lead: 'A batch is released only after all its results have been checked.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'sequence', title: 'From testing to release', items: [
          { title: 'Receipt', text: 'Raw materials and packaging components are quarantined, sampled and tested.' },
          { title: 'In-process', text: 'Checks on concentration, volume, tightness and appearance.' },
          { title: 'Finished product', text: 'Physico-chemical and microbiological testing of every batch.' },
          { title: 'Batch record review', text: 'Every manufacturing record is checked.' },
          { title: 'Release', text: 'Decision by the responsible pharmacist.' },
        ] },
      ],
      note: 'Samples of every batch are retained to allow later testing.',
    },
    tracabilite: {
      meta: { title: 'Traceability · Quality · TILAMED Pharma', description: 'Batch number, shipment records and recall procedure: a short supply chain against falsified medicines.' },
      lead: 'A short chain, from plant to patient, for safe medicines.',
      intro: 'Falsified medicines and the illicit market put lives at risk in West Africa. Local production shortens the supply chain and makes it easier to control.',
      facts: [],
      blocks: [
        { kind: 'points', title: 'Every batch tracked', items: [
          'Batch number and expiry date on every bottle and every carton.',
          'Shipments recorded by customer and by batch.',
          'Tested recall procedure, in liaison with the authorities.',
        ] },
      ],
      note: 'BENIN is strongly committed against fake medicines: participation in INTERPOL\'s international operation PANGEA, ratification of the Council of Europe\'s MEDICRIME convention and a new law on pharmaceutical activities in 2021.',
    },
    certifications: {
      meta: { title: 'Certifications · Quality · TILAMED Pharma', description: 'WHO GMP, ABRP, ISO 9001, ISO 14001, GDP and EDGE: our certification goals for quality and the environment.' },
      lead: 'Our certification goals for quality and the environment.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'table', title: 'Where we stand', head: ['Standard', 'Scope', 'Status'], rows: [
          ['WHO GMP', 'Pharmaceutical manufacturing', 'Plant built to these standards'],
          ['ABRP', 'Opening and operating a pharmaceutical plant', 'Favourable opinion, committee of 16 May 2023'],
          ['ISO 9001', 'Quality management', 'Certification targeted'],
          ['ISO 14001', 'Environmental management', 'Certification targeted'],
          ['GDP', 'Pharmaceutical distribution', 'Applied to our warehouses'],
          ['EDGE (IFC)', 'Green building', 'Certification in progress'],
        ] },
      ],
      note: 'This table will be updated with each new certification obtained.',
    },
  },
  pv: {
    meta: { title: 'Pharmacovigilance · Quality · TILAMED Pharma', description: 'Report to TILAMED Pharma any adverse effect or quality problem related to one of our products.' },
    lead: 'Report to us any adverse effect or quality problem related to one of our products.',
    emergency: 'In a medical emergency, contact a doctor or the emergency services immediately.',
    intro: 'Pharmacovigilance monitors the safety of medicines once they are on the market. Every report is handled confidentially and, if necessary, passed on to the health authorities.',
    formTitle: 'Make a report',
    fields: {
      reporter: 'You are', name: 'Full name', email: 'Email address', phone: 'Phone', country: 'Country',
      type: 'Type of report', product: 'Product concerned', batch: 'Batch number', expiry: 'Expiry date',
      date: 'Date of the event', description: 'Description of the effect or problem', descriptionHint: 'What happened? When? What action was taken?',
      consent: 'I agree that this information will be handled confidentially and, if necessary, passed on to the health authorities.',
      submit: 'Send the report', required: 'Required field', select: 'Choose…',
    },
    reporters: ['Patient or relative', 'Healthcare professional', 'Pharmacist', 'Distributor', 'Other'],
    types: ['Adverse effect', 'Product quality problem', 'Medication error'],
    asideTitle: 'After your report',
    asideItems: ['Acknowledgement by our responsible pharmacist', 'Confidential analysis of the report', 'Transmission to the health authorities if necessary', 'Follow-up with you if more information is useful'],
  },
};
export default qualite;
