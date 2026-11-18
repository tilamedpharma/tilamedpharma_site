import type { ParcoursDict } from './fr';

const parcours: ParcoursDict = {
  meta: {
    title: 'O nosso percurso · TILAMED Pharma',
    description: 'Da SEDIS SARL em 2013 à fábrica de Sèmè-Podji: dez anos de terreno, seis autorizações e certificados, um terreno industrial de 2 hectares.',
  },
  hero: {
    lead: 'De uma experiência de terreno no setor médico à criação de uma indústria farmacêutica local.',
    cta: 'As grandes etapas',
  },
  facts: [
    { value: '2013', unit: '', label: 'primeiros passos no setor médico na África Ocidental' },
    { value: '2023', unit: '', label: 'a SEDIS SARL torna-se TILAMED PHARMA SA' },
    { value: '6', unit: '', label: 'autorizações, licenças e certificados obtidos' },
    { value: '2', unit: 'ha', label: 'de terreno industrial em Sèmè-Podji' },
  ],
  timeline: {
    eyebrow: 'As grandes etapas',
    title: 'Mais de dez anos de terreno, uma ambição industrial',
    refLabel: 'Referência',
    nowLabel: 'Em curso',
    nextLabel: 'Próxima etapa',
    phases: [
      {
        range: '2013 – 2022',
        title: 'Os alicerces',
        items: [
          { date: '2013', title: 'Criação da SEDIS SARL', text: 'A empresa nasce para fornecer, instalar e manter dispositivos médicos na África Ocidental, em contacto com hospitais, laboratórios e centrais de compras.' },
          { date: '2013 – 2022', title: 'Dez anos de terreno, uma constatação', text: 'No BENIM, nenhuma solução injetável é fabricada localmente. Estudos de mercado e encontros com autoridades de saúde, centrais de compras e fabricantes europeus de equipamentos: o projeto industrial ganha forma.' },
        ],
      },
      {
        range: '2023 – 2024',
        title: 'As autorizações',
        items: [
          { date: '2023', title: 'Nasce a TILAMED PHARMA SA', text: 'A SEDIS SARL passa a TILAMED PHARMA SA, sociedade anónima com um capital de mil milhões de francos CFA, orientada para a produção industrial.' },
          { date: '16 de maio de 2023', title: 'Parecer favorável da ABRP', text: 'Reunida em comissão, a Agência Beninense de Regulação Farmacêutica emite um parecer favorável à abertura e exploração de uma fábrica farmacêutica.' },
          { date: '30 de junho de 2023', title: '', text: 'A instalação e exploração da fábrica farmacêutica são autorizadas.', comp: 0 },
          { date: '7 de agosto de 2024', title: '', text: 'O projeto é reconhecido como conforme às exigências ambientais e sociais.', comp: 2 },
          { date: '9 de setembro de 2024', title: '', text: 'A atividade industrial da TILAMED Pharma é autorizada.', comp: 1 },
          { date: '28 de outubro de 2024', title: '', text: 'É fixada a lista dos equipamentos de produção isentos.', comp: 3 },
          { date: '28 de novembro de 2024', title: '', text: 'O projeto é enquadrado por despacho ministerial e beneficia de uma isenção fiscal e social (regime B, 8 anos) para as fases de investimento e exploração.', comp: 4 },
        ],
      },
      {
        range: '2025 →',
        title: 'O terreno e a fábrica',
        items: [
          { date: '9 de setembro de 2025', title: 'O terreno de Sèmè-Podji', text: 'O Estado beninense confia à TILAMED PHARMA SA um terreno industrial de 2 hectares, por arrendamento enfitêutico, na zona industrial de Sèmè-Podji, na fronteira com a NIGÉRIA.', ref: 'Arrendamento enfitêutico N.º 2494/MEF/DC/SGM/ANDF/DAJuF/DGDE/S' },
          { date: 'Hoje', title: 'A construção da fábrica', text: 'A TILAMED Pharma prepara a sua unidade de produção de soluções injetáveis na zona económica especial de Sèmè-Podji.', state: 'now' },
          { date: 'Amanhã', title: 'A entrada em funcionamento', text: 'Início da produção e recrutamento das primeiras equipas.', state: 'next' },
        ],
      },
    ],
  },
  sites: {
    eyebrow: 'As nossas instalações',
    title: 'Enraizados no BENIM e na região',
    items: [
      { title: 'Unidade de produção', place: 'Sèmè-Podji · BENIM', text: '2 hectares (20 000 m²) na zona industrial de Sèmè-Podji, na fronteira com a NIGÉRIA.' },
      { title: 'Sede administrativa', place: 'Cotonou · BENIM', text: 'Um edifício administrativo em Les Cocotiers, no centro da cidade, propriedade da TILAMED PHARMA SA.' },
      { title: 'Escritório regional', place: 'Uagadugu · BURKINA FASO', text: 'Um edifício administrativo de 1000 m² em Dassasgho.' },
    ],
  },
  cta: {
    eyebrow: 'O que vem a seguir',
    title: 'Acompanhe a construção da fábrica',
    text: 'Cada nova etapa do projeto é anunciada nas nossas notícias. Descubra desde já o processo de fabrico da nossa futura fábrica.',
  },
};
export default parcours;
