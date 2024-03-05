import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
/** @type {import("prettier").Config} */
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en", "es"],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  integrations: [react(), tailwind()],
  plugins: ['prettier-plugin-astro'],
  output: "server",
  adapter: vercel()
});