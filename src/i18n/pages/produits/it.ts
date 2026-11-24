import type { ProduitsDict } from './fr';

const produits: ProduitsDict = {
  ui: { seeRange: 'Vedi la gamma', docCta: 'Richiedi la documentazione', contactCta: 'Contatta la nostra direzione commerciale', inThisRange: 'In questa gamma', categories: 'categorie' },
  catalogue: {
    meta: { title: 'Catalogo dei prodotti · TILAMED Pharma', description: 'Soluzioni per infusione, farmaci iniettabili e orali, soluzioni nutrizionali, dispositivi medici e prodotti veterinari: il catalogo TILAMED Pharma.' },
    lead: 'Cerca tra le nostre soluzioni iniettabili, i nostri futuri prodotti liquidi e i dispositivi medici che distribuiamo.',
    familiesTitle: 'Cinque gamme',
    searchTitle: 'Tutto il catalogo',
    searchIntro: 'Filtra per gamma o cerca per nome, uso o categoria.',
  },
  families: {
    serums: { meta: { title: 'Soluzioni per infusione · Prodotti · TILAMED Pharma', description: 'Sodio cloruro, glucosio, Ringer lattato, bicarbonato, mannitolo: le soluzioni per infusione prodotte a Sèmè-Podji.' }, lead: 'La nostra prima gamma, prodotta a Sèmè-Podji: soluzioni per infusione in flaconi di plastica formati, riempiti e sigillati in sede.' },
    medicaments: { meta: { title: 'Farmaci · Prodotti · TILAMED Pharma', description: 'Iniettabili in fiale, soluzioni medicinali, antibiotici iniettabili, vaccini e sieri, soluzioni orali.' }, lead: 'Iniettabili in fiale, antibiotici, vaccini e sieri, soluzioni orali: una gamma sviluppata in tre fasi di produzione.' },
    'solutions-nutritionnelles': { meta: { title: 'Soluzioni nutrizionali · Prodotti · TILAMED Pharma', description: 'Glucosio concentrato e vitamine iniettabili o orali per l\'apporto calorico e la correzione delle carenze.' }, lead: 'Glucosio concentrato e vitamine, iniettabili o orali, per l\'apporto calorico e la correzione delle carenze.' },
    'dispositifs-medicaux': { meta: { title: 'Dispositivi medici · Prodotti · TILAMED Pharma', description: 'Diagnostica, strumenti chirurgici, sterilizzazione e attrezzature: i dispositivi medici distribuiti da TILAMED Pharma.' }, lead: 'Diagnostica, strumenti chirurgici, sterilizzazione e attrezzature: i dispositivi medici che distribuiamo.' },
    'sante-animale': { meta: { title: 'Prodotti veterinari · Prodotti · TILAMED Pharma', description: 'Alimentazione, antiparassitari, cure e farmaci per cani e gatti, distribuiti dalla nostra centrale d\'acquisto.' }, lead: 'Alimentazione, antiparassitari, cure e farmaci per cani e gatti.' },
  },
  formats: {
    title: 'Flaconi adatti a ogni uso',
    intro: 'Flaconi di plastica leggeri e infrangibili, prodotti con soffiaggio-riempimento-sigillatura.',
    items: [
      { value: '100', label: 'Antibiotici, analgesici, diluizioni' },
      { value: '250', label: 'Soluzioni di base, pediatria' },
      { value: '500', label: 'Il formato più usato in ospedale' },
      { value: '1000', label: 'Reidratazione, reintegro di volume' },
    ],
    cards: [
      { title: 'Infrangibile', text: 'Il flacone di plastica resiste agli urti del trasporto e dello stoccaggio.' },
      { title: 'Leggero', text: 'Più leggero del vetro: trasporto e manipolazione più facili.' },
      { title: 'Sistema chiuso', text: 'Il flacone si svuota senza ingresso d\'aria, limitando i rischi di contaminazione.' },
    ],
    note: 'Ogni cartone contiene il foglietto illustrativo ed è etichettato per garantire la tracciabilità del lotto.',
  },
  phases: { title: 'Una gamma sviluppata in tre fasi', intro: 'I farmaci entrano in produzione man mano che si aprono le linee e si ottengono le autorizzazioni regolatorie.' },
  devices: {
    text: 'Forte di una lunga esperienza nella fornitura, installazione e manutenzione di apparecchiature mediche in Africa occidentale, TILAMED Pharma distribuisce una gamma di dispositivi medici di costruttori internazionali riconosciuti, con marcatura CE.',
    cta: 'Per un preventivo, un elenco di referenze o una gara d\'appalto, contatta la nostra direzione commerciale.',
  },
  vet: { text: 'Prodotti veterinari selezionati e distribuiti dalla nostra centrale d\'acquisto. Saranno disponibili a breve.', cta: 'Ricevi l\'avviso del lancio' },
  doc: {
    meta: { title: 'Richiesta di documentazione · TILAMED Pharma', description: 'Professionisti sanitari e acquirenti: richiedete le informazioni tecniche dei prodotti TILAMED Pharma.' },
    lead: 'Professionisti sanitari e acquirenti: richiedete le informazioni tecniche dei nostri prodotti.',
    intro: 'Indicate i prodotti che vi interessano. Il nostro team vi invierà le informazioni disponibili non appena saranno pubblicate.',
    formTitle: 'La vostra richiesta',
    fields: {
      name: 'Nome e cognome', org: 'Organizzazione', profile: 'Siete', country: 'Paese', email: 'Indirizzo e-mail', phone: 'Telefono',
      ranges: 'Gamme di interesse', products: 'Prodotti specifici (facoltativo)', productsHint: 'Es.: sodio cloruro 0,9 % 500 ml, ceftriaxone 1 g…',
      message: 'Il vostro messaggio', consent: 'Accetto che TILAMED Pharma utilizzi queste informazioni per rispondere alla mia richiesta.', submit: 'Invia la richiesta',
      required: 'Campo obbligatorio', select: 'Scegli…',
    },
    profiles: ['Centrale d\'acquisto', 'Ospedale o clinica', 'Farmacia', 'Grossista o distributore', 'Organizzazione sanitaria', 'Altro'],
    asideTitle: 'Che cosa riceverete',
    asideItems: ['Schede tecniche e composizioni appena pubblicate', 'Formati e confezionamenti previsti', 'Calendario di disponibilità', 'Contatto della nostra direzione commerciale'],
    direct: 'Preferite scriverci direttamente?',
  },
};
export default produits;
