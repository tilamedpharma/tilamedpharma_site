// Visuels « étiquette » générés pour chaque produit (SVG en ligne), en attendant les vraies photos.
// Le contenant dépend du type de produit (flacon de perfusion, ampoules, flacon d'antibiotique, flacon buvable,
// sac de croquettes, boîte de comprimés) ; l'étiquette porte le nom et le dosage du produit.
// Les produits distribués (vétérinaires) n'affichent pas la marque TILAMED. Dispositifs médicaux : pas d'étiquette
// (on garde l'illustration de la catégorie).

export type PackInput = {
  group: string; cat: string; name: string; formats: string[]; route?: string; line?: string; pack?: string; made: boolean;
  packLabel?: string; ampLabel?: string;
};

const BLUE = '#1C64BA';
const GREEN = '#39A845';
const NAVY = '#12305A';
const SKY = '#4F9BE0';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const r1 = (n: number) => Math.round(n * 10) / 10;

function wrap(s: string, max: number, maxLines = 3): string[] {
  const words = s.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    const next = cur ? cur + ' ' + w : w;
    if (next.length > max && cur) { lines.push(cur); cur = w; } else { cur = next; }
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/\s*\S*$/, '') + '…';
    return kept;
  }
  return lines;
}

/** « Chlorure de sodium 0,9 % » → { name: « Chlorure de sodium », dose: « 0,9 % » }. */
export function splitName(name: string, formats: string[]): { name: string; dose: string } {
  const m = name.match(/^(.*?)\s(\d[\d,.]*\s?(?:%|mg\/ml|mg|g|UI|µg|ml)(?:\b|\s|\/|$).*)$/);
  if (m && m[1].length > 2 && !/[A-Za-zÀ-ÿ]{4,}/.test(m[2])) return { name: m[1], dose: m[2] };
  return { name, dose: formats[0] ?? '' };
}

type Label = { x: number; y: number; w: number; h: number; accent: string; brand: boolean; name: string; dose: string; sub?: string; fs?: number };

function label(l: Label): string {
  const fs0 = l.fs ?? (l.w >= 110 ? 11 : l.w >= 80 ? 9 : 7.5);
  // Un mot trop long pour la largeur de l'étiquette (« Métronidazole ») : on réduit le corps du texte.
  const longest = Math.max(...l.name.split(/\s+/).map((w) => w.length));
  const fs = Math.min(fs0, (l.w - 12) / (longest * 0.7));
  const band = Math.max(8, fs * 1.55);
  const per = Math.max(6, Math.floor((l.w - 12) / (fs * 0.66)));
  const lines = wrap(l.name, per, l.h > band + fs * 6 ? 3 : 2);
  let out = `<rect x="${r1(l.x)}" y="${r1(l.y)}" width="${r1(l.w)}" height="${r1(l.h)}" rx="3" fill="#fff" stroke="#DCE5F0"/>`;
  out += `<path d="M${r1(l.x)} ${r1(l.y + 3)}a3 3 0 0 1 3-3h${r1(l.w - 6)}a3 3 0 0 1 3 3v${r1(band - 3)}h-${r1(l.w)}z" fill="${l.accent}"/>`;
  if (l.brand) {
    out += `<text x="${r1(l.x + 6)}" y="${r1(l.y + band * 0.7)}" font-size="${r1(fs * 0.62)}" font-weight="800" letter-spacing="${r1(fs * 0.12)}" fill="#fff">TILAMED</text>`;
    out += `<rect x="${r1(l.x + l.w - 6 - fs * 0.9)}" y="${r1(l.y + band * 0.28)}" width="${r1(fs * 0.9)}" height="${r1(band * 0.44)}" rx="1" fill="${l.accent === GREEN ? BLUE : GREEN}"/>`;
  }
  let y = l.y + band + fs * 1.45;
  for (const ln of lines) {
    out += `<text x="${r1(l.x + 6)}" y="${r1(y)}" font-size="${fs}" font-weight="700" fill="${NAVY}">${esc(ln)}</text>`;
    y += fs * 1.22;
  }
  if (l.dose) {
    y += fs * 0.25;
    const dfs = fs * (l.dose.length > per ? 0.78 : 1.05);
    out += `<text x="${r1(l.x + 6)}" y="${r1(y)}" font-size="${r1(dfs)}" font-weight="800" fill="${l.accent}">${esc(l.dose.length > per * 1.6 ? l.dose.slice(0, Math.floor(per * 1.55)) + '…' : l.dose)}</text>`;
  }
  if (l.sub) {
    out += `<rect x="${r1(l.x + 6)}" y="${r1(l.y + l.h - fs * 1.7)}" width="${r1(l.w - 12)}" height="1" fill="#E3EAF3"/>`;
    out += `<text x="${r1(l.x + 6)}" y="${r1(l.y + l.h - fs * 0.6)}" font-size="${r1(fs * 0.72)}" font-weight="600" fill="#64748B">${esc(l.sub)}</text>`;
  }
  return out;
}

