import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import {join,dirname} from 'node:path';
const root=new URL('../dist/',import.meta.url).pathname;
async function files(dir){let result=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=join(dir,e.name);result.push(...e.isDirectory()?await files(p):[p])}return result}
const all=await files(root);const htmls=all.filter(p=>p.endsWith('.html'));
const base=(process.env.SITE_BASE || '/antiguosalumnosatocha').replace(/\/$/,'');
test('all 15 pages generate with Spanish language and a unique title',async()=>{assert.equal(htmls.length,15);const titles=[];for(const p of htmls){const html=await readFile(p,'utf8');assert.match(html,/<html lang="es">/);titles.push(html.match(/<title>(.*?)<\/title>/)[1]);assert.ok(!html.includes('href="#"'),p)}assert.equal(new Set(titles).size,15)});
test('all local links and bundled assets resolve at the Pages base path',async()=>{for(const p of htmls){const html=await readFile(p,'utf8');for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const url=match[1].split('#')[0].split('?')[0];if(!url.startsWith('/'))continue;assert.ok(url.startsWith(base+'/'),`${p}: ${url}`);let relative=url.slice(base.length+1);if(!relative||relative.endsWith('/'))relative+='index.html';await assert.doesNotReject(access(join(root,relative)),`${p}: missing ${relative}`)}}});
test('agenda uses confirmed Connecting dates and registration links to BoscoGest',async()=>{const agenda=await readFile(join(root,'agenda/index.html'),'utf8');assert.ok(!agenda.includes('Connecting · Conociéndonos'));if(Date.now()<Date.parse('2026-11-15T17:30:00+01:00'))assert.ok(agenda.includes('Connecting · En equipo'));const page=await readFile(join(root,'participa/index.html'),'utf8');assert.match(page,/Pedir ayuda de acceso/);assert.ok(page.includes('href="https://boscogest.com/register"'));assert.ok(!page.includes('forms.gle'))});
test('Montserrat is bundled locally and controls all UI text',async()=>{assert.ok(all.some(p=>p.includes('montserrat')&&p.endsWith('.woff2')));const css=(await Promise.all(all.filter(p=>p.endsWith('.css')).map(p=>readFile(p,'utf8')))).join('');assert.match(css,/Montserrat/);assert.match(css,/font:inherit/);for(const p of htmls){assert.ok(!(await readFile(p,'utf8')).includes('fonts.googleapis.com'))}});

test('sitemap covers every indexable page with matching canonical URLs and excludes 404',async()=>{
 const xml=await readFile(join(root,'sitemap.xml'),'utf8');
 assert.match(xml,/<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
 const urls=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
 assert.equal(new Set(urls).size,urls.length);
 const expectedOrigin=new URL(process.env.SITE_URL || 'https://cnaaaadb.github.io').origin;
 const canonicals=[];
 for(const file of htmls){
  const html=await readFile(file,'utf8');
  if(file===join(root,'404.html')){
   assert.match(html,/<meta name="robots" content="noindex, follow"/);
   assert.ok(!html.includes('rel="canonical"'));
   continue;
  }
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.ok(canonical,file);
  const expectedPath=base + '/' + file.slice(root.length).replace(/index\.html$/,'');
  assert.equal(new URL(canonical).origin,expectedOrigin);
  assert.equal(new URL(canonical).pathname,expectedPath,file);
  assert.match(html,/<meta name="robots" content="index, follow, max-image-preview:large"/);
  canonicals.push(canonical);
 }
 assert.deepEqual([...urls].sort(),canonicals.sort());
});
test('search metadata and structured data identify the association consistently',async()=>{
 const descriptions=[];
 for(const file of htmls.filter(file=>file!==join(root,'404.html'))){
  const html=await readFile(file,'utf8');
  const title=html.match(/<title>(.*?)<\/title>/)[1];
  assert.match(title,/Antiguos Alumnos Salesianos Atocha/);
  const description=html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(description && description.length>70,file);
  descriptions.push(description);
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)[1];
  assert.ok(html.includes('property="og:url" content="' + canonical + '"'));
  const script=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  assert.ok(script,file);
  const data=JSON.parse(script);
  const organization=data['@graph'].find(item=>item['@type']==='Organization');
  assert.match(organization.name,/Asociación Antiguos Alumnos y Alumnas Salesianos Atocha/);
  assert.ok(organization.sameAs.includes('https://www.instagram.com/antiguosalumnosatocha/'));
  const webpage=data['@graph'].find(item=>item['@type']==='WebPage');
  assert.equal(webpage.url,canonical);
  assert.equal(webpage.name,title);
  if(file!==join(root,'index.html')){
   const breadcrumbs=data['@graph'].find(item=>item['@type']==='BreadcrumbList');
   assert.equal(breadcrumbs.itemListElement.at(-1).item,canonical);
   assert.ok(html.includes('aria-label="Ruta de navegación"'));
  }
 }
 assert.equal(new Set(descriptions).size,descriptions.length);
});

test('Connecting contains its programme and posters without empty results sections',async()=>{
 const html=await readFile(join(root,'connecting/index.html'),'utf8');
 assert.match(html,/Red InterLavapiés/);
 assert.match(html,/Cuerpo Europeo de Solidaridad/);
 assert.ok(html.includes('2026-10-25T17:30:00+01:00'));
 assert.ok(html.includes('2026-11-15T17:30:00+01:00'));
 for(const name of ['cartel-general.png','conociendonos.png','en-equipo.png','eu-emblem.svg'])await access(join(root,'images/connecting',name));
 assert.ok(!html.includes('Erasmus+'));
 assert.ok(!html.includes('Próximamente'));
 assert.ok(!html.match(/<h[1-6][^>]*>[^<]*(?:Resultados|Lo que vamos haciendo|Crónicas)/i));
 const home=await readFile(join(root,'index.html'),'utf8');
 assert.ok(home.includes(base+'/connecting/'));
 const activities=await readFile(join(root,'actividades/index.html'),'utf8');
 assert.ok(activities.includes(base+'/connecting/'));
});
test('local fragment links resolve to real sections',async()=>{
 for(const file of htmls){
  const html=await readFile(file,'utf8');
  for(const match of html.matchAll(/href="([^"]*#[^"]+)"/g)){
   const href=match[1];
   if(!href.startsWith('#') && !href.startsWith('/'))continue;
   const [pathname,id]=href.split('#');
   let target=file;
   if(pathname){
    let relative=pathname.slice(base.length+1);
    if(!relative||relative.endsWith('/'))relative+='index.html';
    target=join(root,relative);
   }
   const targetHtml=await readFile(target,'utf8');
   assert.ok(targetHtml.includes('id="'+id+'"'),file+': '+href);
  }
 }
});
