import type { EtapesDict } from './fr';

const etapes: EtapesDict = {
  ui: {
    step: 'Step',
    of: 'of',
    rail: 'The 7 steps of the process',
    figures: 'Key figures',
    prev: 'Previous step',
    next: 'Next step',
    overview: 'Plant overview',
    backTo: 'Our plant',
    others: 'More in the Plant section',
  },
  steps: {
    'traitement-eau': {
      meta: { title: 'Water treatment · Our plant · TILAMED Pharma', description: 'Purified water and water for injection produced on site in Sèmè-Podji: reverse osmosis, electrodeionisation, distillation and a hot stainless-steel loop.' },
      lead: 'Water is the first ingredient of an injectable solution. Its purity is monitored continuously.',
      intro: 'An infusion solution is more than 90% water. We produce two grades of pharmaceutical water on site, meeting pharmacopoeia requirements.',
      facts: [
        { value: '> 90', unit: '%', label: 'water in an infusion solution' },
        { value: '2', unit: '', label: 'grades of pharmaceutical water produced on site' },
      ],
      block: { kind: 'sequence', title: 'The treatment steps', items: [
        { title: 'Pre-treatment', text: 'Filtration and softening of the feed water.' },
        { title: 'Purified water', text: 'Double reverse osmosis followed by electrodeionisation (EDI).' },
        { title: 'Water for injection (WFI)', text: 'Distillation in a multi-column still, which removes endotoxins.' },
        { title: 'Pure steam', text: 'A dedicated generator produces the steam used to sterilise equipment.' },
        { title: 'Storage and loop', text: 'WFI is stored and circulated in a hot stainless-steel loop so it stays sterile up to the point of use.' },
      ] },
      note: 'Water conductivity and temperature are measured continuously, with recording and alarms.',
    },
    'preparation-solutions': {
      meta: { title: 'Solution preparation · Our plant · TILAMED Pharma', description: 'Batch preparation to a validated formula in stainless-steel tanks: weighing, in-process checks and filtration.' },
      lead: 'Precise mixing of active ingredients with water for injection.',
      intro: 'Each solution is prepared in batches to a validated formula. Raw materials are weighed and added to water for injection in stainless-steel tanks.',
      facts: [
        { value: '2', unit: '', label: 'stainless-steel preparation tanks' },
      ],
      block: { kind: 'points', title: 'Equipment and checks', items: [
        'Two preparation tanks with load cells and magnetic stirrers.',
        'In-process checks: concentration, pH, appearance.',
        'Filtration of the solution before it is transferred to the filling line.',
        'Cleaning and sterilisation of tanks and lines between batches.',
      ] },
      note: '',
    },
    'soufflage-remplissage-scellage': {
      meta: { title: 'Blow, fill, seal · Our plant · TILAMED Pharma', description: 'Blow-fill-seal technology: one machine forms the bottle, fills it and seals it, with no human contact. Formats from 100 to 1000 ml.' },
      lead: 'One machine forms the bottle, fills it and seals it, with no human contact.',
      intro: 'Blow-fill-seal (BFS) technology is today one of the safest ways to make sterile solutions. The plastic bottle is made at the very moment it is filled.',
      facts: [
        { value: '100', unit: 'ml', label: 'Antibiotics, pain relief' },
        { value: '250', unit: 'ml', label: 'Basic fluids' },
        { value: '500', unit: 'ml', label: 'Most-used size' },
        { value: '1000', unit: 'ml', label: 'Rehydration' },
      ],
      block: { kind: 'sequence', title: 'A five-stage cycle', items: [
        { title: 'Extrusion', text: 'Pharmaceutical-grade polymer is melted and extruded into a tube.' },
        { title: 'Blowing', text: 'The mould closes and the bottle is formed with sterile filtered air.' },
        { title: 'Filling', text: 'The solution is dosed precisely into the bottle under protected airflow.' },
        { title: 'Sealing', text: 'The bottle head is formed and hermetically sealed inside the mould.' },
        { title: 'Release', text: 'The bottles leave the machine closed, ready for sterilisation.' },
      ] },
      note: 'Changing bottle size takes about half an hour, so we can respond quickly to customer needs.',
    },
    sterilisation: {
      meta: { title: 'Sterilisation · Our plant · TILAMED Pharma', description: 'Terminal sterilisation of bottles in their final container, in a superheated water-spray autoclave, with validated and recorded cycles.' },
      lead: 'Every filled bottle is sterilised in its final container.',
      intro: 'After sealing, the bottles are terminally sterilised in a superheated water-spray autoclave. This method heats the bottles evenly while protecting the plastic.',
      facts: [],
      block: { kind: 'points', title: 'Controlled sterilisation', items: [
        'Validated cycles: time, temperature and pressure recorded for every load.',
        'Indicators and checks confirm that each cycle is effective.',
        'Product-contact parts in pharmaceutical-grade stainless steel.',
        'Physical separation between bottles before and after sterilisation.',
      ] },
      note: '',
    },
    inspection: {
      meta: { title: '100% inspection · Our plant · TILAMED Pharma', description: 'Drying, leak test, visual inspection, boxing and automatic rejection: no bottle leaves the plant without being checked.' },
      lead: 'No bottle leaves the plant without being checked.',
      intro: '',
      facts: [
        { value: '100', unit: '%', label: 'of bottles checked before leaving the plant' },
      ],
      block: { kind: 'sequence', title: 'From drying to the carton', items: [
        { title: 'Drying', text: 'Bottles are dried as they leave the autoclave.' },
        { title: 'Leak test', text: 'Every bottle is tested to detect the smallest leak.' },
        { title: 'Visual inspection', text: 'The solution and the bottle are checked under light.' },
        { title: 'Overwrapping and boxing', text: 'Leaflet and certificate inserted, carton closed and labelled.' },
        { title: 'Automatic rejection', text: 'Cartons with the wrong weight or label are removed automatically.' },
      ] },
      note: '',
    },
    laboratoire: {
      meta: { title: 'Quality control laboratory · Our plant · TILAMED Pharma', description: 'Chromatography, spectrometry, stability chambers and microbiology: every batch is tested and released by the responsible pharmacist.' },
      lead: 'Our laboratory tests raw materials, water and every batch before release.',
      intro: '',
      facts: [],
      block: { kind: 'cards', title: 'Our analytical resources', items: [
        { title: 'Chromatography (HPLC)', text: 'Identification and assay of active ingredients.' },
        { title: 'Spectrometry', text: 'Atomic absorption, UV and infrared for identity and purity.' },
        { title: 'Stability chambers', text: 'Stability studies to confirm shelf life.' },
        { title: 'Microbiology', text: 'Sterility, endotoxins and environmental monitoring.' },
      ] },
      note: 'No batch is released to the market without the decision of the responsible pharmacist, based on laboratory results and review of the batch record.',
    },
    'conditionnement-logistique': {
      meta: { title: 'Packaging and delivery · Our plant · TILAMED Pharma', description: 'Storage to good distribution practice and delivery by our own logistics team, in BENIN and for export.' },
      lead: 'Products delivered to the right place, at the right time, in the right condition.',
      intro: 'Finished products are stored in our warehouse to good distribution practice and delivered to our customers in BENIN by our own logistics team.',
      facts: [],
      block: { kind: 'points', title: 'Our logistics service', items: [
        'Deliveries matched to real customer needs, without having to stock several months of product.',
        'Real-time tracking of orders and stock with integrated management software.',
        'For export, collection by our customers\' freight forwarders or delivery arranged by us.',
      ] },
      note: '',
    },
  },
};
export default etapes;
