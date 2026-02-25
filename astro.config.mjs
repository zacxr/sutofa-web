import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // 1. 保持 SSR 输出模式
  output: 'server', 
  
  // 2. 重新加回你模板需要的插件
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind()
  ],

  // 3. 配置适配器
  adapter: cloudflare({
    // 建议开启，这样本地开发时能模拟 Cloudflare 环境
    platformProxy: {
      enabled: true,
    },
  }),
});