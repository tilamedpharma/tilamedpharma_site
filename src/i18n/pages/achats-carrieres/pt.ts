import type { AchatsCarrieresDict } from './fr';

const d: AchatsCarrieresDict = {
  pages: {
    'centrale-achat': {
      meta: { title: 'A nossa central de compras · TILAMED Pharma', description: 'Aprovisionamento, armazenamento e distribuição por grosso de produtos de saúde de qualidade, a preços acessíveis à população.' },
      lead: 'Aprovisionamento, armazenamento e distribuição por grosso de produtos de saúde de qualidade, a preços acessíveis à população.',
      intro: '',
      facts: [{ value: '1.000', unit: 'M FCFA', label: 'de capital social, filial da África Ocidental sediada em Cotonou' }],
      blocks: [
        { kind: 'prose', title: 'A nossa apresentação', items: ['A par do fabrico de soluções injetáveis em Sèmè-Podji, a central de compras da TILAMED Pharma tem por missão o aprovisionamento, o armazenamento e a distribuição por grosso de produtos de saúde, garantindo que são vendidos a preços acessíveis à população.'] },
        { kind: 'points', title: 'As nossas missões', items: [
          'Abastecer as unidades de saúde públicas e privadas, os estabelecimentos farmacêuticos e os serviços de saúde em medicamentos genéricos, dispositivos médicos, reagentes de laboratório e outros produtos de saúde essenciais à medicina humana e animal.',
          'Constituir stocks de reserva para fazer face à subida dos preços e às ruturas do mercado.',
          'Assegurar, numa base contratual para os programas de saúde, o armazenamento, a gestão e a distribuição de medicamentos e material médico.',
          'Participar na promoção dos medicamentos genéricos.',
          'Vender no estado ou reacondicionar produtos de saúde humana e animal segundo as necessidades da política de saúde.',
          'Desenvolver a nossa experiência em novos domínios: produtos químicos, insumos veterinários, reagentes e consumíveis de laboratório.',
        ] },
        { kind: 'prose', title: 'A nossa visão', items: ['Tornar-nos uma central de compras farmacêutica de referência, bem governada, resiliente e de alcance sub-regional, que assegure a disponibilidade contínua de produtos de saúde de qualidade a preços acessíveis para a população.'] },
      ],
      note: 'Pretende tornar-se fornecedor da TILAMED Pharma? Consulte os nossos critérios de seleção e escreva para contact@tilamedpharma.com indicando «Compras» no assunto.',
    },
    fournisseurs: {
      meta: { title: 'Os nossos fornecedores · Central de compras · TILAMED Pharma', description: 'Critérios de seleção, princípios e compromissos de sustentabilidade: o que esperamos dos nossos fornecedores e o que eles podem esperar de nós.' },
      lead: 'O que esperamos dos nossos fornecedores e o que eles podem esperar de nós.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'sequence', title: 'Critérios de seleção dos fornecedores', text: 'Cada fornecedor é avaliado antes da primeira encomenda e depois reavaliado regularmente. Para as matérias que entram no produto, a avaliação inclui um questionário, o estudo do dossier técnico e, se necessário, uma auditoria no local.', items: [
          { title: 'Qualidade', text: 'Um sistema de gestão da qualidade reconhecido, certificados de análise para cada lote e, para as matérias farmacêuticas, o cumprimento das boas práticas de fabrico.' },
          { title: 'Conformidade regulamentar', text: 'Produtos e documentos conformes às farmacopeias e às exigências da Agência Beninense de Regulação Farmacêutica (ABRP).' },
          { title: 'Fiabilidade', text: 'Prazos cumpridos, capacidade suficiente, rastreabilidade completa e informação rápida em caso de alteração ou incidente.' },
          { title: 'Custo total', text: 'Um preço justo, avaliado com o transporte, os prazos, o armazenamento e o risco de rutura, e não apenas o preço de compra.' },
          { title: 'Responsabilidade', text: 'O respeito pelos direitos humanos, pela saúde e segurança no trabalho, pelo ambiente e pelas regras anticorrupção.' },
        ] },
        { kind: 'cards', title: 'Os nossos princípios', items: [
          { title: 'Equidade e transparência', text: 'As mesmas regras para todos, consultas claras e decisões fundamentadas.' },
          { title: 'Integridade', text: 'Nenhum presente ou vantagem suscetível de influenciar uma decisão de compra. Qualquer conflito de interesses é declarado.' },
          { title: 'Confidencialidade', text: 'As informações técnicas e comerciais trocadas são protegidas de ambos os lados.' },
          { title: 'Parceria', text: 'Relações de longo prazo, objetivos partilhados e um diálogo regular sobre o desempenho.' },
        ] },
        { kind: 'points', title: 'Uma cadeia de abastecimento sustentável', text: 'Esperamos que os nossos fornecedores partilhem os nossos compromissos e os exijam, por sua vez, aos seus próprios subcontratados.', items: [
          'Condições de trabalho dignas: sem trabalho infantil nem trabalho forçado, salários e horários conformes à lei.',
          'Redução dos resíduos, das embalagens e das emissões, e gestão responsável da água e da energia.',
          'Escolha de transportes e acondicionamentos que limitem o impacto ambiental.',
          'Desenvolvimento de fornecedores locais e regionais, para aproximar a produção dos doentes.',
          'Continuidade do abastecimento: planos de contingência em caso de crise ou de dificuldades de transporte.',
        ] },
      ],
      note: 'Para propor os seus produtos ou serviços, escreva para contact@tilamedpharma.com indicando «Compras» no assunto.',
    },
    'chaine-distribution': {
      meta: { title: 'A nossa distribuição · Central de compras · TILAMED Pharma', description: 'Da fábrica de Sèmè-Podji ao doente: um circuito curto, controlado e rastreável.' },
      lead: 'Da fábrica de Sèmè-Podji ao doente: um circuito curto, controlado e rastreável.',
      intro: 'Os nossos produtos são fabricados no Benim, a poucas horas de estrada dos hospitais que os utilizam. Eis o caminho que percorrem, da fábrica até ao doente.',
      facts: [],
      blocks: [
        { kind: 'sequence', title: 'As etapas, uma a uma', items: [
          { title: 'A fábrica de Sèmè-Podji', text: 'Cada lote é fabricado, controlado pelo nosso laboratório e libertado pelo farmacêutico responsável.' },
          { title: 'O nosso armazém', text: 'Os produtos acabados são armazenados em condições controladas, com acompanhamento por lote e por prazo de validade.' },
          { title: 'Centrais de compras e distribuidores', text: 'Entregamos às centrais de compras públicas, às organizações de saúde e aos nossos distribuidores autorizados no Benim e na sub-região.' },
          { title: 'Hospitais, clínicas e farmácias', text: 'As unidades de saúde recebem produtos disponíveis mais depressa, em quantidade adaptada ao seu consumo real.' },
          { title: 'Os doentes', text: 'Soluções de perfusão de qualidade, disponíveis perto de casa, a um preço acessível.' },
        ] },
      ],
      note: 'Quase metade da população africana não tem acesso regular aos medicamentos essenciais.',
    },
    carrieres: {
      meta: { title: 'Trabalhar na TILAMED · Carreiras · TILAMED Pharma', description: '150 empregos diretos, 70 % de postos técnicos e 5 anos de transferência de competências: junte-se à primeira indústria de soluções injetáveis do Benim.' },
      lead: 'Junte-se à primeira indústria de soluções injetáveis do Benim.',
      intro: '',
      facts: [
        { value: '150', unit: '', label: 'empregos diretos' },
        { value: '70', unit: '%', label: 'de postos técnicos' },
        { value: '30', unit: '%', label: 'de postos administrativos' },
        { value: '5', unit: 'anos', label: 'de transferência de competências' },
      ],
      blocks: [
        { kind: 'prose', title: 'Uma equipa em construção', items: [
          'Estamos a construir uma equipa de profissionais qualificados, formados no fabrico industrial e empenhados na qualidade.',
          'O Benim dispõe de uma mão de obra jovem, dinâmica e qualificada: recrutamos e formamos prioritariamente no país.',
        ] },
        { kind: 'points', title: 'Um empregador aberto a todas e a todos', items: [
          'Processos de recrutamento abertos e equitativos, baseados apenas nas competências.',
          'Postos abertos a pessoas com deficiência.',
          'Uma partilha equitativa das responsabilidades entre mulheres e homens, a todos os níveis.',
          'Uma formação acessível a todas e a todos, com cinco anos de acompanhamento pelos fabricantes dos equipamentos.',
        ] },
      ],
      note: 'Não há ofertas de emprego publicadas de momento. Pode enviar uma candidatura espontânea.',
    },
    metiers: {
      meta: { title: 'As nossas profissões · Carreiras · TILAMED Pharma', description: 'Produção, garantia de qualidade, laboratório, manutenção, logística, funções de suporte: as profissões de uma fábrica farmacêutica.' },
      lead: 'Produção, qualidade, manutenção, logística, funções de suporte: descubra as profissões de uma fábrica farmacêutica.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Seis famílias de profissões', items: [
          { title: 'Produção', text: 'Operadores de linha, condutores de máquinas, chefes de equipa.' },
          { title: 'Garantia de qualidade', text: 'Farmacêuticos, responsáveis de qualidade, especialistas em validação.' },
          { title: 'Laboratório', text: 'Analistas em físico-química e em microbiologia.' },
          { title: 'Manutenção e utilidades', text: 'Técnicos de mecânica, eletricidade, automação e frio.' },
          { title: 'Logística', text: 'Fiéis de armazém, gestores de stocks, motoristas de entrega.' },
          { title: 'Funções de suporte', text: 'Finanças, recursos humanos, compras, vendas, informática.' },
        ] },
        { kind: 'points', title: 'A equipa de direção', items: [
          'Diretor-geral',
          'Farmacêutico responsável',
          'Diretor administrativo, financeiro e de recursos humanos',
          'Diretor comercial e de marketing, com delegados de informação médica',
          'Responsável de compras',
          'Chefe de contabilidade',
        ] },
      ],
      note: '',
    },
  },
  cand: {
    meta: { title: 'Candidatura espontânea · Carreiras · TILAMED Pharma', description: 'Apresente-se: a TILAMED Pharma analisará o seu perfil assim que abrir os recrutamentos.' },
    lead: 'Apresente-se: analisaremos o seu perfil assim que abrirmos os recrutamentos.',
    intro: 'Analisamos cada candidatura apenas com base nas competências. As candidaturas estão abertas a todas e a todos.',
    formTitle: 'A sua candidatura',
    fields: {
      name: 'Nome completo', email: 'Endereço de e-mail', phone: 'Telefone', country: 'País de residência',
      family: 'Profissão pretendida', level: 'Nível de estudos', experience: 'Anos de experiência',
      cv: 'O seu CV', cvHint: 'PDF ou Word, 5 MB no máximo.', message: 'A sua motivação',
      consent: 'Aceito que a TILAMED Pharma conserve estas informações para analisar a minha candidatura.',
      submit: 'Enviar a minha candidatura', required: 'Campo obrigatório', select: 'Escolher…',
    },
    families: ['Produção', 'Garantia de qualidade', 'Laboratório', 'Manutenção e utilidades', 'Logística', 'Funções de suporte', 'Outro'],
    levels: ['Ensino básico ou formação profissional', 'Ensino secundário', 'Curso técnico superior', 'Licenciatura', 'Mestrado ou engenharia', 'Doutoramento ou mestrado integrado em farmácia'],
    experience: ['Menos de um ano', '1 a 3 anos', '3 a 5 anos', '5 a 10 anos', 'Mais de 10 anos'],
    asideTitle: 'Bom saber',
    asideItems: ['Não há ofertas publicadas de momento', 'O seu perfil será analisado quando os recrutamentos abrirem', 'Postos técnicos e administrativos', 'Formação assegurada pelos fabricantes dos equipamentos'],
  },
};
export default d;
