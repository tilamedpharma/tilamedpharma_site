import type { EtapesDict } from './fr';

const etapes: EtapesDict = {
  ui: {
    step: 'Etapa',
    of: 'de',
    rail: 'Las 7 etapas del proceso',
    figures: 'En cifras',
    prev: 'Etapa anterior',
    next: 'Etapa siguiente',
    overview: 'Visión general de la planta',
    backTo: 'Nuestra planta',
    others: 'El resto de la sección Planta',
  },
  steps: {
    'traitement-eau': {
      meta: { title: 'Tratamiento del agua · Nuestra planta · TILAMED Pharma', description: 'Agua purificada y agua para inyectables producidas en el sitio de Sèmè-Podji: ósmosis inversa, electrodesionización, destilación y bucle caliente de acero inoxidable.' },
      lead: 'El agua es el primer ingrediente de una solución inyectable. Su pureza se controla de forma continua.',
      intro: 'Una solución de perfusión contiene más de un 90 % de agua. Producimos en el sitio dos calidades de agua farmacéutica, conformes a las exigencias de las farmacopeas.',
      facts: [
        { value: '> 90', unit: '%', label: 'de agua en una solución de perfusión' },
        { value: '2', unit: '', label: 'calidades de agua farmacéutica producidas en el sitio' },
      ],
      block: { kind: 'sequence', title: 'Las etapas del tratamiento', items: [
        { title: 'Pretratamiento', text: 'Filtración y ablandamiento del agua de alimentación.' },
        { title: 'Agua purificada', text: 'Doble ósmosis inversa y luego electrodesionización (EDI).' },
        { title: 'Agua para inyectables (API)', text: 'Destilación en un destilador de columnas múltiples, que elimina las endotoxinas.' },
        { title: 'Vapor puro', text: 'Un generador dedicado produce el vapor utilizado para esterilizar los equipos.' },
        { title: 'Almacenamiento y bucle', text: 'El agua para inyectables se almacena y circula en un bucle caliente de acero inoxidable para mantenerse estéril hasta el punto de uso.' },
      ] },
      note: 'La conductividad y la temperatura del agua se miden de forma continua, con registro y alarmas.',
    },
    'preparation-solutions': {
      meta: { title: 'Preparación de las soluciones · Nuestra planta · TILAMED Pharma', description: 'Preparación por lotes, según una fórmula validada, en tanques de acero inoxidable: pesaje, controles en proceso y filtración.' },
      lead: 'La mezcla precisa de los principios activos y del agua para inyectables.',
      intro: 'Cada solución se prepara por lotes, según una fórmula validada. Las materias primas se pesan y se añaden al agua para inyectables en tanques de acero inoxidable.',
      facts: [
        { value: '2', unit: '', label: 'tanques de preparación de acero inoxidable' },
      ],
      block: { kind: 'points', title: 'Equipos y controles', items: [
        'Dos tanques de preparación, equipados con células de pesaje y agitadores magnéticos.',
        'Controles en proceso: concentración, pH, aspecto.',
        'Filtración de la solución antes de su transferencia a la línea de llenado.',
        'Limpieza y esterilización de los tanques y circuitos entre dos lotes.',
      ] },
      note: '',
    },
    'soufflage-remplissage-scellage': {
      meta: { title: 'Soplado, llenado, sellado · Nuestra planta · TILAMED Pharma', description: 'La tecnología blow-fill-seal: una sola máquina forma el frasco, lo llena y lo sella, sin contacto humano. Formatos de 100 a 1000 ml.' },
      lead: 'Una sola máquina forma el frasco, lo llena y lo sella, sin ningún contacto humano.',
      intro: 'La tecnología de soplado-llenado-sellado (blow-fill-seal en inglés) es hoy una de las más seguras para fabricar soluciones estériles. El frasco de plástico se fabrica en el mismo momento en que se llena.',
      facts: [
        { value: '100', unit: 'ml', label: 'Antibióticos, analgésicos' },
        { value: '250', unit: 'ml', label: 'Soluciones de base' },
        { value: '500', unit: 'ml', label: 'El formato más utilizado' },
        { value: '1000', unit: 'ml', label: 'Rehidratación' },
      ],
      block: { kind: 'sequence', title: 'Un ciclo en cinco tiempos', items: [
        { title: 'Extrusión', text: 'El polímero de calidad farmacéutica se funde y se extruye en forma de tubo.' },
        { title: 'Soplado', text: 'El molde se cierra y el frasco se forma con aire estéril filtrado.' },
        { title: 'Llenado', text: 'La solución se dosifica con precisión en el frasco, bajo flujo de aire protegido.' },
        { title: 'Sellado', text: 'La cabeza del frasco se forma y se sella herméticamente en el molde.' },
        { title: 'Desmoldeo', text: 'Los frascos salen cerrados, listos para la esterilización.' },
      ] },
      note: 'El cambio de formato se hace en una media hora, lo que permite responder rápidamente a las necesidades de los clientes.',
    },
    sterilisation: {
      meta: { title: 'Esterilización · Nuestra planta · TILAMED Pharma', description: 'Esterilización terminal de los frascos en su envase final, en autoclave de aspersión de agua sobrecalentada, con ciclos validados y registrados.' },
      lead: 'Cada frasco lleno se esteriliza en su envase final.',
      intro: 'Tras el sellado, los frascos se someten a una esterilización terminal en un autoclave de aspersión de agua sobrecalentada. Este método calienta los frascos de forma homogénea y protege el plástico.',
      facts: [],
      block: { kind: 'points', title: 'Una esterilización controlada', items: [
        'Ciclos validados: tiempo, temperatura y presión registrados para cada carga.',
        'Indicadores y controles que confirman la eficacia de cada ciclo.',
        'Partes en contacto con el producto de acero inoxidable de calidad farmacéutica.',
        'Separación física entre los frascos antes y después de la esterilización.',
      ] },
      note: '',
    },
    inspection: {
      meta: { title: 'Control al 100 % · Nuestra planta · TILAMED Pharma', description: 'Secado, prueba de estanqueidad, inspección visual, encajado y rechazo automático: ningún frasco sale de la planta sin haber sido controlado.' },
      lead: 'Ningún frasco sale de la planta sin haber sido controlado.',
      intro: '',
      facts: [
        { value: '100', unit: '%', label: 'de los frascos controlados antes de salir de la planta' },
      ],
      block: { kind: 'sequence', title: 'Del secado a la caja', items: [
        { title: 'Secado', text: 'Los frascos se secan a la salida del autoclave.' },
        { title: 'Prueba de estanqueidad', text: 'Cada frasco se prueba para detectar la menor fuga.' },
        { title: 'Inspección visual', text: 'Control bajo luz del aspecto de la solución y del frasco.' },
        { title: 'Sobreembalaje y encajado', text: 'Inserción del prospecto y del certificado, cierre y etiquetado de la caja.' },
        { title: 'Rechazo automático', text: 'Las cajas con un peso no conforme o una etiqueta errónea se apartan automáticamente.' },
      ] },
      note: '',
    },
    laboratoire: {
      meta: { title: 'Laboratorio de control de calidad · Nuestra planta · TILAMED Pharma', description: 'Cromatografía, espectrometría, cámaras de estabilidad y microbiología: cada lote se analiza y lo libera el farmacéutico responsable.' },
      lead: 'Nuestro laboratorio analiza las materias primas, las aguas y cada lote antes de su liberación.',
      intro: '',
      facts: [],
      block: { kind: 'cards', title: 'Nuestros medios de análisis', items: [
        { title: 'Cromatografía (HPLC)', text: 'Identificación y valoración de los principios activos.' },
        { title: 'Espectrometría', text: 'Absorción atómica, UV e infrarrojo para la identidad y la pureza.' },
        { title: 'Cámaras de estabilidad', text: 'Estudios de estabilidad para confirmar el período de validez.' },
        { title: 'Microbiología', text: 'Esterilidad, endotoxinas y vigilancia del entorno.' },
      ] },
      note: 'Ningún lote se comercializa sin la decisión del farmacéutico responsable, basada en los resultados del laboratorio y la revisión del expediente de lote.',
    },
    'conditionnement-logistique': {
      meta: { title: 'Acondicionamiento y entrega · Nuestra planta · TILAMED Pharma', description: 'Almacenamiento según las buenas prácticas de distribución y entrega por nuestro propio servicio logístico, en BENÍN y para la exportación.' },
      lead: 'Productos entregados en el lugar adecuado, en el momento adecuado y en buenas condiciones.',
      intro: 'Los productos terminados se almacenan en nuestro almacén según las buenas prácticas de distribución y se entregan a nuestros clientes en BENÍN por nuestro propio servicio logístico.',
      facts: [],
      block: { kind: 'points', title: 'Nuestro servicio logístico', items: [
        'Entrega según las necesidades reales de los clientes, sin obligación de almacenar varios meses de productos.',
        'Seguimiento en tiempo real de pedidos y existencias gracias a un software de gestión integrado.',
        'Para la exportación, recogida por los transitarios de nuestros clientes o entrega organizada por nosotros.',
      ] },
      note: '',
    },
  },
};
export default etapes;
