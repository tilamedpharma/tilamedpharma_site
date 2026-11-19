// Página «Autorizações e licenças» · português.
import type { AgrementsDict } from './fr';

const agrements: AgrementsDict = {
  hero: { cta1: 'As nossas autorizações' },
  facts: [
    { value: '6', unit: '', label: 'autorizações e licenças obtidas junto das autoridades beninenses' },
    { value: '2023', unit: '', label: 'primeira autorização da ABRP, a 30 de junho, após o parecer favorável de 16 de maio' },
    { value: '8', unit: 'anos', label: 'de isenção fiscal e social (Waiver, regime B)' },
  ],
  timeline: { eyebrow: 'Cronologia', by: 'Emitida por' },
  abrp: { eyebrow: 'O regulador' },
  standards: { eyebrow: 'Normas', text: 'Para além das autorizações, a fábrica segue referenciais internacionais. Em que ponto estamos em cada um?' },
  cta: {
    eyebrow: 'Documentos',
    title: 'Precisa de uma cópia das nossas autorizações?',
    text: 'Centrais de compras, autoridades ou parceiros: escreva-nos para receber os documentos de que precisa, ou peça a documentação dos nossos produtos.',
  },
};
export default agrements;
