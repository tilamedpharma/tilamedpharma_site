import type { QualiteDict } from './fr';

const qualite: QualiteDict = {
  pages: {
    qualite: {
      meta: { title: '质量与合规 · TILAMED Pharma', description: 'ABRP 积极意见、目标 ISO 9001 与 ISO 14001、药品经营质量管理规范：我们的药品质量体系。' },
      lead: '质量贯穿每一个环节，从原料到患者。',
      intro: '',
      facts: [
        { value: '6', unit: '', label: '项贝宁主管部门的批准与许可' },
      ],
      blocks: [
        { kind: 'cards', title: '我们遵循的标准', items: [
          { title: 'ISO 9001 与 ISO 14001', text: '质量与环境管理体系目标认证。' },
          { title: 'ABRP', text: '2023 年 5 月 16 日对工厂开办和运营许可出具积极意见。' },
          { title: 'GDP', text: '仓储与配送遵循药品经营质量管理规范。' },
        ] },
        { kind: 'points', title: '药品质量体系', items: [
          '每个环节均有书面规程、人员培训和记录。',
          '设备确认与工艺验证。',
          '对原料、包装材料和成品进行检验。',
          '每批产品由质量受权药师放行。',
          '偏差、投诉与召回管理。',
        ] },
      ],
      note: '',
    },
    agrements: {
      meta: { title: '批准与许可 · 质量 · TILAMED Pharma', description: 'ABRP 及贝宁各部委的许可、环境与技术证书、部长令：TILAMED PHARMA SA 的各项批准。' },
      lead: '在贝宁，药品由贝宁药品监管局（ABRP）监管。',
      intro: '',
      facts: [
        { value: '6', unit: '', label: '项已获得的批准与许可' },
        { value: '2023', unit: '', label: 'ABRP 积极意见，2023 年 5 月 16 日委员会' },
      ],
      blocks: [
        { kind: 'points', title: 'ABRP 的职责', items: [
          '药品及卫生产品注册。',
          '厂房检查：生产、经营及药房质量管理规范。',
          '药品上市前的质量控制。',
        ] },
        { kind: 'points', title: '我们为每种产品提交的资料', text: '注射液生产企业须向 ABRP 提交所用组件的全部特性，包括瓶体和溶液处方。这些要求旨在：', items: [
          '保证每个组件的质量；',
          '实现产品及其容器的完整追溯；',
          '保证溶液在整个使用期内的完整性；',
          '确保最终包装耐破损、耐损坏。',
        ] },
      ],
      note: '',
    },
    'controle-qualite': {
      meta: { title: '质量控制 · 质量 · TILAMED Pharma', description: '从原料接收到质量受权药师放行：每批产品如何接受检验。' },
      lead: '所有结果核查无误后，批次方可放行。',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'sequence', title: '从检验到放行', items: [
          { title: '接收', text: '原料和包装材料进入待验区，取样并检验。' },
          { title: '生产过程中', text: '检查浓度、装量、密封性和外观。' },
          { title: '成品', text: '每批产品进行理化和微生物检验。' },
          { title: '批记录审核', text: '核查每一份生产记录。' },
          { title: '放行', text: '由质量受权药师决定。' },
        ] },
      ],
      note: '每批产品均留样，以便日后复检。',
    },
    tracabilite: {
      meta: { title: '可追溯性 · 质量 · TILAMED Pharma', description: '批号、发货记录与召回程序：以短供应链打击假药。' },
      lead: '从工厂到患者的短供应链，保障用药安全。',
      intro: '假药和非法市场在西非危及生命。本地生产缩短了供应链，使其更易于管控。',
      facts: [],
      blocks: [
        { kind: 'points', title: '每批产品全程追踪', items: [
          '每个瓶子和每个纸箱上均标有批号和有效期。',
          '按客户和批次记录发货。',
          '经过演练的召回程序，并与主管部门联动。',
        ] },
      ],
      note: '贝宁大力打击假药：参与国际刑警组织“盘古”国际行动，批准欧洲委员会《MEDICRIME 公约》，并于 2021 年颁布新的药事活动法。',
    },
    certifications: {
      meta: { title: '认证 · 质量 · TILAMED Pharma', description: 'ABRP、ISO 9001、ISO 14001、GDP 与 EDGE：我们在质量与环境方面的认证目标。' },
      lead: '我们在质量与环境方面的认证目标。',
      intro: '',
      facts: [],
      blocks: [
        { kind: 'table', title: '当前进展', head: ['标准', '领域', '状态'], rows: [
          ['ABRP', '制药工厂开办与运营', '积极意见，2023 年 5 月 16 日委员会'],
          ['ISO 9001', '质量管理', '目标认证'],
          ['ISO 14001', '环境管理', '目标认证'],
          ['GDP', '药品经营', '应用于我们的仓库'],
          ['EDGE（IFC）', '绿色建筑', '认证申请中'],
        ] },
      ],
      note: '每获得一项新认证，本表将随之更新。',
    },
  },
  pv: {
    meta: { title: '药物警戒 · 质量 · TILAMED Pharma', description: '向 TILAMED Pharma 报告与我们产品相关的任何不良反应或质量问题。' },
    lead: '请向我们报告与我们产品相关的任何不良反应或质量问题。',
    emergency: '如遇医疗紧急情况，请立即联系医生或急救服务。',
    intro: '药物警戒用于监测药品上市后的安全性。所有报告均保密处理，必要时将转交卫生主管部门。',
    formTitle: '提交报告',
    fields: {
      reporter: '您的身份', name: '姓名', email: '电子邮箱', phone: '电话', country: '国家',
      type: '报告类型', product: '相关产品', batch: '批号', expiry: '有效期',
      date: '事件日期', description: '不良反应或问题描述', descriptionHint: '发生了什么？何时发生？采取了哪些措施？',
      consent: '我同意上述信息被保密处理，并在必要时转交卫生主管部门。',
      submit: '提交报告', required: '必填项', select: '请选择…',
    },
    reporters: ['患者或家属', '医疗专业人员', '药师', '经销商', '其他'],
    types: ['不良反应', '产品质量问题', '用药差错'],
    asideTitle: '提交报告后',
    asideItems: ['质量受权药师确认收到', '保密分析您的报告', '必要时转交卫生主管部门', '如需补充信息将与您联系'],
  },
};
export default qualite;
