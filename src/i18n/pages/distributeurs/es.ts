// Página «Ser distribuidor» · español.
import type { DistributeursDict } from './fr';

const distributeurs: DistributeursDict = {
  hero: { cta1: 'Postularse' },
  facts: [
    { value: '15', unit: 'países', label: 'de África Occidental en nuestra zona de distribución' },
    { value: '2', unit: 'fuentes', label: 'nuestra fábrica en BENÍN y grandes fabricantes internacionales' },
    { value: '< 1', unit: 'mes', label: 'objetivo, de nuestra futura planta al paciente' },
    { value: '5', unit: 'familias', label: 'de productos, con un solo proveedor' },
  ],
  why: {
    eyebrow: 'Por qué unirse a nosotros',
    title: '¿Por qué distribuir TILAMED Pharma?',
    items: [
      { title: 'Un proveedor local', text: 'Una planta en BENÍN, a pocas horas por carretera y no a semanas por mar: pedidos más frecuentes, menos existencias inmovilizadas, menos rupturas.' },
      { title: 'Una calidad controlada', text: 'Cada lote será controlado por nuestro laboratorio y liberado por el farmacéutico responsable, bajo la supervisión de la ABRP.' },
      { title: 'Una gama completa', text: 'Sueros, medicamentos inyectables, soluciones nutricionales, dispositivos médicos y productos veterinarios.' },
      { title: 'Acompañamiento', text: 'La documentación técnica y reglamentaria de nuestros productos, y apoyo para sus respuestas a licitaciones.' },
    ],
  },
  partner: {
    eyebrow: 'Una colaboración',
    title: 'Compromisos por ambas partes',
    giveTitle: 'Lo que le aportamos',
    give: [
      'Los productos de nuestra futura planta en BENÍN y los de grandes fabricantes internacionales, entregados desde nuestro almacén.',
      'Una documentación completa para cada producto: fichas técnicas y certificados de análisis.',
      'Entregas planificadas según sus necesidades reales.',
      'Un diálogo regular sobre sus ventas, sus existencias y las necesidades de su mercado.',
    ],
  },
  steps: {
    eyebrow: 'Cómo funciona',
    title: 'Ser distribuidor en cuatro etapas',
    items: [
      { title: 'Candidatura', text: 'Rellene el formulario de abajo: su empresa, sus autorizaciones, sus circuitos.' },
      { title: 'Diálogo y evaluación', text: 'Estudiamos su expediente y después hablamos de su mercado, sus clientes y su capacidad de almacenamiento.' },
      { title: 'Acuerdo de distribución', text: 'Un contrato fija la zona, las gamas, los compromisos de cada parte y las condiciones comerciales.' },
      { title: 'Lanzamiento y seguimiento', text: 'Primeros pedidos y documentación, y después un seguimiento regular de las ventas y las existencias.' },
    ],
  },
  coverage: {
    eyebrow: 'Zona cubierta',
    title: '15 países de África Occidental',
    text: 'Buscamos socios en cada uno de los 15 países de África Occidental, tanto para los circuitos públicos como privados.',
  },
  contact: '¿Prefiere escribirnos?',
  formLead: 'Bastan algunos datos sobre su empresa para empezar: nos pondremos en contacto con usted para hablarlo.',
};
export default distributeurs;
