import type { EtapesDict } from './fr';

const etapes: EtapesDict = {
  ui: {
    step: '步骤',
    of: '/',
    rail: '生产流程七个步骤',
    figures: '数据',
    prev: '上一步',
    next: '下一步',
    overview: '工厂概览',
    backTo: '我们的工厂',
    others: '工厂栏目其他内容',
  },
  steps: {
    'traitement-eau': {
      meta: { title: '制药用水处理 · 我们的工厂 · TILAMED Pharma', description: '在塞梅-波吉厂内生产纯化水和注射用水：反渗透、电去离子、蒸馏及不锈钢热循环。' },
      lead: '水是注射液的第一种原料，其纯度受到连续监控。',
      intro: '输液中 90% 以上是水。我们在厂内生产两种等级的制药用水，符合药典要求。',
      facts: [
        { value: '> 90', unit: '%', label: '输液中的水含量' },
        { value: '2', unit: '', label: '厂内生产的制药用水等级' },
      ],
      block: { kind: 'sequence', title: '水处理步骤', items: [
        { title: '预处理', text: '对原水进行过滤和软化。' },
        { title: '纯化水', text: '双级反渗透后进行电去离子 (EDI)。' },
        { title: '注射用水 (WFI)', text: '采用多效蒸馏水机蒸馏，去除内毒素。' },
        { title: '纯蒸汽', text: '专用发生器生产用于设备灭菌的蒸汽。' },
        { title: '储存与循环', text: '注射用水在不锈钢热循环回路中储存和流动，直至使用点保持无菌。' },
      ] },
      note: '水的电导率和温度连续测量，并记录和设置报警。',
    },
    'preparation-solutions': {
      meta: { title: '溶液配制 · 我们的工厂 · TILAMED Pharma', description: '按验证处方在不锈钢罐中分批配制：称量、过程控制与过滤。' },
      lead: '活性成分与注射用水的精确混合。',
      intro: '每种溶液均按验证过的处方分批配制。原料经称量后加入不锈钢罐中的注射用水。',
      facts: [
        { value: '2', unit: '', label: '不锈钢配液罐' },
      ],
      block: { kind: 'points', title: '设备与控制', items: [
        '两个配液罐，配备称重传感器和磁力搅拌器。',
        '过程控制：浓度、pH 值、外观。',
        '溶液在输送至灌装线前进行过滤。',
        '两批之间对配液罐和管路进行清洁和灭菌。',
      ] },
      note: '',
    },
    'soufflage-remplissage-scellage': {
      meta: { title: '吹瓶、灌装、密封 · 我们的工厂 · TILAMED Pharma', description: '吹灌封技术：一台设备完成成型、灌装和密封，全程无人接触。规格 100 至 1000 ml。' },
      lead: '一台设备完成成型、灌装和密封，全程无人接触。',
      intro: '吹灌封 (blow-fill-seal) 技术是目前生产无菌溶液最安全的工艺之一。塑料瓶在灌装的同时成型。',
      facts: [
        { value: '100', unit: 'ml', label: '抗生素、镇痛药' },
        { value: '250', unit: 'ml', label: '基础输液' },
        { value: '500', unit: 'ml', label: '最常用规格' },
        { value: '1000', unit: 'ml', label: '补液' },
      ],
      block: { kind: 'sequence', title: '五个阶段的循环', items: [
        { title: '挤出', text: '药用级聚合物熔融后挤出成管坯。' },
        { title: '吹塑', text: '模具闭合，以过滤的无菌空气吹制成瓶。' },
        { title: '灌装', text: '在受保护气流下将溶液精确定量灌入瓶中。' },
        { title: '密封', text: '瓶头在模具内成型并完全密封。' },
        { title: '脱模', text: '瓶子以封闭状态脱出，等待灭菌。' },
      ] },
      note: '规格切换约需半小时，可快速响应客户需求。',
    },
    sterilisation: {
      meta: { title: '灭菌 · 我们的工厂 · TILAMED Pharma', description: '在过热水喷淋灭菌柜中对最终包装内的瓶子进行终端灭菌，灭菌循环经验证并记录。' },
      lead: '每个灌装好的瓶子都在其最终包装中灭菌。',
      intro: '密封后，瓶子在过热水喷淋灭菌柜中进行终端灭菌。这种方法可使瓶子受热均匀，同时保护塑料。',
      facts: [],
      block: { kind: 'points', title: '受控的灭菌过程', items: [
        '经验证的循环：每批次记录时间、温度和压力。',
        '通过指示剂和检查确认每次循环有效。',
        '与产品接触的部件采用药用级不锈钢。',
        '灭菌前后的瓶子物理隔离。',
      ] },
      note: '',
    },
    inspection: {
      meta: { title: '100% 检查 · 我们的工厂 · TILAMED Pharma', description: '干燥、检漏、灯检、装箱与自动剔除：每一瓶产品出厂前都经过检查。' },
      lead: '每一瓶产品出厂前都经过检查。',
      intro: '',
      facts: [
        { value: '100', unit: '%', label: '的瓶子在出厂前经过检查' },
      ],
      block: { kind: 'sequence', title: '从干燥到装箱', items: [
        { title: '干燥', text: '瓶子从灭菌柜出来后进行干燥。' },
        { title: '检漏', text: '逐瓶检测，发现任何微小泄漏。' },
        { title: '灯检', text: '在灯光下检查溶液和瓶子的外观。' },
        { title: '外包装与装箱', text: '放入说明书和合格证，封箱并贴标。' },
        { title: '自动剔除', text: '重量不符或标签错误的纸箱被自动剔除。' },
      ] },
      note: '',
    },
    laboratoire: {
      meta: { title: '质量控制实验室 · 我们的工厂 · TILAMED Pharma', description: '色谱、光谱、稳定性试验箱与微生物检验：每批产品经检验并由质量受权药师放行。' },
      lead: '我们的实验室在放行前检验原料、用水和每一批产品。',
      intro: '',
      facts: [],
      block: { kind: 'cards', title: '我们的分析手段', items: [
        { title: '色谱分析 (HPLC)', text: '活性成分的鉴别与含量测定。' },
        { title: '光谱分析', text: '原子吸收、紫外与红外，用于鉴别和纯度检查。' },
        { title: '稳定性试验箱', text: '通过稳定性研究确认有效期。' },
        { title: '微生物检验', text: '无菌、内毒素与环境监测。' },
      ] },
      note: '任何批次在上市前都须经质量受权药师依据实验室结果和批记录审核作出决定。',
    },
    'conditionnement-logistique': {
      meta: { title: '包装与交付 · 我们的工厂 · TILAMED Pharma', description: '按照药品经营质量管理规范储存，并由自有物流团队在贝宁境内配送及安排出口。' },
      lead: '在正确的时间、以良好的状态将产品送达正确的地点。',
      intro: '成品按照药品经营质量管理规范存放在我们的仓库中，并由自有物流团队配送给贝宁的客户。',
      facts: [],
      block: { kind: 'points', title: '我们的物流服务', items: [
        '按客户实际需求交付，客户无需储备数月的库存。',
        '借助集成管理软件实时跟踪订单和库存。',
        '出口业务可由客户的货代提货，或由我们安排配送。',
      ] },
      note: '',
    },
  },
};
export default etapes;
