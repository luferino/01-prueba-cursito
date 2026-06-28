// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";  
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  env: {
    schema: {
      CONTENT_ISLAND_SECRET_TOKEN: envField.string({
        context: "server",
        access: "secret",
        optional: false,
        default: "INFORM_VALID_TOKEN",
      }),
    },
  },
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    plugins: /**@type {any} */ ([tailwindcss()]),
  },
});