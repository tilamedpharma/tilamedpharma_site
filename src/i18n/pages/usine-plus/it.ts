import type { Topic } from './fr';

const pages: Record<string, Topic> = {
  'site-seme-podji': {
    meta: { title: 'Il sito di Sèmè-Podji · Il nostro stabilimento · TILAMED Pharma', description: 'Un sito industriale di 2 ettari a Sèmè-Podji, vicino alla frontiera di Kraké, a Cotonou e al suo porto, in una zona economica speciale.' },
    lead: 'Un sito di 2 ettari, subito dopo la frontiera di Kraké, tra Cotonou e la NIGERIA.',
    intro: '',
    facts: [
      { value: '2', unit: 'ha', label: 'di sito industriale, cioè 20.000 m²' },
    ],
    blocks: [
      { kind: 'points', title: 'Una posizione strategica', items: [
        'Nel comune di Sèmè-Podji, dipartimento dell\'Ouémé, nel sud del BENIN.',
        'A ridosso della frontiera di Kraké, principale punto di passaggio verso la NIGERIA.',
        'Vicino a Cotonou e al suo porto autonomo, che gestisce la maggior parte degli scambi del paese.',
        'All\'interno di una zona economica speciale con vantaggi doganali e fiscali.',
      ] },
      { kind: 'cards', title: 'L\'organizzazione del sito', text: 'Il sito separa chiaramente le zone pulite dalle zone generali.', items: [
        { title: 'Edificio di produzione', text: 'Le linee di fabbricazione, in zone ad atmosfera controllata.' },
        { title: 'Ricevimento e quarantena', text: 'Le materie prime attendono qui il controllo prima dell\'uso.' },
        { title: 'Laboratorio', text: 'Il controllo qualità di materie, acque e lotti.' },
        { title: 'Magazzino dei prodotti finiti', text: 'Lo stoccaggio dei prodotti rilasciati prima della consegna.' },
        { title: 'Servizi tecnici', text: 'L\'acqua, il vapore, l\'aria e il freddo che fanno funzionare lo stabilimento.' },
        { title: 'Spogliatoi e bussole', text: 'Il passaggio controllato tra zone generali e zone pulite.' },
      ] },
    ],
    note: '',
  },
  'salles-propres': {
    meta: { title: 'Camere bianche · Il nostro stabilimento · TILAMED Pharma', description: 'Zone di grado C e protezione di grado A nel punto di riempimento: filtrazione HEPA, cascata di pressione, materiali lisci e monitoraggio continuo.' },
    lead: 'Le fasi critiche si svolgono in un ambiente ad atmosfera controllata.',
    intro: 'La fabbricazione delle soluzioni iniettabili è protetta in zone di grado C, con una protezione di grado A nel punto di riempimento, in conformità con le buone pratiche di fabbricazione.',
    facts: [
      { value: 'C', unit: '', label: 'Grado delle zone di fabbricazione' },
      { value: 'A', unit: '', label: 'Protezione nel punto di riempimento' },
    ],
    blocks: [
      { kind: 'cards', title: 'Un\'atmosfera controllata', items: [
        { title: 'Filtrazione HEPA', text: 'L\'aria immessa nelle sale passa attraverso filtri ad altissima efficienza.' },
        { title: 'Cascata di pressione', text: 'Le sale più pulite sono in sovrappressione per impedire l\'ingresso di contaminanti.' },
        { title: 'Materiali lisci', text: 'Pannelli, porte e pavimenti in resina epossidica, facili da pulire e disinfettare.' },
        { title: 'Monitoraggio', text: 'Particelle, pressione, temperatura e umidità monitorate, con allarmi.' },
      ] },
    ],
    note: 'Il personale accede alle zone pulite attraverso spogliatoi e bussole dedicati, con un abbigliamento adatto a ogni grado.',
  },
  utilites: {
    meta: { title: 'Servizi industriali · Il nostro stabilimento · TILAMED Pharma', description: 'Aria compressa, vapore, acqua refrigerata, reti di acqua depurata e vapore puro, manutenzione in sede: i servizi tecnici dello stabilimento.' },
    lead: 'Aria compressa, vapore, acqua refrigerata: i servizi tecnici che fanno funzionare lo stabilimento.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'cards', title: 'I servizi tecnici', items: [
        { title: 'Aria compressa', text: 'Aria compressa priva di olio per le apparecchiature di produzione.' },
        { title: 'Vapore industriale', text: 'Una caldaia produce il vapore industriale.' },
        { title: 'Acqua refrigerata', text: 'Gruppo frigorifero e torre di raffreddamento per i processi e il trattamento dell\'aria.' },
        { title: 'Reti di tubazioni', text: 'Per l\'acqua depurata, l\'acqua per preparazioni iniettabili, il vapore puro e l\'aria compressa.' },
        { title: 'Manutenzione in sede', text: 'Officina di manutenzione e magazzino ricambi in sede.' },
      ] },
    ],
    note: 'La manutenzione preventiva e correttiva è svolta dai nostri tecnici, formati dai costruttori delle apparecchiature.',
  },
  'transfert-technologie': {
    meta: { title: 'Trasferimento tecnologico · Il nostro stabilimento · TILAMED Pharma', description: 'Cinque anni di assistenza tecnica permanente in sede e formazioni per operatori, laboratorio e manutenzione: il know-how resta in BENIN.' },
    lead: 'Cinque anni di assistenza permanente perché il know-how resti in BENIN.',
    intro: 'Dall\'installazione e messa in servizio dello stabilimento, i costruttori delle apparecchiature formano le nostre squadre in BENIN. I loro ingegneri restano poi distaccati in sede per cinque anni per accompagnare la produzione.',
    facts: [
      { value: '5', unit: 'anni', label: 'di assistenza tecnica permanente, prorogabile' },
      { value: '70', unit: '%', label: 'di posti tecnici' },
    ],
    blocks: [
      { kind: 'points', title: 'Le formazioni previste', items: [
        'Formazione funzionale e tecnica di operatori e tecnici.',
        'Formazione sulle buone pratiche di fabbricazione e sull\'igiene in zona pulita.',
        'Formazione del personale di laboratorio sui metodi di analisi.',
        'Formazione della squadra di manutenzione sulle apparecchiature critiche.',
      ] },
    ],
    note: '',
  },
};
export default pages;
