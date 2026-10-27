import { defineConfig } from 'astro/config';
export default defineConfig({site:process.env.SITE_URL || 'https://cnaaaadb.github.io',base:process.env.SITE_BASE || '/antiguosalumnosatocha',output:'static',trailingSlash:'always'});
