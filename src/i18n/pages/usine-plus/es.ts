import type { Topic } from './fr';

const pages: Record<string, Topic> = {
  'site-seme-podji': {
    meta: { title: 'El sitio de Sèmè-Podji · Nuestra planta · TILAMED Pharma', description: 'Un sitio de 2 hectáreas en la zona industrial de Sèmè-Podji, cerca de la frontera de Kraké, de Cotonú y de su puerto.' },
    lead: 'Un sitio de 2 hectáreas, justo después de la frontera de Kraké, entre Cotonú y NIGERIA.',
    intro: '',
    facts: [
      { value: '2', unit: 'ha', label: 'de sitio industrial, es decir, 20 000 m²' },
    ],
    blocks: [
      { kind: 'points', title: 'Una ubicación estratégica', items: [
        'En el municipio de Sèmè-Podji, departamento de Ouémé, al sur de BENÍN.',
        'Junto a la frontera de Kraké, principal punto de paso hacia NIGERIA.',
        'Cerca de Cotonú y de su puerto autónomo, que concentra la mayor parte del comercio del país.',
        'En la zona industrial de Sèmè-Podji.',
      ] },
      { kind: 'cards', title: 'La organización del sitio', text: 'El sitio separará claramente las zonas limpias de las zonas generales.', items: [
        { title: 'Edificio de producción', text: 'Las líneas de fabricación, en zonas de atmósfera controlada.' },
        { title: 'Recepción y cuarentena', text: 'Las materias primas esperan aquí su control antes de usarse.' },
        { title: 'Laboratorio', text: 'El control de calidad de materias, aguas y lotes.' },
        { title: 'Almacén de productos terminados', text: 'El almacenamiento de los productos liberados antes de su entrega.' },
        { title: 'Servicios técnicos', text: 'El agua, el vapor, el aire y el frío que hacen funcionar la planta.' },
        { title: 'Vestuarios y esclusas', text: 'El paso controlado entre zonas generales y zonas limpias.' },
      ] },
    ],
    note: '',
  },
  'salles-propres': {
    meta: { title: 'Salas limpias · Nuestra planta · TILAMED Pharma', description: 'Zonas de grado C y protección de grado A en el punto de llenado: filtración HEPA, cascada de presión, materiales lisos y vigilancia continua.' },
    lead: 'Las etapas críticas se desarrollarán en un entorno de atmósfera controlada.',
    intro: 'La fabricación de las soluciones inyectables está protegida en zonas de grado C, con una protección de grado A en el punto de llenado, conforme a las buenas prácticas de fabricación.',
    facts: [
      { value: 'C', unit: '', label: 'Grado de las zonas de fabricación' },
      { value: 'A', unit: '', label: 'Protección en el punto de llenado' },
    ],
    blocks: [
      { kind: 'cards', title: 'Una atmósfera controlada', items: [
        { title: 'Filtración HEPA', text: 'El aire impulsado en las salas pasa por filtros de muy alta eficacia.' },
        { title: 'Cascada de presión', text: 'Las salas más limpias están en sobrepresión para impedir la entrada de contaminantes.' },
        { title: 'Materiales lisos', text: 'Paneles, puertas y suelos de resina epoxi, fáciles de limpiar y desinfectar.' },
        { title: 'Vigilancia', text: 'Partículas, presión, temperatura y humedad bajo seguimiento, con alarmas.' },
      ] },
    ],
    note: 'El personal accede a las zonas limpias por vestuarios y esclusas dedicados, con una indumentaria adaptada a cada grado.',
  },
  utilites: {
    meta: { title: 'Servicios industriales · Nuestra planta · TILAMED Pharma', description: 'Aire comprimido, vapor, agua helada, redes de agua purificada y vapor puro, mantenimiento en el sitio: los servicios técnicos de la planta.' },
    lead: 'Aire comprimido, vapor, agua helada: los servicios técnicos que hacen funcionar la planta.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'cards', title: 'Los servicios técnicos', items: [
        { title: 'Aire comprimido', text: 'Aire comprimido exento de aceite para los equipos de producción.' },
        { title: 'Vapor industrial', text: 'Una caldera produce el vapor industrial.' },
        { title: 'Agua helada', text: 'Grupo de agua helada y torre de refrigeración para los procesos y el tratamiento del aire.' },
        { title: 'Redes de tuberías', text: 'Para el agua purificada, el agua para inyectables, el vapor puro y el aire comprimido.' },
        { title: 'Mantenimiento en el sitio', text: 'Taller de mantenimiento y almacén de piezas de recambio en el sitio.' },
      ] },
    ],
    note: 'El mantenimiento preventivo y correctivo lo realizan nuestros técnicos, formados por los fabricantes de los equipos.',
  },
  'transfert-technologie': {
    meta: { title: 'Transferencia de tecnología · Nuestra planta · TILAMED Pharma', description: 'Cinco años de asistencia técnica permanente en el sitio y formaciones para operadores, laboratorio y mantenimiento: el saber hacer se queda en BENÍN.' },
    lead: 'Cinco años de asistencia permanente para que el saber hacer se quede en BENÍN.',
    intro: 'Desde la instalación y la puesta en marcha de la planta, los fabricantes de los equipos forman a nuestros equipos en BENÍN. Sus ingenieros permanecen después destacados en el sitio durante cinco años para acompañar la producción.',
    facts: [
      { value: '5', unit: 'años', label: 'de asistencia técnica permanente, prorrogable' },
      { value: '70', unit: '%', label: 'de puestos técnicos' },
    ],
    blocks: [
      { kind: 'points', title: 'Las formaciones previstas', items: [
        'Formación funcional y técnica de los operadores y técnicos.',
        'Formación en buenas prácticas de fabricación e higiene en zona limpia.',
        'Formación del personal de laboratorio en los métodos de análisis.',
        'Formación del equipo de mantenimiento en los equipos críticos.',
      ] },
    ],
    note: '',
  },
};
export default pages;
