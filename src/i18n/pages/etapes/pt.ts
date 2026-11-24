import type { EtapesDict } from './fr';

const etapes: EtapesDict = {
  ui: {
    step: 'Etapa',
    of: 'de',
    rail: 'As 7 etapas do processo',
    figures: 'Em números',
    prev: 'Etapa anterior',
    next: 'Etapa seguinte',
    overview: 'Visão geral da fábrica',
    backTo: 'A nossa fábrica',
    others: 'O resto da secção Fábrica',
  },
  steps: {
    'traitement-eau': {
      meta: { title: 'Tratamento da água · A nossa fábrica · TILAMED Pharma', description: 'Água purificada e água para injetáveis produzidas no local em Sèmè-Podji: osmose inversa, eletrodesionização, destilação e circuito quente em aço inoxidável.' },
      lead: 'A água é o primeiro ingrediente de uma solução injetável. A sua pureza é controlada em contínuo.',
      intro: 'Uma solução de perfusão contém mais de 90 % de água. Produziremos no local duas qualidades de água farmacêutica, conformes às exigências das farmacopeias.',
      facts: [
        { value: '> 90', unit: '%', label: 'de água numa solução de perfusão' },
        { value: '2', unit: '', label: 'qualidades de água farmacêutica produzidas no local' },
      ],
      block: { kind: 'sequence', title: 'As etapas do tratamento', items: [
        { title: 'Pré-tratamento', text: 'Filtração e amaciamento da água de alimentação.' },
        { title: 'Água purificada', text: 'Dupla osmose inversa seguida de eletrodesionização (EDI).' },
        { title: 'Água para injetáveis (API)', text: 'Destilação num destilador de colunas múltiplas, que elimina as endotoxinas.' },
        { title: 'Vapor puro', text: 'Um gerador dedicado produz o vapor utilizado para esterilizar os equipamentos.' },
        { title: 'Armazenamento e circuito', text: 'A água para injetáveis é armazenada e circula num circuito quente em aço inoxidável para se manter estéril até ao ponto de utilização.' },
      ] },
      note: 'A condutividade e a temperatura da água são medidas em contínuo, com registo e alarmes.',
    },
    'preparation-solutions': {
      meta: { title: 'Preparação das soluções · A nossa fábrica · TILAMED Pharma', description: 'Preparação por lotes, segundo uma fórmula validada, em cubas de aço inoxidável: pesagem, controlos em processo e filtração.' },
      lead: 'A mistura precisa dos princípios ativos e da água para injetáveis.',
      intro: 'Cada solução é preparada por lotes, segundo uma fórmula validada. As matérias-primas são pesadas e adicionadas à água para injetáveis em cubas de aço inoxidável.',
      facts: [
        { value: '2', unit: '', label: 'cubas de preparação em aço inoxidável' },
      ],
      block: { kind: 'points', title: 'Equipamentos e controlos', items: [
        'Duas cubas de preparação, equipadas com células de pesagem e agitadores magnéticos.',
        'Controlos em processo: concentração, pH, aspeto.',
        'Filtração da solução antes da sua transferência para a linha de enchimento.',
        'Limpeza e esterilização das cubas e dos circuitos entre dois lotes.',
      ] },
      note: '',
    },
    'soufflage-remplissage-scellage': {
      meta: { title: 'Sopro, enchimento, selagem · A nossa fábrica · TILAMED Pharma', description: 'A tecnologia blow-fill-seal: uma única máquina forma o frasco, enche-o e sela-o, sem contacto humano. Formatos de 100 a 1000 ml.' },
      lead: 'Uma única máquina forma o frasco, enche-o e sela-o, sem qualquer contacto humano.',
      intro: 'A tecnologia de sopro-enchimento-selagem (blow-fill-seal em inglês) é hoje uma das mais seguras para fabricar soluções estéreis. O frasco de plástico é fabricado no próprio momento em que é cheio.',
      facts: [
        { value: '100', unit: 'ml', label: 'Antibióticos, analgésicos' },
        { value: '250', unit: 'ml', label: 'Soluções de base' },
        { value: '500', unit: 'ml', label: 'O formato mais utilizado' },
        { value: '1000', unit: 'ml', label: 'Reidratação' },
      ],
      block: { kind: 'sequence', title: 'Um ciclo em cinco tempos', items: [
        { title: 'Extrusão', text: 'O polímero de qualidade farmacêutica é fundido e extrudido em tubo.' },
        { title: 'Sopro', text: 'O molde fecha-se e o frasco é formado por ar estéril filtrado.' },
        { title: 'Enchimento', text: 'A solução é doseada com precisão no frasco, sob fluxo de ar protegido.' },
        { title: 'Selagem', text: 'A cabeça do frasco é formada e selada hermeticamente no molde.' },
        { title: 'Desmoldagem', text: 'Os frascos saem fechados, prontos para a esterilização.' },
      ] },
      note: 'A mudança de formato faz-se em cerca de meia hora, o que permite responder rapidamente às necessidades dos clientes.',
    },
    sterilisation: {
      meta: { title: 'Esterilização · A nossa fábrica · TILAMED Pharma', description: 'Esterilização terminal dos frascos na sua embalagem final, em autoclave de aspersão de água sobreaquecida, com ciclos validados e registados.' },
      lead: 'Cada frasco cheio é esterilizado na sua embalagem final.',
      intro: 'Após a selagem, os frascos são submetidos a uma esterilização terminal num autoclave de aspersão de água sobreaquecida. Este método aquece os frascos de forma homogénea e protege o plástico.',
      facts: [],
      block: { kind: 'points', title: 'Uma esterilização controlada', items: [
        'Ciclos validados: tempo, temperatura e pressão registados para cada carga.',
        'Indicadores e controlos que confirmam a eficácia de cada ciclo.',
        'Partes em contacto com o produto em aço inoxidável de qualidade farmacêutica.',
        'Separação física entre os frascos antes e depois da esterilização.',
      ] },
      note: '',
    },
    inspection: {
      meta: { title: 'Controlo a 100 % · A nossa fábrica · TILAMED Pharma', description: 'Secagem, teste de estanquidade, inspeção visual, encaixotamento e rejeição automática: nenhum frasco sai da fábrica sem ter sido controlado.' },
      lead: 'Nenhum frasco sairá da fábrica sem ter sido controlado.',
      intro: '',
      facts: [
        { value: '100', unit: '%', label: 'dos frascos controlados antes de saírem da fábrica' },
      ],
      block: { kind: 'sequence', title: 'Da secagem à caixa', items: [
        { title: 'Secagem', text: 'Os frascos são secos à saída do autoclave.' },
        { title: 'Teste de estanquidade', text: 'Cada frasco é testado para detetar a mínima fuga.' },
        { title: 'Inspeção visual', text: 'Controlo sob luz do aspeto da solução e do frasco.' },
        { title: 'Sobre-embalagem e encaixotamento', text: 'Inserção do folheto e do certificado, fecho e rotulagem da caixa.' },
        { title: 'Rejeição automática', text: 'As caixas com peso não conforme ou rótulo errado são afastadas automaticamente.' },
      ] },
      note: '',
    },
    laboratoire: {
      meta: { title: 'Laboratório de controlo de qualidade · A nossa fábrica · TILAMED Pharma', description: 'Cromatografia, espectrometria, câmaras de estabilidade e microbiologia: cada lote é analisado e libertado pelo farmacêutico responsável.' },
      lead: 'O nosso laboratório analisa as matérias-primas, as águas e cada lote antes da sua libertação.',
      intro: '',
      facts: [],
      block: { kind: 'cards', title: 'Os nossos meios de análise', items: [
        { title: 'Cromatografia (HPLC)', text: 'Identificação e doseamento dos princípios ativos.' },
        { title: 'Espectrometria', text: 'Absorção atómica, UV e infravermelho para a identidade e a pureza.' },
        { title: 'Câmaras de estabilidade', text: 'Estudos de estabilidade para confirmar o prazo de validade.' },
        { title: 'Microbiologia', text: 'Esterilidade, endotoxinas e vigilância do ambiente.' },
      ] },
      note: 'Nenhum lote é colocado no mercado sem a decisão do farmacêutico responsável, com base nos resultados do laboratório e na revisão do dossier de lote.',
    },
    'conditionnement-logistique': {
      meta: { title: 'Acondicionamento e entrega · A nossa fábrica · TILAMED Pharma', description: 'Armazenamento segundo as boas práticas de distribuição e entrega pelo nosso próprio serviço logístico, no BENIM e para exportação.' },
      lead: 'Produtos entregues no sítio certo, no momento certo, em boas condições.',
      intro: 'Os produtos acabados são armazenados no nosso armazém segundo as boas práticas de distribuição e entregues aos nossos clientes no BENIM pelo nosso próprio serviço logístico.',
      facts: [],
      block: { kind: 'points', title: 'O nosso serviço logístico', items: [
        'Entrega segundo as necessidades reais dos clientes, sem obrigação de armazenar vários meses de produtos.',
        'Acompanhamento em tempo real de encomendas e stocks com um software de gestão integrado.',
        'Para exportação, recolha pelos transitários dos nossos clientes ou entrega organizada por nós.',
      ] },
      note: '',
    },
  },
};
export default etapes;
