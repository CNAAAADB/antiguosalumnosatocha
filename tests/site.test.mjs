import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import {join,dirname} from 'node:path';
const root=new URL('../dist/',import.meta.url).pathname;
async function files(dir){let result=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=join(dir,e.name);result.push(...e.isDirectory()?await files(p):[p])}return result}
const all=await files(root);const htmls=all.filter(p=>p.endsWith('.html'));
const base=(process.env.SITE_BASE || '/antiguosalumnosatocha').replace(/\/$/,'');
test('all 14 pages generate with Spanish language and a unique title',async()=>{assert.equal(htmls.length,14);const titles=[];for(const p of htmls){const html=await readFile(p,'utf8');assert.match(html,/<html lang="es">/);titles.push(html.match(/<title>(.*?)<\/title>/)[1]);assert.ok(!html.includes('href="#"'),p)}assert.equal(new Set(titles).size,14)});
test('all local links and bundled assets resolve at the Pages base path',async()=>{for(const p of htmls){const html=await readFile(p,'utf8');for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const url=match[1].split('#')[0].split('?')[0];if(!url.startsWith('/'))continue;assert.ok(url.startsWith(base+'/'),`${p}: ${url}`);let relative=url.slice(base.length+1);if(!relative||relative.endsWith('/'))relative+='index.html';await assert.doesNotReject(access(join(root,relative)),`${p}: missing ${relative}`)}}});
test('agenda has no fixture events and registration links to BoscoGest',async()=>{const agenda=await readFile(join(root,'agenda/index.html'),'utf8');assert.match(agenda,/No hay convocatorias futuras confirmadas/);const page=await readFile(join(root,'participa/index.html'),'utf8');assert.match(page,/Pedir ayuda de acceso/);assert.ok(page.includes('href="https://boscogest.com/register"'));assert.ok(!page.includes('forms.gle'))});
test('Montserrat is bundled locally and controls all UI text',async()=>{assert.ok(all.some(p=>p.includes('montserrat')&&p.endsWith('.woff2')));const css=(await Promise.all(all.filter(p=>p.endsWith('.css')).map(p=>readFile(p,'utf8')))).join('');assert.match(css,/Montserrat/);assert.match(css,/font:inherit/);for(const p of htmls){assert.ok(!(await readFile(p,'utf8')).includes('fonts.googleapis.com'))}});
