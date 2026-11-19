// "Our suppliers" page · English.
import type { FournisseursDict } from './fr';

const fournisseurs: FournisseursDict = {
  meta: {
    title: 'Our suppliers · Purchasing centre · TILAMED Pharma',
    description: 'Partner manufacturers, selection criteria, onboarding steps and purchasing principles: what we expect from our suppliers, and what they can expect from us.',
  },
  hero: {
    lead: 'What we expect from our suppliers, and what they can expect from us.',
    cta1: 'Our selection criteria',
    cta2: 'Become a supplier',
  },
  partners: {
    eyebrow: 'Our industrial partners',
    title: 'Major manufacturers at our side',
    text: [
      'For our plant and our purchasing centre alike, we work with major international manufacturers of industrial equipment, medical devices and laboratory products.',
      'The makers of the plant\'s equipment also train our teams for five years: this is our skills transfer programme.',
    ],
  },
  criteria: {
    eyebrow: 'Selection',
    title: 'Five selection criteria',
    text: 'Every supplier is assessed before the first order, then reassessed regularly. For materials that go into the product, the assessment includes a questionnaire, a review of the technical file and, where needed, an on-site audit.',
    items: [
      { title: 'Quality', text: 'A recognised quality management system, certificates of analysis for every batch and, for pharmaceutical materials, compliance with good manufacturing practice.' },
      { title: 'Regulatory compliance', text: 'Products and documents that meet pharmacopoeia standards and the requirements of the Benin Pharmaceutical Regulatory Agency (ABRP).' },
      { title: 'Reliability', text: 'Deadlines met, sufficient capacity, full traceability and prompt notice of any change or incident.' },
      { title: 'Total cost', text: 'A fair price, assessed together with transport, lead times, storage and the risk of shortage, not just the purchase price.' },
      { title: 'Responsibility', text: 'Respect for human rights, occupational health and safety, the environment and anti-corruption rules.' },
    ],
  },
  steps: {
    eyebrow: 'Become a supplier',
    title: 'Four steps to join us',
    items: [
      { title: 'First contact', text: 'Write to us with "Purchasing" in the subject line, including your company profile, catalogue and certificates.' },
      { title: 'Assessment', text: 'Questionnaire, review of the technical file and, where needed, an on-site audit, against our five criteria.' },
      { title: 'Approval', text: 'A specification and, for pharmaceutical materials, a quality agreement set out each party\'s commitments.' },
      { title: 'Follow-up', text: 'Regular reassessment and an ongoing dialogue on performance: quality, lead times, responsiveness.' },
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'A relationship built on trust',
    items: [
      { title: 'Fairness and transparency', text: 'The same rules for everyone, clear tenders and reasoned decisions.' },
      { title: 'Integrity', text: 'No gifts or benefits that could influence a purchasing decision. Any conflict of interest is declared.' },
      { title: 'Confidentiality', text: 'Technical and commercial information exchanged is protected on both sides.' },
      { title: 'Partnership', text: 'Long-term relationships, shared goals and a regular dialogue on performance.' },
    ],
  },
  sustainable: {
    eyebrow: 'Responsible purchasing',
    title: 'A sustainable supply chain',
    text: 'We expect our suppliers to share our commitments and to require them in turn from their own subcontractors.',
    items: [
      'Decent working conditions: no child or forced labour, wages and working hours in line with the law.',
      'Less waste, packaging and emissions, and responsible use of water and energy.',
      'Transport and packaging choices that limit environmental impact.',
      'Developing local and regional suppliers, to bring production closer to patients.',
      'Continuity of supply: back-up plans in case of crisis or transport difficulties.',
    ],
  },
  cta: {
    eyebrow: 'Purchasing',
    title: 'Offer your products or services',
    text: 'Write to contact@tilamedpharma.com with "Purchasing" in the subject line. Our team will review your proposal.',
    mail: 'Email our purchasing team',
    subject: 'Purchasing',
  },
};
export default fournisseurs;
