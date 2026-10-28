(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const BOROUGHS=['manhattan','brooklyn','bronx','queens','staten-island'];
  const AREAS=['city',...BOROUGHS.map(id=>'b_'+id)];
  const DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const TYPES=[['food','Food','#d9684d'],['groceries','Groceries','#4d9070'],['packages','Packages','#aa7b39']];
  const VIEWS=['deliveries','equipment','sources'];
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const percent=(value,tiny=false)=>Number.isFinite(value)?tiny&&value>0&&value<.05?'<0.1%':value.toFixed(1)+'%':'—';
  const number=value=>value.toLocaleString('en-US');
  let survey,equipment,lookup,pooled,active='deliveries';
  const areaName=area=>area==='city'?'NYC':survey.boroughs[area.slice(2)].name;
  const row=(area,day,category)=>lookup.get(area+'|'+day+'|'+category);
  const upperLimit=values=>Math.max(10,10*Math.ceil(Math.max(0,...values.filter(Number.isFinite))*1.12/10));
  const svg=(label,body,height)=>'<svg viewBox="0 0 920 '+height+'" role="img" aria-label="'+escape(label)+'">'+body+'</svg>';
  const text=(x,y,value,extra='')=>'<text x="'+x+'" y="'+y+'" '+extra+'>'+escape(value)+'</text>';
  function legend(){return TYPES.map(([,name,color])=>'<span><i style="background:'+color+'"></i>'+name+'</span>').join('');}
  function surveyTable(host,labels,series){
    host.innerHTML='<thead><tr><th scope="col">'+labels[0]+'</th>'+TYPES.map(([,name])=>'<th scope="col">'+name+'</th>').join('')+'</tr></thead><tbody>'+series.map(([name,rows])=>'<tr><th scope="row">'+escape(name)+'</th>'+rows.map(r=>'<td>'+escape(percent(r?.rate))+'</td>').join('')+'</tr>').join('')+'</tbody>';
  }
  function renderBoroughs(){
    const day=$('data-day').value,label=DAYS[Number(day)-1];
    const series=AREAS.map(area=>[areaName(area),TYPES.map(([id])=>row(area,day,id))]);
    const upper=upperLimit(series.flatMap(([,rows])=>rows.map(r=>r?.rate))),left=45,right=20,top=20,bottom=238,group=(920-left-right)/AREAS.length;
    let drawing='';
    for(let value=0;value<=upper;value+=upper<=20?5:10){const y=bottom-value/upper*(bottom-top);drawing+='<line x1="'+left+'" x2="900" y1="'+y+'" y2="'+y+'" class="data-grid"/>'+text(36,y+4,value+'%','text-anchor="end"');}
    series.forEach(([name,rows],i)=>{
      const center=left+(i+.5)*group;
      rows.forEach((r,j)=>{if(!Number.isFinite(r?.rate))return;const h=r.rate/upper*(bottom-top),x=center+(j-1)*27-12;drawing+='<rect x="'+x+'" y="'+(bottom-h)+'" width="24" height="'+h+'" fill="'+TYPES[j][2]+'"><title>'+escape(name+' · '+TYPES[j][1]+': '+percent(r.rate))+'</title></rect>';});
      drawing+=name==='Staten Island'?text(center,262,'Staten','text-anchor="middle"')+text(center,279,'Island','text-anchor="middle"'):text(center,262,name,'text-anchor="middle"');
    });
    $('data-borough-title').textContent='Borough comparison · '+label;
    $('data-borough-chart').innerHTML=svg(label+' home deliveries by borough; weighted share of survey days',drawing,291);
    surveyTable($('data-borough-table'),['Area'],series);
  }
  function renderWeek(){
    const area=$('data-area').value,name=areaName(area),series=DAYS.map((label,i)=>[label,TYPES.map(([id])=>row(area,String(i+1),id))]);
    const upper=upperLimit(series.flatMap(([,rows])=>rows.map(r=>r?.rate))),left=45,right=22,top=20,bottom=218,x=i=>left+i*(920-left-right)/4,y=value=>bottom-value/upper*(bottom-top);
    let drawing='';
    for(let value=0;value<=upper;value+=upper<=20?5:10)drawing+='<line x1="45" x2="898" y1="'+y(value)+'" y2="'+y(value)+'" class="data-grid"/>'+text(36,y(value)+4,value+'%','text-anchor="end"');
    TYPES.forEach(([,label,color],j)=>{
      const points=series.map(([,rows],i)=>Number.isFinite(rows[j]?.rate)?x(i)+','+y(rows[j].rate):null).filter(Boolean);
      drawing+='<polyline points="'+points.join(' ')+'" fill="none" stroke="'+color+'" stroke-width="3"/>';
      series.forEach(([day,rows],i)=>{const r=rows[j];if(Number.isFinite(r?.rate))drawing+='<circle cx="'+x(i)+'" cy="'+y(r.rate)+'" r="4" fill="'+color+'"><title>'+escape(day+' · '+label+': '+percent(r.rate))+'</title></circle>';});
    });
    DAYS.forEach((label,i)=>drawing+=text(x(i),246,label.slice(0,3),'text-anchor="middle"'));
    $('data-week-title').textContent=name+' · Monday to Friday';
    $('data-week-chart').innerHTML=svg(name+' home deliveries, Monday to Friday; weighted share of survey days',drawing,263);
    surveyTable($('data-week-table'),['Weekday'],series);
  }
  function renderEquipment(){
    const area=$('data-equipment-area').value,local=equipment.boroughs[area],city=area==='city',summary=city?pooled:local;
    const names=pooled.boroughs.join(', ').replace(/, ([^,]+)$/,' and $1');
    $('data-equipment-title').textContent=city?'NYC equipment comparison':local.name+' equipment inspections';
    $('data-equipment-note').textContent=number(summary.inspection_count)+' eligible business inspection records · '+equipment.years+(city?' · '+names:'');
    const upper=upperLimit(summary.issues.map(r=>r.rate)),left=205,width=620;
    let drawing='';
    for(let value=0;value<=upper;value+=5){const x=left+value/upper*width;drawing+='<line x1="'+x+'" x2="'+x+'" y1="10" y2="304" class="data-grid"/>'+text(x,326,value+'%','text-anchor="middle"');}
    summary.issues.forEach((r,i)=>{const y=18+i*41,w=r.rate/upper*width;drawing+=text(left-12,y+18,r.label,'text-anchor="end"')+'<rect x="'+left+'" y="'+y+'" width="'+w+'" height="25" fill="#aa7b39"><title>'+escape(r.label+': '+percent(r.rate,true))+'</title></rect>'+text(left+w+8,y+18,percent(r.rate,true),'class="data-value"');});
    $('data-equipment-chart').innerHTML=svg('Equipment issues recorded in '+(city?'the four-borough comparison':local.name)+' inspections',drawing,340);
    $('data-equipment-table').innerHTML='<thead><tr><th scope="col">Equipment</th><th scope="col">Issue recorded</th><th scope="col">Eligible inspections</th><th scope="col">Share</th></tr></thead><tbody>'+summary.issues.map(r=>'<tr><th scope="row">'+escape(r.label)+'</th><td>'+number(r.issue_count)+'</td><td>'+number(r.inspection_count)+'</td><td>'+escape(percent(r.rate,true))+'</td></tr>').join('')+'</tbody>';
  }
  function view(name){
    active=name;
    VIEWS.forEach(id=>{const selected=id===name;$('data-panel-'+id).hidden=!selected;$('data-tab-'+id).setAttribute('aria-selected',String(selected));$('data-tab-'+id).setAttribute('tabindex',selected?'0':'-1');});
  }
  function open({borough=null,day='1'}={}){
    $('data-day').value=String(day);$('data-area').value=borough?'b_'+borough:'city';$('data-equipment-area').value=equipment.boroughs[borough]?.inspection_count?borough:'city';
    renderBoroughs();renderWeek();renderEquipment();view('deliveries');
    $('sources-dialog').showModal();$('sources-title').focus({preventScroll:true});return readState();
  }
  function readState(){return {open:$('sources-dialog').open,view:active,day:$('data-day').value,area:$('data-area').value,equipmentArea:$('data-equipment-area').value};}
  function init(config){
    survey=config.survey;equipment=config.equipment;lookup=new Map(survey.rows.map(r=>[r.area+'|'+r.day+'|'+r.category,r]));
    const recorded=BOROUGHS.map(id=>equipment.boroughs[id]).filter(r=>r.inspection_count>0),total=recorded.reduce((sum,r)=>sum+r.inspection_count,0);
    pooled={boroughs:recorded.map(r=>r.name),inspection_count:total,issues:recorded[0].issues.map(issue=>{const count=recorded.reduce((sum,r)=>sum+r.issues.find(x=>x.id===issue.id).issue_count,0);return {...issue,issue_count:count,inspection_count:total,rate:100*count/total};})};
    $('data-day').addEventListener('change',renderBoroughs);$('data-area').addEventListener('change',renderWeek);$('data-equipment-area').addEventListener('change',renderEquipment);
    VIEWS.forEach((id,i)=>{
      $('data-tab-'+id).addEventListener('click',()=>view(id));
      $('data-tab-'+id).addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(i+1)%3;else if(event.key==='ArrowLeft')next=(i+2)%3;else if(event.key==='Home')next=0;else if(event.key==='End')next=2;else return;event.preventDefault();view(VIEWS[next]);$('data-tab-'+VIEWS[next]).focus();});
    });
    $('sources-dialog').addEventListener('close',()=>$('open-data').focus({preventScroll:true}));
    $('data-borough-legend').innerHTML=legend();$('data-week-legend').innerHTML=legend();
  }
  window.DeliveryData={init,open,readState};
})();
