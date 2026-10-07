import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const out=resolve('dist/pages');mkdirSync(out,{recursive:true});
for(const name of ['app.js','client.js','style.css','evidence-hose.svg','evidence-housing.svg'])copyFileSync(resolve('08-prototype/frontend',name),resolve(out,name));
const html=readFileSync('08-prototype/frontend/index.html','utf8').replace('<head>','<head><meta name="buildflow-mode" content="browser"><meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\'; style-src \'self\'; img-src \'self\' data:; object-src \'none\'; base-uri \'none\'; connect-src \'self\'">');
writeFileSync(resolve(out,'index.html'),html);
copyFileSync('08-prototype/api/domain.mjs',resolve(out,'domain.js'));
writeFileSync(resolve(out,'.nojekyll'),'');
console.log('Built dist/pages: browser-only simulation. No database, server, credentials or visitor data included.');
