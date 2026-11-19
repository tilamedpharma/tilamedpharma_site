import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {},
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
};
export default marches;
