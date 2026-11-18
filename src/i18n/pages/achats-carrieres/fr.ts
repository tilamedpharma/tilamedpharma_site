// Rubriques Centrale d'achat et Carrières · français (référence).
// Source : pages centrale-achat, fournisseurs, chaine-distribution, carrieres, metiers, candidature de l'ancien site.
import type { Topic } from '../usine-plus/fr';

const pages: Record<string, Topic> = {
  'centrale-achat': {
    meta: { title: 'Notre centrale d\'achat · TILAMED Pharma', description: 'Approvisionnement, stockage et distribution en gros de produits de santé de qualité, à des prix accessibles à la population.' },
    lead: 'Approvisionnement, stockage et distribution en gros de produits de santé de qualité, à des prix accessibles à la population.',
    intro: '',
    facts: [
      { value: '1', unit: 'Md FCFA', label: 'de capital social, filiale Afrique de l\'Ouest basée à Cotonou' },
    ],
    blocks: [
      { kind: 'prose', title: 'Notre présentation', items: [
        'À côté de la fabrication de solutions injectables à Sèmè-Podji, la centrale d\'achat de TILAMED Pharma a pour mission l\'approvisionnement, le stockage et la distribution en gros de produits de santé, en veillant à ce qu\'ils soient vendus à des prix accessibles à la population.',
      ] },
      { kind: 'points', title: 'Nos missions', items: [
        'Approvisionner les formations sanitaires publiques et privées, les établissements pharmaceutiques et les services de santé en médicaments génériques, dispositifs médicaux, réactifs de laboratoire et autres produits de santé essentiels à la médecine humaine et animale.',
        'Constituer des stocks de réserve pour faire face à la hausse des prix et aux ruptures sur le marché.',
        'Assurer, sur une base contractuelle pour les programmes de santé, le stockage, la gestion et la distribution de médicaments et de matériel médical.',
        'Participer à la promotion des médicaments génériques.',
        'Procéder, selon les besoins de la politique de santé, à la vente en l\'état ou au reconditionnement de produits de santé humaine et animale.',
        'Développer notre expertise dans de nouveaux domaines : produits chimiques, intrants vétérinaires, réactifs et consommables de laboratoire.',
      ] },
      { kind: 'prose', title: 'Notre vision', items: [
        'Devenir une centrale d\'achat pharmaceutique de référence, bien gouvernée, résiliente et à portée sous-régionale, qui assure la disponibilité continue de produits de santé de qualité à des prix abordables pour la population.',
      ] },
    ],
    note: 'Vous souhaitez devenir fournisseur de TILAMED Pharma ? Consultez nos critères de sélection, puis écrivez à contact@tilamedpharma.com en indiquant « Achats » dans l\'objet.',
  },
  fournisseurs: {
    meta: { title: 'Nos fournisseurs · Centrale d\'achat · TILAMED Pharma', description: 'Critères de sélection, principes et engagements de durabilité : ce que nous attendons de nos fournisseurs, et ce qu\'ils peuvent attendre de nous.' },
    lead: 'Ce que nous attendons de nos fournisseurs, et ce qu\'ils peuvent attendre de nous.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'sequence', title: 'Critères de sélection des fournisseurs', text: 'Chaque fournisseur est évalué avant la première commande, puis réévalué régulièrement. Pour les matières qui entrent dans le produit, l\'évaluation comprend un questionnaire, l\'étude du dossier technique et, si nécessaire, un audit sur site.', items: [
        { title: 'Qualité', text: 'Un système de management de la qualité reconnu, des certificats d\'analyse pour chaque lot et, pour les matières pharmaceutiques, le respect des bonnes pratiques de fabrication.' },
        { title: 'Conformité réglementaire', text: 'Des produits et des documents conformes aux pharmacopées et aux exigences de l\'Agence béninoise de régulation pharmaceutique (ABRP).' },
        { title: 'Fiabilité', text: 'Des délais tenus, une capacité suffisante, une traçabilité complète et une information rapide en cas de changement ou d\'incident.' },
        { title: 'Coût total', text: 'Un prix juste, apprécié avec le transport, les délais, le stockage et le risque de rupture, et pas seulement le prix d\'achat.' },
        { title: 'Responsabilité', text: 'Le respect des droits humains, de la santé et de la sécurité au travail, de l\'environnement et des règles anticorruption.' },
      ] },
      { kind: 'cards', title: 'Nos principes', items: [
        { title: 'Équité et transparence', text: 'Les mêmes règles pour tous, des consultations claires et des décisions motivées.' },
        { title: 'Intégrité', text: 'Aucun cadeau ni avantage susceptible d\'influencer une décision d\'achat. Tout conflit d\'intérêts est déclaré.' },
        { title: 'Confidentialité', text: 'Les informations techniques et commerciales échangées sont protégées des deux côtés.' },
        { title: 'Partenariat', text: 'Des relations de long terme, des objectifs partagés et un dialogue régulier sur la performance.' },
      ] },
      { kind: 'points', title: 'Une chaîne d\'approvisionnement durable', text: 'Nous attendons de nos fournisseurs qu\'ils partagent nos engagements et qu\'ils les demandent à leur tour à leurs propres sous-traitants.', items: [
        'Des conditions de travail dignes : pas de travail des enfants ni de travail forcé, des salaires et des horaires conformes à la loi.',
        'La réduction des déchets, des emballages et des émissions, et une gestion responsable de l\'eau et de l\'énergie.',
        'Le choix de transports et de conditionnements qui limitent l\'impact environnemental.',
        'Le développement de fournisseurs locaux et régionaux, pour rapprocher la production des patients.',
        'La continuité d\'approvisionnement : des plans de secours en cas de crise ou de difficulté de transport.',
      ] },
    ],
    note: 'Pour proposer vos produits ou services, écrivez à contact@tilamedpharma.com en indiquant « Achats » dans l\'objet.',
  },
  'chaine-distribution': {
    meta: { title: 'Notre distribution · Centrale d\'achat · TILAMED Pharma', description: 'De l\'usine de Sèmè-Podji jusqu\'au patient : un circuit court, maîtrisé et traçable.' },
    lead: 'De l\'usine de Sèmè-Podji jusqu\'au patient : un circuit court, maîtrisé et traçable.',
    intro: 'Nos produits sont fabriqués au BÉNIN, à quelques heures de route des hôpitaux qui les utilisent. Voici le chemin qu\'ils suivent, de l\'usine jusqu\'au patient.',
    facts: [],
    blocks: [
      { kind: 'sequence', title: 'Les étapes, une à une', items: [
        { title: 'L\'usine de Sèmè-Podji', text: 'Chaque lot est fabriqué, contrôlé par notre laboratoire et libéré par le pharmacien responsable.' },
        { title: 'Notre entrepôt', text: 'Les produits finis sont stockés dans des conditions maîtrisées, avec un suivi par lot et par date de péremption.' },
        { title: 'Centrales d\'achat et distributeurs', text: 'Nous livrons les centrales d\'achat publiques, les organisations de santé et nos distributeurs agréés au BÉNIN et dans la sous-région.' },
        { title: 'Hôpitaux, cliniques et pharmacies', text: 'Les établissements de santé reçoivent des produits disponibles plus vite, en quantité adaptée à leur consommation réelle.' },
        { title: 'Les patients', text: 'Des solutions de perfusion de qualité, disponibles près de chez eux, à un prix accessible.' },
      ] },
    ],
    note: 'Près de la moitié de la population africaine n\'a pas un accès régulier aux médicaments essentiels.',
  },
  carrieres: {
    meta: { title: 'Travailler chez TILAMED · Carrières · TILAMED Pharma', description: '150 emplois directs, 70 % de postes techniques et 5 ans de transfert de compétences : rejoignez la première industrie de solutions injectables du BÉNIN.' },
    lead: 'Rejoignez la première industrie de solutions injectables du BÉNIN.',
    intro: '',
    facts: [
      { value: '150', unit: '', label: 'emplois directs' },
      { value: '70', unit: '%', label: 'de postes techniques' },
      { value: '30', unit: '%', label: 'de postes administratifs' },
      { value: '5', unit: 'ans', label: 'de transfert de compétences' },
    ],
    blocks: [
      { kind: 'prose', title: 'Une équipe en construction', items: [
        'Nous construisons une équipe de professionnels qualifiés, formés à la fabrication industrielle et engagés pour la qualité.',
        'Le BÉNIN dispose d\'une main-d\'œuvre jeune, dynamique et qualifiée : nous recrutons et formons en priorité localement.',
      ] },
      { kind: 'points', title: 'Un employeur ouvert à toutes et à tous', items: [
        'Des processus de recrutement ouverts et équitables, sur la seule base des compétences.',
        'Des postes ouverts aux personnes en situation de handicap.',
        'Un partage équitable des responsabilités entre les femmes et les hommes, à tous les niveaux.',
        'Une formation accessible à toutes et à tous, avec cinq ans d\'accompagnement par les fabricants des équipements.',
      ] },
    ],
    note: 'Aucune offre d\'emploi n\'est publiée pour le moment. Vous pouvez déposer une candidature spontanée.',
  },
  metiers: {
    meta: { title: 'Nos métiers · Carrières · TILAMED Pharma', description: 'Production, assurance qualité, laboratoire, maintenance, logistique, fonctions support : les métiers d\'une usine pharmaceutique.' },
    lead: 'Production, qualité, maintenance, logistique, fonctions support : découvrez les métiers d\'une usine pharmaceutique.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'cards', title: 'Six familles de métiers', items: [
        { title: 'Production', text: 'Opérateurs de ligne, conducteurs de machines, chefs d\'équipe.' },
        { title: 'Assurance qualité', text: 'Pharmaciens, responsables qualité, spécialistes de la validation.' },
        { title: 'Laboratoire', text: 'Analystes en physico-chimie et en microbiologie.' },
        { title: 'Maintenance et utilités', text: 'Techniciens en mécanique, électricité, automatisme et froid.' },
        { title: 'Logistique', text: 'Magasiniers, gestionnaires de stocks, chauffeurs-livreurs.' },
        { title: 'Fonctions support', text: 'Finance, ressources humaines, achats, ventes, informatique.' },
      ] },
      { kind: 'points', title: 'L\'équipe de direction', items: [
        'Directeur général',
        'Pharmacien responsable',
        'Directeur administratif, financier et des ressources humaines',
        'Directeur commercial et marketing, avec délégués médicaux',
        'Responsable des achats',
        'Chef comptable',
      ] },
    ],
    note: '',
  },
};

