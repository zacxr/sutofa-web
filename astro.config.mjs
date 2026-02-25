import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare'; // 确保引入了它

export default defineConfig({
  output: 'server', // 或者 'hybrid'，取决于你是否需要 SSR
  adapter: cloudflare(),
});