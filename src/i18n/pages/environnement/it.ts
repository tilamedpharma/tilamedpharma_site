import type { EnvDict } from './fr';

const environnement: EnvDict = {
  meta: {
    title: 'Ambiente · TILAMED Pharma',
    description: 'Uno stabilimento pensato per limitare il proprio impatto: certificazione EDGE in corso, ISO 14001 come obiettivo, acqua, energia, materiali, rifiuti e trasporti.',
  },
  hero: {
    lead: 'Uno stabilimento pensato per limitare il proprio impatto: acqua, energia, materiali, rifiuti.',
    cta: 'Le nostre leve',
  },
  edge: {
    eyebrow: 'Certificazione EDGE in corso',
    figLabel: 'lo standard green building dell\'IFC, Gruppo Banca Mondiale',
    text: 'EDGE è lo standard di edilizia sostenibile della Società finanziaria internazionale (IFC). Certifica gli edifici che consumano molte meno risorse rispetto a un edificio di riferimento. Il nostro stabilimento di Sèmè-Podji è in corso di certificazione.',
    criteria: [
      { value: '20', label: 'di energia in meno' },
      { value: '20', label: 'di acqua in meno' },
      { value: '20', label: 'di energia incorporata nei materiali in meno' },
    ],
    criteriaNote: 'Risparmi minimi richiesti da EDGE rispetto a un edificio di riferimento.',
  },
  levers: {
    eyebrow: 'Le nostre leve',
    title: 'Sei leve per ridurre la nostra impronta',
    intro: 'Puntiamo alla certificazione ISO 14001 per la gestione ambientale. Il nostro sito si trova in una zona economica speciale progettata per rispettare elevati standard ambientali e sociali.',
  },
  certs: {
    eyebrow: 'Certificazioni',
    title: 'A che punto siamo?',
    status: { done: 'Ottenuto', progress: 'In corso', target: 'Obiettivo' },
    edge: { title: 'Certificazione EDGE', text: 'Standard green building dell\'IFC (Gruppo Banca Mondiale).' },
    iso: { title: 'Certificazione ISO 14001', text: 'Norma internazionale per la gestione ambientale.' },
  },
  band: {
    eyebrow: 'Energie rinnovabili',
    text: 'I paesi della regione si sono posti l\'obiettivo di aumentare fortemente la quota di energie rinnovabili nel loro mix energetico. Seguiremo questa traiettoria.',
  },
};
export default environnement;
