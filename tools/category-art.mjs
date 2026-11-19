// Illustrations provisoires des catégories de produits (une par catégorie, partagée par ses produits
// en attendant les vraies photos). Style : aplats de la charte (bleu #1C64BA / vert #39A845, jamais de dégradé
// bleu→vert), fond teinté, disque blanc, anneau duo 70/30.
// Génère public/media/categories/{id}.svg (480 × 360).   Lancer : node tools/category-art.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const out = path.join(fileURLToPath(new URL('..', import.meta.url)), 'public', 'media', 'categories');
fs.mkdirSync(out, { recursive: true });

const C = {
  blue: '#1C64BA', blueD: '#17549C', sky: '#4F9BE0', blueL: '#D6E5F6', blueXL: '#EAF2FB',
  green: '#39A845', greenD: '#1E7A2E', greenL: '#BFE6C4', greenXL: '#EBF6ED',
  navy: '#12305A', white: '#FFFFFF', glass: '#F4F8FC',
  steel: '#C3CEDA', steelL: '#E6ECF2', steelD: '#8C9CAF', steelXD: '#6B7C91',
  amber: '#F2B544', amberL: '#FBE3A9', kibble: '#B9814A', kibbleD: '#8F5E30',
};

/* ---------- Cadre commun ---------- */
const BG = { blue: '#E8F0FA', grey: '#ECF0F5', green: '#E7F4EA' };
function frame(tone, body, { ring = true } = {}) {
  const bg = BG[tone];
  const r = 136;
  const dots = [];
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) dots.push(`<circle cx="${44 + i * 14}" cy="${40 + j * 14}" r="2.4"/>`);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 360" width="480" height="360">
<rect width="480" height="360" fill="${bg}"/>
<g fill="${C.blue}" opacity=".22">${dots.join('')}</g>
<g fill="${C.green}" opacity=".55"><path d="M412 262h6v-6h4v6h6v4h-6v6h-4v-6h-6z"/></g>
<circle cx="404" cy="78" r="5" fill="none" stroke="${C.sky}" stroke-width="2.5" opacity=".6"/>
<circle cx="240" cy="182" r="122" fill="${C.white}"/>
${ring ? `<g fill="none" stroke-width="5" stroke-linecap="round"><path d="${arc(240, 182, r, 150, 375)}" stroke="${C.blue}"/><path d="${arc(240, 182, r, 390, 475)}" stroke="${C.green}"/></g>` : ''}
${body}
</svg>
`;
}
/** Arc de cercle (angles en degrés, 0 = à droite, sens horaire). */
function arc(cx, cy, r, a0, a1) {
  const pt = (a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)].map((v) => v.toFixed(1)).join(' ');
  return `M${pt(a0)}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${pt(a1)}`;
}
const shadow = (cx, cy, rx, ry = 7) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.navy}" opacity=".09"/>`;

