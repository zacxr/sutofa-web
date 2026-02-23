import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
server: {
    allowedHosts: ['.trycloudflare.com']
},
site: "https://astro-nano-demo.vercel.app",
integrations: [mdx(), sitemap(), tailwind()],
});
