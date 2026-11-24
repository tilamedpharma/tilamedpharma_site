import type { UsineDict } from './fr';

const usine: UsineDict = {
  meta: {
    title: 'Il nostro stabilimento · TILAMED Pharma, Sèmè-Podji (BENIN)',
    description: 'Uno stabilimento moderno di produzione di soluzioni iniettabili a Sèmè-Podji: trattamento dell\'acqua, soffiaggio-riempimento-sigillatura, sterilizzazione, controllo al 100 % e laboratorio.',
  },
  hero: {
    title: 'Il nostro stabilimento',
    lead: 'Un\'unità moderna ed espandibile di produzione di soluzioni iniettabili, in costruzione a Sèmè-Podji.',
    cta1: 'Il processo in 7 fasi',
    cta2: 'Il sito di Sèmè-Podji',
  },
  facts: [
    { value: '15', unit: 'milioni', code: 'LVP', label: 'soluzioni di grande volume all\'anno' },
    { value: '35', unit: 'milioni', code: 'SVP', label: 'iniettabili di piccolo volume all\'anno' },
    { value: '2', unit: 'ettari', code: '', label: 'di sito industriale a Sèmè-Podji' },
    { value: '100–1000', unit: 'millilitri', code: '', label: 'formati di flaconi per infusione' },
  ],
  site: {
    eyebrow: 'Un sito integrato',
    title: 'Tutta la catena di fabbricazione riunita in un unico sito',
    text: 'Il nostro stabilimento riunirà il trattamento dell\'acqua farmaceutica, la preparazione delle soluzioni, la fabbricazione dei flaconi, la sterilizzazione, l\'ispezione, il laboratorio di controllo qualità e il magazzino. È progettato per poter aumentare la propria capacità.',
    badge: 'Progettato per aumentare la capacità',
    imageAlt: 'Apparecchiature in acciaio inossidabile in uno stabilimento farmaceutico',
  },
  process: {
    eyebrow: 'Il processo',
    title: 'Sette fasi, dall\'acqua alla consegna',
    intro: 'Ogni fase ha la sua pagina dettagliata. Ecco l\'essenziale di ciò che accade tra l\'arrivo dell\'acqua e la partenza dei cartoni.',
    more: 'Scopri la fase',
    docTitle: 'Servono i dati tecnici?',
    docText: 'Professionisti sanitari e acquirenti: richiedete le specifiche dei nostri prodotti e del nostro processo.',
    docCta: 'Richiedi la documentazione',
    steps: [
      { title: 'Trattamento dell\'acqua', text: 'Una soluzione per infusione contiene oltre il 90 % di acqua. Produrremo in sede due qualità di acqua farmaceutica.', points: ['Doppia osmosi inversa ed elettrodeionizzazione', 'Acqua per preparazioni iniettabili per distillazione', 'Conducibilità e temperatura monitorate in continuo'] },
      { title: 'Preparazione delle soluzioni', text: 'Ogni soluzione è preparata per lotti, secondo una formula convalidata, in serbatoi di acciaio inossidabile.', points: ['Serbatoi con celle di carico e agitatori', 'Controlli in processo: concentrazione, pH, aspetto', 'Filtrazione prima del riempimento'] },
      { title: 'Soffiaggio, riempimento, sigillatura', text: 'Un\'unica macchina forma il flacone, lo riempie e lo sigilla, senza alcun contatto umano.', points: ['Flacone fabbricato al momento stesso del riempimento', 'Riempimento sotto flusso d\'aria protetto', 'Cambio formato in circa mezz\'ora'] },
      { title: 'Sterilizzazione', text: 'Ogni flacone riempito è sterilizzato nel suo confezionamento finale, in autoclave ad aspersione di acqua surriscaldata.', points: ['Cicli convalidati e registrati per ogni carico', 'Riscaldamento omogeneo che protegge la plastica', 'Separazione fisica prima e dopo la sterilizzazione'] },
      { title: 'Controllo al 100 %', text: 'Nessun flacone lascerà lo stabilimento senza essere stato controllato.', points: ['Prova di tenuta di ogni flacone', 'Ispezione visiva sotto luce', 'Scarto automatico dei cartoni non conformi'] },
      { title: 'Laboratorio di controllo qualità', text: 'Materie prime, acque e lotti sono analizzati prima di ogni rilascio.', points: ['Cromatografia (HPLC) e spettrometria', 'Microbiologia: sterilità ed endotossine', 'Rilascio da parte del farmacista responsabile'] },
      { title: 'Confezionamento e consegna', text: 'Stoccaggio secondo le buone pratiche di distribuzione e consegna con il nostro servizio logistico.', points: ['Consegna in base alle reali esigenze dei clienti', 'Monitoraggio di ordini e scorte in tempo reale', 'Export tramite spedizioniere o consegna organizzata'] },
    ],
  },
  explore: {
    eyebrow: 'Oltre la produzione',
    title: 'Ciò che rende possibile la produzione',
    intro: 'Zone pulite, servizi tecnici, formazione delle squadre e il sito stesso: ogni tema ha la sua pagina.',
    more: 'Scopri di più',
  },
  green: {
    badge: 'Green building',
    title: 'Uno stabilimento pensato per limitare il proprio impatto',
    text: 'Acqua, energia, rifiuti: lo stabilimento è in fase di certificazione EDGE, lo standard green building dell\'IFC (Gruppo Banca Mondiale).',
    cta: 'Il nostro approccio ambientale',
    imageAlt: 'Tetti industriali dotati di pannelli solari',
  },
  location: {
    eyebrow: 'Il sito di Sèmè-Podji',
    title: 'Una posizione strategica, tra Cotonou e la NIGERIA',
    items: [
      'Nel comune di Sèmè-Podji, dipartimento dell\'Ouémé, nel sud del BENIN',
      'A ridosso della frontiera di Kraké, principale passaggio verso la NIGERIA',
      'Vicino a Cotonou e al suo porto autonomo',
      'Nella zona industriale di Sèmè-Podji',
    ],
    cta: 'Il sito di Sèmè-Podji',
    directions: 'Indicazioni',
  },
};
export default usine;
