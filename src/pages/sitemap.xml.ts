import type {APIRoute} from 'astro';
import {seoPages} from '../data/seo';

export const prerender = true;

const escapeXml=(value:string)=>value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');

export const GET:APIRoute=({site})=>{
 if(!site) throw new Error('La generación del sitemap requiere configurar site en Astro.');
 // La misma lista de rutas que genera las páginas y sus etiquetas canonical.
 const base=import.meta.env.BASE_URL.replace(/\/?$/, '/');
 const urls=seoPages.map(page=>new URL(base + (page.path ? page.path + '/' : ''),site).href);
 if(new Set(urls).size!==urls.length) throw new Error('El sitemap contiene URL duplicadas.');
 const xml='<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(url=>'  <url>\n    <loc>' + escapeXml(url) + '</loc>\n  </url>').join('\n') +
  '\n</urlset>\n';
 return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
