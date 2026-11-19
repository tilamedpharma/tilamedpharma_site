// Pagina «Autorizzazioni e licenze» · italiano.
import type { AgrementsDict } from './fr';

const agrements: AgrementsDict = {
  hero: { cta1: 'Le nostre autorizzazioni' },
  facts: [
    { value: '6', unit: '', label: 'autorizzazioni e licenze ottenute dalle autorità beninesi' },
    { value: '2023', unit: '', label: 'prima autorizzazione dell\'ABRP, il 30 giugno, dopo il parere favorevole del 16 maggio' },
    { value: '8', unit: 'anni', label: 'di esenzione fiscale e contributiva (Waiver, regime B)' },
  ],
  timeline: { eyebrow: 'Cronologia', by: 'Rilasciata da' },
  abrp: { eyebrow: 'Il regolatore' },
  standards: { eyebrow: 'Norme', text: 'Oltre alle autorizzazioni, lo stabilimento segue standard internazionali. A che punto siamo per ciascuno?' },
  cta: {
    eyebrow: 'Documenti',
    title: 'Le serve una copia delle nostre autorizzazioni?',
    text: 'Centrali acquisti, autorità o partner: ci scriva per ricevere i documenti di cui ha bisogno, oppure richieda la documentazione dei nostri prodotti.',
  },
};
export default agrements;
