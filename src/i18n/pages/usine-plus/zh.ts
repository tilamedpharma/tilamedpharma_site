import type { Topic } from './fr';

const pages: Record<string, Topic> = {
  'site-seme-podji': {
    meta: { title: '塞梅-波吉厂址 · 我们的工厂 · TILAMED Pharma', description: '位于塞梅-波吉工业区的 2 公顷厂址，靠近克拉凯边境、科托努及其港口。' },
    lead: '2 公顷厂区，紧邻克拉凯边境，位于科托努与尼日利亚之间。',
    intro: '',
    facts: [
      { value: '2', unit: '公顷', label: '工业用地，即 20,000 平方米' },
    ],
    blocks: [
      { kind: 'points', title: '战略位置', items: [
        '位于贝宁南部韦梅省塞梅-波吉市。',
        '紧邻克拉凯边境，这是通往尼日利亚的主要口岸。',
        '靠近科托努及其自治港，该港承担了全国大部分贸易往来。',
        '位于塞梅-波吉工业区内。',
      ] },
      { kind: 'cards', title: '厂区布局', text: '厂区将把洁净区与一般区域明确分隔。', items: [
        { title: '生产厂房', text: '生产线位于受控环境区域内。' },
        { title: '接收与待验区', text: '原料在此等待检验，合格后方可使用。' },
        { title: '实验室', text: '对原料、用水和批次进行质量控制。' },
        { title: '成品仓库', text: '已放行产品在交付前的储存场所。' },
        { title: '公用工程', text: '保障工厂运转的水、蒸汽、空气和冷源。' },
        { title: '更衣室与缓冲间', text: '一般区域与洁净区之间的受控通道。' },
      ] },
    ],
    note: '',
  },
  'salles-propres': {
    meta: { title: '洁净室 · 我们的工厂 · TILAMED Pharma', description: 'C 级区域与灌装点 A 级保护：HEPA 过滤、压差梯度、光滑材料与连续监测。' },
    lead: '关键步骤将在受控环境中进行。',
    intro: '注射液生产在 C 级区域内进行，灌装点采用 A 级保护，符合药品生产质量管理规范。',
    facts: [
      { value: 'C', unit: '', label: '生产区域洁净级别' },
      { value: 'A', unit: '', label: '灌装点保护级别' },
    ],
    blocks: [
      { kind: 'cards', title: '受控的环境', items: [
        { title: 'HEPA 过滤', text: '送入洁净室的空气经过高效过滤器。' },
        { title: '压差梯度', text: '洁净度最高的房间保持正压，防止污染物进入。' },
        { title: '光滑材料', text: '墙板、门和环氧树脂地面，便于清洁和消毒。' },
        { title: '监测', text: '对粒子、压差、温度和湿度进行监测，并设报警。' },
      ] },
    ],
    note: '人员通过专用更衣室和缓冲间进入洁净区，并穿着与各级别相适应的洁净服。',
  },
  utilites: {
    meta: { title: '公用工程 · 我们的工厂 · TILAMED Pharma', description: '压缩空气、蒸汽、冷冻水、纯化水与纯蒸汽管网、厂内维护：工厂的技术服务。' },
    lead: '压缩空气、蒸汽、冷冻水：保障工厂运转的技术服务。',
    intro: '',
    facts: [],
    blocks: [
      { kind: 'cards', title: '技术服务', items: [
        { title: '压缩空气', text: '为生产设备提供无油压缩空气。' },
        { title: '工业蒸汽', text: '锅炉生产工业蒸汽。' },
        { title: '冷冻水', text: '冷水机组和冷却塔，服务工艺与空调系统。' },
        { title: '管道网络', text: '用于纯化水、注射用水、纯蒸汽和压缩空气。' },
        { title: '厂内维护', text: '厂内设有维修车间和备件库。' },
      ] },
    ],
    note: '预防性和纠正性维护由我们的技术人员完成，他们接受设备制造商的培训。',
  },
  'transfert-technologie': {
    meta: { title: '技术转让 · 我们的工厂 · TILAMED Pharma', description: '五年驻厂常驻技术支持，以及面向操作、实验室和维护人员的培训：技术留在贝宁。' },
    lead: '五年常驻技术支持，让技术留在贝宁。',
    intro: '从工厂安装和投产开始，设备制造商即在贝宁培训我们的团队。随后其工程师将驻厂五年，支持生产运行。',
    facts: [
      { value: '5', unit: '年', label: '常驻技术支持，可延长' },
      { value: '70', unit: '%', label: '为技术岗位' },
    ],
    blocks: [
      { kind: 'points', title: '计划开展的培训', items: [
        '操作工和技术员的功能与技术培训。',
        '药品生产质量管理规范与洁净区卫生培训。',
        '实验室人员的分析方法培训。',
        '维护团队的关键设备培训。',
      ] },
    ],
    note: '',
  },
};
export default pages;
