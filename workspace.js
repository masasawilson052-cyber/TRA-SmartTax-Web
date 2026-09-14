import {LEDGER_KEY,today,escapeText as e,validateEntry,appendEntry,ledgerTotals,ledgerCSV} from './ledger.js';

let entries=[],storageError='',draftHash='',draftSource='manual',draftFile=null,scanning=false,previewURL='';
try { const data=JSON.parse(localStorage.getItem(LEDGER_KEY)||'[]');if(!Array.isArray(data)||data.some(r=>{try{validateEntry(r);return false;}catch{return true;}}))throw Error('Saved records could not be read.');entries=data; } catch(err){storageError=err.message;}
const t=(en,sw)=>document.documentElement.lang==='sw'?sw:en;
const money=n=>new Intl.NumberFormat('en-TZ',{maximumFractionDigits:0}).format(n);
const $=id=>document.getElementById(id);
const set=(id,text)=>{if($(id))$(id).textContent=text;};
const say=message=>{showPrototypeNotice(message);set('kr-feedback',message);};
const readerRoot=new URL('../TIDRE-web/',location.href);
function openEvidence() {return new Promise((resolve,reject)=>{const req=indexedDB.open('kodirahisi-receipts-v1',1);req.onupgradeneeded=()=>req.result.createObjectStore('receipts');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function putEvidence(id,file) {const db=await openEvidence();try{await new Promise((resolve,reject)=>{const tx=db.transaction('receipts','readwrite');tx.objectStore('receipts').put(file,id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});}finally{db.close();}}
async function sourceReceipt(id) {const db=await openEvidence();try{return await new Promise((resolve,reject)=>{const req=db.transaction('receipts').objectStore('receipts').get(id);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}finally{db.close();}}
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),5000);}

function refresh() {
 const sum=ledgerTotals(entries);
 set('t-calc-title',t('Presumptive Tax Guidance Calculator','Kikokotoo cha Kodi ya Makadirio'));
 set('t-calc-sub',t('Check eligibility, enter full-year turnover and inspect the rule source.','Hakiki ustahiki, ingiza mauzo ya mwaka mzima na angalia chanzo cha kanuni.'));
 set('t-calc-rev-label',t('Annual turnover (TZS)','Mauzo ya mwaka (TZS)'));
 set('t-calc-btn',t('Calculate indicative amount','Kokotoa kiasi cha makadirio'));
 set('t-calc-res-title',t('Tax guidance result','Matokeo ya makadirio'));
 set('t-calc-warn-title',t('Planning guidance','Mwongozo wa mipango'));
 set('t-calc-warn-text',t('Confirm the applicable rules and your circumstances with TRA before taking an official tax step.','Thibitisha kanuni zinazohusika na hali yako kupitia TRA kabla ya hatua rasmi ya kodi.'));
 document.querySelectorAll('[data-kr="upload"]').forEach(b=>b.textContent=t('Choose a receipt','Chagua risiti'));
 document.querySelectorAll('#view-records [data-kr="sample"]').forEach(b=>b.textContent=t('Try sample receipt','Jaribu risiti ya mfano'));
 document.querySelectorAll('#view-records [data-kr="manual"]').forEach(b=>b.textContent=t('Enter manually','Ingiza mwenyewe'));
 document.querySelectorAll('[data-kr="overview"]').forEach(b=>b.textContent=t('View updated overview','Ona muhtasari mpya'));
 set('t-upload-title',t('Bring your receipt into focus','Piga picha iliyo wazi ya risiti'));
 const metric=(label,value,note)=>`<div class="stat-card"><div class="stat-label">${label}</div><div class="stat-value">${value}</div><p class="stat-note">${note}</p></div>`;
 $('kr-metrics').innerHTML=metric(t('Confirmed sales · TZS','Mauzo yaliyothibitishwa · TZS'),money(sum.sales),t('From saved records','Kutokana na kumbukumbu'))+metric(t('Confirmed expenses · TZS','Matumizi yaliyothibitishwa · TZS'),money(sum.expenses),t('From saved records','Kutokana na kumbukumbu'))+metric(t('Saved records','Kumbukumbu zilizohifadhiwa'),sum.count,t('Stored on this device','Zimehifadhiwa kwenye kifaa hiki'));
 $('kr-record-list').innerHTML=entries.length?`<div class="kr-table-wrap"><table class="kr-table"><thead><tr><th>${t('Date / party','Tarehe / jina')}</th><th>${t('Type','Aina')}</th><th>TZS</th><th>${t('Source','Chanzo')}</th></tr></thead><tbody>${[...entries].reverse().map(r=>`<tr><td><strong>${e(r.seller)}</strong><small>${e(r.date)} · ${e(r.reference||t('No reference','Hakuna namba'))}</small></td><td>${r.type==='sale'?t('Sale','Mauzo'):t('Expense','Matumizi')}</td><td>${money(r.amount)}</td><td>${r.hasEvidence?`<button class="kr-text-button" data-kr="source" data-id="${e(r.id)}">${t('Receipt','Risiti')} ↗</button>`:e(t('Manual','Kwa mkono'))}</td></tr>`).join('')}</tbody></table></div>`:`<div class="kr-empty"><i class="fa-solid fa-receipt" aria-hidden="true"></i><h3>${t('Your first record starts here','Anza kumbukumbu yako ya kwanza')}</h3><p>${t('Try the sample receipt or add a sale or expense. Confirmed entries will appear here.','Jaribu risiti ya mfano au ongeza mauzo au matumizi. Kumbukumbu zilizothibitishwa zitaonekana hapa.')}</p><button class="btn-primary" data-kr="sample">${t('Try sample receipt','Jaribu risiti ya mfano')} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></div>`;
 set('t-dash-title',t('Good records. Less guesswork.','Kumbukumbu sahihi. Uelewa zaidi.'));
 set('t-dash-subtitle',t('Your business activity, built from the records you confirm.','Muhtasari wa biashara kutokana na kumbukumbu unazothibitisha.'));
 set('t-dash-demo-label',t('Independent innovation prototype · device workspace','Mfano huru wa ubunifu · kumbukumbu za kifaa'));
 set('kr-list-title',t('Your records','Kumbukumbu zako'));set('kr-add',t('Add a record','Ongeza kumbukumbu'));set('kr-export',t('Export records','Pakua kumbukumbu'));set('kr-guide-title',t('Your next tax step, explained','Elewa hatua inayofuata ya kodi'));set('kr-guide-copy',t('Review your records, check an estimate and continue through official TRA services.','Hakiki kumbukumbu, angalia makadirio na endelea kupitia huduma rasmi za TRA.'));set('kr-guide-button',t('Open guidance','Fungua mwongozo'));
 set('t-records-sub',t('Read an image or one-page PDF on your device, check its fields and save a confirmed record.','Soma picha au PDF ya ukurasa mmoja kwenye kifaa, hakiki taarifa na hifadhi kumbukumbu.'));
 set('t-scan-title',t('Review the details','Hakiki taarifa'));set('t-scan-confirm',t('Confirm & save record','Hakiki na hifadhi'));set('kr-save-title',t('Record saved','Kumbukumbu imehifadhiwa'));set('kr-save-copy',t('Your totals have updated. The record and available source receipt are stored on this device.','Jumla imesasishwa. Kumbukumbu na risiti iliyopo zimehifadhiwa kwenye kifaa hiki.'));
 set('kr-confirm-copy',t('I checked the date, party and amounts against the receipt.','Nimehakiki tarehe, jina na kiasi dhidi ya risiti.'));
 set('kr-date-label',t('Date','Tarehe'));set('kr-seller-label',t('Supplier / customer','Muuzaji / mteja'));set('kr-total-label',t('Total amount (TZS)','Jumla (TZS)'));set('kr-tax-label',t('Printed tax, if any (TZS)','Kodi iliyoandikwa, ikiwa ipo (TZS)'));set('kr-type-label',t('Transaction type','Aina ya muamala'));set('kr-ref-label',t('Receipt reference','Namba ya risiti'));
 set('kr-sale',t('Sale · money in','Mauzo · fedha kuingia'));set('kr-expense',t('Expense · money out','Matumizi · fedha kutoka'));
 set('kr-record-status',t('Business record status','Hali ya kumbukumbu za biashara'));set('kr-complete',t('Records meet the applicable requirement','Kumbukumbu zinakidhi sharti husika'));set('kr-incomplete',t('Records do not meet the applicable requirement','Kumbukumbu hazikidhi sharti husika'));set('kr-relief-label',t('First-time TIN for a new business? Show the TRA relief note; approval is still required.','TIN ya kwanza kwa biashara mpya? Ona maelezo ya msamaha wa TRA; idhini bado inahitajika.'));set('kr-eligible-label',t('I confirm this estimate is for an eligible resident individual business, using full-year turnover.','Nathibitisha makadirio ni ya biashara ya mtu binafsi mkazi inayostahili, kwa mauzo ya mwaka mzima.'));
 set('kr-current-source',t('Rule source: TRA individual income-tax guidance · checked 14 Sep 2026','Chanzo: Mwongozo wa kodi ya mapato wa TRA · umeangaliwa 14 Sep 2026'));
 if(storageError)say(t('Storage needs attention: ','Hifadhi inahitaji uhakiki: ')+storageError);
}
window.refreshKodiWorkspace=refresh;
function reviewReady(){navigateTo('records');$('upload-container').style.display='none';$('receipt-preview-container').style.display=draftFile?'block':'none';$('empty-state').style.display='none';$('success-state').style.display='none';$('scan-details').style.display='block';$('scan-loading').style.display='none';$('scan-confirmed').checked=false;set('kr-feedback','');}
function clearDraft(){if(previewURL)URL.revokeObjectURL(previewURL);previewURL='';draftFile=null;draftHash='';draftSource='manual';for(const id of ['scan-date','scan-seller','scan-total','scan-tax','scan-reference'])$(id).value='';$('scan-confirmed').checked=false;$('scan-type').value='expense';$('file-upload').value='';$('receipt-image-preview').removeAttribute('src');}
function manual(){if(scanning)return;clearDraft();reviewReady();$('scan-date').value=today();set('kr-extraction-status',t('Manual entry · check the source before saving.','Ingizo la mkono · hakiki chanzo kabla ya kuhifadhi.'));refresh();}
async function readFile(file){
 if(scanning||!file)return;
 if(file.size>8*1024*1024||!['image/jpeg','image/png','image/webp','application/pdf'].includes(file.type)){say(t('Choose a JPG, PNG, WebP or one-page PDF under 8 MB.','Chagua JPG, PNG, WebP au PDF ya ukurasa mmoja chini ya MB 8.'));return;}
 clearDraft();draftFile=file;reviewReady();scanning=true;$('scan-details').style.display='none';$('scan-loading').style.display='block';
 const img=$('receipt-image-preview');img.style.display='none';$('receipt-file-preview').style.display='flex';set('receipt-file-name',file.name);
 try{
  // Reuse the existing TIDRE reader and vendored assets on this same GitHub Pages host.
  const [io,core]=await Promise.all([import(new URL('io.js',readerRoot).href),import(new URL('core.js',readerRoot).href)]);
  const result=await io.extractDocument(file,(label)=>set('kr-reading-status',t(label+'…','Inasoma risiti…')));
  const fields=core.parseReceipt(result.text);draftHash=result.sourceHash;draftSource=result.method;
  $('scan-date').value=fields.date;$('scan-seller').value=fields.seller;$('scan-total').value=fields.amount??'';$('scan-tax').value=fields.vat??'';$('scan-reference').value=fields.reference;
  previewURL=URL.createObjectURL(result.imageBlob);img.src=previewURL;img.style.display='block';$('receipt-file-preview').style.display='none';
  set('kr-extraction-status',t('Read on this device. Check every field, especially the party name and receipt reference.','Imesomwa kwenye kifaa. Hakiki kila taarifa, hasa jina na namba ya risiti.'));
 }catch(err){set('kr-extraction-status',t('Automatic reading was unavailable. Enter the receipt details manually.','Usomaji wa kiotomatiki haukupatikana. Ingiza taarifa za risiti mwenyewe.'));say(err.message);$('scan-date').value=today();}
 finally{scanning=false;$('scan-loading').style.display='none';$('scan-details').style.display='block';refresh();}
}
window.simulateScan=()=>readFile($('file-upload').files[0]);
window.loadDemoExtraction=async()=>{if(scanning)return;navigateTo('records');try{const response=await fetch(new URL('sample-receipt.pdf',readerRoot));if(!response.ok)throw Error('Sample receipt unavailable.');await readFile(new File([await response.blob()],'sample-receipt.pdf',{type:'application/pdf'}));}catch(err){say(err.message);}};
window.confirmReceipt=async()=>{
 if(scanning)return;
 if(storageError){say(t('Resolve the storage issue before saving.','Tatua tatizo la hifadhi kabla ya kuhifadhi.'));return;}
 if(!$('scan-confirmed').checked){say(t('Please confirm you have reviewed every field.','Thibitisha umehakiki kila taarifa.'));return;}
 const row={id:crypto.randomUUID(),date:$('scan-date').value,seller:$('scan-seller').value.trim(),amount:Number($('scan-total').value),vat:$('scan-tax').value.trim()===''?null:Number($('scan-tax').value),type:$('scan-type').value,reference:$('scan-reference').value.trim().slice(0,80),source:draftSource,sourceHash:draftHash,hasEvidence:Boolean(draftFile),createdAt:new Date().toISOString()};
 const button=$('t-scan-confirm');button.disabled=true;
 try{const next=appendEntry(entries,row);if(draftFile)await putEvidence(row.id,draftFile);localStorage.setItem(LEDGER_KEY,JSON.stringify(next));entries=next;$('scan-details').style.display='none';$('success-state').style.display='block';refresh();say(t('Record saved. Your totals are up to date.','Imehifadhiwa. Jumla imesasishwa.'));}
 catch(err){say(err.message);}finally{button.disabled=false;}
};
window.resetScan=manual;
document.addEventListener('click',async event=>{const button=event.target.closest('[data-kr]');if(!button)return;const action=button.dataset.kr;
 if(action==='manual')manual();else if(action==='sample')window.loadDemoExtraction();else if(action==='upload')$('file-upload').click();else if(action==='overview')navigateTo('dashboard');else if(action==='export'){if(!entries.length){say(t('Save a record before exporting.','Hifadhi kumbukumbu kabla ya kupakua.'));return;}download(new Blob([ledgerCSV(entries)],{type:'text/csv;charset=utf-8'}),'kodirahisi-records.csv');}else if(action==='source'){try{const file=await sourceReceipt(button.dataset.id);if(!file)throw Error(t('Source receipt is unavailable on this device.','Risiti ya asili haipatikani kwenye kifaa hiki.'));download(file,file.name||'receipt');}catch(err){say(err.message);}}
});
refresh();
