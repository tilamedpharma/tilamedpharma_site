import type { EnvDict } from './fr';

const environnement: EnvDict = {
  meta: {
    title: 'Medio ambiente · TILAMED Pharma',
    description: 'Una planta pensada para limitar su impacto: certificación EDGE en curso, ISO 14001 como objetivo, agua, energía, materiales, residuos y transporte.',
  },
  hero: {
    lead: 'Una planta pensada para limitar su impacto: agua, energía, materiales, residuos.',
    cta: 'Nuestras palancas',
  },
  edge: {
    eyebrow: 'Certificación EDGE en curso',
    figLabel: 'el estándar de edificación verde de la IFC, Grupo Banco Mundial',
    text: 'EDGE es el estándar de construcción sostenible de la Corporación Financiera Internacional (IFC). Certifica los edificios que consumen bastantes menos recursos que un edificio de referencia. Nuestra planta de Sèmè-Podji está en proceso de certificación.',
    criteria: [
      { value: '20', label: 'menos de energía' },
      { value: '20', label: 'menos de agua' },
      { value: '20', label: 'menos de energía incorporada en los materiales' },
    ],
    criteriaNote: 'Ahorros mínimos exigidos por EDGE con respecto a un edificio de referencia.',
  },
  levers: {
    eyebrow: 'Nuestras palancas',
    title: 'Seis palancas para reducir nuestra huella',
    intro: 'Aspiramos a la certificación ISO 14001 de gestión ambiental. Nuestro emplazamiento se ubica en una zona económica especial concebida para cumplir normas ambientales y sociales exigentes.',
  },
  certs: {
    eyebrow: 'Certificaciones',
    title: '¿En qué punto estamos?',
    status: { done: 'Obtenido', progress: 'En curso', target: 'Objetivo' },
    edge: { title: 'Certificación EDGE', text: 'Estándar de edificación verde de la IFC (Grupo Banco Mundial).' },
    iso: { title: 'Certificación ISO 14001', text: 'Norma internacional de gestión ambiental.' },
  },
  band: {
    eyebrow: 'Energías renovables',
    text: 'Los países de la región se han fijado aumentar considerablemente la proporción de energías renovables en su combinación energética. Seguiremos esa trayectoria.',
  },
};
export default environnement;
