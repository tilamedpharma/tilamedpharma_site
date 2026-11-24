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
    { value: '15', unit: 'million', code: 'LVP', label: 'large-volume solutions per year' },
    { value: '35', unit: 'million', code: 'SVP', label: 'small-volume injectables per year' },
    { value: '2', unit: 'hectares', code: '', label: 'industrial site in Sèmè-Podji' },
    { value: '100–1000', unit: 'millilitres', code: '', label: 'infusion bottle formats' },
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
  lines: {
    "eyebrow": "Two production lines",
    "title": "Large and small volumes, two complementary lines",
    "intro": "The plant will have two separate lines, both open from start-up: one for infusion solutions, the other for injectables in ampoules.",
    "labels": {
      "container": "Container",
      "volumes": "Volumes",
      "capacity": "Planned capacity",
      "uses": "In hospital"
    },
    "start": "From start-up",
    "items": [
      {
        "code": "LVP",
        "name": "Large volumes",
        "sub": "Infusion solutions",
        "container": "Plastic bottles formed, filled and sealed on site",
        "volumes": "100 to 1000 mL",
        "capacity": "15 million a year",
        "uses": "Infusion, rehydration, dilution of medicines",
        "link": "soufflage-remplissage-scellage",
        "cta": "The blow-fill-seal process"
      },
      {
        "code": "SVP",
        "name": "Small volumes",
        "sub": "Injectables in ampoules",
        "container": "Single-dose ampoules",
        "volumes": "1 to 20 mL",
        "capacity": "35 million a year",
        "uses": "Direct injection: emergencies, maternity, severe malaria, routine care",
        "link": "medicaments",
        "cta": "Planned medicines"
      }
    ]
  },
  flows: {
    "eyebrow": "Movement through the plant",
    "title": "Four flows that never cross",
    "intro": "The plant follows the forward-flow principle: materials, products, people and waste each have their own path, so that what is clean never crosses what is not.",
    "zones": {
      "g": "General area",
      "c": "Clean area · grade C",
      "a": "Grade A protection"
    },
    "all": "All flows",
    "show": "Show the flow",
    "items": [
      {
        "key": "mat",
        "icon": "box",
        "title": "Raw materials",
        "steps": [
          {
            "t": "Receipt",
            "z": "g"
          },
          {
            "t": "Quarantine",
            "z": "g"
          },
          {
            "t": "Laboratory testing",
            "z": "g"
          },
          {
            "t": "Weighing",
            "z": "c"
          },
          {
            "t": "Preparation",
            "z": "c"
          }
        ]
      },
      {
        "key": "prod",
        "icon": "drop",
        "title": "Products",
        "steps": [
          {
            "t": "Filling",
            "z": "a"
          },
          {
            "t": "Sterilisation",
            "z": "g"
          },
          {
            "t": "100% inspection",
            "z": "g"
          },
          {
            "t": "Batch release",
            "z": "g"
          },
          {
            "t": "Shipping",
            "z": "g"
          }
        ]
      },
      {
        "key": "pers",
        "icon": "users",
        "title": "Staff",
        "steps": [
          {
            "t": "Changing room",
            "z": "g"
          },
          {
            "t": "Gowning airlock",
            "z": "c"
          },
          {
            "t": "Clean area",
            "z": "c"
          },
          {
            "t": "Exit airlock",
            "z": "g"
          }
        ]
      },
      {
        "key": "waste",
        "icon": "recycle",
        "title": "Waste",
        "steps": [
          {
            "t": "Collection",
            "z": "c"
          },
          {
            "t": "Dedicated exit",
            "z": "g"
          },
          {
            "t": "Sorting",
            "z": "g"
          },
          {
            "t": "Approved disposal",
            "z": "g"
          }
        ]
      }
    ],
    "note": "Schematic diagram. The layout of the buildings is described on the Sèmè-Podji site page.",
    "cta": "Site layout"
  },
  products: {
    "eyebrow": "Our future products",
    "title": "What will come off our lines",
    "intro": "Three ranges will be manufactured in Sèmè-Podji. They will enter production as the lines open and the approvals are granted.",
    "badge": "Not yet available",
    "items": [
      {
        "slug": "serums",
        "icon": "drop",
        "tag": "LVP line · start-up",
        "text": "Basic and specific solutions for infusion and rehydration.",
        "examples": [
          "Sodium chloride 0.9%",
          "Glucose 5%",
          "Ringer's lactate"
        ]
      },
      {
        "slug": "medicaments",
        "icon": "vial",
        "tag": "SVP line · three phases",
        "text": "Injectables in ampoules from start-up, then injectable antibiotics, vaccines and sera, oral solutions.",
        "examples": [
          "Oxytocin 10 IU",
          "Injectable quinine",
          "Ceftriaxone 1 g"
        ]
      },
      {
        "slug": "solutions-nutritionnelles",
        "icon": "flask",
        "tag": "LVP and SVP lines · start-up",
        "text": "Concentrated glucose and vitamins for calorie intake and the correction of deficiencies.",
        "examples": [
          "Glucose 10%",
          "Glucose 30%",
          "Vitamin B complex"
        ]
      }
    ],
    "more": "See the range",
    "cta": "Full catalogue",
    "doc": "Be told when they are available"
  },
  jobs: {
    "eyebrow": "Our teams",
    "title": "Jobs at the plant",
    "text": "Running a pharmaceutical plant takes specialist skills. We will recruit locally and train our teams, with a five-year skills transfer.",
    "value": "150",
    "unit": "direct jobs planned",
    "split": [
      {
        "v": 70,
        "l": "technical positions"
      },
      {
        "v": 30,
        "l": "administrative positions"
      }
    ],
    "familiesTitle": "Six job families",
    "cta1": "Discover our jobs",
    "cta2": "Speculative application"
  },
  faq: {
    "eyebrow": "Frequently asked questions",
    "title": "The plant in questions",
    "more": "Find out more",
    "items": [
      {
        "q": "When will the plant start up?",
        "a": "The plant is under construction. Production will start once the equipment has been installed and qualified, the first batches validated and the approvals obtained. We will announce each step in our news.",
        "link": "actualites"
      },
      {
        "q": "Can capacity be increased?",
        "a": "Yes. The plant is designed to increase its capacity, and new production is planned: injectable antibiotics, then vaccines, sera and oral solutions.",
        "link": "medicaments"
      },
      {
        "q": "Why plastic bottles rather than glass?",
        "a": "A plastic bottle is light and unbreakable, and it empties without letting air in, which limits the risk of contamination. It is made at the very moment of filling, with no human contact.",
        "link": "soufflage-remplissage-scellage"
      },
      {
        "q": "How will sterility be guaranteed?",
        "a": "Filling under grade A protection, sterilisation of every bottle in its final packaging, 100% inspection of the bottles and laboratory testing: no batch will be released without the approval of the responsible pharmacist.",
        "link": "sterilisation"
      },
      {
        "q": "Can the plant be visited?",
        "a": "Yes, by appointment. Visits are offered to partners, investors, authorities and healthcare professionals, in line with the access rules for clean areas.",
        "link": "contact"
      },
      {
        "q": "How can I become a supplier to the plant?",
        "a": "Raw materials, packaging, equipment, services: introduce your company from the Suppliers page. Our purchasing department will review your offer against our quality criteria.",
        "link": "fournisseurs"
      }
    ]
  },
  visit: {
    "badge": "Visits by appointment",
    "title": "Come and see the plant take shape",
    "text": "Investors, health authorities, technical partners or future customers: let us arrange a visit to the Sèmè-Podji site or a meeting with our team.",
    "cta1": "Request a visit",
    "cta2": "Become a distributor"
  },
};
export default usine;
