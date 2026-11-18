import type { ProduitsDict } from './fr';

const produits: ProduitsDict = {
  ui: { seeRange: 'Ver la gama', docCta: 'Solicitar la documentación', contactCta: 'Contactar con nuestra dirección comercial', inThisRange: 'En esta gama', categories: 'categorías' },
  catalogue: {
    meta: { title: 'Catálogo de productos · TILAMED Pharma', description: 'Sueros, medicamentos inyectables y bebibles, soluciones nutricionales, dispositivos médicos y salud animal: el catálogo de TILAMED Pharma.' },
    lead: 'Busque entre nuestras soluciones inyectables, nuestros futuros productos líquidos y los dispositivos médicos que distribuimos.',
    warning: 'Las soluciones inyectables y los productos líquidos TILAMED están en preparación y aún no están disponibles a la venta.',
    familiesTitle: 'Cinco gamas',
    searchTitle: 'Todo el catálogo',
    searchIntro: 'Filtre por gama o busque por nombre, uso o categoría.',
  },
  families: {
    serums: { meta: { title: 'Sueros · Productos · TILAMED Pharma', description: 'Cloruro de sodio, glucosa, Ringer lactato, bicarbonato, manitol: los sueros de perfusión fabricados en Sèmè-Podji.' }, lead: 'Nuestra primera gama, fabricada en Sèmè-Podji: sueros de perfusión en frascos de plástico formados, llenados y sellados en el sitio.' },
    medicaments: { meta: { title: 'Medicamentos · Productos · TILAMED Pharma', description: 'Inyectables en ampollas, soluciones medicamentosas, antibióticos inyectables, vacunas y sueros, soluciones bebibles.' }, lead: 'Inyectables en ampollas, antibióticos, vacunas y sueros, soluciones bebibles: una gama desplegada en tres fases de producción.' },
    'solutions-nutritionnelles': { meta: { title: 'Soluciones nutricionales · Productos · TILAMED Pharma', description: 'Glucosa concentrada y vitaminas inyectables o bebibles para el aporte calórico y la corrección de carencias.' }, lead: 'Glucosa concentrada y vitaminas, inyectables o bebibles, para el aporte calórico y la corrección de carencias.' },
    'dispositifs-medicaux': { meta: { title: 'Dispositivos médicos · Productos · TILAMED Pharma', description: 'Diagnóstico, instrumental quirúrgico, esterilización y equipamiento: los dispositivos médicos que distribuye TILAMED Pharma.' }, lead: 'Diagnóstico, instrumental quirúrgico, esterilización y equipamiento: los dispositivos médicos que distribuimos.' },
    'sante-animale': { meta: { title: 'Salud animal · Productos · TILAMED Pharma', description: 'Alimentación, antiparasitarios, cuidados y medicamentos para perros y gatos: la futura gama veterinaria TILAMED.' }, lead: 'Alimentación, antiparasitarios, cuidados y medicamentos para perros y gatos.' },
  },
  formats: {
    title: 'Frascos adaptados a cada uso',
    intro: 'Frascos de plástico ligeros e irrompibles, fabricados por soplado-llenado-sellado.',
    items: [
      { value: '100', label: 'Antibióticos, analgésicos, diluciones' },
      { value: '250', label: 'Soluciones básicas, pediatría' },
      { value: '500', label: 'El formato más utilizado en el hospital' },
      { value: '1000', label: 'Rehidratación, reposición de volumen' },
    ],
    cards: [
      { title: 'Irrompible', text: 'El frasco de plástico resiste los golpes del transporte y el almacenamiento.' },
      { title: 'Ligero', text: 'Más ligero que el vidrio: transporte y manipulación más fáciles.' },
      { title: 'Sistema cerrado', text: 'El frasco se vacía sin entrada de aire, lo que limita el riesgo de contaminación.' },
    ],
    note: 'Cada caja contiene el prospecto y está etiquetada para garantizar la trazabilidad del lote.',
  },
  phases: { title: 'Una gama desplegada en tres fases', intro: 'Los medicamentos entran en producción a medida que se abren las líneas y se obtienen las autorizaciones reglamentarias.' },
  devices: {
    text: 'Con una larga experiencia en el suministro, la instalación y el mantenimiento de equipos médicos en África Occidental, TILAMED Pharma distribuye una gama de dispositivos médicos de fabricantes europeos con marcado CE.',
    cta: 'Para un presupuesto, una lista de referencias o una licitación, contacte con nuestra dirección comercial.',
  },
  vet: { text: 'Nuestra gama veterinaria está en preparación. Los productos estarán disponibles próximamente.', cta: 'Recibir aviso del lanzamiento' },
  doc: {
    meta: { title: 'Solicitud de documentación · TILAMED Pharma', description: 'Profesionales de la salud y compradores: soliciten la información técnica de los productos TILAMED Pharma.' },
    lead: 'Profesionales de la salud y compradores: soliciten la información técnica de nuestros productos.',
    intro: 'Indique los productos que le interesan. Nuestro equipo le enviará la información disponible en cuanto se publique.',
    formTitle: 'Su solicitud',
    fields: {
      name: 'Nombre y apellidos', org: 'Organización', profile: 'Usted es', country: 'País', email: 'Correo electrónico', phone: 'Teléfono',
      ranges: 'Gamas que le interesan', products: 'Productos concretos (opcional)', productsHint: 'Ej.: cloruro de sodio 0,9 % 500 ml, ceftriaxona 1 g…',
      message: 'Su mensaje', consent: 'Acepto que TILAMED Pharma utilice esta información para responder a mi solicitud.', submit: 'Enviar la solicitud',
      required: 'Campo obligatorio', select: 'Elegir…',
    },
    profiles: ['Central de compras', 'Hospital o clínica', 'Farmacia', 'Mayorista o distribuidor', 'Organización de salud', 'Otro'],
    asideTitle: 'Lo que recibirá',
    asideItems: ['Fichas técnicas y composiciones en cuanto se publiquen', 'Formatos y acondicionamientos previstos', 'Calendario de disponibilidad', 'Contacto de nuestra dirección comercial'],
    direct: '¿Prefiere escribirnos directamente?',
  },
};
export default produits;
