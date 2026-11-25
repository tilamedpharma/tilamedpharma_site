import type { ClientsDict } from './fr';
const clients: ClientsDict = {
  meta: {
    title: 'Os nossos clientes · Mercados · TILAMED Pharma',
    description: 'Centrais de compras públicas, grossistas distribuidores, organizações regionais e internacionais, farmácias e clínicas: os clientes da TILAMED Pharma na África Ocidental.',
  },
  hero: {
    lead: 'Fornecemos os atores públicos e privados da saúde no BENIM e na África Ocidental.',
    cta1: 'Pedir uma proposta',
  },
  facts: [
    { value: '5', unit: 'famílias', label: 'de clientes, públicos e privados' },
    { value: '15', unit: 'países', label: 'da África Ocidental servidos' },
    { value: '3', unit: 'canais', label: 'vendas diretas, concursos, distribuidores' },
    { value: '1', unit: 'interlocutor', label: 'a nossa direção comercial, para todas as vendas' },
  ],
  who: {
    eyebrow: 'A quem nos dirigimos',
    title: 'Eles compram os nossos produtos',
    text: 'Do mercado público ao balcão da farmácia, os nossos produtos chegam a cinco famílias de clientes. Para cada uma, adaptámos a nossa forma de trabalhar.',
    items: [
      { title: 'Centrais de compras públicas da África Ocidental', examples: ['SOBAPS', 'CAMEG', 'ONPPC', 'SONIPHARM'], text: 'Respostas completas aos seus concursos e entregas planeadas de acordo com o consumo real.' },
      { title: 'Grossistas distribuidores privados internacionais', examples: ['UBIPHARM', 'UBPHAR', 'GAPOB'], text: 'Um fornecedor na região: encomendas mais frequentes e menos stock imobilizado.' },
      { title: 'Organizações regionais', examples: ['OOAS', 'Centre MURAZ', 'CIRDES'], text: 'Um parceiro local para os programas de saúde da sub-região.' },
      { title: 'Organizações internacionais', examples: ['GIZ', 'AFD', 'OMS'], text: 'Dossiers de qualidade completos e capacidade de entrega nos 15 países da África Ocidental.' },
      { title: 'Farmácias e clínicas privadas', examples: ['Em toda a África Ocidental'], text: 'Produtos de saúde essenciais disponíveis perto delas, através dos nossos distribuidores autorizados.' },
    ],
    more: 'Saber mais',
  },
  how: {
    eyebrow: 'Como trabalhamos',
    title: 'Três formas de comprar os nossos produtos',
    items: [
      { title: 'Vendas diretas', text: 'Às centrais de compras públicas e privadas, por encomenda ou com entregas planeadas.', for: 'Centrais de compras, grandes contas' },
      { title: 'Concursos', text: 'Respondemos a concursos e consultas restritas, nacionais e internacionais, com um dossier técnico e regulamentar completo.', for: 'Ministérios, organizações de saúde' },
      { title: 'Rede de distribuidores', text: 'Para o setor privado, os nossos produtos são vendidos através dos nossos distribuidores autorizados em cada país.', for: 'Farmácias, clínicas, grossistas' },
    ],
    forLabel: 'Para',
    central: 'Todas as vendas são centralizadas pela nossa direção comercial, com prazos de resposta curtos.',
  },
  resources: {
    eyebrow: 'Para os nossos compradores',
    title: 'Tudo o que precisa para preparar uma encomenda',
    items: [
      { text: 'Todas as nossas referências, por gama, com as suas apresentações.' },
      { text: 'Fichas técnicas e certificados de análise, a pedido.' },
      { text: 'As nossas autorizações, com os seus números e datas.' },
    ],
  },
  cta: {
    eyebrow: 'Direção comercial',
    title: 'Uma necessidade, um concurso em preparação?',
    text: 'Escreva à nossa direção comercial indicando os produtos, as quantidades e o país de entrega: responderemos rapidamente.',
    imageAlt: 'Uma cliente e um farmacêutico numa farmácia',
  },
};
export default clients;
