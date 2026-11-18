import type { ParcoursDict } from './fr';

const parcours: ParcoursDict = {
  meta: {
    title: 'Nuestra trayectoria · TILAMED Pharma',
    description: 'De SEDIS SARL en 2013 a la planta de Sèmè-Podji: diez años de terreno, seis autorizaciones y certificados, un emplazamiento industrial de 2 hectáreas.',
  },
  hero: {
    lead: 'De una experiencia de terreno en el sector médico a la creación de una industria farmacéutica local.',
    cta: 'Las grandes etapas',
  },
  facts: [
    { value: '2013', unit: '', label: 'primeros pasos en el sector médico en África Occidental' },
    { value: '2023', unit: '', label: 'SEDIS SARL se convierte en TILAMED PHARMA SA' },
    { value: '6', unit: '', label: 'autorizaciones, homologaciones y certificados obtenidos' },
    { value: '2', unit: 'ha', label: 'de emplazamiento industrial en Sèmè-Podji' },
  ],
  timeline: {
    eyebrow: 'Las grandes etapas',
    title: 'Más de diez años de terreno, una ambición industrial',
    refLabel: 'Referencia',
    nowLabel: 'En curso',
    nextLabel: 'Próxima etapa',
    phases: [
      {
        range: '2013 – 2022',
        title: 'Los cimientos',
        items: [
          { date: '2013', title: 'Creación de SEDIS SARL', text: 'La empresa nace para suministrar, instalar y mantener dispositivos médicos en África Occidental, en contacto con hospitales, laboratorios y centrales de compras.' },
          { date: '2013 – 2022', title: 'Diez años de terreno, una constatación', text: 'En Benín no se fabrica localmente ninguna solución inyectable. Estudios de mercado y reuniones con autoridades sanitarias, centrales de compras y fabricantes europeos de equipos: el proyecto industrial toma forma.' },
        ],
      },
      {
        range: '2023 – 2024',
        title: 'Las autorizaciones',
        items: [
          { date: '2023', title: 'Nace TILAMED PHARMA SA', text: 'SEDIS SARL se convierte en TILAMED PHARMA SA, sociedad anónima con un capital de mil millones de francos CFA, orientada a la producción industrial.' },
          { date: '16 de mayo de 2023', title: 'Dictamen favorable de la ABRP', text: 'Reunida en comisión, la Agencia Beninesa de Regulación Farmacéutica emite un dictamen favorable a la apertura y explotación de una planta farmacéutica.' },
          { date: '30 de junio de 2023', title: '', text: 'Se autoriza la instalación y explotación de la planta farmacéutica.', comp: 0 },
          { date: '7 de agosto de 2024', title: '', text: 'El proyecto se reconoce conforme a las exigencias ambientales y sociales.', comp: 2 },
          { date: '9 de septiembre de 2024', title: '', text: 'Se autoriza la actividad industrial de TILAMED Pharma.', comp: 1 },
          { date: '28 de octubre de 2024', title: '', text: 'Se fija la lista de equipos de producción exentos.', comp: 3 },
          { date: '28 de noviembre de 2024', title: '', text: 'El proyecto se rige por orden ministerial y se beneficia de una exención fiscal y social (régimen B, 8 años) para sus fases de inversión y explotación.', comp: 4 },
        ],
      },
      {
        range: '2025 →',
        title: 'El emplazamiento y la planta',
        items: [
          { date: '9 de septiembre de 2025', title: 'El emplazamiento de Sèmè-Podji', text: 'El Estado beninés confía a TILAMED PHARMA SA un emplazamiento industrial de 2 hectáreas, mediante arrendamiento enfitéutico, en la zona industrial de Sèmè-Podji, en la frontera con Nigeria.', ref: 'Arrendamiento enfitéutico N.º 2494/MEF/DC/SGM/ANDF/DAJuF/DGDE/S' },
          { date: 'Hoy', title: 'La construcción de la planta', text: 'TILAMED Pharma prepara su unidad de producción de soluciones inyectables en la zona económica especial de Sèmè-Podji.', state: 'now' },
          { date: 'Mañana', title: 'La puesta en marcha', text: 'Inicio de la producción y contratación de los primeros equipos.', state: 'next' },
        ],
      },
    ],
  },
  sites: {
    eyebrow: 'Nuestras sedes',
    title: 'Arraigados en Benín y en la región',
    items: [
      { title: 'Planta de producción', place: 'Sèmè-Podji · Benín', text: '2 hectáreas (20 000 m²) en la zona industrial de Sèmè-Podji, en la frontera con Nigeria.' },
      { title: 'Sede administrativa', place: 'Cotonú · Benín', text: 'Un edificio administrativo en Les Cocotiers, en el centro de la ciudad, propiedad de TILAMED PHARMA SA.' },
      { title: 'Oficina regional', place: 'Uagadugú · Burkina Faso', text: 'Un edificio administrativo de 1000 m² en Dassasgho.' },
    ],
  },
  cta: {
    eyebrow: 'Lo que viene',
    title: 'Siga la construcción de la planta',
    text: 'Cada nueva etapa del proyecto se anuncia en nuestras noticias. Descubra desde hoy el proceso de fabricación de nuestra futura planta.',
  },
};
export default parcours;
