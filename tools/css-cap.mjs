import fs from 'node:fs';
const f = 'src/styles/global.css';
let c = fs.readFileSync(f, 'utf8');
const rep = (a, b) => { if (!c.includes(a)) throw new Error('introuvable : ' + a.slice(0, 70)); c = c.replace(a, b); };
rep('.kpi__duo { display: grid;', `/* Capacité de production LVP */
.cap { display: grid; grid-template-columns: minmax(260px, .8fr) 1.2fr; gap: 24px 56px; align-items: center; padding-block: 40px; border-bottom: 1px solid var(--line); }
.cap__head { display: flex; align-items: flex-start; gap: 18px; }
.cap__tag { flex: none; display: grid; place-items: center; width: 64px; height: 64px; border-radius: var(--radius); background: var(--navy); color: #fff; font-family: var(--font-head); font-weight: 800; font-size: 1.05rem; letter-spacing: .06em; }
.cap__title { font-family: var(--font-head); font-weight: 800; font-size: 1.35rem; color: var(--navy); line-height: 1.2; }
.cap__sub { margin-top: 6px; font-size: 1rem; color: var(--muted); line-height: 1.45; }
.cap__vals { display: flex; align-items: center; gap: 28px; }
.cap__val { flex: 1; }
.cap__num { display: flex; align-items: baseline; gap: 10px; font-family: var(--font-head); font-weight: 800; font-size: clamp(3rem, 2.2rem + 3vw, 5.2rem); line-height: 1; letter-spacing: -.03em; color: var(--navy); font-variant-numeric: tabular-nums; }
.cap__num small { font-size: .32em; font-weight: 700; letter-spacing: 0; color: var(--blue); }
.cap__val--max .cap__num { color: var(--blue); }
.cap__val--max .cap__num small { color: var(--green-deep); }
.cap__label { margin-top: 10px; font-size: 1rem; color: var(--muted); max-width: 26ch; }
.cap__arrow { flex: 0 0 120px; display: flex; align-items: center; color: var(--green); }
.cap__arrow i { flex: 1; height: 3px; background: linear-gradient(90deg, var(--line), var(--green)); border-radius: 2px; }
[dir='rtl'] .cap__arrow i { background: linear-gradient(270deg, var(--line), var(--green)); }
.kpi__duo { display: grid;`);
rep('  .kpi__duo { grid-template-columns: 1fr; }', '  .kpi__duo { grid-template-columns: 1fr; }\n  .cap { grid-template-columns: 1fr; }');
rep('  .kpi__card { padding: 24px; gap: 16px; }', '  .kpi__card { padding: 24px; gap: 16px; }\n  .cap__vals { gap: 14px; }\n  .cap__arrow { flex-basis: 44px; }\n  .cap__arrow i { display: none; }');
fs.writeFileSync(f, c);
console.log('CSS CAP OK');
