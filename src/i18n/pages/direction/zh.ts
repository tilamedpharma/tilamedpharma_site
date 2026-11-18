import type { DirectionDict } from './fr';

const direction: DirectionDict = {
  meta: {
    title: '管理团队 · TILAMED Pharma',
    description: '一支熟悉西非医疗一线的管理团队：总经理、股东以及制药企业的组织架构。',
  },
  hero: {
    lead: '一支熟悉西非医疗一线的管理团队。',
    ctaDg: '总经理',
    ctaOrg: '组织架构',
  },
  facts: [
    { value: '13', unit: '年以上', label: '股东在医疗行业的从业经验' },
    { value: '15', unit: '个国家', label: '这些经验积累于西非 15 个国家' },
    { value: '2013', unit: '', label: 'SEDIS SARL 成立，2023 年更名为 TILAMED PHARMA SA' },
  ],
  dg: {
    eyebrow: '总经理',
    name: 'Casime LASSISSI',
    role: '总经理',
    bio: [
      'Casime LASSISSI 是 TILAMED Pharma 项目的发起人，在法国接受财务与审计专业教育。自 2013 年起，他领导多家在西非从事医疗器械供应、安装和维护的企业。',
      '多年来，他为国际组织和区域各国卫生部主持了医院和实验室装备项目。',
    ],
    convictionLabel: '他的信念',
    conviction: '西非必须自己生产基本药物。',
    pathTitle: '个人经历',
    path: [
      '会计、控制与审计高等教育背景（法国）。',
      '曾任职于国际审计事务所及大型集团内部控制部门。',
      '十余年西非交钥匙医疗项目管理经验。',
      '熟悉公共及国际招标程序。',
    ],
  },
  org: {
    eyebrow: '组织架构',
    title: '制药企业的组织架构',
    intro: '在总经理领导下，管理团队由负责药品合规的质量受权药师和四个业务部门组成。',
    items: [
      { title: '质量受权药师', text: '负责药品合规与批次放行。' },
      { title: '财务与行政部', text: '财务、行政与内部控制。' },
      { title: '商务部', text: '对接采购中心、经销商和卫生组织。' },
      { title: '采购部', text: '原料、包装材料与设备的采购供应。' },
      { title: '生产部', text: '生产、维护及工厂公用工程。' },
    ],
    badge: '合规保障',
    note: '质量受权药师确保生产符合药品生产质量管理规范，并在每批产品交付患者前负责放行。',
  },
  cta: {
    eyebrow: '职业发展',
    title: '加入一支正在成长的团队',
    text: '塞梅-波吉工厂正在组建技术与行政团队。了解我们的岗位并提交您的申请。',
  },
};
export default direction;
