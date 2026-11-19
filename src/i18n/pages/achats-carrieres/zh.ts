import type { AchatsCarrieresDict } from './fr';

const d: AchatsCarrieresDict = {
  pages: {
    carrieres: {
      meta: { title: '加入 TILAMED · 招聘 · TILAMED Pharma', description: '150 个直接就业岗位，70% 为技术岗位，5 年技能转让：加入贝宁首家注射液企业。' },
      lead: '加入贝宁首家注射液生产企业。',
      intro: '',
      facts: [
        { value: '150', unit: '', label: '个直接就业岗位' },
        { value: '70', unit: '%', label: '为技术岗位' },
        { value: '30', unit: '%', label: '为行政岗位' },
        { value: '5', unit: '年', label: '技能转让' },
      ],
      blocks: [
        { kind: 'prose', title: '组建中的团队', items: [
          '我们正在组建一支具备资质、接受过工业化生产培训并致力于质量的专业团队。',
          '贝宁拥有年轻、有活力、高素质的劳动力：我们优先在本地招聘和培训。',
        ] },
        { kind: 'points', title: '对所有人开放的雇主', items: [
          '公开、公平的招聘流程，只以能力为依据。',
          '向残障人士开放的工作岗位。',
          '各个层级男女公平分担职责。',
          '人人可参加的培训，并由设备制造商提供五年支持。',
        ] },
      ],
      note: '目前暂无公开招聘职位。您可以提交自荐申请。',
    },
    metiers: {
      meta: { title: '我们的岗位 · 招聘 · TILAMED Pharma', description: '生产、质量保证、实验室、维护、物流、职能支持：制药工厂的各类岗位。' },
      lead: '生产、质量、维护、物流、职能支持：了解制药工厂的各类岗位。',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'cards', title: '六大岗位类别', items: [
          { title: '生产', text: '产线操作工、设备操作员、班组长。' },
          { title: '质量保证', text: '药师、质量负责人、验证专员。' },
          { title: '实验室', text: '理化分析员和微生物分析员。' },
          { title: '维护与公用工程', text: '机械、电气、自动化和制冷技术员。' },
          { title: '物流', text: '仓管员、库存管理员、配送司机。' },
          { title: '职能支持', text: '财务、人力资源、采购、销售、信息技术。' },
        ] },
        { kind: 'points', title: '管理团队', items: [
          '总经理',
          '质量受权药师',
          '行政、财务与人力资源总监',
          '商务与市场总监（含医药代表团队）',
          '采购负责人',
          '总会计师',
        ] },
      ],
      note: '',
    },
  },
  cand: {
    meta: { title: '自荐申请 · 招聘 · TILAMED Pharma', description: '介绍您自己：TILAMED Pharma 将在开放招聘时第一时间审阅您的简历。' },
    lead: '介绍您自己：我们将在开放招聘时第一时间审阅您的简历。',
    intro: '我们只依据能力审阅每一份申请。申请对所有人开放。',
    formTitle: '您的申请',
    fields: {
      name: '姓名', email: '电子邮箱', phone: '电话', country: '居住国家',
      family: '意向岗位', level: '学历', experience: '工作年限',
      cv: '您的简历', cvHint: 'PDF 或 Word 格式，最大 5 MB。', message: '求职动机',
      consent: '我同意 TILAMED Pharma 保存上述信息以审阅我的申请。',
      submit: '提交申请', required: '必填项', select: '请选择…',
    },
    families: ['生产', '质量保证', '实验室', '维护与公用工程', '物流', '职能支持', '其他'],
    levels: ['初中或职业资格', '高中', '大专', '本科', '硕士或工程师', '博士或药学博士'],
    experience: ['不足一年', '1 至 3 年', '3 至 5 年', '5 至 10 年', '10 年以上'],
    asideTitle: '须知',
    asideItems: ['目前暂无公开招聘职位', '开放招聘时将审阅您的简历', '技术与行政岗位', '由设备制造商提供培训'],
  },
};
export default d;
