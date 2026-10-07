import { randomUUID } from 'node:crypto';
export const roles = { Employee:'EMP-001', Warehouse:'WH-001', Manager:'MGR-001', Finance:'FIN-001', Administrator:'ADM-001' };
export const sites = [{id:'SITE-004',name:'Oostende · Site 004'},{id:'SITE-005',name:'Brugge · Site 005'}];
export const employees = ['EMP-001','EMP-002','EMP-003'];
const now = () => new Date().toISOString();
export function fail(status,code,message) { throw Object.assign(new Error(message),{status,code}); }
export function allowed(role, list) { if (!list.includes(role)) fail(403,'FORBIDDEN','Demo role is not authorised for this operation'); }
export function version(entity, body) { if (!Number.isInteger(body.expectedVersion)) fail(400,'VALIDATION','expectedVersion is required'); if (body.expectedVersion!==entity.version) fail(409,'CONFLICT','Record version changed; refresh and review'); }
export function find(state, collection, id) { const e=state[collection].find(x=>x.id===id); if(!e) fail(404,'NOT_FOUND','Record not found'); return e; }
function text(value,min=1,max=2000) { return typeof value==='string' && value.trim().length>=min && value.length<=max; }
function cents(n) { return Number.isSafeInteger(n) && n>=0 && n<=100000000; }
function site(id) { if (!sites.some(s=>s.id===id)) fail(400,'VALIDATION','Select an active ERP site'); }
function evidenceValid(e) {
 if (!e || !text(e.name,1,100) || !['image','document'].includes(e.kind)) return false;
 if (['synthetic://hose','synthetic://housing','synthetic://report'].includes(e.reference)) return true;
 if(typeof e.data!=='string' || e.data.length>2800000) return false;
 return /^data:(image\/(png|jpeg)|application\/pdf);base64,[A-Za-z0-9+/]+=*$/.test(e.data);
}
export function audit(state,entity,action,actor,correlationId,details={}) {
 const ev={id:randomUUID(),entityId:entity.id,action,actor,at:now(),correlationId,...details};
 state.history.push(ev);entity.version++;entity.updatedAt=ev.at;return ev;
}
function change(state, entity, next, actor, correlationId,reason='') { const old=entity.status;entity.status=next;audit(state,entity,`${old} → ${next}`,actor,correlationId,{reason,previousStatus:old,status:next}); }
export function seed() {
 const names=['Hilti rotary hammer','Hydraulic excavator','Mobile scaffold','Concrete vibrator','Generator','Angle grinder','Laser level','Compactor'];
 const statuses=['Available','Damaged','Assigned','Available','Available','Maintenance','Reserved','Lost'];
 const assets=names.map((name,i)=>({id:`AST-${String(i+1).padStart(3,'0')}`,name,category:['Tools','Machines','Access','Tools','Power','Tools','Survey','Machines'][i],brand:['Hilti','Volvo','Layher','Wacker','Honda','Makita','Leica','Bomag'][i],model:`BF-DEMO-${i+1}`,serial:i===6?null:`SYN-${1000+i}`,serialException:i===6?'Awaiting physical serial check':null,erpAssetId:`ERP-A-${i+1}`,purchaseDate:'2023-04-01',purchaseCents:200000+i*90000,currentValueCents:140000+i*60000,financialSource:'Mock ERP',status:statuses[i],locationId:i===2?'SITE-004':'WH-001',custodianId:i===2?'EMP-002':null,reservationSite:i===6?'SITE-005':null,version:1,updatedAt:now()}));
 const base={siteId:'SITE-004',reporterId:'EMP-001',category:'Mechanical',liability:'Unknown',thirdParty:null,actualCents:null,invoiceRef:null,repairOutcome:null,version:1,revision:1,approvals:[],submittedAt:now(),dueAt:new Date(Date.now()+14*86400000).toISOString(),ownerId:'MGR-001',evidence:[],comments:[],aiSuggestions:[]};
 const claims=[{...structuredClone(base),id:'CLM-0001',assetId:'AST-002',description:'Hydraulic hose damaged during operation',severity:'MEDIUM',estimatedCents:620000,status:'Under Review',evidence:[{name:'hose-demo.svg',kind:'image',reference:'synthetic://hose'}]}, {...structuredClone(base),id:'CLM-0002',assetId:'AST-006',description:'Housing cracked; serial and incident details needed',severity:'LOW',estimatedCents:42000,status:'Information Required',category:'Structural',evidence:[{name:'housing-demo.svg',kind:'image',reference:'synthetic://housing'}]}];
 return {assets,claims,history:[{id:randomUUID(),entityId:'CLM-0002',action:'Information requested',actor:'MGR-001',at:now(),correlationId:'seed',reason:'Confirm incident time and serial number'}],outbox:[{id:'evt-master-001',type:'master.refresh',entityId:'MASTER',externalRef:'BF-MASTER-001',status:'Pending',attempts:0,correlationId:'seed'}],erpReceipts:[],idempotency:{}};
}
function newClaim(state,body,actor,correlationId) {
 find(state,'assets',body.assetId);site(body.siteId);
 if(!text(body.description,3) || !['LOW','MEDIUM','HIGH','CRITICAL'].includes(body.severity) || !['Mechanical','Electrical','Structural','Other'].includes(body.category) || !cents(body.estimatedCents)) fail(400,'VALIDATION','Valid description, category, severity and estimatedCents are required');
 if(body.thirdParty!==null && body.thirdParty!==undefined && !text(body.thirdParty,1,150)) fail(400,'VALIDATION','Third party must be bounded text');
 if(!Array.isArray(body.evidence) || body.evidence.length>10 || !body.evidence.every(evidenceValid)) fail(400,'VALIDATION','Use valid synthetic references or bounded PNG/JPEG/PDF evidence');
 const id='CLM-'+String(Math.max(0,...state.claims.map(c=>Number(c.id.split('-')[1])))+1).padStart(4,'0');
 const c={id,assetId:body.assetId,siteId:body.siteId,description:body.description.trim(),category:body.category,severity:body.severity,estimatedCents:body.estimatedCents,reporterId:actor,liability:'Unknown',thirdParty:body.thirdParty||null,status:'Draft',actualCents:null,invoiceRef:null,repairOutcome:null,version:0,revision:1,approvals:[],evidence:body.evidence,comments:[],aiSuggestions:[],ownerId:null,submittedAt:null,dueAt:null};
 state.claims.push(c);audit(state,c,'Draft created',actor,correlationId);return c;
}
export function command(state, path, body, role, correlationId) {
 const actor=roles[role]; if(!actor) fail(403,'FORBIDDEN','Choose a valid demo role');
 if(path==='/api/damage-claims') {allowed(role,['Employee','Warehouse','Manager']);return newClaim(state,body,actor,correlationId);}
 let m=path.match(/^\/api\/assets\/([^/]+)\/(checkout|return|transfer|receive)$/);
 if(m) {
  allowed(role,['Warehouse']);const a=find(state,'assets',m[1]);version(a,body);const op=m[2];
  if(op==='checkout') {
   if(!['Available','Reserved'].includes(a.status)) fail(409,'CONFLICT','Asset is not available for checkout');site(body.siteId);
   if(a.status==='Reserved' && a.reservationSite!==body.siteId) fail(422,'POLICY','Reservation belongs to another site');
   if(!employees.includes(body.custodianId)) fail(400,'VALIDATION','Select active ERP custodian');
   a.locationId=body.siteId;a.custodianId=body.custodianId;a.reservationSite=null;change(state,a,'Assigned',actor,correlationId);return a;
  }
  if(op==='return') {
   if(a.status!=='Assigned') fail(409,'CONFLICT','Only assigned assets can be returned');
   if(typeof body.damaged!=='boolean' || !text(body.inspection,3,500)) fail(400,'VALIDATION','Condition inspection and damage flag required');
   const origin=a.locationId;a.locationId='WH-001';a.custodianId=null;
   if(body.damaged) {
    const claim=newClaim(state,{assetId:a.id,siteId:origin,description:body.inspection,severity:'MEDIUM',category:'Other',estimatedCents:0,evidence:[]},actor,correlationId);
    change(state,a,'Damaged',actor,correlationId,body.inspection);a.lastClaimId=claim.id;
   } else change(state,a,'Available',actor,correlationId,body.inspection);
   return a;
  }
  if(op==='transfer') {
   if(a.status!=='Assigned') fail(409,'CONFLICT','Transfer requires assigned asset');site(body.siteId);
   if(a.locationId===body.siteId) fail(400,'VALIDATION','Destination must differ');
   a.transferTo=body.siteId;change(state,a,'In Transit',actor,correlationId,'Sender custody retained');return a;
  }
  if(a.status!=='In Transit' || body.siteId!==a.transferTo) fail(422,'POLICY','Receive only at pending destination');
  if(!employees.includes(body.custodianId)) fail(400,'VALIDATION','Select active receiving custodian');
  a.locationId=a.transferTo;a.transferTo=null;a.custodianId=body.custodianId;change(state,a,'Assigned',actor,correlationId,'Receipt confirmed');return a;
 }
 m=path.match(/^\/api\/damage-claims\/([^/]+)\/(status|approve|estimate|comment|evidence|ai|ai-review)$/);
 if(m) {
  const c=find(state,'claims',m[1]);const op=m[2];version(c,body);
  if(op==='status') {
   const next=body.status;
   if(next==='Submitted') {allowed(role,['Employee','Warehouse','Manager']);if(c.reporterId!==actor) fail(403,'FORBIDDEN','Only the demo reporter submits their draft');}
   else allowed(role,['Manager','Finance']);
   const routes={Draft:['Submitted'],Submitted:['Under Review'], 'Under Review':['Information Required','Rejected'], 'Information Required':['Under Review'],Approved:['Repair Scheduled'],'Repair Scheduled':['In Repair'],'In Repair':['Awaiting Invoice'],'Awaiting Invoice':['Closed'],Closed:['Under Review']};
   if(!routes[c.status]?.includes(next)) fail(409,'CONFLICT','Invalid claim transition; approval uses separate controlled command');
   if(['Information Required','Rejected'].includes(next) && !text(body.reason,3,500)) fail(422,'POLICY','Decision reason required');
   if(next==='Submitted') {if(c.evidence.length===0) fail(422,'POLICY','Evidence is required before submission');c.ownerId='MGR-001';c.submittedAt=now();c.dueAt=new Date(Date.now()+14*86400000).toISOString();}
   if(next==='Closed') {allowed(role,['Finance']); if(!cents(body.actualCents)||!text(body.invoiceRef,3,100)||!text(body.repairOutcome,3,500)||body.reconciled!==true) fail(422,'POLICY','Demo Finance must confirm reconciled actual, invoice and repair outcome');c.actualCents=body.actualCents;c.invoiceRef=body.invoiceRef;c.repairOutcome=body.repairOutcome;}
   if(c.status==='Closed') {allowed(role,['Manager']);if(!text(body.reason,3,500)) fail(422,'POLICY','Reopen reason required');c.revision++;c.approvals=[];}
   change(state,c,next,actor,correlationId,body.reason||'');return c;
  }
  if(op==='approve') {
   allowed(role,['Manager','Finance']);if(c.status!=='Under Review') fail(409,'CONFLICT','Claim must be Under Review');
   if(c.reporterId===actor) fail(403,'FORBIDDEN','Reporter cannot approve their own claim');
   if(role==='Finance' && c.estimatedCents<=500000) fail(422,'POLICY','Finance approval is not needed at or below EUR 5000');
   if(c.approvals.some(a=>a.role===role && a.revision===c.revision)) fail(409,'CONFLICT','This role already approved the current revision');
   if(!text(body.reason,3,500)) fail(422,'POLICY','Approval justification required');
   c.approvals.push({id:randomUUID(),role,actor,revision:c.revision,amountCents:c.estimatedCents,at:now(),reason:body.reason});audit(state,c,`${role} approved revision ${c.revision}`,actor,correlationId,{approval:structuredClone(c.approvals.at(-1)),reason:body.reason});
   const ready=c.approvals.some(a=>a.role==='Manager') && (c.estimatedCents<=500000 || c.approvals.some(a=>a.role==='Finance'));
   if(ready) {change(state,c,'Approved',actor,correlationId);const externalRef=`BF-${c.id}-r${c.revision}`;state.outbox.push({id:randomUUID(),type:'claim.approved',entityId:c.id,externalRef,estimatedCents:c.estimatedCents,status:'Pending',attempts:0,correlationId});}
   return c;
  }
  if(op==='estimate') {
   allowed(role,['Manager']);if(!['Under Review','Information Required'].includes(c.status)) fail(409,'CONFLICT','Revise estimate only before final approval');if(!cents(body.estimatedCents)) fail(400,'VALIDATION','Valid integer estimatedCents required');
   c.estimatedCents=body.estimatedCents;c.revision++;c.approvals=[];audit(state,c,'Estimate revised; prior approvals invalidated',actor,correlationId);return c;
  }
  if(op==='evidence') {
   allowed(role,['Employee','Warehouse','Manager']);
   if(!['Draft','Under Review','Information Required'].includes(c.status)) fail(409,'CONFLICT','Evidence revision requires an editable claim');
   if(!Array.isArray(body.evidence)||body.evidence.length===0||body.evidence.length+c.evidence.length>10||!body.evidence.every(evidenceValid)) fail(400,'VALIDATION','Valid bounded evidence is required');
   c.evidence.push(...body.evidence);c.revision++;c.approvals=[];audit(state,c,'Evidence added; approvals invalidated',actor,correlationId);return c;
  }
  if(op==='comment') {allowed(role,['Employee','Warehouse','Manager','Finance']);if(!text(body.text,3,1000)) fail(400,'VALIDATION','Comment needs 3–1000 characters');c.comments.push({actor,text:body.text,at:now()});audit(state,c,'Comment added',actor,correlationId);return c;}
  if(op==='ai') {
   allowed(role,['Employee','Warehouse','Manager']);const injected=/ignore|approve|blame|liable|liability|sanction/i.test(c.description);
   const sparse=c.description.length<20;const category=/hose|hydraulic|slang|tuyau/i.test(c.description)?'Mechanical':/electr|cable/i.test(c.description)?'Electrical':/frame|housing|scaffold/i.test(c.description)?'Structural':null;
   const suggestion={id:randomUUID(),summary:injected?'Suggestion withheld: manual clarification required.':c.description,suggestedCategory:injected||sparse?null:category,suggestedSeverity:null,missingInformation:[...(c.evidence.length?[]:['Evidence photo/document']), 'Confirm incident time and operating context'],sourceIds:[c.id],reviewRequired:true,score:injected||sparse?0.3:c.evidence.length?0.85:0.65,scoreMeaning:'Demo completeness indicator; not calibrated model confidence',promptVersion:'BF-DAMAGE-1.0',model:'deterministic-mock',reviewStatus:'Pending',at:now()};
   c.aiSuggestions.push(suggestion);audit(state,c,'Mock AI suggestion generated — review required',actor,correlationId);return c;
  }
  if(op==='ai-review') {
   allowed(role,['Employee','Warehouse','Manager']);const sug=c.aiSuggestions.find(s=>s.id===body.suggestionId);if(!sug || sug.reviewStatus!=='Pending') fail(409,'CONFLICT','Suggestion unavailable or already reviewed');
   if(!['Accepted','Dismissed'].includes(body.decision)) fail(400,'VALIDATION','Choose Accepted or Dismissed');sug.reviewStatus=body.decision;sug.reviewer=actor;sug.reviewedAt=now();sug.acceptedFields=body.decision==='Accepted'?['summary']:[];audit(state,c,`AI draft ${body.decision.toLowerCase()} by human; no business decision`,actor,correlationId);return c;
  }
 }
 m=path.match(/^\/api\/integrations\/([^/]+)\/dispatch$/);
 if(m) {
  allowed(role,['Administrator']);const event=find(state,'outbox',m[1]);if(event.status==='Delivered') return event;
  event.attempts++;
  if(body.simulateFailure===true) {event.status=event.attempts>=5?'Dead Letter':'Failed';event.lastError='Simulated ERP unavailable';return event;}
  let receipt=state.erpReceipts.find(r=>r.externalRef===event.externalRef);
  if(!receipt) {receipt={externalRef:event.externalRef,erpRef:`ERP-DEMO-${state.erpReceipts.length+1}`,at:now()};state.erpReceipts.push(receipt);}
  event.status='Delivered';event.erpRef=receipt.erpRef;event.lastError=null;return event;
 }
 fail(404,'NOT_FOUND','Unknown command route');
}
