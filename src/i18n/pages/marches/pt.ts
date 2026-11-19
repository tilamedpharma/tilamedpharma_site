import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {},
  distrib: {
    meta: { title: 'Tornar-se distribuidor · Mercados · TILAMED Pharma', description: 'Grossistas e distribuidores farmacêuticos da África Ocidental: junte-se à rede de distribuidores autorizados da TILAMED Pharma.' },
    lead: 'É grossista ou distribuidor farmacêutico na África Ocidental? Falemos.',
    intro: 'Estamos a desenvolver uma rede de distribuidores autorizados para disponibilizar os nossos produtos em toda a sub-região.',
    reqTitle: 'O que procuramos',
    reqs: [
      'Ser titular das autorizações de distribuição farmacêutica do seu país.',
      'Dispor de um armazém conforme às boas práticas de distribuição.',
      'Conhecer os circuitos de distribuição públicos e privados do seu mercado.',
    ],
    formTitle: 'A sua candidatura',
    fields: {
      company: 'Denominação social', country: 'País', name: 'Nome do contacto', role: 'Função', email: 'Endereço de e-mail', phone: 'Telefone',
      licence: 'Autorização de distribuição farmacêutica', warehouse: 'Armazém conforme às BPD', yes: 'Sim', no: 'Não', pending: 'Em curso',
      channels: 'Circuitos cobertos', ranges: 'Gamas que lhe interessam', message: 'Apresente a sua empresa',
      messageHint: 'Zonas cobertas, clientes, volumes, equipa…', consent: 'Aceito que a TILAMED Pharma utilize estas informações para analisar a minha candidatura.',
      submit: 'Enviar a minha candidatura', required: 'Campo obrigatório', select: 'Escolher…',
    },
    channels: ['Centrais de compras públicas', 'Hospitais e clínicas', 'Farmácias', 'Organizações de saúde', 'Exportação sub-regional'],
  },
};
export default marches;
