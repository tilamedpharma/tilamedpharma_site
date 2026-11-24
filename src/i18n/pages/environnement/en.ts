import type { EnvDict } from './fr';

const environnement: EnvDict = {
  meta: {
    title: 'Environment · TILAMED Pharma',
    description: 'A plant designed to limit its impact: EDGE certification in progress, ISO 14001 targeted, water, energy, materials, waste and transport.',
  },
  hero: {
    lead: 'A plant designed to limit its impact: water, energy, materials, waste.',
    cta: 'Our levers',
  },
  edge: {
    eyebrow: 'EDGE certification in progress',
    figLabel: 'the IFC green-building standard, World Bank Group',
    text: 'EDGE is the sustainable-building standard of the International Finance Corporation (IFC). It certifies buildings that use significantly fewer resources than a reference building. Our Sèmè-Podji plant is undergoing certification.',
    criteria: [
      { value: '20', label: 'less energy' },
      { value: '20', label: 'less water' },
      { value: '20', label: 'less embodied energy in materials' },
    ],
    criteriaNote: 'Minimum savings required by EDGE compared with a reference building.',
  },
  levers: {
    eyebrow: 'Our levers',
    title: 'Six levers to reduce our footprint',
    intro: 'We are aiming for ISO 14001 certification for the environmental management of our Sèmè-Podji plant.',
  },
  certs: {
    eyebrow: 'Certifications',
    title: 'Where do we stand?',
    status: { done: 'Obtained', progress: 'In progress', target: 'Targeted' },
    edge: { title: 'EDGE certification', text: 'The IFC green-building standard (World Bank Group).' },
    iso: { title: 'ISO 14001 certification', text: 'International standard for environmental management.' },
  },
  band: {
    eyebrow: 'Renewable energy',
    text: 'Countries in the region have set themselves the goal of sharply increasing the share of renewables in their energy mix. We will follow that path.',
  },
};
export default environnement;
