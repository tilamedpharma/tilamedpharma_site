import type { EnvDict } from './fr';

const environnement: EnvDict = {
  meta: {
    title: '环境 · TILAMED Pharma',
    description: '一座致力于降低环境影响的工厂：EDGE 认证进行中，以 ISO 14001 为目标，涵盖水、能源、材料、废弃物和运输。',
  },
  hero: {
    lead: '一座致力于降低环境影响的工厂：水、能源、材料、废弃物。',
    cta: '我们的举措',
  },
  edge: {
    eyebrow: 'EDGE 认证进行中',
    figLabel: '国际金融公司（世界银行集团）绿色建筑标准',
    text: 'EDGE 是国际金融公司（IFC）的可持续建筑标准，用于认证资源消耗明显低于基准建筑的建筑物。我们的塞梅-波吉工厂正在申请该认证。',
    criteria: [
      { value: '20', label: '节约能源' },
      { value: '20', label: '节约用水' },
      { value: '20', label: '降低材料隐含能耗' },
    ],
    criteriaNote: 'EDGE 相对于基准建筑要求的最低节约比例。',
  },
  levers: {
    eyebrow: '我们的举措',
    title: '六大举措，减少环境足迹',
    intro: '我们以获得 ISO 14001 环境管理体系认证为目标。厂址位于经济特区内，该特区按照严格的环境与社会标准规划。',
  },
  certs: {
    eyebrow: '认证',
    title: '进展如何？',
    status: { done: '已获得', progress: '进行中', target: '目标' },
    edge: { title: 'EDGE 认证', text: '国际金融公司（世界银行集团）绿色建筑标准。' },
    iso: { title: 'ISO 14001 认证', text: '国际环境管理体系标准。' },
  },
  band: {
    eyebrow: '可再生能源',
    text: '本地区各国已设定目标，大幅提高可再生能源在能源结构中的比重。我们将沿着这一方向发展。',
  },
};
export default environnement;
