import type { EnvDict } from './fr';

const environnement: EnvDict = {
  meta: {
    title: 'Meio ambiente · TILAMED Pharma',
    description: 'Uma fábrica pensada para limitar o seu impacto: certificação EDGE em curso, ISO 14001 como objetivo, água, energia, materiais, resíduos e transporte.',
  },
  hero: {
    lead: 'Uma fábrica pensada para limitar o seu impacto: água, energia, materiais, resíduos.',
    cta: 'As nossas alavancas',
  },
  edge: {
    eyebrow: 'Certificação EDGE em curso',
    figLabel: 'a norma de construção verde da IFC, Grupo Banco Mundial',
    text: 'A EDGE é a norma de construção sustentável da Sociedade Financeira Internacional (IFC). Certifica os edifícios que consomem muito menos recursos do que um edifício de referência. A nossa fábrica de Sèmè-Podji está em processo de certificação.',
    criteria: [
      { value: '20', label: 'menos de energia' },
      { value: '20', label: 'menos de água' },
      { value: '20', label: 'menos de energia incorporada nos materiais' },
    ],
    criteriaNote: 'Poupanças mínimas exigidas pela EDGE em relação a um edifício de referência.',
  },
  levers: {
    eyebrow: 'As nossas alavancas',
    title: 'Seis alavancas para reduzir a nossa pegada',
    intro: 'Visamos a certificação ISO 14001 para a gestão ambiental da nossa fábrica de Sèmè-Podji.',
  },
  certs: {
    eyebrow: 'Certificações',
    title: 'Em que ponto estamos?',
    status: { done: 'Obtido', progress: 'Em curso', target: 'Objetivo' },
    edge: { title: 'Certificação EDGE', text: 'Norma de construção verde da IFC (Grupo Banco Mundial).' },
    iso: { title: 'Certificação ISO 14001', text: 'Norma internacional de gestão ambiental.' },
  },
  band: {
    eyebrow: 'Energias renováveis',
    text: 'Os países da região fixaram o objetivo de aumentar fortemente a parte das energias renováveis no seu cabaz energético. Seguiremos essa trajetória.',
  },
};
export default environnement;
