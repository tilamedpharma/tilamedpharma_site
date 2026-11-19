import type { HopitauxDict } from './fr';
const hopitaux: HopitauxDict = {
  meta: {
    title: 'Hospitales, clínicas y farmacias · Mercados · TILAMED Pharma',
    description: 'Sueros de perfusión, medicamentos inyectables, soluciones nutricionales y dispositivos médicos fabricados o distribuidos en BENÍN, en frascos de plástico irrompibles.',
  },
  hero: {
    lead: 'Soluciones de perfusión esenciales, disponibles cerca de usted.',
    cta1: 'Ver el catálogo',
  },
  intro: {
    eyebrow: 'En el centro de la atención',
    title: 'Disponibles cada día, en todos los servicios',
    text: [
      'Los sueros de perfusión se utilizan cada día en todos los servicios. Su disponibilidad es vital: una ruptura, y se detienen los cuidados.',
      'Fabricadas en Sèmè-Podji, nuestras soluciones ya no dependen de varias semanas de transporte marítimo. Su farmacia puede pedir con más frecuencia, en cantidades más ajustadas.',
    ],
    services: ['Urgencias', 'Cirugía', 'Medicina', 'Pediatría', 'Maternidad'],
    badge: 'Fabricado en BENÍN',
    imageAlt: 'Enfermera con material médico en un pasillo de hospital',
  },
  range: {
    eyebrow: 'Nuestra gama para los cuidados',
    title: 'Los productos del día a día hospitalario',
    text: 'Cuatro gamas para la medicina humana, de los sueros básicos a los dispositivos médicos.',
    items: [
      ['Cloruro de sodio 0,9 %', 'Glucosa 5 %', 'Ringer lactato', 'Manitol 20 %'],
      ['Paracetamol 1 %', 'Ceftriaxona 1 g', 'Oxitocina 10 UI', 'Quinina inyectable'],
      ['Glucosa 10 %', 'Vitamina C 0,5 g/5 ml', 'Complejo vitamínico B'],
      ['Estetoscopio', 'Tensiómetro', 'Pinza hemostática'],
    ],
    note: 'Gama en preparación, sujeta a autorización. Medicamentos reservados a los profesionales de la salud.',
  },
  bottle: {
    eyebrow: 'El frasco de plástico',
    title: 'Pensado para el terreno',
    text: 'Nuestros sueros se envasan en frascos de plástico, más seguros y prácticos que el vidrio, del camión a la cama del paciente.',
    items: [
      { title: 'Irrompible', text: 'Sin vidrio roto, ni durante el transporte ni en el servicio.' },
      { title: 'Ligero', text: 'Más fácil de llevar, ordenar y almacenar en la farmacia.' },
      { title: 'Formado, llenado y sellado de una vez', text: 'En una sola operación automática, sin contacto humano con la solución.' },
      { title: 'Controlado', text: 'Cada frasco se inspecciona y cada lote se analiza antes de su liberación.' },
    ],
    imageAlt: 'Ampollas de plástico, formadas y selladas en una sola operación',
  },
  supply: {
    eyebrow: 'Cómo abastecerse',
    imageAlt: 'Enfermera usando un tensiómetro',
    title: 'Encuentre nuestros productos cerca de usted',
    items: [
      { title: 'Hospitales públicos', text: 'A través de la central de compras de su país, que abastecemos directamente.' },
      { title: 'Clínicas y farmacias privadas', text: 'En nuestros distribuidores y mayoristas autorizados. Escríbanos: le indicaremos el más cercano.' },
      { title: '¿Una necesidad específica?', text: 'Grandes volúmenes, proyectos, licitaciones: nuestra dirección comercial le responde.' },
    ],
  },
  safety: {
    eyebrow: 'Seguridad de los pacientes',
    title: 'Su seguridad y la de sus pacientes',
    items: [
      { text: 'Notifique un efecto adverso o un defecto de calidad.' },
      { text: 'Fichas técnicas y certificados de análisis de nuestros productos.' },
      { text: 'Cada frasco lleva su número de lote, de la fábrica al paciente.' },
    ],
  },
};
export default hopitaux;
