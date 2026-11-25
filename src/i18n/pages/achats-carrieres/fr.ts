// Rubrique Carrières · français (référence). Les pages Centrale d'achat ont leurs propres dictionnaires (centrale, fournisseurs, distribution).
// Source : pages carrieres, metiers, candidature de l'ancien site.
import type { Topic } from '../usine-plus/fr';

const pages: Record<string, Topic> = {
  carrieres: {
    meta: { title: 'Travailler chez TILAMED · Carrières · TILAMED Pharma', description: '150 emplois directs prévus, 70 % de postes techniques et 5 ans de transfert de compétences : participez à la création de la première usine de solutés du BÉNIN.' },
    lead: 'Participez à la création de la première usine de solutions injectables du BÉNIN.',
    intro: '',
    facts: [
      { value: '150', unit: '', label: 'emplois directs prévus' },
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
