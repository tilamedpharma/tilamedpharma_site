import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {
    clients: {
      meta: { title: 'Os nossos clientes · Mercados · TILAMED Pharma', description: 'Centrais de compras, grossistas, organizações de saúde, hospitais e farmácias: os clientes da TILAMED Pharma no BENIM e na África Ocidental.' },
      lead: 'Fornecemos os atores públicos e privados da saúde no BENIM e na África Ocidental.',
      intro: '',
      facts: [{ value: '15', unit: 'países', label: 'da África Ocidental cobertos' }],
      blocks: [
        { kind: 'points', title: 'Como trabalhamos', items: [
          'Vendas diretas às centrais de compras públicas e privadas.',
          'Respostas a concursos e consultas restritas.',
          'Vendas ao setor privado e através dos nossos distribuidores.',
          'Todas as vendas são centralizadas pela nossa direção comercial, com prazos de resposta curtos.',
        ] },
      ],
      note: '',
    },
    'centrales-achat': {
      meta: { title: 'Centrais de compras · Mercados · TILAMED Pharma', description: 'Um fornecedor local, capaz de entregar segundo as suas necessidades reais: menos stock imobilizado, menos ruturas, dossiers de concurso completos.' },
      lead: 'Um fornecedor local, capaz de entregar segundo as suas necessidades reais.',
      intro: 'As centrais de compras têm hoje de encomendar com vários meses de antecedência e armazenar grandes volumes de soros importados. Com uma produção local, as encomendas podem acompanhar o consumo real.',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'O que ganha', items: [
          { title: 'Menos stock imobilizado', text: 'Entregas mais frequentes, armazéns menos sobrecarregados.' },
          { title: 'Menos ruturas', text: 'Um fornecedor a poucas horas de estrada em vez de várias semanas de mar.' },
          { title: 'Dossiers completos', text: 'Uma equipa habituada aos procedimentos de concursos nacionais e internacionais.' },
        ] },
      ],
      note: '',
    },
    'hopitaux-cliniques': {
      meta: { title: 'Hospitais, clínicas e farmácias · Mercados · TILAMED Pharma', description: 'Soluções de perfusão essenciais, disponíveis perto de si, em frascos de plástico inquebráveis.' },
      lead: 'Soluções de perfusão essenciais, disponíveis perto de si.',
      intro: 'Os soros de perfusão são utilizados todos os dias em todos os serviços: urgência, cirurgia, medicina, pediatria, maternidade. A sua disponibilidade é vital.',
      facts: [],
      blocks: [
        { kind: 'points', title: 'Uma gama pensada para o hospital', items: [
          'Uma gama que cobre as necessidades de base: soro fisiológico, glicose, Ringer lactato.',
          'Soluções específicas: analgésico, anti-infecioso, antibióticos.',
          'Injetáveis em ampolas para urgência, maternidade e cuidados correntes.',
          'Frascos de plástico inquebráveis, fáceis de manusear e armazenar.',
        ] },
      ],
      note: '',
    },
    'organisations-sante': {
      meta: { title: 'Organizações de saúde · Mercados · TILAMED Pharma', description: 'Um parceiro local para os programas de saúde regionais e internacionais: BPF da OMS, dossiers de qualidade completos, entrega em 15 países.' },
      lead: 'Um parceiro local para os programas de saúde regionais e internacionais.',
      intro: 'As organizações internacionais, regionais e não governamentais dão grande importância à melhoria dos sistemas de saúde na África Ocidental. As nossas equipas conhecem os seus procedimentos de compra e as suas exigências de qualidade.',
      facts: [{ value: '15', unit: 'países', label: 'da África Ocidental cobertos' }],
      blocks: [
        { kind: 'points', title: 'Os nossos compromissos', items: [
          'Fabrico segundo as boas práticas da OMS.',
          'Dossiers de qualidade completos para cada produto.',
          'Capacidade de entrega nos 15 países da África Ocidental cobertos.',
        ] },
      ],
      note: '',
    },
  },
  distrib: {
    meta: { title: 'Tornar-se distribuidor · Mercados · TILAMED Pharma', description: 'Grossistas e distribuidores farmacêuticos da África Ocidental: junte-se à rede de distribuidores autorizados da TILAMED Pharma.' },
    lead: 'É grossista ou distribuidor farmacêutico na África Ocidental? Falemos.',
    intro: 'Estamos a desenvolver uma rede de distribuidores autorizados para disponibilizar os nossos produtos em toda a sub-região.',
    reqTitle: 'O que procuramos',
    reqs: [
      'Ser titular das autorizações de distribuição farmacêutica do seu país.',
      'Dispor de um armazém conforme às boas práticas de distribuição.',
      'Conhecer os circuitos de distribuição públicos e privados do seu mercado.',
    ],
    formTitle: 'A sua candidatura',
    fields: {
      company: 'Denominação social', country: 'País', name: 'Nome do contacto', role: 'Função', email: 'Endereço de e-mail', phone: 'Telefone',
      licence: 'Autorização de distribuição farmacêutica', warehouse: 'Armazém conforme às BPD', yes: 'Sim', no: 'Não', pending: 'Em curso',
      channels: 'Circuitos cobertos', ranges: 'Gamas que lhe interessam', message: 'Apresente a sua empresa',
      messageHint: 'Zonas cobertas, clientes, volumes, equipa…', consent: 'Aceito que a TILAMED Pharma utilize estas informações para analisar a minha candidatura.',
      submit: 'Enviar a minha candidatura', required: 'Campo obrigatório', select: 'Escolher…',
    },
    channels: ['Centrais de compras públicas', 'Hospitais e clínicas', 'Farmácias', 'Organizações de saúde', 'Exportação sub-regional'],
  },
  presence: {
    meta: { title: 'Presença regional · Mercados · TILAMED Pharma', description: 'Uma fábrica no BENIM, 15 países da África Ocidental cobertos e escritórios no BENIM, no BURKINA FASO e em FRANÇA.' },
    lead: 'Uma fábrica no BENIM, 15 países da África Ocidental cobertos e uma presença internacional.',
    facts: [
      { value: '15', unit: 'países', label: 'da África Ocidental cobertos' },
      { value: '3', unit: '', label: 'escritórios: BENIM, BURKINA FASO, FRANÇA' },
      { value: '400', unit: 'M +', label: 'de habitantes na África Ocidental' },
    ],
    note: 'A sub-região partilha desafios de saúde próximos: doenças semelhantes, populações jovens e em forte crescimento, e a mesma dependência dos medicamentos importados.',
  },
};
export default marches;
