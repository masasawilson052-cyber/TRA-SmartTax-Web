export const LEDGER_KEY = 'kodirahisi.records.v1';
export const today = () => new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Dar_es_Salaam',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
export const escapeText = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function validateEntry(row) {
  if(!['sale','expense'].includes(row.type)) throw Error('Choose a sale or expense.');
  if(!row.seller.trim() || row.seller.length>100) throw Error('Enter a supplier or customer name (maximum 100 characters).');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(row.date)||!Number.isFinite(Date.parse(row.date+'T12:00:00Z'))||new Date(row.date+'T12:00:00Z').toISOString().slice(0,10)!==row.date||row.date>today()) throw Error('Choose a valid date, today or earlier.');
  if(!Number.isSafeInteger(row.amount)||row.amount<=0||row.amount>100000000000) throw Error('Enter a positive total in whole TZS (maximum 100 billion).');
  if(row.vat!==null && (!Number.isFinite(row.vat)||row.vat<0||row.vat>row.amount)) throw Error('Printed tax must be between zero and the receipt total.');
  return row;
}
export function appendEntry(records,row) {
  validateEntry(row);
  if(records.some(r=>(row.sourceHash && r.sourceHash===row.sourceHash)||(r.date===row.date && r.type===row.type && r.amount===row.amount && r.seller.trim().toLowerCase()===row.seller.trim().toLowerCase()))) throw Error('This receipt appears to be saved already. Review your records before adding it again.');
  return [...records,row];
}
export function ledgerTotals(records) { return records.reduce((sum,r)=>{sum[r.type==='sale'?'sales':'expenses']+=r.amount;return sum;},{sales:0,expenses:0,count:records.length}); }
export function ledgerCSV(records) { const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,"'$&").replace(/"/g,'""')+'"';return [['Date','Type','Party','Total TZS','Printed tax TZS','Reference','Source'],...records.map(r=>[r.date,r.type,r.seller,r.amount,r.vat,r.reference,r.source])].map(row=>row.map(cell).join(',')).join('\r\n'); }
