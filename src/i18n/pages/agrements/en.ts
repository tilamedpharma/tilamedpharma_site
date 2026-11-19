// "Approvals and licences" page · English.
import type { AgrementsDict } from './fr';

const agrements: AgrementsDict = {
  hero: { cta1: 'Our approvals' },
  facts: [
    { value: '6', unit: '', label: 'approvals and licences obtained from the Beninese authorities' },
    { value: '2023', unit: '', label: 'first ABRP authorisation, on 30 June, after the favourable opinion of 16 May' },
    { value: '8', unit: 'years', label: 'of tax and social security exemption (Waiver, regime B)' },
  ],
  timeline: { eyebrow: 'Timeline', by: 'Issued by' },
  abrp: { eyebrow: 'The regulator' },
  standards: { eyebrow: 'Standards', text: 'Beyond its licences, the plant follows international standards. Where do we stand on each?' },
  cta: {
    eyebrow: 'Documents',
    title: 'Need a copy of our approvals?',
    text: 'Purchasing centres, authorities or partners: write to us for the documents you need, or request our product documentation.',
  },
};
export default agrements;
