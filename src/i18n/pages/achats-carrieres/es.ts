import type { AchatsCarrieresDict } from './fr';

const d: AchatsCarrieresDict = {
  pages: {
    carrieres: {
      meta: { title: 'Trabajar en TILAMED · Empleo · TILAMED Pharma', description: '150 empleos directos previstos, 70 % de puestos técnicos y 5 años de transferencia de competencias: participe en la creación de la primera fábrica de sueros de BENÍN.' },
      lead: 'Participe en la creación de la primera fábrica de soluciones inyectables de BENÍN.',
      intro: '',
      facts: [
        { value: '150', unit: '', label: 'empleos directos previstos' },
        { value: '70', unit: '%', label: 'de puestos técnicos' },
        { value: '30', unit: '%', label: 'de puestos administrativos' },
        { value: '5', unit: 'años', label: 'de transferencia de competencias' },
      ],
      blocks: [
        { kind: 'prose', title: 'Un equipo en construcción', items: [
          'Construimos un equipo de profesionales cualificados, formados en la fabricación industrial y comprometidos con la calidad.',
          'BENÍN cuenta con una mano de obra joven, dinámica y cualificada: contratamos y formamos prioritariamente en el país.',
        ] },
        { kind: 'points', title: 'Un empleador abierto a todas y todos', items: [
          'Procesos de contratación abiertos y equitativos, basados únicamente en las competencias.',
          'Puestos abiertos a personas con discapacidad.',
          'Un reparto equitativo de las responsabilidades entre mujeres y hombres, en todos los niveles.',
          'Una formación accesible para todas y todos, con cinco años de acompañamiento por parte de los fabricantes de los equipos.',
        ] },
      ],
      note: 'No hay ofertas de empleo publicadas por el momento. Puede enviar una candidatura espontánea.',
    },
    metiers: {
      meta: { title: 'Nuestros oficios · Empleo · TILAMED Pharma', description: 'Producción, garantía de calidad, laboratorio, mantenimiento, logística, funciones de apoyo: los oficios de una planta farmacéutica.' },
      lead: 'Producción, calidad, mantenimiento, logística, funciones de apoyo: descubra los oficios de una planta farmacéutica.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Seis familias de oficios', items: [
          { title: 'Producción', text: 'Operadores de línea, conductores de máquinas, jefes de equipo.' },
          { title: 'Garantía de calidad', text: 'Farmacéuticos, responsables de calidad, especialistas en validación.' },
          { title: 'Laboratorio', text: 'Analistas en fisicoquímica y en microbiología.' },
          { title: 'Mantenimiento y servicios', text: 'Técnicos en mecánica, electricidad, automatización y frío.' },
          { title: 'Logística', text: 'Almaceneros, gestores de existencias, conductores repartidores.' },
          { title: 'Funciones de apoyo', text: 'Finanzas, recursos humanos, compras, ventas, informática.' },
        ] },
        { kind: 'points', title: 'El equipo directivo', items: [
          'Director general',
          'Farmacéutico responsable',
          'Director administrativo, financiero y de recursos humanos',
          'Director comercial y de marketing, con delegados médicos',
          'Responsable de compras',
          'Jefe de contabilidad',
        ] },
      ],
      note: '',
    },
  },
  cand: {
    meta: { title: 'Candidatura espontánea · Empleo · TILAMED Pharma', description: 'Preséntese: TILAMED Pharma estudiará su perfil en cuanto abra sus procesos de contratación.' },
    lead: 'Preséntese: estudiaremos su perfil en cuanto abramos nuestros procesos de contratación.',
    intro: 'Examinamos cada candidatura únicamente en función de las competencias. Las candidaturas están abiertas a todas y todos.',
    formTitle: 'Su candidatura',
    fields: {
      name: 'Nombre y apellidos', email: 'Correo electrónico', phone: 'Teléfono', country: 'País de residencia',
      family: 'Puesto deseado', level: 'Nivel de estudios', experience: 'Años de experiencia',
      cv: 'Su CV', cvHint: 'PDF o Word, 5 MB como máximo.', message: 'Su motivación',
      consent: 'Acepto que TILAMED Pharma conserve esta información para estudiar mi candidatura.',
      submit: 'Enviar mi candidatura', required: 'Campo obligatorio', select: 'Elegir…',
    },
    families: ['Producción', 'Garantía de calidad', 'Laboratorio', 'Mantenimiento y servicios', 'Logística', 'Funciones de apoyo', 'Otro'],
    levels: ['Educación secundaria o formación profesional básica', 'Bachillerato', 'Técnico superior', 'Grado o licenciatura', 'Máster o ingeniería', 'Doctorado o doctor en farmacia'],
    experience: ['Menos de un año', 'De 1 a 3 años', 'De 3 a 5 años', 'De 5 a 10 años', 'Más de 10 años'],
    asideTitle: 'Conviene saber',
    asideItems: ['No hay ofertas publicadas por el momento', 'Su perfil se estudiará al abrir las contrataciones', 'Puestos técnicos y administrativos', 'Formación impartida por los fabricantes de los equipos'],
  },
};
export default d;
