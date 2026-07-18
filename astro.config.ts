import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.christopher.com.mx',
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
});
