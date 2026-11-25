// Pagina «La nostra distribuzione» · italiano.
import type { DistributionDict } from './fr';

const distribution: DistributionDict = {
  meta: {
    title: 'La nostra distribuzione · Centrale acquisti · TILAMED Pharma',
    description: 'Dal nostro stabilimento e dai nostri fornitori fino al paziente: un circuito corto, controllato e tracciabile, in BENIN e in tutta l\'Africa occidentale.',
  },
  hero: {
    lead: 'Dal nostro stabilimento e dai nostri fornitori fino al paziente: un circuito corto, controllato e tracciabile.',
    cta1: 'Il nostro circuito',
  },
  facts: [
    { value: '< 1', unit: 'mese', label: 'obiettivo, dal nostro futuro stabilimento al paziente' },
    { value: '15', unit: 'paesi', label: 'dell\'Africa occidentale nella nostra area di distribuzione' },
    { value: '2', unit: 'origini', label: 'ciò che produciamo e ciò che acquistiamo, in un unico circuito' },
  ],
  flow: {
    eyebrow: 'Il nostro circuito',
    title: 'Due origini, un solo circuito',
    intro: 'Le soluzioni iniettabili prodotte a Sèmè-Podji e i prodotti acquistati presso grandi produttori seguono lo stesso percorso: controllo, stoccaggio, poi consegna ai nostri clienti.',
    label: 'Schema del circuito di distribuzione',
    sources: [
      { title: 'Prodotto in BENIN', text: 'Soluzioni iniettabili prodotte, controllate e rilasciate lotto per lotto a Sèmè-Podji.' },
      { title: 'Acquistato da grandi produttori', text: 'Farmaci, dispositivi medici e prodotti di laboratorio, verificati al ricevimento.' },
    ],
    hub: { title: 'Il nostro magazzino', text: 'Stoccaggio controllato, tracciamento per lotto e data di scadenza.' },
    dests: ['Centrali acquisti pubbliche', 'Distributori e grossisti', 'Ospedali, cliniche e farmacie', 'Programmi sanitari'],
    end: { title: 'I pazienti', text: 'Prodotti di qualità, disponibili vicino a casa.' },
  },
  steps: {
    eyebrow: 'Passo dopo passo',
    title: 'Le tappe, una per una',
    imageAlt: 'Clienti che scelgono un farmaco in farmacia',
    items: [
      { title: 'Lo stabilimento e i nostri fornitori', text: 'Ogni lotto prodotto sarà controllato dal nostro laboratorio e rilasciato dal farmacista responsabile. Ogni prodotto acquistato è verificato al ricevimento: documenti, etichettatura, stato dei colli.' },
      { title: 'Il nostro magazzino', text: 'I prodotti sono stoccati in condizioni controllate, con tracciamento per lotto e data di scadenza: i primi a scadere sono i primi a uscire.' },
      { title: 'Centrali acquisti e distributori', text: 'Consegniamo alle centrali acquisti pubbliche, alle organizzazioni sanitarie e ai nostri distributori autorizzati in BENIN e nella sottoregione.' },
      { title: 'Ospedali, cliniche e farmacie', text: 'Le strutture sanitarie ricevono prodotti disponibili più rapidamente, in quantità adeguate al loro consumo reale.' },
      { title: 'I pazienti', text: 'Prodotti sanitari di qualità, disponibili vicino a casa, a un prezzo accessibile.' },
    ],
  },
  guarantees: {
    eyebrow: 'I nostri impegni',
    title: 'Cosa garantiamo ai nostri clienti',
    items: [
      { title: 'Uno stoccaggio controllato', text: 'Condizioni di conservazione rispettate e rotazione delle scorte in base alle date di scadenza.' },
      { title: 'La tracciabilità', text: 'Ogni spedizione registrata per cliente e per lotto, e una procedura di richiamo coordinata con le autorità.' },
      { title: 'La disponibilità', text: 'Scorte di riserva per far fronte alle carenze e agli aumenti dei prezzi sul mercato.' },
      { title: 'La vicinanza', text: 'Uno stabilimento in BENIN e un ufficio regionale a Ouagadougou, vicini ai nostri clienti della sottoregione.' },
    ],
  },
  why: {
    eyebrow: 'Perché è importante',
    text: 'Quasi metà della popolazione africana non ha un accesso regolare ai farmaci essenziali. Accorciare il circuito significa avvicinare i farmaci ai pazienti.',
  },
  cta: {
    eyebrow: 'Distribuzione',
    title: 'Distribuisca i nostri prodotti',
    text: 'Grossista, distributore o centrale acquisti: entri nella nostra rete per rendere disponibili i nostri prodotti nel suo paese.',
  },
};
export default distribution;
