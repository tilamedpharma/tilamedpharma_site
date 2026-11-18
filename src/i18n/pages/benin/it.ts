import type { BeninDict } from './fr';

const benin: BeninDict = {
  meta: {
    title: 'Perché produrre in Benin? · TILAMED Pharma',
    description: 'Il Benin importa la totalità delle sue soluzioni iniettabili. Produrre sul posto migliora disponibilità, tracciabilità, prezzi e occupazione.',
  },
  hero: {
    lead: 'Il Benin importa oggi la totalità delle sue soluzioni iniettabili. Produrre sul posto cambia tutto per i pazienti.',
    cta: 'La situazione',
  },
  facts: [
    { value: '100', unit: '%', label: 'delle soluzioni iniettabili consumate in Benin sono importate' },
    { value: '0', unit: '', label: 'produttori locali di soluzioni farmaceutiche liquide prima di TILAMED' },
    { value: '15', unit: 'paesi', label: 'dell\'Africa occidentale da rifornire dal Benin' },
    { value: '400', unit: 'M +', label: 'di abitanti in Africa occidentale' },
  ],
  problem: {
    eyebrow: 'La situazione',
    title: 'Un prodotto pesante e costoso da importare',
    text: 'Una soluzione per infusione è composta essenzialmente da acqua. È pesante e voluminosa: il suo trasporto costa caro, perché il nolo è calcolato a peso e volume, e il suo stoccaggio occupa molto spazio. Eppure i grossisti devono tenere costantemente diversi mesi di scorte per evitare carenze.',
    todayLabel: 'Oggi · importata',
    today: ['Fabbricazione all\'estero', 'Nolo marittimo fatturato a peso e volume', 'Diversi mesi di scorte presso i grossisti', 'Ospedali e pazienti'],
    tomorrowLabel: 'Domani · prodotta in Benin',
    tomorrow: ['Fabbricazione a Sèmè-Podji', 'Consegna su strada, secondo le reali esigenze', 'Ospedali e pazienti'],
  },
  benefits: {
    eyebrow: 'I vantaggi',
    title: 'Che cosa cambia la produzione locale',
    items: [
      { title: 'Disponibilità', text: 'Scorte vicine, consegnate in base alle reali esigenze dei clienti, senza mesi di attesa.' },
      { title: 'Tracciabilità', text: 'Un circuito corto e controllato, che aiuta a combattere i farmaci falsificati.' },
      { title: 'Prezzo', text: 'Meno nolo, meno stoccaggio, meno perdite di cambio: prezzi più giusti.' },
      { title: 'Occupazione', text: 'Posti di lavoro qualificati e un trasferimento di know-how industriale.' },
    ],
  },
  position: {
    eyebrow: 'Una posizione strategica',
    title: 'Nel cuore dell\'Africa occidentale',
    text: 'Il nostro stabilimento sorge a Sèmè-Podji, tra Cotonou e il confine con la Nigeria: una posizione pensata per rifornire l\'intera regione.',
    corridor: 'Sul corridoio costiero Abidjan – Lagos',
    port: 'Porto',
    border: 'Confine',
    items: [
      { title: 'La Nigeria alle porte', text: 'Il sito confina con il paese più popoloso dell\'Africa.' },
      { title: 'Vicino al porto di Cotonou', text: 'La porta d\'ingresso commerciale del paese, per le materie prime come per le apparecchiature.' },
      { title: 'Un\'intera regione da servire', text: 'Quindici paesi e oltre 400 milioni di abitanti riforniti da un solo stabilimento.' },
    ],
  },
  env: {
    eyebrow: 'Il contesto',
    title: 'Un contesto favorevole',
    items: [
      'Una forte volontà politica di sviluppare l\'industria farmaceutica nazionale.',
      'Un codice degli investimenti che colloca la sanità e la trasformazione industriale tra i settori prioritari.',
      'Vantaggi doganali e fiscali nelle zone economiche speciali.',
      'Una manodopera giovane e qualificata, formata nelle università della regione e oltre.',
    ],
  },
  covid: {
    eyebrow: 'Sovranità sanitaria',
    text: 'La crisi del COVID-19 ha mostrato quanto la dipendenza dalle importazioni indebolisca i sistemi sanitari. Produrre localmente significa garantire l\'accesso ai farmaci essenziali.',
  },
};
export default benin;
