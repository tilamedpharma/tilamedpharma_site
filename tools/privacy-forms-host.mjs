// Mise en ligne Hostinger (18/11/2026) : la politique de confidentialité ne cite plus Netlify pour les formulaires.
import fs from 'node:fs';

const T = {
  fr: 'Les formulaires du site sont traités sur notre serveur, hébergé par Hostinger, puis transmis par e-mail à nos équipes via notre messagerie (OVH). Ils ne sont pas conservés sur le serveur.',
  en: 'The website\'s forms are processed on our server, hosted by Hostinger, then sent by e-mail to our teams through our mail service (OVH). They are not stored on the server.',
  es: 'Los formularios del sitio se procesan en nuestro servidor, alojado por Hostinger, y se transmiten por correo electrónico a nuestros equipos a través de nuestra mensajería (OVH). No se conservan en el servidor.',
  pt: 'Os formulários do site são tratados no nosso servidor, alojado pela Hostinger, e depois enviados por e-mail às nossas equipas através do nosso serviço de correio (OVH). Não são conservados no servidor.',
  it: 'I moduli del sito sono trattati sul nostro server, ospitato da Hostinger, e poi trasmessi via e-mail ai nostri team tramite il nostro servizio di posta (OVH). Non vengono conservati sul server.',
  zh: '网站表单在我们由 Hostinger 托管的服务器上处理，随后通过我们的邮件服务（OVH）以电子邮件形式转交我们的团队。表单内容不会保存在服务器上。',
  ar: 'تُعالَج استمارات الموقع على خادمنا الذي تستضيفه Hostinger، ثم تُرسل بالبريد الإلكتروني إلى فرقنا عبر خدمة البريد لدينا (OVH). ولا تُحفظ على الخادم.',
};
const q = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

for (const [lang, text] of Object.entries(T)) {
  const file = new URL(`../src/i18n/pages/fin/${lang}.ts`, import.meta.url);
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/(text: \[)'[^\n]*Netlify[^\n]*'(\])/);
  if (!m) throw new Error(`${lang}: ligne Netlify introuvable`);
  fs.writeFileSync(file, src.replace(m[0], `${m[1]}${q(text)}${m[2]}`));
  console.log(lang, 'ok');
}
