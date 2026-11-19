// Página «Nuestros proveedores» · español.
import type { FournisseursDict } from './fr';

const fournisseurs: FournisseursDict = {
  meta: {
    title: 'Nuestros proveedores · Central de compras · TILAMED Pharma',
    description: 'Grandes fabricantes socios, criterios de selección, proceso de homologación y principios de compra: lo que esperamos de nuestros proveedores y lo que ellos pueden esperar de nosotros.',
  },
  hero: {
    lead: 'Lo que esperamos de nuestros proveedores y lo que ellos pueden esperar de nosotros.',
    cta1: 'Nuestros criterios de selección',
    cta2: 'Ser proveedor',
  },
  partners: {
    eyebrow: 'Nuestros socios industriales',
    title: 'Grandes fabricantes a nuestro lado',
    text: [
      'Tanto para nuestra planta como para nuestra central de compras, trabajamos con grandes fabricantes internacionales de equipos industriales, dispositivos médicos y productos de laboratorio.',
      'Los fabricantes de los equipos de la planta forman además a nuestros equipos durante cinco años: es nuestro programa de transferencia de competencias.',
    ],
  },
  criteria: {
    eyebrow: 'Selección',
    title: 'Cinco criterios de selección',
    text: 'Cada proveedor se evalúa antes del primer pedido y después de forma periódica. Para las materias que entran en el producto, la evaluación incluye un cuestionario, el estudio del expediente técnico y, si es necesario, una auditoría in situ.',
    items: [
      { title: 'Calidad', text: 'Un sistema de gestión de la calidad reconocido, certificados de análisis para cada lote y, para las materias farmacéuticas, el cumplimiento de las buenas prácticas de fabricación.' },
      { title: 'Conformidad reglamentaria', text: 'Productos y documentos conformes a las farmacopeas y a las exigencias de la Agencia Beninesa de Regulación Farmacéutica (ABRP).' },
      { title: 'Fiabilidad', text: 'Plazos cumplidos, capacidad suficiente, trazabilidad completa e información rápida ante cualquier cambio o incidente.' },
      { title: 'Coste total', text: 'Un precio justo, valorado junto con el transporte, los plazos, el almacenamiento y el riesgo de ruptura, y no solo el precio de compra.' },
      { title: 'Responsabilidad', text: 'El respeto de los derechos humanos, la salud y la seguridad en el trabajo, el medio ambiente y las normas anticorrupción.' },
    ],
  },
  steps: {
    eyebrow: 'Ser proveedor',
    title: 'Cuatro etapas para unirse a nosotros',
    items: [
      { title: 'Primer contacto', text: 'Nos escribe indicando «Compras» en el asunto, con la presentación de su empresa, su catálogo y sus certificados.' },
      { title: 'Evaluación', text: 'Cuestionario, estudio del expediente técnico y, si es necesario, auditoría in situ, según nuestros cinco criterios.' },
      { title: 'Homologación', text: 'Un pliego de condiciones y, para las materias farmacéuticas, un acuerdo de calidad fijan los compromisos de cada parte.' },
      { title: 'Seguimiento', text: 'Una reevaluación periódica y un diálogo sobre el desempeño: calidad, plazos, capacidad de respuesta.' },
    ],
  },
  principles: {
    eyebrow: 'Nuestros principios',
    title: 'Una relación basada en la confianza',
    items: [
      { title: 'Equidad y transparencia', text: 'Las mismas reglas para todos, consultas claras y decisiones motivadas.' },
      { title: 'Integridad', text: 'Ningún regalo ni ventaja que pueda influir en una decisión de compra. Todo conflicto de intereses se declara.' },
      { title: 'Confidencialidad', text: 'La información técnica y comercial intercambiada está protegida por ambas partes.' },
      { title: 'Colaboración', text: 'Relaciones a largo plazo, objetivos compartidos y un diálogo regular sobre el desempeño.' },
    ],
  },
  sustainable: {
    eyebrow: 'Compras responsables',
    title: 'Una cadena de suministro sostenible',
    text: 'Esperamos que nuestros proveedores compartan nuestros compromisos y que los exijan a su vez a sus propios subcontratistas.',
    items: [
      'Condiciones de trabajo dignas: sin trabajo infantil ni trabajo forzoso, con salarios y horarios conformes a la ley.',
      'La reducción de residuos, embalajes y emisiones, y una gestión responsable del agua y la energía.',
      'La elección de transportes y embalajes que limiten el impacto ambiental.',
      'El desarrollo de proveedores locales y regionales, para acercar la producción a los pacientes.',
      'La continuidad del suministro: planes de contingencia en caso de crisis o de dificultades de transporte.',
    ],
  },
  cta: {
    eyebrow: 'Compras',
    title: 'Proponga sus productos o servicios',
    text: 'Escriba a contact@tilamedpharma.com indicando «Compras» en el asunto. Nuestro equipo estudiará su propuesta.',
    mail: 'Escribir al servicio de Compras',
    subject: 'Compras',
  },
};
export default fournisseurs;
