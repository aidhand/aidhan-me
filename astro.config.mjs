import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";
import vercel from "@astrojs/vercel/edge";
import tailwind from "@astrojs/tailwind";

let adapter = vercel();

if (process.env.CF_PAGES) {
  adapter = cloudflare();
}

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()],
  output: "server",
  adapter: adapter,
});
