import type { PresenceDict } from './fr';
const presence: PresenceDict = {
  meta: {
    title: 'Presença regional · Mercados · TILAMED Pharma',
    description: 'Uma fábrica no BENIM, os 15 países da CEDEAO cobertos e escritórios no BENIM, no BURKINA FASO e em FRANÇA.',
  },
  hero: {
    lead: 'Uma fábrica no BENIM, 15 países da África Ocidental cobertos e uma presença internacional.',
  },
  facts: [
    { value: '15', unit: 'países', label: 'do espaço CEDEAO cobertos' },
    { value: '400', unit: 'M +', label: 'de habitantes na África Ocidental' },
    { value: '1', unit: 'fábrica', label: 'em Sèmè-Podji, na fronteira com a NIGÉRIA' },
    { value: '3', unit: 'escritórios', label: 'no BENIM, no BURKINA FASO e em FRANÇA' },
  ],
  map: {
    legend: 'A partir da fábrica de Sèmè-Podji, as nossas rotas de abastecimento servirão as capitais da sub-região.',
  },
  sites: {
    eyebrow: 'As nossas instalações',
    title: 'Uma fábrica, três escritórios',
    more: 'Moradas e telefones',
  },
  why: {
    eyebrow: 'Porquê toda a sub-região',
    title: 'Quinze países, desafios de saúde comuns',
    text: 'Não visamos apenas o BENIM: a sub-região partilha necessidades próximas, e uma fábrica regional pode responder-lhes.',
    items: [
      { title: 'Doenças semelhantes', text: 'As mesmas necessidades de soros, anti-infecciosos e cuidados essenciais, de um país para outro.' },
      { title: 'Populações jovens', text: 'Mais de 400 milhões de habitantes, em forte crescimento: necessidades de saúde que aumentam todos os anos.' },
      { title: 'A mesma dependência', text: 'Medicamentos quase todos importados, à custa de prazos longos e ruturas frequentes.' },
    ],
  },
  gallery: {
    title: 'Uma região, quinze mercados',
    captions: ['Lagos · NIGÉRIA', 'Abidjan · COSTA DO MARFIM', 'Acra · GANA', 'Dacar · SENEGAL', 'Cotonu · BENIM', 'Porto de Tema · GANA'],
  },
  serve: {
    eyebrow: 'Como servimos cada país',
    title: 'Diretamente ou com os nossos distribuidores',
    direct: { title: 'Diretamente', text: 'Para as centrais de compras públicas e as organizações regionais e internacionais.' },
    partners: { title: 'Com os nossos distribuidores', text: 'Para os grossistas, as farmácias e as clínicas privadas, com um distribuidor autorizado em cada país.' },
  },
  cta: {
    eyebrow: 'Distribuidores',
    title: 'É grossista num destes 15 países?',
    text: 'Junte-se à nossa rede de distribuidores autorizados.',
  },
};
export default presence;
