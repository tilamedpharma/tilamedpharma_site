// Página «Tornar-se distribuidor» · português.
import type { DistributeursDict } from './fr';

const distributeurs: DistributeursDict = {
  hero: { cta1: 'Candidatar-se' },
  facts: [
    { value: '15', unit: 'países', label: 'da África Ocidental na nossa zona de distribuição' },
    { value: '2', unit: 'fontes', label: 'a nossa fábrica no BENIM e grandes fabricantes internacionais' },
    { value: '< 1', unit: 'mês', label: 'da nossa fábrica de Sèmè-Podji até ao doente' },
    { value: '5', unit: 'famílias', label: 'de produtos, num único fornecedor' },
  ],
  why: {
    eyebrow: 'Porquê juntar-se a nós',
    title: 'Porquê distribuir a TILAMED Pharma?',
    items: [
      { title: 'Um fornecedor local', text: 'Uma fábrica no BENIM, a poucas horas de estrada e não a semanas de mar: encomendas mais frequentes, menos stock imobilizado, menos ruturas.' },
      { title: 'Uma qualidade controlada', text: 'Cada lote é controlado pelo nosso laboratório e libertado pelo farmacêutico responsável, sob a supervisão da ABRP.' },
      { title: 'Uma gama completa', text: 'Soros, medicamentos injetáveis, soluções nutricionais, dispositivos médicos e produtos veterinários.' },
      { title: 'Acompanhamento', text: 'A documentação técnica e regulamentar dos nossos produtos, e apoio nas suas respostas a concursos.' },
    ],
  },
  partner: {
    eyebrow: 'Uma parceria',
    title: 'Compromissos de ambos os lados',
    giveTitle: 'O que lhe trazemos',
    give: [
      'Produtos fabricados no BENIM e produtos de grandes fabricantes internacionais, entregues a partir do nosso armazém.',
      'Uma documentação completa para cada produto: fichas técnicas e certificados de análise.',
      'Entregas planeadas segundo as suas necessidades reais.',
      'Um diálogo regular sobre as suas vendas, os seus stocks e as necessidades do seu mercado.',
    ],
  },
  steps: {
    eyebrow: 'Como funciona',
    title: 'Tornar-se distribuidor em quatro etapas',
    items: [
      { title: 'Candidatura', text: 'Preencha o formulário abaixo: a sua empresa, as suas autorizações, os seus circuitos.' },
      { title: 'Diálogo e avaliação', text: 'Estudamos o seu dossiê e depois falamos sobre o seu mercado, os seus clientes e a sua capacidade de armazenamento.' },
      { title: 'Acordo de distribuição', text: 'Um contrato fixa a zona, as gamas, os compromissos de cada parte e as condições comerciais.' },
      { title: 'Lançamento e acompanhamento', text: 'Primeiras encomendas e documentação, e depois um acompanhamento regular das vendas e dos stocks.' },
    ],
  },
  coverage: {
    eyebrow: 'Zona coberta',
    title: '15 países da África Ocidental',
    text: 'Procuramos parceiros em cada um dos 15 países da CEDEAO, tanto para os circuitos públicos como privados.',
  },
  contact: 'Prefere escrever-nos?',
  formLead: 'Bastam algumas informações sobre a sua empresa para começar: voltaremos a contactá-lo para conversar.',
};
export default distributeurs;