const floor = (cx: number, rx: number) => `<ellipse cx="${cx}" cy="266" rx="${rx}" ry="7" fill="${NAVY}" opacity=".10"/>`;

/** Flacon de perfusion en polypropylène, debout. */
function infusionBottle(cx: number, base: number, w: number, h: number, accent: string, lab: Omit<Label, 'x' | 'y' | 'w' | 'h' | 'accent'>): string {
  const top = base - h;
  const sh = h * 0.13;
  const nw = w * 0.34;
  let o = `<rect x="${r1(cx - w / 2)}" y="${r1(top + sh)}" width="${r1(w)}" height="${r1(h - sh)}" rx="${r1(w * 0.11)}" fill="#F7FAFD" stroke="#C6D6E8" stroke-width="1.5"/>`;
  o += `<path d="M${r1(cx - w / 2 + 5)} ${r1(top + sh + 3)}L${r1(cx - nw / 2)} ${r1(top + 6)}H${r1(cx + nw / 2)}L${r1(cx + w / 2 - 5)} ${r1(top + sh + 3)}Z" fill="#F7FAFD" stroke="#C6D6E8" stroke-width="1.5" stroke-linejoin="round"/>`;
  o += `<rect x="${r1(cx - w / 2 + 4)}" y="${r1(top + sh + h * 0.08)}" width="${r1(w - 8)}" height="${r1(h - sh - h * 0.08 - 4)}" rx="${r1(w * 0.09)}" fill="${SKY}" opacity=".10"/>`;
  o += `<rect x="${r1(cx - nw / 2 - 3)}" y="${r1(top - 10)}" width="${r1(nw + 6)}" height="17" rx="3" fill="${accent}"/>`;
  o += `<rect x="${r1(cx - nw / 2 + 1)}" y="${r1(top - 14)}" width="${r1(nw - 2)}" height="6" rx="2" fill="${accent}" opacity=".55"/>`;
  for (let i = 0; i < 5; i++) {
    const yy = top + sh + h * 0.2 + i * h * 0.1;
    o += `<rect x="${r1(cx + w / 2 - 9)}" y="${r1(yy)}" width="${i % 2 ? 3 : 5}" height="1.2" fill="#9FB6D0"/>`;
  }
  o += `<rect x="${r1(cx - w / 2 + 5)}" y="${r1(top + sh + 10)}" width="3" height="${r1(h * 0.55)}" rx="1.5" fill="#fff" opacity=".9"/>`;
  const lw = w - 22;
  const big = w >= 110;
  o += label({ x: cx - lw / 2 - 2, y: top + sh + h * 0.17, w: lw, h: h * 0.56, accent, fs: big ? 12.5 : w >= 95 ? 11 : 9.5, ...lab, sub: lab.sub && lab.sub !== lab.dose ? lab.sub : undefined });
  return o;
}

/** Boîte en perspective, la face avant sert d'étiquette. */
function box(bx: number, by: number, bw: number, bh: number, accent: string, lab: Omit<Label, 'x' | 'y' | 'w' | 'h' | 'accent'>): string {
  const dx = 26, dy = -16;
  let o = `<path d="M${bx} ${by}l${dx} ${dy}h${bw}l${-dx} ${-dy}z" fill="#EEF3F9" stroke="#D3DEEA" stroke-linejoin="round"/>`;
  o += `<path d="M${bx + bw} ${by}l${dx} ${dy}v${bh}l${-dx} ${-dy}z" fill="#DCE5EF" stroke="#D3DEEA" stroke-linejoin="round"/>`;
  o += `<path d="M${bx + bw + 8} ${by - 6}l10 -6v${bh * 0.5}l-10 6z" fill="${accent}" opacity=".35"/>`;
  o += label({ x: bx, y: by, w: bw, h: bh, accent, fs: 15, ...lab });
  o += `<rect x="${bx}" y="${by + bh - 5}" width="${bw}" height="5" fill="${accent === GREEN ? BLUE : GREEN}" opacity=".9"/>`;
  return o;
}

