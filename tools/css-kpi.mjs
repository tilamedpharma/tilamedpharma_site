import fs from 'node:fs';
const f = 'src/styles/global.css';
let c = fs.readFileSync(f, 'utf8');
const rep = (a, b) => { if (!c.includes(a)) throw new Error('introuvable : ' + a.slice(0, 70)); c = c.replace(a, b); };

// Grille des chiffres : 4 colonnes alignées, sans les anciennes variantes « mot »
rep('.figs__grid { display: grid; grid-template-columns: repeat(6, 1fr); margin-top: 56px; padding-block: 36px; border-block: 1px solid var(--line); }',
  '.kpi { margin-top: 56px; border-top: 1px solid var(--line); }\n.figs__grid { display: grid; grid-template-columns: repeat(4, 1fr); padding-block: 40px; }');
rep('.fig { position: relative; padding: 8px 20px; border-inline-start: 1px solid var(--line); }',
  '.fig { position: relative; padding: 4px 32px; border-inline-start: 1px solid var(--line); }');
rep('--fs-num: clamp(2.2rem, 1.5rem + 1.9vw, 3.3rem);', '--fs-num: clamp(2.6rem, 1.9rem + 2.4vw, 4rem);');
c = c.replace(/\.fig--word[^\n]*\n/g, '').replace(/\.fig--incl[^\n]*\n/g, '').replace(/\.fig--green[^\n]*\n/g, '').replace(/\.fig__leaf \{[^\n]*\n/g, '');
c = c.replace(/  \.fig__leaf \{[^\n]*\n/g, '');

// Bandeau duo : bleu (≈ 65 %) + vert (≈ 35 %), aplats sans dégradé
rep('.green { display: grid;', `.kpi__duo { display: grid; grid-template-columns: 65fr 35fr; border-radius: var(--radius-lg); overflow: hidden; }
.kpi__card { position: relative; display: flex; align-items: center; gap: 22px; padding: 30px 34px; color: #fff; transition: background .35s var(--ease); }
.kpi__card--blue { background: var(--blue); }
.kpi__card--blue:hover { background: var(--blue-600); }
.kpi__card--green { background: var(--green); }
.kpi__card--green:hover { background: var(--green-600); }
.kpi__icon { flex: none; display: grid; place-items: center; width: 56px; height: 56px; border-radius: var(--radius); border: 1.5px solid rgba(255, 255, 255, .55); }
.kpi__text { display: flex; align-items: center; gap: 8px 22px; flex-wrap: wrap; flex: 1; }
.kpi__big { display: inline-flex; align-items: baseline; gap: 8px; font-family: var(--font-head); font-weight: 800; font-size: clamp(2.2rem, 1.7rem + 1.6vw, 3.1rem); line-height: 1; letter-spacing: -.02em; white-space: nowrap; }
.kpi__big small { font-size: .42em; font-weight: 700; letter-spacing: 0; }
.kpi__label { flex: 1 1 220px; font-size: 1.0625rem; line-height: 1.4; color: rgba(255, 255, 255, .92); }
.kpi__arrow { flex: none; opacity: .7; transition: transform .35s var(--ease), opacity .35s; }
.kpi__card:hover .kpi__arrow { opacity: 1; transform: translateX(4px); }
[dir='rtl'] .kpi__card:hover .kpi__arrow { transform: scaleX(-1) translateX(4px); }
.green { display: grid;`);

// Responsive
rep('  .figs__grid { grid-template-columns: repeat(3, 1fr); gap: 36px 0; }', '  .figs__grid { grid-template-columns: repeat(2, 1fr); gap: 36px 0; }\n  .fig:nth-child(3) { border-inline-start: 0; padding-inline-start: 0; }\n  .kpi__duo { grid-template-columns: 1fr; }');
rep('  .fig:nth-child(4) { border-inline-start: 0; padding-inline-start: 0; }\n', '');
rep('  .fig:last-child { grid-column: span 2; }\n', '  .kpi__card { padding: 24px; gap: 16px; }\n  .kpi__icon { width: 46px; height: 46px; }\n');
fs.writeFileSync(f, c);
console.log('CSS KPI OK');
