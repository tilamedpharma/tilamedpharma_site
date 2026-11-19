import type { AchatsCarrieresDict } from './fr';

const d: AchatsCarrieresDict = {
  pages: {
    carrieres: {
      meta: { title: 'Trabalhar na TILAMED · Carreiras · TILAMED Pharma', description: '150 empregos diretos, 70 % de postos técnicos e 5 anos de transferência de competências: junte-se à primeira indústria de soluções injetáveis do BENIM.' },
      lead: 'Junte-se à primeira indústria de soluções injetáveis do BENIM.',
      intro: '',
      facts: [
        { value: '150', unit: '', label: 'empregos diretos' },
        { value: '70', unit: '%', label: 'de postos técnicos' },
        { value: '30', unit: '%', label: 'de postos administrativos' },
        { value: '5', unit: 'anos', label: 'de transferência de competências' },
      ],
      blocks: [
        { kind: 'prose', title: 'Uma equipa em construção', items: [
          'Estamos a construir uma equipa de profissionais qualificados, formados no fabrico industrial e empenhados na qualidade.',
          'O BENIM dispõe de uma mão de obra jovem, dinâmica e qualificada: recrutamos e formamos prioritariamente no país.',
        ] },
        { kind: 'points', title: 'Um empregador aberto a todas e a todos', items: [
          'Processos de recrutamento abertos e equitativos, baseados apenas nas competências.',
          'Postos abertos a pessoas com deficiência.',
          'Uma partilha equitativa das responsabilidades entre mulheres e homens, a todos os níveis.',
          'Uma formação acessível a todas e a todos, com cinco anos de acompanhamento pelos fabricantes dos equipamentos.',
        ] },
      ],
      note: 'Não há ofertas de emprego publicadas de momento. Pode enviar uma candidatura espontânea.',
    },
    metiers: {
      meta: { title: 'As nossas profissões · Carreiras · TILAMED Pharma', description: 'Produção, garantia de qualidade, laboratório, manutenção, logística, funções de suporte: as profissões de uma fábrica farmacêutica.' },
      lead: 'Produção, qualidade, manutenção, logística, funções de suporte: descubra as profissões de uma fábrica farmacêutica.',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'cards', title: 'Seis famílias de profissões', items: [
          { title: 'Produção', text: 'Operadores de linha, condutores de máquinas, chefes de equipa.' },
          { title: 'Garantia de qualidade', text: 'Farmacêuticos, responsáveis de qualidade, especialistas em validação.' },
          { title: 'Laboratório', text: 'Analistas em físico-química e em microbiologia.' },
          { title: 'Manutenção e utilidades', text: 'Técnicos de mecânica, eletricidade, automação e frio.' },
          { title: 'Logística', text: 'Fiéis de armazém, gestores de stocks, motoristas de entrega.' },
          { title: 'Funções de suporte', text: 'Finanças, recursos humanos, compras, vendas, informática.' },
        ] },
        { kind: 'points', title: 'A equipa de direção', items: [
          'Diretor-geral',
          'Farmacêutico responsável',
          'Diretor administrativo, financeiro e de recursos humanos',
          'Diretor comercial e de marketing, com delegados de informação médica',
          'Responsável de compras',
          'Chefe de contabilidade',
        ] },
      ],
      note: '',
    },
  },
  cand: {
    meta: { title: 'Candidatura espontânea · Carreiras · TILAMED Pharma', description: 'Apresente-se: a TILAMED Pharma analisará o seu perfil assim que abrir os recrutamentos.' },
    lead: 'Apresente-se: analisaremos o seu perfil assim que abrirmos os recrutamentos.',
    intro: 'Analisamos cada candidatura apenas com base nas competências. As candidaturas estão abertas a todas e a todos.',
    formTitle: 'A sua candidatura',
    fields: {
      name: 'Nome completo', email: 'Endereço de e-mail', phone: 'Telefone', country: 'País de residência',
      family: 'Profissão pretendida', level: 'Nível de estudos', experience: 'Anos de experiência',
      cv: 'O seu CV', cvHint: 'PDF ou Word, 5 MB no máximo.', message: 'A sua motivação',
      consent: 'Aceito que a TILAMED Pharma conserve estas informações para analisar a minha candidatura.',
      submit: 'Enviar a minha candidatura', required: 'Campo obrigatório', select: 'Escolher…',
    },
    families: ['Produção', 'Garantia de qualidade', 'Laboratório', 'Manutenção e utilidades', 'Logística', 'Funções de suporte', 'Outro'],
    levels: ['Ensino básico ou formação profissional', 'Ensino secundário', 'Curso técnico superior', 'Licenciatura', 'Mestrado ou engenharia', 'Doutoramento ou mestrado integrado em farmácia'],
    experience: ['Menos de um ano', '1 a 3 anos', '3 a 5 anos', '5 a 10 anos', 'Mais de 10 anos'],
    asideTitle: 'Bom saber',
    asideItems: ['Não há ofertas publicadas de momento', 'O seu perfil será analisado quando os recrutamentos abrirem', 'Postos técnicos e administrativos', 'Formação assegurada pelos fabricantes dos equipamentos'],
  },
};
export default d;
