import type { EtapesDict } from './fr';

const etapes: EtapesDict = {
  ui: {
    step: 'Fase',
    of: 'di',
    rail: 'Le 7 fasi del processo',
    figures: 'In cifre',
    prev: 'Fase precedente',
    next: 'Fase successiva',
    overview: 'Panoramica dello stabilimento',
    backTo: 'Il nostro stabilimento',
    others: 'Il resto della sezione Stabilimento',
  },
  steps: {
    'traitement-eau': {
      meta: { title: 'Trattamento dell\'acqua · Il nostro stabilimento · TILAMED Pharma', description: 'Acqua depurata e acqua per preparazioni iniettabili prodotte in sede a Sèmè-Podji: osmosi inversa, elettrodeionizzazione, distillazione e anello caldo in acciaio inossidabile.' },
      lead: 'L\'acqua è il primo ingrediente di una soluzione iniettabile. La sua purezza è controllata in continuo.',
      intro: 'Una soluzione per infusione contiene oltre il 90 % di acqua. Produciamo in sede due qualità di acqua farmaceutica, conformi ai requisiti delle farmacopee.',
      facts: [
        { value: '> 90', unit: '%', label: 'di acqua in una soluzione per infusione' },
        { value: '2', unit: '', label: 'qualità di acqua farmaceutica prodotte in sede' },
      ],
      block: { kind: 'sequence', title: 'Le fasi del trattamento', items: [
        { title: 'Pretrattamento', text: 'Filtrazione e addolcimento dell\'acqua di alimentazione.' },
        { title: 'Acqua depurata', text: 'Doppia osmosi inversa seguita da elettrodeionizzazione (EDI).' },
        { title: 'Acqua per preparazioni iniettabili (WFI)', text: 'Distillazione in un distillatore a colonne multiple, che elimina le endotossine.' },
        { title: 'Vapore puro', text: 'Un generatore dedicato produce il vapore usato per sterilizzare le apparecchiature.' },
        { title: 'Stoccaggio e anello', text: 'L\'acqua WFI è stoccata e circola in un anello caldo in acciaio inossidabile per restare sterile fino al punto d\'uso.' },
      ] },
      note: 'Conducibilità e temperatura dell\'acqua sono misurate in continuo, con registrazione e allarmi.',
    },
    'preparation-solutions': {
      meta: { title: 'Preparazione delle soluzioni · Il nostro stabilimento · TILAMED Pharma', description: 'Preparazione per lotti, secondo una formula convalidata, in serbatoi di acciaio inossidabile: pesatura, controlli in processo e filtrazione.' },
      lead: 'La miscelazione precisa dei principi attivi e dell\'acqua per preparazioni iniettabili.',
      intro: 'Ogni soluzione è preparata per lotti, secondo una formula convalidata. Le materie prime sono pesate e aggiunte all\'acqua per preparazioni iniettabili in serbatoi di acciaio inossidabile.',
      facts: [
        { value: '2', unit: '', label: 'serbatoi di preparazione in acciaio inossidabile' },
      ],
      block: { kind: 'points', title: 'Apparecchiature e controlli', items: [
        'Due serbatoi di preparazione, dotati di celle di carico e agitatori magnetici.',
        'Controlli in processo: concentrazione, pH, aspetto.',
        'Filtrazione della soluzione prima del trasferimento alla linea di riempimento.',
        'Pulizia e sterilizzazione dei serbatoi e dei circuiti tra un lotto e l\'altro.',
      ] },
      note: '',
    },
    'soufflage-remplissage-scellage': {
      meta: { title: 'Soffiaggio, riempimento, sigillatura · Il nostro stabilimento · TILAMED Pharma', description: 'La tecnologia blow-fill-seal: un\'unica macchina forma il flacone, lo riempie e lo sigilla, senza contatto umano. Formati da 100 a 1000 ml.' },
      lead: 'Un\'unica macchina forma il flacone, lo riempie e lo sigilla, senza alcun contatto umano.',
      intro: 'La tecnologia di soffiaggio-riempimento-sigillatura (blow-fill-seal in inglese) è oggi una delle più sicure per fabbricare soluzioni sterili. Il flacone in plastica è fabbricato nel momento stesso in cui viene riempito.',
      facts: [
        { value: '100', unit: 'ml', label: 'Antibiotici, analgesici' },
        { value: '250', unit: 'ml', label: 'Soluzioni di base' },
        { value: '500', unit: 'ml', label: 'Il formato più utilizzato' },
        { value: '1000', unit: 'ml', label: 'Reidratazione' },
      ],
      block: { kind: 'sequence', title: 'Un ciclo in cinque tempi', items: [
        { title: 'Estrusione', text: 'Il polimero di qualità farmaceutica viene fuso ed estruso a forma di tubo.' },
        { title: 'Soffiaggio', text: 'Lo stampo si chiude e il flacone è formato da aria sterile filtrata.' },
        { title: 'Riempimento', text: 'La soluzione è dosata con precisione nel flacone, sotto flusso d\'aria protetto.' },
        { title: 'Sigillatura', text: 'La testa del flacone è formata e sigillata ermeticamente nello stampo.' },
        { title: 'Sformatura', text: 'I flaconi escono chiusi, pronti per la sterilizzazione.' },
      ] },
      note: 'Il cambio formato richiede circa mezz\'ora, il che consente di rispondere rapidamente alle esigenze dei clienti.',
    },
    sterilisation: {
      meta: { title: 'Sterilizzazione · Il nostro stabilimento · TILAMED Pharma', description: 'Sterilizzazione terminale dei flaconi nel loro confezionamento finale, in autoclave ad aspersione di acqua surriscaldata, con cicli convalidati e registrati.' },
      lead: 'Ogni flacone riempito è sterilizzato nel suo confezionamento finale.',
      intro: 'Dopo la sigillatura, i flaconi sono sottoposti a sterilizzazione terminale in un\'autoclave ad aspersione di acqua surriscaldata. Questo metodo riscalda i flaconi in modo omogeneo proteggendo la plastica.',
      facts: [],
      block: { kind: 'points', title: 'Una sterilizzazione controllata', items: [
        'Cicli convalidati: tempo, temperatura e pressione registrati per ogni carico.',
        'Indicatori e controlli che confermano l\'efficacia di ogni ciclo.',
        'Parti a contatto con il prodotto in acciaio inossidabile di qualità farmaceutica.',
        'Separazione fisica tra i flaconi prima e dopo la sterilizzazione.',
      ] },
      note: '',
    },
    inspection: {
      meta: { title: 'Controllo al 100 % · Il nostro stabilimento · TILAMED Pharma', description: 'Asciugatura, prova di tenuta, ispezione visiva, inscatolamento e scarto automatico: nessun flacone lascia lo stabilimento senza essere stato controllato.' },
      lead: 'Nessun flacone lascia lo stabilimento senza essere stato controllato.',
      intro: '',
      facts: [
        { value: '100', unit: '%', label: 'dei flaconi controllati prima di lasciare lo stabilimento' },
      ],
      block: { kind: 'sequence', title: 'Dall\'asciugatura al cartone', items: [
        { title: 'Asciugatura', text: 'I flaconi vengono asciugati all\'uscita dell\'autoclave.' },
        { title: 'Prova di tenuta', text: 'Ogni flacone è testato per rilevare la minima perdita.' },
        { title: 'Ispezione visiva', text: 'Controllo sotto luce dell\'aspetto della soluzione e del flacone.' },
        { title: 'Sovraimballaggio e inscatolamento', text: 'Inserimento del foglietto e del certificato, chiusura ed etichettatura del cartone.' },
        { title: 'Scarto automatico', text: 'I cartoni con peso non conforme o etichetta errata sono scartati automaticamente.' },
      ] },
      note: '',
    },
    laboratoire: {
      meta: { title: 'Laboratorio di controllo qualità · Il nostro stabilimento · TILAMED Pharma', description: 'Cromatografia, spettrometria, camere di stabilità e microbiologia: ogni lotto è analizzato e rilasciato dal farmacista responsabile.' },
      lead: 'Il nostro laboratorio analizza le materie prime, le acque e ogni lotto prima del rilascio.',
      intro: '',
      facts: [],
      block: { kind: 'cards', title: 'I nostri strumenti di analisi', items: [
        { title: 'Cromatografia (HPLC)', text: 'Identificazione e dosaggio dei principi attivi.' },
        { title: 'Spettrometria', text: 'Assorbimento atomico, UV e infrarosso per identità e purezza.' },
        { title: 'Camere di stabilità', text: 'Studi di stabilità per confermare la durata di conservazione.' },
        { title: 'Microbiologia', text: 'Sterilità, endotossine e monitoraggio ambientale.' },
      ] },
      note: 'Nessun lotto è immesso sul mercato senza la decisione del farmacista responsabile, sulla base dei risultati di laboratorio e della revisione del dossier di lotto.',
    },
    'conditionnement-logistique': {
      meta: { title: 'Confezionamento e consegna · Il nostro stabilimento · TILAMED Pharma', description: 'Stoccaggio secondo le buone pratiche di distribuzione e consegna con il nostro servizio logistico, in BENIN e per l\'export.' },
      lead: 'Prodotti consegnati nel posto giusto, al momento giusto, nelle giuste condizioni.',
      intro: 'I prodotti finiti sono stoccati nel nostro magazzino secondo le buone pratiche di distribuzione e consegnati ai nostri clienti in BENIN dal nostro servizio logistico.',
      facts: [],
      block: { kind: 'points', title: 'Il nostro servizio logistico', items: [
        'Consegne in base alle reali esigenze dei clienti, senza obbligo di stoccare diversi mesi di prodotti.',
        'Monitoraggio in tempo reale di ordini e scorte grazie a un software gestionale integrato.',
        'Per l\'export, ritiro da parte degli spedizionieri dei nostri clienti o consegna organizzata da noi.',
      ] },
      note: '',
    },
  },
};
export default etapes;
