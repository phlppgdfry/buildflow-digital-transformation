import assert from 'node:assert/strict';
import {readFileSync,existsSync,statSync} from 'node:fs';
const d=JSON.parse(readFileSync('application-kit/content/case.json'));
assert.equal(d.evidence.length,10);assert.equal(d.slides.length,8);assert.equal(d.pages.length,7);assert.equal(d.sections.length,12);
for(const e of d.evidence)assert(existsSync(e.path),e.path);
for(const s of [...d.sections,...d.slides])for(const p of s.sources)assert(existsSync(p),p);
const kpi=readFileSync('13-kpis/target-kpis.md','utf8');for(const m of d.metrics){const row=kpi.split('\n').find(r=>r.includes(m.id));assert(row?.includes(m.baseline)&&row.includes(m.target),m.id+' drift');}
for(const f of ['executive-summary.pdf','case-study.pdf','interview-deck.pdf','interview-deck.pptx']){const path='application-kit/exports/'+f;assert(statSync(path).size>10000);const sig=readFileSync(path).subarray(0,4).toString();assert(f.endsWith('pdf')?sig==='%PDF':sig.startsWith('PK'));}
console.log('Kit evidence paths, canonical KPI targets and four real exports verified.');
