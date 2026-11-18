// En-tête homogène pour le bloc « Comment pouvons-nous vous aider ? » (étiquette + titre + filet + chapô).
import fs from 'node:fs';
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
const H = {
  fr: ['Contact', 'Centrales d\'achat, distributeurs, candidats ou journalistes : choisissez votre profil, nous vous orientons vers le bon interlocuteur.'],
  en: ['Contact', 'Purchasing centres, distributors, candidates or journalists: choose your profile and we will direct you to the right person.'],
  es: ['Contacto', 'Centrales de compras, distribuidores, candidatos o periodistas: elija su perfil y le orientaremos hacia el interlocutor adecuado.'],
  pt: ['Contacto', 'Centrais de compras, distribuidores, candidatos ou jornalistas: escolha o seu perfil e encaminhamo-lo para o interlocutor certo.'],
  it: ['Contatti', 'Centrali d\'acquisto, distributori, candidati o giornalisti: scegliete il vostro profilo, vi indirizziamo all\'interlocutore giusto.'],
  zh: ['联系', '采购中心、经销商、求职者或媒体：请选择您的身份，我们将为您对接合适的联系人。'],
  ar: ['اتصل بنا', 'مراكز الشراء أو الموزعون أو المرشحون أو الصحفيون: اختاروا صفتكم وسنوجّهكم إلى المحاور المناسب.'],
};
for (const [lang, [eyebrow, lead]] of Object.entries(H)) {
  const f = `src/i18n/${lang}.ts`;
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes('      lead: ') && s.includes('    portal: {\n      eyebrow:')) { console.log(lang, 'déjà fait'); continue; }
  s = s.replace('    portal: {\n      help:', `    portal: {\n      eyebrow: ${q(eyebrow)},\n      lead: ${q(lead)},\n      help:`);
  fs.writeFileSync(f, s);
  console.log(lang, s.includes('      eyebrow: ' + q(eyebrow)) ? 'OK' : 'ÉCHEC');
}

// Gabarit
const ff = 'src/components/layout/Footer.astro';
let h = fs.readFileSync(ff, 'utf8');
const old = '    <p class="eyebrow" id="portal-title"><span class="eyebrow__n">+</span>·<span>{p.help}</span></p>';
if (h.includes(old)) {
  h = h.replace(old, `    <div class="sec-head sec-head--split">
      <div>
        <p class="eyebrow" data-reveal><Icon name="mail" size={16} class="eyebrow__ic" /><span>{p.eyebrow}</span></p>
        <h2 class="h2" id="portal-title" data-reveal>{p.help}</h2>
        <span class="title-rule" aria-hidden="true"></span>
      </div>
      <p class="lead" data-reveal>{p.lead}</p>
    </div>`);
  fs.writeFileSync(ff, h);
  console.log('gabarit OK');
}

// CSS : fond blanc + espacement aligné sur les autres sections
const cf = 'src/styles/global.css';
let c = fs.readFileSync(cf, 'utf8');
c = c.replace('.portal { background: var(--mist); padding-block: clamp(56px, 6vw, 80px); border-top: 1px solid var(--line); }', '.portal { background: #fff; padding-block: var(--section); }\n.eyebrow__ic { color: var(--blue); }');
c = c.replace('.portal__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }', '.portal__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 56px; }');
fs.writeFileSync(cf, c);
console.log('CSS', c.includes('.portal { background: #fff;') ? 'OK' : 'ÉCHEC');
