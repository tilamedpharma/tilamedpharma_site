// Conformité · proposition A : référentiels en cadre clair (4 colonnes, filet de couleur, statut).
import fs from 'node:fs';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const T = {
  fr: ['Nos référentiels', ['Référence', 'Référence', 'Visée', 'En cours']],
  en: ['Our standards', ['Reference', 'Reference', 'Targeted', 'In progress']],
  es: ['Nuestros referenciales', ['Referencia', 'Referencia', 'Prevista', 'En curso']],
  pt: ['Os nossos referenciais', ['Referência', 'Referência', 'Visada', 'Em curso']],
  it: ['I nostri riferimenti', ['Riferimento', 'Riferimento', 'Prevista', 'In corso']],
  zh: ['我们的标准', ['参照标准', '参照标准', '目标', '进行中']],
  ar: ['مرجعياتنا', ['مرجع', 'مرجع', 'مستهدفة', 'قيد الإنجاز']],
};
for (const [lang, [title, st]] of Object.entries(T)) {
  const f = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes('standardsTitle:')) { console.log(lang, 'déjà fait'); continue; }
  s = s.replace('    standards: [\n', `    standardsTitle: ${q(title)},\n    standardsStatus: [${st.map(q).join(', ')}],\n    standards: [\n`);
  fs.writeFileSync(f, s);
  console.log(lang, s.includes('standardsTitle:') ? 'OK' : 'ÉCHEC');
}

// Gabarit
const hf = 'src/components/home/HomePage.astro';
let h = fs.readFileSync(hf, 'utf8');
const old = `    <ul class="comp__std" data-reveal>
      {t.compliance.standards.map((s) => <li><span class="comp__code">{s.code}</span><p>{s.label}</p></li>)}
    </ul>`;
const neu = `    <div class="comp__std" data-reveal>
      <p class="comp__std-h">{t.compliance.standardsTitle}</p>
      <ul>
        {t.compliance.standards.map((s, i) => (
          <li class:list={[{ 'is-green': i === t.compliance.standards.length - 1 }]}>
            <span class="comp__std-top">
              <span class="comp__code">{s.code}</span>
              <span class="comp__st"><Icon name={i < 2 ? 'check-circle' : 'clock'} size={14} />{t.compliance.standardsStatus[i]}</span>
            </span>
            <p>{s.label}</p>
          </li>
        ))}
      </ul>
    </div>`;
if (!h.includes(old)) throw new Error('gabarit introuvable');
fs.writeFileSync(hf, h.replace(old, neu));
console.log('gabarit OK');

// CSS
const cf = 'src/styles/global.css';
let c = fs.readFileSync(cf, 'utf8');
const a = c.indexOf('.comp__std { display: grid;');
const b = c.indexOf('.comp__cta {');
if (a < 0 || b < 0) throw new Error('ancres CSS');
c = c.slice(0, a) + `.comp__std { margin-top: 40px; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
.comp__std-h { padding: 14px 28px; border-bottom: 1px solid var(--line); background: var(--mist); font-family: var(--font-head); font-weight: 700; font-size: .75rem; letter-spacing: .16em; text-transform: uppercase; color: var(--navy); }
.comp__std ul { display: grid; grid-template-columns: repeat(4, 1fr); }
.comp__std li { padding: 26px 28px 28px; border-top: 4px solid var(--blue); }
.comp__std li + li { border-inline-start: 1px solid var(--line); }
.comp__std li.is-green { border-top-color: var(--green); }
.comp__std-top { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 12px; }
.comp__code { font-family: var(--font-head); font-weight: 800; font-size: 2rem; color: var(--navy); letter-spacing: .01em; }
.comp__st { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 99px; background: var(--blue-50); color: var(--blue); font-family: var(--font-head); font-weight: 700; font-size: .75rem; }
.comp__std li.is-green .comp__st { background: var(--green-50); color: var(--green-deep); }
.comp__std li p { margin-top: 12px; font-size: .9375rem; line-height: 1.45; color: var(--muted); }
` + c.slice(b);
c = c.replace('  .comp__std { grid-template-columns: 1fr 1fr; }', '  .comp__std ul { grid-template-columns: 1fr 1fr; }\n  .comp__std li:nth-child(3) { border-inline-start: 0; }');
c = c.replace('  .comp__grid, .comp__std { grid-template-columns: 1fr; }\n  .comp__std li + li { border-inline-start: 0; border-top: 1px solid rgba(255, 255, 255, .2); }',
  '  .comp__grid, .comp__std ul { grid-template-columns: 1fr; }\n  .comp__std li + li { border-inline-start: 0; }');
fs.writeFileSync(cf, c);
console.log('CSS', c.includes('.comp__std ul { grid-template-columns: 1fr 1fr; }') && c.includes('.comp__grid, .comp__std ul') ? 'OK' : 'à vérifier');
