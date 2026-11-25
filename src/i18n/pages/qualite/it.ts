import type { QualiteDict } from './fr';

const qualite: QualiteDict = {
  pages: {
    qualite: {
      meta: { title: 'Qualità e conformità · TILAMED Pharma', description: 'parere favorevole dell\'ABRP, ISO 9001 e ISO 14001 previste, buone pratiche di distribuzione: il nostro sistema di qualità farmaceutica.' },
      lead: 'La qualità si costruisce in ogni fase, dalla materia prima al paziente.',
      intro: '',
      facts: [
        { value: '6', unit: '', label: 'autorizzazioni ottenute dalle autorità beninesi' },
      ],
      blocks: [
        { kind: 'cards', title: 'I nostri riferimenti', items: [
          { title: 'OMS', text: 'Norme e linee guida dell\'Organizzazione mondiale della sanità.' },
          { title: 'ISO 9001 e ISO 14001', text: 'Certificazioni previste per la qualità e l\'ambiente.' },
          { title: 'EDGE', text: 'Certificazione green building dell\'IFC in corso.' },
        ] },
        { kind: 'points', title: 'Un sistema di qualità farmaceutica', items: [
          'Procedure scritte, formazione del personale e registrazioni in ogni fase.',
          'Qualifica delle apparecchiature e convalida dei processi.',
          'Controllo delle materie prime, dei materiali di confezionamento e dei prodotti finiti.',
          'Rilascio di ogni lotto da parte del farmacista responsabile.',
          'Gestione di deviazioni, reclami e richiami.',
          'Buone pratiche di distribuzione per i nostri magazzini e le nostre consegne.',
          'ABRP: parere favorevole del 16 maggio 2023 all\'autorizzazione di apertura ed esercizio.',
        ] },
      ],
      note: '',
    },
    agrements: {
      meta: { title: 'Autorizzazioni · Norme · TILAMED Pharma', description: 'Autorizzazioni dell\'ABRP e dei ministeri beninesi, certificati ambientale e tecnico, decreto ministeriale: le autorizzazioni di TILAMED PHARMA SA.' },
      lead: 'In BENIN i prodotti farmaceutici dipendono dall\'Agenzia beninese di regolamentazione farmaceutica (ABRP).',
      intro: '',
      facts: [
        { value: '6', unit: '', label: 'autorizzazioni ottenute' },
        { value: '2023', unit: '', label: 'parere favorevole dell\'ABRP, commissione del 16 maggio 2023' },
      ],
      blocks: [
        { kind: 'points', title: 'Il ruolo dell\'ABRP', items: [
          'Registrazione dei farmaci e dei prodotti sanitari.',
          'Ispezione dei locali: buone pratiche di fabbricazione, di distribuzione e di farmacia.',
          'Controllo della qualità dei farmaci prima della loro immissione in commercio.',
        ] },
        { kind: 'points', title: 'Che cosa trasmettiamo per ogni prodotto', text: 'I produttori di soluzioni iniettabili comunicano all\'ABRP tutte le caratteristiche dei componenti utilizzati, sia per il flacone sia per la formula della soluzione. Questi requisiti mirano a:', items: [
          'garantire la qualità di ogni componente;',
          'consentire la tracciabilità completa del prodotto e del suo contenitore;',
          'garantire l\'integrità della soluzione per tutto il periodo di utilizzo;',
          'assicurare un imballaggio finale resistente alla rottura e al deterioramento.',
        ] },
      ],
      note: '',
    },
    'controle-qualite': {
      meta: { title: 'Controllo qualità · Norme · TILAMED Pharma', description: 'Dal ricevimento delle materie prime al rilascio da parte del farmacista responsabile: come viene controllato ogni lotto.' },
      lead: 'Un lotto viene rilasciato solo dopo la verifica di tutti i suoi risultati.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'sequence', title: 'Dal controllo al rilascio', items: [
          { title: 'Ricevimento', text: 'Materie prime e materiali di confezionamento vengono messi in quarantena, campionati e analizzati.' },
          { title: 'In produzione', text: 'Controlli di concentrazione, volume, tenuta e aspetto.' },
          { title: 'Prodotto finito', text: 'Analisi chimico-fisiche e microbiologiche di ogni lotto.' },
          { title: 'Revisione del dossier di lotto', text: 'Verifica di ogni registrazione di produzione.' },
          { title: 'Rilascio', text: 'Decisione del farmacista responsabile.' },
        ] },
      ],
      note: 'Campioni di ogni lotto saranno conservati per consentire controlli successivi.',
    },
    tracabilite: {
      meta: { title: 'Tracciabilità · Norme · TILAMED Pharma', description: 'Numero di lotto, registrazione delle spedizioni e procedura di richiamo: un circuito corto contro i farmaci falsificati.' },
      lead: 'Un circuito corto, dallo stabilimento al paziente, per farmaci sicuri.',
      intro: 'I farmaci falsificati e il mercato illecito mettono in pericolo vite in Africa occidentale. La produzione locale accorcia la catena di approvvigionamento e la rende più facile da controllare.',
      facts: [],
      blocks: [
        { kind: 'points', title: 'Ogni lotto tracciato', items: [
          'Numero di lotto e data di scadenza su ogni flacone e ogni cartone.',
          'Registrazione delle spedizioni per cliente e per lotto.',
          'Procedura di richiamo prevista, in collegamento con le autorità.',
        ] },
      ],
      note: 'Il BENIN si è fortemente impegnato contro i farmaci contraffatti: partecipazione all\'operazione internazionale PANGEA dell\'INTERPOL, ratifica della convenzione MEDICRIME del Consiglio d\'Europa e nuova legge sulle attività farmaceutiche nel 2021.',
    },
    certifications: {
      meta: { title: 'Certificazioni · Norme · TILAMED Pharma', description: 'ABRP, ISO 9001, ISO 14001, GDP ed EDGE: i nostri obiettivi di certificazione per la qualità e l\'ambiente.' },
      lead: 'I nostri obiettivi di certificazione per la qualità e l\'ambiente.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'table', title: 'A che punto siamo', head: ['Riferimento', 'Ambito', 'Stato'], rows: [
          ['ABRP', 'Apertura ed esercizio di uno stabilimento farmaceutico', 'Parere favorevole, commissione del 16 maggio 2023'],
          ['ISO 9001', 'Gestione della qualità', 'Certificazione prevista'],
          ['ISO 14001', 'Gestione ambientale', 'Certificazione prevista'],
          ['GDP', 'Distribuzione farmaceutica', 'Applicate ai nostri magazzini'],
          ['EDGE (IFC)', 'Edificio verde', 'Certificazione in corso'],
        ] },
      ],
      note: 'Questa tabella sarà aggiornata a ogni nuova certificazione ottenuta.',
    },
  },
  pv: {
    meta: { title: 'Farmacovigilanza · Norme · TILAMED Pharma', description: 'Segnalate a TILAMED Pharma qualsiasi effetto indesiderato o problema di qualità legato a uno dei nostri prodotti.' },
    lead: 'Segnalateci qualsiasi effetto indesiderato o problema di qualità legato a uno dei nostri prodotti.',
    emergency: 'In caso di emergenza medica, contattate immediatamente un medico o i servizi di emergenza.',
    intro: 'La farmacovigilanza permette di monitorare la sicurezza dei farmaci dopo la loro immissione in commercio. Ogni segnalazione è trattata in modo riservato e, se necessario, trasmessa alle autorità sanitarie.',
    formTitle: 'Fare una segnalazione',
    fields: {
      reporter: 'Siete', name: 'Nome e cognome', email: 'Indirizzo e-mail', phone: 'Telefono', country: 'Paese',
      type: 'Tipo di segnalazione', product: 'Prodotto interessato', batch: 'Numero di lotto', expiry: 'Data di scadenza',
      date: 'Data dell\'evento', description: 'Descrizione dell\'effetto o del problema', descriptionHint: 'Che cosa è successo? Quando? Quali misure sono state prese?',
      consent: 'Accetto che queste informazioni siano trattate in modo riservato e, se necessario, trasmesse alle autorità sanitarie.',
      submit: 'Invia la segnalazione', required: 'Campo obbligatorio', select: 'Scegli…',
    },
    reporters: ['Paziente o familiare', 'Professionista sanitario', 'Farmacista', 'Distributore', 'Altro'],
    types: ['Effetto indesiderato', 'Problema di qualità del prodotto', 'Errore terapeutico'],
    asideTitle: 'Dopo la vostra segnalazione',
    asideItems: ['Conferma di ricezione da parte del nostro farmacista responsabile', 'Analisi riservata della segnalazione', 'Trasmissione alle autorità sanitarie se necessario', 'Ricontatto se servono altre informazioni'],
  },
};
export default qualite;
