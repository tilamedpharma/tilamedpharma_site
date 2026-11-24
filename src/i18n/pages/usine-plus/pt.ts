import type { Topic } from './fr';

const pages: Record<string, Topic> = {
  'site-seme-podji': {
    meta: { title: 'O local de Sèmè-Podji · A nossa fábrica · TILAMED Pharma', description: 'Um terreno de 2 hectares na zona industrial de Sèmè-Podji, perto da fronteira de Kraké, de Cotonou e do seu porto.' },
    lead: 'Um local de 2 hectares, logo após a fronteira de Kraké, entre Cotonou e a NIGÉRIA.',
    intro: '',
    facts: [
      { value: '2', unit: 'ha', label: 'de local industrial, ou seja, 20 000 m²' },
    ],
    blocks: [
      { kind: 'points', title: 'Uma localização estratégica', items: [
        'No município de Sèmè-Podji, departamento de Ouémé, no sul do BENIM.',
        'Junto à fronteira de Kraké, principal ponto de passagem para a NIGÉRIA.',
        'Perto de Cotonou e do seu porto autónomo, que assegura a maior parte do comércio do país.',
        'Na zona industrial de Sèmè-Podji.',
      ] },
      { kind: 'cards', title: 'A organização do local', text: 'O local separará claramente as zonas limpas das zonas gerais.', items: [
        { title: 'Edifício de produção', text: 'As linhas de fabrico, em zonas de atmosfera controlada.' },
        { title: 'Receção e quarentena', text: 'As matérias-primas aguardam aqui o seu controlo antes da utilização.' },
        { title: 'Laboratório', text: 'O controlo de qualidade das matérias, das águas e dos lotes.' },
        { title: 'Armazém de produtos acabados', text: 'O armazenamento dos produtos libertados antes da entrega.' },
        { title: 'Utilidades técnicas', text: 'A água, o vapor, o ar e o frio que fazem funcionar a fábrica.' },
        { title: 'Vestiários e antecâmaras', text: 'A passagem controlada entre zonas gerais e zonas limpas.' },
      ] },
    ],
    note: '',
  },
  'salles-propres': {
    meta: { title: 'Salas limpas · A nossa fábrica · TILAMED Pharma', description: 'Zonas de grau C e proteção de grau A no ponto de enchimento: filtração HEPA, cascata de pressão, materiais lisos e vigilância contínua.' },
    lead: 'As etapas críticas decorrerão num ambiente de atmosfera controlada.',
    intro: 'O fabrico das soluções injetáveis está protegido em zonas de grau C, com uma proteção de grau A no ponto de enchimento, em conformidade com as boas práticas de fabrico.',
    facts: [
      { value: 'C', unit: '', label: 'Grau das zonas de fabrico' },
      { value: 'A', unit: '', label: 'Proteção no ponto de enchimento' },
    ],
    blocks: [
      { kind: 'cards', title: 'Uma atmosfera controlada', items: [
        { title: 'Filtração HEPA', text: 'O ar insuflado nas salas passa por filtros de muito alta eficiência.' },
        { title: 'Cascata de pressão', text: 'As salas mais limpas estão em sobrepressão para impedir a entrada de contaminantes.' },
        { title: 'Materiais lisos', text: 'Painéis, portas e pavimentos em resina epóxi, fáceis de limpar e desinfetar.' },
        { title: 'Vigilância', text: 'Partículas, pressão, temperatura e humidade monitorizadas, com alarmes.' },
      ] },
    ],
    note: 'O pessoal acede às zonas limpas por vestiários e antecâmaras dedicados, com vestuário adaptado a cada grau.',
  },
  utilites: {
    meta: { title: 'Utilidades industriais · A nossa fábrica · TILAMED Pharma', description: 'Ar comprimido, vapor, água gelada, redes de água purificada e vapor puro, manutenção no local: os serviços técnicos da fábrica.' },
    lead: 'Ar comprimido, vapor, água gelada: os serviços técnicos que fazem funcionar a fábrica.',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'cards', title: 'Os serviços técnicos', items: [
        { title: 'Ar comprimido', text: 'Ar comprimido isento de óleo para os equipamentos de produção.' },
        { title: 'Vapor industrial', text: 'Uma caldeira produz o vapor industrial.' },
        { title: 'Água gelada', text: 'Grupo de água gelada e torre de arrefecimento para os processos e o tratamento do ar.' },
        { title: 'Redes de tubagens', text: 'Para a água purificada, a água para injetáveis, o vapor puro e o ar comprimido.' },
        { title: 'Manutenção no local', text: 'Oficina de manutenção e armazém de peças sobresselentes no local.' },
      ] },
    ],
    note: 'A manutenção preventiva e corretiva é assegurada pelos nossos técnicos, formados pelos fabricantes dos equipamentos.',
  },
  'transfert-technologie': {
    meta: { title: 'Transferência de tecnologia · A nossa fábrica · TILAMED Pharma', description: 'Cinco anos de assistência técnica permanente no local e formações para operadores, laboratório e manutenção: o saber-fazer fica no BENIM.' },
    lead: 'Cinco anos de assistência permanente para que o saber-fazer fique no BENIM.',
    intro: 'Desde a instalação e o arranque da fábrica, os fabricantes dos equipamentos formam as nossas equipas no BENIM. Os seus engenheiros ficam depois destacados no local durante cinco anos para acompanhar a produção.',
    facts: [
      { value: '5', unit: 'anos', label: 'de assistência técnica permanente, prorrogável' },
      { value: '70', unit: '%', label: 'de postos técnicos' },
    ],
    blocks: [
      { kind: 'points', title: 'As formações previstas', items: [
        'Formação funcional e técnica dos operadores e técnicos.',
        'Formação em boas práticas de fabrico e higiene em zona limpa.',
        'Formação do pessoal de laboratório nos métodos de análise.',
        'Formação da equipa de manutenção nos equipamentos críticos.',
      ] },
    ],
    note: '',
  },
};
export default pages;
