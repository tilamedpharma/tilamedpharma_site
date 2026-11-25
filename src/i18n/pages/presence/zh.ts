import type { PresenceDict } from './fr';
const presence: PresenceDict = {
  meta: {
    title: '区域布局 · 市场 · TILAMED Pharma',
    description: '工厂位于贝宁，覆盖西非 15 国，并在贝宁、布基纳法索和法国设有办事处。',
  },
  hero: {
    lead: '工厂位于贝宁，覆盖 15 个西非国家，并具有国际布局。',
  },
  facts: [
    { value: '15', unit: '个国家', label: '覆盖西非 15 国' },
    { value: '4', unit: '亿以上', label: '西非人口' },
    { value: '1', unit: '座工厂', label: '位于 Sèmè-Podji，毗邻尼日利亚边境' },
    { value: '3', unit: '个办事处', label: '位于贝宁、布基纳法索和法国' },
  ],
  map: {
    legend: '从 Sèmè-Podji 工厂出发，我们的供应路线将通达次区域各国首都。',
  },
  sites: {
    eyebrow: '我们的布局',
    title: '一座工厂，三个办事处',
    more: '地址和电话',
  },
  why: {
    eyebrow: '为何覆盖整个次区域',
    title: '十五个国家，共同的卫生挑战',
    text: '我们的目标不只是贝宁：次区域各国需求相近，一座区域性工厂可以满足这些需求。',
    items: [
      { title: '相似的疾病', text: '各国对输液、抗感染药物和基本医疗的需求相同。' },
      { title: '年轻的人口', text: '人口超过 4 亿且快速增长：卫生需求逐年上升。' },
      { title: '同样的依赖', text: '药品几乎全部依赖进口，交货期长，断货频繁。' },
    ],
  },
  gallery: {
    title: '一个区域，十五个市场',
    captions: ['拉各斯 · 尼日利亚', '阿比让 · 科特迪瓦', '阿克拉 · 加纳', '达喀尔 · 塞内加尔', '科托努 · 贝宁', '特马港 · 加纳'],
  },
  serve: {
    eyebrow: '我们如何服务各国',
    title: '直接供货或通过经销商',
    direct: { title: '直接供货', text: '面向公立采购中心以及区域和国际组织。' },
    partners: { title: '通过经销商', text: '面向批发商、药店和私营诊所，每个国家都有授权经销商。' },
  },
  cta: {
    eyebrow: '经销商',
    title: '您是这 15 个国家中的批发商吗？',
    text: '欢迎加入我们的授权经销商网络。',
  },
};
export default presence;
