// (Re)génère `impact.band` (bandeau de 6 chiffres de la page d'accueil) dans les 7 dictionnaires principaux.
// Chaque entrée : value (nombre animé), plus (suffixe facultatif), unit (libellé en capitales), text (description).
// Règles de mise en page (demande client 18/11/2026) : unité sur UNE ligne, description sur 2 lignes maximum.
// Les 2 premières entrées sont la capacité LVP puis SVP (étiquettes prises dans impact.capacity.items[].code).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../src/i18n/', import.meta.url));
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

const band = {
  fr: [
    ['15', '', 'millions', 'de solutés de grand volume'],
    ['35', '', 'millions', 'd\'injectables de petit volume'],
    ['150', '', 'emplois directs', '70 % techniques, 30 % administratifs'],
    ['2', '', 'hectares', 'de site industriel à Sèmè-Podji'],
    ['15', '', 'pays', 'd\'Afrique de l\'Ouest'],
    ['13', '+', 'ans', 'd\'expérience dans la santé'],
  ],
  en: [
    ['15', '', 'million', 'large-volume parenterals'],
    ['35', '', 'million', 'small-volume parenterals'],
    ['150', '', 'direct jobs', '70% technical, 30% administrative'],
    ['2', '', 'hectares', 'industrial site in Sèmè-Podji'],
    ['15', '', 'countries', 'in West Africa'],
    ['13', '+', 'years', 'of experience in healthcare'],
  ],
  es: [
    ['15', '', 'millones', 'de soluciones de gran volumen'],
    ['35', '', 'millones', 'de inyectables de pequeño volumen'],
    ['150', '', 'empleos directos', '70 % técnicos, 30 % administrativos'],
    ['2', '', 'hectáreas', 'de planta industrial en Sèmè-Podji'],
    ['15', '', 'países', 'de África Occidental'],
    ['13', '+', 'años', 'de experiencia en salud'],
  ],
  pt: [
    ['15', '', 'milhões', 'de soluções de grande volume'],
    ['35', '', 'milhões', 'de injetáveis de pequeno volume'],
    ['150', '', 'empregos diretos', '70 % técnicos, 30 % administrativos'],
    ['2', '', 'hectares', 'de unidade industrial em Sèmè-Podji'],
    ['15', '', 'países', 'da África Ocidental'],
    ['13', '+', 'anos', 'de experiência na saúde'],
  ],
  it: [
    ['15', '', 'milioni', 'di soluzioni di grande volume'],
    ['35', '', 'milioni', 'di iniettabili di piccolo volume'],
    ['150', '', 'impieghi diretti', '70 % tecnici, 30 % amministrativi'],
    ['2', '', 'ettari', 'di sito industriale a Sèmè-Podji'],
    ['15', '', 'paesi', 'dell\'Africa occidentale'],
    ['13', '+', 'anni', 'di esperienza nella sanità'],
  ],
  zh: [
    ['1500', '', '万', '大容量注射剂'],
    ['3500', '', '万', '小容量注射剂'],
    ['150', '', '个直接就业岗位', '70% 技术岗位，30% 行政岗位'],
    ['2', '', '公顷', '塞梅-波吉工业用地'],
    ['15', '', '个国家', '西非国家'],
    ['13', '+', '年', '医疗健康行业经验'],
  ],
  ar: [
    ['15', '', 'مليون', 'من محاليل الحقن كبيرة الحجم'],
    ['35', '', 'مليون', 'من محاليل الحقن صغيرة الحجم'],
    ['150', '', 'وظيفة مباشرة', '70% تقنية و30% إدارية'],
    ['2', '', 'هكتار', 'موقع صناعي في سيمي-بودجي'],
    ['15', '', 'دولة', 'في غرب أفريقيا'],
    ['13', '+', 'سنة', 'من الخبرة في قطاع الصحة'],
  ],
};

for (const [lang, rows] of Object.entries(band)) {
  const file = `${dir}${lang}.ts`;
  let src = readFileSync(file, 'utf8');
  src = src.replace(/    band: \[\n[\s\S]*?\n    \],\n/, ''); // remplace une version précédente
  const anchor = '    tags: { site:';
  if (!src.includes(anchor)) throw new Error(`${lang}: ancre introuvable`);
  const block = '    band: [\n' + rows.map(([v, p, u, t]) => `      { value: ${q(v)}, plus: ${q(p)}, unit: ${q(u)}, text: ${q(t)} },`).join('\n') + '\n    ],\n';
  src = src.replace(anchor, block + anchor);
  writeFileSync(file, src, 'utf8');
  console.log(`${lang}: ok`);
}
