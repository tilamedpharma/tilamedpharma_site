import type { ParcoursDict } from './fr';

const parcours: ParcoursDict = {
  meta: {
    title: '发展历程 · TILAMED Pharma',
    description: '从 2013 年的 SEDIS SARL 到塞梅-波吉工厂：十年一线经验、六项许可与认证、2 公顷工业用地。',
  },
  hero: {
    lead: '从医疗行业的一线经验，到打造本地制药工业。',
    cta: '重要里程碑',
  },
  facts: [
    { value: '2013', unit: '', label: '进入西非医疗行业' },
    { value: '2023', unit: '', label: 'SEDIS SARL 更名为 TILAMED PHARMA SA' },
    { value: '6', unit: '项', label: '已获得的许可、批准和证书' },
    { value: '2', unit: '公顷', label: '塞梅-波吉工业用地' },
  ],
  timeline: {
    eyebrow: '重要里程碑',
    title: '十余年一线积累，一个工业梦想',
    refLabel: '文号',
    nowLabel: '进行中',
    nextLabel: '下一步',
    phases: [
      {
        range: '2013 – 2022',
        title: '奠定基础',
        items: [
          { date: '2013 年', title: 'SEDIS SARL 成立', text: '公司成立之初在西非从事医疗器械的供应、安装和维护，与医院、实验室和采购中心密切合作。' },
          { date: '2013 – 2022 年', title: '十年一线，一个发现', text: '贝宁没有任何本地生产的注射液。通过市场调研，以及与卫生主管部门、采购中心和欧洲设备制造商的交流，工业项目逐步成形。' },
        ],
      },
      {
        range: '2023 – 2024',
        title: '获得许可',
        items: [
          { date: '2023 年', title: 'TILAMED PHARMA SA 诞生', text: 'SEDIS SARL 更名为 TILAMED PHARMA SA，注册资本 10 亿西非法郎，转向工业化生产。' },
          { date: '2023 年 5 月 16 日', title: '贝宁药品监管局给予肯定意见', text: '贝宁药品监管局经委员会审议，对开办和运营制药工厂给予肯定意见。' },
          { date: '2023 年 6 月 30 日', title: '', text: '制药工厂的建设和运营获得批准。', comp: 0 },
          { date: '2024 年 8 月 7 日', title: '', text: '项目被认定符合环境与社会要求。', comp: 2 },
          { date: '2024 年 9 月 9 日', title: '', text: 'TILAMED Pharma 的工业活动获得批准。', comp: 1 },
          { date: '2024 年 10 月 28 日', title: '', text: '确定免税生产设备清单。', comp: 3 },
          { date: '2024 年 11 月 28 日', title: '', text: '项目获部长令规范，并在投资和运营阶段享受税收和社保豁免（B 类制度，8 年）。', comp: 4 },
        ],
      },
      {
        range: '2025 →',
        title: '厂址与工厂',
        items: [
          { date: '2025 年 9 月 9 日', title: '塞梅-波吉厂址', text: '贝宁政府以长期租赁方式将塞梅-波吉工业区内一块 2 公顷的工业用地交予 TILAMED PHARMA SA，紧邻尼日利亚边境。', ref: '长期租赁合同第 2494/MEF/DC/SGM/ANDF/DAJuF/DGDE/S 号' },
          { date: '今天', title: '建设工厂', text: 'TILAMED Pharma 正在塞梅-波吉工业区筹建注射液生产车间。', state: 'now' },
          { date: '明天', title: '投产运营', text: '启动生产并招聘首批团队。', state: 'next' },
        ],
      },
    ],
  },
  sites: {
    eyebrow: '我们的据点',
    title: '扎根贝宁，辐射区域',
    items: [
      { title: '生产基地', place: '塞梅-波吉 · 贝宁', text: '位于塞梅-波吉工业区，占地 2 公顷（20,000 平方米），紧邻尼日利亚边境。' },
      { title: '行政总部', place: '科托努 · 贝宁', text: '位于市中心 Les Cocotiers 的办公楼，归 TILAMED PHARMA SA 所有。' },
      { title: '区域办事处', place: '瓦加杜古 · 布基纳法索', text: '位于 Dassasgho 的 1,000 平方米办公楼。' },
    ],
  },
  cta: {
    eyebrow: '未来',
    title: '关注工厂建设进展',
    text: '项目的每一个新进展都会在新闻中发布。现在就来了解我们未来工厂的生产工艺。',
  },
};
export default parcours;
