// Rubrique Qualité · français (référence). Source : pages qualite, bpf-oms, reglementation, controle-qualite, tracabilite,
// certifications et pharmacovigilance de l'ancien site. La liste des agréments vient de l'accueil (t.compliance.items).
import type { Topic } from '../usine-plus/fr';

const pages: Record<string, Topic> = {
  qualite: {
    meta: { title: 'Qualité et conformité · TILAMED Pharma', description: 'BPF de l\'OMS, avis favorable de l\'ABRP, ISO 9001 et 14001 visées, bonnes pratiques de distribution : notre système qualité pharmaceutique.' },
    lead: 'La qualité se construit à chaque étape, de la matière première au patient.',
    intro: '',
    facts: [
      { value: 'BPF', unit: '', label: 'usine conçue selon les bonnes pratiques de fabrication de l\'OMS' },
      { value: '6', unit: '', label: 'agréments et autorisations obtenus auprès des autorités béninoises' },
    ],
    blocks: [
      { kind: 'cards', title: 'Nos référentiels', items: [
        { title: 'BPF de l\'OMS', text: 'Une usine conçue et exploitée selon les bonnes pratiques de fabrication de l\'OMS.' },
        { title: 'ISO 9001 et ISO 14001', text: 'Certifications visées pour la qualité et l\'environnement.' },
        { title: 'ABRP', text: 'Avis favorable du 16 mai 2023 à l\'autorisation d\'ouverture et d\'exploitation.' },
        { title: 'BPD', text: 'Bonnes pratiques de distribution pour nos entrepôts et nos livraisons.' },
      ] },
      { kind: 'points', title: 'Un système qualité pharmaceutique', items: [
        'Procédures écrites, formation du personnel et enregistrements à chaque étape.',
        'Qualification des équipements et validation des procédés.',
        'Contrôle des matières premières, des articles de conditionnement et des produits finis.',
        'Libération de chaque lot par le pharmacien responsable.',
        'Gestion des écarts, des réclamations et des rappels.',
      ] },
    ],
    note: '',
  },
  'bpf-oms': {
    meta: { title: 'BPF de l\'OMS · Qualité · TILAMED Pharma', description: 'Les bonnes pratiques de fabrication de l\'OMS : personnel, locaux, documentation, production, contrôle qualité et auto-inspection.' },
    lead: 'Les règles internationales qui garantissent une qualité constante, lot après lot.',
    intro: 'Les bonnes pratiques de fabrication (BPF, en anglais GMP) de l\'Organisation mondiale de la santé fixent les exigences minimales qu\'un fabricant doit respecter pour que ses produits soient toujours de qualité, d\'un lot à l\'autre, pour l\'usage auquel ils sont destinés.',
    facts: [],
    blocks: [
      { kind: 'cards', title: 'Six piliers', items: [
        { title: 'Personnel', text: 'Qualifié, formé et habillé selon les zones.' },
        { title: 'Locaux et équipements', text: 'Conçus, qualifiés et entretenus pour éviter toute contamination.' },
        { title: 'Documentation', text: 'Chaque opération est décrite, réalisée et enregistrée.' },
        { title: 'Production', text: 'Des procédés validés, maîtrisés et contrôlés.' },
        { title: 'Contrôle qualité', text: 'Des analyses indépendantes de la production.' },
        { title: 'Auto-inspection', text: 'Des audits internes réguliers pour progresser.' },
      ] },
    ],
    note: 'Notre usine est construite selon les normes BPF de l\'OMS. Les certifications et autorisations seront présentées sur ce site à mesure qu\'elles seront obtenues.',
  },
  agrements: {
    meta: { title: 'Agréments et autorisations · Qualité · TILAMED Pharma', description: 'Autorisations de l\'ABRP et des ministères béninois, certificats environnemental et technique, arrêté ministériel : les agréments de TILAMED PHARMA SA.' },
    lead: 'Au BÉNIN, les produits pharmaceutiques relèvent de l\'Agence béninoise de régulation pharmaceutique (ABRP).',
    intro: '',
    facts: [
      { value: '6', unit: '', label: 'agréments et autorisations obtenus' },
      { value: '2023', unit: '', label: 'avis favorable de l\'ABRP, commission du 16 mai 2023' },
    ],
    blocks: [
      { kind: 'points', title: 'Le rôle de l\'ABRP', items: [
        'Enregistrement des médicaments et produits de santé.',
        'Inspection des locaux : bonnes pratiques de fabrication, de distribution et de pharmacie.',
        'Contrôle de la qualité des médicaments avant leur mise sur le marché.',
      ] },
      { kind: 'points', title: 'Ce que nous transmettons pour chaque produit', text: 'Les fabricants de solutions injectables communiquent à l\'ABRP toutes les caractéristiques des composants utilisés, pour le flacon comme pour la formule de la solution. Ces exigences visent à :', items: [
        'garantir la qualité de chaque composant ;',
        'permettre la traçabilité complète du produit et de son contenant ;',
        'garantir l\'intégrité de la solution pendant toute sa durée d\'utilisation ;',
        'assurer un emballage final résistant à la casse et à la détérioration.',
      ] },
    ],
    note: '',
  },
  'controle-qualite': {
    meta: { title: 'Contrôle qualité · Qualité · TILAMED Pharma', description: 'De la réception des matières premières à la libération par le pharmacien responsable : comment chaque lot est contrôlé.' },
    lead: 'Un lot n\'est libéré qu\'après la vérification de tous ses résultats.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'sequence', title: 'Du contrôle à la libération', items: [
        { title: 'Réception', text: 'Les matières premières et articles de conditionnement sont mis en quarantaine, échantillonnés et analysés.' },
        { title: 'En cours de fabrication', text: 'Contrôles de concentration, de volume, d\'étanchéité et d\'aspect.' },
        { title: 'Produit fini', text: 'Analyses physico-chimiques et microbiologiques de chaque lot.' },
        { title: 'Revue du dossier de lot', text: 'Vérification de chaque enregistrement de fabrication.' },
        { title: 'Libération', text: 'Décision du pharmacien responsable.' },
      ] },
    ],
    note: 'Des échantillons de chaque lot sont conservés pour permettre des contrôles ultérieurs.',
  },
  tracabilite: {
    meta: { title: 'Traçabilité · Qualité · TILAMED Pharma', description: 'Numéro de lot, enregistrement des expéditions et procédure de rappel : un circuit court contre les médicaments falsifiés.' },
    lead: 'Un circuit court, de l\'usine au patient, pour des médicaments sûrs.',
    intro: 'Les médicaments falsifiés et le marché illicite mettent des vies en danger en Afrique de l\'Ouest. La production locale raccourcit la chaîne d\'approvisionnement et la rend plus facile à contrôler.',
    facts: [],
    blocks: [
      { kind: 'points', title: 'Chaque lot suivi', items: [
        'Numéro de lot et date de péremption sur chaque flacon et chaque carton.',
        'Enregistrement des expéditions par client et par lot.',
        'Procédure de rappel testée, en lien avec les autorités.',
      ] },
    ],
    note: 'Le BÉNIN s\'est fortement engagé contre les faux médicaments : participation à l\'opération internationale PANGEA d\'INTERPOL, ratification de la convention MEDICRIME du Conseil de l\'Europe et nouvelle loi sur les activités pharmaceutiques en 2021.',
  },
  certifications: {
    meta: { title: 'Certifications · Qualité · TILAMED Pharma', description: 'BPF de l\'OMS, ABRP, ISO 9001, ISO 14001, BPD et EDGE : nos objectifs de certification pour la qualité et l\'environnement.' },
    lead: 'Nos objectifs de certification pour la qualité et l\'environnement.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'table', title: 'Où nous en sommes', head: ['Référentiel', 'Domaine', 'Statut'], rows: [
        ['BPF (GMP) de l\'OMS', 'Fabrication pharmaceutique', 'Usine construite selon ces normes'],
        ['ABRP', 'Ouverture et exploitation d\'une usine pharmaceutique', 'Avis favorable, commission du 16 mai 2023'],
        ['ISO 9001', 'Management de la qualité', 'Certification visée'],
        ['ISO 14001', 'Management environnemental', 'Certification visée'],
        ['BPD (GDP)', 'Distribution pharmaceutique', 'Appliquées à nos entrepôts'],
        ['EDGE (IFC)', 'Bâtiment vert', 'Certification en cours d\'obtention'],
      ] },
    ],
    note: 'Ce tableau sera mis à jour à chaque nouvelle certification obtenue.',
  },
};

