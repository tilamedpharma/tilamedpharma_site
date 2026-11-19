// Página «Nuestra distribución» · español.
import type { DistributionDict } from './fr';

const distribution: DistributionDict = {
  meta: {
    title: 'Nuestra distribución · Central de compras · TILAMED Pharma',
    description: 'De nuestra planta y nuestros proveedores al paciente: un circuito corto, controlado y trazable, en BENÍN y en toda África Occidental.',
  },
  hero: {
    lead: 'De nuestra planta y nuestros proveedores al paciente: un circuito corto, controlado y trazable.',
    cta1: 'Nuestro circuito',
  },
  facts: [
    { value: '< 1', unit: 'mes', label: 'de nuestra planta de Sèmè-Podji al paciente' },
    { value: '15', unit: 'países', label: 'de África Occidental en nuestra zona de distribución' },
    { value: '2', unit: 'orígenes', label: 'lo que fabricamos y lo que compramos, en un mismo circuito' },
  ],
  flow: {
    eyebrow: 'Nuestro circuito',
    title: 'Dos orígenes, un solo circuito',
    intro: 'Las soluciones inyectables fabricadas en Sèmè-Podji y los productos comprados a grandes fabricantes siguen el mismo camino: control, almacenamiento y entrega a nuestros clientes.',
    label: 'Esquema del circuito de distribución',
    sources: [
      { title: 'Fabricado en BENÍN', text: 'Soluciones inyectables producidas, controladas y liberadas lote a lote en Sèmè-Podji.' },
      { title: 'Comprado a grandes fabricantes', text: 'Medicamentos, dispositivos médicos y productos de laboratorio, verificados a la recepción.' },
    ],
    hub: { title: 'Nuestro almacén', text: 'Almacenamiento controlado, seguimiento por lote y fecha de caducidad.' },
    dests: ['Centrales de compras públicas', 'Distribuidores y mayoristas', 'Hospitales, clínicas y farmacias', 'Programas de salud'],
    end: { title: 'Los pacientes', text: 'Productos de calidad, disponibles cerca de casa.' },
  },
  steps: {
    eyebrow: 'Paso a paso',
    title: 'Las etapas, una a una',
    imageAlt: 'Clientes eligiendo un medicamento en una farmacia',
    items: [
      { title: 'La planta y nuestros proveedores', text: 'Cada lote fabricado es controlado por nuestro laboratorio y liberado por el farmacéutico responsable. Cada producto comprado se verifica a la recepción: documentos, etiquetado, estado de los bultos.' },
      { title: 'Nuestro almacén', text: 'Los productos se almacenan en condiciones controladas, con seguimiento por lote y fecha de caducidad: los primeros en caducar son los primeros en salir.' },
      { title: 'Centrales de compras y distribuidores', text: 'Entregamos a las centrales de compras públicas, las organizaciones de salud y nuestros distribuidores autorizados en BENÍN y en la subregión.' },
      { title: 'Hospitales, clínicas y farmacias', text: 'Los centros sanitarios reciben productos disponibles más rápido, en la cantidad adaptada a su consumo real.' },
      { title: 'Los pacientes', text: 'Productos sanitarios de calidad, disponibles cerca de casa, a un precio asequible.' },
    ],
  },
  guarantees: {
    eyebrow: 'Nuestros compromisos',
    title: 'Lo que garantizamos a nuestros clientes',
    items: [
      { title: 'Un almacenamiento controlado', text: 'Condiciones de conservación respetadas y rotación de existencias según las fechas de caducidad.' },
      { title: 'La trazabilidad', text: 'Cada envío registrado por cliente y por lote, y un procedimiento de retirada coordinado con las autoridades.' },
      { title: 'La disponibilidad', text: 'Existencias de reserva para hacer frente a las rupturas y a las subidas de precios en el mercado.' },
      { title: 'La proximidad', text: 'Una planta en BENÍN y una oficina regional en Uagadugú, cerca de nuestros clientes de la subregión.' },
    ],
  },
  why: {
    eyebrow: 'Por qué es importante',
    text: 'Casi la mitad de la población africana no tiene acceso regular a los medicamentos esenciales. Acortar el circuito es acercar los medicamentos a los pacientes.',
  },
  cta: {
    eyebrow: 'Distribución',
    title: 'Distribuya nuestros productos',
    text: 'Mayorista, distribuidor o central de compras: únase a nuestra red para que nuestros productos estén disponibles en su país.',
  },
};
export default distribution;
