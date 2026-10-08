// Local preview deliberately uses a repository subpath, matching GitHub project Pages.
import http from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
const prefix='/buildflow-digital-transformation/';
const files=new Set(['index.html','app.js','client.js','domain.js','style.css','evidence-hose.svg','evidence-housing.svg']);
const types={html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8',svg:'image/svg+xml',json:'application/json',pdf:'application/pdf',pptx:'application/vnd.openxmlformats-officedocument.presentationml.presentation'};
http.createServer((request,response)=>{
 const path=new URL(request.url,'http://127.0.0.1').pathname;
 if(path==='/health'){response.writeHead(200);response.end('ok');return;}
 if(!path.startsWith(prefix)){response.writeHead(404);response.end('Not found');return;}
 let file=decodeURIComponent(path.slice(prefix.length))||'index.html';if(file.endsWith('/'))file+='index.html';
 if(!files.has(file)&&!(file.startsWith('application-kit/')&&!file.split('/').includes('..')&&existsSync(resolve('dist/pages',file))&&statSync(resolve('dist/pages',file)).isFile())){response.writeHead(404);response.end('Not found');return;}
 try{response.writeHead(200,{'Content-Type':types[file.split('.').pop()],'Cache-Control':'no-store'});response.end(readFileSync(resolve('dist/pages',file)));}
 catch{response.writeHead(404);response.end('Not built; run npm run build:pages');}
}).listen(4313,'127.0.0.1',()=>console.log(`Pages preview http://127.0.0.1:4313${prefix}`));
