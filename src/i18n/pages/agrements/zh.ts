// 「许可与批准」页面 · 中文。
import type { AgrementsDict } from './fr';

const agrements: AgrementsDict = {
  hero: { cta1: '我们的许可' },
  facts: [
    { value: '6', unit: '项', label: '从贝宁主管部门获得的许可与批准' },
    { value: '2023', unit: '年', label: '5 月 16 日获积极意见后，于 6 月 30 日取得 ABRP 首项许可' },
    { value: '8', unit: '年', label: '税收与社保减免（Waiver，B 类制度）' },
  ],
  timeline: { eyebrow: '时间线', by: '颁发机构：' },
  abrp: { eyebrow: '监管机构' },
  standards: { eyebrow: '标准', text: '除各项许可外，工厂还遵循国际标准。各项标准进展如何？' },
  cta: {
    eyebrow: '文件',
    title: '需要我们许可文件的副本？',
    text: '采购中心、主管部门或合作伙伴：请来信索取所需文件，或申请我们的产品资料。',
  },
};
export default agrements;
