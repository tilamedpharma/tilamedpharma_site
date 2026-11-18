import type { QualiteDict } from './fr';

const qualite: QualiteDict = {
  pages: {
    qualite: {
      meta: { title: 'Calidad y conformidad · TILAMED Pharma', description: 'BPF de la OMS, dictamen favorable de la ABRP, ISO 9001 e ISO 14001 previstas, buenas prácticas de distribución: nuestro sistema de calidad farmacéutica.' },
      lead: 'La calidad se construye en cada etapa, de la materia prima al paciente.',
      intro: '',
      facts: [
        { value: 'BPF', unit: '', label: 'planta concebida según las buenas prácticas de fabricación de la OMS' },
        { value: '6', unit: '', label: 'autorizaciones obtenidas de las autoridades beninesas' },
      ],
      blocks: [
        { kind: 'cards', title: 'Nuestros referenciales', items: [
          { title: 'BPF de la OMS', text: 'Una planta concebida y explotada según las buenas prácticas de fabricación de la OMS.' },
          { title: 'ISO 9001 e ISO 14001', text: 'Certificaciones previstas para la calidad y el medio ambiente.' },
          { title: 'ABRP', text: 'Dictamen favorable del 16 de mayo de 2023 a la autorización de apertura y explotación.' },
          { title: 'BPD', text: 'Buenas prácticas de distribución para nuestros almacenes y entregas.' },
        ] },
        { kind: 'points', title: 'Un sistema de calidad farmacéutica', items: [
          'Procedimientos escritos, formación del personal y registros en cada etapa.',
          'Cualificación de los equipos y validación de los procesos.',
          'Control de las materias primas, los materiales de acondicionamiento y los productos terminados.',
          'Liberación de cada lote por el farmacéutico responsable.',
          'Gestión de desviaciones, reclamaciones y retiradas.',
        ] },
      ],
      note: '',
    },
    'bpf-oms': {
      meta: { title: 'BPF de la OMS · Calidad · TILAMED Pharma', description: 'Las buenas prácticas de fabricación de la OMS: personal, locales, documentación, producción, control de calidad y autoinspección.' },
      lead: 'Las reglas internacionales que garantizan una calidad constante, lote tras lote.',
      intro: 'Las buenas prácticas de fabricación (BPF, en inglés GMP) de la Organización Mundial de la Salud fijan los requisitos mínimos que un fabricante debe cumplir para que sus productos tengan siempre la calidad adecuada, de un lote a otro, para el uso al que se destinan.',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Seis pilares', items: [
          { title: 'Personal', text: 'Cualificado, formado y vestido según las zonas.' },
          { title: 'Locales y equipos', text: 'Concebidos, cualificados y mantenidos para evitar cualquier contaminación.' },
          { title: 'Documentación', text: 'Cada operación se describe, se realiza y se registra.' },
          { title: 'Producción', text: 'Procesos validados, controlados y supervisados.' },
          { title: 'Control de calidad', text: 'Análisis independientes de la producción.' },
          { title: 'Autoinspección', text: 'Auditorías internas periódicas para mejorar.' },
        ] },
      ],
      note: 'Nuestra planta se construye según las normas BPF de la OMS. Las certificaciones y autorizaciones se presentarán en este sitio a medida que se obtengan.',
    },
    agrements: {
      meta: { title: 'Autorizaciones · Calidad · TILAMED Pharma', description: 'Autorizaciones de la ABRP y de los ministerios beninenses, certificados ambiental y técnico, decreto ministerial: las autorizaciones de TILAMED PHARMA SA.' },
      lead: 'En Benín, los productos farmacéuticos dependen de la Agencia Beninesa de Regulación Farmacéutica (ABRP).',
      intro: '',
      facts: [
        { value: '6', unit: '', label: 'autorizaciones obtenidas' },
        { value: '2023', unit: '', label: 'dictamen favorable de la ABRP, comisión del 16 de mayo de 2023' },
      ],
      blocks: [
        { kind: 'points', title: 'El papel de la ABRP', items: [
          'Registro de los medicamentos y productos sanitarios.',
          'Inspección de los locales: buenas prácticas de fabricación, de distribución y de farmacia.',
          'Control de la calidad de los medicamentos antes de su comercialización.',
        ] },
        { kind: 'points', title: 'Lo que transmitimos para cada producto', text: 'Los fabricantes de soluciones inyectables comunican a la ABRP todas las características de los componentes utilizados, tanto del frasco como de la fórmula de la solución. Estas exigencias buscan:', items: [
          'garantizar la calidad de cada componente;',
          'permitir la trazabilidad completa del producto y de su envase;',
          'garantizar la integridad de la solución durante todo su período de uso;',
          'asegurar un embalaje final resistente a la rotura y al deterioro.',
        ] },
      ],
      note: '',
    },
    'controle-qualite': {
      meta: { title: 'Control de calidad · Calidad · TILAMED Pharma', description: 'De la recepción de las materias primas a la liberación por el farmacéutico responsable: cómo se controla cada lote.' },
      lead: 'Un lote solo se libera tras verificar todos sus resultados.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'sequence', title: 'Del control a la liberación', items: [
          { title: 'Recepción', text: 'Las materias primas y los materiales de acondicionamiento se ponen en cuarentena, se muestrean y se analizan.' },
          { title: 'En proceso', text: 'Controles de concentración, volumen, estanqueidad y aspecto.' },
          { title: 'Producto terminado', text: 'Análisis fisicoquímicos y microbiológicos de cada lote.' },
          { title: 'Revisión del expediente de lote', text: 'Verificación de cada registro de fabricación.' },
          { title: 'Liberación', text: 'Decisión del farmacéutico responsable.' },
        ] },
      ],
      note: 'Se conservan muestras de cada lote para permitir controles posteriores.',
    },
    tracabilite: {
      meta: { title: 'Trazabilidad · Calidad · TILAMED Pharma', description: 'Número de lote, registro de los envíos y procedimiento de retirada: un circuito corto contra los medicamentos falsificados.' },
      lead: 'Un circuito corto, de la planta al paciente, para medicamentos seguros.',
      intro: 'Los medicamentos falsificados y el mercado ilícito ponen vidas en peligro en África Occidental. La producción local acorta la cadena de suministro y la hace más fácil de controlar.',
      facts: [],
      blocks: [
        { kind: 'points', title: 'Cada lote bajo seguimiento', items: [
          'Número de lote y fecha de caducidad en cada frasco y cada caja.',
          'Registro de los envíos por cliente y por lote.',
          'Procedimiento de retirada probado, en relación con las autoridades.',
        ] },
      ],
      note: 'Benín se ha comprometido firmemente contra los medicamentos falsificados: participación en la operación internacional PANGEA de INTERPOL, ratificación del convenio MEDICRIME del Consejo de Europa y nueva ley sobre las actividades farmacéuticas en 2021.',
    },
    certifications: {
      meta: { title: 'Certificaciones · Calidad · TILAMED Pharma', description: 'BPF de la OMS, ABRP, ISO 9001, ISO 14001, BPD y EDGE: nuestros objetivos de certificación para la calidad y el medio ambiente.' },
      lead: 'Nuestros objetivos de certificación para la calidad y el medio ambiente.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'table', title: 'Dónde estamos', head: ['Referencial', 'Ámbito', 'Estado'], rows: [
          ['BPF (GMP) de la OMS', 'Fabricación farmacéutica', 'Planta construida según estas normas'],
          ['ABRP', 'Apertura y explotación de una planta farmacéutica', 'Dictamen favorable, comisión del 16 de mayo de 2023'],
          ['ISO 9001', 'Gestión de la calidad', 'Certificación prevista'],
          ['ISO 14001', 'Gestión ambiental', 'Certificación prevista'],
          ['BPD (GDP)', 'Distribución farmacéutica', 'Aplicadas en nuestros almacenes'],
          ['EDGE (IFC)', 'Edificio verde', 'Certificación en curso'],
        ] },
      ],
      note: 'Esta tabla se actualizará con cada nueva certificación obtenida.',
    },
  },
  pv: {
    meta: { title: 'Farmacovigilancia · Calidad · TILAMED Pharma', description: 'Comunique a TILAMED Pharma cualquier efecto adverso o problema de calidad relacionado con uno de nuestros productos.' },
    lead: 'Comuníquenos cualquier efecto adverso o problema de calidad relacionado con uno de nuestros productos.',
    emergency: 'En caso de urgencia médica, contacte inmediatamente con un médico o con los servicios de urgencias.',
    intro: 'La farmacovigilancia permite vigilar la seguridad de los medicamentos una vez comercializados. Cada notificación se trata de forma confidencial y, si es necesario, se transmite a las autoridades sanitarias.',
    formTitle: 'Hacer una notificación',
    fields: {
      reporter: 'Usted es', name: 'Nombre y apellidos', email: 'Correo electrónico', phone: 'Teléfono', country: 'País',
      type: 'Tipo de notificación', product: 'Producto afectado', batch: 'Número de lote', expiry: 'Fecha de caducidad',
      date: 'Fecha del acontecimiento', description: 'Descripción del efecto o del problema', descriptionHint: '¿Qué ocurrió? ¿Cuándo? ¿Qué medidas se tomaron?',
      consent: 'Acepto que esta información se trate de forma confidencial y, si es necesario, se transmita a las autoridades sanitarias.',
      submit: 'Enviar la notificación', required: 'Campo obligatorio', select: 'Elegir…',
    },
    reporters: ['Paciente o familiar', 'Profesional de la salud', 'Farmacéutico', 'Distribuidor', 'Otro'],
    types: ['Efecto adverso', 'Problema de calidad del producto', 'Error de medicación'],
    asideTitle: 'Después de su notificación',
    asideItems: ['Acuse de recibo de nuestro farmacéutico responsable', 'Análisis confidencial de la notificación', 'Transmisión a las autoridades sanitarias si es necesario', 'Contacto con usted si se necesita más información'],
  },
};
export default qualite;
