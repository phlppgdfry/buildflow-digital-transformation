"""Generate source-based executive PDFs; slides are previews of the editable deck."""
import json,re,os
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph,Table,TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
D=json.loads(Path('application-kit/content/case.json').read_text()); OUT=Path('application-kit/exports');OUT.mkdir(exist_ok=True)
for name,file in [('Arial','Arial.ttf'),('Arial-Bold','Arial Bold.ttf')]:pdfmetrics.registerFont(TTFont(name,os.environ.get('FONT_DIR','/System/Library/Fonts/Supplemental')+'/'+file))
N=colors.HexColor('#102536');T=colors.HexColor('#087f8c'); W,H=A4
style=ParagraphStyle('body',fontName='Arial',fontSize=11,leading=16,textColor=N)
def para(c,t,x,y,w,size=11):
 st=ParagraphStyle('p',parent=style,fontSize=size,leading=size*1.45);t=re.sub(r'\*\*(.*?)\*\*',r'<b>\1</b>',t);p=Paragraph(t,st);_,h=p.wrap(w,H);p.drawOn(c,x,y-h);return y-h-9
def heading(c,t,y,size=15):c.setFillColor(T);c.setFont('Arial-Bold',size);c.drawString(40,y,t);return y-19
def frame(c,title,i,total,sub):
 c.setFillColor(T);c.setFont('Arial-Bold',9);c.drawString(40,H-36,'BUILDFLOW / INDEPENDENT PORTFOLIO CASE')
 para(c,title,40,H-61,W-80,25);para(c,sub,40,H-104,W-80,10)
 c.setStrokeColor(colors.HexColor('#dce5eb'));c.line(40,44,W-40,44);c.setFont('Arial',8);c.setFillColor(N);c.drawString(40,30,'Fictional company · Illustrative targets · No client implementation claimed');c.drawRightString(W-40,30,f'{i} / {total}')
 c.linkURL(D['links']['portfolio'],(40,20,W-40,43),relative=0)
def tab(c,rows,y,width=W-80):
 t=Table([[Paragraph(str(v),ParagraphStyle('cell',parent=style,fontSize=9.5,leading=13)) for v in r] for r in rows],colWidths=[width/len(rows[0])]*len(rows[0]));t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#e9f3f4')),('GRID',(0,0),(-1,-1),.4,colors.HexColor('#dce5eb')),('VALIGN',(0,0),(-1,-1),'TOP'),('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7)]));_,h=t.wrap(width,H);t.drawOn(c,40,y-h);return y-h-16
def flow(c,labels,y):
 w=(W-80-12*(len(labels)-1))/len(labels)
 for i,l in enumerate(labels):
  x=40+i*(w+12);c.setFillColor(colors.HexColor('#f1f6f8'));c.roundRect(x,y-65,w,65,5,fill=1,stroke=0);para(c,l,x+7,y-11,w-14,10)
  if i<len(labels)-1:para(c,'→',x+w,y-24,12,11)
 return y-86
def bpmn(c,y):
 bottom=y-190;c.setLineWidth(1);c.setStrokeColor(colors.HexColor('#dce5eb'));c.setFillColor(colors.white);c.rect(40,bottom,W-80,190,stroke=1,fill=1);c.line(40,y-84,W-40,y-84)
 para(c,'Warehouse',46,y-12,75,8);para(c,'Operational service',46,y-102,85,8)
 def box(t,x,yy,w=100):
  c.setFillColor(colors.HexColor('#f1f6f8'));c.setStrokeColor(T);c.roundRect(x,yy-38,w,38,4,fill=1,stroke=1);para(c,t,x+5,yy-5,w-10,9)
 def arrow(x1,y1,x2,y2):
  c.setStrokeColor(T);c.line(x1,y1,x2,y2)
  if x1==x2:c.line(x2,y2,x2-3,y2+5);c.line(x2,y2,x2+3,y2+5)
  else:c.line(x2,y2,x2-5,y2+3);c.line(x2,y2,x2-5,y2-3)
 c.setStrokeColor(T);c.circle(132,y-40,9,stroke=1);arrow(141,y-40,162,y-40);box('Inspect return',162,y-21,100);arrow(262,y-40,285,y-40)
 c.setFillColor(colors.HexColor('#f1f6f8'));p=c.beginPath();p.moveTo(285,y-40);p.lineTo(305,y-20);p.lineTo(325,y-40);p.lineTo(305,y-60);p.close();c.drawPath(p,stroke=1,fill=1);para(c,'X',300,y-31,15,10);para(c,'Damage?',277,y-65,66,8)
 c.setStrokeColor(T);c.line(305,y-60,305,y-96);c.line(305,y-96,212,y-96);arrow(212,y-96,212,y-113);para(c,'No',235,y-80,30,8);box('Available + history',162,y-113,100);arrow(262,y-132,275,y-132);c.setLineWidth(2);c.circle(284,y-132,9,stroke=1);c.setLineWidth(1)
 c.line(325,y-40,365,y-40);c.line(365,y-40,365,y-132);arrow(365,y-132,390,y-132);para(c,'Yes',333,y-24,30,8);box('Damaged + linked Draft',390,y-113,112);arrow(502,y-132,520,y-132);c.setLineWidth(2);c.circle(530,y-132,9,stroke=1);c.setLineWidth(1)
 return bottom-18
