// Page « Notre usine » · français (langue de référence).
// Sources : pages Usine de l'ancien site (usine, site-seme-podji, traitement-eau… transfert-technologie) + capacités LVP/SVP validées.
const usine = {
  meta: {
    title: 'Notre usine · TILAMED Pharma, Sèmè-Podji (BÉNIN)',
    description: 'Une unité moderne de production de solutions injectables à Sèmè-Podji : traitement de l\'eau, soufflage-remplissage-scellage, stérilisation, contrôle à 100 % et laboratoire.',
  },
  hero: {
    title: 'Notre usine',
    lead: 'Une unité moderne et extensible de production de solutions injectables, en construction à Sèmè-Podji.',
    cta1: 'Le procédé en 7 étapes',
    cta2: 'Le site de Sèmè-Podji',
  },
  facts: [
    { value: '15', unit: 'millions', code: 'LVP', label: 'solutés de grand volume par an' },
    { value: '35', unit: 'millions', code: 'SVP', label: 'injectables de petit volume par an' },
    { value: '2', unit: 'hectares', code: '', label: 'de site industriel à Sèmè-Podji' },
    { value: '100–1000', unit: 'millilitres', code: '', label: 'formats de flacons de perfusion' },
  ],
  site: {
    eyebrow: 'Un site intégré',
    title: 'Toute la chaîne de fabrication réunie sur un même site',
    text: 'Notre usine réunira le traitement de l\'eau pharmaceutique, la préparation des solutions, la fabrication des flacons, la stérilisation, l\'inspection, le laboratoire de contrôle qualité et l\'entrepôt. Elle est conçue pour pouvoir augmenter sa capacité.',
    badge: 'Conçue pour augmenter sa capacité',
    imageAlt: 'Équipements en acier inoxydable dans une usine pharmaceutique',
  },
  process: {
    eyebrow: 'Le procédé',
    title: 'Sept étapes, de l\'eau à la livraison',
    intro: 'Chaque étape a sa page détaillée. Voici l\'essentiel de ce qui se passe entre l\'arrivée de l\'eau et le départ des cartons.',
    more: 'Découvrir l\'étape',
    docTitle: 'Besoin des données techniques ?',
    docText: 'Professionnels de santé et acheteurs : demandez les spécifications de nos produits et de notre procédé.',
    docCta: 'Demander la documentation',
    steps: [
      { title: 'Traitement de l\'eau', text: 'Une solution de perfusion contient plus de 90 % d\'eau. Nous produirons sur place deux qualités d\'eau pharmaceutique.', points: ['Double osmose inverse et électrodéionisation', 'Eau pour préparations injectables par distillation', 'Conductivité et température suivies en continu'] },
      { title: 'Préparation des solutions', text: 'Chaque solution est préparée par lots, selon une formule validée, dans des cuves en acier inoxydable.', points: ['Cuves équipées de cellules de pesée et d\'agitateurs', 'Contrôles en cours : concentration, pH, aspect', 'Filtration avant le remplissage'] },
      { title: 'Soufflage, remplissage, scellage', text: 'Une seule machine forme le flacon, le remplit et le scelle, sans aucun contact humain.', points: ['Flacon fabriqué au moment même du remplissage', 'Remplissage sous flux d\'air protégé', 'Changement de format en une demi-heure environ'] },
      { title: 'Stérilisation', text: 'Chaque flacon rempli est stérilisé dans son emballage final, en autoclave à aspersion d\'eau surchauffée.', points: ['Cycles validés et enregistrés pour chaque charge', 'Chauffe homogène qui protège le plastique', 'Séparation physique avant et après stérilisation'] },
      { title: 'Contrôle à 100 %', text: 'Aucun flacon ne quittera l\'usine sans avoir été contrôlé.', points: ['Test d\'étanchéité de chaque flacon', 'Inspection visuelle sous lumière', 'Rejet automatique des cartons non conformes'] },
      { title: 'Laboratoire de contrôle qualité', text: 'Matières premières, eaux et lots sont analysés avant toute libération.', points: ['Chromatographie (HPLC) et spectrométrie', 'Microbiologie : stérilité et endotoxines', 'Libération par le pharmacien responsable'] },
      { title: 'Conditionnement et livraison', text: 'Stockage selon les bonnes pratiques de distribution, puis livraison par notre propre service logistique.', points: ['Livraison selon les besoins réels des clients', 'Suivi des commandes et des stocks en temps réel', 'Export par transitaire ou livraison organisée'] },
    ],
  },
  explore: {
    eyebrow: 'Autour de la production',
    title: 'Ce qui rend la production possible',
    intro: 'Zones propres, services techniques, formation des équipes et le site lui-même : chaque sujet a sa page.',
    more: 'En savoir plus',
  },
  green: {
    badge: 'Green building',
    title: 'Une usine pensée pour limiter son impact',
    text: 'Eau, énergie, déchets : l\'usine est en cours de certification EDGE, le standard green building de l\'IFC (Groupe de la Banque mondiale).',
    cta: 'Notre démarche environnementale',
    imageAlt: 'Toitures industrielles équipées de panneaux solaires',
  },
  location: {
    eyebrow: 'Le site de Sèmè-Podji',
    title: 'Un emplacement stratégique, entre Cotonou et le NIGÉRIA',
    items: [
      'Dans la commune de Sèmè-Podji, département de l\'Ouémé, au sud du BÉNIN',
      'À proximité immédiate de la frontière de Kraké, principal passage vers le NIGÉRIA',
      'Près de Cotonou et de son port autonome',
      'Dans la zone industrielle de Sèmè-Podji',
    ],
    cta: 'Le site de Sèmè-Podji',
    directions: 'Itinéraire',
  },
  lines: {
    "eyebrow": "Deux lignes de production",
    "title": "Grands et petits volumes, deux lignes complémentaires",
    "intro": "L'usine comptera deux lignes distinctes, ouvertes dès le démarrage : l'une pour les solutés de perfusion, l'autre pour les injectables en ampoules.",
    "labels": {
      "container": "Contenant",
      "volumes": "Volumes",
      "capacity": "Capacité prévue",
      "uses": "À l'hôpital"
    },
    "start": "Dès le démarrage",
    "items": [
      {
        "code": "LVP",
        "name": "Grands volumes",
        "sub": "Solutés de perfusion",
        "container": "Flacons plastiques formés, remplis et scellés sur place",
        "volumes": "100 à 1000 mL",
        "capacity": "15 millions par an",
        "uses": "Perfusion, réhydratation, dilution de médicaments",
        "link": "soufflage-remplissage-scellage",
        "cta": "Le procédé de soufflage-remplissage"
      },
      {
        "code": "SVP",
        "name": "Petits volumes",
        "sub": "Injectables en ampoules",
        "container": "Ampoules unidoses",
        "volumes": "1 à 20 mL",
        "capacity": "35 millions par an",
        "uses": "Injection directe : urgences, maternité, paludisme grave, soins courants",
        "link": "medicaments",
        "cta": "Les médicaments prévus"
      }
    ]
  },
  flows: {
    "eyebrow": "Circulation dans l'usine",
    "title": "Quatre flux qui ne se croisent pas",
    "intro": "L'usine suit le principe de la marche en avant : matières, produits, personnes et déchets ont chacun leur chemin, pour que ce qui est propre ne croise jamais ce qui ne l'est pas.",
    "zones": {
      "g": "Zone générale",
      "c": "Zone propre · classe C",
      "a": "Protection de classe A"
    },
    "all": "Tous les flux",
    "show": "Afficher le flux",
    "items": [
      {
        "key": "mat",
        "icon": "box",
        "title": "Matières premières",
        "steps": [
          {
            "t": "Réception",
            "z": "g"
          },
          {
            "t": "Quarantaine",
            "z": "g"
          },
          {
            "t": "Analyse au laboratoire",
            "z": "g"
          },
          {
            "t": "Pesée",
            "z": "c"
          },
          {
            "t": "Préparation",
            "z": "c"
          }
        ]
      },
      {
        "key": "prod",
        "icon": "drop",
        "title": "Produits",
        "steps": [
          {
            "t": "Remplissage",
            "z": "a"
          },
          {
            "t": "Stérilisation",
            "z": "g"
          },
          {
            "t": "Inspection à 100 %",
            "z": "g"
          },
          {
            "t": "Libération du lot",
            "z": "g"
          },
          {
            "t": "Expédition",
            "z": "g"
          }
        ]
      },
      {
        "key": "pers",
        "icon": "users",
        "title": "Personnel",
        "steps": [
          {
            "t": "Vestiaire",
            "z": "g"
          },
          {
            "t": "Sas d'habillage",
            "z": "c"
          },
          {
            "t": "Zone propre",
            "z": "c"
          },
          {
            "t": "Sas de sortie",
            "z": "g"
          }
        ]
      },
      {
        "key": "waste",
        "icon": "recycle",
        "title": "Déchets",
        "steps": [
          {
            "t": "Collecte",
            "z": "c"
          },
          {
            "t": "Sortie dédiée",
            "z": "g"
          },
          {
            "t": "Tri",
            "z": "g"
          },
          {
            "t": "Élimination agréée",
            "z": "g"
          }
        ]
      }
    ],
    "note": "Schéma de principe. L'organisation des bâtiments est décrite sur la page du site de Sèmè-Podji.",
    "cta": "L'organisation du site"
  },
  products: {
    "eyebrow": "Nos futurs produits",
    "title": "Ce qui sortira de nos lignes",
    "intro": "Trois gammes seront fabriquées à Sèmè-Podji. Elles entreront en production au fil de l'ouverture des lignes et des autorisations.",
    "badge": "Non encore disponible",
    "items": [
      {
        "slug": "serums",
        "icon": "drop",
        "tag": "Ligne LVP · démarrage",
        "text": "Solutés de base et solutés spécifiques pour la perfusion et la réhydratation.",
        "examples": [
          "Chlorure de sodium 0,9 %",
          "Glucose 5 %",
          "Ringer lactate"
        ]
      },
      {
        "slug": "medicaments",
        "icon": "vial",
        "tag": "Ligne SVP · trois phases",
        "text": "Injectables en ampoules dès le démarrage, puis antibiotiques injectables, vaccins et sérums, solutions buvables.",
        "examples": [
          "Ocytocine 10 UI",
          "Quinine injectable",
          "Ceftriaxone 1 g"
        ]
      },
      {
        "slug": "solutions-nutritionnelles",
        "icon": "flask",
        "tag": "Lignes LVP et SVP · démarrage",
        "text": "Glucose concentré et vitamines pour l'apport calorique et la correction des carences.",
        "examples": [
          "Glucose 10 %",
          "Glucose 30 %",
          "Vitamines du complexe B"
        ]
      }
    ],
    "more": "Voir la gamme",
    "cta": "Tout le catalogue",
    "doc": "Être informé de la disponibilité"
  },
  jobs: {
    "eyebrow": "Les équipes",
    "title": "Les métiers de l'usine",
    "text": "Faire tourner une usine pharmaceutique demande des compétences pointues. Nous recruterons localement et formerons nos équipes, avec un transfert de compétences sur cinq ans.",
    "value": "150",
    "unit": "emplois directs prévus",
    "split": [
      {
        "v": 70,
        "l": "postes techniques"
      },
      {
        "v": 30,
        "l": "postes administratifs"
      }
    ],
    "familiesTitle": "Six familles de métiers",
    "cta1": "Découvrir nos métiers",
    "cta2": "Candidature spontanée"
  },
  faq: {
    "eyebrow": "Questions fréquentes",
    "title": "L'usine en questions",
    "more": "En savoir plus",
    "items": [
      {
        "q": "Quand l'usine démarrera-t-elle ?",
        "a": "L'usine est en construction. La production démarrera après l'installation et la qualification des équipements, la validation des premiers lots et l'obtention des autorisations. Nous annoncerons chaque étape dans nos actualités.",
        "link": "actualites"
      },
      {
        "q": "La capacité pourra-t-elle augmenter ?",
        "a": "Oui. L'usine est conçue pour augmenter sa capacité, et de nouvelles productions sont prévues : antibiotiques injectables, puis vaccins, sérums et solutions buvables.",
        "link": "medicaments"
      },
      {
        "q": "Pourquoi des flacons en plastique plutôt qu'en verre ?",
        "a": "Le flacon plastique est léger et incassable, et il se vide sans prise d'air, ce qui limite les risques de contamination. Il est fabriqué au moment même du remplissage, sans contact humain.",
        "link": "soufflage-remplissage-scellage"
      },
      {
        "q": "Comment la stérilité sera-t-elle garantie ?",
        "a": "Remplissage sous protection de classe A, stérilisation de chaque flacon dans son emballage final, contrôle de 100 % des flacons et analyses au laboratoire : aucun lot ne sera libéré sans l'accord du pharmacien responsable.",
        "link": "sterilisation"
      },
      {
        "q": "Peut-on visiter l'usine ?",
        "a": "Oui, sur rendez-vous. Les visites sont proposées aux partenaires, investisseurs, autorités et professionnels de santé, dans le respect des règles d'accès aux zones propres.",
        "link": "contact"
      },
      {
        "q": "Comment devenir fournisseur de l'usine ?",
        "a": "Matières premières, emballages, équipements, services : présentez votre entreprise depuis la page Fournisseurs. Notre service achats étudiera votre offre selon nos critères de qualité.",
        "link": "fournisseurs"
      }
    ]
  },
  visit: {
    "badge": "Visites sur rendez-vous",
    "title": "Venez voir l'usine prendre forme",
    "text": "Investisseurs, autorités de santé, partenaires techniques ou futurs clients : organisons une visite du site de Sèmè-Podji ou une rencontre avec notre équipe.",
    "cta1": "Demander une visite",
    "cta2": "Devenir distributeur"
  },
};
export default usine;
export type UsineDict = typeof usine;
