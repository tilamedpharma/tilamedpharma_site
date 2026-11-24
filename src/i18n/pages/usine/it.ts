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
  lines: {
    "eyebrow": "Due linee di produzione",
    "title": "Grandi e piccoli volumi, due linee complementari",
    "intro": "Lo stabilimento avrà due linee distinte, attive fin dall'avvio: una per le soluzioni per infusione, l'altra per gli iniettabili in fiale.",
    "labels": {
      "container": "Contenitore",
      "volumes": "Volumi",
      "capacity": "Capacità prevista",
      "uses": "In ospedale"
    },
    "start": "Fin dall'avvio",
    "items": [
      {
        "code": "LVP",
        "name": "Grandi volumi",
        "sub": "Soluzioni per infusione",
        "container": "Flaconi di plastica formati, riempiti e sigillati in loco",
        "volumes": "Da 100 a 1000 mL",
        "capacity": "15 milioni l'anno",
        "uses": "Infusione, reidratazione, diluizione di farmaci",
        "link": "soufflage-remplissage-scellage",
        "cta": "Il processo di soffiaggio-riempimento-sigillatura"
      },
      {
        "code": "SVP",
        "name": "Piccoli volumi",
        "sub": "Iniettabili in fiale",
        "container": "Fiale monodose",
        "volumes": "Da 1 a 20 mL",
        "capacity": "35 milioni l'anno",
        "uses": "Iniezione diretta: urgenze, maternità, malaria grave, cure correnti",
        "link": "medicaments",
        "cta": "I farmaci previsti"
      }
    ]
  },
  flows: {
    "eyebrow": "Circolazione nello stabilimento",
    "title": "Quattro flussi che non si incrociano",
    "intro": "Lo stabilimento segue il principio della marcia in avanti: materiali, prodotti, persone e rifiuti hanno ciascuno il proprio percorso, perché ciò che è pulito non incroci mai ciò che non lo è.",
    "zones": {
      "g": "Zona generale",
      "c": "Zona pulita · grado C",
      "a": "Protezione di grado A"
    },
    "all": "Tutti i flussi",
    "show": "Mostra il flusso",
    "items": [
      {
        "key": "mat",
        "icon": "box",
        "title": "Materie prime",
        "steps": [
          {
            "t": "Ricevimento",
            "z": "g"
          },
          {
            "t": "Quarantena",
            "z": "g"
          },
          {
            "t": "Analisi in laboratorio",
            "z": "g"
          },
          {
            "t": "Pesatura",
            "z": "c"
          },
          {
            "t": "Preparazione",
            "z": "c"
          }
        ]
      },
      {
        "key": "prod",
        "icon": "drop",
        "title": "Prodotti",
        "steps": [
          {
            "t": "Riempimento",
            "z": "a"
          },
          {
            "t": "Sterilizzazione",
            "z": "g"
          },
          {
            "t": "Ispezione al 100%",
            "z": "g"
          },
          {
            "t": "Rilascio del lotto",
            "z": "g"
          },
          {
            "t": "Spedizione",
            "z": "g"
          }
        ]
      },
      {
        "key": "pers",
        "icon": "users",
        "title": "Personale",
        "steps": [
          {
            "t": "Spogliatoio",
            "z": "g"
          },
          {
            "t": "Sas di vestizione",
            "z": "c"
          },
          {
            "t": "Zona pulita",
            "z": "c"
          },
          {
            "t": "Sas di uscita",
            "z": "g"
          }
        ]
      },
      {
        "key": "waste",
        "icon": "recycle",
        "title": "Rifiuti",
        "steps": [
          {
            "t": "Raccolta",
            "z": "c"
          },
          {
            "t": "Uscita dedicata",
            "z": "g"
          },
          {
            "t": "Cernita",
            "z": "g"
          },
          {
            "t": "Smaltimento autorizzato",
            "z": "g"
          }
        ]
      }
    ],
    "note": "Schema di principio. L'organizzazione degli edifici è descritta nella pagina del sito di Sèmè-Podji.",
    "cta": "L'organizzazione del sito"
  },
  products: {
    "eyebrow": "I nostri futuri prodotti",
    "title": "Ciò che uscirà dalle nostre linee",
    "intro": "A Sèmè-Podji saranno fabbricate tre gamme. Entreranno in produzione man mano che si apriranno le linee e saranno ottenute le autorizzazioni.",
    "badge": "Non ancora disponibile",
    "items": [
      {
        "slug": "serums",
        "icon": "drop",
        "tag": "Linea LVP · avvio",
        "text": "Soluzioni di base e specifiche per l'infusione e la reidratazione.",
        "examples": [
          "Sodio cloruro 0,9%",
          "Glucosio 5%",
          "Ringer lattato"
        ]
      },
      {
        "slug": "medicaments",
        "icon": "vial",
        "tag": "Linea SVP · tre fasi",
        "text": "Iniettabili in fiale fin dall'avvio, poi antibiotici iniettabili, vaccini e sieri, soluzioni orali.",
        "examples": [
          "Ossitocina 10 UI",
          "Chinino iniettabile",
          "Ceftriaxone 1 g"
        ]
      },
      {
        "slug": "solutions-nutritionnelles",
        "icon": "flask",
        "tag": "Linee LVP e SVP · avvio",
        "text": "Glucosio concentrato e vitamine per l'apporto calorico e la correzione delle carenze.",
        "examples": [
          "Glucosio 10%",
          "Glucosio 30%",
          "Vitamine del complesso B"
        ]
      }
    ],
    "more": "Vedi la gamma",
    "cta": "Tutto il catalogo",
    "doc": "Essere informati sulla disponibilità"
  },
  jobs: {
    "eyebrow": "I team",
    "title": "I mestieri dello stabilimento",
    "text": "Far funzionare uno stabilimento farmaceutico richiede competenze specialistiche. Assumeremo localmente e formeremo i nostri team, con un trasferimento di competenze in cinque anni.",
    "value": "150",
    "unit": "posti di lavoro diretti previsti",
    "split": [
      {
        "v": 70,
        "l": "posti tecnici"
      },
      {
        "v": 30,
        "l": "posti amministrativi"
      }
    ],
    "familiesTitle": "Sei famiglie di mestieri",
    "cta1": "Scopri i nostri mestieri",
    "cta2": "Candidatura spontanea"
  },
  faq: {
    "eyebrow": "Domande frequenti",
    "title": "Lo stabilimento in domande",
    "more": "Per saperne di più",
    "items": [
      {
        "q": "Quando partirà lo stabilimento?",
        "a": "Lo stabilimento è in costruzione. La produzione partirà dopo l'installazione e la qualifica delle apparecchiature, la convalida dei primi lotti e l'ottenimento delle autorizzazioni. Annunceremo ogni tappa nelle nostre notizie.",
        "link": "actualites"
      },
      {
        "q": "La capacità potrà aumentare?",
        "a": "Sì. Lo stabilimento è progettato per aumentare la propria capacità e sono previste nuove produzioni: antibiotici iniettabili, poi vaccini, sieri e soluzioni orali.",
        "link": "medicaments"
      },
      {
        "q": "Perché flaconi di plastica e non di vetro?",
        "a": "Il flacone di plastica è leggero e infrangibile, e si svuota senza ingresso d'aria, il che limita i rischi di contaminazione. Viene fabbricato nel momento stesso del riempimento, senza contatto umano.",
        "link": "soufflage-remplissage-scellage"
      },
      {
        "q": "Come sarà garantita la sterilità?",
        "a": "Riempimento sotto protezione di grado A, sterilizzazione di ogni flacone nel suo imballaggio finale, controllo del 100% dei flaconi e analisi in laboratorio: nessun lotto sarà rilasciato senza l'approvazione del farmacista responsabile.",
        "link": "sterilisation"
      },
      {
        "q": "È possibile visitare lo stabilimento?",
        "a": "Sì, su appuntamento. Le visite sono proposte a partner, investitori, autorità e professionisti sanitari, nel rispetto delle regole di accesso alle zone pulite.",
        "link": "contact"
      },
      {
        "q": "Come diventare fornitore dello stabilimento?",
        "a": "Materie prime, imballaggi, apparecchiature, servizi: presenti la sua azienda dalla pagina Fornitori. Il nostro ufficio acquisti esaminerà la sua offerta secondo i nostri criteri di qualità.",
        "link": "fournisseurs"
      }
    ]
  },
  visit: {
    "badge": "Visite su appuntamento",
    "title": "Venite a vedere lo stabilimento prendere forma",
    "text": "Investitori, autorità sanitarie, partner tecnici o futuri clienti: organizziamo una visita al sito di Sèmè-Podji o un incontro con il nostro team.",
    "cta1": "Richiedi una visita",
    "cta2": "Diventa distributore"
  },
};
export default usine;
