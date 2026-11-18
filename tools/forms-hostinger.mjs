// Mise en ligne Hostinger (18/11/2026) : les 5 formulaires Netlify passent sur /api/form.php (PHP + SMTP OVH).
// 1) ajoute `formMsg` dans les 7 dictionnaires ; 2) réécrit les balises <form> des 5 composants.
import fs from 'node:fs';

const msgs = {
  fr: ['Envoi en cours…', 'Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.', 'L\'envoi a échoué. Réessayez ou écrivez-nous à contact@tilamedpharma.com.', 'Fichier trop lourd (5 Mo maximum).'],
  en: ['Sending…', 'Thank you, your message has been sent. We will get back to you shortly.', 'Sending failed. Please try again or write to contact@tilamedpharma.com.', 'File too large (5 MB maximum).'],
  es: ['Enviando…', 'Gracias, su mensaje se ha enviado correctamente. Le responderemos en breve.', 'El envío ha fallado. Inténtelo de nuevo o escríbanos a contact@tilamedpharma.com.', 'Archivo demasiado pesado (5 MB como máximo).'],
  pt: ['A enviar…', 'Obrigado, a sua mensagem foi enviada. Responderemos em breve.', 'O envio falhou. Tente novamente ou escreva-nos para contact@tilamedpharma.com.', 'Ficheiro demasiado pesado (máximo 5 MB).'],
  it: ['Invio in corso…', 'Grazie, il vostro messaggio è stato inviato. Vi risponderemo al più presto.', 'Invio non riuscito. Riprovate o scriveteci a contact@tilamedpharma.com.', 'File troppo pesante (massimo 5 MB).'],
  zh: ['正在发送…', '谢谢，您的信息已成功发送。我们会尽快回复您。', '发送失败。请重试，或发送邮件至 contact@tilamedpharma.com。', '文件过大（最大 5 MB）。'],
  ar: ['جارٍ الإرسال…', 'شكرًا لكم، تم إرسال رسالتكم بنجاح. سنردّ عليكم قريبًا.', 'تعذّر الإرسال. أعيدوا المحاولة أو راسلونا على contact@tilamedpharma.com.', 'الملف كبير جدًا (5 ميغابايت كحد أقصى).'],
};
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

for (const [lang, [sending, ok, error, big]] of Object.entries(msgs)) {
  const file = new URL(`../src/i18n/${lang}.ts`, import.meta.url);
  const src = fs.readFileSync(file, 'utf8');
  if (src.includes('formMsg:')) { console.log(lang, 'formMsg déjà présent'); continue; }
  const at = src.indexOf('\n  clients: {');
  if (at < 0) throw new Error(`${lang}: clients introuvable`);
  const block = `\n  formMsg: { sending: ${q(sending)}, ok: ${q(ok)}, error: ${q(error)}, big: ${q(big)} },`;
  fs.writeFileSync(file, src.slice(0, at) + block + src.slice(at));
  console.log(lang, 'formMsg ok');
}

const comps = ['fin/ContactPage', 'produits/DocPage', 'qualite/PvPage', 'marches/DistribPage', 'carrieres/CandPage'];
const attrs = ' action="/api/form.php" data-form data-msg-sending={t.formMsg.sending} data-msg-ok={t.formMsg.ok} data-msg-error={t.formMsg.error} data-msg-big={t.formMsg.big}';
for (const c of comps) {
  const file = new URL(`../src/components/${c}.astro`, import.meta.url);
  let src = fs.readFileSync(file, 'utf8');
  if (src.includes('data-form')) { console.log(c, 'déjà fait'); continue; }
  if (!/const t = useDict\(lang\)/.test(src)) throw new Error(`${c}: pas de dictionnaire t`);
  const n = (src.match(/ data-netlify="true" netlify-honeypot="bot-field"/g) || []).length;
  if (n !== 1) throw new Error(`${c}: ${n} balise(s) netlify`);
  src = src.replace(' data-netlify="true" netlify-honeypot="bot-field"', attrs);
  src = src.replace(/name="(gammes|circuits)"/g, 'name="$1[]"');
  if (!src.includes('<p class="form__req">')) throw new Error(`${c}: form__req introuvable`);
  src = src.replace(/(\n\s*)<p class="form__req">/, '$1<p class="form__status" role="status" aria-live="polite" hidden></p>$1<p class="form__req">');
  src = src.replace(/\(Netlify Forms[^)]*\)/g, '(envoi via /api/form.php)').replace(/Netlify Forms/g, '/api/form.php');
  fs.writeFileSync(file, src);
  console.log(c, 'ok');
}
