import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {
    clients: {
      meta: { title: '我们的客户 · 市场 · TILAMED Pharma', description: '采购中心、批发商、卫生组织、医院和药店：TILAMED Pharma 在贝宁及西非的客户。' },
      lead: '我们为贝宁及西非的公立和私营医疗机构供货。',
      intro: '',
      facts: [{ value: '15', unit: '个国家', label: '覆盖西非国家' }],
      blocks: [
        { kind: 'points', title: '我们的合作方式', items: [
          '直接向公立和私营采购中心销售。',
          '参与公开招标和邀请招标。',
          '面向私营市场销售，并通过我们的经销商销售。',
          '所有销售由商务部统一管理，响应迅速。',
        ] },
      ],
      note: '',
    },
    'centrales-achat': {
      meta: { title: '采购中心 · 市场 · TILAMED Pharma', description: '能够按实际需求交付的本地供应商：减少库存占用、减少断货、招标文件齐全。' },
      lead: '能够按实际需求交付的本地供应商。',
      intro: '目前，采购中心必须提前数月下单，并储存大量进口输液。有了本地生产，订单可以跟随实际消耗量。',
      facts: [],
      blocks: [
        { kind: 'cards', title: '您将获得', items: [
          { title: '减少库存占用', text: '交货更频繁，仓库更宽松。' },
          { title: '减少断货', text: '供应商只需几小时车程，而非数周海运。' },
          { title: '文件齐全', text: '团队熟悉国内和国际招标程序。' },
        ] },
      ],
      note: '',
    },
    'hopitaux-cliniques': {
      meta: { title: '医院、诊所与药店 · 市场 · TILAMED Pharma', description: '就近供应的基本输液，采用不易破碎的塑料瓶包装。' },
      lead: '就近供应的基本输液。',
      intro: '输液每天都在急诊、外科、内科、儿科、产科等各科室使用，其供应至关重要。',
      facts: [],
      blocks: [
        { kind: 'points', title: '为医院设计的产品线', items: [
          '覆盖基本需求：生理盐水、葡萄糖、乳酸林格液。',
          '特殊溶液：镇痛、抗感染、抗生素。',
          '用于急诊、产科和日常护理的安瓿注射剂。',
          '不易破碎的塑料瓶，便于操作和储存。',
        ] },
      ],
      note: '',
    },
    'organisations-sante': {
      meta: { title: '卫生组织 · 市场 · TILAMED Pharma', description: '区域及国际卫生项目的本地合作伙伴：世卫组织 GMP、完整质量档案、覆盖 15 国的交付能力。' },
      lead: '区域及国际卫生项目的本地合作伙伴。',
      intro: '国际、区域及非政府组织高度重视改善西非卫生系统。我们的团队熟悉其采购程序和质量要求。',
      facts: [{ value: '15', unit: '个国家', label: '覆盖西非国家' }],
      blocks: [
        { kind: 'points', title: '我们的承诺', items: [
          '按照世卫组织良好规范生产。',
          '每种产品都有完整的质量档案。',
          '可向覆盖的 15 个西非国家交付。',
        ] },
      ],
      note: '',
    },
  },
  distrib: {
    meta: { title: '成为经销商 · 市场 · TILAMED Pharma', description: '西非药品批发商和经销商：欢迎加入 TILAMED Pharma 授权经销商网络。' },
    lead: '您是西非的药品批发商或经销商吗？欢迎洽谈。',
    intro: '我们正在建立授权经销商网络，让我们的产品覆盖整个次区域。',
    reqTitle: '我们的要求',
    reqs: [
      '持有所在国家的药品经营许可。',
      '拥有符合药品经营质量管理规范的仓库。',
      '熟悉本国市场的公立和私营分销渠道。',
    ],
    formTitle: '您的申请',
    fields: {
      company: '公司名称', country: '国家', name: '联系人姓名', role: '职务', email: '电子邮箱', phone: '电话',
      licence: '药品经营许可', warehouse: '符合 GDP 的仓库', yes: '是', no: '否', pending: '办理中',
      channels: '覆盖渠道', ranges: '感兴趣的产品线', message: '公司简介',
      messageHint: '覆盖区域、客户、规模、团队…', consent: '我同意 TILAMED Pharma 使用上述信息评估我的申请。',
      submit: '提交申请', required: '必填项', select: '请选择…',
    },
    channels: ['公立采购中心', '医院和诊所', '零售药店', '卫生组织', '次区域出口'],
  },
  presence: {
    meta: { title: '区域布局 · 市场 · TILAMED Pharma', description: '工厂位于贝宁，覆盖 15 个西非国家，并在贝宁、布基纳法索和法国设有办事处。' },
    lead: '工厂位于贝宁，覆盖 15 个西非国家，并具有国际布局。',
    facts: [
      { value: '15', unit: '个国家', label: '覆盖西非国家' },
      { value: '3', unit: '', label: '个办事处：贝宁、布基纳法索、法国' },
      { value: '4', unit: '亿以上', label: '西非人口' },
    ],
    note: '次区域面临相似的卫生挑战：相近的疾病、年轻且快速增长的人口，以及同样依赖进口药品。',
  },
};
export default marches;
