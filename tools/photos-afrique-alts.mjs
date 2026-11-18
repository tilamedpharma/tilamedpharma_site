// Met à jour les textes alternatifs des photos remplacées (demande client 18/11/2026 : pas de photos de personnes blanches).
// - Accueil « Pourquoi » : infirmière réglant une perfusion (au lieu de « médecin et patiente »)
// - Produits « Médicaments » : médecin tenant une ampoule (au lieu de « flacons manipulés avec des gants »)
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../src/i18n/', import.meta.url));
const reps = {
  fr: [["imageAlt: 'Médecin s\\'entretenant avec une patiente à l\\'hôpital'", "imageAlt: 'Infirmière réglant une perfusion à l\\'hôpital'"], ["alt: 'Flacons manipulés avec des gants'", "alt: 'Médecin tenant une ampoule injectable'"]],
  en: [["imageAlt: 'Doctor talking with a patient in hospital'", "imageAlt: 'Nurse adjusting an IV drip in hospital'"], ["alt: 'Vials handled with gloves'", "alt: 'Doctor holding an injectable ampoule'"]],
  es: [["imageAlt: 'Médico conversando con una paciente en el hospital'", "imageAlt: 'Enfermera ajustando una perfusión en el hospital'"], ["alt: 'Viales manipulados con guantes'", "alt: 'Médica sosteniendo una ampolla inyectable'"]],
  pt: [["imageAlt: 'Médico a conversar com uma doente no hospital'", "imageAlt: 'Enfermeira a ajustar uma perfusão no hospital'"], ["alt: 'Frascos manuseados com luvas'", "alt: 'Médica a segurar uma ampola injetável'"]],
  it: [["imageAlt: 'Medico che parla con una paziente in ospedale'", "imageAlt: 'Infermiera che regola una flebo in ospedale'"], ["alt: 'Flaconi maneggiati con guanti'", "alt: 'Medica che tiene una fiala iniettabile'"]],
  zh: [["imageAlt: '医生在医院与患者交谈'", "imageAlt: '护士在医院调节输液'"], ["alt: '戴手套操作药瓶'", "alt: '医生手持注射用安瓿'"]],
  ar: [["imageAlt: 'طبيب يتحدث مع مريضة في المستشفى'", "imageAlt: 'ممرضة تضبط محلول التسريب في المستشفى'"], ["alt: 'قوارير تُناوَل بالقفازات'", "alt: 'طبيبة تحمل أمبولة حقن'"]],
};
for (const [lang, list] of Object.entries(reps)) {
  const f = `${dir}${lang}.ts`;
  let s = readFileSync(f, 'utf8');
  for (const [a, b] of list) {
    if (s.includes(b)) continue;
    if (!s.includes(a)) throw new Error(`${lang}: introuvable ${a}`);
    s = s.replace(a, b);
  }
  writeFileSync(f, s, 'utf8');
  console.log(`${lang}: ok`);
}
