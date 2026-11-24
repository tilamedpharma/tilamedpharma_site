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
    { value: '15', unit: 'milhões', code: 'LVP', label: 'soluções de grande volume por ano' },
    { value: '35', unit: 'milhões', code: 'SVP', label: 'injetáveis de pequeno volume por ano' },
    { value: '2', unit: 'hectares', code: '', label: 'de local industrial em Sèmè-Podji' },
    { value: '100–1000', unit: 'mililitros', code: '', label: 'formatos de frascos de perfusão' },
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
  lines: {
    "eyebrow": "Duas linhas de produção",
    "title": "Grandes e pequenos volumes, duas linhas complementares",
    "intro": "A fábrica terá duas linhas distintas, abertas desde o arranque: uma para as soluções de perfusão e outra para os injetáveis em ampolas.",
    "labels": {
      "container": "Embalagem",
      "volumes": "Volumes",
      "capacity": "Capacidade prevista",
      "uses": "No hospital"
    },
    "start": "Desde o arranque",
    "items": [
      {
        "code": "LVP",
        "name": "Grandes volumes",
        "sub": "Soluções de perfusão",
        "container": "Frascos de plástico formados, enchidos e selados no local",
        "volumes": "100 a 1000 mL",
        "capacity": "15 milhões por ano",
        "uses": "Perfusão, reidratação, diluição de medicamentos",
        "link": "soufflage-remplissage-scellage",
        "cta": "O processo de sopro-enchimento-selagem"
      },
      {
        "code": "SVP",
        "name": "Pequenos volumes",
        "sub": "Injetáveis em ampolas",
        "container": "Ampolas unidose",
        "volumes": "1 a 20 mL",
        "capacity": "35 milhões por ano",
        "uses": "Injeção direta: urgências, maternidade, paludismo grave, cuidados correntes",
        "link": "medicaments",
        "cta": "Os medicamentos previstos"
      }
    ]
  },
  flows: {
    "eyebrow": "Circulação na fábrica",
    "title": "Quatro fluxos que não se cruzam",
    "intro": "A fábrica segue o princípio da marcha em frente: matérias, produtos, pessoas e resíduos têm cada um o seu caminho, para que o que está limpo nunca se cruze com o que não está.",
    "zones": {
      "g": "Zona geral",
      "c": "Zona limpa · grau C",
      "a": "Proteção de grau A"
    },
    "all": "Todos os fluxos",
    "show": "Mostrar o fluxo",
    "items": [
      {
        "key": "mat",
        "icon": "box",
        "title": "Matérias-primas",
        "steps": [
          {
            "t": "Receção",
            "z": "g"
          },
          {
            "t": "Quarentena",
            "z": "g"
          },
          {
            "t": "Análise no laboratório",
            "z": "g"
          },
          {
            "t": "Pesagem",
            "z": "c"
          },
          {
            "t": "Preparação",
            "z": "c"
          }
        ]
      },
      {
        "key": "prod",
        "icon": "drop",
        "title": "Produtos",
        "steps": [
          {
            "t": "Enchimento",
            "z": "a"
          },
          {
            "t": "Esterilização",
            "z": "g"
          },
          {
            "t": "Inspeção a 100 %",
            "z": "g"
          },
          {
            "t": "Libertação do lote",
            "z": "g"
          },
          {
            "t": "Expedição",
            "z": "g"
          }
        ]
      },
      {
        "key": "pers",
        "icon": "users",
        "title": "Pessoal",
        "steps": [
          {
            "t": "Vestiário",
            "z": "g"
          },
          {
            "t": "Antecâmara de equipamento",
            "z": "c"
          },
          {
            "t": "Zona limpa",
            "z": "c"
          },
          {
            "t": "Antecâmara de saída",
            "z": "g"
          }
        ]
      },
      {
        "key": "waste",
        "icon": "recycle",
        "title": "Resíduos",
        "steps": [
          {
            "t": "Recolha",
            "z": "c"
          },
          {
            "t": "Saída dedicada",
            "z": "g"
          },
          {
            "t": "Triagem",
            "z": "g"
          },
          {
            "t": "Eliminação autorizada",
            "z": "g"
          }
        ]
      }
    ],
    "note": "Esquema de princípio. A organização dos edifícios é descrita na página do local de Sèmè-Podji.",
    "cta": "A organização do local"
  },
  products: {
    "eyebrow": "Os nossos futuros produtos",
    "title": "O que sairá das nossas linhas",
    "intro": "Serão fabricadas três gamas em Sèmè-Podji. Entrarão em produção à medida que as linhas forem abertas e as autorizações obtidas.",
    "badge": "Ainda não disponível",
    "items": [
      {
        "slug": "serums",
        "icon": "drop",
        "tag": "Linha LVP · arranque",
        "text": "Soluções de base e soluções específicas para a perfusão e a reidratação.",
        "examples": [
          "Cloreto de sódio 0,9 %",
          "Glicose 5 %",
          "Lactato de Ringer"
        ]
      },
      {
        "slug": "medicaments",
        "icon": "vial",
        "tag": "Linha SVP · três fases",
        "text": "Injetáveis em ampolas desde o arranque e, depois, antibióticos injetáveis, vacinas e soros, soluções orais.",
        "examples": [
          "Ocitocina 10 UI",
          "Quinino injetável",
          "Ceftriaxona 1 g"
        ]
      },
      {
        "slug": "solutions-nutritionnelles",
        "icon": "flask",
        "tag": "Linhas LVP e SVP · arranque",
        "text": "Glicose concentrada e vitaminas para o aporte calórico e a correção de carências.",
        "examples": [
          "Glicose 10 %",
          "Glicose 30 %",
          "Vitaminas do complexo B"
        ]
      }
    ],
    "more": "Ver a gama",
    "cta": "Todo o catálogo",
    "doc": "Ser informado da disponibilidade"
  },
  jobs: {
    "eyebrow": "As equipas",
    "title": "As profissões da fábrica",
    "text": "Fazer funcionar uma fábrica farmacêutica exige competências especializadas. Vamos recrutar localmente e formar as nossas equipas, com uma transferência de competências ao longo de cinco anos.",
    "value": "150",
    "unit": "empregos diretos previstos",
    "split": [
      {
        "v": 70,
        "l": "postos técnicos"
      },
      {
        "v": 30,
        "l": "postos administrativos"
      }
    ],
    "familiesTitle": "Seis famílias de profissões",
    "cta1": "Descobrir as nossas profissões",
    "cta2": "Candidatura espontânea"
  },
  faq: {
    "eyebrow": "Perguntas frequentes",
    "title": "A fábrica em perguntas",
    "more": "Saber mais",
    "items": [
      {
        "q": "Quando arrancará a fábrica?",
        "a": "A fábrica está em construção. A produção arrancará após a instalação e a qualificação dos equipamentos, a validação dos primeiros lotes e a obtenção das autorizações. Anunciaremos cada etapa nas nossas notícias.",
        "link": "actualites"
      },
      {
        "q": "A capacidade poderá aumentar?",
        "a": "Sim. A fábrica foi concebida para aumentar a sua capacidade e estão previstas novas produções: antibióticos injetáveis e, depois, vacinas, soros e soluções orais.",
        "link": "medicaments"
      },
      {
        "q": "Porquê frascos de plástico e não de vidro?",
        "a": "O frasco de plástico é leve e inquebrável e esvazia-se sem entrada de ar, o que limita os riscos de contaminação. É fabricado no próprio momento do enchimento, sem contacto humano.",
        "link": "soufflage-remplissage-scellage"
      },
      {
        "q": "Como será garantida a esterilidade?",
        "a": "Enchimento sob proteção de grau A, esterilização de cada frasco na sua embalagem final, controlo de 100 % dos frascos e análises no laboratório: nenhum lote será libertado sem o acordo do farmacêutico responsável.",
        "link": "sterilisation"
      },
      {
        "q": "É possível visitar a fábrica?",
        "a": "Sim, mediante marcação. As visitas são propostas a parceiros, investidores, autoridades e profissionais de saúde, respeitando as regras de acesso às zonas limpas.",
        "link": "contact"
      },
      {
        "q": "Como tornar-se fornecedor da fábrica?",
        "a": "Matérias-primas, embalagens, equipamentos, serviços: apresente a sua empresa a partir da página Fornecedores. O nosso serviço de compras analisará a sua oferta segundo os nossos critérios de qualidade.",
        "link": "fournisseurs"
      }
    ]
  },
  visit: {
    "badge": "Visitas mediante marcação",
    "title": "Venha ver a fábrica a ganhar forma",
    "text": "Investidores, autoridades de saúde, parceiros técnicos ou futuros clientes: organizemos uma visita ao local de Sèmè-Podji ou um encontro com a nossa equipa.",
    "cta1": "Pedir uma visita",
    "cta2": "Tornar-se distribuidor"
  },
};
export default usine;
