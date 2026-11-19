import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {},
  distrib: {
    meta: { title: 'Diventare distributore · Mercati · TILAMED Pharma', description: 'Grossisti e distributori farmaceutici dell\'Africa occidentale: entrate nella rete di distributori autorizzati di TILAMED Pharma.' },
    lead: 'Siete grossisti o distributori farmaceutici in Africa occidentale? Parliamone.',
    intro: 'Stiamo sviluppando una rete di distributori autorizzati per rendere i nostri prodotti disponibili in tutta la sottoregione.',
    reqTitle: 'Che cosa cerchiamo',
    reqs: [
      'Essere titolari delle autorizzazioni alla distribuzione farmaceutica del vostro paese.',
      'Disporre di un magazzino conforme alle buone pratiche di distribuzione.',
      'Conoscere i circuiti di distribuzione pubblici e privati del vostro mercato.',
    ],
    formTitle: 'La vostra candidatura',
    fields: {
      company: 'Ragione sociale', country: 'Paese', name: 'Nome del referente', role: 'Ruolo', email: 'Indirizzo e-mail', phone: 'Telefono',
      licence: 'Autorizzazione alla distribuzione farmaceutica', warehouse: 'Magazzino conforme alle GDP', yes: 'Sì', no: 'No', pending: 'In corso',
      channels: 'Canali coperti', ranges: 'Gamme di interesse', message: 'Presentate la vostra azienda',
      messageHint: 'Zone coperte, clienti, volumi, squadra…', consent: 'Accetto che TILAMED Pharma utilizzi queste informazioni per valutare la mia candidatura.',
      submit: 'Invia la candidatura', required: 'Campo obbligatorio', select: 'Scegli…',
    },
    channels: ['Centrali d\'acquisto pubbliche', 'Ospedali e cliniche', 'Farmacie', 'Organizzazioni sanitarie', 'Export sottoregionale'],
  },
};
export default marches;
