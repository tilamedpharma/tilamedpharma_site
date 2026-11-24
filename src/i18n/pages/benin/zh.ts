import type { BeninDict } from './fr';

const benin: BeninDict = {
  meta: {
    title: '为什么在贝宁生产？ · TILAMED Pharma',
    description: '贝宁的注射液全部依赖进口。本地生产可改善供应、可追溯性、价格与就业。',
  },
  hero: {
    lead: '贝宁目前的注射液全部依赖进口。本地生产将为患者带来改变。',
    cta: '现状',
  },
  facts: [
    { value: '100', unit: '%', label: '贝宁使用的注射液依赖进口' },
    { value: '0', unit: '', label: 'TILAMED 之前的本地注射液生产商' },
    { value: '15', unit: '个国家', label: '可从贝宁供应的西非国家' },
    { value: '4', unit: '亿以上', label: '西非人口' },
  ],
  problem: {
    eyebrow: '现状',
    title: '一种又重又贵的进口产品',
    text: '输液的主要成分是水，既重又占体积：运费按重量和体积计算，运输成本高，储存也占用大量空间。然而批发商必须常年保有数月库存，才能避免断货。',
    todayLabel: '今天 · 依赖进口',
    today: ['在国外生产', '按重量和体积计费的海运', '批发商保有数月库存', '医院与患者'],
    tomorrowLabel: '明天 · 贝宁制造',
    tomorrow: ['在塞梅-波吉生产', '按实际需求经公路配送', '医院与患者'],
  },
  benefits: {
    eyebrow: '优势',
    title: '本地生产带来的改变',
    items: [
      { title: '供应', text: '库存就在附近，按客户实际需求交付，无需等待数月。' },
      { title: '可追溯性', text: '短而可控的供应链，有助于打击假药。' },
      { title: '价格', text: '更少运费、更少库存、更少汇兑损失：价格更合理。' },
      { title: '就业', text: '高技能就业岗位及工业技术转让。' },
    ],
  },
  position: {
    eyebrow: '战略区位',
    title: '位于西非的中心',
    text: '我们的工厂落户塞梅-波吉，位于科托努与尼日利亚边境之间，便于供应整个区域。',
    corridor: '位于阿比让—拉各斯沿海走廊',
    port: '港口',
    border: '边境',
    items: [
      { title: '紧邻尼日利亚', text: '厂址毗邻非洲人口最多的国家。' },
      { title: '靠近科托努港', text: '国家的主要贸易门户，原料和设备均由此进入。' },
      { title: '辐射整个区域', text: '一座工厂即可供应 15 个国家、超过 4 亿人口。' },
    ],
  },
  env: {
    eyebrow: '政策框架',
    title: '有利的环境',
    items: [
      '发展本国制药工业的坚定政治意愿。',
      '投资法将卫生与工业加工列为优先领域。',
      '经济特区内的海关与税收优惠。',
      '在区域内外高校接受培训的年轻、高素质劳动力。',
    ],
  },
  covid: {
    eyebrow: '卫生主权',
    text: '新冠疫情表明，对进口的依赖会削弱卫生系统。本地生产，就是保障基本药物的可及性。',
  },
};
export default benin;
