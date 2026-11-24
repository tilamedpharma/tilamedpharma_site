import type { UsineDict } from './fr';

const usine: UsineDict = {
  meta: {
    title: 'A nossa fábrica · TILAMED Pharma, Sèmè-Podji (BENIM)',
    description: 'Uma fábrica moderna de produção de soluções injetáveis em Sèmè-Podji: tratamento da água, sopro-enchimento-selagem, esterilização, controlo a 100 % e laboratório.',
  },
  hero: {
    title: 'A nossa fábrica',
    lead: 'Uma unidade moderna e expansível de produção de soluções injetáveis, em construção em Sèmè-Podji.',
    cta1: 'O processo em 7 etapas',
    cta2: 'O local de Sèmè-Podji',
  },
  facts: [
    { value: '15', unit: 'M', code: 'LVP', label: 'soluções de grande volume por ano' },
    { value: '35', unit: 'M', code: 'SVP', label: 'injetáveis de pequeno volume por ano' },
    { value: '2', unit: 'ha', code: '', label: 'de local industrial em Sèmè-Podji' },
    { value: '100–1000', unit: 'ml', code: '', label: 'formatos de frascos de perfusão' },
    { value: 'C + A', unit: '', code: '', label: 'graus de limpeza das zonas críticas' },
  ],
  site: {
    eyebrow: 'Um local integrado',
    title: 'Toda a cadeia de fabrico reunida num único local',
    text: 'A nossa fábrica reunirá o tratamento da água farmacêutica, a preparação das soluções, o fabrico dos frascos, a esterilização, a inspeção, o laboratório de controlo de qualidade e o armazém. Foi concebida para poder aumentar a sua capacidade.',
    badge: 'Concebida para aumentar a sua capacidade',
    imageAlt: 'Equipamentos em aço inoxidável numa fábrica farmacêutica',
  },
  process: {
    eyebrow: 'O processo',
    title: 'Sete etapas, da água à entrega',
    intro: 'Cada etapa tem a sua página detalhada. Eis o essencial do que acontece entre a chegada da água e a saída das caixas.',
    more: 'Descobrir a etapa',
    docTitle: 'Precisa dos dados técnicos?',
    docText: 'Profissionais de saúde e compradores: peçam as especificações dos nossos produtos e do nosso processo.',
    docCta: 'Pedir a documentação',
    steps: [
      { title: 'Tratamento da água', text: 'Uma solução de perfusão contém mais de 90 % de água. Produziremos no local duas qualidades de água farmacêutica.', points: ['Dupla osmose inversa e eletrodesionização', 'Água para injetáveis por destilação', 'Condutividade e temperatura monitorizadas em contínuo'] },
      { title: 'Preparação das soluções', text: 'Cada solução é preparada por lotes, segundo uma fórmula validada, em cubas de aço inoxidável.', points: ['Cubas com células de pesagem e agitadores', 'Controlos em processo: concentração, pH, aspeto', 'Filtração antes do enchimento'] },
      { title: 'Sopro, enchimento, selagem', text: 'Uma única máquina forma o frasco, enche-o e sela-o, sem qualquer contacto humano.', points: ['Frasco fabricado no próprio momento do enchimento', 'Enchimento sob fluxo de ar protegido', 'Mudança de formato em cerca de meia hora'] },
      { title: 'Esterilização', text: 'Cada frasco cheio é esterilizado na sua embalagem final, em autoclave de aspersão de água sobreaquecida.', points: ['Ciclos validados e registados para cada carga', 'Aquecimento homogéneo que protege o plástico', 'Separação física antes e depois da esterilização'] },
      { title: 'Controlo a 100 %', text: 'Nenhum frasco sairá da fábrica sem ter sido controlado.', points: ['Teste de estanquidade de cada frasco', 'Inspeção visual sob luz', 'Rejeição automática das caixas não conformes'] },
      { title: 'Laboratório de controlo de qualidade', text: 'Matérias-primas, águas e lotes são analisados antes de qualquer libertação.', points: ['Cromatografia (HPLC) e espectrometria', 'Microbiologia: esterilidade e endotoxinas', 'Libertação pelo farmacêutico responsável'] },
      { title: 'Acondicionamento e entrega', text: 'Armazenamento segundo as boas práticas de distribuição e entrega pelo nosso próprio serviço logístico.', points: ['Entrega segundo as necessidades reais dos clientes', 'Acompanhamento de encomendas e stocks em tempo real', 'Exportação por transitário ou entrega organizada'] },
    ],
  },
  explore: {
    eyebrow: 'Para além da produção',
    title: 'O que torna a produção possível',
    intro: 'Zonas limpas, serviços técnicos, formação das equipas e o próprio terreno: cada tema tem a sua página.',
    more: 'Saber mais',
  },
  green: {
    badge: 'Green building',
    title: 'Uma fábrica pensada para limitar o seu impacto',
    text: 'Água, energia, resíduos: a fábrica está em processo de certificação EDGE, a norma de edifício verde da IFC (Grupo Banco Mundial).',
    cta: 'A nossa abordagem ambiental',
    imageAlt: 'Telhados industriais equipados com painéis solares',
  },
  location: {
    eyebrow: 'O local de Sèmè-Podji',
    title: 'Uma localização estratégica, entre Cotonou e a NIGÉRIA',
    items: [
      'No município de Sèmè-Podji, departamento de Ouémé, no sul do BENIM',
      'Junto à fronteira de Kraké, principal passagem para a NIGÉRIA',
      'Perto de Cotonou e do seu porto autónomo',
      'Na zona industrial de Sèmè-Podji',
    ],
    cta: 'O local de Sèmè-Podji',
    directions: 'Itinerário',
  },
};
export default usine;
