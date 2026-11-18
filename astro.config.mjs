// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.tilamedpharma.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { responsiveStyles: false },
});
