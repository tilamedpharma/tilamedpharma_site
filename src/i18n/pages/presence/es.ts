import type { PresenceDict } from './fr';
const presence: PresenceDict = {
  meta: {
    title: 'Presencia regional · Mercados · TILAMED Pharma',
    description: 'Una fábrica en BENÍN, los 15 países de la CEDEAO cubiertos y oficinas en BENÍN, BURKINA FASO y FRANCIA.',
  },
  hero: {
    lead: 'Una fábrica en BENÍN, 15 países de África Occidental cubiertos y una presencia internacional.',
  },
  facts: [
    { value: '15', unit: 'países', label: 'del espacio CEDEAO cubiertos' },
    { value: '400', unit: 'M +', label: 'de habitantes en África Occidental' },
    { value: '1', unit: 'fábrica', label: 'en Sèmè-Podji, en la frontera con NIGERIA' },
    { value: '3', unit: 'oficinas', label: 'en BENÍN, BURKINA FASO y FRANCIA' },
  ],
  map: {
    legend: 'Desde la fábrica de Sèmè-Podji, nuestras rutas de abastecimiento llegan a las capitales de la subregión.',
  },
  sites: {
    eyebrow: 'Nuestras implantaciones',
    title: 'Una fábrica, tres oficinas',
    more: 'Direcciones y teléfonos',
  },
  why: {
    eyebrow: 'Por qué toda la subregión',
    title: 'Quince países, desafíos de salud comunes',
    text: 'No solo nos dirigimos a BENÍN: la subregión comparte necesidades parecidas, y una fábrica regional puede responder a ellas.',
    items: [
      { title: 'Enfermedades similares', text: 'Las mismas necesidades de sueros, antiinfecciosos y cuidados esenciales, de un país a otro.' },
      { title: 'Poblaciones jóvenes', text: 'Más de 400 millones de habitantes, en fuerte crecimiento: necesidades de salud que aumentan cada año.' },
      { title: 'La misma dependencia', text: 'Medicamentos casi todos importados, a costa de largos plazos y rupturas frecuentes.' },
    ],
  },
  gallery: {
    title: 'Una región, quince mercados',
    captions: ['Lagos · NIGERIA', 'Abiyán · COSTA DE MARFIL', 'Acra · GHANA', 'Dakar · SENEGAL', 'Cotonú · BENÍN', 'Puerto de Tema · GHANA'],
  },
  serve: {
    eyebrow: 'Cómo atendemos a cada país',
    title: 'Directamente o con nuestros distribuidores',
    direct: { title: 'Directamente', text: 'Para las centrales de compras públicas y las organizaciones regionales e internacionales.' },
    partners: { title: 'Con nuestros distribuidores', text: 'Para los mayoristas, las farmacias y las clínicas privadas, con un distribuidor autorizado en cada país.' },
  },
  cta: {
    eyebrow: 'Distribuidores',
    title: '¿Es usted mayorista en uno de estos 15 países?',
    text: 'Únase a nuestra red de distribuidores autorizados.',
  },
};
export default presence;
