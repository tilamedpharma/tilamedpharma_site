// Ajoute les textes du nouveau bas de page (proposition C · Portail B2B) aux 7 dictionnaires.
import fs from 'node:fs';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const P = {
  fr: { help: 'Comment pouvons-nous vous aider ?', aud: [['Centrales d\'achat', 'Appels d\'offres, cotations et documentation technique.', 'Demander une cotation'], ['Distributeurs', 'Rejoignez notre réseau dans 15 pays d\'Afrique de l\'Ouest.', 'Devenir distributeur'], ['Candidats', '150 emplois au démarrage, ouverts à toutes et à tous.', 'Postuler'], ['Presse', 'Informations clés, visuels et contact presse.', 'Espace presse']], nl: ['Recevez les actualités du projet', 'Agréments, avancement de l\'usine, lancements de produits.', 'Votre adresse e-mail', 'S\'inscrire'], plant: ['Usine · Sèmè-Podji', 'Frontière du Nigeria (Kraké)', 'Itinéraire'], top: 'Haut de page' },
  en: { help: 'How can we help you?', aud: [['Purchasing centres', 'Tenders, quotations and technical documentation.', 'Request a quotation'], ['Distributors', 'Join our network in 15 West African countries.', 'Become a distributor'], ['Candidates', '150 jobs at start-up, open to everyone.', 'Apply'], ['Press', 'Key facts, visuals and press contact.', 'Press area']], nl: ['Get the project news', 'Approvals, plant progress, product launches.', 'Your email address', 'Subscribe'], plant: ['Plant · Sèmè-Podji', 'Nigerian border (Kraké)', 'Directions'], top: 'Back to top' },
  es: { help: '¿Cómo podemos ayudarle?', aud: [['Centrales de compras', 'Licitaciones, cotizaciones y documentación técnica.', 'Solicitar una cotización'], ['Distribuidores', 'Únase a nuestra red en 15 países de África Occidental.', 'Ser distribuidor'], ['Candidatos', '150 empleos al arranque, abiertos a todas y todos.', 'Postularse'], ['Prensa', 'Información clave, imágenes y contacto de prensa.', 'Sala de prensa']], nl: ['Reciba las novedades del proyecto', 'Autorizaciones, avance de la planta, lanzamientos de productos.', 'Su correo electrónico', 'Suscribirse'], plant: ['Planta · Sèmè-Podji', 'Frontera con Nigeria (Kraké)', 'Cómo llegar'], top: 'Volver arriba' },
  pt: { help: 'Como podemos ajudar?', aud: [['Centrais de compras', 'Concursos, cotações e documentação técnica.', 'Pedir uma cotação'], ['Distribuidores', 'Junte-se à nossa rede em 15 países da África Ocidental.', 'Tornar-se distribuidor'], ['Candidatos', '150 empregos no arranque, abertos a todas e a todos.', 'Candidatar-se'], ['Imprensa', 'Informações-chave, imagens e contacto de imprensa.', 'Espaço de imprensa']], nl: ['Receba as novidades do projeto', 'Autorizações, avanço da fábrica, lançamentos de produtos.', 'O seu e-mail', 'Subscrever'], plant: ['Fábrica · Sèmè-Podji', 'Fronteira com a Nigéria (Kraké)', 'Itinerário'], top: 'Voltar ao topo' },
  it: { help: 'Come possiamo aiutarvi?', aud: [['Centrali d\'acquisto', 'Gare d\'appalto, preventivi e documentazione tecnica.', 'Richiedi un preventivo'], ['Distributori', 'Entrate nella nostra rete in 15 paesi dell\'Africa occidentale.', 'Diventa distributore'], ['Candidati', '150 posti di lavoro all\'avvio, aperti a tutte e a tutti.', 'Candidati ora'], ['Stampa', 'Informazioni chiave, immagini e contatto stampa.', 'Area stampa']], nl: ['Ricevi le notizie del progetto', 'Autorizzazioni, avanzamento dello stabilimento, lanci di prodotti.', 'Il tuo indirizzo e-mail', 'Iscriviti'], plant: ['Stabilimento · Sèmè-Podji', 'Confine con la Nigeria (Kraké)', 'Indicazioni'], top: 'Torna su' },
  zh: { help: '我们能为您做些什么？', aud: [['采购中心', '招标、报价与技术资料。', '申请报价'], ['经销商', '加入我们覆盖西非 15 个国家的网络。', '成为经销商'], ['求职者', '投产即提供 150 个岗位，向所有人开放。', '立即申请'], ['媒体', '核心信息、图片资料与媒体联系方式。', '新闻中心']], nl: ['订阅项目动态', '许可审批、工厂进展、产品上市。', '您的电子邮箱', '订阅'], plant: ['工厂 · 塞梅-波吉', '尼日利亚边境（克拉凯）', '路线'], top: '返回顶部' },
  ar: { help: 'كيف يمكننا مساعدتكم؟', aud: [['مراكز الشراء', 'المناقصات وعروض الأسعار والوثائق الفنية.', 'طلب عرض سعر'], ['الموزعون', 'انضموا إلى شبكتنا في 15 دولة في غرب أفريقيا.', 'كن موزعًا'], ['المرشحون', '150 وظيفة عند بدء التشغيل، مفتوحة للجميع.', 'قدّم طلبك'], ['الصحافة', 'معلومات أساسية وصور وجهة اتصال صحفية.', 'المركز الصحفي']], nl: ['تابعوا أخبار المشروع', 'التراخيص وتقدّم المصنع وإطلاق المنتجات.', 'بريدكم الإلكتروني', 'اشترك'], plant: ['المصنع · سيمي-بودجي', 'الحدود مع نيجيريا (كراكي)', 'الاتجاهات'], top: 'العودة إلى الأعلى' },
};
for (const [lang, p] of Object.entries(P)) {
  const file = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(file, 'utf8');
  if (s.includes('    portal: {')) { console.log(lang, 'déjà fait'); continue; }
  const block = `    portal: {
      help: ${q(p.help)},
      audiences: [
${p.aud.map(([t, d, a]) => `        { title: ${q(t)}, text: ${q(d)}, action: ${q(a)} },`).join('\n')}
      ],
      newsletter: { title: ${q(p.nl[0])}, text: ${q(p.nl[1])}, placeholder: ${q(p.nl[2])}, button: ${q(p.nl[3])} },
      plant: { title: ${q(p.plant[0])}, place: ${q(p.plant[1])}, directions: ${q(p.plant[2])} },
      backToTop: ${q(p.top)},
    },
`;
  const anchor = '    officeNames: {';
  const at = s.indexOf(anchor, s.indexOf('  footer: {'));
  if (at < 0) throw new Error(lang + ' : ancre introuvable');
  s = s.slice(0, at) + block + s.slice(at);
  fs.writeFileSync(file, s);
  console.log(lang, 'OK');
}
