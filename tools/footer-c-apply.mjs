import fs from 'node:fs';

// 1) Accueil : retire le bandeau CTA (remplacé par les portes d'entrée du bas de page)
const hf = 'src/components/home/HomePage.astro';
let h = fs.readFileSync(hf, 'utf8');
const i = h.indexOf('<!-- CTA -->');
if (i >= 0) { h = h.slice(0, i).trimEnd() + '\n'; fs.writeFileSync(hf, h); console.log('CTA accueil retiré'); }

// 2) En-tête : ancre #top
const hd = 'src/components/layout/Header.astro';
let head = fs.readFileSync(hd, 'utf8');
if (!head.includes('id="top"')) { head = head.replace('<header class="hdr" data-header>', '<header class="hdr" id="top" data-header>'); fs.writeFileSync(hd, head); }

// 3) CSS : remplace les blocs « CTA DUO » et « PIED DE PAGE »
const cf = 'src/styles/global.css';
let c = fs.readFileSync(cf, 'utf8');
const start = c.indexOf('/* =========================================================================\n   CTA DUO');
const end = c.indexOf('/* =========================================================================\n   ANIMATIONS');
if (start < 0 || end < 0) throw new Error('ancres CSS');
const css = `/* =========================================================================
   BAS DE PAGE · Portail B2B (portes d'entrée) + pied de page marine
   ========================================================================= */
.portal { background: var(--mist); padding-block: clamp(56px, 6vw, 80px); border-top: 1px solid var(--line); }
.portal__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }
.portal__card { display: flex; flex-direction: column; gap: 10px; padding: 28px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); transition: box-shadow .35s, transform .35s var(--ease), border-color .35s; }
.portal__card:hover { border-color: transparent; box-shadow: var(--shadow-lg); transform: translateY(-4px); }
.portal__icon { display: grid; place-items: center; width: 52px; height: 52px; border-radius: var(--radius); background: var(--blue); color: #fff; }
.portal__card:nth-child(2) .portal__icon, .portal__card:nth-child(3) .portal__icon { background: var(--green); }
.portal__t { margin-top: 8px; font-family: var(--font-head); font-weight: 800; font-size: 1.25rem; color: var(--navy); }
.portal__d { flex: 1; font-size: 1rem; color: var(--muted); line-height: 1.5; }
.portal__card .link-arrow { align-self: flex-start; }
.portal__card:hover .link-arrow { background-size: 100% 1.5px; }

.ftr { background: var(--navy-900); color: rgba(255, 255, 255, .72); font-size: .9375rem; }
.ftr a { transition: color .25s; }
.ftr a:hover { color: #fff; }
.ftr__top { display: grid; grid-template-columns: 340px 1fr; gap: 64px; padding-block: 72px 44px; }
.ftr__slogan { margin-top: 20px; font-family: var(--font-head); font-weight: 600; font-style: italic; color: #fff; }
.ftr__big { display: flex; align-items: center; gap: 12px; margin-top: 16px; font-family: var(--font-head); font-weight: 700; font-size: 1.1rem; color: #fff; word-break: break-word; }
.ftr__big .icon { flex: none; color: var(--green); }
.ftr__social { display: flex; gap: 8px; margin-top: 24px; }
.ftr__social a { display: grid; place-items: center; width: 40px; height: 40px; border-radius: var(--radius); border: 1px solid rgba(255, 255, 255, .18); color: #fff; transition: background .25s, border-color .25s; }
.ftr__social a:hover { background: var(--blue); border-color: var(--blue); }
.ftr__map { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
.ftr__map li + li { margin-top: 9px; }
.ftr__h { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; font-family: var(--font-head); font-weight: 700; font-size: .75rem; letter-spacing: .16em; text-transform: uppercase; color: #fff; }
.ftr__h .icon { color: var(--green); flex: none; }
.ftr__nl { display: flex; align-items: center; justify-content: space-between; gap: 24px 32px; padding: 28px 32px; border-radius: var(--radius-lg); background: rgba(255, 255, 255, .05); border: 1px solid rgba(255, 255, 255, .1); }
.ftr__nl-t { font-family: var(--font-head); font-weight: 800; font-size: 1.15rem; color: #fff; }
.ftr__nl p + p { margin-top: 4px; }
.nl { display: flex; width: min(440px, 100%); background: #fff; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line); }
.nl input[type='email'] { flex: 1; min-width: 0; height: 50px; padding: 0 16px; border: 0; background: transparent; font: inherit; font-size: 1rem; color: var(--navy); outline: none; }
.nl button { flex: none; padding: 0 22px; background: var(--blue); color: #fff; font-family: var(--font-head); font-weight: 700; font-size: .875rem; transition: background .25s; }
.nl button:hover { background: var(--green); }
.nl--dark { background: rgba(255, 255, 255, .06); border-color: rgba(255, 255, 255, .2); }
.nl--dark input[type='email'] { color: #fff; }
.nl--dark input[type='email']::placeholder { color: rgba(255, 255, 255, .55); }
.nl:focus-within { outline: 3px solid var(--sky); outline-offset: 2px; }
.ftr__places { display: grid; grid-template-columns: 1.7fr repeat(3, 1fr); gap: 32px; padding-block: 44px; }
.ftr__plant { display: grid; grid-template-columns: 1.15fr 1fr; gap: 20px; align-items: center; }
.ftr__plant p { line-height: 1.5; margin-bottom: 10px; }
.ftr__office p { line-height: 1.5; }
.ftr__office a { display: inline-block; margin-top: 6px; color: #fff; font-weight: 700; }
.link-arrow--light { color: #8fc2f3; }
.link-arrow--light:hover { color: #fff; }
.ftr__bottom { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 32px; padding-block: 22px; border-top: 1px solid rgba(255, 255, 255, .1); font-size: .875rem; }
.ftr__legal { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-inline-start: auto; }
.totop { display: inline-flex; align-items: center; gap: 10px; height: 46px; padding: 0 18px; border-radius: 99px; border: 1px solid rgba(255, 255, 255, .25); color: #fff; font-family: var(--font-head); font-weight: 700; font-size: .8125rem; transition: background .3s, border-color .3s; }
.totop:hover { background: var(--blue); border-color: var(--blue); }
.totop__ic { transform: rotate(-90deg); }
.duo-rule--thick { height: 8px; }

`;
c = c.slice(0, start) + css + c.slice(end);
// Responsive : retire les anciennes règles .cta / .ftr et ajoute les nouvelles
c = c.split('\n').filter((l) => !/^\s+\.(cta|cta__blue|ftr__nav|ftr__offices|ftr__top)\b/.test(l)).join('\n');
c = c.replace('@media (max-width: 1100px) {\n', `@media (max-width: 1100px) {
  .portal__grid { grid-template-columns: 1fr 1fr; }
  .ftr__top { grid-template-columns: 1fr; gap: 44px; }
  .ftr__places { grid-template-columns: 1fr 1fr; }
  .ftr__plant { grid-column: 1 / -1; }
`);
c = c.replace('@media (max-width: 640px) {\n', `@media (max-width: 640px) {
  .portal__grid { grid-template-columns: 1fr; }
  .ftr__map { grid-template-columns: 1fr 1fr; }
  .ftr__nl { flex-direction: column; align-items: stretch; padding: 22px; }
  .ftr__places { grid-template-columns: 1fr; }
  .ftr__plant { grid-template-columns: 1fr; }
  .ftr__legal { margin-inline-start: 0; }
`);
c = c.replace('@media (max-width: 900px) {\n', `@media (max-width: 900px) {
  .ftr__map { grid-template-columns: repeat(3, 1fr); }
`);
fs.writeFileSync(cf, c);
console.log('CSS OK', /\.cta__|ftr__offices|ftr__band/.test(c) ? '(restes)' : 'propre');