const pv = {
  meta: { title: 'Pharmacovigilance · Qualité · TILAMED Pharma', description: 'Signalez à TILAMED Pharma tout effet indésirable ou problème de qualité lié à l\'un de nos produits.' },
  lead: 'Signalez-nous tout effet indésirable ou problème de qualité lié à l\'un de nos produits.',
  emergency: 'En cas d\'urgence médicale, contactez immédiatement un médecin ou les services d\'urgence.',
  intro: 'La pharmacovigilance permet de surveiller la sécurité des médicaments après leur mise sur le marché. Tout signalement est traité de façon confidentielle et transmis, si nécessaire, aux autorités de santé.',
  formTitle: 'Faire un signalement',
  fields: {
    reporter: 'Vous êtes', name: 'Nom et prénom', email: 'Adresse e-mail', phone: 'Téléphone', country: 'Pays',
    type: 'Type de signalement', product: 'Produit concerné', batch: 'Numéro de lot', expiry: 'Date de péremption',
    date: 'Date de l\'événement', description: 'Description de l\'effet ou du problème', descriptionHint: 'Que s\'est-il passé ? Quand ? Quelles mesures ont été prises ?',
    consent: 'J\'accepte que ces informations soient traitées de façon confidentielle et, si nécessaire, transmises aux autorités de santé.',
    submit: 'Envoyer le signalement', required: 'Champ obligatoire', select: 'Choisir…',
  },
  reporters: ['Patient ou proche', 'Professionnel de santé', 'Pharmacien', 'Distributeur', 'Autre'],
  types: ['Effet indésirable', 'Problème de qualité du produit', 'Erreur médicamenteuse'],
  asideTitle: 'Après votre signalement',
  asideItems: ['Accusé de réception par notre pharmacien responsable', 'Analyse confidentielle du signalement', 'Transmission aux autorités de santé si nécessaire', 'Retour vers vous si des informations complémentaires sont utiles'],
};

const qualite = { pages, pv };
export default qualite;
export type QualiteDict = typeof qualite;
