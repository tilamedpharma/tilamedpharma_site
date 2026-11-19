import type { MarchesDict } from './fr';

const marches: MarchesDict = {
  pages: {},
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
};
export default marches;
