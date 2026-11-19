// Página «Os nossos fornecedores» · português.
import type { FournisseursDict } from './fr';

const fournisseurs: FournisseursDict = {
  meta: {
    title: 'Os nossos fornecedores · Central de compras · TILAMED Pharma',
    description: 'Grandes fabricantes parceiros, critérios de seleção, processo de referenciação e princípios de compra: o que esperamos dos nossos fornecedores e o que eles podem esperar de nós.',
  },
  hero: {
    lead: 'O que esperamos dos nossos fornecedores e o que eles podem esperar de nós.',
    cta1: 'Os nossos critérios de seleção',
    cta2: 'Tornar-se fornecedor',
  },
  partners: {
    eyebrow: 'Os nossos parceiros industriais',
    title: 'Grandes fabricantes ao nosso lado',
    text: [
      'Tanto para a nossa fábrica como para a nossa central de compras, trabalhamos com grandes fabricantes internacionais de equipamentos industriais, dispositivos médicos e produtos de laboratório.',
      'Os fabricantes dos equipamentos da fábrica formam também as nossas equipas durante cinco anos: é o nosso programa de transferência de competências.',
    ],
  },
  criteria: {
    eyebrow: 'Seleção',
    title: 'Cinco critérios de seleção',
    text: 'Cada fornecedor é avaliado antes da primeira encomenda e depois reavaliado regularmente. Para as matérias que entram no produto, a avaliação inclui um questionário, o estudo do dossiê técnico e, se necessário, uma auditoria no local.',
    items: [
      { title: 'Qualidade', text: 'Um sistema de gestão da qualidade reconhecido, certificados de análise para cada lote e, para as matérias farmacêuticas, o respeito das boas práticas de fabrico.' },
      { title: 'Conformidade regulamentar', text: 'Produtos e documentos conformes às farmacopeias e às exigências da Agência Beninense de Regulação Farmacêutica (ABRP).' },
      { title: 'Fiabilidade', text: 'Prazos cumpridos, capacidade suficiente, rastreabilidade completa e informação rápida em caso de alteração ou incidente.' },
      { title: 'Custo total', text: 'Um preço justo, avaliado com o transporte, os prazos, o armazenamento e o risco de rutura, e não apenas o preço de compra.' },
      { title: 'Responsabilidade', text: 'O respeito dos direitos humanos, da saúde e segurança no trabalho, do ambiente e das regras anticorrupção.' },
    ],
  },
  steps: {
    eyebrow: 'Tornar-se fornecedor',
    title: 'Quatro etapas para se juntar a nós',
    items: [
      { title: 'Primeiro contacto', text: 'Escreve-nos indicando «Compras» no assunto, com a apresentação da sua empresa, o seu catálogo e os seus certificados.' },
      { title: 'Avaliação', text: 'Questionário, estudo do dossiê técnico e, se necessário, auditoria no local, à luz dos nossos cinco critérios.' },
      { title: 'Referenciação', text: 'Um caderno de encargos e, para as matérias farmacêuticas, um acordo de qualidade fixam os compromissos de cada parte.' },
      { title: 'Acompanhamento', text: 'Uma reavaliação regular e um diálogo sobre o desempenho: qualidade, prazos, capacidade de resposta.' },
    ],
  },
  principles: {
    eyebrow: 'Os nossos princípios',
    title: 'Uma relação assente na confiança',
    items: [
      { title: 'Equidade e transparência', text: 'As mesmas regras para todos, consultas claras e decisões fundamentadas.' },
      { title: 'Integridade', text: 'Nenhum presente ou vantagem suscetível de influenciar uma decisão de compra. Todo o conflito de interesses é declarado.' },
      { title: 'Confidencialidade', text: 'As informações técnicas e comerciais trocadas são protegidas de ambos os lados.' },
      { title: 'Parceria', text: 'Relações de longo prazo, objetivos partilhados e um diálogo regular sobre o desempenho.' },
    ],
  },
  sustainable: {
    eyebrow: 'Compras responsáveis',
    title: 'Uma cadeia de abastecimento sustentável',
    text: 'Esperamos que os nossos fornecedores partilhem os nossos compromissos e que os exijam, por sua vez, aos seus próprios subcontratados.',
    items: [
      'Condições de trabalho dignas: sem trabalho infantil nem trabalho forçado, com salários e horários conformes à lei.',
      'A redução de resíduos, embalagens e emissões, e uma gestão responsável da água e da energia.',
      'A escolha de transportes e embalagens que limitem o impacto ambiental.',
      'O desenvolvimento de fornecedores locais e regionais, para aproximar a produção dos doentes.',
      'A continuidade do abastecimento: planos de contingência em caso de crise ou de dificuldades de transporte.',
    ],
  },
  cta: {
    eyebrow: 'Compras',
    title: 'Proponha os seus produtos ou serviços',
    text: 'Escreva para contact@tilamedpharma.com indicando «Compras» no assunto. A nossa equipa estudará a sua proposta.',
    mail: 'Escrever ao serviço de Compras',
    subject: 'Compras',
  },
};
export default fournisseurs;
