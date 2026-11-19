import type { HopitauxDict } from './fr';
const hopitaux: HopitauxDict = {
  meta: {
    title: 'Ospedali, cliniche e farmacie · Mercati · TILAMED Pharma',
    description: 'Soluzioni per infusione, farmaci iniettabili, soluzioni nutrizionali e dispositivi medici prodotti o distribuiti in BENIN, in flaconi di plastica infrangibili.',
  },
  hero: {
    lead: 'Soluzioni per infusione essenziali, disponibili vicino a voi.',
    cta1: 'Vedere il catalogo',
  },
  intro: {
    eyebrow: 'Al centro delle cure',
    title: 'Disponibili ogni giorno, in tutti i reparti',
    text: [
      'Le soluzioni per infusione si usano ogni giorno in tutti i reparti. La loro disponibilità è vitale: una carenza, e le cure si fermano.',
      'Prodotte a Sèmè-Podji, le nostre soluzioni non dipendono più da diverse settimane di trasporto marittimo. La vostra farmacia può ordinare più spesso, in quantità più giuste.',
    ],
    services: ['Pronto soccorso', 'Chirurgia', 'Medicina', 'Pediatria', 'Maternità'],
    badge: 'Prodotto in BENIN',
    imageAlt: 'Infermiera con materiale medico in un corridoio d\'ospedale',
  },
  range: {
    eyebrow: 'La nostra gamma per le cure',
    title: 'I prodotti della quotidianità ospedaliera',
    text: 'Quattro gamme per la medicina umana, dalle soluzioni di base ai dispositivi medici.',
    items: [
      ['Sodio cloruro 0,9 %', 'Glucosio 5 %', 'Ringer lattato', 'Mannitolo 20 %'],
      ['Paracetamolo 1 %', 'Ceftriaxone 1 g', 'Ossitocina 10 UI', 'Chinino iniettabile'],
      ['Glucosio 10 %', 'Vitamina C 0,5 g/5 ml', 'Complesso vitaminico B'],
      ['Stetoscopio', 'Sfigmomanometro', 'Pinza emostatica'],
    ],
    note: 'Gamma in preparazione, soggetta ad autorizzazione. Farmaci riservati agli operatori sanitari.',
  },
  bottle: {
    eyebrow: 'Il flacone di plastica',
    title: 'Pensato per il terreno',
    text: 'Le nostre soluzioni sono confezionate in flaconi di plastica, più sicuri e pratici del vetro, dal camion al letto del paziente.',
    items: [
      { title: 'Infrangibile', text: 'Niente vetro rotto, né durante il trasporto né in reparto.' },
      { title: 'Leggero', text: 'Più facile da trasportare, riporre e stoccare in farmacia.' },
      { title: 'Formato, riempito e sigillato in un solo gesto', text: 'In un\'unica operazione automatica, senza contatto umano con la soluzione.' },
      { title: 'Controllato', text: 'Ogni flacone è ispezionato e ogni lotto analizzato prima del rilascio.' },
    ],
    imageAlt: 'Fiale di plastica, formate e sigillate in un\'unica operazione',
  },
  supply: {
    eyebrow: 'Come rifornirsi',
    imageAlt: 'Infermiera che usa uno sfigmomanometro',
    title: 'Trovare i nostri prodotti vicino a voi',
    items: [
      { title: 'Ospedali pubblici', text: 'Tramite la centrale d\'acquisto del vostro paese, che riforniamo direttamente.' },
      { title: 'Cliniche e farmacie private', text: 'Presso i nostri distributori e grossisti autorizzati. Scriveteci: vi indichiamo il più vicino.' },
      { title: 'Un\'esigenza particolare?', text: 'Grandi volumi, progetti, gare d\'appalto: la nostra direzione commerciale vi risponde.' },
    ],
  },
  safety: {
    eyebrow: 'Sicurezza dei pazienti',
    title: 'La vostra sicurezza e quella dei vostri pazienti',
    items: [
      { text: 'Segnalate un effetto indesiderato o un difetto di qualità.' },
      { text: 'Schede tecniche e certificati di analisi dei nostri prodotti.' },
      { text: 'Ogni flacone riporta il numero di lotto, dallo stabilimento al paziente.' },
    ],
  },
};
export default hopitaux;
