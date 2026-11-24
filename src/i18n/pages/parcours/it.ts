import type { ParcoursDict } from './fr';

const parcours: ParcoursDict = {
  meta: {
    title: 'Il nostro percorso · TILAMED Pharma',
    description: 'Da SEDIS SARL nel 2013 allo stabilimento di Sèmè-Podji: dieci anni sul campo, sei autorizzazioni e certificati, un sito industriale di 2 ettari.',
  },
  hero: {
    lead: 'Da un\'esperienza sul campo nel settore medico alla nascita di un\'industria farmaceutica locale.',
    cta: 'Le tappe principali',
  },
  facts: [
    { value: '2013', unit: '', label: 'primi passi nel settore medico in Africa occidentale' },
    { value: '2023', unit: '', label: 'SEDIS SARL diventa TILAMED PHARMA SA' },
    { value: '6', unit: '', label: 'autorizzazioni, licenze e certificati ottenuti' },
    { value: '2', unit: 'ha', label: 'di sito industriale a Sèmè-Podji' },
  ],
  timeline: {
    eyebrow: 'Le tappe principali',
    title: 'Oltre dieci anni sul campo, un\'ambizione industriale',
    refLabel: 'Riferimento',
    nowLabel: 'In corso',
    nextLabel: 'Prossima tappa',
    phases: [
      {
        range: '2013 – 2022',
        title: 'Le fondamenta',
        items: [
          { date: '2013', title: 'Nasce SEDIS SARL', text: 'L\'azienda nasce per fornire, installare e manutenere dispositivi medici in Africa occidentale, a contatto con ospedali, laboratori e centrali d\'acquisto.' },
          { date: '2013 – 2022', title: 'Dieci anni sul campo, una constatazione', text: 'In BENIN nessuna soluzione iniettabile è prodotta localmente. Studi di mercato e incontri con autorità sanitarie, centrali d\'acquisto e produttori europei di apparecchiature: il progetto industriale prende forma.' },
        ],
      },
      {
        range: '2023 – 2024',
        title: 'Le autorizzazioni',
        items: [
          { date: '2023', title: 'Nasce TILAMED PHARMA SA', text: 'SEDIS SARL diventa TILAMED PHARMA SA, società per azioni con un capitale di un miliardo di franchi CFA, orientata alla produzione industriale.' },
          { date: '16 maggio 2023', title: 'Parere favorevole dell\'ABRP', text: 'Riunita in commissione, l\'Agenzia beninese di regolamentazione farmaceutica esprime parere favorevole all\'apertura e all\'esercizio di uno stabilimento farmaceutico.' },
          { date: '30 giugno 2023', title: '', text: 'L\'installazione e l\'esercizio dello stabilimento farmaceutico sono autorizzati.', comp: 0 },
          { date: '7 agosto 2024', title: '', text: 'Il progetto è riconosciuto conforme ai requisiti ambientali e sociali.', comp: 2 },
          { date: '9 settembre 2024', title: '', text: 'L\'attività industriale di TILAMED Pharma è autorizzata.', comp: 1 },
          { date: '28 ottobre 2024', title: '', text: 'Viene fissato l\'elenco delle apparecchiature di produzione esenti.', comp: 3 },
          { date: '28 novembre 2024', title: '', text: 'Il progetto è disciplinato da decreto ministeriale e beneficia di un\'esenzione fiscale e contributiva (regime B, 8 anni) per le fasi di investimento e di esercizio.', comp: 4 },
        ],
      },
      {
        range: '2025 →',
        title: 'Il sito e lo stabilimento',
        items: [
          { date: '9 settembre 2025', title: 'Il sito di Sèmè-Podji', text: 'Lo Stato beninese affida a TILAMED PHARMA SA un sito industriale di 2 ettari, in enfiteusi, nella zona industriale di Sèmè-Podji, al confine con la NIGERIA.', ref: 'Contratto di enfiteusi n. 2494/MEF/DC/SGM/ANDF/DAJuF/DGDE/S' },
          { date: 'Oggi', title: 'La costruzione dello stabilimento', text: 'TILAMED Pharma prepara la sua unità di produzione di soluzioni iniettabili nella zona industriale di Sèmè-Podji.', state: 'now' },
          { date: 'Domani', title: 'L\'avvio', text: 'Inizio della produzione e assunzione dei primi team.', state: 'next' },
        ],
      },
    ],
  },
  sites: {
    eyebrow: 'Le nostre sedi',
    title: 'Radicati in BENIN e nella regione',
    items: [
      { title: 'Sito produttivo', place: 'Sèmè-Podji · BENIN', text: '2 ettari (20 000 m²) nella zona industriale di Sèmè-Podji, al confine con la NIGERIA.' },
      { title: 'Sede amministrativa', place: 'Cotonou · BENIN', text: 'Un edificio amministrativo a Les Cocotiers, in centro città, di proprietà di TILAMED PHARMA SA.' },
      { title: 'Ufficio regionale', place: 'Ouagadougou · BURKINA FASO', text: 'Un edificio amministrativo di 1000 m² a Dassasgho.' },
    ],
  },
  cta: {
    eyebrow: 'Il seguito',
    title: 'Seguite la costruzione dello stabilimento',
    text: 'Ogni nuova tappa del progetto viene annunciata nelle nostre notizie. Scoprite fin da ora il processo di fabbricazione del nostro futuro stabilimento.',
  },
};
export default parcours;
