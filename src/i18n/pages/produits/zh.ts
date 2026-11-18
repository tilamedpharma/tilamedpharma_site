import type { ProduitsDict } from './fr';

const produits: ProduitsDict = {
  ui: { seeRange: '查看产品线', docCta: '索取资料', contactCta: '联系我们的商务部', inThisRange: '本产品线', categories: '个类别' },
  catalogue: {
    meta: { title: '产品目录 · TILAMED Pharma', description: '输液、注射及口服药品、营养溶液、医疗器械与动物保健：TILAMED Pharma 产品目录。' },
    lead: '搜索我们的注射液、未来的液体药品以及我们经销的医疗器械。',
    warning: 'TILAMED 注射液和液体药品正在筹备中，尚未上市销售。',
    familiesTitle: '五大产品线',
    searchTitle: '完整目录',
    searchIntro: '按产品线筛选，或按名称、用途、类别搜索。',
  },
  families: {
    serums: { meta: { title: '输液 · 产品 · TILAMED Pharma', description: '氯化钠、葡萄糖、乳酸林格、碳酸氢钠、甘露醇：在塞梅-波吉生产的输液。' }, lead: '我们在塞梅-波吉生产的首个产品线：塑料瓶在厂内成型、灌装并密封的输液。' },
    medicaments: { meta: { title: '药品 · 产品 · TILAMED Pharma', description: '安瓿注射剂、含药溶液、注射用抗生素、疫苗和血清、口服液。' }, lead: '安瓿注射剂、抗生素、疫苗和血清、口服液：分三个生产阶段推出的产品线。' },
    'solutions-nutritionnelles': { meta: { title: '营养溶液 · 产品 · TILAMED Pharma', description: '高浓度葡萄糖及注射或口服维生素，用于补充热量和纠正缺乏。' }, lead: '高浓度葡萄糖和维生素（注射或口服），用于补充热量和纠正缺乏。' },
    'dispositifs-medicaux': { meta: { title: '医疗器械 · 产品 · TILAMED Pharma', description: '诊断、外科器械、灭菌与设备：TILAMED Pharma 经销的医疗器械。' }, lead: '诊断、外科器械、灭菌与设备：我们经销的医疗器械。' },
    'sante-animale': { meta: { title: '动物保健 · 产品 · TILAMED Pharma', description: '犬猫食品、驱虫、护理与药品：即将推出的 TILAMED 兽用产品线。' }, lead: '犬猫食品、驱虫产品、护理用品与药品。' },
  },
  formats: {
    title: '适合各种用途的瓶装规格',
    intro: '采用吹灌封工艺生产的轻便、不易破碎的塑料瓶。',
    items: [
      { value: '100', label: '抗生素、镇痛药、稀释' },
      { value: '250', label: '基础输液、儿科' },
      { value: '500', label: '医院最常用规格' },
      { value: '1000', label: '补液、扩容' },
    ],
    cards: [
      { title: '不易破碎', text: '塑料瓶可承受运输和储存中的碰撞。' },
      { title: '轻便', text: '比玻璃瓶更轻：便于运输和操作。' },
      { title: '密闭系统', text: '输液时无需进气即可排空，降低污染风险。' },
    ],
    note: '每箱均附说明书并贴有标签，确保批次可追溯。',
  },
  phases: { title: '分三个阶段推出的产品线', intro: '药品将随着生产线投产和监管审批逐步投入生产。' },
  devices: {
    text: 'TILAMED Pharma 在西非拥有丰富的医疗设备供应、安装和维护经验，经销具有 CE 标志的欧洲制造商医疗器械。',
    cta: '如需报价、产品清单或参与招标，请联系我们的商务部。',
  },
  vet: { text: '我们的兽用产品线正在筹备中，产品即将上市。', cta: '获取上市通知' },
  doc: {
    meta: { title: '资料索取 · TILAMED Pharma', description: '医疗专业人员和采购方：欢迎索取 TILAMED Pharma 产品的技术资料。' },
    lead: '医疗专业人员和采购方：欢迎索取我们产品的技术资料。',
    intro: '请注明您感兴趣的产品。相关资料一经发布，我们的团队将第一时间发送给您。',
    formTitle: '您的需求',
    fields: {
      name: '姓名', org: '机构', profile: '您的身份', country: '国家', email: '电子邮箱', phone: '电话',
      ranges: '感兴趣的产品线', products: '具体产品（选填）', productsHint: '例如：氯化钠 0.9% 500 ml、头孢曲松 1 g…',
      message: '留言', consent: '我同意 TILAMED Pharma 使用上述信息回复我的需求。', submit: '提交需求',
      required: '必填项', select: '请选择…',
    },
    profiles: ['采购中心', '医院或诊所', '药店', '批发商或经销商', '卫生组织', '其他'],
    asideTitle: '您将获得',
    asideItems: ['技术资料与成分说明（发布后即发送）', '计划规格与包装', '供货时间表', '商务部联系方式'],
    direct: '希望直接联系我们？',
  },
};
export default produits;
