// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind()],

  experimental: {
    env: {
      schema: {
        SERVER_API_URL: envField.string({ context: 'server', access: 'secret' })
      }
    }
  },

  adapter: cloudflare()
});