(() => {
  'use strict';
  const DAYS={1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday'};
  const ACTIVITIES={
    1:{title:'A vest before the next shift',sprite:4,items:['apparel'],intro:'The deliveries are done. Tiny Gorilla needs a reflective vest for the next shift.',line:'Security said I need workwear. Apparently fur does not count.',done:'A vest that fits. Now security can stop calling me a lost pet.'},
    2:{title:'The helmet fitting',sprite:9,items:['helmet'],intro:'Messy Painter is borrowing a delivery bicycle. Pick up the helmet, then fit it to the courier.',line:'The paint on my shoes is still a mystery. Let’s keep it out of my hair.',done:'Good fit. I promise not to paint this one.'},
    3:{title:'Give the bicycle a voice',sprite:16,items:['bell'],intro:'Invisible Eyes Fan is ready for a bicycle check. Pick up a bell and attach it to the bicycle.',line:'Does this bicycle have a bell? I can’t see past my cap.',done:'At least you can hear me coming now.'},
    4:{title:'The evening equipment check',sprite:5,items:['lamps','reflectors'],intro:'Camera Tourist is preparing for an evening shift. Fit the bicycle lights and reflectors.',line:'I’m heading out after dark. Could you check the bicycle lights?',done:'Lights on. Obviously I took a photo of them.'},
    5:{title:'One last check before the weekend',sprite:20,items:['id','brakes'],intro:'Many Bags Commuter has one more checklist: attach the worker ID and check the brakes.',line:'Seven bags. One bicycle. Please check the brakes.',done:'ID attached. Brakes checked. Now, which bag has my keys?'}
  };
  const GUIDE_LINES={
    1:'Finding a vest that fits Tiny Gorilla is the real job today.',
    2:'The painter brought brushes, paint and absolutely no helmet. One of those things needs fixing before the next shift.',
    3:'The cap covers his eyes. We can at least give the bicycle a bell.',
    4:'The camera has a flash. The bicycle still needs its own lights and reflectors.',
    5:'One last check, then we can both clock out.'
  };
  const SIDEBAR_LINES={
    apparel:'These inspections checked the equipment behind the deliveries, including missing or inadequate workwear. Tiny Gorilla says his fur counts. I’m finding him a vest before his next trip anyway.',
    helmet:'Messy Painter is borrowing a delivery bicycle, but she didn’t bring a helmet. Let’s find one that fits before she heads out.',
    bell:'Invisible Eyes Fan can’t see past that cap. A bell won’t fix the hat, but people can hear the bicycle coming. Let’s give it a voice before the next trip.',
    lamps:'Camera Tourist brought a camera flash. Sadly, that doesn’t count as a bicycle light. We’re fitting the lights before his next evening trip.',
    reflectors:'He’s taken 400 bridge photos. Let’s make sure drivers can spot him, too. The bicycle needs reflectors as well as lights.',
    id:'The inspections checked identification for people making bicycle deliveries. The percentage below shows how often an identification issue was recorded.',
    brakes:'The inspections also checked bicycle brakes. The percentage below shows how often a brake issue was recorded.'
  };
  const ITEMS={
    apparel:{name:'Reflective vest',action:'Pick up vest',target:'courier',meaning:'Inspectors recorded missing or inadequate upper-body workwear. A reflective vest helps a courier be seen during the next trip.'},
    helmet:{name:'Helmet',action:'Pick up helmet',target:'courier',meaning:'Headgear issues recorded during business inspections. The count combines the two headgear options, once per inspection.'},
    bell:{name:'Bicycle bell',action:'Pick up bell',target:'bicycle',meaning:'A bicycle’s audible warning device. These records flag warning-device issues.'},
    lamps:{name:'Bicycle lights',action:'Pick up lights',target:'bicycle',meaning:'The percentage shows how often bicycle-light issues were recorded during business inspections.'},
    reflectors:{name:'Reflectors',action:'Pick up reflectors',target:'bicycle',meaning:'Issues recorded for reflective tires or reflectors.'},
    id:{name:'Worker ID',action:'Pick up ID',target:'courier',meaning:'Worker identification issues recorded during business inspections.'},
    brakes:{name:'Brake check',action:'Check brakes',target:'bicycle',meaning:'Brake issues recorded during business inspections of delivery bicycles.'}
  };
  const ART={
    apparel:'<path fill="#304349" d="M6 2h4v3h4V2h4v4h3v16H3V6h3z"/><path fill="#c8d653" d="M6 4h2v3h8V4h2v4h1v12H5V8h1z"/><path fill="#f6f2ce" d="M7 8h2v12H7zm8 0h2v12h-2zM5 14h14v2H5z"/><path fill="#617537" d="M11 7h2v13h-2z"/>',
    helmet:'<path fill="#304349" d="M6 3h12v2h3v4h1v7h-4v-3h-2v2H5v-2H2V9h1V5h3z"/><path fill="#db704d" d="M6 5h11v2h3v5h-4v1H5v-2H4V7h2z"/><path fill="#f4d08a" d="M7 5h2v4H7zm5 0h2v4h-2z"/><path fill="#304349" d="M7 16h2v4h5v-4h2v6H7z"/>',
    bell:'<path fill="#304349" d="M7 4h10v2h3v3h1v8H3V9h1V6h3zM1 17h22v3H1z"/><path fill="#e7bb52" d="M7 6h9v2h3v7H5V9h2z"/><path fill="#f9e6ad" d="M7 7h3v3H7z"/><path fill="#697c85" d="M18 4h4v3h-4zM10 20h4v3h-4z"/>',
    lamps:'<path fill="#304349" d="M2 6h13v13H2zM15 9h7v7h-7z"/><path fill="#f7e8b5" d="M4 8h9v9H4z"/><path fill="#688392" d="M15 11h5v3h-5z"/>',
    reflectors:'<path fill="#304349" d="M2 3h9v18H2zm11 0h9v18h-9z"/><path fill="#e07749" d="M4 5h5v14H4z"/><path fill="#efdd8d" d="M15 5h5v14h-5z"/><path fill="#faf3d0" d="M5 7h2v4H5zm11 0h2v4h-2z"/>',
    id:'<path fill="#304349" d="M8 0h8v2H8zm-2 2h2v5H6zm10 0h2v5h-2zM3 7h18v16H3z"/><path fill="#f3e6bf" d="M5 9h14v12H5z"/><path fill="#4c78a8" d="M7 11h4v4H7zm-1 5h6v3H6z"/><path fill="#778c86" d="M13 12h4v2h-4zm0 4h4v2h-4z"/>',
    brakes:'<path fill="#304349" d="M3 2h8v3H8v6H5V5H3zm10 0h8v3h-2v6h-3V5h-3zM4 12h4v9H4zm12 0h4v9h-4zM8 17h8v3H8z"/><path fill="#7f9296" d="M5 3h3v2H5zm11 0h3v2h-3zM6 13h2v6H6zm10 0h2v6h-2z"/>'
  };
  const svg=id=>'<svg viewBox="0 0 24 24" aria-hidden="true" shape-rendering="crispEdges">'+ART[id]+'</svg>';
  const $=id=>document.getElementById(id);
  const percent=n=>n>0&&n<.05?'<0.1%':n.toFixed(1)+'%';
  const BOROUGHS=['manhattan','brooklyn','bronx','queens','staten-island'];
  let art,datasets,data,comparison,onComplete,onContinue;
  let state={day:null,borough:null,selected:null,focus:'apparel',fitted:new Set(),chatOpen:false,courierChatOpen:false};
  const activity=()=>ACTIVITIES[state.day];
  const complete=()=>!!activity()&&activity().items.every(id=>state.fitted.has(id));
  const findingData=()=>data&&(data.inspection_count?data:comparison);
  function readState(){const finding=findingData();return {day:state.day,borough:state.borough,inspectionCount:data?.inspection_count??null,dataAvailable:!!data?.inspection_count,findingScope:finding?(data.inspection_count?'borough':'nyc-comparison'):null,findingInspectionCount:finding?.inspection_count??null,selected:state.selected,focus:state.focus,fitted:[...state.fitted],required:activity()?.items||[],complete:complete(),guideDialogueOpen:state.chatOpen,courierDialogueOpen:state.courierChatOpen};}
  function message(text){$('depot-message').textContent=text;$('depot-dialogue').hidden=!text;}
  function updateGuidance(){
    if(!activity())return;
    if(complete())message('Equipment check complete. You can '+(state.day==='5'?'finish the week.':'start '+DAYS[Number(state.day)+1]+'.'));
    else if(state.selected){const item=ITEMS[state.selected];message('Now click '+(item.target==='courier'?CUSTOMER_NAME():'the bicycle')+' to fit '+item.name.toLowerCase()+'.');}
    else message(activity().intro+(state.day==='1'?' Choose the vest on the right, then click Tiny Gorilla to fit it.':''));
  }
  function positionChat(){
    positionCourierChat();
    if(!state.chatOpen)return;
    const stage=$('depot-stage'),bubble=$('depot-chat'),width=Math.min(280,Math.max(160,stage.clientWidth-24));
    const point=.75*stage.clientWidth,left=Math.max(12,Math.min(stage.clientWidth-width-12,point-width/2));
    bubble.style.left=left+'px';bubble.style.width=width+'px';
    const height=bubble.offsetHeight||120;
    bubble.style.bottom=Math.max(12,Math.min(stage.clientHeight-height-12,stage.clientHeight*.28+$('depot-attendant').clientWidth+22))+'px';
    bubble.style.setProperty('--chat-tail',(point-left)+'px');
  }
  function positionCourierChat(){
    if(!state.courierChatOpen)return;
    const stage=$('depot-stage'),bubble=$('depot-courier-chat'),width=Math.min(280,Math.max(160,stage.clientWidth-24));
    const point=.30*stage.clientWidth,left=Math.max(12,Math.min(stage.clientWidth-width-12,point-width/2));
    bubble.style.left=left+'px';bubble.style.width=width+'px';
    const height=bubble.offsetHeight||120;
    bubble.style.bottom=Math.max(12,Math.min(stage.clientHeight-height-12,stage.clientHeight*.28+$('depot-courier').clientWidth+22))+'px';
    bubble.style.setProperty('--chat-tail',(point-left)+'px');
  }
  function openCourierChat(){
    if(!activity()||$('depot-screen').hidden)throw new Error('Visit the depot first.');
    closeChat();state.courierChatOpen=true;
    $('depot-courier').classList.add('chatting');$('depot-courier').setAttribute('aria-expanded','true');
    $('depot-courier-chat-name').textContent=CUSTOMER_NAME();
    $('depot-courier-chat-line').textContent=complete()?activity().done:activity().line;
    $('depot-courier-chat').hidden=false;positionCourierChat();$('depot-courier-chat').focus({preventScroll:true});return readState();
  }
  function openAttendantChat(){
    if(!activity()||$('depot-screen').hidden)throw new Error('Visit the depot first.');
    closeChat();
    state.chatOpen=true;$('depot-attendant').classList.add('chatting');$('depot-attendant').setAttribute('aria-expanded','true');
    $('depot-chat-name').textContent='UPS Gorilla';$('depot-chat-line').textContent=state.day==='1'&&complete()?'That fits. He’s ready for the next shift.':GUIDE_LINES[state.day];
    $('depot-chat').hidden=false;positionChat();$('depot-chat').focus({preventScroll:true});return readState();
  }
  function closeChat(restoreFocus=false){
    const selectedCharacter=state.courierChatOpen?'depot-courier':'depot-attendant';
    state.chatOpen=false;$('depot-chat').hidden=true;$('depot-attendant').classList.remove('chatting');$('depot-attendant').setAttribute('aria-expanded','false');
    state.courierChatOpen=false;$('depot-courier-chat').hidden=true;$('depot-courier').classList.remove('chatting');$('depot-courier').setAttribute('aria-expanded','false');
    if(restoreFocus)$(selectedCharacter).focus();return readState();
  }
  function dismissOutside(event){
    if(state.chatOpen&&!$('depot-attendant').contains(event.target)&&!$('depot-chat').contains(event.target))closeChat();
    if(state.courierChatOpen&&!$('depot-courier').contains(event.target)&&!$('depot-courier-chat').contains(event.target))closeChat();
  }
  function focusItem(id){
    if(!activity()?.items.includes(id))throw new Error('Explore equipment from today’s check.');
    state.focus=id;
    const summary=findingData(),finding=(summary||data).issues.find(row=>row.id===id);
    const available=!!summary?.inspection_count,local=data.inspection_count>0;
    const coverage=comparison?.boroughs.join(', ').replace(/, ([^,]+)$/,' and $1');
    $('depot-finding-scope').hidden=local||!available;
    $('depot-finding-scope').textContent=local?'':'NYC comparison · '+comparison?.boroughs.length+' boroughs';
    $('depot-finding-title').textContent=finding.label;
    $('depot-finding-rate').textContent=available?percent(finding.rate):'—';
    $('depot-finding-summary').textContent=available?(local?'of '+data.name+' inspections recorded this equipment issue.':'of available NYC inspections recorded this equipment issue.'):'No borough estimate available.';
    $('depot-finding-meaning').textContent=available?ITEMS[id].meaning+(local?'':' Comparison covers '+coverage+'.'):'Missing records do not mean that workers in '+data.name+' had no equipment problems.';
    $('depot-story-line').textContent=available?SIDEBAR_LINES[id]:'The equipment check still works here. But this file has no '+data.name+' inspection records, so we can’t show a local percentage. Let’s get '+CUSTOMER_NAME()+' ready for the next trip.';
    if(id==='apparel'&&state.fitted.has(id))$('depot-story-line').textContent=available?'The vest fits. Tiny Gorilla is ready for the next shift. You can start Tuesday when you’re ready.':'The vest fits. Tiny Gorilla is ready for the next shift. This file still has no '+data.name+' inspection records, so there’s no local percentage to compare.';
    return readState();
  }
  function renderEquipment(){
    $('depot-items').replaceChildren();
    for(const id of activity().items){
      const item=ITEMS[id],done=state.fitted.has(id),button=document.createElement('button');
      button.type='button';button.className='depot-item'+(state.selected===id?' selected':'')+(done?' fitted':'');button.dataset.item=id;
      button.setAttribute('aria-pressed',String(state.selected===id));
      const picture=document.createElement('span');picture.className='depot-item-art';picture.innerHTML=svg(id);
      const label=document.createElement('span');label.textContent=done?(id==='brakes'?'✓ Brakes checked':'✓ '+item.name):item.action;
      button.append(picture,label);button.addEventListener('click',()=>chooseItem(id));$('depot-items').append(button);
    }
    for(const id of Object.keys(ITEMS))$('depot-fitted-'+id).hidden=!state.fitted.has(id);
    $('depot-bicycle').classList.toggle('lights-fitted',state.fitted.has('lamps'));
    $('depot-progress').textContent=state.fitted.size+' / '+activity().items.length+' checks complete';
    $('depot-continue').disabled=!complete();
    $('depot-courier').setAttribute('aria-label',state.selected?'Fit selected equipment to '+CUSTOMER_NAME():'Talk to '+CUSTOMER_NAME());
    $('depot-attendant').setAttribute('aria-label','Talk to UPS Gorilla, the depot guide');
  }
  function chooseItem(id){
    if(!activity()?.items.includes(id))throw new Error('Choose equipment from today’s bench.');
    closeChat();
    focusItem(id);
    if(state.fitted.has(id)){message(ITEMS[id].name+' is already checked. You can still explore its inspection finding.');return readState();}
    if(id==='brakes'){state.selected=id;return fitItem('bicycle');}
    state.selected=id;renderEquipment();
    message('Now click '+(ITEMS[id].target==='courier'?CUSTOMER_NAME():'the bicycle')+' to fit '+ITEMS[id].name.toLowerCase()+'.');
    $(ITEMS[id].target==='courier'?'depot-courier':'depot-bicycle').focus();
    return readState();
  }
  function CUSTOMER_NAME(){return $('depot-courier-name').textContent;}
  function fitItem(target){
    const id=state.selected;
    closeChat();
    if(!id||ITEMS[id].target!==target){updateGuidance();return readState();}
    state.fitted.add(id);state.selected=null;renderEquipment();focusItem(id);
    updateGuidance();
    if(complete()){
      onComplete();$('depot-continue').focus();
    }else{
      Array.from($('depot-items').children).find(button=>!state.fitted.has(button.dataset.item))?.focus();
    }
    return readState();
  }
  function show(day,names,borough){
    if(!ACTIVITIES[day]||!datasets.boroughs[borough])throw new Error('Choose a borough and one of the five equipment activities.');
    closeChat();data=datasets.boroughs[borough];state={day:String(day),borough,selected:null,focus:ACTIVITIES[day].items[0],fitted:new Set(),chatOpen:false,courierChatOpen:false};
    $('depot-screen').dataset.day=day;$('depot-screen').dataset.borough=borough;$('depot-title').textContent=activity().title;
    $('depot-day').textContent=DAYS[day]+' · '+data.name+' depot';
    $('depot-courier-img').src=art.customers[activity().sprite];$('depot-courier-name').textContent=names[activity().sprite];
    $('depot-attendant-img').src=$('depot-guide').src;$('depot-story-guide').src=$('depot-guide').src;
    $('depot-continue').textContent=String(day)==='5'?'Finish the week':'Start '+DAYS[Number(day)+1];
    updateGuidance();renderEquipment();focusItem(state.focus);$('screen-title').focus();return readState();
  }
  function init(config){
    ({art,data:datasets,onComplete,onContinue}=config);
    if(BOROUGHS.some(borough=>{
      const summary=datasets.boroughs?.[borough];
      return !summary?.name||!Number.isInteger(summary.inspection_count)||summary.inspection_count<0||Object.keys(ITEMS).some(id=>!summary.issues?.some(row=>row.id===id&&row.inspection_count===summary.inspection_count&&Number.isInteger(row.issue_count)&&row.issue_count>=0&&row.issue_count<=row.inspection_count&&(row.inspection_count?Number.isFinite(row.rate)&&Math.abs(row.rate-100*row.issue_count/row.inspection_count)<1e-8:row.rate===null)));
    }))throw new Error('The equipment findings are incomplete.');
    const recorded=BOROUGHS.map(key=>datasets.boroughs[key]).filter(summary=>summary.inspection_count>0),total=recorded.reduce((sum,summary)=>sum+summary.inspection_count,0);
    comparison=total?{boroughs:recorded.map(summary=>summary.name),inspection_count:total,issues:Object.keys(ITEMS).map(id=>{
      const first=recorded[0].issues.find(row=>row.id===id),count=recorded.reduce((sum,summary)=>sum+summary.issues.find(row=>row.id===id).issue_count,0);
      return {...first,issue_count:count,inspection_count:total,rate:100*count/total};
    })}:null;
    $('depot-courier').setAttribute('aria-controls','depot-courier-chat');$('depot-courier').setAttribute('aria-expanded','false');
    $('depot-courier').addEventListener('click',()=>state.selected?fitItem('courier'):openCourierChat());
    $('depot-bicycle').addEventListener('click',()=>fitItem('bicycle'));
    $('depot-attendant').setAttribute('aria-controls','depot-chat');$('depot-attendant').setAttribute('aria-expanded','false');
    $('depot-attendant').addEventListener('click',openAttendantChat);
    $('close-depot-chat').addEventListener('click',()=>closeChat(true));
    $('close-depot-courier-chat').addEventListener('click',()=>closeChat(true));
    $('depot-continue').addEventListener('click',()=>{if(!complete())throw new Error('Finish the equipment check before continuing.');onContinue();});
    for(const id of Object.keys(ITEMS))$('depot-fitted-'+id).innerHTML=svg(id);
    $('depot-fitted-helmet').innerHTML='<svg viewBox="0 0 22 12" aria-hidden="true" shape-rendering="crispEdges"><path fill="#304349" d="M0 5h1V3h2V1h4V0h9v1h3v2h2v2h1v3H0zM1 8h2v4H1zm18 0h2v4h-2z"/><path fill="#db704d" d="M2 5h1V3h4V2h9v1h3v2h1v2H2z"/><path fill="#f4d08a" d="M7 2h2v3H7zm5 0h2v3h-2z"/></svg>';
    $('depot-fitted-reflectors').innerHTML='<svg viewBox="0 0 96 60" aria-hidden="true" shape-rendering="crispEdges"><path fill="#f3cf63" d="M14 43h4v6h-4zm64 0h4v6h-4z"/></svg>';
  }
  function reset(){closeChat();data=null;state={day:null,borough:null,selected:null,focus:'apparel',fitted:new Set(),chatOpen:false,courierChatOpen:false};}
  window.EquipmentDepot={init,show,readState,chooseItem,fitItem,focusItem,openAttendantChat,openCourierChat,closeChat,positionChat,dismissOutside,reset};
})();
