// Télécharge les photos Pexels listées dans stock-list.txt (id|nom|description) et écrit CREDITS.md.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', 'images', 'stock');
fs.mkdirSync(out, { recursive: true });
const list = fs.readFileSync(path.join(root, 'tools', 'stock-list.txt'), 'utf8')
  .split(/\r?\n/).filter(Boolean).map(l => { const [id, name, desc] = l.split('|'); return { id, name, desc }; });

async function get(item) {
  const url = `https://images.pexels.com/photos/${item.id}/pexels-photo-${item.id}.jpeg?auto=compress&cs=tinysrgb&w=2200`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(60000) });
  if (!res.ok) throw new Error(item.name + ' ' + res.status);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(out, item.name + '.jpg'), buf);
  return `${item.name} ${Math.round(buf.length / 1024)} Ko`;
}

const results = await Promise.allSettled(list.map(get));
results.forEach(r => console.log(r.status === 'fulfilled' ? 'OK ' + r.value : 'ERR ' + r.reason));
const md = ['# Crédits photos', '', 'Source : Pexels — licence Pexels (usage gratuit, y compris commercial, attribution non obligatoire mais appréciée).', '', '| Fichier | Sujet | Page source |', '|---|---|---|',
  ...list.map(i => `| ${i.name}.jpg | ${i.desc} | https://www.pexels.com/photo/${i.id}/ |`)].join('\n');
fs.writeFileSync(path.join(out, 'CREDITS.md'), md + '\n');
