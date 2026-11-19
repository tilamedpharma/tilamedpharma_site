// Página «A nossa distribuição» · português.
import type { DistributionDict } from './fr';

const distribution: DistributionDict = {
  meta: {
    title: 'A nossa distribuição · Central de compras · TILAMED Pharma',
    description: 'Da nossa fábrica e dos nossos fornecedores até ao doente: um circuito curto, controlado e rastreável, no BENIM e em toda a África Ocidental.',
  },
  hero: {
    lead: 'Da nossa fábrica e dos nossos fornecedores até ao doente: um circuito curto, controlado e rastreável.',
    cta1: 'O nosso circuito',
  },
  facts: [
    { value: '< 1', unit: 'mês', label: 'da nossa fábrica de Sèmè-Podji até ao doente' },
    { value: '15', unit: 'países', label: 'da África Ocidental na nossa zona de distribuição' },
    { value: '2', unit: 'origens', label: 'o que fabricamos e o que compramos, num mesmo circuito' },
  ],
  flow: {
    eyebrow: 'O nosso circuito',
    title: 'Duas origens, um só circuito',
    intro: 'As soluções injetáveis fabricadas em Sèmè-Podji e os produtos comprados a grandes fabricantes seguem o mesmo caminho: controlo, armazenamento e entrega aos nossos clientes.',
    label: 'Esquema do circuito de distribuição',
    sources: [
      { title: 'Fabricado no BENIM', text: 'Soluções injetáveis produzidas, controladas e libertadas lote a lote em Sèmè-Podji.' },
      { title: 'Comprado a grandes fabricantes', text: 'Medicamentos, dispositivos médicos e produtos de laboratório, verificados à receção.' },
    ],
    hub: { title: 'O nosso armazém', text: 'Armazenamento controlado, seguimento por lote e por prazo de validade.' },
    dests: ['Centrais de compras públicas', 'Distribuidores e grossistas', 'Hospitais, clínicas e farmácias', 'Programas de saúde'],
    end: { title: 'Os doentes', text: 'Produtos de qualidade, disponíveis perto de casa.' },
  },
  steps: {
    eyebrow: 'Passo a passo',
    title: 'As etapas, uma a uma',
    imageAlt: 'Clientes a escolher um medicamento numa farmácia',
    items: [
      { title: 'A fábrica e os nossos fornecedores', text: 'Cada lote fabricado é controlado pelo nosso laboratório e libertado pelo farmacêutico responsável. Cada produto comprado é verificado à receção: documentos, rotulagem, estado das embalagens.' },
      { title: 'O nosso armazém', text: 'Os produtos são armazenados em condições controladas, com seguimento por lote e por prazo de validade: os primeiros a expirar são os primeiros a sair.' },
      { title: 'Centrais de compras e distribuidores', text: 'Entregamos às centrais de compras públicas, às organizações de saúde e aos nossos distribuidores autorizados no BENIM e na sub-região.' },
      { title: 'Hospitais, clínicas e farmácias', text: 'As unidades de saúde recebem produtos disponíveis mais depressa, em quantidade adaptada ao seu consumo real.' },
      { title: 'Os doentes', text: 'Produtos de saúde de qualidade, disponíveis perto de casa, a um preço acessível.' },
    ],
  },
  guarantees: {
    eyebrow: 'Os nossos compromissos',
    title: 'O que garantimos aos nossos clientes',
    items: [
      { title: 'Um armazenamento controlado', text: 'Condições de conservação respeitadas e rotação dos stocks segundo os prazos de validade.' },
      { title: 'A rastreabilidade', text: 'Cada expedição registada por cliente e por lote, e um procedimento de recolha articulado com as autoridades.' },
      { title: 'A disponibilidade', text: 'Stocks de reserva para fazer face às ruturas e à subida dos preços no mercado.' },
      { title: 'A proximidade', text: 'Uma fábrica no BENIM e um escritório regional em Uagadugu, perto dos nossos clientes da sub-região.' },
    ],
  },
  why: {
    eyebrow: 'Porque é importante',
    text: 'Quase metade da população africana não tem acesso regular aos medicamentos essenciais. Encurtar o circuito é aproximar os medicamentos dos doentes.',
  },
  cta: {
    eyebrow: 'Distribuição',
    title: 'Distribua os nossos produtos',
    text: 'Grossista, distribuidor ou central de compras: junte-se à nossa rede para tornar os nossos produtos disponíveis no seu país.',
  },
};
export default distribution;
