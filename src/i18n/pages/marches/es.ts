import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {
    clients: {
      meta: { title: 'Nuestros clientes · Mercados · TILAMED Pharma', description: 'Centrales de compras, mayoristas, organizaciones de salud, hospitales y farmacias: los clientes de TILAMED Pharma en Benín y África Occidental.' },
      lead: 'Abastecemos a los actores públicos y privados de la salud en Benín y África Occidental.',
      intro: '',
      facts: [{ value: '15', unit: 'países', label: 'de África Occidental cubiertos' }],
      blocks: [
        { kind: 'points', title: 'Cómo trabajamos', items: [
          'Ventas directas a las centrales de compras públicas y privadas.',
          'Respuesta a licitaciones y consultas restringidas.',
          'Ventas al sector privado y a través de nuestros distribuidores.',
          'Todas las ventas están centralizadas por nuestra dirección comercial, con plazos de respuesta cortos.',
        ] },
      ],
      note: '',
    },
    'centrales-achat': {
      meta: { title: 'Centrales de compras · Mercados · TILAMED Pharma', description: 'Un proveedor local capaz de entregar según sus necesidades reales: menos existencias inmovilizadas, menos rupturas, expedientes de licitación completos.' },
      lead: 'Un proveedor local, capaz de entregar según sus necesidades reales.',
      intro: 'Las centrales de compras deben hoy pedir con varios meses de antelación y almacenar grandes volúmenes de sueros importados. Con una producción local, los pedidos pueden seguir el consumo real.',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Lo que usted gana', items: [
          { title: 'Menos existencias inmovilizadas', text: 'Entregas más frecuentes, almacenes menos saturados.' },
          { title: 'Menos rupturas', text: 'Un proveedor a pocas horas por carretera en lugar de varias semanas por mar.' },
          { title: 'Expedientes completos', text: 'Un equipo acostumbrado a los procedimientos de licitación nacionales e internacionales.' },
        ] },
      ],
      note: '',
    },
    'hopitaux-cliniques': {
      meta: { title: 'Hospitales, clínicas y farmacias · Mercados · TILAMED Pharma', description: 'Soluciones de perfusión esenciales, disponibles cerca de usted, en frascos de plástico irrompibles.' },
      lead: 'Soluciones de perfusión esenciales, disponibles cerca de usted.',
      intro: 'Los sueros de perfusión se utilizan cada día en todos los servicios: urgencias, cirugía, medicina, pediatría, maternidad. Su disponibilidad es vital.',
      facts: [],
      blocks: [
        { kind: 'points', title: 'Una gama pensada para el hospital', items: [
          'Una gama que cubre las necesidades básicas: suero fisiológico, glucosa, Ringer lactato.',
          'Soluciones específicas: analgésico, antiinfeccioso, antibióticos.',
          'Inyectables en ampollas para urgencias, maternidad y cuidados corrientes.',
          'Frascos de plástico irrompibles, fáciles de manipular y almacenar.',
        ] },
      ],
      note: '',
    },
    'organisations-sante': {
      meta: { title: 'Organizaciones de salud · Mercados · TILAMED Pharma', description: 'Un socio local para los programas de salud regionales e internacionales: BPF de la OMS, expedientes de calidad completos, entrega en 15 países.' },
      lead: 'Un socio local para los programas de salud regionales e internacionales.',
      intro: 'Las organizaciones internacionales, regionales y no gubernamentales conceden gran importancia a la mejora de los sistemas de salud en África Occidental. Nuestros equipos conocen sus procedimientos de compra y sus exigencias de calidad.',
      facts: [{ value: '15', unit: 'países', label: 'de África Occidental cubiertos' }],
      blocks: [
        { kind: 'points', title: 'Nuestros compromisos', items: [
          'Fabricación según las buenas prácticas de la OMS.',
          'Expedientes de calidad completos para cada producto.',
          'Capacidad de entrega en los 15 países de África Occidental cubiertos.',
        ] },
      ],
      note: '',
    },
  },
  distrib: {
    meta: { title: 'Ser distribuidor · Mercados · TILAMED Pharma', description: 'Mayoristas y distribuidores farmacéuticos de África Occidental: únase a la red de distribuidores autorizados de TILAMED Pharma.' },
    lead: '¿Es usted mayorista o distribuidor farmacéutico en África Occidental? Hablemos.',
    intro: 'Desarrollamos una red de distribuidores autorizados para que nuestros productos estén disponibles en toda la subregión.',
    reqTitle: 'Lo que buscamos',
    reqs: [
      'Ser titular de las autorizaciones de distribución farmacéutica de su país.',
      'Disponer de un almacén conforme a las buenas prácticas de distribución.',
      'Conocer los circuitos de distribución públicos y privados de su mercado.',
    ],
    formTitle: 'Su candidatura',
    fields: {
      company: 'Razón social', country: 'País', name: 'Nombre y apellidos del contacto', role: 'Cargo', email: 'Correo electrónico', phone: 'Teléfono',
      licence: 'Autorización de distribución farmacéutica', warehouse: 'Almacén conforme a las BPD', yes: 'Sí', no: 'No', pending: 'En trámite',
      channels: 'Circuitos cubiertos', ranges: 'Gamas que le interesan', message: 'Presente su empresa',
      messageHint: 'Zonas cubiertas, clientes, volúmenes, equipo…', consent: 'Acepto que TILAMED Pharma utilice esta información para estudiar mi candidatura.',
      submit: 'Enviar mi candidatura', required: 'Campo obligatorio', select: 'Elegir…',
    },
    channels: ['Centrales de compras públicas', 'Hospitales y clínicas', 'Farmacias', 'Organizaciones de salud', 'Exportación subregional'],
  },
  presence: {
    meta: { title: 'Presencia regional · Mercados · TILAMED Pharma', description: 'Una planta en Benín, 15 países de África Occidental cubiertos y oficinas en Benín, Burkina Faso y Francia.' },
    lead: 'Una planta en Benín, 15 países de África Occidental cubiertos y una presencia internacional.',
    facts: [
      { value: '15', unit: 'países', label: 'de África Occidental cubiertos' },
      { value: '3', unit: '', label: 'oficinas: Benín, Burkina Faso, Francia' },
      { value: '400', unit: 'M +', label: 'de habitantes en África Occidental' },
    ],
    note: 'La subregión comparte desafíos sanitarios parecidos: enfermedades similares, poblaciones jóvenes y en fuerte crecimiento, y la misma dependencia de los medicamentos importados.',
  },
};
export default marches;
