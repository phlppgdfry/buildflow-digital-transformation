import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const out=resolve('dist/pages');mkdirSync(out,{recursive:true});
for(const name of ['app.js','client.js','style.css','evidence-hose.svg','evidence-housing.svg'])copyFileSync(resolve('08-prototype/frontend',name),resolve(out,name));
const html=readFileSync('08-prototype/frontend/index.html','utf8').replace('<head>','<head><meta name="buildflow-mode" content="browser"><meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\'; style-src \'self\'; img-src \'self\' data:; object-src \'none\'; base-uri \'none\'; connect-src \'self\'">');
writeFileSync(resolve(out,'index.html'),html);
copyFileSync('08-prototype/api/domain.mjs',resolve(out,'domain.js'));
writeFileSync(resolve(out,'.nojekyll'),'');
console.log('Built dist/pages: browser-only simulation. No database, server, credentials or visitor data included.');

const kit=resolve(out,'application-kit');mkdirSync(resolve(kit,'assets'),{recursive:true});mkdirSync(resolve(kit,'workspace'),{recursive:true});mkdirSync(resolve(kit,'downloads'),{recursive:true});
copyFileSync('application-kit/portfolio/landing-page/index.html',resolve(kit,'index.html'));
for(const f of ['ui.js','kit.css','landing.js'])copyFileSync('application-kit/portfolio/assets/'+f,resolve(kit,'assets',f));
copyFileSync('application-kit/content/case.json',resolve(kit,'assets/case.json'));
for(const f of ['index.html','workspace.js','workspace.css'])copyFileSync('application-kit/portfolio/transformation-workspace/'+f,resolve(kit,'workspace',f));
for(const f of ['executive-summary.pdf','case-study.pdf','interview-deck.pdf','interview-deck.pptx'])copyFileSync('application-kit/exports/'+f,resolve(kit,'downloads',f));
console.log('Application kit built alongside original prototype.');
