import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {
    clients: {
      meta: { title: 'I nostri clienti · Mercati · TILAMED Pharma', description: 'Centrali d\'acquisto, grossisti, organizzazioni sanitarie, ospedali e farmacie: i clienti di TILAMED Pharma in Benin e in Africa occidentale.' },
      lead: 'Riforniamo gli attori pubblici e privati della sanità in Benin e in Africa occidentale.',
      intro: '',
      facts: [{ value: '15', unit: 'paesi', label: 'dell\'Africa occidentale coperti' }],
      blocks: [
        { kind: 'points', title: 'Come lavoriamo', items: [
          'Vendite dirette alle centrali d\'acquisto pubbliche e private.',
          'Risposte a gare d\'appalto e consultazioni ristrette.',
          'Vendite al settore privato e tramite i nostri distributori.',
          'Tutte le vendite sono centralizzate dalla nostra direzione commerciale, con tempi di risposta brevi.',
        ] },
      ],
      note: '',
    },
    'centrales-achat': {
      meta: { title: 'Centrali d\'acquisto · Mercati · TILAMED Pharma', description: 'Un fornitore locale capace di consegnare secondo le vostre reali esigenze: meno scorte immobilizzate, meno carenze, dossier di gara completi.' },
      lead: 'Un fornitore locale, capace di consegnare secondo le vostre reali esigenze.',
      intro: 'Le centrali d\'acquisto devono oggi ordinare con diversi mesi di anticipo e stoccare grandi volumi di soluzioni importate. Con una produzione locale, gli ordini possono seguire il consumo reale.',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Che cosa ci guadagnate', items: [
          { title: 'Meno scorte immobilizzate', text: 'Consegne più frequenti, magazzini meno ingombri.' },
          { title: 'Meno carenze', text: 'Un fornitore a poche ore di strada invece che a diverse settimane di mare.' },
          { title: 'Dossier completi', text: 'Una squadra abituata alle procedure di gara nazionali e internazionali.' },
        ] },
      ],
      note: '',
    },
    'hopitaux-cliniques': {
      meta: { title: 'Ospedali, cliniche e farmacie · Mercati · TILAMED Pharma', description: 'Soluzioni per infusione essenziali, disponibili vicino a voi, in flaconi di plastica infrangibili.' },
      lead: 'Soluzioni per infusione essenziali, disponibili vicino a voi.',
      intro: 'Le soluzioni per infusione si usano ogni giorno in tutti i reparti: pronto soccorso, chirurgia, medicina, pediatria, maternità. La loro disponibilità è vitale.',
      facts: [],
      blocks: [
        { kind: 'points', title: 'Una gamma pensata per l\'ospedale', items: [
          'Una gamma che copre i bisogni di base: soluzione fisiologica, glucosio, Ringer lattato.',
          'Soluzioni specifiche: analgesico, antinfettivo, antibiotici.',
          'Iniettabili in fiale per urgenza, maternità e cure correnti.',
          'Flaconi di plastica infrangibili, facili da maneggiare e stoccare.',
        ] },
      ],
      note: '',
    },
    'organisations-sante': {
      meta: { title: 'Organizzazioni sanitarie · Mercati · TILAMED Pharma', description: 'Un partner locale per i programmi sanitari regionali e internazionali: GMP dell\'OMS, dossier di qualità completi, consegna in 15 paesi.' },
      lead: 'Un partner locale per i programmi sanitari regionali e internazionali.',
      intro: 'Le organizzazioni internazionali, regionali e non governative attribuiscono grande importanza al rafforzamento dei sistemi sanitari in Africa occidentale. I nostri team conoscono le loro procedure di acquisto e i loro requisiti di qualità.',
      facts: [{ value: '15', unit: 'paesi', label: 'dell\'Africa occidentale coperti' }],
      blocks: [
        { kind: 'points', title: 'I nostri impegni', items: [
          'Produzione secondo le buone pratiche dell\'OMS.',
          'Dossier di qualità completi per ogni prodotto.',
          'Capacità di consegna nei 15 paesi dell\'Africa occidentale coperti.',
        ] },
      ],
      note: '',
    },
  },
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
  presence: {
    meta: { title: 'Presenza regionale · Mercati · TILAMED Pharma', description: 'Uno stabilimento in Benin, 15 paesi dell\'Africa occidentale coperti e uffici in Benin, Burkina Faso e Francia.' },
    lead: 'Uno stabilimento in Benin, 15 paesi dell\'Africa occidentale coperti e una presenza internazionale.',
    facts: [
      { value: '15', unit: 'paesi', label: 'dell\'Africa occidentale coperti' },
      { value: '3', unit: '', label: 'uffici: Benin, Burkina Faso, Francia' },
      { value: '400', unit: 'M +', label: 'di abitanti in Africa occidentale' },
    ],
    note: 'La sottoregione condivide sfide sanitarie simili: malattie analoghe, popolazioni giovani e in forte crescita, e la stessa dipendenza dai farmaci importati.',
  },
};
export default marches;
