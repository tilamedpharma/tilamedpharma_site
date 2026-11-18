// Pages « Le site de Sèmè-Podji », « Salles propres », « Utilités industrielles », « Transfert de technologie ».
// Source : pages Usine de l'ancien site.
import type { Block, Fact } from '../etapes/fr';

export type Topic = {
  meta: { title: string; description: string };
  lead: string;
  intro: string;
  facts: Fact[];
  blocks: Block[];
  note: string;
};

const pages: Record<string, Topic> = {
  'site-seme-podji': {
    meta: { title: 'Le site de Sèmè-Podji · Notre usine · TILAMED Pharma', description: 'Un site industriel de 2 hectares à Sèmè-Podji, près de la frontière de Kraké, de Cotonou et de son port, dans une zone économique spéciale.' },
    lead: 'Un site de 2 hectares, juste après la frontière de Kraké, entre Cotonou et le Nigéria.',
    intro: '',
    facts: [
      { value: '2', unit: 'ha', label: 'de site industriel, soit 20 000 m²' },
    ],
    blocks: [
      { kind: 'points', title: 'Un emplacement stratégique', items: [
        'Dans la commune de Sèmè-Podji, département de l\'Ouémé, au sud du Bénin.',
        'À proximité immédiate de la frontière de Kraké, principal point de passage vers le Nigéria.',
        'Près de Cotonou et de son port autonome, qui assure l\'essentiel des échanges commerciaux du pays.',
        'Au sein d\'une zone économique spéciale offrant des avantages douaniers et fiscaux.',
      ] },
      { kind: 'cards', title: 'L\'organisation du site', text: 'Le site sépare clairement les zones propres des zones générales.', items: [
        { title: 'Bâtiment de production', text: 'Les lignes de fabrication, en zones à atmosphère contrôlée.' },
        { title: 'Réception et quarantaine', text: 'Les matières premières y attendent leur contrôle avant utilisation.' },
        { title: 'Laboratoire', text: 'Le contrôle qualité des matières, des eaux et des lots.' },
        { title: 'Entrepôt de produits finis', text: 'Le stockage des produits libérés avant livraison.' },
        { title: 'Utilités techniques', text: 'L\'eau, la vapeur, l\'air et le froid qui font tourner l\'usine.' },
        { title: 'Vestiaires et sas', text: 'Le passage contrôlé entre zones générales et zones propres.' },
      ] },
    ],
    note: '',
  },
  'salles-propres': {
    meta: { title: 'Salles propres · Notre usine · TILAMED Pharma', description: 'Zones de classe C et protection de classe A au point de remplissage : filtration HEPA, cascade de pression, matériaux lisses et surveillance continue.' },
    lead: 'Les étapes critiques se déroulent dans un environnement à atmosphère contrôlée.',
    intro: 'La fabrication des solutions injectables est protégée dans des zones de classe C, avec une protection de classe A au point de remplissage, conformément aux bonnes pratiques de fabrication.',
    facts: [
      { value: 'C', unit: '', label: 'Classe des zones de fabrication' },
      { value: 'A', unit: '', label: 'Protection au point de remplissage' },
    ],
    blocks: [
      { kind: 'cards', title: 'Une atmosphère maîtrisée', items: [
        { title: 'Filtration HEPA', text: 'L\'air soufflé dans les salles est filtré par des filtres à très haute efficacité.' },
        { title: 'Cascade de pression', text: 'Les salles les plus propres sont en surpression pour empêcher l\'entrée de contaminants.' },
        { title: 'Matériaux lisses', text: 'Panneaux, portes et sols en résine époxy, faciles à nettoyer et désinfecter.' },
        { title: 'Surveillance', text: 'Particules, pression, température et humidité suivies, avec alarmes.' },
      ] },
    ],
    note: 'Le personnel accède aux zones propres par des vestiaires et des sas dédiés, avec des tenues adaptées à chaque classe.',
  },
  utilites: {
    meta: { title: 'Utilités industrielles · Notre usine · TILAMED Pharma', description: 'Air comprimé, vapeur, eau glacée, réseaux d\'eau purifiée et de vapeur pure, maintenance sur site : les services techniques de l\'usine.' },
    lead: 'Air comprimé, vapeur, eau glacée : les services techniques qui font tourner l\'usine.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'cards', title: 'Les services techniques', items: [
        { title: 'Air comprimé', text: 'Air comprimé exempt d\'huile pour les équipements de production.' },
        { title: 'Vapeur industrielle', text: 'Une chaudière produit la vapeur industrielle.' },
        { title: 'Eau glacée', text: 'Groupe d\'eau glacée et tour de refroidissement pour les procédés et le traitement d\'air.' },
        { title: 'Réseaux de tuyauteries', text: 'Pour l\'eau purifiée, l\'eau pour préparations injectables, la vapeur pure et l\'air comprimé.' },
        { title: 'Maintenance sur site', text: 'Atelier de maintenance et magasin de pièces détachées sur le site.' },
      ] },
    ],
    note: 'La maintenance préventive et curative est assurée par nos techniciens, formés par les fabricants des équipements.',
  },
  'transfert-technologie': {
    meta: { title: 'Transfert de technologie · Notre usine · TILAMED Pharma', description: 'Cinq ans d\'assistance technique permanente sur site et des formations pour les opérateurs, le laboratoire et la maintenance : le savoir-faire reste au Bénin.' },
    lead: 'Cinq ans d\'assistance permanente pour que le savoir-faire reste au Bénin.',
    intro: 'Dès l\'installation et la mise en service de l\'usine, les fabricants des équipements forment nos équipes au Bénin. Leurs ingénieurs restent ensuite détachés sur site pendant cinq ans pour accompagner la production.',
    facts: [
      { value: '5', unit: 'ans', label: 'd\'assistance technique permanente, prolongeable' },
      { value: '70', unit: '%', label: 'de postes techniques' },
    ],
    blocks: [
      { kind: 'points', title: 'Les formations prévues', items: [
        'Formation fonctionnelle et technique des opérateurs et techniciens.',
        'Formation aux bonnes pratiques de fabrication et à l\'hygiène en zone propre.',
        'Formation du personnel de laboratoire aux méthodes d\'analyse.',
        'Formation de l\'équipe de maintenance aux équipements critiques.',
      ] },
    ],
    note: '',
  },
};
export default pages;
