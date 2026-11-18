import fs from 'node:fs';
const f = 'src/styles/global.css';
let c = fs.readFileSync(f, 'utf8');
const rep = (a, b) => { if (!c.includes(a)) throw new Error('introuvable : ' + a.slice(0, 70)); c = c.replace(a, b); };
rep('.figs__grid { display: grid; grid-template-columns: repeat(5, 1fr);', '.figs__grid { display: grid; grid-template-columns: repeat(6, 1fr);');
rep('.fig--green .fig__num { white-space: nowrap; color: var(--green-deep);', `.fig--word .fig__num { padding-top: .55em; }
.fig--incl .fig__num { color: var(--blue); }
.fig--incl .fig__leaf { color: var(--blue); }
.fig--green .fig__num { white-space: nowrap; color: var(--green-deep);`);
rep('.green__cta { margin-top: 26px; color: var(--green-deep); }', `.green__cta { margin-top: 26px; color: var(--green-deep); }
.green--incl { background: var(--blue-50); margin-top: 24px; }
.green--incl .green__inset { border-color: var(--blue-50); inset-inline-end: auto; inset-inline-start: -24px; }
.green--incl .green__badge { background: var(--blue); }
.green--incl .green__icon { color: var(--blue); }
.green--incl .green__items li:first-child .green__icon { background: var(--blue); color: #fff; }
.green--incl .green__cta { color: var(--blue); }`);
rep('.comp__std { display: grid; grid-template-columns: repeat(3, 1fr);', '.comp__std { display: grid; grid-template-columns: repeat(4, 1fr);');
rep('  .green__inset { inset-inline-end: 12px; }', `  .green__inset { inset-inline-end: 12px; }
  .green--incl .green__inset { inset-inline-start: auto; inset-inline-end: 12px; }
  .green--incl .green__media { order: -1; }
  .comp__std { grid-template-columns: 1fr 1fr; }`);
// Bandeau du hero : 4 preuves → un peu plus compact
rep('.hero__proofs { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 34px;', '.hero__proofs { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 28px;');
fs.writeFileSync(f, c);
console.log('CSS OK');
