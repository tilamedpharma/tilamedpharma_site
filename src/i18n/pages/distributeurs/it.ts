// Pagina «Diventare distributore» · italiano.
import type { DistributeursDict } from './fr';

const distributeurs: DistributeursDict = {
  hero: { cta1: 'Candidarsi' },
  facts: [
    { value: '15', unit: 'paesi', label: 'dell\'Africa occidentale nella nostra area di distribuzione' },
    { value: '2', unit: 'fonti', label: 'il nostro stabilimento in BENIN e grandi produttori internazionali' },
    { value: '< 1', unit: 'mese', label: 'obiettivo, dal nostro futuro stabilimento al paziente' },
    { value: '5', unit: 'famiglie', label: 'di prodotti, da un unico fornitore' },
  ],
  why: {
    eyebrow: 'Perché unirsi a noi',
    title: 'Perché distribuire TILAMED Pharma?',
    items: [
      { title: 'Un fornitore locale', text: 'Uno stabilimento in BENIN, a poche ore di strada e non a settimane di mare: ordini più frequenti, meno scorte immobilizzate, meno carenze.' },
      { title: 'Una qualità controllata', text: 'Ogni lotto sarà controllato dal nostro laboratorio e rilasciato dal farmacista responsabile, sotto la vigilanza dell\'ABRP.' },
      { title: 'Una gamma completa', text: 'Soluzioni infusionali, farmaci iniettabili, soluzioni nutrizionali, dispositivi medici e prodotti veterinari.' },
      { title: 'Affiancamento', text: 'La documentazione tecnica e regolatoria dei nostri prodotti, e un supporto per le sue risposte alle gare.' },
    ],
  },
  partner: {
    eyebrow: 'Una partnership',
    title: 'Impegni da entrambe le parti',
    giveTitle: 'Cosa le offriamo',
    give: [
      'I prodotti del nostro futuro stabilimento in BENIN e quelli di grandi produttori internazionali, consegnati dal nostro magazzino.',
      'Una documentazione completa per ogni prodotto: schede tecniche e certificati di analisi.',
      'Consegne pianificate in base alle sue esigenze reali.',
      'Un dialogo regolare sulle sue vendite, le sue scorte e le esigenze del suo mercato.',
    ],
  },
  steps: {
    eyebrow: 'Come funziona',
    title: 'Diventare distributore in quattro tappe',
    items: [
      { title: 'Candidatura', text: 'Compili il modulo qui sotto: la sua azienda, le sue autorizzazioni, i suoi canali.' },
      { title: 'Confronto e valutazione', text: 'Esaminiamo la sua candidatura, poi parliamo del suo mercato, dei suoi clienti e della sua capacità di stoccaggio.' },
      { title: 'Accordo di distribuzione', text: 'Un contratto fissa la zona, le gamme, gli impegni di ciascuno e le condizioni commerciali.' },
      { title: 'Avvio e monitoraggio', text: 'Primi ordini e documentazione, poi un monitoraggio regolare delle vendite e delle scorte.' },
    ],
  },
  coverage: {
    eyebrow: 'Area coperta',
    title: '15 paesi dell\'Africa occidentale',
    text: 'Cerchiamo partner in ciascuno dei 15 paesi dell\'Africa occidentale, per i canali pubblici come per quelli privati.',
  },
  contact: 'Preferisce scriverci?',
  formLead: 'Bastano poche informazioni sulla sua azienda per iniziare: la ricontatteremo per parlarne.',
};
export default distributeurs;
