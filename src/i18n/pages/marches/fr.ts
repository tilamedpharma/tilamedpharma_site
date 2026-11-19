// Rubrique Marchés · français (référence) : formulaire « Devenir distributeur » (chapô, critères, champs).
import type { Topic } from '../usine-plus/fr';

// Les pages clients, hopitaux-cliniques, organisations-sante et presence ont leurs propres dictionnaires (19/11).
const pages: Record<string, Topic> = {};

const distrib = {
  meta: { title: 'Devenir distributeur · Marchés · TILAMED Pharma', description: 'Grossistes et distributeurs pharmaceutiques d\'Afrique de l\'Ouest : rejoignez le réseau de distributeurs agréés TILAMED Pharma.' },
  lead: 'Vous êtes grossiste ou distributeur pharmaceutique en Afrique de l\'Ouest ? Parlons-en.',
  intro: 'Nous développons un réseau de distributeurs agréés pour rendre nos produits disponibles dans toute la sous-région.',
  reqTitle: 'Ce que nous recherchons',
  reqs: [
    'Être titulaire des autorisations de distribution pharmaceutique de votre pays.',
    'Disposer d\'un entrepôt conforme aux bonnes pratiques de distribution.',
    'Connaître les circuits de distribution publics et privés de votre marché.',
  ],
  formTitle: 'Votre candidature',
  fields: {
    company: 'Raison sociale', country: 'Pays', name: 'Nom et prénom du contact', role: 'Fonction', email: 'Adresse e-mail', phone: 'Téléphone',
    licence: 'Autorisation de distribution pharmaceutique', warehouse: 'Entrepôt conforme aux BPD', yes: 'Oui', no: 'Non', pending: 'En cours',
    channels: 'Circuits couverts', ranges: 'Gammes qui vous intéressent', message: 'Présentez votre entreprise',
    messageHint: 'Zones couvertes, clients, volumes, équipe…', consent: 'J\'accepte que TILAMED Pharma utilise ces informations pour étudier ma candidature.',
    submit: 'Envoyer ma candidature', required: 'Champ obligatoire', select: 'Choisir…',
  },
  channels: ['Centrales d\'achat publiques', 'Hôpitaux et cliniques', 'Pharmacies d\'officine', 'Organisations de santé', 'Export sous-régional'],
};

const marches = { pages, distrib };
export default marches;
export type MarchesDict = typeof marches;
