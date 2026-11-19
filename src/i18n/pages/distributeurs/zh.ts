// 「成为经销商」页面 · 中文。
import type { DistributeursDict } from './fr';

const distributeurs: DistributeursDict = {
  hero: { cta1: '提交申请' },
  facts: [
    { value: '15', unit: '国', label: '西非国家在我们的分销范围内' },
    { value: '2', unit: '个来源', label: '我们在贝宁的工厂与国际知名制造商' },
    { value: '< 1', unit: '个月', label: '从塞梅-波吉工厂到患者手中' },
    { value: '5', unit: '大类', label: '产品，一个供应商全部提供' },
  ],
  why: {
    eyebrow: '为何加入我们',
    title: '为何经销 TILAMED Pharma 产品？',
    items: [
      { title: '本地供应商', text: '工厂位于贝宁，公路几小时可达，而非海运数周：下单更频繁，库存占用更少，断货更少。' },
      { title: '质量受控', text: '每批产品均由我们的实验室检验，并在 ABRP 监管下由质量受权药师放行。' },
      { title: '完整的产品线', text: '大输液、注射药品、营养液、医疗器械和动物保健产品。' },
      { title: '全程支持', text: '提供产品的技术和注册文件，并协助您参与招标。' },
    ],
  },
  partner: {
    eyebrow: '合作伙伴关系',
    title: '双方共同承诺',
    giveTitle: '我们为您提供',
    give: [
      '贝宁制造的产品以及国际大型制造商的产品，从我们的仓库发货。',
      '每个产品的完整文件：技术资料和分析证书。',
      '按您的实际需求计划配送。',
      '就您的销售、库存和市场需求保持定期沟通。',
    ],
  },
  steps: {
    eyebrow: '合作流程',
    title: '四步成为经销商',
    items: [
      { title: '提交申请', text: '填写下方表格：贵公司信息、资质许可和销售渠道。' },
      { title: '沟通与评估', text: '我们审阅您的资料，然后就您的市场、客户和仓储能力进行沟通。' },
      { title: '签订经销协议', text: '合同明确区域、产品线、双方承诺和商务条件。' },
      { title: '启动与跟进', text: '首批订单和文件交付，之后定期跟进销售和库存。' },
    ],
  },
  coverage: {
    eyebrow: '覆盖区域',
    title: '西非 15 国',
    text: '我们正在西共体全部 15 个成员国寻找合作伙伴，涵盖公立和私营渠道。',
  },
  contact: '更想直接来信？',
  formLead: '只需提供贵公司的基本信息即可开始：我们会尽快与您联系详谈。',
};
export default distributeurs;