function ampoule(cx: number, base: number, accent: string, s = 1): string {
  const p = (dx: number, dy: number) => `${r1(cx + dx * s)} ${r1(base - dy * s)}`;
  let o = `<path d="M${p(-11, 6)}V${r1(base - 56 * s)}Q${p(-11, 64)} ${p(-4, 70)}V${r1(base - 80 * s)}Q${p(-9, 86)} ${p(-6, 94)}Q${p(-3, 100)} ${p(0, 110)}Q${p(3, 100)} ${p(6, 94)}Q${p(9, 86)} ${p(4, 80)}V${r1(base - 70 * s)}Q${p(11, 64)} ${p(11, 56)}V${r1(base - 6 * s)}Q${p(11, 0)} ${p(5, 0)}H${r1(cx - 5 * s)}Q${p(-11, 0)} ${p(-11, 6)}Z" fill="#F4F9FE" stroke="#B5CAE2" stroke-width="1.3"/>`;
  o += `<rect x="${r1(cx - 9 * s)}" y="${r1(base - 44 * s)}" width="${r1(18 * s)}" height="${r1(42 * s)}" rx="${r1(5 * s)}" fill="${SKY}" opacity=".28"/>`;
  o += `<rect x="${r1(cx - 5 * s)}" y="${r1(base - 78 * s)}" width="${r1(10 * s)}" height="${r1(3 * s)}" rx="1" fill="${accent}"/>`;
  o += `<rect x="${r1(cx - 7 * s)}" y="${r1(base - 52 * s)}" width="${r1(2.4 * s)}" height="${r1(40 * s)}" rx="1" fill="#fff"/>`;
  return o;
}

function vial(cx: number, base: number, accent: string, powder: boolean, dose: string): string {
  let o = `<rect x="${cx - 27}" y="${base - 72}" width="54" height="72" rx="7" fill="#F4F9FE" stroke="#B5CAE2" stroke-width="1.3"/>`;
  o += powder
    ? `<rect x="${cx - 24}" y="${base - 26}" width="48" height="23" rx="5" fill="#fff" stroke="#E2E9F2"/>`
    : `<rect x="${cx - 24}" y="${base - 40}" width="48" height="37" rx="5" fill="${SKY}" opacity=".25"/>`;
  o += `<rect x="${cx - 17}" y="${base - 82}" width="34" height="11" fill="#E7EDF4" stroke="#B5CAE2"/>`;
  o += `<rect x="${cx - 21}" y="${base - 98}" width="42" height="18" rx="3" fill="#AEB9C6"/>`;
  o += `<rect x="${cx - 18}" y="${base - 105}" width="36" height="9" rx="3" fill="${accent}"/>`;
  o += `<rect x="${cx - 27}" y="${base - 62}" width="54" height="30" fill="#fff" stroke="#DCE5F0"/><rect x="${cx - 27}" y="${base - 62}" width="54" height="6" fill="${accent}"/>`;
  o += `<text x="${cx}" y="${base - 42}" font-size="8" font-weight="800" text-anchor="middle" fill="${NAVY}">${esc(dose.slice(0, 11))}</text>`;
  o += `<rect x="${cx - 23}" y="${base - 68}" width="2.4" height="60" rx="1" fill="#fff"/>`;
  return o;
}

function oralBottle(cx: number, base: number, accent: string, lab: Omit<Label, 'x' | 'y' | 'w' | 'h' | 'accent'>): string {
  const w = 88, h = 150, top = base - h;
  let o = `<path d="M${cx - w / 2} ${base - 10}V${top + 46}Q${cx - w / 2} ${top + 26} ${cx - 16} ${top + 18}V${top + 6}H${cx + 16}V${top + 18}Q${cx + w / 2} ${top + 26} ${cx + w / 2} ${top + 46}V${base - 10}Q${cx + w / 2} ${base} ${cx + w / 2 - 10} ${base}H${cx - w / 2 + 10}Q${cx - w / 2} ${base} ${cx - w / 2} ${base - 10}Z" fill="#8A4B1C"/>`;
  o += `<path d="M${cx - w / 2 + 6} ${top + 50}V${base - 14}" stroke="#fff" stroke-opacity=".35" stroke-width="4" stroke-linecap="round"/>`;
  o += `<rect x="${cx - 21}" y="${top - 14}" width="42" height="24" rx="3" fill="${accent}"/>`;
  for (let i = 0; i < 7; i++) o += `<rect x="${cx - 18 + i * 6}" y="${top - 12}" width="1.6" height="20" fill="#fff" opacity=".25"/>`;
  o += label({ x: cx - w / 2 + 4, y: top + 52, w: w - 8, h: 80, accent, fs: 8.5, ...lab });
  return o;
}

