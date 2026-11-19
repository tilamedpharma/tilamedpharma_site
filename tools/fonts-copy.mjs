// Génère public/fonts/ar.css, zh.css (pages arabes et chinoises, appelés par Base.astro) et admin.css
// (Montserrat + Carlito du back office PHP, qui n'utilise pas les fichiers d'Astro)
// à partir des paquets @fontsource, et copie seulement les fichiers .woff2 utiles dans public/fonts/files/.
// Lancé automatiquement avant chaque build (script npm « prebuild »). Dossier généré : ignoré par Git.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = path.join(root, 'public', 'fonts');
const filesDir = path.join(outDir, 'files');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(filesDir, { recursive: true });
fs.writeFileSync(path.join(outDir, '.htaccess'), '# Polices arabe / chinoise : cache d\'un mois.\n<IfModule mod_headers.c>\n  Header set Cache-Control "public, max-age=2592000"\n</IfModule>\n');

const sets = {
  ar: { pkg: 'ibm-plex-sans-arabic', css: ['arabic-400.css', 'arabic-600.css', 'arabic-700.css'] },
  // 400.css / 700.css : la police chinoise est découpée en ~100 tranches (unicode-range),
  // le navigateur ne télécharge que celles dont la page a besoin.
  zh: { pkg: 'noto-sans-sc', css: ['400.css', '700.css'] },
  admin: [
    { pkg: 'montserrat', css: ['latin-600.css', 'latin-700.css', 'latin-800.css'] },
    { pkg: 'carlito', css: ['latin-400.css', 'latin-700.css'] },
  ],
};

for (const [name, spec] of Object.entries(sets)) {
  const parts = Array.isArray(spec) ? spec : [spec];
  let out = `/* Généré par tools/fonts-copy.mjs depuis @fontsource/${parts.map((x) => x.pkg).join(', ')} — ne pas modifier */\n`;
  let n = 0;
  for (const { pkg, css } of parts) {
    const dir = path.join(root, 'node_modules', '@fontsource', pkg);
    for (const file of css) {
      let text = fs.readFileSync(path.join(dir, file), 'utf8');
      // woff2 seulement (tous les navigateurs actuels) ; chemins absolus vers /fonts/files/
      text = text.replace(/src: url\(\.\/files\/([^)]+\.woff2)\) format\('woff2'\)[^;]*;/g, (_, f) => {
        fs.copyFileSync(path.join(dir, 'files', f), path.join(filesDir, f));
        n++;
        return `src: url(/fonts/files/${f}) format('woff2');`;
      });
      out += text + '\n';
    }
  }
  fs.writeFileSync(path.join(outDir, `${name}.css`), out);
  console.log(`fonts/${name}.css : ${n} fichiers woff2`);
}
