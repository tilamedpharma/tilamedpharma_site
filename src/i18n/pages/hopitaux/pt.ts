import type { HopitauxDict } from './fr';
const hopitaux: HopitauxDict = {
  meta: {
    title: 'Hospitais, clínicas e farmácias · Mercados · TILAMED Pharma',
    description: 'Soros de perfusão, medicamentos injetáveis, soluções nutricionais e dispositivos médicos fabricados ou distribuídos no BENIM, em frascos de plástico inquebráveis.',
  },
  hero: {
    lead: 'Soluções de perfusão essenciais, disponíveis perto de si.',
    cta1: 'Ver o catálogo',
  },
  intro: {
    eyebrow: 'No centro dos cuidados',
    title: 'Disponíveis todos os dias, em todos os serviços',
    text: [
      'Os soros de perfusão são utilizados todos os dias em todos os serviços. A sua disponibilidade é vital: uma rutura, e os cuidados param.',
      'Uma vez fabricadas em Sèmè-Podji, as nossas soluções deixarão de depender de várias semanas de transporte marítimo. A sua farmácia poderá encomendar mais vezes, em quantidades mais ajustadas.',
    ],
    services: ['Urgência', 'Cirurgia', 'Medicina', 'Pediatria', 'Maternidade'],
    badge: 'Fabricado no BENIM',
    imageAlt: 'Enfermeira com material médico num corredor de hospital',
  },
  range: {
    eyebrow: 'A nossa gama para os cuidados',
    title: 'Os produtos do dia a dia hospitalar',
    text: 'Quatro gamas para a medicina humana, dos soros básicos aos dispositivos médicos.',
    items: [
      ['Cloreto de sódio 0,9 %', 'Glicose 5 %', 'Lactato de Ringer', 'Manitol 20 %'],
      ['Paracetamol 1 %', 'Ceftriaxona 1 g', 'Oxitocina 10 UI', 'Quinina injetável'],
      ['Glicose 10 %', 'Vitamina C 0,5 g/5 ml', 'Complexo vitamínico B'],
      ['Estetoscópio', 'Tensiómetro', 'Pinça hemostática'],
    ],
    note: 'Gama em preparação, sujeita a autorização. Medicamentos reservados aos profissionais de saúde.',
  },
  bottle: {
    eyebrow: 'O frasco de plástico',
    title: 'Pensado para o terreno',
    text: 'Os nossos soros são acondicionados em frascos de plástico, mais seguros e práticos do que o vidro, do camião até à cama do doente.',
    items: [
      { title: 'Inquebrável', text: 'Sem vidro partido, nem durante o transporte nem no serviço.' },
      { title: 'Leve', text: 'Mais fácil de transportar, arrumar e armazenar na farmácia.' },
      { title: 'Formado, cheio e selado de uma só vez', text: 'Numa única operação automática, sem contacto humano com a solução.' },
      { title: 'Controlado', text: 'Cada frasco será inspecionado e cada lote analisado antes da libertação.' },
    ],
    imageAlt: 'Ampolas de plástico, formadas e seladas numa única operação',
  },
  supply: {
    eyebrow: 'Como se abastecer',
    imageAlt: 'Enfermeira a usar um tensiómetro',
    title: 'Encontre os nossos produtos perto de si',
    items: [
      { title: 'Hospitais públicos', text: 'Através da central de compras do seu país, que abastecemos diretamente.' },
      { title: 'Clínicas e farmácias privadas', text: 'Junto dos nossos distribuidores e grossistas autorizados. Escreva-nos: indicamos-lhe o mais próximo.' },
      { title: 'Uma necessidade específica?', text: 'Grandes volumes, projetos, concursos: a nossa direção comercial responde-lhe.' },
    ],
  },
  safety: {
    eyebrow: 'Segurança dos doentes',
    title: 'A sua segurança e a dos seus doentes',
    items: [
      { text: 'Notifique um efeito adverso ou um defeito de qualidade.' },
      { text: 'Fichas técnicas e certificados de análise dos nossos produtos.' },
      { text: 'Cada frasco terá o seu número de lote, da fábrica ao doente.' },
    ],
  },
};
export default hopitaux;
