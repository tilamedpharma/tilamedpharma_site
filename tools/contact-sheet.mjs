import sharp from 'sharp';
import fs from 'node:fs';
const dir = process.argv[2], out = process.argv[3];
const files = fs.readdirSync(dir).filter(f => /\.jpe?g$/i.test(f)).sort();
const W = 300, H = 200, cols = 6, rows = Math.ceil(files.length / cols), pad = 22;
const tiles = await Promise.all(files.map(async (f, i) => {
  const img = await sharp(dir + '/' + f).resize(W, H, { fit: 'cover' }).toBuffer();
  const label = Buffer.from(`<svg width="${W}" height="${pad}"><rect width="100%" height="100%" fill="#fff"/><text x="4" y="15" font-size="12" font-family="Arial">${i + 1}. ${f.replace('.jpg', '')}</text></svg>`);
  return [{ input: img, left: (i % cols) * W, top: Math.floor(i / cols) * (H + pad) }, { input: label, left: (i % cols) * W, top: Math.floor(i / cols) * (H + pad) + H }];
}));
await sharp({ create: { width: cols * W, height: rows * (H + pad), channels: 3, background: '#fff' } }).composite(tiles.flat()).jpeg({ quality: 70 }).toFile(out);
console.log(out);
