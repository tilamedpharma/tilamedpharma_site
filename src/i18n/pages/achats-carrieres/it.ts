import type { AchatsCarrieresDict } from './fr';

const d: AchatsCarrieresDict = {
  pages: {
    carrieres: {
      meta: { title: 'Lavorare in TILAMED · Carriere · TILAMED Pharma', description: '150 posti di lavoro diretti, 70 % di posti tecnici e 5 anni di trasferimento di competenze: entrate nella prima industria di soluzioni iniettabili del BENIN.' },
      lead: 'Entrate nella prima industria di soluzioni iniettabili del BENIN.',
      intro: '',
      facts: [
        { value: '150', unit: '', label: 'posti di lavoro diretti' },
        { value: '70', unit: '%', label: 'di posti tecnici' },
        { value: '30', unit: '%', label: 'di posti amministrativi' },
        { value: '5', unit: 'anni', label: 'di trasferimento di competenze' },
      ],
      blocks: [
        { kind: 'prose', title: 'Una squadra in costruzione', items: [
          'Stiamo costruendo una squadra di professionisti qualificati, formati alla produzione industriale e impegnati per la qualità.',
          'Il BENIN dispone di una manodopera giovane, dinamica e qualificata: assumiamo e formiamo in via prioritaria sul posto.',
        ] },
        { kind: 'points', title: 'Un datore di lavoro aperto a tutte e a tutti', items: [
          'Processi di selezione aperti ed equi, basati unicamente sulle competenze.',
          'Posti aperti alle persone con disabilità.',
          'Una ripartizione equa delle responsabilità tra donne e uomini, a tutti i livelli.',
          'Una formazione accessibile a tutte e a tutti, con cinque anni di accompagnamento da parte dei costruttori delle apparecchiature.',
        ] },
      ],
      note: 'Al momento non sono pubblicate offerte di lavoro. Potete inviare una candidatura spontanea.',
    },
    metiers: {
      meta: { title: 'I nostri mestieri · Carriere · TILAMED Pharma', description: 'Produzione, assicurazione qualità, laboratorio, manutenzione, logistica, funzioni di supporto: i mestieri di uno stabilimento farmaceutico.' },
      lead: 'Produzione, qualità, manutenzione, logistica, funzioni di supporto: scoprite i mestieri di uno stabilimento farmaceutico.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Sei famiglie di mestieri', items: [
          { title: 'Produzione', text: 'Operatori di linea, conduttori di macchine, capisquadra.' },
          { title: 'Assicurazione qualità', text: 'Farmacisti, responsabili qualità, specialisti della convalida.' },
          { title: 'Laboratorio', text: 'Analisti chimico-fisici e microbiologici.' },
          { title: 'Manutenzione e servizi', text: 'Tecnici meccanici, elettrici, dell\'automazione e del freddo.' },
          { title: 'Logistica', text: 'Magazzinieri, gestori delle scorte, autisti addetti alle consegne.' },
          { title: 'Funzioni di supporto', text: 'Finanza, risorse umane, acquisti, vendite, informatica.' },
        ] },
        { kind: 'points', title: 'La squadra di direzione', items: [
          'Direttore generale',
          'Farmacista responsabile',
          'Direttore amministrativo, finanziario e delle risorse umane',
          'Direttore commerciale e marketing, con informatori scientifici',
          'Responsabile acquisti',
          'Capo contabile',
        ] },
      ],
      note: '',
    },
  },
  cand: {
    meta: { title: 'Candidatura spontanea · Carriere · TILAMED Pharma', description: 'Presentatevi: TILAMED Pharma esaminerà il vostro profilo non appena apriranno le selezioni.' },
    lead: 'Presentatevi: esamineremo il vostro profilo non appena apriranno le selezioni.',
    intro: 'Esaminiamo ogni candidatura unicamente sulla base delle competenze. Le candidature sono aperte a tutte e a tutti.',
    formTitle: 'La vostra candidatura',
    fields: {
      name: 'Nome e cognome', email: 'Indirizzo e-mail', phone: 'Telefono', country: 'Paese di residenza',
      family: 'Mestiere desiderato', level: 'Titolo di studio', experience: 'Anni di esperienza',
      cv: 'Il vostro CV', cvHint: 'PDF o Word, massimo 5 MB.', message: 'La vostra motivazione',
      consent: 'Accetto che TILAMED Pharma conservi queste informazioni per valutare la mia candidatura.',
      submit: 'Invia la candidatura', required: 'Campo obbligatorio', select: 'Scegli…',
    },
    families: ['Produzione', 'Assicurazione qualità', 'Laboratorio', 'Manutenzione e servizi', 'Logistica', 'Funzioni di supporto', 'Altro'],
    levels: ['Licenza media o qualifica professionale', 'Diploma di scuola superiore', 'Diploma tecnico superiore', 'Laurea triennale', 'Laurea magistrale o ingegneria', 'Dottorato o laurea in farmacia'],
    experience: ['Meno di un anno', 'Da 1 a 3 anni', 'Da 3 a 5 anni', 'Da 5 a 10 anni', 'Oltre 10 anni'],
    asideTitle: 'Buono a sapersi',
    asideItems: ['Al momento non ci sono offerte pubblicate', 'Il vostro profilo sarà esaminato all\'apertura delle selezioni', 'Posizioni tecniche e amministrative', 'Formazione a cura dei costruttori delle apparecchiature'],
  },
};
export default d;
