import type { ClientsDict } from './fr';
const clients: ClientsDict = {
  meta: {
    title: 'Nuestros clientes · Mercados · TILAMED Pharma',
    description: 'Centrales de compras públicas, mayoristas distribuidores, organizaciones regionales e internacionales, farmacias y clínicas: los clientes de TILAMED Pharma en África Occidental.',
  },
  hero: {
    lead: 'Abastecemos a los actores públicos y privados de la salud en BENÍN y África Occidental.',
    cta1: 'Solicitar una oferta',
  },
  facts: [
    { value: '5', unit: 'familias', label: 'de clientes, públicos y privados' },
    { value: '15', unit: 'países', label: 'del espacio CEDEAO atendidos' },
    { value: '3', unit: 'canales', label: 'ventas directas, licitaciones, distribuidores' },
    { value: '1', unit: 'interlocutor', label: 'nuestra dirección comercial, para todas las ventas' },
  ],
  who: {
    eyebrow: 'A quién nos dirigimos',
    title: 'Ellos compran nuestros productos',
    text: 'Del mercado público al mostrador de la farmacia, nuestros productos llegan a cinco familias de clientes. Para cada una hemos adaptado nuestra forma de trabajar.',
    items: [
      { title: 'Centrales de compras públicas del espacio CEDEAO', examples: ['SOBAPS', 'CAMEG', 'ONPPC', 'SONIPHARM'], text: 'Respuestas completas a sus licitaciones y entregas planificadas según el consumo real.' },
      { title: 'Mayoristas distribuidores privados internacionales', examples: ['UBIPHARM', 'UBPHAR', 'GAPOB'], text: 'Un proveedor en la región: pedidos más frecuentes y menos existencias inmovilizadas.' },
      { title: 'Organizaciones regionales', examples: ['OOAS', 'Centre MURAZ', 'CIRDES'], text: 'Un socio local para los programas de salud de la subregión.' },
      { title: 'Organizaciones internacionales', examples: ['GIZ', 'AFD', 'OMS'], text: 'Expedientes de calidad completos y capacidad de entrega en los 15 países de la CEDEAO.' },
      { title: 'Farmacias y clínicas privadas', examples: ['En toda África Occidental'], text: 'Productos de salud esenciales disponibles cerca de ellas, a través de nuestros distribuidores autorizados.' },
    ],
    more: 'Más información',
  },
  how: {
    eyebrow: 'Cómo trabajamos',
    title: 'Tres formas de comprar nuestros productos',
    items: [
      { title: 'Ventas directas', text: 'A las centrales de compras públicas y privadas, por pedido o con entregas planificadas.', for: 'Centrales de compras, grandes cuentas' },
      { title: 'Licitaciones', text: 'Respondemos a licitaciones y consultas restringidas, nacionales e internacionales, con un expediente técnico y reglamentario completo.', for: 'Ministerios, organizaciones de salud' },
      { title: 'Red de distribuidores', text: 'Para el sector privado, nuestros productos se venden a través de nuestros distribuidores autorizados en cada país.', for: 'Farmacias, clínicas, mayoristas' },
    ],
    forLabel: 'Para',
    central: 'Todas las ventas están centralizadas por nuestra dirección comercial, con plazos de respuesta cortos.',
  },
  resources: {
    eyebrow: 'Para nuestros compradores',
    title: 'Todo lo necesario para preparar un pedido',
    items: [
      { text: 'Todas nuestras referencias, por gama, con sus presentaciones.' },
      { text: 'Fichas técnicas y certificados de análisis, a petición.' },
      { text: 'Nuestras autorizaciones, con sus números y fechas.' },
    ],
  },
  cta: {
    eyebrow: 'Dirección comercial',
    title: '¿Una necesidad, una licitación en preparación?',
    text: 'Escriba a nuestra dirección comercial indicando los productos, las cantidades y el país de entrega: le responderemos rápidamente.',
    imageAlt: 'Una clienta y un farmacéutico en una farmacia',
  },
};
export default clients;
