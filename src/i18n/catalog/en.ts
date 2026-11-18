import type { CatalogDict } from './fr';

const cat: CatalogDict = {
  ui: {
    search: 'Search for a medicine, a solution or a device…',
    searchLabel: 'Search the catalogue',
    all: 'All',
    results: (n: number) => (n === 1 ? '1 product' : `${n} products`),
    none: 'No product matches your search.',
    noneHint: 'Try another word: product name, use (fever, malaria…) or category.',
    reset: 'Clear search',
    formats: 'Presentations',
    route: 'Route',
    line: 'Production line',
    pack: 'Packaging',
    refs: 'references',
    request: 'Request information',
    legal: ['TILAMED products in preparation · not yet for sale.', 'Images are not contractual.', 'Information intended for healthcare professionals.'],
  },
  groups: {
    serum: { label: 'Infusion fluids', blurb: 'Basic infusion fluids and specific solutions.' },
    medicines: { label: 'Medicines', blurb: 'Ampoule injectables, antibiotics, vaccines and sera, oral forms.' },
    nutrition: { label: 'Nutritional solutions', blurb: 'Concentrated glucose, injectable and oral vitamins.' },
    devices: { label: 'Medical devices', blurb: 'Diagnosis, surgery, sterilisation and equipment.' },
    vet: { label: 'Animal health', blurb: 'Food, parasite control and care for dogs and cats.' },
  },
  status: {
    iv: { badge: 'Planned range', note: 'Made by TILAMED · planned range, not yet for sale' },
    liquids: { badge: 'Upcoming', note: 'Made by TILAMED · upcoming range, subject to authorisation' },
    devices: { badge: 'Distributed', note: 'Distribution · contact us' },
    vet: { badge: 'Coming soon', note: 'TILAMED veterinary range · coming soon' },
  },
  cats: {
    standard: 'Basic fluids', 'serum-special': 'Specific solutions', specific: 'Medicated solutions', svp: 'Ampoule injectables',
    antibiotic: 'Injectable antibiotics', vaccines: 'Vaccines and sera', oral: 'Oral liquids', vitamins: 'Vitamins and rehydration',
    nutrition: 'Parenteral nutrition', diagnostic: 'Diagnosis and examination', surgery: 'Surgical kits', 'surg-cut': 'Cutting instruments',
    'surg-grasp': 'Forceps and clamps', 'surg-suture': 'Suturing and closure', 'surg-expose': 'Retractors and examination', sterilisation: 'Sterilisation',
    furniture: 'Furniture and equipment', consumables: 'Consumables', 'vet-food-dog': 'Dog food', 'vet-food-cat': 'Cat food',
    'vet-parasite': 'Parasite control', 'vet-care': 'Care and medicines',
  },
  lines: {
    svp: 'Small-volume injectables (ampoules)', lvp: 'Infusion solutions (large volumes)', atb: 'Injectable antibiotics',
    cold: 'Vaccines and sera · cold chain', oral: 'Oral solutions and suspensions',
  },
  packs: {
    a10: 'Pack of 10 ampoules', a10x5: 'Pack of 10 ampoules × 5', a10x10: 'Pack of 10 × 10 ampoules', b20: 'Pack of 20 bottles',
    c12: 'Carton of 12 bottles', c24: 'Carton of 24 bottles', b50: 'Pack of 50 vials', b10: 'Pack of 10 bottles',
    s10: 'Pack of 10 prefilled syringes', uni: 'Single dose',
  },
  phases: { 1: 'Phase 1 · plant start-up', 2: 'Phase 2 · injectable antibiotics', 3: 'Phase 3 · new ranges' },
  items: {},
};
export default cat;
