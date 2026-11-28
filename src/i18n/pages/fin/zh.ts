import type { FinDict } from './fr';

const fin: FinDict = {
  news: {
    meta: { title: '新闻 · TILAMED Pharma', description: 'TILAMED Pharma 最新动态：塞梅-波吉厂址、各项批准、工厂许可。' },
    lead: 'TILAMED Pharma 最新动态。',
    bodies: [
      [
        '贝宁政府以长期租赁方式，将塞梅-波吉一块 2 公顷的工业用地交由 TILAMED PHARMA SA 使用，该地紧邻与尼日利亚交界的克拉凯口岸。',
        '该厂址位于塞梅-波吉工业区，靠近科托努及其自治港，将建设 TILAMED Pharma 注射液工厂。',
      ],
      [
        '2024 年 11 月 28 日，贝宁共和国政府颁发的部长令补齐了公司年内获得的各项批准。',
        '2024 年，TILAMED PHARMA SA 还获得了工业许可（9 月 9 日）、环境与社会合规证书（8 月 7 日）以及 APIEX 颁发的技术可行性证书（10 月 28 日）。',
      ],
      [
        '2023 年 6 月 30 日，贝宁药品监管局与卫生部颁发工厂建设与运营许可（编号 1138 ABRP/DHE/DAE/SA）。',
        '该许可使 TILAMED PHARMA SA 得以继续在塞梅-波吉筹建生产工厂。',
      ],
    ],
    extra: [
      {
        date: '2023-05-16', tag: '法规',
        title: 'ABRP 对 TILAMED Pharma 工厂出具积极意见',
        body: [
          '2023 年 5 月 16 日，贝宁药品监管局（ABRP）委员会会议对 TILAMED Pharma 开办和运营制药工厂的许可出具积极意见。',
          '这一重要的监管进展使 TILAMED Pharma 得以继续在塞梅-波吉筹建注射液生产工厂。',
        ],
      },
    ],
    pressCta: '媒体：新闻中心',
  },
  media: {
    meta: { title: '媒体库 · TILAMED Pharma', description: 'TILAMED Pharma 图片：工厂参观、团队、国际展会，以及生产流程示意图片。' },
    lead: 'TILAMED Pharma 图片与视频。',
    photosTitle: '我们的图片',
    photosIntro: '参观、团队与国际展会。更多厂区图片和视频将陆续在此发布。',
    captions: [
      '输液袋',
      '药师与输液袋',
      '洁净室中的团队',
      '包装岗位的团队',
      '参观输液工厂',
      '工厂参观中的交流',
      '药品包装展会上的会面',
      '国际展会',
      '迪拜阿拉伯医疗展',
      '2021 年 MEDICA 展会',
    ],
    videosTitle: '生产流程视频',
    videosIntro: '七个生产步骤的示意影像。',
    close: '关闭',
    prev: '上一张',
    next: '下一张',
  },
  press: {
    meta: { title: '新闻中心 · TILAMED Pharma', description: '媒体：TILAMED Pharma 关键信息与媒体联络。' },
    lead: '媒体：关键信息与媒体联络。',
    briefTitle: 'TILAMED Pharma 概况',
    brief: [
      '股份有限公司，注册资本 10 亿西非法郎，总部设在贝宁科托努。',
      '位于塞梅-波吉、按世卫组织标准建设的液体药品生产工厂。',
      '计划产能：每年 1500 万大容量注射液和 3500 万小容量注射剂。',
      '计划创造 150 个直接就业岗位，其中 70% 为技术岗位。',
      'EDGE 绿色建筑认证申请中。',
      '口号：“Plus près, plus sûr pour votre santé”（更近，更安全，守护您的健康）。',
    ],
    contactTitle: '媒体联络',
    contactText: '来信请注明您所在的媒体及需求内容。',
    note: '官方标志及高清图片可应要求提供。',
    newsCta: '全部新闻',
  },
  contact: {
    meta: { title: '联系我们 · TILAMED Pharma', description: '有问题、有项目或有招标？请致信 TILAMED Pharma 团队，或致电我们在贝宁、布基纳法索和法国的办事处。' },
    lead: '有问题、有项目或有招标？我们的团队为您解答。',
    formTitle: '给我们留言',
    intro: '请选择留言主题：我们将直接转给对应的负责人。',
    fields: {
      subject: '主题', name: '姓名', org: '机构', email: '电子邮箱', phone: '电话', country: '国家',
      message: '留言内容', consent: '我同意 TILAMED Pharma 使用上述信息回复我的需求。',
      submit: '发送留言', required: '必填项', select: '请选择…',
    },
    subjects: ['询价', '订购或招标', '成为经销商', '产品资料', '媒体', '求职', '供应商', '参观厂址或合作', '其他'],
    /** Message pré-rempli depuis une fiche produit (/contact/?objet=cotation&produit=…). */
    prefill: { product: '产品', qty: '所需数量', country: '交货国家', docs: '所需资料' },
    directTitle: '直接联系我们',
    whatsapp: '通过 WhatsApp 联系',
    officesTitle: '我们的办事处',
  },
  offices: {
    meta: { title: '我们的办事处 · TILAMED Pharma', description: '在贝宁、布基纳法索和法国设有三个办事处，以及前往塞梅-波吉工厂的路线。' },
    lead: '三个办事处为您服务，分别位于贝宁、布基纳法索和法国。',
    title: '三个办事处，一座工厂',
    call: '致电',
    plantTitle: '塞梅-波吉工厂',
    plantText: '从尼日利亚方向过克拉凯口岸即到，距科托努仅数公里。',
  },
  faq: {
    meta: { title: '常见问题 · TILAMED Pharma', description: '产品供应、工厂、标准、交付、经销、招聘、药物警戒：为您解答常见问题。' },
    lead: '为您解答最常见的问题。',
    title: '您的问题，我们的解答',
    items: [
      { q: '你们的产品已经上市了吗？', a: '尚未上市。我们的产品线正在筹备中。您可以在“资料索取”页面登记，产品上市后我们将第一时间通知您。', link: 'documentation' },
      { q: '你们的工厂在哪里？', a: '位于贝宁南部的塞梅-波吉，从尼日利亚方向过克拉凯口岸即到，占地 2 公顷。', link: 'site-seme-podji' },
      { q: '你们将生产哪些产品？', a: '输液（氯化钠、葡萄糖、乳酸林格等）、含药溶液（对乙酰氨基酚、甲硝唑、左氧氟沙星、环丙沙星）和安瓿注射剂，并随审批进展推出其他产品线。', link: 'produits' },
      { q: '你们的产品符合国际标准吗？', a: '我们的目标是获得 ISO 9001 和 ISO 14001 认证，EDGE 绿色建筑认证正在申请中。', link: 'certifications' },
      { q: '你们向贝宁以外的地区供货吗？', a: '是的。我们覆盖 15 个西非国家，同时以贝宁市场为优先。', link: 'presence' },
      { q: '如何成为经销商？', a: '请填写“成为经销商”页面的表格，我们的商务部会与您联系。', link: 'distributeurs' },
      { q: '你们在招聘吗？', a: '目前暂无公开招聘职位，但您可以提交自荐申请。', link: 'candidature' },
      { q: '如何报告不良反应？', a: '请使用“药物警戒”页面的表格。如遇紧急情况，请立即联系医生。', link: 'pharmacovigilance' },
    ],
    more: '了解更多',
    still: '没有找到答案？',
  },
  legal: {
    mentions: {
      meta: { title: '法律声明 · TILAMED Pharma', description: 'TILAMED Pharma 网站的发布者、托管、知识产权与医疗信息说明。' },
      lead: '关于网站发布者和托管的信息。',
      rows: {
        editor: '发布者', capital: 'TILAMED PHARMA SA，股份有限公司，注册资本 10 亿西非法郎',
        hq: '总部', rccm: '商业注册号（RCCM）', ifu: '税号（IFU）', phone: '电话', email: '电子邮箱',
        director: '出版负责人', directorValue: 'TILAMED PHARMA SA 总经理',
        host: '托管服务商',
      },
      sections: [
        { title: '知识产权', text: ['TILAMED Pharma 名称、标志及本网站全部内容均为 TILAMED PHARMA SA 所有。未经书面许可，禁止任何形式的复制。'] },
        { title: '医疗信息', text: ['产品信息面向医疗专业人员，不能替代医生或药师的意见。'] },
        { title: '图片版权', text: ['示意照片来自 Pexels 图库，依其许可使用。生产流程视频为示意影像。媒体库中的照片归 TILAMED PHARMA SA 所有。'] },
      ],
    },
    privacy: {
      meta: { title: '隐私政策 · TILAMED Pharma', description: 'TILAMED Pharma 如何处理您通过网站表单提交的数据。' },
      lead: '我们如何处理您提交的数据。',
      sections: [
        { title: '收集的数据', text: ['我们只收集您在表单中填写的数据：联系、资料索取、经销商申请、自荐求职（含简历）、药物警戒报告及新闻订阅。', '包括您的姓名、机构、联系方式、留言以及每项需求的具体信息。'] },
        { title: '用途', text: ['这些数据仅用于处理您的需求，不会出售或转让给第三方。', '药物警戒报告由我们的质量受权药师保密处理，在法规要求时可能转交卫生主管部门。'] },
        { title: '表单托管', text: ['网站表单在我们由 Hostinger 托管的服务器上处理，随后通过我们的邮件服务（OVH）以电子邮件形式转交我们的团队。表单内容不会保存在服务器上。'] },
        { title: '保存期限', text: ['商务咨询最长保存至最后一次联系后三年；求职申请最长保存两年。药物警戒报告按法规要求的期限保存。'] },
        { title: '您的权利', text: ['根据贝宁共和国《数字法典》，您享有访问、更正和删除个人数据的权利。请致信 contact@tilamedpharma.com。您也可以向个人数据保护局（APDP）提出申诉。'] },
      ],
    },
    cookies: {
      meta: { title: 'Cookie 政策 · TILAMED Pharma', description: 'TILAMED Pharma 网站不使用广告 Cookie 或跟踪工具。' },
      lead: '本网站不使用广告或跟踪 Cookie。',
      sections: [
        { title: '无任何跟踪', text: ['本网站不设置任何广告 Cookie，也不使用流量统计工具。语言通过页面地址选择，不会在您的浏览器中保存任何用于跟踪的信息。', '字体和图片均与网站一同托管：访问期间不会向第三方服务传输任何数据。'] },
        { title: '外部链接', text: ['指向 Google 地图或社交网络的链接会打开相应网站，这些网站适用其各自的 Cookie 政策。'] },
        { title: '更新', text: ['如今后增加流量统计，本页将相应更新，并征求您的同意。'] },
      ],
    },
    sitemap: {
      meta: { title: '网站地图 · TILAMED Pharma', description: 'TILAMED Pharma 网站全部页面。' },
      lead: 'TILAMED Pharma 网站全部页面。',
      legalTitle: '法律信息',
    },
  },
};
export default fin;
