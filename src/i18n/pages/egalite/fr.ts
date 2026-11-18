// Page « Égalité femmes-hommes et inclusion » · français (référence).
// Sources : ancien site (égalité formelle et réelle, recrutement, responsabilités, formation), faits confirmés par le client
// (1re usine engagée pour l'égalité et l'inclusion du handicap), page Carrières. Aucun chiffre (part de femmes, postes adaptés) :
// à ajouter quand le client les fournira.
const egalite = {
  meta: {
    title: 'Égalité femmes-hommes et inclusion · TILAMED Pharma',
    description: 'Première industrie pharmaceutique du Bénin à inscrire dès sa conception l\'égalité femmes-hommes et l\'inclusion des personnes en situation de handicap.',
  },
  hero: {
    lead: 'TILAMED Pharma promeut, dès sa conception, une égalité réelle entre les femmes et les hommes et l\'inclusion des personnes en situation de handicap.',
    cta1: 'Nos engagements',
  },
  first: {
    value: '1re',
    label: 'industrie pharmaceutique du Bénin engagée, dès sa conception, pour l\'égalité et l\'inclusion',
    eyebrow: 'Une première au Bénin',
    text: 'TILAMED Pharma est la première industrie pharmaceutique du Bénin à inscrire, dès sa conception, l\'égalité formelle et réelle des droits entre les femmes et les hommes dans son organisation, et à ouvrir ses métiers aux personnes en situation de handicap.',
  },
  pillars: {
    eyebrow: 'Deux engagements',
    title: 'Égalité et inclusion, inscrites dans notre organisation',
    items: [
      {
        title: 'Égalité femmes-hommes',
        text: 'L\'égalité des droits entre les femmes et les hommes n\'est pas un objectif lointain : elle fait partie de nos règles de fonctionnement.',
        points: ['Des recrutements fondés sur les seules compétences.', 'Un partage équitable des ressources et des responsabilités, à tous les niveaux.'],
      },
      {
        title: 'Inclusion du handicap',
        text: 'Une usine pharmaceutique moderne peut et doit accueillir des talents en situation de handicap.',
        points: ['Des postes ouverts aux personnes en situation de handicap.', 'Des candidatures examinées sur la seule base des compétences.'],
      },
    ],
  },
  journey: {
    eyebrow: 'Au quotidien',
    title: 'De l\'embauche aux responsabilités',
    items: [
      { title: 'Recrutement', text: 'Des processus de recrutement ouverts et équitables, sur la seule base des compétences.' },
      { title: 'Inclusion', text: 'Des postes ouverts aux personnes en situation de handicap.' },
      { title: 'Formation', text: 'Une formation accessible à toutes et à tous, pour un développement humain durable.' },
      { title: 'Responsabilités', text: 'Un partage équitable des ressources et des responsabilités, à tous les niveaux.' },
    ],
  },
  cta: {
    eyebrow: 'Carrières',
    title: 'Une usine ouverte à toutes et à tous',
    text: 'Des postes techniques et administratifs, à tous les niveaux. Chaque candidature est examinée sur la seule base des compétences.',
  },
};
export default egalite;
export type EgaliteDict = typeof egalite;
