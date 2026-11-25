import type { ClientsDict } from './fr';
const clients: ClientsDict = {
  meta: {
    title: '我们的客户 · 市场 · TILAMED Pharma',
    description: '公立采购中心、批发分销商、区域及国际组织、药店和诊所：TILAMED Pharma 在西非的客户。',
  },
  hero: {
    lead: '我们为贝宁及西非的公立和私营医疗机构供货。',
    cta1: '索取报价',
  },
  facts: [
    { value: '5', unit: '类', label: '公立与私营客户' },
    { value: '15', unit: '个国家', label: '服务西非 15 国' },
    { value: '3', unit: '种渠道', label: '直销、招标、经销商' },
    { value: '1', unit: '个窗口', label: '由销售部统一负责全部销售' },
  ],
  who: {
    eyebrow: '我们的服务对象',
    title: '谁在采购我们的产品',
    text: '从公共采购到药店柜台，我们的产品面向五类客户。针对每一类客户，我们都调整了合作方式。',
    items: [
      { title: '西非国家公立采购中心', examples: ['SOBAPS', 'CAMEG', 'ONPPC', 'SONIPHARM'], text: '完整响应其招标，并按实际消耗计划交货。' },
      { title: '国际私营批发分销商', examples: ['UBIPHARM', 'UBPHAR', 'GAPOB'], text: '区域内的供应商：订货更频繁，库存占用更少。' },
      { title: '区域组织', examples: ['西非卫生组织', 'Centre MURAZ', 'CIRDES'], text: '次区域卫生项目的本地合作伙伴。' },
      { title: '国际组织', examples: ['GIZ', 'AFD', '世卫组织'], text: '完整的质量档案，可向西非 15 国交货。' },
      { title: '私营药店和诊所', examples: ['遍及西非'], text: '通过我们的授权经销商，就近获得基本医疗产品。' },
    ],
    more: '了解更多',
  },
  how: {
    eyebrow: '我们的合作方式',
    title: '采购我们产品的三种方式',
    items: [
      { title: '直销', text: '面向公立和私营采购中心，按订单或计划交货。', for: '采购中心、大客户' },
      { title: '招标', text: '我们参与国内和国际招标及限制性询价，提供完整的技术与注册档案。', for: '卫生部、卫生组织' },
      { title: '经销商网络', text: '面向私营市场，我们的产品通过各国授权经销商销售。', for: '药店、诊所、批发商' },
    ],
    forLabel: '面向',
    central: '所有销售由我们的销售部统一管理，响应迅速。',
  },
  resources: {
    eyebrow: '采购方资料',
    title: '准备订单所需的一切',
    items: [
      { text: '按产品线列出的全部品种及规格。' },
      { text: '技术资料和检验报告，可按需提供。' },
      { text: '我们的各项许可，附编号和日期。' },
    ],
  },
  cta: {
    eyebrow: '销售部',
    title: '有采购需求或正在准备招标？',
    text: '请写信给我们的销售部，注明产品、数量和交货国家：我们会尽快回复。',
    imageAlt: '药店里的一位顾客和一位药剂师',
  },
};
export default clients;
