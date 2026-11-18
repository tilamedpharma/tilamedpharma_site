import type { AchatsCarrieresDict } from './fr';

const d: AchatsCarrieresDict = {
  pages: {
    'centrale-achat': {
      meta: { title: 'La nostra centrale d\'acquisto · TILAMED Pharma', description: 'Approvvigionamento, stoccaggio e distribuzione all\'ingrosso di prodotti sanitari di qualità, a prezzi accessibili alla popolazione.' },
      lead: 'Approvvigionamento, stoccaggio e distribuzione all\'ingrosso di prodotti sanitari di qualità, a prezzi accessibili alla popolazione.',
      intro: '',
      facts: [{ value: '1', unit: 'Mld FCFA', label: 'di capitale sociale, filiale per l\'Africa occidentale con sede a Cotonou' }],
      blocks: [
        { kind: 'prose', title: 'Chi siamo', items: ['Accanto alla produzione di soluzioni iniettabili a Sèmè-Podji, la centrale d\'acquisto di TILAMED Pharma ha il compito di approvvigionare, stoccare e distribuire all\'ingrosso prodotti sanitari, facendo in modo che siano venduti a prezzi accessibili alla popolazione.'] },
        { kind: 'points', title: 'Le nostre missioni', items: [
          'Rifornire le strutture sanitarie pubbliche e private, gli stabilimenti farmaceutici e i servizi sanitari di farmaci generici, dispositivi medici, reagenti di laboratorio e altri prodotti sanitari essenziali per la medicina umana e veterinaria.',
          'Costituire scorte di riserva per far fronte agli aumenti di prezzo e alle carenze del mercato.',
          'Assicurare, su base contrattuale per i programmi sanitari, lo stoccaggio, la gestione e la distribuzione di farmaci e materiale medico.',
          'Contribuire alla promozione dei farmaci generici.',
          'Vendere tal quali o riconfezionare prodotti per la salute umana e animale secondo le esigenze della politica sanitaria.',
          'Sviluppare la nostra competenza in nuovi settori: prodotti chimici, input veterinari, reagenti e materiali di consumo di laboratorio.',
        ] },
        { kind: 'prose', title: 'La nostra visione', items: ['Diventare una centrale d\'acquisto farmaceutica di riferimento, ben governata, resiliente e di portata sottoregionale, che garantisca la disponibilità continua di prodotti sanitari di qualità a prezzi accessibili per la popolazione.'] },
      ],
      note: 'Volete diventare fornitori di TILAMED Pharma? Consultate i nostri criteri di selezione, poi scrivete a contact@tilamedpharma.com indicando «Acquisti» nell\'oggetto.',
    },
    fournisseurs: {
      meta: { title: 'I nostri fornitori · Centrale d\'acquisto · TILAMED Pharma', description: 'Criteri di selezione, principi e impegni di sostenibilità: che cosa ci aspettiamo dai nostri fornitori e che cosa possono aspettarsi da noi.' },
      lead: 'Che cosa ci aspettiamo dai nostri fornitori e che cosa possono aspettarsi da noi.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'sequence', title: 'Criteri di selezione dei fornitori', text: 'Ogni fornitore viene valutato prima del primo ordine e poi rivalutato regolarmente. Per i materiali che entrano nel prodotto, la valutazione comprende un questionario, l\'esame del dossier tecnico e, se necessario, un audit in sede.', items: [
          { title: 'Qualità', text: 'Un sistema di gestione della qualità riconosciuto, certificati di analisi per ogni lotto e, per i materiali farmaceutici, il rispetto delle buone pratiche di fabbricazione.' },
          { title: 'Conformità normativa', text: 'Prodotti e documenti conformi alle farmacopee e ai requisiti dell\'Agenzia beninese di regolamentazione farmaceutica (ABRP).' },
          { title: 'Affidabilità', text: 'Tempi rispettati, capacità sufficiente, tracciabilità completa e informazione tempestiva in caso di modifiche o incidenti.' },
          { title: 'Costo totale', text: 'Un prezzo giusto, valutato insieme a trasporto, tempi, stoccaggio e rischio di carenza, e non solo il prezzo d\'acquisto.' },
          { title: 'Responsabilità', text: 'Il rispetto dei diritti umani, della salute e sicurezza sul lavoro, dell\'ambiente e delle norme anticorruzione.' },
        ] },
        { kind: 'cards', title: 'I nostri principi', items: [
          { title: 'Equità e trasparenza', text: 'Le stesse regole per tutti, consultazioni chiare e decisioni motivate.' },
          { title: 'Integrità', text: 'Nessun regalo o vantaggio che possa influenzare una decisione d\'acquisto. Ogni conflitto di interessi viene dichiarato.' },
          { title: 'Riservatezza', text: 'Le informazioni tecniche e commerciali scambiate sono protette da entrambe le parti.' },
          { title: 'Partenariato', text: 'Rapporti di lungo periodo, obiettivi condivisi e un dialogo regolare sulle prestazioni.' },
        ] },
        { kind: 'points', title: 'Una catena di approvvigionamento sostenibile', text: 'Ci aspettiamo che i nostri fornitori condividano i nostri impegni e li richiedano a loro volta ai propri subfornitori.', items: [
          'Condizioni di lavoro dignitose: niente lavoro minorile né lavoro forzato, salari e orari conformi alla legge.',
          'Riduzione di rifiuti, imballaggi ed emissioni, e gestione responsabile di acqua ed energia.',
          'Scelta di trasporti e confezionamenti che limitino l\'impatto ambientale.',
          'Sviluppo di fornitori locali e regionali, per avvicinare la produzione ai pazienti.',
          'Continuità dell\'approvvigionamento: piani di emergenza in caso di crisi o difficoltà di trasporto.',
        ] },
      ],
      note: 'Per proporre i vostri prodotti o servizi, scrivete a contact@tilamedpharma.com indicando «Acquisti» nell\'oggetto.',
    },
    'chaine-distribution': {
      meta: { title: 'La nostra distribuzione · Centrale d\'acquisto · TILAMED Pharma', description: 'Dallo stabilimento di Sèmè-Podji al paziente: un circuito corto, controllato e tracciabile.' },
      lead: 'Dallo stabilimento di Sèmè-Podji al paziente: un circuito corto, controllato e tracciabile.',
      intro: 'I nostri prodotti sono fabbricati in Benin, a poche ore di strada dagli ospedali che li utilizzano. Ecco il percorso che seguono, dallo stabilimento al paziente.',
      facts: [],
      blocks: [
        { kind: 'sequence', title: 'Le tappe, una per una', items: [
          { title: 'Lo stabilimento di Sèmè-Podji', text: 'Ogni lotto viene prodotto, controllato dal nostro laboratorio e rilasciato dal farmacista responsabile.' },
          { title: 'Il nostro magazzino', text: 'I prodotti finiti sono stoccati in condizioni controllate, con tracciamento per lotto e per data di scadenza.' },
          { title: 'Centrali d\'acquisto e distributori', text: 'Consegniamo alle centrali d\'acquisto pubbliche, alle organizzazioni sanitarie e ai nostri distributori autorizzati in Benin e nella sottoregione.' },
          { title: 'Ospedali, cliniche e farmacie', text: 'Le strutture sanitarie ricevono prodotti disponibili più rapidamente, in quantità adatte al loro consumo reale.' },
          { title: 'I pazienti', text: 'Soluzioni per infusione di qualità, disponibili vicino a casa, a un prezzo accessibile.' },
        ] },
      ],
      note: 'Quasi metà della popolazione africana non ha un accesso regolare ai farmaci essenziali.',
    },
    carrieres: {
      meta: { title: 'Lavorare in TILAMED · Carriere · TILAMED Pharma', description: '150 posti di lavoro diretti, 70 % di posti tecnici e 5 anni di trasferimento di competenze: entrate nella prima industria di soluzioni iniettabili del Benin.' },
      lead: 'Entrate nella prima industria di soluzioni iniettabili del Benin.',
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
          'Il Benin dispone di una manodopera giovane, dinamica e qualificata: assumiamo e formiamo in via prioritaria sul posto.',
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
