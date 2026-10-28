(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const DAYS=['','Monday','Tuesday','Wednesday','Thursday','Friday'];
  const TYPES={food:{label:'Food',letter:'F',noun:'prepared-food',color:'#d9684d'},groceries:{label:'Groceries',letter:'G',noun:'grocery',color:'#4d9070'},packages:{label:'Packages',letter:'P',noun:'package',color:'#aa7b39'}};
  const ICONS={"pizza":"<path fill=\"#304349\" d=\"M3 3h26v6H3zM2 9h28v6H2zM3 15h26v6H3zM2 21h28v6H2z\"/><path fill=\"#b8895f\" d=\"M4 4h24v4H4zM3 10h26v4H3zM4 16h24v4H4zM3 22h26v4H3z\"/><path fill=\"#ead4a6\" d=\"M4 4h24v1H4zM3 10h26v1H3zM4 16h24v1H4zM3 22h26v1H3z\"/><path fill=\"#bf5d46\" d=\"M13 5h5v1h-1v1h-3V6h-1zM14 11h5v1h-1v1h-3v-1h-1zM13 17h5v1h-1v1h-3v-1h-1zM14 23h5v1h-1v1h-3v-1h-1z\"/>","dumplings":"<path fill=\"#304349\" d=\"M0 7h16v8H0z\"/><path fill=\"#9aa9ad\" d=\"M1 8h14v5H1z\"/><path fill=\"#304349\" d=\"M1 5h1V3h4v2h1v5H1zm7 1h1V4h4v2h1v5H8zM5 11h1V9h4v2h1v3H5z\"/><path fill=\"#eadcbb\" d=\"M2 5h1V4h2v1h1v4H2zm7 1h1V5h2v1h1v4H9zM6 11h1v-1h2v1h1v2H6z\"/><path fill=\"#bdad8f\" d=\"M3 5h1v2H3zm7 1h1v2h-1zM7 11h1v1H7z\"/>","fries":"<path fill=\"#304349\" d=\"M2 1h3v2h3V1h3v2h3v12H2z\"/><path fill=\"#e8bc61\" d=\"M3 2h1v6H3zm3 2h1v5H6zm3-2h1v7H9zm3 2h1v5h-1z\"/><path fill=\"#bf5d46\" d=\"M3 8h10v6H3z\"/><path fill=\"#ebcd84\" d=\"M6 10h4v2H6z\"/>","box":"<path fill=\"#304349\" d=\"M1 3h14v12H1z\"/><path fill=\"#bd8957\" d=\"M2 4h12v10H2z\"/><path fill=\"#e4be7c\" d=\"M2 4h12v3H2zM7 4h2v10H7z\"/>","bag":"<path fill=\"#304349\" d=\"M5 1h6v3h3v11H2V4h3z\"/><path fill=\"#bb895e\" d=\"M3 5h10v9H3z\"/><path fill=\"#ead4a6\" d=\"M6 2h4v2H6zM4 6h2v6H4z\"/>","banana":"<path fill=\"#304349\" d=\"M11 1h3v6h-1v3h-2v2H8v2H3v-2H1V8h3v3h3V9h2V6h2z\"/><path fill=\"#e6cb63\" d=\"M12 3h1v4h-1v3h-2v2H7v1H3v-1H2V9h1v2h4V9h3V6h2z\"/>","banana-bag":"<path fill=\"#304349\" d=\"M5 1h6v3h3v11H2V4h3z\"/><path fill=\"#bb895e\" d=\"M3 5h10v9H3z\"/><path fill=\"#ead4a6\" d=\"M6 2h4v2H6zM4 6h2v6H4z\"/><path fill=\"#e6cb63\" d=\"M6 0h2v3h2V1h2v3H8V3H6z\"/>","nachos":"<path fill=\"#304349\" d=\"M1 8h20v5h-2v6H3v-6H1zM24 7h7v18h-7z\"/><path fill=\"#b45f48\" d=\"M3 10h16v3h-2v4H5v-4H3z\"/><path fill=\"#e5bb60\" d=\"M2 8l4-6 5 6zm7 1 5-8 5 8zm-3 1 5-5 3 5z\"/><path fill=\"#f0d991\" d=\"M25 9h5v14h-5z\"/><path fill=\"#304349\" d=\"M27 2h2v9h-2z\"/>"};
  function icon(id){return '<svg viewBox="0 0 '+(['pizza','nachos'].includes(id)?'32 32':'16 16')+'" aria-hidden="true" shape-rendering="crispEdges">'+(ICONS[id]||ICONS.box)+'</svg>';}
  const LOCATIONS=window.JourneyLocations;
  const NAMES={manhattan:'Manhattan',brooklyn:'Brooklyn',bronx:'Bronx',queens:'Queens','staten-island':'Staten Island'};
  const DISCO_CAST=[{sprite:22,x:43,y:52,dj:true},{sprite:6,x:70,y:53},{sprite:16,x:25,y:71},{sprite:13,x:70,y:71},{sprite:15,x:113,y:71},{sprite:17,x:49,y:89},{sprite:5,x:94,y:89},{sprite:4,x:137,y:89}];
  const BOWLING_CAST=[{sprite:4,x:36,y:84},{sprite:6,x:82,y:84},{sprite:16,x:129,y:84},{sprite:19,x:13,y:81},{sprite:13,x:15,y:48}];
  const LANES=[{back:[72,121],front:[31,110]},{back:[132,181],front:[124,203]},{back:[192,241],front:[217,296]}];
  const FOODS={pizza:'Pizza boxes',fries:'Fries',dumplings:'Dumplings'};
  const DISCO_LINES={22:'I have the music covered.',6:'I keep bumping into people in this thing.',4:'If there are bananas in the dumplings, I would like to know now.',16:'If you can see me dancing, I cannot see you dancing back.',5:'I took a photo of the empty table.',13:'I spent all day cooking. Tonight I’m ordering.',15:'I get food delivered too. They won’t come to the moon, though. I checked.',17:'I get groceries delivered now. The supermarket asked me to stop bringing the board.'};
  const BOWLING_LINES={4:'I asked for bowling shoes. They don’t have my size.',6:'I have to turn sideways to pick up the ball.',16:'I haven’t seen a single pin. I assume I’m winning.',19:'I’m off duty. Someone else can keep score.',13:'The kitchen is closed. I am here to knock things over.'};
  const SCENE_MOTION=[
    ['turn-left','pause','step-left','turn-right','pause','step-right','step-right','step-left'],
    ['pause','turn-right','step-right','pause','turn-left','pause','step-left','pause'],
    ['turn-right','pause','turn-left','step-left','pause','turn-right','step-right','pause']
  ];
  const COUNTS={deliveries:3,disco:3,bowling:5,barber:3,hotdog:2,runway:2,pigeons:1,wedding:3,camping:2};
  const SUPPLIES={clippers:'Clippers',towels:'Folded towels',mirror:'Small mirror',chair:'Chairs',flowers:'Flowers',cake:'Wedding cake',plate:'Hot dog plate',burger:'Burger',flashlight:'Flashlight',dinner:'Dinner bag',pins:'Pins',balls:'Bowling balls',pumpkins:'Pumpkin lanterns','costume-banner':'Costume banner'};
  const imageCache=new Map();
  let deps,stop,borough='brooklyn',day=1,state=null,key=null,motionTimer=null,actors=[],imageTicket=0;
  const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
  const rate=n=>n.toFixed(1)+'%';
  const row=(category,d=day,area='b_'+borough)=>deps.rows.find(r=>r.area===area&&String(r.day)===String(d)&&r.category===category);
  const progress=()=>!state?0:stop.mode==='disco'?Object.keys(state.orders).length:state.checked.size;
  const complete=()=>!!state&&progress()===COUNTS[stop.mode];
  const isActivity=()=>!!state&&stop.mode!=='deliveries';
  function readState(){return state?{borough,location:stop.id,landmark:LOCATIONS[borough].indexOf(stop),name:stop.name,weekday:String(day),mode:stop.mode,selectedItem:state.selected,readRequests:[...state.read],completedTargets:[...state.checked],progressKeys:stop.mode==='disco'?Object.keys(state.orders).map(x=>'table-'+x):[...state.checked],placedFoods:{...state.orders},barberPlacements:{...state.barberSlots},served:state.served,complete:complete(),progress:progress(),total:COUNTS[stop.mode],selectedCustomer:state.actor,visibleFact:state.fact,flashlight:state.light,flockAway:state.flockAway}:null;}
  function notify(){deps.onProgress(readState());}
  function fact(category){const here=row(category),city=row(category,day,'city');return 'On '+DAYS[day]+', '+rate(here.rate)+' of weighted '+NAMES[borough]+' survey days reported a '+TYPES[category].noun+' delivery at home. Across NYC, the share was '+rate(city.rate)+'.';}
  function positionCustomerDialogue(){
    if(!state?.chat)return;
    const a=actors.find(a=>a.sprite===state.chat.sprite);if(!a)return;
    const stage=$('bk-stage'),width=stage.clientWidth,height=stage.clientHeight,bubble=$('coney-chat');
    const w=Math.min(320,Math.max(180,width-28)),x=a.x/160*width,cx=Math.max(w/2+14,Math.min(width-w/2-14,x));
    const size=a.size,inset=a.sprite===7?.25:a.sprite===17?.0625:1/32;
    bubble.style.width=w+'px';bubble.style.left=cx+'px';bubble.style.top=(a.y/90*height-width*size/160*(1-inset)-18)+'px';bubble.style.setProperty('--coney-tail',x-cx+w/2+'px');
  }
  function renderCustomerDialogue(){
    const chat=$('coney-chat');chat.hidden=!state?.chat;if(chat.hidden)return;
    $('coney-chat-name').textContent=deps.customers[state.chat.sprite].name;
    const category=isActivity()?null:state.chat.category;
    $('coney-chat-line').textContent=state.chat.line;$('coney-chat-fact').hidden=!category;
    $('coney-chat-fact').textContent=category?fact(category):'';positionCustomerDialogue();
  }
  function closeCustomerDialogue(){
    if(!state)return;state.chat=null;state.actor=null;$('coney-chat').hidden=true;
    actors.forEach(a=>{a.element.classList.remove('selected');a.element.setAttribute('aria-pressed','false');});
    guide(sceneHint(),sidebarIntroduction());
  }
  function sceneHint(){
    if(stop.mode==='deliveries'){if(complete())return 'All three requests are complete. Click “'+(day===5?'Finish Friday & see the week':'Finish this stop')+'” to continue.';const order=stop.orders.find(o=>o.id===state.selected);return order?order.label+' selected. Click '+deps.customers[order.sprite].name+' to hand over the order.':stop.intro;}
    if(complete())return ({disco:'All three foods are on the table.',bowling:'All three lanes and both racks are ready.',barber:'The clippers, towels and mirror are in place.',hotdog:'Both contestants have their food.',runway:'The lanterns and costume banner are set up.',pigeons:'The entrance is clear.',wedding:'The wedding deliveries are set out.',camping:'Dinner is on the campsite table.'})[stop.mode]+' You can finish this stop.';
    if(stop.mode==='disco'){
      if(state.selected)return 'Click an empty spot on the table to place '+label(state.selected)+'.';
    }
    if(stop.mode==='bowling'){
      if(state.selected)return state.selected==='pins'?'Click a wooden lane to set up its pins.':'Click an empty ball rack.';
    }
    if(stop.mode==='barber'&&state.selected)return state.selected==='towels'?'Place the folded towels on the lower shelf.':'Place '+label(state.selected)+' on either empty spot on top of the table.';
    if(stop.mode==='hotdog'){
      if(state.selected==='plate')return 'Click a contestant who still needs a plate.';
    }
    if(stop.mode==='runway'&&state.selected)return state.selected==='pumpkins'?'Place the pumpkin lanterns on a glowing side table.':'Hang the costume banner above the dark entrance at the back of the runway.';
    if(stop.mode==='pigeons'&&state.selected)return 'Place the burger on the metal tray away from the doors to draw the pigeons over.';
    if(stop.mode==='wedding'){
      if(state.selected)return ({chair:'Click the open sand on either side of the aisle, just below the couple. One click sets out all four chairs.',flowers:'Place the flowers on the glowing stand to the left of the arch.',cake:'Place the cake on the glowing table on the right.'})[state.selected];
    }
    if(stop.mode==='camping'){
      if(state.selected==='dinner')return 'Place the dinner bag on the wooden table in the bottom-right corner.';
      if(state.checked.has('found-table'))return 'There’s the table. Choose the dinner bag, then click the tabletop to set it down.';
      if(state.light)return 'Move the flashlight across the campsite. Click the table in the bottom-right corner when you find it.';
    }
    return stop.intro;
  }
  function sidebarIntroduction(){return complete()?sceneHint():stop.intro;}
  function renderBoroughChart(){
    const host=$('coney-finding'),category=state.chartCategory;host.hidden=!category;if(host.hidden)return;
    const here=row(category).rate,city=row(category,day,'city').rate,upper=Math.max(5,Math.ceil(Math.max(here,city)*1.2/5)*5),color=TYPES[category].color;
    const w=210,ticks=[0,upper/2,upper],bar=(name,value,y,fill)=>'<text x="0" y="'+(y+12)+'" class="coney-chart-label">'+name+'</text><rect x="75" y="'+y+'" width="'+(value/upper*w)+'" height="20" fill="'+fill+'"/><text x="'+(81+value/upper*w)+'" y="'+(y+14)+'" class="coney-chart-value">'+rate(value)+'</text>';
    host.innerHTML='<h4>'+({food:'Prepared food',groceries:'Groceries',packages:'Packages'})[category]+' · '+DAYS[day]+'</h4>'+(isActivity()?'<p class="bk-sidebar-fact">'+fact(category)+'</p>':'')+'<svg viewBox="0 0 335 119" role="img" aria-label="'+DAYS[day]+' '+TYPES[category].noun+' deliveries at home: '+NAMES[borough]+' '+rate(here)+', NYC '+rate(city)+'">'+ticks.map(n=>'<line x1="'+(75+n/upper*w)+'" y1="7" x2="'+(75+n/upper*w)+'" y2="83" stroke="#d0d6c6"/><text x="'+(75+n/upper*w)+'" y="104" text-anchor="middle" class="coney-chart-tick">'+n+'%</text>').join('')+bar(NAMES[borough],here,17,color)+bar('NYC',city,55,'#a2aca5')+'</svg>';
    if(stop.context)host.append(el('p','bk-sidebar-fact',stop.context));
  }
  function speak(sprite,line,category=null){
    state.actor=sprite;state.chat=sprite===null?null:{sprite,line,category};
    $('bk-speaker').textContent='UPS Gorilla';$('bk-portrait').src=deps.guide;
    if(sprite===null)$('bk-line').textContent=line;
    if(category){state.chartCategory=category;state.fact={category,day:String(day),borough,rate:row(category).rate,cityRate:row(category,day,'city').rate};}
    $('bk-fact').hidden=true;$('bk-fact').textContent=state.chartCategory?fact(state.chartCategory):'';
    actors.forEach(a=>{a.element.classList.toggle('selected',a.sprite===sprite);a.element.setAttribute('aria-pressed',String(a.sprite===sprite));});
    renderCustomerDialogue();renderBoroughChart();
  }
  function guide(message,sidebar=message){$('bk-guide-line').textContent=message;$('bk-line').textContent=sidebar;}
  function activityFinding(message,category=stop.category){speak(null,message,category);guide(message);}
  function itemMarkup(id){if(id==='pins'||id==='balls')return '<img src="assets/brooklyn/bowling-'+(id==='pins'?'pins':'rack-balls')+'.svg" alt="" draggable="false">';return borough==='brooklyn'&&ICONS[id]?icon(id):window.JourneyArt.svg(id)||icon(id);}
  function label(id){return stop.orders?.find(o=>o.id===id)?.label||stop.meals?.find(o=>o.id===id)?.label||FOODS[id]||SUPPLIES[id]||id;}
  function itemButton(id,name,disabled=false){
    const b=el('button','bk-item');b.type='button';b.dataset.item=id;b.disabled=disabled;const selected=!complete()&&state.selected===id;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));
    const pic=el('span','bk-item-picture'),picture=itemMarkup(id);pic.innerHTML=id==='costume-banner'?picture.replace('preserveAspectRatio="none"','preserveAspectRatio="xMidYMid meet"'):picture;
    b.append(pic,el('span','',name));b.addEventListener('click',()=>chooseItem(id));return b;
  }
  function availableItems(){
    switch(stop.mode){
      case 'deliveries':return stop.orders.map(o=>[o.id,o.label,state.checked.has(o.id),o.item]);
      case 'disco':return Object.entries(FOODS).map(([id,name])=>[id,name,Object.values(state.orders).includes(id)||state.served]);
      case 'bowling':return [['pins','Pins',['lane-0','lane-1','lane-2'].every(id=>state.checked.has(id))],['balls','Bowling balls',['rack-0','rack-1'].every(id=>state.checked.has(id))]];
      case 'barber':return ['clippers','towels','mirror'].map(id=>[id,label(id),state.checked.has(id)]);
      case 'hotdog':return [['plate','Hot dog plate',state.checked.has('contestant-10')&&state.checked.has('contestant-15'),'hotdog-plate']];
      case 'runway':return ['pumpkins','costume-banner'].map(id=>[id,label(id),state.checked.has(id)]);
      case 'pigeons':return [['burger',label('burger'),state.flockAway]];
      case 'wedding':return ['chair','flowers','cake'].map(id=>[id,label(id),state.checked.has(id)]);
      case 'camping':return [['flashlight',complete()?'Flashlight':state.light?'Flashlight on':'Switch on flashlight',complete()],['dinner','Dinner bag',!state.checked.has('found-table')||complete()]];
    }
  }
  function renderTray(){
    const tray=$('bk-items');tray.replaceChildren();const items=availableItems();tray.classList.toggle('two-items',items.length===2);tray.classList.toggle('one-item',items.length===1);
    for(const [id,name,disabled,picture] of items){const b=itemButton(id,name,disabled);if(picture)b.querySelector('.bk-item-picture').innerHTML=itemMarkup(picture);tray.append(b);}
    $('bk-selected-item').textContent=complete()?(stop.mode==='pigeons'?'Entrance cleared.':'Everything delivered.'):state.selected?'Selected: '+label(state.selected):'Choose an item below.';
    $('bk-progress').textContent=progress()+' / '+COUNTS[stop.mode]+' '+(stop.mode==='deliveries'?'deliveries':COUNTS[stop.mode]===1?'task':'tasks');
    $('bk-finish').disabled=!complete();$('bk-finish').textContent=day===5?'Finish Friday & see the week':'Finish this stop';
    $('bk-serve').hidden=true;
    $('bk-task-status').textContent=complete()?'STOP COMPLETE':({deliveries:'DELIVERY BAG',disco:'DINNER DELIVERY',bowling:'BOWLING SUPPLIES',barber:'BARBER SUPPLIES',hotdog:'SERVING TRAY',runway:'STAGE DELIVERIES',pigeons:'CLEAR THE ENTRANCE',wedding:'WEDDING DELIVERIES',camping:'CAMP DINNER'})[stop.mode];
  }
  function prop(markup,x,y,w,h=null,cls='',z=Math.round(y)){
    const p=el('span','bk-prop '+cls);p.innerHTML=markup;p.style.left=x/160*100+'%';p.style.top=y/90*100+'%';p.style.width=w/160*100+'%';if(h!==null)p.style.height=h/90*100+'%';p.style.zIndex=String(z);$('bk-props').append(p);return p;
  }
  function target(id,name,x,y,w,h,cls='',wanted=null){
    const b=el('button','bk-target '+cls);b.type='button';b.dataset.target=id;b.setAttribute('aria-label',name);b.style.left=x/160*100+'%';b.style.top=y/90*100+'%';b.style.width=w/160*100+'%';b.style.height=h/90*100+'%';
    b.classList.toggle('is-ready',!!state.selected&&(!wanted||state.selected===wanted));b.classList.toggle('match-required',!!wanted);b.addEventListener('click',()=>interact(id));$('bk-props').append(b);return b;
  }
  function cuedTarget(id,name,x,y,w,h,wanted,cue){
    const b=target(id,name,x,y,w,h,'bk-placement bk-cued-target',wanted);
    if(state.selected===wanted)b.append(el('span','bk-placement-cue',cue));return b;
  }
  function layer(markup,cls=''){const n=el('span','bk-native-layer '+cls);n.innerHTML='<svg viewBox="0 0 160 90" preserveAspectRatio="none" aria-hidden="true" shape-rendering="crispEdges">'+markup+'</svg>';$('bk-props').append(n);return n;}
  function pinPoints(lane){const shape=LANES[lane],points=[];for(let r=0;r<4;r++){const y=74+r*6,t=(y-59)/75,center=((shape.back[0]+shape.back[1])*(1-t)+(shape.front[0]+shape.front[1])*t)/2;for(let p=0;p<4-r;p++)points.push({x:(center+(p-(3-r)/2)*8)/2,y:y/2});}return points;}
  function renderDisco(){
    const table=el('span','bk-buffet');table.innerHTML='<svg viewBox="0 0 64 24" aria-hidden="true" shape-rendering="crispEdges"><path fill="#453a50" d="M3 21h58v3H3z"/><path fill="#304349" d="M0 3h64v6H0zM3 9h5v14H3zm53 0h5v14h-5z"/><path fill="#cfa97a" d="M2 4h60v2H2z"/><path fill="#9d7150" d="M1 6h62v2H1z"/><path fill="#a77b5c" d="M4 10h3v12H4zm53 0h3v12h-3z"/></svg>';$('bk-props').append(table);
    for(let slot=0;slot<3;slot++){const food=state.orders[slot],b=target('slot-'+slot,food?FOODS[food]+(state.served?', delivered':', pick up'):['Left table spot','Middle table spot','Right table spot'][slot],93.75+slot*14.25,33.25,food==='pizza'?10.35:9,13,'bk-table-target');b.style.top='calc(36.9444% + 1.640625cqw)';b.classList.toggle('holding',!!state.selected);b.classList.toggle('stocked',!!food);b.disabled=state.served;if(food)b.innerHTML=itemMarkup(food).replace(food==='pizza'?'32 32':'16 16',food==='pizza'?'32 28':'16 15');}
  }
  function renderBowling(){
    for(let lane=0;lane<3;lane++){if(state.checked.has('lane-'+lane))pinPoints(lane).forEach(p=>prop('<img src="assets/brooklyn/bowling-pin.svg" alt="">',p.x,p.y,4,6,'bk-bowling-pin'));else{const shape=LANES[lane],left=Math.min(shape.back[0],shape.front[0]),right=Math.max(shape.back[1],shape.front[1]),w=right-left;const b=target('lane-'+lane,'Set up pins on lane '+(lane+1),(left+right)/4,48,w/2,39,'bk-lane-target','pins');b.style.clipPath='polygon('+((shape.back[0]-left)/w*100)+'% 0,'+((shape.back[1]-left)/w*100)+'% 0,'+((shape.front[1]-left)/w*100)+'% 100%,'+((shape.front[0]-left)/w*100)+'% 100%)';}}
    [60,105].forEach((x,i)=>{if(state.checked.has('rack-'+i))prop(itemMarkup('balls'),x,85,14,12,'bk-stocked-rack');else target('rack-'+i,'Fill ball rack '+(i+1),x,78,18,16,'bk-rack-target','balls');});
  }
  function renderBarber(){
    prop(itemMarkup('barber-trolley'),111,76,28,16,'bk-barber-table'+(state.selected?' is-ready':''),35);
    const topSupply=['clippers','mirror'].includes(state.selected)?state.selected:'not-ready';
    for(const [slot,x] of [['table-left',103],['table-right',120]]){
      const item=state.barberSlots[slot];
      if(item)prop(itemMarkup(item),x,61,...(item==='mirror'?[9,15]:[5,6]));
      else target(slot,'Place mirror or clippers on the '+(slot==='table-left'?'left':'right')+' tabletop spot',x,57,12,14,'bk-placement bk-barber-target',topSupply);
    }
    if(state.checked.has('towels'))prop(itemMarkup('towels'),111,70.5,11,4.5);
    else target('towels','Place folded towels on the lower shelf',111,68.25,16,9.5,'bk-placement bk-barber-target','towels');
  }
  function renderHotdog(){
    const art=$('bk-pixel-art');
    if(!art.hidden){
      const front=el('canvas','bk-hotdog-front');front.setAttribute('aria-hidden','true');front.width=art.width;front.height=art.height;
      const ctx=front.getContext('2d');ctx.imageSmoothingEnabled=false;
      for(const x of [48,98])ctx.drawImage(art,x,44,20,8,x,44,20,8);
      $('bk-props').append(front);
    }
    [10,15].forEach((sprite,i)=>{const x=[58,108][i];if(!state.checked.has('contestant-'+sprite))prop(itemMarkup('cloche'),x,53,26,14,'',67);});
  }
  function renderPigeons(){
    const R=window.JourneyArt.rect;
    layer(R(29,29,102,21,'#1275d8')+R(35,29,25,15,'#bac4cd')+R(37,31,21,11,'#6e9cc4')+R(43,32,2,3,'#a8c8df')+R(41,35,2,3,'#a8c8df')+R(39,38,2,3,'#a8c8df')+R(99,29,24,15,'#bac4cd')+R(101,31,20,11,'#6e9cc4')+R(107,32,2,3,'#a8c8df')+R(105,35,2,3,'#a8c8df')+R(103,38,2,3,'#a8c8df')+R(61,29,36,21,'#bac4cd')+R(63,31,15,18,'#4c5a74')+R(80,31,15,18,'#4c5a74')+R(78,31,2,18,'#a2aeb9')+R(60,49,58,8,'#afb4bf')+R(76,41,1,4,'#c8cdd1')+R(81,41,1,4,'#c8cdd1')+R(0,50,160,29,'#afb4bf')+R(5,55,4,2,'#9da3af')+R(20,73,3,1,'#9da3af')+R(53,55,3,1,'#9da3af')+R(99,72,4,1,'#9da3af')+R(140,57,4,2,'#9da3af')+R(153,70,3,1,'#9da3af')+R(72,67,3,1,'#9da3af'));
    const flock=state.flockAway?[[32,57],[42,55],[52,57],[33,69],[43,69],[53,68],[30,63]]:[[66,52],[73,54],[80,53],[87,53],[94,53],[102,46],[109,46]];
    prop(itemMarkup('tray'),42,64,19,9,'',15);if(state.flockAway)prop(itemMarkup('burger'),42,62,10,8,'',16);
    flock.forEach(([x,y],i)=>{const p=prop(itemMarkup('pigeon'),x,y,7,8,'bk-flock-bird');p.style.setProperty('--bird-facing',i%2?-1:1);});
    prop(itemMarkup('cart'),106,56,18,13,'',42);
    if(!state.flockAway)target('feeding-tray','Place the burger on the metal feeding tray',42,61,22,14,'bk-placement','burger');
  }
  function renderRunway(){
    const R=window.JourneyArt.rect;
    const wall=[[18,'#46245d'],[20,'#51286a'],[22,'#53286c'],[24,'#52296b'],[26,'#47245f'],[28,'#46245d'],[30,'#45235c'],[32,'#46255e'],[128,'#46255d'],[130,'#46245d'],[132,'#4b2763'],[134,'#53296b'],[136,'#52296b'],[138,'#52296b'],[140,'#45245d']];
    layer(wall.map(([x,color])=>R(x,32,2,10,color)).join(''));
    for(const x of [26,134]){
      prop(itemMarkup('runway-table'),x,45,23,12,'bk-placement-object'+(state.selected==='pumpkins'?' is-ready':''),20);
      if(state.checked.has('pumpkins'))prop(itemMarkup('pumpkins'),x,36.5,11,10,'',37);
      else target('pumpkins','Place the pumpkin lanterns on either side table',x,36,25,20,'bk-placement bk-surface-target','pumpkins');
    }
    prop(itemMarkup(state.checked.has('costume-banner')?'costume-banner':'banner-hooks'),80,25,48,15,'bk-placement-object'+(state.selected==='costume-banner'?' is-ready':''),25);
    if(!state.checked.has('costume-banner'))target('costume-banner','Hang the delivered costume banner above the back entrance',80,17,49,18,'bk-placement bk-surface-target','costume-banner');
  }
  function renderWedding(){
    const R=window.JourneyArt.rect;
    let patch='';for(const x of [39,94])patch+=R(x,48,27,18,'#f4d19e')+R(x+3,63,4,1,'#dfb67e');
    for(const [x,w] of [[0,60],[67,26],[103,57]])patch+=R(x,28,w,8,'#1684d7')+R(x,36,w,4,'#2390df')+R(x,40,w,2,'#3ba5e5');
    for(const [x,y,w] of [[2,30,9],[17,33,13],[43,31,9],[5,37,14],[35,39,12],[72,31,12],[70,37,17],[109,30,12],[133,33,12],[147,37,10],[116,39,13]])patch+=R(x,y,w,1,'#52afe8');
    patch+=R(4,42,29,21,'#f4d19e')+R(9,48,4,1,'#dfb67e')+R(24,55,3,1,'#dfb67e')+R(9,61,4,1,'#dfb67e')+R(128,42,32,18,'#f4d19e')+R(151,58,3,1,'#dfb67e');
    layer(patch);
    prop(itemMarkup('flower-stand'),18,57,12,11,'bk-placement-object'+(state.selected==='flowers'?' is-ready':''),35);
    prop(itemMarkup('cake-table'),143,57,25,16,'bk-placement-object'+(state.selected==='cake'?' is-ready':''),35);
    if(!state.checked.has('chair'))for(const x of [52,107])target('chair','Set out all four chairs on the sand beside the aisle',x,61,30,22,'bk-placement bk-surface-target','chair');
    if(state.checked.has('chair'))[46,58,101,113].forEach(x=>prop(itemMarkup('chair'),x,64,10,10,'',45));
    if(state.checked.has('flowers'))prop(itemMarkup('flowers'),18,47,10,12,'',48);else target('flowers','Place the flowers on the stand left of the arch',18,46,17,23,'bk-placement bk-surface-target','flowers');
    if(state.checked.has('cake'))prop(itemMarkup('cake'),143,44,13,13,'',45);else target('cake','Set the cake on the glowing table on the right',143,43,27,23,'bk-placement bk-surface-target','cake');
  }
  function campLightMarkup(){
    const [x,y]=state.campAim,dx=x-12,dy=y-86,length=Math.hypot(dx,dy)||1,ux=dx/length,uy=dy/length,reach=Math.max(24,length+12),spread=reach*.16;
    const ex=12+ux*reach,ey=86+uy*reach,angle=Math.atan2(dy,dx)*180/Math.PI;
    return '<path d="M12 86L'+(ex-uy*spread)+' '+(ey+ux*spread)+'L'+(ex+uy*spread)+' '+(ey-ux*spread)+'Z" fill="#fff1ae" fill-opacity=".14"/>'+
      '<g transform="translate(12 86) rotate('+angle+')"><svg x="-12" y="-3" width="12" height="6" viewBox="0 0 32 16" preserveAspectRatio="none">'+window.JourneyArt.flashlightSide()+'</svg></g>';
  }
  function updateCampLight(){
    const light=$('bk-props').querySelector('.bk-camp-light'),table=$('bk-props').querySelector('.bk-camp-table');
    if(light)light.innerHTML='<svg viewBox="0 0 160 90" preserveAspectRatio="none" aria-hidden="true" shape-rendering="crispEdges">'+campLightMarkup()+'</svg>';
    const [x,y]=state.campAim;
    table?.classList.toggle('is-lit',state.checked.has('found-table')||state.light&&x>=118&&x<=158&&y>=62&&y<=89);
  }
  function aimCampLight(event){
    if(!state||stop.mode!=='camping'||!state.light||state.selected!=='flashlight'||$('brooklyn-screen').hidden)return;
    const bounds=$('bk-stage').getBoundingClientRect();
    if(!bounds.width||!bounds.height)return;
    state.campAim=[Math.max(0,Math.min(160,(event.clientX-bounds.left)/bounds.width*160)),Math.max(0,Math.min(90,(event.clientY-bounds.top)/bounds.height*90))];
    updateCampLight();
  }
  function renderCamping(){
    const R=window.JourneyArt.rect;
    let ground=R(124,60,36,24,'#395338');
    for(const [x,y,w,h] of [[126,61,4,2],[148,62,6,2],[136,66,4,2],[154,70,6,2],[124,78,4,2],[146,80,6,2]])ground+=R(x,y,w,h,'#2c472f');
    layer(ground);
    if(state.light&&!complete())layer(campLightMarkup(),'bk-torch-beam bk-camp-light');
    prop(itemMarkup('camp-table'),138,88,36,22,'bk-camp-table'+(state.selected==='dinner'?' is-ready':''),66);
    if(!state.checked.has('found-table')){
      const spot=target('find-table','Find the campsite table with the flashlight',138,76,36,22,'bk-placement bk-surface-target','flashlight');
      spot.addEventListener('focus',()=>{if(state.light&&state.selected==='flashlight'){state.campAim=[138,74];updateCampLight();}});
    }else if(!complete())target('serve-camp','Place the dinner bag on the campsite table',138,74,36,20,'bk-placement bk-surface-target','dinner');
    if(complete())prop(itemMarkup('dinner'),138,74.5,10,11.5,'bk-camp-dinner',76);
    updateCampLight();
  }
  function renderProps(){
    $('bk-props').replaceChildren();
    if(stop.mode==='deliveries')stop.orders.forEach((o,i)=>{const a=actors[i],done=state.checked.has(o.id);a.element.classList.toggle('delivered',done);a.element.setAttribute('aria-label',deps.customers[o.sprite].name+(done?', delivery received':', talk or hand over '+o.label));a.element.querySelector('.bk-person-status').textContent=done?'✓ Delivered':TYPES[o.category].label;});
    else ({disco:renderDisco,bowling:renderBowling,barber:renderBarber,hotdog:renderHotdog,runway:renderRunway,pigeons:renderPigeons,wedding:renderWedding,camping:renderCamping})[stop.mode]();
  }
  function update(){
    const active=document.activeElement,restore=$('bk-props').contains(active)||$('bk-items').contains(active)||active===$('bk-serve');
    renderProps();renderTray();notify();
    let next=complete()?$('bk-finish'):null;
    if(!next&&restore){
      if(!$('bk-serve').hidden)next=$('bk-serve');
      else if(stop.mode==='camping'&&state.checked.has('found-table'))next=Array.from($('bk-items').children).find(b=>b.dataset?.item==='dinner');
      else next=Array.from($('bk-items').children).find(b=>!b.disabled);
    }
    next?.focus({preventScroll:true});
  }
  function request(o){state.read.add(o.id);speak(o.sprite,state.checked.has(o.id)?o.thanks:o.description,state.checked.has(o.id)?o.category:null);guide(complete()?sceneHint():state.checked.has(o.id)?'Delivery received. Choose another customer or finish the stop.':'Choose '+o.label+' in the delivery bag, then click '+deps.customers[o.sprite].name+'.');notify();}
  function talk(sprite){
    assertOpen();
    if(stop.mode==='deliveries'){const o=stop.orders.find(o=>o.sprite===sprite);if(o)request(o);else{const visitor=stop.visitors?.find(person=>person.sprite===sprite);if(!visitor)throw new Error('Choose a customer at this stop.');speak(sprite,visitor.line);}}
    else{const line=(stop.mode==='disco'?DISCO_LINES[sprite]:stop.mode==='bowling'?BOWLING_LINES[sprite]:stop.dialogues?.[sprite]?.[0])||deps.asides[sprite];speak(sprite,line);state.read.add('person-'+sprite);}
    return readState();
  }
  function assertOpen(){if(!state||$('brooklyn-screen').hidden)throw new Error('Open a delivery stop first.');}
  function chooseItem(id){
    assertOpen();if(complete())return readState();
    const option=availableItems().find(o=>o[0]===id);if(!option)throw new Error('Choose an item available at this stop.');if(option[2])return readState();
    if(stop.mode==='camping'&&id==='flashlight'){state.light=!state.light;state.selected=state.light?'flashlight':null;closeCustomerDialogue();guide(sceneHint(),sidebarIntroduction());update();return readState();}
    state.selected=state.selected===id?null:id;
    closeCustomerDialogue();
    guide(sceneHint(),sidebarIntroduction());renderTray();renderProps();Array.from($('bk-items').children).find(b=>b.dataset.item===id)?.focus({preventScroll:true});return readState();
  }
  function interact(id){
    assertOpen();
    if(isActivity())closeCustomerDialogue();
    if(stop.mode==='deliveries'){
      const o=stop.orders.find(o=>o.id===id);if(!o)throw new Error('Choose one of the three customers.');
      if(!state.selected||state.checked.has(id)){request(o);return readState();}
      if(state.selected!==id){speak(o.sprite,'That is somebody else’s order. Mine is '+o.label+'.');guide('Keep the order and choose the matching customer.');return readState();}
      state.checked.add(id);state.selected=null;speak(o.sprite,o.thanks,o.category);
      const message=complete()?sceneHint():'Delivery received. Choose another order, or click a customer to talk.';
      guide(message,complete()?message:deps.customers[o.sprite].name+'’s order is delivered. The chart compares '+TYPES[o.category].noun+' deliveries at home in '+NAMES[borough]+' and NYC on '+DAYS[day]+'. Choose another order when you’re ready.');
    }else if(stop.mode==='disco'){
      if(!/^slot-[0-2]$/.test(id))throw new Error('Choose one of the three tabletop spots.');if(state.served)return readState();
      const slot=Number(id.slice(-1)),previous=state.orders[slot];
      if(state.selected){if(previous){guide('Pick up the food already on this spot before replacing it.');return readState();}state.orders[slot]=state.selected;state.selected=null;state.served=complete();const message=complete()?sceneHint():'Dinner is arriving. Choose another food and click an empty table spot.';speak(null,message,'food');guide(message);}
      else if(previous){state.selected=previous;delete state.orders[slot];guide('Food picked up. Click another empty spot to move it.');}else{guide(stop.intro);return readState();}
    }else if(stop.mode==='bowling'){
      if(!/^(lane-[0-2]|rack-[0-1])$/.test(id))throw new Error('Choose a lane or a ball rack.');if(state.checked.has(id))return readState();const wanted=id.startsWith('lane')?'pins':'balls';
      if(state.selected!==wanted){guide('Choose '+label(wanted)+' before clicking this spot.');return readState();}state.checked.add(id);
      if((wanted==='pins'?['lane-0','lane-1','lane-2']:['rack-0','rack-1']).every(target=>state.checked.has(target)))state.selected=null;
      const message=complete()?sceneHint():'Supply delivered. Keep stocking the lanes and ball racks.';speak(null,message,'packages');guide(message);
    }else if(stop.mode==='barber'){
      if(id==='towels'){
        if(state.checked.has('towels'))return readState();if(state.selected!=='towels'){guide('Choose the folded towels before placing them on the lower shelf.');return readState();}
        state.checked.add('towels');
      }else if(['table-left','table-right'].includes(id)){
        if(state.barberSlots[id]){guide('That spot is already occupied. Use the other side of the table.');return readState();}
        if(!['clippers','mirror'].includes(state.selected)){guide('Choose the mirror or clippers for either empty tabletop spot.');return readState();}
        if(state.checked.has(state.selected))return readState();state.barberSlots[id]=state.selected;state.checked.add(state.selected);
      }else throw new Error('Choose a tabletop spot or the lower shelf.');
      state.selected=null;activityFinding(complete()?sceneHint():'Supply unpacked. Place the remaining barber deliveries.');
    }else if(stop.mode==='hotdog'){
      if(!/^contestant-(10|15)$/.test(id))throw new Error('Choose one of the two contestants.');if(state.checked.has(id))return readState();if(state.selected!=='plate'){guide('Take a plate from the tray, then click this contestant.');return readState();}state.checked.add(id);state.selected=null;activityFinding(sceneHint());
    }else if(stop.mode==='runway'){
      if(!['pumpkins','costume-banner'].includes(id))throw new Error('Choose a stage delivery placement.');if(state.checked.has(id))return readState();
      if(state.selected!==id){guide('Choose '+label(id)+' before unpacking it.');return readState();}
      state.checked.add(id);state.selected=null;activityFinding(complete()?sceneHint():'Delivery unpacked. Place the other stage delivery.');
    }else if(stop.mode==='pigeons'){
      if(id!=='feeding-tray')throw new Error('Choose the metal feeding tray.');if(state.flockAway)return readState();
      if(state.selected!=='burger'){guide('Choose the burger, then place it on the metal tray away from the doors.');return readState();}
      state.flockAway=true;state.checked.add('flock-moved');state.selected=null;activityFinding(sceneHint());
    }else if(stop.mode==='wedding'){
      if(!['chair','flowers','cake'].includes(id))throw new Error('Choose a wedding delivery placement.');
      if(state.checked.has(id))return readState();if(state.selected!==id){guide('Choose '+label(id)+' before placing it.');return readState();}
      state.checked.add(id);state.selected=null;activityFinding(complete()?sceneHint():'Delivery placed. Set out the remaining wedding supplies.');
    }else if(stop.mode==='camping'){
      if(id==='find-table'){
        if(state.checked.has('found-table'))return readState();
        if(!state.light||state.selected!=='flashlight'){guide('Switch on the flashlight to find the table in the bottom-right corner.');return readState();}
        state.campAim=[138,74];state.checked.add('found-table');state.selected=null;guide(sceneHint());
      }else if(id==='serve-camp'){
        if(complete())return readState();
        if(!state.checked.has('found-table')||state.selected!=='dinner'){guide('Find the table with the flashlight, then choose the dinner bag.');return readState();}
        state.checked.add('dinner-served');state.selected=null;state.light=false;activityFinding(sceneHint());
      }else throw new Error('Find the campsite table or place dinner on it.');
    }
    update();return readState();
  }
  function serve(){
    assertOpen();
    if(stop.mode==='camping')return interact('serve-camp');
    throw new Error('Use this scene’s delivery placement spots.');
  }
  function finish(){assertOpen();if(!complete())throw new Error('Finish this stop’s deliveries first.');deps.onFinish();return readState();}
  function drawActors(){
    actors=[];$('bk-actors').replaceChildren();
    const cast=stop.mode==='deliveries'?[...stop.orders.map((o,i)=>({sprite:o.sprite,x:[27,80,132][i],y:[79,86,79][i],order:o})),...(stop.visitors||[])]:stop.mode==='disco'?DISCO_CAST:stop.mode==='bowling'?BOWLING_CAST:stop.cast;
    cast.forEach((person,i)=>{
      const p={...person};if(stop.mode==='barber'){if(p.sprite===3){p.x=145;p.y=77;}if(p.sprite===13){p.x=86;p.y=72;}}
      if(stop.mode==='hotdog'&&[10,15].includes(p.sprite)){p.x=p.sprite===10?58:108;p.y=48;}
      if(stop.mode==='pigeons'){const positions={16:[16,70],15:[38,88],18:[70,76],13:[125,69],6:[142,87],4:[112,89]};[p.x,p.y]=positions[p.sprite];}
      p.size=p.size||(stop.mode==='deliveries'?23:p.dj?17:20);
      const b=el('button','bk-person'+(p.order?' bk-customer':''));b.type='button';b.dataset.sprite=String(p.sprite);b.style.left=p.x/160*100+'%';b.style.top=p.y/90*100+'%';b.style.width=p.size/160*100+'%';b.style.zIndex=String(Math.round(p.y));b.style.setProperty('--facing',p.facing||1);b.setAttribute('aria-label','Talk to '+deps.customers[p.sprite].name);b.setAttribute('aria-pressed','false');
      const img=el('img');img.src=deps.art.customers[p.sprite];img.alt='';img.width=32;img.height=32;img.draggable=false;b.append(img);
      if(p.order){const badge=el('span','bk-person-badge');badge.append(el('i','type-square '+p.order.category,TYPES[p.order.category].letter),el('span','bk-person-status',TYPES[p.order.category].label));b.append(badge);b.dataset.target=p.order.id;b.addEventListener('click',()=>interact(p.order.id));}
      else b.addEventListener('click',()=>{if(stop.mode==='hotdog'&&[10,15].includes(p.sprite)&&state.selected==='plate'&&!state.checked.has('contestant-'+p.sprite))interact('contestant-'+p.sprite);else talk(p.sprite);});
      $('bk-actors').append(b);actors.push({...p,element:b,baseX:p.x,phase:0});
    });
  }
  function syncMotion(){
    clearTimeout(motionTimer);motionTimer=null;
    if(!state||$('brooklyn-screen').hidden||document.hidden||window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
    motionTimer=setTimeout(()=>{
        actors.forEach((a,i)=>{
          if(a.dj)return;const sequence=SCENE_MOTION[i%SCENE_MOTION.length],action=sequence[a.phase];a.phase=(a.phase+1)%sequence.length;
          if(action==='turn-left'||action==='turn-right')a.element.style.setProperty('--facing',action==='turn-left'?-1:1);
          if(action==='step-left'||action==='step-right'){
            const direction=action==='step-left'?-1:1;a.x=a.baseX+Math.max(-2,Math.min(2,a.x-a.baseX+direction*.75));
            a.element.style.left=a.x/160*100+'%';a.element.style.setProperty('--facing',direction);
          }
        });positionCustomerDialogue();syncMotion();
      },1400);
  }
  function paintBackground(src){
    const ticket=++imageTicket;$('bk-art').src=src;$('bk-art').hidden=false;$('bk-pixel-art').hidden=true;
    if(stop.mode==='deliveries'||stop.mode==='bowling')return;
    const image=imageCache.get(src)||new Image();const paint=()=>{if(ticket!==imageTicket)return;const canvas=$('bk-pixel-art'),res=stop.resolution||[80,45],coarse=stop.coarse||[80,45];canvas.width=res[0];canvas.height=res[1];const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=false;
      const small=document.createElement('canvas');small.width=coarse[0];small.height=coarse[1];small.getContext('2d').imageSmoothingEnabled=false;small.getContext('2d').drawImage(image,0,0,...coarse);ctx.drawImage(small,0,0,...res);
      for(const [x,y,w,h] of stop.detailRegions||[])ctx.drawImage(image,x/res[0]*image.naturalWidth,y/res[1]*image.naturalHeight,w/res[0]*image.naturalWidth,h/res[1]*image.naturalHeight,x,y,w,h);
      canvas.hidden=false;$('bk-art').hidden=true;if(stop.mode==='hotdog')renderProps();
    };if(image.complete&&image.naturalWidth)paint();else{image.onload=paint;image.src=src;}
  }
  function prefetch(area){for(const s of LOCATIONS[area]||[]){if(!s.art.startsWith('assets/')||imageCache.has(s.art))continue;const image=new Image();imageCache.set(s.art,image);image.src=s.art;}}
  function open(index,weekday,area='brooklyn'){
    borough=area;stop=LOCATIONS[borough]?.[index];if(!stop)throw new Error('Choose an available delivery location.');day=Number(weekday);if(day<1||day>5)throw new Error('Choose a weekday.');
    const nextKey=borough+'|'+day+'|'+index;
    if(key!==nextKey){key=nextKey;state={selected:null,read:new Set(),checked:new Set(),orders:{},barberSlots:{},served:false,actor:null,fact:null,chat:null,chartCategory:null,light:false,campAim:[80,55],flockAway:false};}
    $('brooklyn-screen').dataset.mode=stop.mode;$('brooklyn-screen').dataset.borough=borough;$('bk-world').style.setProperty('--bk-floor',stop.floor);$('bk-stage').classList.remove('bk-photo');
    $('brooklyn-screen').classList.add('journey-layout');$('coney-chat').hidden=true;$('coney-finding').hidden=true;$('bk-intro').hidden=true;$('bk-task-status').hidden=true;
    $('bk-title').textContent=stop.name;$('bk-day').textContent=DAYS[day]+' · '+NAMES[borough];$('bk-intro').textContent=stop.mode==='deliveries'?'Orders for the neighborhood’s homes.':({disco:'Dinner on the dance floor.',bowling:'A neighborhood bowling night to set up.',barber:'Package deliveries for the platform barbershop.',hotdog:'Food delivery at the contest table.',runway:'Package deliveries for the costume show.',pigeons:'The grocery trip has hit a small problem.',wedding:'Deliveries before the ceremony.',camping:'Dinner delivered to the campsite.'})[stop.mode];
    paintBackground(deps.art.scenes[stop.art]||stop.art);$('bk-art').alt='Pixel-art '+stop.name+' delivery setting.';
    const introduction=sidebarIntroduction();
    drawActors();guide(sceneHint(),introduction);const selected=state.actor;if(selected!==null)talk(selected);else speak(null,introduction);renderProps();renderTray();notify();syncMotion();$('bk-title').focus({preventScroll:true});return readState();
  }
  function pause(){clearTimeout(motionTimer);motionTimer=null;imageTicket++;}
  function reset(){pause();key=null;state=null;actors=[];$('bk-actors').replaceChildren();$('bk-props').replaceChildren();}
  function renderWeek(host){
    host.replaceChildren();host.classList.add('bk-week-findings');
    const heading=el('h4','','What reached '+NAMES[borough]+' homes?');host.append(heading);
    const chart=el('div','bk-week-chart');host.append(chart);
    const rows=deps.rows.filter(r=>r.area==='b_'+borough&&Number(r.day)<=5);
    const width=820,height=230,m={left:46,right:15,top:24,bottom:34},upper=5*Math.ceil(Math.max(...rows.map(r=>r.rate))/5);
    const x=d3.scaleBand().domain(['1','2','3','4','5']).range([m.left,width-m.right]).padding(.3),inner=d3.scaleBand().domain(Object.keys(TYPES)).range([0,x.bandwidth()]).padding(.1),y=d3.scaleLinear().domain([0,upper]).range([height-m.bottom,m.top]);
    const svg=d3.select(chart).append('svg').attr('viewBox','0 0 '+width+' '+height).attr('role','img').attr('aria-label','Weighted share of '+NAMES[borough]+' survey days reporting food, grocery and package deliveries, Monday through Friday.');
    for(let v=0;v<=upper;v+=10){svg.append('line').attr('x1',m.left).attr('x2',width-m.right).attr('y1',y(v)).attr('y2',y(v)).attr('stroke','#cbd0bf');svg.append('text').attr('x',m.left-8).attr('y',y(v)+4).attr('text-anchor','end').attr('font-size',13).text(v+'%');}
    for(let d=1;d<=5;d++){svg.append('text').attr('x',x(String(d))+x.bandwidth()/2).attr('y',height-8).attr('text-anchor','middle').attr('font-size',15).text(DAYS[d].slice(0,3));
      for(const [cat,t] of Object.entries(TYPES)){const r=row(cat,d),bx=x(String(d))+inner(cat);svg.append('rect').attr('x',bx).attr('y',y(r.rate)).attr('width',inner.bandwidth()).attr('height',height-m.bottom-y(r.rate)).attr('fill',t.color).append('title').text(DAYS[d]+' '+t.label+': '+rate(r.rate));}}
    const legend=el('div','bk-week-legend');Object.entries(TYPES).forEach(([cat,t])=>{const label=el('span','');const swatch=el('i');swatch.style.background=t.color;label.append(swatch,el('span','',t.label));legend.append(label);});host.append(legend);
  }
  function init(config){
    deps=config;$('bk-guide').src=config.guide;$('bk-back').addEventListener('click',config.onMap);$('bk-finish').addEventListener('click',finish);$('bk-serve').addEventListener('click',serve);
    document.addEventListener('visibilitychange',syncMotion);window.matchMedia?.('(prefers-reduced-motion: reduce)').addEventListener?.('change',syncMotion);
    window.addEventListener('pagehide',pause);window.addEventListener('pageshow',syncMotion);
    $('bk-stage').addEventListener('click',event=>{if(event.target===$('bk-stage')||event.target===$('bk-art')||event.target===$('bk-pixel-art'))closeCustomerDialogue();});
    $('bk-stage').addEventListener('pointermove',aimCampLight);
    $('coney-chat-close').addEventListener('click',()=>{const actor=actors.find(a=>a.sprite===state.actor);closeCustomerDialogue();actor?.element.focus({preventScroll:true});});
    window.addEventListener('resize',positionCustomerDialogue);
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&state?.chat&&!$('brooklyn-screen').hidden){const actor=actors.find(a=>a.sprite===state.actor);closeCustomerDialogue();actor?.element.focus({preventScroll:true});}});
    document.addEventListener('click',event=>{if(state&&!$('brooklyn-screen').hidden&&!$('coney-chat').contains(event.target)&&!event.target.closest?.('.bk-person')&&!event.target.closest?.('.bk-target')&&!event.target.closest?.('#bk-serve'))closeCustomerDialogue();});
  }
  window.JourneyStory={stops:LOCATIONS.brooklyn,locations:LOCATIONS,getStops:area=>LOCATIONS[area],init,prefetch,open,pause,reset,readState,chooseItem,interact,talk,serve,finish,renderWeek};
  window.BrooklynStory=window.JourneyStory;
})();
