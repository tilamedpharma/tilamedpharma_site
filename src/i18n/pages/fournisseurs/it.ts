// Pagina «I nostri fornitori» · italiano.
import type { FournisseursDict } from './fr';

const fournisseurs: FournisseursDict = {
  meta: {
    title: 'I nostri fornitori · Centrale acquisti · TILAMED Pharma',
    description: 'Grandi produttori partner, criteri di selezione, percorso di qualifica e principi d\'acquisto: cosa ci aspettiamo dai nostri fornitori e cosa loro possono aspettarsi da noi.',
  },
  hero: {
    lead: 'Cosa ci aspettiamo dai nostri fornitori e cosa loro possono aspettarsi da noi.',
    cta1: 'I nostri criteri di selezione',
    cta2: 'Diventare fornitore',
  },
  partners: {
    eyebrow: 'I nostri partner industriali',
    title: 'Grandi produttori al nostro fianco',
    text: [
      'Sia per il nostro stabilimento sia per la nostra centrale acquisti, lavoriamo con grandi produttori internazionali di attrezzature industriali, dispositivi medici e prodotti di laboratorio.',
      'I produttori delle attrezzature dello stabilimento formano inoltre le nostre squadre per cinque anni: è il nostro programma di trasferimento di competenze.',
    ],
  },
  criteria: {
    eyebrow: 'Selezione',
    title: 'Cinque criteri di selezione',
    text: 'Ogni fornitore viene valutato prima del primo ordine e poi rivalutato regolarmente. Per le materie che entrano nel prodotto, la valutazione comprende un questionario, l\'esame del fascicolo tecnico e, se necessario, un audit in loco.',
    items: [
      { title: 'Qualità', text: 'Un sistema di gestione della qualità riconosciuto, certificati di analisi per ogni lotto e, per le materie farmaceutiche, il rispetto delle norme di buona fabbricazione.' },
      { title: 'Conformità normativa', text: 'Prodotti e documenti conformi alle farmacopee e ai requisiti dell\'Agenzia beninese di regolamentazione farmaceutica (ABRP).' },
      { title: 'Affidabilità', text: 'Tempi rispettati, capacità sufficiente, tracciabilità completa e comunicazione tempestiva in caso di modifiche o incidenti.' },
      { title: 'Costo totale', text: 'Un prezzo equo, valutato insieme a trasporto, tempi, stoccaggio e rischio di carenza, e non solo il prezzo d\'acquisto.' },
      { title: 'Responsabilità', text: 'Il rispetto dei diritti umani, della salute e sicurezza sul lavoro, dell\'ambiente e delle norme anticorruzione.' },
    ],
  },
  steps: {
    eyebrow: 'Diventare fornitore',
    title: 'Quattro tappe per unirsi a noi',
    items: [
      { title: 'Primo contatto', text: 'Ci scrive indicando «Acquisti» nell\'oggetto, con la presentazione della sua azienda, il catalogo e i certificati.' },
      { title: 'Valutazione', text: 'Questionario, esame del fascicolo tecnico e, se necessario, audit in loco, alla luce dei nostri cinque criteri.' },
      { title: 'Qualifica', text: 'Un capitolato e, per le materie farmaceutiche, un accordo di qualità fissano gli impegni di ciascuna parte.' },
      { title: 'Monitoraggio', text: 'Una rivalutazione periodica e un dialogo sulle prestazioni: qualità, tempi, reattività.' },
    ],
  },
  principles: {
    eyebrow: 'I nostri principi',
    title: 'Un rapporto fondato sulla fiducia',
    items: [
      { title: 'Equità e trasparenza', text: 'Le stesse regole per tutti, consultazioni chiare e decisioni motivate.' },
      { title: 'Integrità', text: 'Nessun regalo o vantaggio che possa influenzare una decisione d\'acquisto. Ogni conflitto di interessi viene dichiarato.' },
      { title: 'Riservatezza', text: 'Le informazioni tecniche e commerciali scambiate sono protette da entrambe le parti.' },
      { title: 'Partnership', text: 'Rapporti di lungo periodo, obiettivi condivisi e un dialogo regolare sulle prestazioni.' },
    ],
  },
  sustainable: {
    eyebrow: 'Acquisti responsabili',
    title: 'Una catena di approvvigionamento sostenibile',
    text: 'Ci aspettiamo che i nostri fornitori condividano i nostri impegni e li chiedano a loro volta ai propri subappaltatori.',
    items: [
      'Condizioni di lavoro dignitose: niente lavoro minorile né lavoro forzato, salari e orari conformi alla legge.',
      'La riduzione di rifiuti, imballaggi ed emissioni, e una gestione responsabile dell\'acqua e dell\'energia.',
      'La scelta di trasporti e imballaggi che limitino l\'impatto ambientale.',
      'Lo sviluppo di fornitori locali e regionali, per avvicinare la produzione ai pazienti.',
      'La continuità degli approvvigionamenti: piani di emergenza in caso di crisi o di difficoltà di trasporto.',
    ],
  },
  cta: {
    eyebrow: 'Acquisti',
    title: 'Proponga i suoi prodotti o servizi',
    text: 'Scriva a contact@tilamedpharma.com indicando «Acquisti» nell\'oggetto. Il nostro team esaminerà la sua proposta.',
    mail: 'Scrivere all\'ufficio Acquisti',
    subject: 'Acquisti',
  },
};
export default fournisseurs;