/* ---------- Éléments réutilisables ---------- */
function ampoule(x, y, s = 1, liquid = C.sky, ring = C.blue) {
  // x,y = pied de l'ampoule (centre) ; hauteur ≈ 150·s
  return `<g transform="translate(${x} ${y}) scale(${s})">
<path d="M-20 0h40a6 6 0 0 0 6-6v-72c0-10-10-16-14-22-3-4-3-8-1-12l2-3c2-4 2-8-2-12-3-3-4-8-4-14h-14c0 6-1 11-4 14-4 4-4 8-2 12l2 3c2 4 2 8-1 12-4 6-14 12-14 22v72a6 6 0 0 0 6 6z" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2"/>
<path d="M-24 -46h48v40a6 6 0 0 1-6 6h-36a6 6 0 0 1-6-6z" fill="${liquid}" opacity=".85"/>
<rect x="-24" y="-46" width="48" height="5" fill="${C.white}" opacity=".45"/>
<rect x="-10" y="-112" width="20" height="6" rx="3" fill="${ring}"/>
<path d="M-7 -146h14c0 4 1 8 3 12-4 2-16 2-20 0 2-4 3-8 3-12z" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2"/>
<rect x="-17" y="-70" width="5" height="56" rx="2.5" fill="${C.white}" opacity=".9"/>
</g>`;
}
function vial(x, y, s = 1, cap = C.blue, content = C.sky, powder = false) {
  // x,y = pied ; hauteur ≈ 130·s
  return `<g transform="translate(${x} ${y}) scale(${s})">
<path d="M-32 0h64a8 8 0 0 0 8-8v-74c0-8-6-12-14-16v-6h-52v6c-8 4-14 8-14 16v74a8 8 0 0 0 8 8z" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2"/>
<path d="M-40 ${powder ? -30 : -52}h80v44a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8z" fill="${content}" ${powder ? '' : 'opacity=".85"'}/>
${powder ? `<g fill="${C.white}" opacity=".9"><circle cx="-18" cy="-22" r="3"/><circle cx="6" cy="-16" r="2.5"/><circle cx="22" cy="-24" r="2"/><circle cx="-4" cy="-26" r="2"/></g>` : ''}
<rect x="-40" y="-74" width="80" height="20" fill="${C.white}"/>
<rect x="-40" y="-74" width="80" height="6" fill="${cap}" opacity=".9"/>
<rect x="-30" y="-124" width="60" height="22" rx="4" fill="${cap}"/>
<rect x="-24" y="-130" width="48" height="8" rx="3" fill="${C.steelL}" stroke="${C.steel}" stroke-width="1.5"/>
<rect x="-31" y="-46" width="6" height="38" rx="3" fill="${C.white}" opacity=".8"/>
</g>`;
}
function syringe(x, y, angle = -35, s = 1, liquid = C.sky) {
  return `<g transform="translate(${x} ${y}) rotate(${angle}) scale(${s})">
<rect x="-6" y="-2" width="12" height="40" rx="2" fill="${C.steel}"/>
<rect x="-22" y="34" width="44" height="7" rx="3.5" fill="${C.navy}"/>
<rect x="-16" y="-122" width="32" height="122" rx="5" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2"/>
<rect x="-13" y="-88" width="26" height="72" rx="3" fill="${liquid}" opacity=".85"/>
<rect x="-13" y="-20" width="26" height="10" rx="2" fill="${C.navy}"/>
<g stroke="${C.blue}" stroke-width="2" opacity=".55"><path d="M-16 -104h9M-16 -88h9M-16 -72h9M-16 -56h9M-16 -40h9"/></g>
<rect x="-26" y="-6" width="52" height="7" rx="3.5" fill="${C.blue}"/>
<path d="M-6 -122h12v-10h-12z" fill="${C.steelL}" stroke="${C.steel}" stroke-width="1.5"/>
<rect x="-1.5" y="-182" width="3" height="52" rx="1.5" fill="${C.steelD}"/>
</g>`;
}
function bottle(x, y, s = 1, label = C.blue, liquid = C.blueL, band = C.green) {
  // flacon plastique de perfusion, x,y = pied ; hauteur ≈ 190·s
  return `<g transform="translate(${x} ${y}) scale(${s})">
<path d="M-46 0h92a10 10 0 0 0 10-10v-118c0-14-10-22-24-28l-8-4v-12h-48v12l-8 4c-14 6-24 14-24 28v118a10 10 0 0 0 10 10z" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2"/>
<path d="M-56 -112h112v102a10 10 0 0 1-10 10h-92a10 10 0 0 1-10-10z" fill="${liquid}"/>
<rect x="-44" y="-96" width="88" height="70" rx="6" fill="${C.white}"/>
<rect x="-44" y="-96" width="88" height="16" rx="6" fill="${label}"/>
<rect x="-44" y="-86" width="88" height="6" fill="${label}"/>
<rect x="-34" y="-68" width="50" height="6" rx="3" fill="${C.navy}" opacity=".75"/>
<rect x="-34" y="-56" width="68" height="4" rx="2" fill="${C.steel}"/>
<rect x="-34" y="-47" width="56" height="4" rx="2" fill="${C.steel}"/>
<rect x="-44" y="-34" width="88" height="8" fill="${band}"/>
<rect x="-26" y="-190" width="52" height="20" rx="5" fill="${label}"/>
<rect x="-18" y="-198" width="36" height="10" rx="3" fill="${C.steelL}" stroke="${C.steel}" stroke-width="1.5"/>
<rect x="-50" y="-150" width="7" height="44" rx="3.5" fill="${C.white}" opacity=".85"/>
</g>`;
}
function paw(x, y, s = 1, fill = C.green) {
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="${fill}">
<ellipse cx="0" cy="8" rx="13" ry="11"/><ellipse cx="-15" cy="-8" rx="5.5" ry="7" transform="rotate(-20 -15 -8)"/>
<ellipse cx="-5" cy="-16" rx="5.5" ry="7.5"/><ellipse cx="7" cy="-16" rx="5.5" ry="7.5"/><ellipse cx="16" cy="-7" rx="5.5" ry="7" transform="rotate(20 16 -7)"/></g>`;
}
function plusBadge(x, y, r = 22, fill = C.green) {
  return `<g transform="translate(${x} ${y})"><circle r="${r}" fill="${fill}"/><path d="M${-r * 0.42} -${r * 0.13}h${r * 0.29}v-${r * 0.29}h${r * 0.26}v${r * 0.29}h${r * 0.29}v${r * 0.26}h-${r * 0.29}v${r * 0.29}h-${r * 0.26}v-${r * 0.29}h-${r * 0.29}z" fill="${C.white}"/></g>`;
}

/* ---------- Les 22 illustrations ---------- */
const art = {
  // Sérums
  standard: () => frame('blue', `${shadow(232, 306, 70)}
<path d="M240 40v20" stroke="${C.steelD}" stroke-width="5" stroke-linecap="round"/>
<circle cx="240" cy="36" r="9" fill="none" stroke="${C.steelD}" stroke-width="5"/>
<path d="M190 70h100a14 14 0 0 1 14 14v116c0 22-18 40-40 40h-48c-22 0-40-18-40-40V84a14 14 0 0 1 14-14z" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2.5"/>
<path d="M177 128h126v72c0 22-18 40-40 40h-46c-22 0-40-18-40-40z" fill="${C.sky}" opacity=".35"/>
<rect x="196" y="140" width="88" height="62" rx="6" fill="${C.white}"/>
<rect x="196" y="140" width="88" height="14" rx="6" fill="${C.blue}"/><rect x="196" y="148" width="88" height="6" fill="${C.blue}"/>
<rect x="206" y="164" width="44" height="6" rx="3" fill="${C.navy}" opacity=".75"/>
<rect x="206" y="176" width="64" height="4" rx="2" fill="${C.steel}"/><rect x="206" y="186" width="52" height="4" rx="2" fill="${C.steel}"/>
<g stroke="${C.blue}" stroke-width="2" opacity=".5"><path d="M180 92h12M180 106h8M180 120h12"/></g>
<rect x="216" y="76" width="48" height="8" rx="4" fill="${C.blueL}"/>
<rect x="231" y="240" width="18" height="16" rx="3" fill="${C.blue}"/>
<rect x="228" y="256" width="24" height="34" rx="6" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2"/>
<rect x="231" y="274" width="18" height="13" rx="3" fill="${C.sky}" opacity=".6"/>
<path d="M240 290c0 18 8 22 30 22s46-8 56-34" fill="none" stroke="${C.steel}" stroke-width="5" stroke-linecap="round"/>
<rect x="174" y="76" width="7" height="40" rx="3.5" fill="${C.white}"/>
${plusBadge(318, 92, 20)}`),

  'serum-special': () => frame('blue', `${shadow(240, 304, 104)}
${bottle(200, 300, 1, C.blue, C.blueL, C.green)}
${bottle(298, 300, 0.72, C.green, C.greenXL, C.blue)}`),

  // Médicaments
  specific: () => frame('blue', `${shadow(236, 304, 84)}
${bottle(226, 300, 1, C.navy, C.blueL, C.sky)}
<g transform="translate(306 118) rotate(-35)"><rect x="-34" y="-15" width="68" height="30" rx="15" fill="${C.white}" stroke="${C.blueL}" stroke-width="2"/><path d="M0 -15h19a15 15 0 0 1 0 30H0z" fill="${C.green}"/><rect x="-24" y="-8" width="16" height="4" rx="2" fill="${C.white}" opacity=".9"/></g>
<g transform="translate(168 112) rotate(20)"><circle r="18" fill="${C.blue}"/><path d="M-12 0h24" stroke="${C.white}" stroke-width="3" stroke-linecap="round"/></g>`),

  svp: () => frame('blue', `${shadow(240, 302, 108)}
${ampoule(180, 296, 1.05, C.sky, C.blue)}
${ampoule(240, 296, 1.18, C.blue, C.green)}
${ampoule(300, 296, 1.05, C.greenL, C.blue)}`),

  antibiotic: () => frame('blue', `${shadow(236, 304, 96)}
${vial(208, 298, 1.15, C.green, '#F4F1E8', true)}
${syringe(310, 270, 28, 0.95, C.sky)}`),

  vaccines: () => frame('blue', `${shadow(236, 304, 100)}
${vial(196, 298, 1.05, C.blue, C.sky)}
${vial(286, 298, 0.85, C.green, C.greenL)}
<g transform="translate(330 104)"><circle r="30" fill="${C.blue}"/>
<g stroke="${C.white}" stroke-width="3.5" stroke-linecap="round"><path d="M0-18v36M-15.6-9l31.2 18M-15.6 9l31.2-18"/><path d="M-5-15l5 5 5-5M-5 15l5-5 5 5" fill="none"/></g></g>`),

  oral: () => frame('blue', `${shadow(232, 304, 96)}
<g transform="translate(206 300)">
<path d="M-48 0h96a10 10 0 0 0 10-10v-112c0-12-8-18-20-22v-20h-76v20c-12 4-20 10-20 22v112a10 10 0 0 0 10 10z" fill="${C.blueL}"/>
<path d="M-58 -110h116v100a10 10 0 0 1-10 10h-96a10 10 0 0 1-10-10z" fill="${C.sky}" opacity=".55"/>
<rect x="-46" y="-104" width="92" height="74" rx="6" fill="${C.white}"/>
<rect x="-46" y="-104" width="92" height="8" rx="4" fill="${C.green}"/>
<circle cx="0" cy="-68" r="18" fill="${C.greenXL}"/><path d="M-8 -68h16M0 -76v16" stroke="${C.green}" stroke-width="4" stroke-linecap="round"/>
<rect x="-30" y="-44" width="60" height="5" rx="2.5" fill="${C.steel}"/>
<rect x="-42" y="-196" width="84" height="34" rx="6" fill="${C.blue}"/>
<g stroke="${C.blueD}" stroke-width="3" opacity=".6"><path d="M-30 -192v26M-18 -192v26M-6 -192v26M6 -192v26M18 -192v26M30 -192v26"/></g>
<rect x="-52" y="-150" width="7" height="40" rx="3.5" fill="${C.white}" opacity=".7"/></g>
<g transform="translate(316 300)"><path d="M-32 -64h64l-8 58a8 8 0 0 1-8 6h-32a8 8 0 0 1-8-6z" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2.5"/>
<path d="M-27 -30h54l-4 24a8 8 0 0 1-8 6h-30a8 8 0 0 1-8-6z" fill="${C.sky}" opacity=".55"/>
<g stroke="${C.blue}" stroke-width="2" opacity=".6"><path d="M-25 -46h12M-23 -30h10M-21 -16h8"/></g></g>`),

  // Nutrition
  vitamins: () => frame('green', `${shadow(240, 302, 104)}
${ampoule(196, 296, 1.05, C.amber, C.green)}
${ampoule(256, 296, 1.15, C.amberL, C.blue)}
<g transform="translate(326 250)"><circle r="40" fill="${C.green}"/><circle r="33" fill="${C.greenL}"/>
<g fill="${C.white}">${[0, 60, 120, 180, 240, 300].map((a) => `<path d="M0 0L${(28 * Math.cos(((a - 22) * Math.PI) / 180)).toFixed(1)} ${(28 * Math.sin(((a - 22) * Math.PI) / 180)).toFixed(1)}A28 28 0 0 1 ${(28 * Math.cos(((a + 22) * Math.PI) / 180)).toFixed(1)} ${(28 * Math.sin(((a + 22) * Math.PI) / 180)).toFixed(1)}Z" opacity=".75"/>`).join('')}</g>
<circle r="5" fill="${C.green}"/></g>`),

  nutrition: () => frame('green', `${shadow(240, 306, 82)}
<circle cx="240" cy="40" r="9" fill="none" stroke="${C.steelD}" stroke-width="5"/>
<path d="M240 49v14" stroke="${C.steelD}" stroke-width="5" stroke-linecap="round"/>
<path d="M176 66h128a12 12 0 0 1 12 12v150c0 18-14 30-32 30h-88c-18 0-32-12-32-30V78a12 12 0 0 1 12-12z" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2.5"/>
<path d="M168 92h46v162c-12-2-46-6-46-26z" fill="${C.amberL}"/>
<rect x="217" y="92" width="46" height="166" fill="${C.greenL}"/>
<path d="M266 92h46v136c0 20-34 24-46 26z" fill="${C.blueL}"/>
<g stroke="${C.white}" stroke-width="5"><path d="M215 86v172M264 86v172"/></g>
<rect x="198" y="74" width="84" height="10" rx="5" fill="${C.green}"/>
<rect x="180" y="190" width="120" height="40" rx="6" fill="${C.white}" opacity=".95"/>
<rect x="190" y="200" width="60" height="6" rx="3" fill="${C.navy}" opacity=".75"/><rect x="190" y="212" width="90" height="4" rx="2" fill="${C.steel}"/>
<rect x="222" y="258" width="14" height="22" rx="3" fill="${C.green}"/><rect x="244" y="258" width="14" height="18" rx="3" fill="${C.blue}"/>`),

  // Dispositifs médicaux
  diagnostic: () => frame('grey', `${shadow(236, 304, 100)}
<g fill="none" stroke-linecap="round">
<path d="M190 70c-10 30-10 72 20 92s50 30 50 70v20" stroke="${C.navy}" stroke-width="9"/>
<path d="M290 70c10 30 10 72-20 92" stroke="${C.navy}" stroke-width="9"/>
</g>
<circle cx="190" cy="66" r="8" fill="${C.steelD}"/><circle cx="290" cy="66" r="8" fill="${C.steelD}"/>
<circle cx="260" cy="270" r="30" fill="${C.steel}"/><circle cx="260" cy="270" r="22" fill="${C.steelL}"/><circle cx="260" cy="270" r="12" fill="${C.blue}"/>
<rect x="252" y="236" width="16" height="10" rx="3" fill="${C.steelD}"/>
<g transform="translate(330 150)"><rect x="-42" y="-32" width="84" height="64" rx="12" fill="${C.blue}"/><rect x="-32" y="-22" width="64" height="36" rx="5" fill="${C.navy}"/>
<path d="M-26 -4h12l5-10 8 20 6-14 4 4h15" fill="none" stroke="${C.greenL}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="-20" cy="22" r="3.5" fill="${C.white}"/><circle cx="-8" cy="22" r="3.5" fill="${C.sky}"/></g>`),

  surgery: () => frame('grey', `${shadow(240, 296, 128, 8)}
<rect x="142" y="96" width="196" height="104" rx="10" fill="${C.steelL}" stroke="${C.steelD}" stroke-width="2"/>
<rect x="156" y="110" width="168" height="76" rx="6" fill="${C.white}" opacity=".7"/>
<g stroke="${C.steel}" stroke-width="3" stroke-linecap="round"><path d="M172 126h60M172 140h96M172 154h80"/></g>
<g transform="translate(186 150) rotate(-12)"><path d="M-3 0V58M3 0V58" stroke="${C.steelXD}" stroke-width="5" stroke-linecap="round"/><circle cx="-10" cy="-8" r="10" fill="none" stroke="${C.blue}" stroke-width="6"/><circle cx="12" cy="-8" r="10" fill="none" stroke="${C.blue}" stroke-width="6"/></g>
<g transform="translate(244 150) rotate(6)"><path d="M0 -6V58" stroke="${C.steelD}" stroke-width="8" stroke-linecap="round"/><path d="M0 -6V58" stroke="${C.steelL}" stroke-width="3" stroke-linecap="round"/></g>
<g transform="translate(290 154) rotate(14)"><path d="M-3 0V58M3 0V58" stroke="${C.steelXD}" stroke-width="5" stroke-linecap="round"/><circle cx="-10" cy="-8" r="10" fill="none" stroke="${C.green}" stroke-width="6"/><circle cx="12" cy="-8" r="10" fill="none" stroke="${C.green}" stroke-width="6"/></g>
<path d="M122 192h236l-12 90a10 10 0 0 1-10 9H144a10 10 0 0 1-10-9z" fill="${C.steel}"/>
<rect x="118" y="186" width="244" height="14" rx="5" fill="${C.steelD}"/>
<path d="M140 212h200" stroke="${C.steelL}" stroke-width="3" stroke-linecap="round" opacity=".8"/>
<rect x="200" y="226" width="80" height="44" rx="6" fill="${C.white}"/>
<rect x="214" y="236" width="24" height="24" rx="4" fill="${C.green}"/><path d="M220 248h12M226 242v12" stroke="${C.white}" stroke-width="3.5" stroke-linecap="round"/>
<rect x="246" y="240" width="24" height="5" rx="2.5" fill="${C.navy}" opacity=".7"/><rect x="246" y="251" width="18" height="4" rx="2" fill="${C.steel}"/>
<g fill="${C.steelXD}"><rect x="138" y="232" width="10" height="26" rx="4"/><rect x="332" y="232" width="10" height="26" rx="4"/></g>`),

  'surg-cut': () => frame('grey', `${shadow(240, 300, 110)}
<g transform="translate(196 186) rotate(-38)">
<rect x="-8" y="0" width="16" height="118" rx="6" fill="${C.steel}"/><rect x="-8" y="0" width="5" height="118" rx="2.5" fill="${C.steelL}"/>
<g fill="${C.steelD}">${[20, 34, 48, 62].map((y) => `<rect x="-8" y="${y}" width="16" height="3" rx="1.5"/>`).join('')}</g>
<path d="M-6 0h12l2-18c0-20-8-46-16-62-2 20-4 40-4 58z" fill="${C.steelL}" stroke="${C.steelD}" stroke-width="2"/></g>
<g transform="translate(286 196) rotate(28)">
<path d="M-3 -6L-10 -130c4 2 12 8 14 20L6 -6z" fill="${C.steelL}" stroke="${C.steelD}" stroke-width="2"/>
<path d="M3 -6L10 -130c-4 2-12 8-14 20L-6 -6z" fill="${C.steel}" stroke="${C.steelD}" stroke-width="2" transform="rotate(-14)"/>
<circle r="6" fill="${C.steelXD}"/>
<path d="M-4 4c-14 18-36 22-36 44 0 14 12 20 22 18s16-14 16-26c0-14 2-26-2-36z" fill="none" stroke="${C.blue}" stroke-width="9"/>
<path d="M4 4c14 18 36 22 36 44 0 14-12 20-22 18S2 52 2 40C2 26 0 14 4 4z" fill="none" stroke="${C.green}" stroke-width="9"/></g>`),

  'surg-grasp': () => frame('grey', `${shadow(240, 300, 110)}
<g transform="translate(186 180) rotate(-24)">
<path d="M-5 -110L-12 70c0 6 5 8 8 6L0 -100 4 76c3 2 8 0 8-6L5 -110c0-6-10-6-10 0z" fill="${C.steelL}" stroke="${C.steelD}" stroke-width="2"/>
<g stroke="${C.steelD}" stroke-width="2"><path d="M-9 30h5M-10 40h5M-10 50h5M5 30h5M6 40h5M6 50h5"/></g></g>
<g transform="translate(286 184) rotate(22)">
<path d="M-4 -126L-2 -6M4 -126L2 -6" stroke="${C.steelD}" stroke-width="7" stroke-linecap="round"/>
<path d="M-4 -126L-2 -6M4 -126L2 -6" stroke="${C.steelL}" stroke-width="3" stroke-linecap="round"/>
<circle r="6" fill="${C.steelXD}"/>
<path d="M-2 4L-18 46M2 4L18 46" stroke="${C.steelD}" stroke-width="7" stroke-linecap="round"/>
<circle cx="-24" cy="62" r="16" fill="none" stroke="${C.blue}" stroke-width="8"/><circle cx="24" cy="62" r="16" fill="none" stroke="${C.green}" stroke-width="8"/>
<g fill="${C.steelXD}"><rect x="-10" y="18" width="8" height="5" rx="1"/><rect x="2" y="18" width="8" height="5" rx="1"/></g></g>`),

  'surg-suture': () => frame('grey', `${shadow(236, 300, 108)}
<g transform="translate(206 190) rotate(-30)">
<path d="M-5 -110L-3 -8M5 -110L3 -8" stroke="${C.steelD}" stroke-width="8" stroke-linecap="round"/>
<path d="M-5 -110L-3 -8M5 -110L3 -8" stroke="${C.steelL}" stroke-width="3" stroke-linecap="round"/>
<rect x="-8" y="-124" width="16" height="18" rx="4" fill="${C.steelXD}"/>
<circle r="6" fill="${C.steelXD}"/>
<path d="M-2 4L-16 48M2 4L16 48" stroke="${C.steelD}" stroke-width="7" stroke-linecap="round"/>
<circle cx="-22" cy="64" r="16" fill="none" stroke="${C.blue}" stroke-width="8"/><circle cx="22" cy="64" r="16" fill="none" stroke="${C.blue}" stroke-width="8"/></g>
<path d="M118 92a26 26 0 0 1 50-6" fill="none" stroke="${C.steelXD}" stroke-width="5" stroke-linecap="round"/>
<path d="M118 92C98 150 176 156 204 196S288 268 318 214" fill="none" stroke="${C.green}" stroke-width="4" stroke-linecap="round"/>`),

  'surg-expose': () => frame('grey', `${shadow(236, 302, 110)}
<g transform="translate(250 180) rotate(-18)">
<rect x="-10" y="-96" width="20" height="150" rx="8" fill="${C.steel}"/><rect x="-10" y="-96" width="6" height="150" rx="3" fill="${C.steelL}"/>
<g fill="${C.steelD}">${[-70, -56, -42, -28].map((y) => `<rect x="-10" y="${y}" width="20" height="4" rx="2"/>`).join('')}</g>
<path d="M-8 52h16v18c0 8 6 12 14 12h40v16H18C2 98-8 88-8 72z" fill="${C.steelL}" stroke="${C.steelD}" stroke-width="2"/>
<g fill="${C.steelL}" stroke="${C.steelD}" stroke-width="2"><path d="M70 82h14v38c0 4-6 4-6 0v-24h-8z"/><path d="M50 82h14v38c0 4-6 4-6 0v-24h-8z"/><path d="M30 82h14v38c0 4-6 4-6 0v-24h-8z"/></g>
<rect x="-14" y="-110" width="28" height="22" rx="8" fill="${C.blue}"/></g>
<g transform="translate(166 214)"><circle r="26" fill="${C.green}"/><path d="M-10 0h20M0-10v20" stroke="${C.white}" stroke-width="5" stroke-linecap="round"/></g>`),

  sterilisation: () => frame('grey', `${shadow(240, 304, 120)}
<g transform="translate(206 296)">
<rect x="-62" y="-150" width="124" height="150" rx="10" fill="${C.steel}"/>
<rect x="-62" y="-150" width="124" height="150" rx="10" fill="none" stroke="${C.steelD}" stroke-width="2"/>
<g fill="${C.steelD}" opacity=".7">${[-120, -96, -72, -48].map((y) => `<rect x="-46" y="${y}" width="92" height="6" rx="3"/>`).join('')}</g>
<rect x="-70" y="-166" width="140" height="22" rx="8" fill="${C.steelL}" stroke="${C.steelD}" stroke-width="2"/>
<rect x="-20" y="-176" width="40" height="12" rx="5" fill="${C.steelXD}"/>
<rect x="-30" y="-36" width="60" height="22" rx="4" fill="${C.white}"/><rect x="-24" y="-30" width="48" height="10" rx="2" fill="${C.green}"/>
<rect x="-74" y="-112" width="12" height="40" rx="4" fill="${C.steelD}"/><rect x="62" y="-112" width="12" height="40" rx="4" fill="${C.steelD}"/></g>
<g transform="translate(320 268)"><path d="M-46 -8c0-22 20-30 46-30s46 8 46 30c0 18-16 26-30 18-8-4-24-4-32 0-14 8-30 0-30-18z" fill="${C.steelL}" stroke="${C.steelD}" stroke-width="2.5"/>
<path d="M-36 -10c0-12 16-18 36-18s36 6 36 18" fill="none" stroke="${C.white}" stroke-width="4" stroke-linecap="round" opacity=".9"/></g>`),

  furniture: () => frame('grey', `${shadow(240, 300, 130, 8)}
<g fill="none" stroke="${C.steelD}" stroke-width="7" stroke-linecap="round"><path d="M136 120v148M344 160v108M136 210h208"/></g>
<rect x="128" y="104" width="16" height="64" rx="6" fill="${C.blue}"/>
<path d="M146 186h186a12 12 0 0 1 12 12v12H146z" fill="${C.blueL}"/>
<rect x="146" y="176" width="198" height="16" rx="6" fill="${C.white}" stroke="${C.blueL}" stroke-width="2"/>
<rect x="152" y="160" width="54" height="22" rx="10" fill="${C.white}" stroke="${C.blueL}" stroke-width="2"/>
<rect x="214" y="164" width="124" height="16" rx="6" fill="${C.green}"/>
<path d="M200 230h108" stroke="${C.steelD}" stroke-width="5" stroke-linecap="round"/>
<g fill="${C.navy}"><circle cx="146" cy="276" r="11"/><circle cx="334" cy="276" r="11"/></g>
<g fill="${C.steelL}"><circle cx="146" cy="276" r="4"/><circle cx="334" cy="276" r="4"/></g>
<g transform="translate(330 98)"><rect x="-4" y="0" width="8" height="70" rx="4" fill="${C.steelD}"/><rect x="-22" y="-8" width="44" height="8" rx="4" fill="${C.steelXD}"/><path d="M-20 0h18v28c0 6-4 10-9 10s-9-4-9-10z" fill="${C.sky}" opacity=".7"/></g>`),

  consumables: () => frame('grey', `${shadow(240, 302, 116)}
<g transform="translate(200 262) rotate(-10)" fill="${C.sky}">
<rect x="-17" y="-178" width="16" height="74" rx="8"/><rect x="1" y="-186" width="16" height="82" rx="8"/><rect x="19" y="-178" width="16" height="74" rx="8"/><rect x="-35" y="-164" width="16" height="62" rx="8"/>
<rect x="-47" y="-124" width="18" height="64" rx="9" transform="rotate(-34 -38 -62)"/>
<rect x="-38" y="-122" width="74" height="96" rx="22"/>
<g stroke="${C.blue}" stroke-width="2" opacity=".35" fill="none"><path d="M-9 -128v-18M9 -134v-22M27 -128v-18M-27 -116v-14"/></g>
<rect x="-42" y="-34" width="82" height="40" rx="8" fill="${C.blue}"/>
<g stroke="${C.blueD}" stroke-width="2.5"><path d="M-30 -30v32M-16 -30v32M-2 -30v32M12 -30v32M26 -30v32"/></g></g>
<g transform="translate(316 236)"><rect x="-56" y="-20" width="112" height="40" rx="20" fill="none" stroke="${C.green}" stroke-width="10"/>
<rect x="-30" y="-16" width="60" height="32" rx="6" fill="${C.white}" stroke="${C.greenL}" stroke-width="2"/>
<rect x="-22" y="-8" width="36" height="5" rx="2.5" fill="${C.navy}" opacity=".75"/><rect x="-22" y="2" width="44" height="4" rx="2" fill="${C.steel}"/></g>
<g transform="translate(318 122)"><rect x="-38" y="-30" width="76" height="60" rx="6" fill="${C.white}" stroke="${C.blueL}" stroke-width="2"/>
<g stroke="${C.blueL}" stroke-width="2"><path d="M-38 -10h76M-38 10h76M-12 -30v60M12 -30v60"/></g></g>`),

  // Santé animale
  'vet-food-dog': () => frame('green', `${shadow(234, 306, 118)}
<g transform="translate(208 298)">
<path d="M-62 0h124l-8-180c-30-10-78-10-108 0z" fill="${C.green}"/>
<path d="M-54 -180c30-10 78-10 108 0l2 18c-32-10-80-10-112 0z" fill="${C.greenD}"/>
<rect x="-44" y="-140" width="88" height="96" rx="10" fill="${C.white}"/>
${paw(0, -96, 1.5, C.green)}
<rect x="-30" y="-58" width="60" height="6" rx="3" fill="${C.navy}" opacity=".75"/>
<rect x="-54" y="-30" width="108" height="10" fill="${C.greenD}" opacity=".5"/></g>
<g transform="translate(320 290)"><path d="M-54 -26h108l-10 26h-88z" fill="${C.blue}"/><rect x="-60" y="-32" width="120" height="10" rx="5" fill="${C.blueD}"/>
<g fill="${C.kibble}">${[[-36, -38], [-18, -44], [0, -40], [18, -46], [36, -38], [-26, -50], [8, -54], [26, -52]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="7"/>`).join('')}</g>
<g fill="${C.kibbleD}">${[[-18, -44], [18, -46], [8, -54]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="3" ry="2.5"/>`).join('')}</g></g>`),

  'vet-food-cat': () => frame('green', `${shadow(240, 306, 118)}
<g transform="translate(202 298)">
<path d="M-56 0h112v-160c0-10-8-16-18-16h-76c-10 0-18 6-18 16z" fill="${C.blue}"/>
<path d="M-56 -150h112v12H-56z" fill="${C.blueD}"/>
<rect x="-42" y="-128" width="84" height="88" rx="10" fill="${C.white}"/>
<g transform="translate(0 -86)" fill="${C.blue}"><path d="M-22 -2c0-14 10-22 22-22s22 8 22 22c0 14-10 22-22 22s-22-8-22-22z"/><path d="M-20 -14l-2-22 16 12zM20 -14l2-22-16 12z"/></g>
<g transform="translate(0 -88)" fill="${C.white}"><circle cx="-8" cy="0" r="3.5"/><circle cx="8" cy="0" r="3.5"/></g>
<rect x="-28" y="-30" width="56" height="6" rx="3" fill="${C.navy}" opacity=".75"/></g>
<g transform="translate(318 290)"><path d="M-52 -26h104l-10 26h-84z" fill="${C.green}"/><rect x="-58" y="-32" width="116" height="10" rx="5" fill="${C.greenD}"/>
<g transform="translate(0 -52)"><path d="M-30 0c14-16 36-16 48 0-12 16-34 16-48 0z" fill="${C.sky}"/><path d="M18 0l14-12v24z" fill="${C.sky}"/><circle cx="-18" cy="-2" r="3" fill="${C.navy}"/></g></g>`),

  'vet-parasite': () => frame('green', `${shadow(236, 304, 100)}
<g transform="translate(300 178)"><path d="M0 -70l58 22v42c0 42-26 70-58 84-32-14-58-42-58-84v-42z" fill="${C.green}"/>
<path d="M0 -56l44 17v33c0 33-20 56-44 67z" fill="${C.greenD}" opacity=".25"/>
${paw(0, 4, 1.7, C.white)}</g>
<g transform="translate(184 246) rotate(-28)"><rect x="-14" y="-118" width="28" height="30" rx="8" fill="${C.blue}"/>
<path d="M-12 -90h24v70c0 6-4 10-8 14l-4 26-4-26c-4-4-8-8-8-14z" fill="${C.glass}" stroke="${C.blueL}" stroke-width="2"/>
<path d="M-10 -56h20v36c0 4-4 8-6 10h-8c-2-2-6-6-6-10z" fill="${C.sky}" opacity=".85"/></g>
<path d="M222 268c0 8-6 13-12 13s-12-5-12-13c0-8 12-22 12-22s12 14 12 22z" fill="${C.sky}"/>`),

  'vet-care': () => frame('green', `${shadow(236, 304, 104)}
<g transform="translate(206 298)">
<rect x="-50" y="-150" width="100" height="150" rx="14" fill="${C.white}" stroke="${C.blueL}" stroke-width="2.5"/>
<rect x="-42" y="-182" width="84" height="38" rx="8" fill="${C.green}"/>
<g stroke="${C.greenD}" stroke-width="3" opacity=".5"><path d="M-30 -178v30M-18 -178v30M-6 -178v30M6 -178v30M18 -178v30M30 -178v30"/></g>
<rect x="-50" y="-126" width="100" height="84" fill="${C.greenXL}"/>
${paw(0, -86, 1.5, C.green)}
<rect x="-30" y="-30" width="60" height="6" rx="3" fill="${C.navy}" opacity=".75"/>
<rect x="-40" y="-146" width="7" height="96" rx="3.5" fill="${C.white}"/></g>
<g transform="translate(318 270)"><circle cx="-14" cy="0" r="20" fill="${C.blue}"/><path d="M-28 0h28" stroke="${C.white}" stroke-width="3" opacity=".7"/>
<circle cx="24" cy="10" r="16" fill="${C.white}" stroke="${C.blueL}" stroke-width="2"/><path d="M12 10h24" stroke="${C.blueL}" stroke-width="3"/>
<g transform="translate(14 -40) rotate(30)"><rect x="-26" y="-11" width="52" height="22" rx="11" fill="${C.sky}"/><path d="M0 -11h15a11 11 0 0 1 0 22H0z" fill="${C.white}"/></g></g>
${plusBadge(318, 112, 22, C.blue)}`),
};

for (const [id, fn] of Object.entries(art)) fs.writeFileSync(path.join(out, `${id}.svg`), fn());
console.log(`${Object.keys(art).length} illustrations → public/media/categories/`);
