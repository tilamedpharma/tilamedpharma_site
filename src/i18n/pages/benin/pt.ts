import type { BeninDict } from './fr';

const benin: BeninDict = {
  meta: {
    title: 'Porquê produzir no Benim? · TILAMED Pharma',
    description: 'O Benim importa a totalidade das suas soluções injetáveis. Produzir localmente melhora a disponibilidade, a rastreabilidade, os preços e o emprego.',
  },
  hero: {
    lead: 'O Benim importa hoje a totalidade das suas soluções injetáveis. Produzir localmente muda tudo para os doentes.',
    cta: 'A situação',
  },
  facts: [
    { value: '100', unit: '%', label: 'das soluções injetáveis consumidas no Benim são importadas' },
    { value: '0', unit: '', label: 'fabricante local de soluções farmacêuticas líquidas antes da TILAMED' },
    { value: '15', unit: 'países', label: 'da África Ocidental a abastecer a partir do Benim' },
    { value: '400', unit: 'M +', label: 'de habitantes na África Ocidental' },
  ],
  problem: {
    eyebrow: 'A situação',
    title: 'Um produto pesado e caro de importar',
    text: 'Uma solução de perfusão é composta essencialmente por água. É pesada e volumosa: o seu transporte é caro, pois o frete é calculado ao peso e ao volume, e o seu armazenamento ocupa muito espaço. Ainda assim, os grossistas têm de manter em permanência vários meses de stock para evitar ruturas.',
    todayLabel: 'Hoje · importada',
    today: ['Fabrico no estrangeiro', 'Frete marítimo faturado ao peso e ao volume', 'Vários meses de stock nos grossistas', 'Hospitais e doentes'],
    tomorrowLabel: 'Amanhã · fabricada no Benim',
    tomorrow: ['Fabrico em Sèmè-Podji', 'Entrega por estrada, segundo as necessidades reais', 'Hospitais e doentes'],
  },
  benefits: {
    eyebrow: 'Os benefícios',
    title: 'O que muda a produção local',
    items: [
      { title: 'Disponibilidade', text: 'Stocks próximos, entregues segundo as necessidades reais dos clientes, sem meses de espera.' },
      { title: 'Rastreabilidade', text: 'Um circuito curto e controlado, que ajuda a combater os medicamentos falsificados.' },
      { title: 'Preço', text: 'Menos frete, menos armazenamento, menos perdas cambiais: preços mais justos.' },
      { title: 'Emprego', text: 'Empregos qualificados e uma transferência de saber-fazer industrial.' },
    ],
  },
  position: {
    eyebrow: 'Uma posição estratégica',
    title: 'No coração da África Ocidental',
    text: 'A nossa fábrica instala-se em Sèmè-Podji, entre Cotonou e a fronteira com a Nigéria: um local pensado para abastecer toda a região.',
    corridor: 'No corredor costeiro Abidjan – Lagos',
    port: 'Porto',
    border: 'Fronteira',
    items: [
      { title: 'A Nigéria à porta', text: 'O terreno confina com a fronteira do país mais populoso de África.' },
      { title: 'O porto de Cotonou por perto', text: 'A porta de entrada comercial do país, tanto para as matérias-primas como para os equipamentos.' },
      { title: 'Toda uma região a servir', text: 'Quinze países e mais de 400 milhões de habitantes abastecidos a partir de uma única fábrica.' },
    ],
  },
  env: {
    eyebrow: 'O enquadramento',
    title: 'Um ambiente favorável',
    items: [
      'Uma vontade política firme de desenvolver a indústria farmacêutica nacional.',
      'Um código de investimentos que coloca a saúde e a transformação industrial entre os setores prioritários.',
      'Vantagens aduaneiras e fiscais nas zonas económicas especiais.',
      'Uma mão de obra jovem e qualificada, formada nas universidades da região e além.',
    ],
  },
  covid: {
    eyebrow: 'Soberania sanitária',
    text: 'A crise da COVID-19 mostrou como a dependência das importações fragiliza os sistemas de saúde. Produzir localmente é garantir o acesso aos medicamentos essenciais.',
  },
};
export default benin;
