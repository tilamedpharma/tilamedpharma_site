// Remplace le bloc chiffres par une grille de cartes homogènes, ajoute les étiquettes traduites et le CSS.
import fs from 'node:fs';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

// 1) Gabarit
const f = 'src/components/home/HomePage.astro';
let h = fs.readFileSync(f, 'utf8');
const a = h.indexOf('      <div class="cap" data-reveal>');
const b = h.indexOf('      <div class="kpi__duo">');
if (a < 0 || b < 0) throw new Error('ancres gabarit');
h = h.slice(0, a) + fs.readFileSync('tools/stats-block.txt', 'utf8') + h.slice(b);
fs.writeFileSync(f, h);

// 2) Étiquettes traduites
const T = {
  fr: ['Site industriel', 'Expérience', 'Couverture'], en: ['Industrial site', 'Experience', 'Coverage'],
  es: ['Sitio industrial', 'Experiencia', 'Cobertura'], pt: ['Local industrial', 'Experiência', 'Cobertura'],
  it: ['Sito industriale', 'Esperienza', 'Copertura'], zh: ['工业用地', '行业经验', '覆盖范围'], ar: ['الموقع الصناعي', 'الخبرة', 'التغطية'],
};
for (const [lang, [site, exp, cov]] of Object.entries(T)) {
  const file = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(file, 'utf8');
  if (!s.includes('    tags: {')) {
    if (!s.includes('    jobs: {')) throw new Error(lang + ' ancre jobs');
    s = s.replace('    jobs: {', `    tags: { site: ${q(site)}, experience: ${q(exp)}, coverage: ${q(cov)} },\n    jobs: {`);
    fs.writeFileSync(file, s);
  }
}

// 3) CSS : retire les anciens styles cap/fig, ajoute la grille .stats
const cf = 'src/styles/global.css';
let c = fs.readFileSync(cf, 'utf8');
c = c.split('\n').filter((l) => !/^\s*(\[dir='rtl'\] )?\.(cap|cap__\w+|fig|fig--\w+|fig__\w+|figs__grid)[\s.:,{+]/.test(l) && !/^\s*\.fig(--jobs)? \+ \.fig/.test(l) && !/^\s*\.fig:nth-child/.test(l) && !/^\s*\.cap__val--svp/.test(l) && !/\/\* Capacité de production LVP \*\//.test(l)).join('\n');
const css = `/* Grille de chiffres homogène */
.stats { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; margin-bottom: 16px; }
.stat { display: flex; flex-direction: column; grid-column: span 2; padding: 28px 30px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); transition: border-color .35s, box-shadow .35s; }
.stat:hover { border-color: transparent; box-shadow: var(--shadow-lg); }
.stat--cap { grid-column: span 4; }
.stat--jobs { grid-column: span 2; background: var(--blue-50); border-color: var(--blue-50); }
.stat__tag { display: inline-flex; align-items: center; gap: 8px; align-self: flex-start; font-family: var(--font-head); font-weight: 700; font-size: .75rem; letter-spacing: .14em; text-transform: uppercase; color: var(--green-deep); }
.stat__tag .icon { color: var(--blue); }
.stat__num { display: flex; align-items: baseline; gap: 8px; margin-top: 22px; font-family: var(--font-head); font-weight: 800; font-size: clamp(2.6rem, 1.9rem + 2.2vw, 3.8rem); line-height: 1; letter-spacing: -.03em; color: var(--navy); font-variant-numeric: tabular-nums; white-space: nowrap; }
.stat__num small { font-size: .38em; font-weight: 700; letter-spacing: 0; color: var(--blue); }
.stat__label { margin-top: 12px; font-size: 1rem; line-height: 1.45; color: var(--muted); }
.stat__pair { display: flex; align-items: center; gap: 28px; margin-top: 4px; }
.stat__sub { flex: 1; }
.stat__sub .stat__num { margin-top: 12px; }
.stat__code { display: inline-block; margin-top: 18px; padding: 3px 9px; border-radius: 4px; background: var(--blue); color: #fff; font-family: var(--font-head); font-weight: 800; font-size: .75rem; letter-spacing: .12em; }
.stat__sub--svp .stat__code { background: var(--green); }
.stat__sub--svp .stat__num small { color: var(--green-deep); }
.stat__plus { flex: none; display: grid; place-items: center; width: 44px; height: 44px; margin-top: 30px; border-radius: 50%; background: var(--mist); color: var(--green); font-family: var(--font-head); font-weight: 800; font-size: 1.5rem; }
.stat--jobs .stat__num { color: var(--blue); }
.stat--jobs .stat__label { color: var(--navy); font-weight: 700; }
.stat__facts { display: grid; gap: 6px; margin-top: 14px; }
.stat__facts li { display: flex; align-items: center; gap: 8px; font-size: .9375rem; color: var(--text); }
.stat__facts .icon { color: var(--green); }
.stat__cta { margin-top: auto; padding-top: 16px; align-self: flex-start; }
.kpi { margin-top: 56px; }
`;
if (!c.includes('.kpi__duo { display: grid;')) throw new Error('ancre css');
c = c.replace(/\.kpi \{[^\n]*\n/, '');
c = c.replace('.kpi__duo { display: grid;', css + '.kpi__duo { display: grid;');
// Responsive
c = c.replace('  .kpi__duo { grid-template-columns: 1fr; }', '  .kpi__duo { grid-template-columns: 1fr; }\n  .stats { grid-template-columns: 1fr 1fr; }\n  .stat, .stat--jobs { grid-column: span 1; }\n  .stat--cap { grid-column: 1 / -1; }');
c = c.replace('  .kpi__card { padding: 24px; gap: 16px; }', '  .kpi__card { padding: 24px; gap: 16px; }\n  .stats { grid-template-columns: 1fr; }\n  .stat, .stat--jobs, .stat--cap { grid-column: auto; padding: 24px; }\n  .stat__pair { gap: 14px; }\n  .stat__plus { width: 36px; height: 36px; font-size: 1.2rem; }');
fs.writeFileSync(cf, c);
console.log('OK', /\.cap__|\.fig__|figs__grid/.test(c) ? '(restes anciens styles)' : 'propre');
