import type { QualiteDict } from './fr';

const qualite: QualiteDict = {
  pages: {
    qualite: {
      meta: { title: 'Qualidade e conformidade · TILAMED Pharma', description: 'parecer favorável da ABRP, ISO 9001 e ISO 14001 visadas, boas práticas de distribuição: o nosso sistema de qualidade farmacêutica.' },
      lead: 'A qualidade constrói-se em cada etapa, da matéria-prima ao doente.',
      intro: '',
      facts: [
        { value: '6', unit: '', label: 'autorizações obtidas junto das autoridades beninenses' },
      ],
      blocks: [
        { kind: 'cards', title: 'Os nossos referenciais', items: [
          { title: 'OMS', text: 'Normas e diretrizes da Organização Mundial da Saúde.' },
          { title: 'ISO 9001 e ISO 14001', text: 'Certificações visadas para a qualidade e o ambiente.' },
          { title: 'EDGE', text: 'Certificação de edifício verde da IFC em curso.' },
        ] },
        { kind: 'points', title: 'Um sistema de qualidade farmacêutica', items: [
          'Procedimentos escritos, formação do pessoal e registos em cada etapa.',
          'Qualificação dos equipamentos e validação dos processos.',
          'Controlo das matérias-primas, dos materiais de acondicionamento e dos produtos acabados.',
          'Libertação de cada lote pelo farmacêutico responsável.',
          'Gestão de desvios, reclamações e recolhas.',
          'Boas práticas de distribuição para os nossos armazéns e entregas.',
          'ABRP: parecer favorável de 16 de maio de 2023 à autorização de abertura e exploração.',
        ] },
      ],
      note: '',
    },
    agrements: {
      meta: { title: 'Autorizações · Normas · TILAMED Pharma', description: 'Autorizações da ABRP e dos ministérios beninenses, certificados ambiental e técnico, despacho ministerial: as autorizações da TILAMED PHARMA SA.' },
      lead: 'No BENIM, os produtos farmacêuticos dependem da Agência Beninense de Regulação Farmacêutica (ABRP).',
      intro: '',
      facts: [
        { value: '6', unit: '', label: 'autorizações obtidas' },
        { value: '2023', unit: '', label: 'parecer favorável da ABRP, comissão de 16 de maio de 2023' },
      ],
      blocks: [
        { kind: 'points', title: 'O papel da ABRP', items: [
          'Registo dos medicamentos e produtos de saúde.',
          'Inspeção das instalações: boas práticas de fabrico, de distribuição e de farmácia.',
          'Controlo da qualidade dos medicamentos antes da sua colocação no mercado.',
        ] },
        { kind: 'points', title: 'O que transmitimos para cada produto', text: 'Os fabricantes de soluções injetáveis comunicam à ABRP todas as características dos componentes utilizados, tanto do frasco como da fórmula da solução. Estas exigências visam:', items: [
          'garantir a qualidade de cada componente;',
          'permitir a rastreabilidade completa do produto e do seu recipiente;',
          'garantir a integridade da solução durante todo o período de utilização;',
          'assegurar uma embalagem final resistente à quebra e à deterioração.',
        ] },
      ],
      note: '',
    },
    'controle-qualite': {
      meta: { title: 'Controlo de qualidade · Normas · TILAMED Pharma', description: 'Da receção das matérias-primas à libertação pelo farmacêutico responsável: como cada lote é controlado.' },
      lead: 'Um lote só é libertado após a verificação de todos os seus resultados.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'sequence', title: 'Do controlo à libertação', items: [
          { title: 'Receção', text: 'As matérias-primas e os materiais de acondicionamento são colocados em quarentena, amostrados e analisados.' },
          { title: 'Em curso de fabrico', text: 'Controlos de concentração, volume, estanquidade e aspeto.' },
          { title: 'Produto acabado', text: 'Análises físico-químicas e microbiológicas de cada lote.' },
          { title: 'Revisão do dossier de lote', text: 'Verificação de cada registo de fabrico.' },
          { title: 'Libertação', text: 'Decisão do farmacêutico responsável.' },
        ] },
      ],
      note: 'Serão conservadas amostras de cada lote para permitir controlos posteriores.',
    },
    tracabilite: {
      meta: { title: 'Rastreabilidade · Normas · TILAMED Pharma', description: 'Número de lote, registo das expedições e procedimento de recolha: um circuito curto contra os medicamentos falsificados.' },
      lead: 'Um circuito curto, da fábrica ao doente, para medicamentos seguros.',
      intro: 'Os medicamentos falsificados e o mercado ilícito põem vidas em perigo na África Ocidental. A produção local encurta a cadeia de abastecimento e torna-a mais fácil de controlar.',
      facts: [],
      blocks: [
        { kind: 'points', title: 'Cada lote acompanhado', items: [
          'Número de lote e prazo de validade em cada frasco e cada caixa.',
          'Registo das expedições por cliente e por lote.',
          'Procedimento de recolha previsto, em ligação com as autoridades.',
        ] },
      ],
      note: 'O BENIM empenhou-se fortemente contra os medicamentos falsificados: participação na operação internacional PANGEA da INTERPOL, ratificação da convenção MEDICRIME do Conselho da Europa e nova lei sobre as atividades farmacêuticas em 2021.',
    },
    certifications: {
      meta: { title: 'Certificações · Normas · TILAMED Pharma', description: 'ABRP, ISO 9001, ISO 14001, BPD e EDGE: os nossos objetivos de certificação para a qualidade e o ambiente.' },
      lead: 'Os nossos objetivos de certificação para a qualidade e o ambiente.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'table', title: 'Onde estamos', head: ['Referencial', 'Âmbito', 'Estado'], rows: [
          ['ABRP', 'Abertura e exploração de uma fábrica farmacêutica', 'Parecer favorável, comissão de 16 de maio de 2023'],
          ['ISO 9001', 'Gestão da qualidade', 'Certificação visada'],
          ['ISO 14001', 'Gestão ambiental', 'Certificação visada'],
          ['BPD (GDP)', 'Distribuição farmacêutica', 'Aplicadas aos nossos armazéns'],
          ['EDGE (IFC)', 'Edifício verde', 'Certificação em curso'],
        ] },
      ],
      note: 'Esta tabela será atualizada a cada nova certificação obtida.',
    },
  },
  pv: {
    meta: { title: 'Farmacovigilância · Normas · TILAMED Pharma', description: 'Comunique à TILAMED Pharma qualquer efeito indesejável ou problema de qualidade relacionado com um dos nossos produtos.' },
    lead: 'Comunique-nos qualquer efeito indesejável ou problema de qualidade relacionado com um dos nossos produtos.',
    emergency: 'Em caso de urgência médica, contacte imediatamente um médico ou os serviços de urgência.',
    intro: 'A farmacovigilância permite vigiar a segurança dos medicamentos após a sua colocação no mercado. Cada notificação é tratada de forma confidencial e transmitida, se necessário, às autoridades de saúde.',
    formTitle: 'Fazer uma notificação',
    fields: {
      reporter: 'É', name: 'Nome completo', email: 'Endereço de e-mail', phone: 'Telefone', country: 'País',
      type: 'Tipo de notificação', product: 'Produto em causa', batch: 'Número de lote', expiry: 'Prazo de validade',
      date: 'Data do acontecimento', description: 'Descrição do efeito ou do problema', descriptionHint: 'O que aconteceu? Quando? Que medidas foram tomadas?',
      consent: 'Aceito que estas informações sejam tratadas de forma confidencial e, se necessário, transmitidas às autoridades de saúde.',
      submit: 'Enviar a notificação', required: 'Campo obrigatório', select: 'Escolher…',
    },
    reporters: ['Doente ou familiar', 'Profissional de saúde', 'Farmacêutico', 'Distribuidor', 'Outro'],
    types: ['Efeito indesejável', 'Problema de qualidade do produto', 'Erro de medicação'],
    asideTitle: 'Após a sua notificação',
    asideItems: ['Aviso de receção do nosso farmacêutico responsável', 'Análise confidencial da notificação', 'Transmissão às autoridades de saúde se necessário', 'Contacto consigo se forem úteis mais informações'],
  },
};
export default qualite;