fit=[['Role requirement','Evidence'],['Business ↔ IT','End-to-end traceability'],['BPMN','Process models + exceptions'],['APIs / ERP','Contracts + ownership / reconciliation'],['Power Automate','Durable approval blueprints'],['AI','Opportunity assessment + human review'],['Implementation','UAT + rollout + change plan']]
c=canvas.Canvas(str(OUT/'executive-summary.pdf'),pagesize=A4);frame(c,'Construction Digital Transformation Case',1,1,'Inventory + Damage Claims | Independent analysis and solution design')
y=heading(c,'Challenge',H-144);y=para(c,D['challenge'],40,y,W-80,10)
y=heading(c,'My approach',y-2);y=para(c,'Discover → Analyse → Design → Integrate → Automate → Implement → Measure',40,y,W-80,10)
y=heading(c,'What I delivered',y-2);y=para(c,' · '.join(D['deliverables']),40,y,W-80,10)
y=heading(c,'Solution — proposed target',y-2);y=para(c,'Power Apps → Dataverse command rules → Integration adapter → ERP<br/>Entra identity · SharePoint evidence · Power Automate · Optional reviewed AI',40,y,W-80,10)
y=heading(c,'Business impact — illustrative targets',y-2);y=para(c,'Accuracy: 92% → ≥98% · Claim resolution: 18 → ≤10 business days<br/>Same-shift capture: 55% → ≥95%. Baselines require real validation.',40,y,W-80,10)
y=heading(c,'Role fit',y-2);y=tab(c,fit,y);assert y>48,('One-page overflow',y);c.save()
c=canvas.Canvas(str(OUT/'case-study.pdf'),pagesize=A4)
for page in D['pages']:
 i=page['index'];frame(c,page['title'],i,7,'Construction Digital Transformation | Inventory + Damage Claims');y=H-149
 for paragraph in page['body'].split('\n\n'):y=para(c,paragraph,40,y,W-80,11)
 y-=15
 if i==1:
  y=heading(c,'Transformation journey',y);y=flow(c,['Discover / Analyse','Design / Integrate','Automate / Implement','Measure'],y);y=tab(c,[['Designed','Demonstrated','Pending'],['Microsoft target + delivery plans','Tested local / browser prototype','Real workshops, tenant, ERP, UAT, benefits']],y)
 elif i==2:
  y=heading(c,'From complaint to accountable receipt',y);y=flow(c,['Missing material','Receipt requirement','Transfer command','UAT + KPI'],y);y=tab(c,[['Stakeholder','Constraint','Decision owner'],['Warehouse / Sites','Fast work; uneven connectivity','Operations'],['Finance','Spend control; invoice matching','Finance'],['IT','Legacy ERP; supportability','IT Manager']],y)
 elif i==3:
  y=heading(c,'Return inspection — executive BPMN view',y);y=bpmn(c,y);y=para(c,'Derived from the full BPMN source. Full model contains events, lanes and exception paths. Claims do not establish employee liability.',40,y,W-80)
 elif i==4:
  y=flow(c,['Users','Power Apps','Dataverse','ERP adapter','ERP'],y);y=tab(c,[['Boundary','Control'],['Identity / evidence','Entra roles; SharePoint restricted evidence'],['Operational command','State, audit and outbox change atomically'],['Financial integration','Stable reference; deduplication; reconciliation'],['Monitoring','Correlation IDs; retry queue; dead-letter ownership']],y)
 elif i==5:
  y=flow(c,['Submission','Validation','Approval','ERP','Notification'],y);y=flow(c,['AI recommendation','Human validation','Business decision'],y);y=para(c,'Power Automate blueprints are design artefacts. The browser demonstrates role-based approval rules and mock ERP delivery; it does not execute cloud flows.',40,y,W-80)
 elif i==6:
  y=flow(c,['Training + UAT','Supervised pilot','Gate evaluation','Phased rollout'],y);y=tab(c,[['Gate','Evidence required'],['Business readiness','Task success + exception acceptance'],['IT readiness','Identity, recovery and monitoring verified'],['Finance readiness','Commitment / invoice reconciliation'],['Adoption','Champions, observed training, feedback'],['Support','Ten working days hypercare; named owners']],y)
 else:
  y=tab(c,fit,y);y=tab(c,[['Measure','Illustrative baseline → target'],*[[m['name'],m['baseline']+' → '+m['target']+(' business days' if m['id']=='KPI-08' else '')] for m in D['metrics']]],y)
 assert y>82,('Case overflow',i,y)
 para(c,'Source: '+page['source'],40,76,W-80,8);c.linkURL(D['links']['repo']+'/blob/main/'+page['source'],(40,53,W-40,79),relative=0);c.showPage()
c.save()
images=list(Path('.scratch/deck').glob('slide-*.png'))
if len(images)==8:
 c=canvas.Canvas(str(OUT/'interview-deck.pdf'),pagesize=(1280,720))
 for i in range(1,9):c.drawImage(f'.scratch/deck/slide-{i}.png',0,0,1280,720);c.showPage()
 c.save()
print('PDF exports generated.')
