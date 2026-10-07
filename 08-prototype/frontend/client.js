// The public build selects browser storage explicitly. The local build still uses its REST API.
export const browserMode=document.querySelector('meta[name="buildflow-mode"]')?.content==='browser';
const databaseName='buildflow-portfolio-demo-v1';
let databasePromise;
let domainPromise;
function domain(){return domainPromise??=import('./domain.js');}
function database(){
 if(databasePromise)return databasePromise;
 databasePromise=new Promise((resolve,reject)=>{
  const request=indexedDB.open(databaseName,1);
  request.onupgradeneeded=()=>request.result.createObjectStore('state');
  request.onsuccess=()=>{const db=request.result;db.onversionchange=()=>db.close();resolve(db);};
  request.onerror=()=>reject(new Error('Browser storage is unavailable. Allow site storage or open the demo in another browser.'));
  request.onblocked=()=>reject(new Error('Close other BuildFlow demo tabs and try again.'));
 });
 return databasePromise;
}
async function transact(change){
 const [db,rules]=await Promise.all([database(),domain()]);
 return new Promise((resolve,reject)=>{
  // One read/write transaction serialises changes across tabs and rolls back failed commands.
  const transaction=db.transaction('state','readwrite');
  const store=transaction.objectStore('state');
  const request=store.get('demo');let result;let failure;
  request.onsuccess=()=>{
   try{
    const state=request.result??rules.seed();
    result=change(state,rules);
    store.put(state,'demo');
   }catch(error){failure=error;transaction.abort();}
  };
  transaction.oncomplete=()=>resolve(structuredClone(result));
  transaction.onabort=()=>reject(failure??new Error('Could not save demo data. Storage may be full; reset the demo to clear its data.'));
  transaction.onerror=()=>{failure??=new Error('Could not save demo data. Storage may be full; reset the demo to clear its data.');};
 });
}
export async function readState(){
 if(browserMode)return transact((state,{sites,employees,roles})=>{const {idempotency,...visible}=state;return{...visible,sites,employees,roles};});
 const response=await fetch('/api/state');if(!response.ok)throw new Error('Cannot load local demo');return response.json();
}
export async function writeCommand(path,body,role,method='POST'){
 if(browserMode){
  const correlation=crypto.randomUUID();
  try{return await transact((state,{command})=>command(state,path,body,role,correlation));}
  catch(error){throw new Error(`${error.message} · ${correlation}`);}
 }
 const response=await fetch(path,{method,headers:{'Content-Type':'application/json','X-Demo-Role':role,'Idempotency-Key':crypto.randomUUID()},body:JSON.stringify(body)});
 const result=await response.json();
 if(!response.ok)throw new Error(`${result.error.message} · ${result.correlationId}`);
 return result;
}
export async function resetDemo(){
 if(!browserMode)throw new Error('Use npm run reset for the local server.');
 const [db,rules]=await Promise.all([database(),domain()]);
 return new Promise((resolve,reject)=>{
  const transaction=db.transaction('state','readwrite');transaction.objectStore('state').put(rules.seed(),'demo');
  transaction.oncomplete=()=>resolve();transaction.onabort=transaction.onerror=()=>reject(new Error('Could not reset browser demo data.'));
 });
}
