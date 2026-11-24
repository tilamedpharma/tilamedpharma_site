import type { ProduitsDict } from './fr';

const produits: ProduitsDict = {
  ui: { seeRange: 'Ver a gama', docCta: 'Pedir a documentação', contactCta: 'Contactar a nossa direção comercial', inThisRange: 'Nesta gama', categories: 'categorias' },
  catalogue: {
    meta: { title: 'Catálogo de produtos · TILAMED Pharma', description: 'Soros, medicamentos injetáveis e orais, soluções nutricionais, dispositivos médicos e saúde animal: o catálogo da TILAMED Pharma.' },
    lead: 'Pesquise as nossas soluções injetáveis, os nossos futuros produtos líquidos e os dispositivos médicos que distribuímos.',
    familiesTitle: 'Cinco gamas',
    searchTitle: 'Todo o catálogo',
    searchIntro: 'Filtre por gama ou pesquise por nome, uso ou categoria.',
  },
  families: {
    serums: { meta: { title: 'Soros · Produtos · TILAMED Pharma', description: 'Cloreto de sódio, glicose, Ringer lactato, bicarbonato, manitol: os soros de perfusão fabricados em Sèmè-Podji.' }, lead: 'A nossa primeira gama, fabricada em Sèmè-Podji: soros de perfusão em frascos de plástico formados, cheios e selados no local.' },
    medicaments: { meta: { title: 'Medicamentos · Produtos · TILAMED Pharma', description: 'Injetáveis em ampolas, soluções medicamentosas, antibióticos injetáveis, vacinas e soros, soluções orais.' }, lead: 'Injetáveis em ampolas, antibióticos, vacinas e soros, soluções orais: uma gama implementada em três fases de produção.' },
    'solutions-nutritionnelles': { meta: { title: 'Soluções nutricionais · Produtos · TILAMED Pharma', description: 'Glicose concentrada e vitaminas injetáveis ou orais para o aporte calórico e a correção de carências.' }, lead: 'Glicose concentrada e vitaminas, injetáveis ou orais, para o aporte calórico e a correção de carências.' },
    'dispositifs-medicaux': { meta: { title: 'Dispositivos médicos · Produtos · TILAMED Pharma', description: 'Diagnóstico, instrumentos cirúrgicos, esterilização e equipamento: os dispositivos médicos distribuídos pela TILAMED Pharma.' }, lead: 'Diagnóstico, instrumentos cirúrgicos, esterilização e equipamento: os dispositivos médicos que distribuímos.' },
    'sante-animale': { meta: { title: 'Saúde animal · Produtos · TILAMED Pharma', description: 'Alimentação, antiparasitários, cuidados e medicamentos para cães e gatos, distribuídos pela nossa central de compras.' }, lead: 'Alimentação, antiparasitários, cuidados e medicamentos para cães e gatos.' },
  },
  formats: {
    title: 'Frascos adaptados a cada uso',
    intro: 'Frascos de plástico leves e inquebráveis, fabricados por sopro-enchimento-selagem.',
    items: [
      { value: '100', label: 'Antibióticos, analgésicos, diluições' },
      { value: '250', label: 'Soluções de base, pediatria' },
      { value: '500', label: 'O formato mais utilizado no hospital' },
      { value: '1000', label: 'Reidratação, reposição de volume' },
    ],
    cards: [
      { title: 'Inquebrável', text: 'O frasco de plástico resiste aos choques do transporte e do armazenamento.' },
      { title: 'Leve', text: 'Mais leve do que o vidro: transporte e manuseamento facilitados.' },
      { title: 'Sistema fechado', text: 'O frasco esvazia-se sem entrada de ar, o que limita os riscos de contaminação.' },
    ],
    note: 'Cada caixa contém o folheto e está rotulada para garantir a rastreabilidade do lote.',
  },
  phases: { title: 'Uma gama implementada em três fases', intro: 'Os medicamentos entram em produção à medida que as linhas abrem e as autorizações regulamentares são concedidas.' },
  devices: {
    text: 'Com uma longa experiência no fornecimento, instalação e manutenção de equipamentos médicos na África Ocidental, a TILAMED Pharma distribui uma gama de dispositivos médicos de fabricantes internacionais reconhecidos, com marcação CE.',
    cta: 'Para um orçamento, uma lista de referências ou um concurso, contacte a nossa direção comercial.',
  },
  vet: { text: 'Produtos veterinários selecionados e distribuídos pela nossa central de compras. Estarão disponíveis brevemente.', cta: 'Ser informado do lançamento' },
  doc: {
    meta: { title: 'Pedido de documentação · TILAMED Pharma', description: 'Profissionais de saúde e compradores: peçam as informações técnicas dos produtos TILAMED Pharma.' },
    lead: 'Profissionais de saúde e compradores: peçam as informações técnicas dos nossos produtos.',
    intro: 'Indique os produtos que lhe interessam. A nossa equipa enviar-lhe-á as informações disponíveis assim que forem publicadas.',
    formTitle: 'O seu pedido',
    fields: {
      name: 'Nome completo', org: 'Organização', profile: 'É', country: 'País', email: 'Endereço de e-mail', phone: 'Telefone',
      ranges: 'Gamas que lhe interessam', products: 'Produtos específicos (opcional)', productsHint: 'Ex.: cloreto de sódio 0,9 % 500 ml, ceftriaxona 1 g…',
      message: 'A sua mensagem', consent: 'Aceito que a TILAMED Pharma utilize estas informações para responder ao meu pedido.', submit: 'Enviar o pedido',
      required: 'Campo obrigatório', select: 'Escolher…',
    },
    profiles: ['Central de compras', 'Hospital ou clínica', 'Farmácia', 'Grossista ou distribuidor', 'Organização de saúde', 'Outro'],
    asideTitle: 'O que vai receber',
    asideItems: ['Fichas técnicas e composições assim que publicadas', 'Formatos e acondicionamentos previstos', 'Calendário de disponibilização', 'Contacto da nossa direção comercial'],
    direct: 'Prefere escrever-nos diretamente?',
  },
};
export default produits;
