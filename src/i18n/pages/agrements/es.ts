// Página «Autorizaciones y licencias» · español.
import type { AgrementsDict } from './fr';

const agrements: AgrementsDict = {
  hero: { cta1: 'Nuestras autorizaciones' },
  facts: [
    { value: '6', unit: '', label: 'autorizaciones y licencias obtenidas de las autoridades beninesas' },
    { value: '2023', unit: '', label: 'primera autorización de la ABRP, el 30 de junio, tras el dictamen favorable del 16 de mayo' },
    { value: '8', unit: 'años', label: 'de exención fiscal y social (Waiver, régimen B)' },
  ],
  timeline: { eyebrow: 'Cronología', by: 'Expedida por' },
  abrp: { eyebrow: 'El regulador' },
  standards: { eyebrow: 'Normas', text: 'Más allá de las autorizaciones, la planta sigue referenciales internacionales. ¿En qué punto estamos con cada uno?' },
  cta: {
    eyebrow: 'Documentos',
    title: '¿Necesita una copia de nuestras autorizaciones?',
    text: 'Centrales de compras, autoridades o socios: escríbanos para recibir los documentos que necesite, o solicite la documentación de nuestros productos.',
  },
};
export default agrements;
