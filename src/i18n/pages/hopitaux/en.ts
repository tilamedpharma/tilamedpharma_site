import type { HopitauxDict } from './fr';
const hopitaux: HopitauxDict = {
  meta: {
    title: 'Hospitals, clinics and pharmacies · Markets · TILAMED Pharma',
    description: 'Infusion solutions, injectable medicines, nutritional solutions and medical devices made or distributed in BENIN, in unbreakable plastic bottles.',
  },
  hero: {
    lead: 'Essential infusion solutions, available close to you.',
    cta1: 'View the catalogue',
  },
  intro: {
    eyebrow: 'At the heart of care',
    title: 'Available every day, in every department',
    text: [
      'Infusion fluids are used every day in every department. Their availability is vital: one stock-out, and care comes to a halt.',
      'Made in Sèmè-Podji, our solutions no longer depend on several weeks of sea freight. Your pharmacy can order more often, in quantities that fit its needs.',
    ],
    services: ['Emergency', 'Surgery', 'Medicine', 'Paediatrics', 'Maternity'],
    badge: 'Made in BENIN',
    imageAlt: 'Nurse with medical equipment in a hospital corridor',
  },
  range: {
    eyebrow: 'Our range for care',
    title: 'Everyday hospital products',
    text: 'Four ranges for human medicine, from basic infusion fluids to medical devices.',
    items: [
      ['Sodium chloride 0.9%', 'Glucose 5%', 'Ringer\'s lactate', 'Mannitol 20%'],
      ['Paracetamol 1%', 'Ceftriaxone 1 g', 'Oxytocin 10 IU', 'Quinine injection'],
      ['Glucose 10%', 'Vitamin C 0.5 g/5 ml', 'Vitamin B complex'],
      ['Stethoscope', 'Blood pressure monitor', 'Haemostatic forceps'],
    ],
    note: 'Range in preparation, subject to authorisation. Medicines reserved for healthcare professionals.',
  },
  bottle: {
    eyebrow: 'The plastic bottle',
    title: 'Designed for the field',
    text: 'Our infusion fluids come in plastic bottles, safer and more practical than glass, from the truck to the patient\'s bedside.',
    items: [
      { title: 'Unbreakable', text: 'No broken glass, neither during transport nor on the ward.' },
      { title: 'Light', text: 'Easier to carry, put away and store in the pharmacy.' },
      { title: 'Formed, filled and sealed in one step', text: 'In a single automatic operation, with no human contact with the solution.' },
      { title: 'Inspected', text: 'Every bottle is inspected and every batch analysed before release.' },
    ],
    imageAlt: 'Plastic ampoules, formed and sealed in a single operation',
  },
  supply: {
    eyebrow: 'How to get our products',
    imageAlt: 'Nurse using a blood pressure monitor',
    title: 'Find our products near you',
    items: [
      { title: 'Public hospitals', text: 'Through your country\'s procurement agency, which we supply directly.' },
      { title: 'Private clinics and pharmacies', text: 'From our approved distributors and wholesalers. Write to us and we will point you to the nearest one.' },
      { title: 'A specific need?', text: 'Large volumes, projects, tenders: our sales department will answer you.' },
    ],
  },
  safety: {
    eyebrow: 'Patient safety',
    title: 'Your safety and that of your patients',
    items: [
      { text: 'Report an adverse effect or a quality defect.' },
      { text: 'Technical data sheets and certificates of analysis for our products.' },
      { text: 'Every bottle carries its batch number, from the plant to the patient.' },
    ],
  },
};
export default hopitaux;