function sack(cx: number, base: number, w: number, h: number, accent: string, name: string, weight: string): string {
  const top = base - h;
  let zig = '';
  const n = 10;
  for (let i = 0; i <= n; i++) zig += `L${r1(cx - w / 2 + 2 + (i * (w - 4)) / n)} ${r1(top + (i % 2 ? 0 : 5))}`;
  let o = `<path d="M${r1(cx - w / 2 + 2)} ${top + 5}${zig}L${r1(cx + w / 2 - 2)} ${top + 12}L${r1(cx + w / 2 + 4)} ${base - 12}Q${r1(cx + w / 2 + 5)} ${base} ${r1(cx + w / 2 - 8)} ${base}H${r1(cx - w / 2 + 8)}Q${r1(cx - w / 2 - 5)} ${base} ${r1(cx - w / 2 - 4)} ${base - 12}L${r1(cx - w / 2 + 2)} ${top + 12}Z" fill="${accent}"/>`;
  o += `<rect x="${r1(cx - w / 2 + 2)}" y="${top + 14}" width="${w - 4}" height="3" fill="#fff" opacity=".35"/>`;
  const lw = w - 22, ly = top + h * 0.3, lh = h * 0.52;
  o += `<rect x="${r1(cx - lw / 2)}" y="${r1(ly)}" width="${r1(lw)}" height="${r1(lh)}" rx="6" fill="#fff"/>`;
  const fs = w > 110 ? 11 : 8.5;
  o += `<circle cx="${cx}" cy="${r1(ly + fs * 2)}" r="${r1(fs * 1.25)}" fill="${accent}" opacity=".14"/>`;
  o += `<g transform="translate(${r1(cx - fs * 0.75)} ${r1(ly + fs * 1.25)}) scale(${r1(fs / 16)})" fill="${accent}"><circle cx="5" cy="4" r="2.6"/><circle cx="12" cy="2.6" r="2.6"/><circle cx="19" cy="4" r="2.6"/><circle cx="2" cy="10" r="2.4"/><path d="M12 8c4 0 8 5 8 8s-3 3-8 3-8 0-8-3 4-8 8-8z"/></g>`;
  const lines = wrap(name, Math.floor((lw - 8) / (fs * 0.64)), 2);
  let y = ly + fs * 4.4;
  for (const ln of lines) { o += `<text x="${cx}" y="${r1(y)}" font-size="${fs}" font-weight="800" text-anchor="middle" fill="${NAVY}">${esc(ln)}</text>`; y += fs * 1.2; }
  o += `<text x="${cx}" y="${r1(ly + lh - fs * 0.8)}" font-size="${r1(fs * 1.15)}" font-weight="800" text-anchor="middle" fill="${accent}">${esc(weight)}</text>`;
  return o;
}

function blister(x: number, y: number): string {
  let o = `<g transform="rotate(-10 ${x + 60} ${y + 30})"><rect x="${x}" y="${y}" width="120" height="60" rx="6" fill="#E9EEF4" stroke="#C3CFDC"/>`;
  for (let r = 0; r < 2; r++) for (let c = 0; c < 5; c++) {
    o += `<circle cx="${x + 16 + c * 22}" cy="${y + 17 + r * 26}" r="8" fill="#fff" stroke="#C3CFDC"/><circle cx="${x + 14 + c * 22}" cy="${y + 15 + r * 26}" r="2.4" fill="#fff" opacity=".9"/>`;
  }
  return o + '</g>';
}

const ml = (f: string) => { const m = f.match(/(\d+)\s?ml/i); return m ? +m[1] : 500; };
const bottleH = (v: number) => (v >= 500 ? 186 : v >= 250 ? 160 : v >= 100 ? 120 : 100);

