import type { PresenceDict } from './fr';
const presence: PresenceDict = {
  meta: {
    title: 'Presenza regionale · Mercati · TILAMED Pharma',
    description: 'Uno stabilimento in BENIN, i 15 paesi della CEDEAO coperti e uffici in BENIN, BURKINA FASO e FRANCIA.',
  },
  hero: {
    lead: 'Uno stabilimento in BENIN, 15 paesi dell\'Africa occidentale coperti e una presenza internazionale.',
  },
  facts: [
    { value: '15', unit: 'paesi', label: 'dell\'area CEDEAO coperti' },
    { value: '400', unit: 'M +', label: 'di abitanti in Africa occidentale' },
    { value: '1', unit: 'stabilimento', label: 'a Sèmè-Podji, al confine con la NIGERIA' },
    { value: '3', unit: 'uffici', label: 'in BENIN, BURKINA FASO e FRANCIA' },
  ],
  map: {
    legend: 'Dallo stabilimento di Sèmè-Podji, le nostre rotte di approvvigionamento serviranno le capitali della sottoregione.',
  },
  sites: {
    eyebrow: 'Le nostre sedi',
    title: 'Uno stabilimento, tre uffici',
    more: 'Indirizzi e telefoni',
  },
  why: {
    eyebrow: 'Perché tutta la sottoregione',
    title: 'Quindici paesi, sfide sanitarie comuni',
    text: 'Non puntiamo solo al BENIN: la sottoregione condivide bisogni simili, e uno stabilimento regionale può rispondervi.',
    items: [
      { title: 'Malattie simili', text: 'Gli stessi bisogni di soluzioni per infusione, anti-infettivi e cure essenziali, da un paese all\'altro.' },
      { title: 'Popolazioni giovani', text: 'Oltre 400 milioni di abitanti, in forte crescita: bisogni sanitari che aumentano ogni anno.' },
      { title: 'La stessa dipendenza', text: 'Farmaci quasi tutti importati, a prezzo di tempi lunghi e carenze frequenti.' },
    ],
  },
  gallery: {
    title: 'Una regione, quindici mercati',
    captions: ['Lagos · NIGERIA', 'Abidjan · COSTA D\'AVORIO', 'Accra · GHANA', 'Dakar · SENEGAL', 'Cotonou · BENIN', 'Porto di Tema · GHANA'],
  },
  serve: {
    eyebrow: 'Come serviamo ogni paese',
    title: 'Direttamente o con i nostri distributori',
    direct: { title: 'Direttamente', text: 'Per le centrali d\'acquisto pubbliche e le organizzazioni regionali e internazionali.' },
    partners: { title: 'Con i nostri distributori', text: 'Per i grossisti, le farmacie e le cliniche private, con un distributore autorizzato in ogni paese.' },
  },
  cta: {
    eyebrow: 'Distributori',
    title: 'Siete grossisti in uno di questi 15 paesi?',
    text: 'Entrate nella nostra rete di distributori autorizzati.',
  },
};
export default presence;