const cand = {
  meta: { title: 'Candidature spontanée · Carrières · TILAMED Pharma', description: 'Présentez-vous : TILAMED Pharma étudiera votre profil dès l\'ouverture de ses recrutements.' },
  lead: 'Présentez-vous : nous étudierons votre profil dès l\'ouverture de nos recrutements.',
  intro: 'Nous examinons chaque candidature sur la seule base des compétences. Les candidatures sont ouvertes à toutes et à tous.',
  formTitle: 'Votre candidature',
  fields: {
    name: 'Nom et prénom', email: 'Adresse e-mail', phone: 'Téléphone', country: 'Pays de résidence',
    family: 'Métier souhaité', level: 'Niveau d\'études', experience: 'Années d\'expérience',
    cv: 'Votre CV', cvHint: 'PDF ou Word, 5 Mo maximum.', message: 'Votre motivation',
    consent: 'J\'accepte que TILAMED Pharma conserve ces informations pour étudier ma candidature.',
    submit: 'Envoyer ma candidature', required: 'Champ obligatoire', select: 'Choisir…',
  },
  families: ['Production', 'Assurance qualité', 'Laboratoire', 'Maintenance et utilités', 'Logistique', 'Fonctions support', 'Autre'],
  levels: ['Brevet ou CAP', 'Baccalauréat', 'Bac + 2 (BTS, DUT)', 'Licence', 'Master ou ingénieur', 'Doctorat ou docteur en pharmacie'],
  experience: ['Moins d\'un an', '1 à 3 ans', '3 à 5 ans', '5 à 10 ans', 'Plus de 10 ans'],
  asideTitle: 'Bon à savoir',
  asideItems: ['Aucune offre n\'est publiée pour le moment', 'Votre profil sera étudié dès l\'ouverture des recrutements', 'Postes techniques et administratifs', 'Formation assurée par les fabricants des équipements'],
};

const achatsCarrieres = { pages, cand };
export default achatsCarrieres;
export type AchatsCarrieresDict = typeof achatsCarrieres;