/** Renvoie le SVG du produit, ou '' si le produit garde l'illustration de sa catégorie. */
export function packshot(p: PackInput): string {
  const { name, dose } = splitName(p.name, p.formats);
  const accent = p.group === 'nutrition' || p.cat === 'serum-special' || p.cat === 'antibiotic' || p.cat === 'vet-food-cat' ? GREEN : BLUE;
  const brand = p.made;
  let body = '';
  let bb: [number, number, number, number] = [0, 0, 400, 300];
  if (p.group === 'devices') return '';
  if (p.line === 'lvp') {
    const fm = p.formats.length ? p.formats.slice(0, 2) : ['500 ml'];
    const sameDoseInFormat = fm.length > 1 && fm.every((f) => /·/.test(f));
    if (fm.length === 1) {
      const hh = bottleH(ml(fm[0]));
      bb = [120, 262 - hh - 16, 160, hh + 24];
      body += floor(200, 92) + infusionBottle(200, 262, hh >= 150 ? 128 : 104, hh, accent, hh >= 150 ? { brand, name, dose, sub: fm[0] } : { brand, name, dose: dose === fm[0] ? dose : dose + ' · ' + fm[0] });
    } else {
      const sorted = [...fm].sort((a, b) => ml(b) - ml(a));
      const [a, b] = sorted;
      const da = sameDoseInFormat ? a.split('·')[0].trim() : dose;
      const db = sameDoseInFormat ? b.split('·')[0].trim() : dose;
      bb = [92, 62, 238, 212];
      body += floor(212, 130);
      body += infusionBottle(160, 262, 120, bottleH(ml(a)), accent, { brand, name, dose: da, sub: sameDoseInFormat ? a.split('·')[1].trim() : a });
      const hb = bottleH(ml(b));
      body += infusionBottle(272, 262, hb > 150 ? 104 : 84, hb, accent, { brand, name, dose: db, sub: sameDoseInFormat ? b.split('·')[1].trim() : b, fs: hb > 150 ? 10.5 : 9.5 });
    }
  } else if (p.line === 'svp') {
    bb = [66, 90, 304, 184];
    body += floor(215, 140) + box(142, 112, 196, 150, accent, { brand, name, dose, sub: [p.packLabel, p.route].filter(Boolean).join(' · ') });
    body += ampoule(84, 270, accent, 1.05) + ampoule(114, 270, accent, 1.05);
  } else if (p.line === 'atb' || p.line === 'cold') {
    bb = [66, 90, 304, 184];
    body += floor(215, 140) + box(150, 112, 190, 150, accent, { brand, name, dose, sub: [p.packLabel, p.route].filter(Boolean).join(' · ') });
    body += vial(100, 270, accent, p.line === 'atb', dose || p.formats[0] || '');
  } else if (p.line === 'oral') {
    bb = [66, 96, 310, 178];
    body += floor(220, 150) + box(186, 120, 160, 142, accent, { brand, name, dose: p.formats[0] ?? dose, sub: p.packLabel });
    body += oralBottle(118, 268, accent, { brand, name, dose: '' });
  } else if (p.cat === 'vet-food-dog' || p.cat === 'vet-food-cat') {
    const fm = p.formats.slice(0, 2);
    if (fm.length > 1) {
      bb = [66, 64, 262, 210];
      body += floor(205, 140) + sack(250, 264, 150, 196, accent, name, fm[1]) + sack(128, 268, 104, 140, accent, name, fm[0]);
    } else {
      bb = [110, 64, 180, 210];
      body += floor(200, 90) + sack(200, 264, 150, 196, accent, name, fm[0] ?? '');
    }
  } else if (p.group === 'vet') {
    const f = p.formats.join(' · ');
    if (/ml/i.test(f)) {
      // Liquide (shampooing, spray, solution) : flacon devant sa boîte
      bb = [66, 96, 310, 178];
      body += floor(220, 150) + box(186, 120, 160, 142, accent, { brand: false, name, dose: f, sub: '' });
      body += oralBottle(118, 268, accent, { brand: false, name, dose: '' });
    } else if (/cp/i.test(f)) {
      // Comprimés : plaquette devant la boîte, sous le texte
      bb = [24, 86, 352, 188];
      body += floor(215, 150) + box(160, 108, 186, 150, accent, { brand: false, name, dose: f, sub: '' });
      body += blister(30, 210);
    } else {
      bb = [100, 86, 232, 182];
      body += floor(230, 110) + box(120, 108, 196, 150, accent, { brand: false, name, dose: f, sub: '' });
    }
  } else {
    return '';
  }
  const pad = 14;
  let [x, y, w, h] = [bb[0] - pad, bb[1] - pad, bb[2] + pad * 2, bb[3] + pad * 2];
  if (w / h > 4 / 3) { const nh = (w * 3) / 4; y -= (nh - h) / 2; h = nh; } else { const nw = (h * 4) / 3; x -= (nw - w) / 2; w = nw; }
  return `<svg class="pk" viewBox="${r1(x)} ${r1(y)} ${r1(w)} ${r1(h)}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(p.name)}">${body}</svg>`;
}
