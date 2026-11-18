import fs from 'node:fs';
const f = 'src/styles/global.css';
let c = fs.readFileSync(f, 'utf8');
const rep = (a, b) => { if (!c.includes(a)) throw new Error('introuvable : ' + a.slice(0, 70)); c = c.replace(a, b); };
rep('.cap__tag { flex: none; display: grid; place-items: center; width: 64px; height: 64px; border-radius: var(--radius); background: var(--navy); color: #fff; font-family: var(--font-head); font-weight: 800; font-size: 1.05rem; letter-spacing: .06em; }',
  '.cap__tag { flex: none; display: grid; place-items: center; width: 64px; height: 64px; border-radius: var(--radius); background: var(--blue-50); color: var(--blue); }');
rep('.cap__val--max .cap__num { color: var(--blue); }\n.cap__val--max .cap__num small { color: var(--green-deep); }',
  `.cap__code { display: inline-block; margin-bottom: 12px; padding: 4px 10px; border-radius: 4px; background: var(--blue); color: #fff; font-family: var(--font-head); font-weight: 800; font-size: .8125rem; letter-spacing: .12em; }
.cap__val--svp .cap__code { background: var(--green); }
.cap__val--svp .cap__num small { color: var(--green-deep); }`);
c = c.replace(/\.cap__arrow \{[^\n]*\n/, '.cap__plus { flex: none; display: grid; place-items: center; width: 52px; height: 52px; border-radius: 50%; background: var(--mist); color: var(--green); font-family: var(--font-head); font-weight: 800; font-size: 1.8rem; line-height: 1; }\n');
c = c.replace(/\.cap__arrow i \{[^\n]*\n/, '').replace(/\[dir='rtl'\] \.cap__arrow i \{[^\n]*\n/, '');
c = c.replace(/  \.cap__arrow \{[^\n]*\n/, '  .cap__plus { width: 40px; height: 40px; font-size: 1.4rem; }\n').replace(/  \.cap__arrow i \{[^\n]*\n/, '');
fs.writeFileSync(f, c);
console.log('CSS CAP2 OK', c.includes('cap__arrow') ? '(reste cap__arrow)' : '');
