import type { BeninDict } from './fr';

const benin: BeninDict = {
  meta: {
    title: '¿Por qué producir en BENÍN? · TILAMED Pharma',
    description: 'BENÍN importa la totalidad de sus soluciones inyectables. Producir en el país mejora la disponibilidad, la trazabilidad, los precios y el empleo.',
  },
  hero: {
    lead: 'BENÍN importa hoy la totalidad de sus soluciones inyectables. Producir en el país lo cambia todo para los pacientes.',
    cta: 'La situación',
  },
  facts: [
    { value: '100', unit: '%', label: 'de las soluciones inyectables consumidas en BENÍN son importadas' },
    { value: '0', unit: '', label: 'fabricante local de soluciones inyectables antes de TILAMED' },
    { value: '15', unit: 'países', label: 'de África Occidental que abastecer desde BENÍN' },
    { value: '400', unit: 'M +', label: 'de habitantes en África Occidental' },
  ],
  problem: {
    eyebrow: 'La situación',
    title: 'Un producto pesado y caro de importar',
    text: 'Una solución de perfusión se compone esencialmente de agua. Es pesada y voluminosa: su transporte es caro, porque el flete se calcula por peso y volumen, y su almacenamiento ocupa mucho espacio. Aun así, los mayoristas deben mantener permanentemente varios meses de existencias para evitar rupturas.',
    todayLabel: 'Hoy · importada',
    today: ['Fabricación en el extranjero', 'Flete marítimo facturado por peso y volumen', 'Varios meses de existencias en los mayoristas', 'Hospitales y pacientes'],
    tomorrowLabel: 'Mañana · fabricada en BENÍN',
    tomorrow: ['Fabricación en Sèmè-Podji', 'Entrega por carretera, según las necesidades reales', 'Hospitales y pacientes'],
  },
  benefits: {
    eyebrow: 'Los beneficios',
    title: 'Lo que cambia la producción local',
    items: [
      { title: 'Disponibilidad', text: 'Existencias cercanas, entregadas según las necesidades reales de los clientes, sin meses de espera.' },
      { title: 'Trazabilidad', text: 'Un circuito corto y controlado que ayuda a luchar contra los medicamentos falsificados.' },
      { title: 'Precio', text: 'Menos flete, menos almacenamiento, menos pérdidas cambiarias: precios más justos.' },
      { title: 'Empleo', text: 'Empleos cualificados y una transferencia de saber hacer industrial.' },
    ],
  },
  position: {
    eyebrow: 'Una posición estratégica',
    title: 'En el corazón de África Occidental',
    text: 'Nuestra planta se instala en Sèmè-Podji, entre Cotonú y la frontera con NIGERIA: un emplazamiento pensado para abastecer a toda la región.',
    corridor: 'En el corredor costero Abidjan – Lagos',
    port: 'Puerto',
    border: 'Frontera',
    items: [
      { title: 'NIGERIA a las puertas', text: 'El emplazamiento linda con la frontera del país más poblado de África.' },
      { title: 'El puerto de Cotonú, muy cerca', text: 'La puerta de entrada comercial del país, tanto para las materias primas como para los equipos.' },
      { title: 'Toda una región que abastecer', text: 'Quince países y más de 400 millones de habitantes abastecidos desde una sola planta.' },
    ],
  },
  env: {
    eyebrow: 'El marco',
    title: 'Un entorno favorable',
    items: [
      'Una voluntad política firme de desarrollar la industria farmacéutica nacional.',
      'Un código de inversiones que sitúa la salud y la transformación industrial entre los sectores prioritarios.',
      'Ventajas aduaneras y fiscales en las zonas económicas especiales.',
      'Una mano de obra joven y cualificada, formada en las universidades de la región y fuera de ella.',
    ],
  },
  covid: {
    eyebrow: 'Soberanía sanitaria',
    text: 'La crisis del COVID-19 demostró hasta qué punto la dependencia de las importaciones debilita los sistemas de salud. Producir localmente es asegurar el acceso a los medicamentos esenciales.',
  },
};
export default benin;
