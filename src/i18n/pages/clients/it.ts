import type { ClientsDict } from './fr';
const clients: ClientsDict = {
  meta: {
    title: 'I nostri clienti · Mercati · TILAMED Pharma',
    description: 'Centrali d\'acquisto pubbliche, grossisti distributori, organizzazioni regionali e internazionali, farmacie e cliniche: i clienti di TILAMED Pharma in Africa occidentale.',
  },
  hero: {
    lead: 'Riforniamo gli attori pubblici e privati della sanità in BENIN e in Africa occidentale.',
    cta1: 'Richiedere un\'offerta',
  },
  facts: [
    { value: '5', unit: 'famiglie', label: 'di clienti, pubblici e privati' },
    { value: '15', unit: 'paesi', label: 'dell\'Africa occidentale serviti' },
    { value: '3', unit: 'canali', label: 'vendite dirette, gare d\'appalto, distributori' },
    { value: '1', unit: 'interlocutore', label: 'la nostra direzione commerciale, per tutte le vendite' },
  ],
  who: {
    eyebrow: 'A chi ci rivolgiamo',
    title: 'Loro acquistano i nostri prodotti',
    text: 'Dall\'appalto pubblico al banco della farmacia, i nostri prodotti raggiungono cinque famiglie di clienti. Per ciascuna abbiamo adattato il nostro modo di lavorare.',
    items: [
      { title: 'Centrali d\'acquisto pubbliche dell\'Africa occidentale', examples: ['SOBAPS', 'CAMEG', 'ONPPC', 'SONIPHARM'], text: 'Risposte complete alle loro gare e consegne pianificate in base al consumo reale.' },
      { title: 'Grossisti distributori privati internazionali', examples: ['UBIPHARM', 'UBPHAR', 'GAPOB'], text: 'Un fornitore nella regione: ordini più frequenti e meno scorte immobilizzate.' },
      { title: 'Organizzazioni regionali', examples: ['OOAS', 'Centre MURAZ', 'CIRDES'], text: 'Un partner locale per i programmi sanitari della sottoregione.' },
      { title: 'Organizzazioni internazionali', examples: ['GIZ', 'AFD', 'OMS'], text: 'Dossier di qualità completi e capacità di consegna nei 15 paesi dell\'Africa occidentale.' },
      { title: 'Farmacie e cliniche private', examples: ['In tutta l\'Africa occidentale'], text: 'Prodotti sanitari essenziali disponibili vicino a loro, tramite i nostri distributori autorizzati.' },
    ],
    more: 'Per saperne di più',
  },
  how: {
    eyebrow: 'Come lavoriamo',
    title: 'Tre modi per acquistare i nostri prodotti',
    items: [
      { title: 'Vendite dirette', text: 'Alle centrali d\'acquisto pubbliche e private, su ordine o con consegne pianificate.', for: 'Centrali d\'acquisto, grandi clienti' },
      { title: 'Gare d\'appalto', text: 'Rispondiamo a gare d\'appalto e consultazioni ristrette, nazionali e internazionali, con un dossier tecnico e regolatorio completo.', for: 'Ministeri, organizzazioni sanitarie' },
      { title: 'Rete di distributori', text: 'Per il settore privato, i nostri prodotti sono venduti tramite i nostri distributori autorizzati in ogni paese.', for: 'Farmacie, cliniche, grossisti' },
    ],
    forLabel: 'Per',
    central: 'Tutte le vendite sono centralizzate dalla nostra direzione commerciale, con tempi di risposta brevi.',
  },
  resources: {
    eyebrow: 'Per i nostri acquirenti',
    title: 'Tutto il necessario per preparare un ordine',
    items: [
      { text: 'Tutti i nostri prodotti, per gamma, con le loro confezioni.' },
      { text: 'Schede tecniche e certificati di analisi, su richiesta.' },
      { text: 'Le nostre autorizzazioni, con numeri e date.' },
    ],
  },
  cta: {
    eyebrow: 'Direzione commerciale',
    title: 'Un fabbisogno, una gara in preparazione?',
    text: 'Scriva alla nostra direzione commerciale indicando prodotti, quantità e paese di consegna: le risponderemo rapidamente.',
    imageAlt: 'Una cliente e un farmacista in una farmacia',
  },
};
export default clients;
