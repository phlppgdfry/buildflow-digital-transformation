import http from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { command, seed, roles, sites, employees, find, fail } from './domain.mjs';
const root=resolve(fileURLToPath(new URL('../../',import.meta.url)));
const dbPath=process.env.BUILDFLOW_DB || resolve(root,'08-prototype/api/data/demo.sqlite');
mkdirSync(resolve(dbPath,'..'),{recursive:true});const db=new DatabaseSync(dbPath);db.exec('PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS portfolio_state(id INTEGER PRIMARY KEY CHECK(id=1), payload TEXT NOT NULL)');
if(process.argv.includes('--reset')) { db.prepare('INSERT OR REPLACE INTO portfolio_state VALUES(1,?)').run(JSON.stringify(seed()));db.close();console.log('Synthetic local demo reset. Stop any running server before reset.');process.exit(0); }
if(!db.prepare('SELECT id FROM portfolio_state WHERE id=1').get()) db.prepare('INSERT INTO portfolio_state VALUES(1,?)').run(JSON.stringify(seed()));
const load=()=>JSON.parse(db.prepare('SELECT payload FROM portfolio_state WHERE id=1').get().payload);
const files={'/':'index.html','/app.js':'app.js','/style.css':'style.css','/evidence-hose.svg':'evidence-hose.svg','/evidence-housing.svg':'evidence-housing.svg'};
const types={html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8',svg:'image/svg+xml'};
function send(res,status,data,correlationId) {res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store','X-Correlation-ID':correlationId});res.end(JSON.stringify(data));}
const server=http.createServer(async(req,res)=>{
 const correlationId=randomUUID();
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');
 res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; connect-src 'self'");
 let transaction=false;
 try {
  const url=new URL(req.url,'http://127.0.0.1');const path=url.pathname;
  if(req.method==='GET' && files[path]) {const f=files[path];res.writeHead(200,{'Content-Type':types[f.split('.').pop()]});res.end(readFileSync(resolve(root,'08-prototype/frontend',f)));return;}
  if(path==='/health' && req.method==='GET') return send(res,200,{status:'ok',mode:'synthetic-local-demo'},correlationId);
  if(req.method==='GET' && path.startsWith('/api/')) {
   const s=load();let data;
   if(path==='/api/state') {const {idempotency,...visible}=s;data={...visible,sites,employees,roles};}
   else if(path==='/api/assets') data=s.assets;
   else if(path==='/api/damage-claims') data=s.claims;
   else {const m=path.match(/^\/api\/(assets|damage-claims)\/([^/]+)$/);if(!m) fail(404,'NOT_FOUND','Unknown read route');data=find(s,m[1]==='assets'?'assets':'claims',m[2]);}
   return send(res,200,data,correlationId);
  }
  if(!['POST','PATCH'].includes(req.method)) fail(404,'NOT_FOUND','Unknown route or method');
  const expectedMethod=path.endsWith('/status')||path.endsWith('/estimate')?'PATCH':'POST';if(req.method!==expectedMethod) fail(405,'METHOD_NOT_ALLOWED','Use documented HTTP method');
  if(req.headers.origin && !/^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(req.headers.origin)) fail(403,'FORBIDDEN','Local demo origin only');
  if(!(req.headers['content-type']||'').startsWith('application/json')) fail(400,'VALIDATION','Content-Type application/json required');
  const chunks=[];let size=0;for await(const chunk of req) {size+=chunk.length;if(size>3000000) fail(413,'TOO_LARGE','Maximum body is 3MB');chunks.push(chunk);}
  let body;try {body=JSON.parse(Buffer.concat(chunks).toString());}catch {fail(400,'VALIDATION','Malformed JSON');}
  if(!body || typeof body!=='object' || Array.isArray(body)) fail(400,'VALIDATION','Object payload required');
  const role=req.headers['x-demo-role'];const key=req.headers['idempotency-key'];if(!roles[role]) fail(403,'FORBIDDEN','Valid X-Demo-Role required');if(!key || key.length>128) fail(400,'VALIDATION','Idempotency-Key is required, max 128 characters');
  db.exec('BEGIN IMMEDIATE');transaction=true;const s=load();
  const scoped=`${roles[role]}:${req.method}:${path}:${key}`;const hash=createHash('sha256').update(JSON.stringify(body)).digest('hex');
  const previous=s.idempotency[scoped];
  if(previous) {if(previous.hash!==hash) fail(409,'CONFLICT','Idempotency key reused with different payload');db.exec('COMMIT');transaction=false;return send(res,previous.status,previous.result,correlationId);}
  const result=command(s,path,body,role,correlationId);const status=path==='/api/damage-claims'?201:200;
  s.idempotency[scoped]={hash,status,result:structuredClone(result)};
  db.prepare('UPDATE portfolio_state SET payload=? WHERE id=1').run(JSON.stringify(s));db.exec('COMMIT');transaction=false;send(res,status,result,correlationId);
  console.log(JSON.stringify({at:new Date().toISOString(),operation:`${req.method} ${path}`,status,correlationId}));
 } catch(error) {if(transaction) db.exec('ROLLBACK');send(res,error.status||500,{error:{code:error.code||'INTERNAL',message:error.status?error.message:'Unexpected error; contact support with correlation ID'},correlationId},correlationId);}
});
server.listen(Number(process.env.PORT||4310),'127.0.0.1',()=>console.log(`BuildFlow local demo http://127.0.0.1:${server.address().port}`));
for(const signal of ['SIGTERM','SIGINT']) process.on(signal,()=>server.close(()=>{db.close();process.exit(0);}));
