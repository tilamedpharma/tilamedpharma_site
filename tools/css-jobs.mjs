import fs from 'node:fs';
const f = 'src/styles/global.css';
let c = fs.readFileSync(f, 'utf8');
const rep = (a, b) => { if (!c.includes(a)) throw new Error('introuvable : ' + a.slice(0, 70)); c = c.replace(a, b); };
rep('.figs__grid { display: grid; grid-template-columns: repeat(4, 1fr); padding-block: 40px; }',
  `.figs__grid { display: grid; grid-template-columns: 1.7fr repeat(3, 1fr); align-items: center; padding-block: 40px; }
.fig--jobs { padding: 30px 32px !important; border: 0 !important; border-radius: var(--radius-lg); background: var(--blue-50); margin-inline-end: 8px; }
.fig--jobs + .fig { border-inline-start: 0; }
.fig__badge { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 14px; padding: 6px 12px; border-radius: 99px; background: var(--blue); color: #fff; font-family: var(--font-head); font-weight: 700; font-size: .75rem; letter-spacing: .12em; text-transform: uppercase; }
.fig--jobs .fig__num { font-size: clamp(3.4rem, 2.4rem + 3.6vw, 6rem); color: var(--blue); }
.fig--jobs .fig__label { max-width: none; font-size: 1.125rem; color: var(--navy); font-weight: 700; }
.fig__facts { display: flex; flex-wrap: wrap; gap: 8px 18px; margin-top: 14px; }
.fig__facts li { display: inline-flex; align-items: center; gap: 6px; font-size: .9375rem; color: var(--text); }
.fig__facts .icon { color: var(--green); }
.fig__cta { margin-top: 16px; }`);
rep('  .figs__grid { grid-template-columns: repeat(2, 1fr); gap: 36px 0; }\n  .fig:nth-child(3) { border-inline-start: 0; padding-inline-start: 0; }',
  '  .figs__grid { grid-template-columns: repeat(3, 1fr); gap: 32px 0; }\n  .fig--jobs { grid-column: 1 / -1; margin-inline-end: 0; }\n  .fig:nth-child(2) { border-inline-start: 0; padding-inline-start: 0; }');
rep('  .figs__grid { grid-template-columns: 1fr 1fr; }', '  .figs__grid { grid-template-columns: 1fr 1fr; }\n  .fig--jobs { padding: 24px !important; }');
fs.writeFileSync(f, c);
console.log('CSS JOBS OK');
