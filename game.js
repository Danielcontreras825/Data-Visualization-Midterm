(() => {
  'use strict';
  const L=window.DeliveryLandmarks;
  const DAYS={1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday'};
  const SHORT={1:'Mon',2:'Tue',3:'Wed',4:'Thu',5:'Fri'};
  const COLORS={manhattan:'#dc8a70',bronx:'#e4c35f',brooklyn:'#93bf92',queens:'#d6b382','staten-island':'#a4b7cc'};
  const SCENES={
    manhattan:{description:'City plazas, park picnics and grand interiors.',streets:['Liberty Harbor','Times Square','Central Park','Grand Central','Empire State Building']},
    brooklyn:{description:'Bridge boardwalks, ball courts and museum galleries.',streets:['Brooklyn Bridge','Coney Island','Prospect Park','Barclays Center','Brooklyn Museum']},
    bronx:{description:'Stadium seats, zoo courtyards and garden greens.',streets:['Yankee Stadium','Bronx Zoo','Botanical Garden','Arthur Avenue','Wave Hill']},
    queens:{description:'A giant globe, a beach break and a ballpark.',streets:['Unisphere','Citi Field','Rockaway Beach','Astoria Park','Moving Image Museum']},
    'staten-island':{description:'Ferry decks, garden pavilions and village greens.',streets:['St. George Ferry','Snug Harbor','Richmond Town','Fort Wadsworth','Staten Island Zoo']}
  };
  for(const [area,stops] of Object.entries(window.JourneyLocations))SCENES[area].streets=stops.map(stop=>stop.name);
  // Original fictional customers, in borough order and Monday–Friday order.
  const CUSTOMERS=[
    {name:'Crown Tourist',category:'food',title:'Dumplings for a royal tourist',description:'Dumplings with extra sauce for a tourist who came to see the Statue of Liberty. “My crown is blocking the harbor view.”'},
    {name:'Sleepy Superhero',category:'food',title:'A sandwich for a tired superhero',description:'He’s been posing for photos all morning. A toasted sandwich, extra pickles, and no more photos until he’s eaten.'},
    {name:'Pigeon Jogger',category:'groceries',title:'Bread for the pigeon situation',description:'Bread, oats and apples for the kitchen. “The pigeons think this is their order. Please do not encourage them.”'},
    {name:'Suitcase Traveler',category:'packages',title:'One charger, one enormous suitcase',description:'A phone charger in a small box. The suitcase already holds three sweaters, a microwave and a folding chair. Everything except a charger.'},
    {name:'Tiny Gorilla',category:'groceries',title:'Bananas for a very small gorilla',description:'A bunch of bananas and oat milk. “No building climbing today. I am taking a snack break.”'},
    {name:'Camera Tourist',category:'packages',title:'A strap for an enormous camera',description:'One camera strap. “I took 400 bridge photos. I can’t lift the camera for another.”'},
    {name:'Hot Dog Person',category:'food',title:'Fries for the hot dog person',description:'Fries with ketchup and mustard. “Eating a hot dog in this thing makes people uncomfortable.”'},
    {name:'Tangled Dog Walker',category:'groceries',title:'Treats for the leash committee',description:'Dog biscuits, carrots and coffee. “The biscuits are for the dogs. The coffee is for me.”'},
    {name:'Foam Finger Fan',category:'food',title:'Nachos for the number-one fan',description:'Nachos and a lemonade. “I can point at my order. Picking it up is the problem.”'},
    {name:'Messy Painter',category:'packages',title:'Brushes for the accidental mural',description:'Fresh paintbrushes and a sketchbook. “The paint on my shirt is intentional. The paint on my shoes is a mystery.”'},
    {name:'Giant Glove Fan',category:'food',title:'A snack caught in a giant glove',description:'A pretzel and a sandwich. The glove is ready for a home run, a lunch bag or a very comfortable nap.'},
    {name:'Lion Hat Keeper',category:'packages',title:'A repair kit for the lion hat',description:'Needle, thread and spare buttons. “The lions keep looking at me funny.”'},
    {name:'Hidden Gardener',category:'groceries',title:'Greens for a gardener in hiding',description:'Salad greens, lemons and tomatoes. The customer is somewhere behind the giant plant. Listen for a very small hello.'},
    {name:'Tall Hat Cook',category:'food',title:'Ravioli beneath the tallest hat',description:'Ravioli, garlic bread and extra sauce. “Yes, I am a cook. Yes, I ordered dinner. Yes, I am tired.”'},
    {name:'Binocular Birdwatcher',category:'packages',title:'A strap for bird-sized binoculars',description:'A sturdy binocular strap. “I can see the birds perfectly. Finding my own front door is the problem.”'},
    {name:'Lunch Astronaut',category:'food',title:'Dumplings for a grounded astronaut',description:'Dumplings and iced tea. “The helmet has a microphone, a camera and no hole for a straw.”'},
    {name:'Invisible Eyes Fan',category:'packages',title:'A clip for a runaway baseball cap',description:'A small cap clip. The hat is enormous and the eyes are missing. “If you can see me waving, I cannot see you waving back.”'},
    {name:'Giant Board Surfer',category:'groceries',title:'A beach-bag fruit rescue',description:'Bananas, oranges and bottled water. The surfboard is taller than the customer and has taken over the hallway.'},
    {name:'Chased Jogger',category:'food',title:'A bagel ahead of the pigeon',description:'A bagel with cream cheese. “If the pigeon asks, I ordered a salad.”'},
    {name:'Megaphone Director',category:'packages',title:'A clapperboard, take twenty',description:'One clapperboard in a padded box. “Please hand it to me normally. The last guy tried to audition.”'},
    {name:'Many Bags Commuter',category:'food',title:'A bagel for the bag-balancing act',description:'A warm bagel and coffee. The commuter has seven bags, two hands and complete confidence. Aim for the only free hand.'},
    {name:'Flower Hat Gardener',category:'groceries',title:'Berries beneath a blooming hat',description:'Berries, yogurt and honey. “The flowers on my hat are doing wonderfully. I would also like some breakfast.”'},
    {name:'Headphone Historian',category:'packages',title:'Modern headphones, old-fashioned outfit',description:'Wireless headphones for a customer dressed for another century. “How many candles does this Bluetooth need?”'},
    {name:'Lost Map Tourist',category:'food',title:'A wrap lost inside a folded map',description:'A veggie wrap and an iced tea. “The map says I am here. Could you tell the map where here is?”'},
    {name:'Penguin Costume Visitor',category:'groceries',title:'Carrots for a suspicious penguin',description:'Carrots, apples and cereal. “I am a visitor in a costume. Please stop offering me fish.”'}
  ];
  const COMMON_CUSTOMERS=[0,2,9,13,20];
  const VISITOR_ASIDES=[
    'I get food delivered too. The delivery guy calls me ‘your majesty.’ I think he’s making fun of me.',
    'I order lunch too. Last time I cooked, the fire department had to rescue me.',
    'I get mine delivered too. The pigeons know what the doorbell means.',
    'Those package arrivals, and my suitcase still has no charger. The microwave made it, though.',
    'They bring bananas upstairs? I’ve been climbing the outside of the building. Security keeps saying ‘no pets.’',
    'My camera strap came in a box bigger than the camera. Obviously I took a photo of the box.',
    'I order food too. The app keeps recommending hot dogs. It feels personal.',
    'The groceries made it home. The biscuits didn’t make it past the dogs.',
    'I tried ordering one sandwich. This finger added six to the cart.',
    'My new brushes came in a nice box. I painted the box first.',
    'Those food-delivery days are the real home runs.',
    'Package arrivals? I hope one box holds a new ear for this lion hat.',
    'Grocery days! My giant plant is asking for an even bigger salad.',
    'That food share makes me feel better about ordering dinner in a chef’s hat.',
    'Those packages, and I still spot a sparrow faster than my own parcel.',
    'I get food delivered too. They won’t come to the moon, though. I checked.',
    'My package arrived. I signed for it. I haven’t seen a single pitch. I assume we’re winning.',
    'I get groceries delivered now. The supermarket asked me to stop bringing the board.',
    'Other people get food delivered too?',
    'My last package arrived halfway through a take. The driver’s in the movie now.',
    'Food arriving at home? Good. Seven bags leave no hands for cooking.',
    'Grocery arrivals beat waiting for my flower hat to grow berries.',
    'Packages really arrive at home? Excellent. I was sending a horse for my headphones.',
    'Food finding its way home? Could it teach my map how directions work?',
    'Grocery days? Carrots, please. This penguin costume keeps attracting fish.'
  ];
  // Background visitors reuse the original art. Each day has safe, short lanes
  // between the three stationary request controls, on the venue's floor/ground.
  const VISITORS={
    manhattan:{cast:[1,3,5,15,22,9,23],lanes:[[[52,76],[108,80]],[[52,76],[108,80]],[[52,72],[108,78]],[[52,78],[108,80]],[[52,76],[108,80]]]},
    brooklyn:{cast:[5,6,7,8,9,18,1],lanes:[[[52,76],[108,80]],[[52,80],[108,76]],[[52,74],[108,78]],[[52,74],[108,80]],[[52,74],[108,78]]]},
    bronx:{cast:[10,11,12,13,14,16,24],lanes:[[[52,76],[108,80]],[[52,76],[108,80]],[[52,76],[108,80]],[[52,76],[108,80]],[[52,78],[108,80]]]},
    queens:{cast:[15,16,17,18,19,5,8],lanes:[[[52,76],[108,80]],[[52,76],[108,80]],[[52,74],[108,80]],[[52,74],[108,78]],[[52,76],[108,80]]]},
    'staten-island':{cast:[20,21,22,23,24,3,11],lanes:[[[52,80],[108,76]],[[52,76],[108,80]],[[52,76],[108,80]],[[52,78],[108,80]],[[52,78],[108,80]]]}
  };
  function dailyCustomers(){
    const primary=Object.keys(SCENES).indexOf(state.borough)*5+state.landmark;
    const featured=CUSTOMERS[primary],extras=COMMON_CUSTOMERS.filter(id=>id!==primary);
    let cursor=Number(state.day)-1;
    return QUESTS.map(q=>{
      const sprite=q.category===featured.category?primary:extras[cursor++%extras.length];
      return {sprite,...CUSTOMERS[sprite]};
    });
  }
  const STORY={
    1:{kicker:'MONDAY · FIRST SHIFT',end:'Three customers, three different needs. Your first shift is Completed. Tomorrow brings a new place in your borough.'},
    2:{kicker:'TUESDAY · DELIVERY DUTY',end:'A new setting, familiar needs: food, groceries and packages. Two shifts down.'},
    3:{kicker:'WEDNESDAY · HALFWAY THERE',end:'The survey records what reached people’s homes. These fictional customers put faces to the everyday needs behind those arrivals.'},
    4:{kicker:'THURSDAY · THREE NEW REQUESTS',end:'We can compare what arrived each weekday. The time, effort and route behind each arrival remain outside this dataset.'},
    5:{kicker:'FRIDAY · THE FINAL SHIFT',end:'Fifteen imagined deliveries. Five different places. You’ve seen the real borough findings behind this fictional week.'}
  };
  const TYPES={
    food:{label:'Food',noun:'food',letter:'F'},
    groceries:{label:'Groceries',noun:'grocery',letter:'G'},
    packages:{label:'Packages',noun:'package',letter:'P'}
  };
  const ORDER_POOL={
    food:[
      {title:'Dumplings for dinner',description:'A box of dumplings and two dipping sauces. The customer left a note: “Extra sauce is my entire personality.”'},
      {title:'Noodles for two',description:'Two bowls of noodles, packed for a quiet dinner at home. Keep the soup upright.'},
      {title:'The bagel breakfast',description:'A bag of warm bagels and a cream-cheese tub. Someone is getting a slow start to the morning.'},
      {title:'Sandwich lunch',description:'A toasted sandwich, a pickle and an iced tea. A hungry customer has already claimed a spot for this lunch break.'},
      {title:'Curry and rice',description:'A curry-and-rice order with extra naan. “If the bag smells this good, I promise not to eat the napkins.”'},
      {title:'Falafel and fries',description:'A falafel wrap with a side of fries. The customer added one request: extra napkins.'},
      {title:'A cozy soup break',description:'Hot soup and garlic bread for a cozy meal. The customer is guarding a very small stack of very large napkins.'},
      {title:'Burrito night',description:'A burrito and a bag of chips. The customer’s note says, “Thanks for bringing dinner!”'}
    ],
    groceries:[
      {title:'Breakfast restock',description:'Milk, eggs and oats for tomorrow morning. The eggs get the safest spot in the bag.'},
      {title:'Pasta-night supplies',description:'Pasta, tomatoes and a bunch of basil. Dinner is one grocery bag away.'},
      {title:'The fruit run',description:'Apples, bananas and a bag of oranges. A colorful restock for the kitchen counter.'},
      {title:'Soup-day groceries',description:'Carrots, potatoes and vegetable stock. Everything for a pot of homemade soup.'},
      {title:'The pantry top-up',description:'Rice, beans and cooking oil. “I only ordered three things. Why does the bag weigh as much as me?”'},
      {title:'Weekend baking',description:'Flour, butter and chocolate chips. Someone has a batch of cookies planned.'},
      {title:'Lunchbox restock',description:'Bread, cheese and a few snack packs. Tomorrow’s lunches start with this delivery.'},
      {title:'Garden-salad groceries',description:'Lettuce, cucumbers and tomatoes. Fresh greens for a meal at home.'}
    ],
    packages:[
      {title:'A new book',description:'A padded envelope with a new book inside. The recipient is waiting to start the first chapter.'},
      {title:'The desk-lamp delivery',description:'A small boxed desk lamp. The customer insists a reading light counts as a very exciting parcel.'},
      {title:'New walking shoes',description:'A shoebox for someone’s next neighborhood walk. The customer plans to test them with an extremely dramatic first step.'},
      {title:'Plant supplies',description:'A box of plant pots and garden tools. The customer’s window is already full of greenery.'},
      {title:'A birthday parcel',description:'A wrapped gift inside a shipping box. Please keep the surprise dry.'},
      {title:'The puzzle box',description:'A thousand-piece puzzle for a night in. Its journey has fewer pieces than the puzzle.'},
      {title:'Art supplies',description:'Sketchbooks and colored pencils. A creative afternoon is waiting on the other side of the door.'},
      {title:'A kitchen upgrade',description:'A small box of kitchen utensils. “One spatula is normal. Five spatulas means I am prepared.”'}
    ]
  };
  function makeWeekOrders(){
    return Object.fromEntries(Object.entries(ORDER_POOL).map(([category,pool])=>{
      const choices=[...pool];for(let i=choices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[choices[i],choices[j]]=[choices[j],choices[i]];}
      return [category,choices.slice(0,5)];
    }));
  }
  const QUESTS=[{id:'food-home',category:'food'},{id:'grocery-home',category:'groceries'},{id:'package-home',category:'packages'}];
  const state={screen:'overview',borough:null,landmark:null,day:'1',quest:null,phase:'idle',completed:new Set(),accepted:new Set(),history:[],hoveredBorough:null,weekStarted:false,stopStarted:false,orders:makeWeekOrders()};
  let data,geo,lookup,art,stampTimer,resizeTimer,ambientTimer,motionQuery;
  let visitors=[],chatVisitor=null,map=null,zoomFrame=null,zoomTicket=0,zooming=false,zoomEndsAt=0;
  const $=id=>document.getElementById(id),percent=value=>value.toFixed(1)+'%',number=value=>value.toLocaleString('en-US');
  const isJourney=()=>!!window.JourneyLocations[state.borough];
  const stopComplete=()=>isJourney()?!!window.JourneyStory.readState()?.complete:state.completed.size===3;
  const scene=()=>state.borough&&Number.isInteger(state.landmark)?{name:SCENES[state.borough].streets[state.landmark],key:state.borough+'-day-'+(state.landmark+1)}:null;
  const customerPoint=i=>({x:[24,80,136][i],y:[74,80,74][i]});
  // Slightly smaller people, with the same gentle front-to-back perspective.
  const personSize=y=>20+(Math.max(70,Math.min(80,y))-70)*.5;
  const quest=()=>{
    const i=QUESTS.findIndex(q=>q.id===state.quest);if(i<0)return null;
    const customer=dailyCustomers()[i],primary=Object.keys(SCENES).indexOf(state.borough)*5+state.landmark;
    const order=customer.sprite===primary?{title:customer.title,description:customer.description}:state.orders[QUESTS[i].category][Number(state.day)-1];
    return {...QUESTS[i],customer,order};
  };
  const estimate=(category=quest()?.category,day=state.day,area='b_'+state.borough)=>category?lookup.get(area+'|'+day+'|'+category):null;
  const readState=()=>({screen:state.screen,borough:state.borough,weekday:state.day,quest:state.quest,phase:state.phase,completed:[...state.completed],finishedShifts:state.history.length,weekComplete:state.history.length===5,estimate:state.borough?estimate():null,neighborhood:scene()?.name||null,boroughLocked:weekLocked(),order:quest()?.order||null,customer:quest()?.customer.name||null,hoveredBorough:state.hoveredBorough,landmark:state.landmark,landmarks:state.borough?SCENES[state.borough].streets.map((name,i)=>({id:i,name,completed:visitedLandmark(i),available:landmarkAvailable(i)})):[],zooming,activity:isJourney()?window.JourneyStory.readState():null,brooklynActivity:state.borough==='brooklyn'?window.JourneyStory.readState():null,fictionalJourney:true});
  const closeDialog=id=>{if($(id).open)$(id).close();};
  const weekLocked=()=>state.weekStarted||state.completed.size>0||state.history.length>0;
  function clearDeliveryFeedback(){clearTimeout(stampTimer);$('delivered-stamp').hidden=true;}
  function showScreen(screen){
    if(screen!=='brooklyn')window.JourneyStory.pause();
    $('brooklyn-screen').hidden=screen!=='brooklyn';
    if(screen!=='depot')window.EquipmentDepot?.closeChat();
    state.screen=screen;
    $('open-data').hidden=!['overview','landmarks'].includes(screen);
    $('overview-screen').hidden=!['overview','landmarks'].includes(screen);
    $('neighborhood-screen').hidden=screen!=='neighborhood';
    $('day-end-screen').hidden=screen!=='day-end';
    $('depot-screen').hidden=screen!=='depot';
    if(screen!=='neighborhood')closeVisitorChat();
    syncSceneMotion();
  }
  const randomTicks=(min,max)=>min+Math.floor(Math.random()*(max-min+1));
  const sceneCanMove=()=>state.screen==='neighborhood'&&!motionQuery?.matches&&!document.hidden&&!$('quest-dialog').open&&!$('sources-dialog').open;
  function closeVisitorChat(restoreFocus=false){
    const previous=chatVisitor;chatVisitor=null;$('visitor-chat').hidden=true;
    if(previous){previous.classList.remove('chatting');previous.setAttribute('aria-expanded','false');if(restoreFocus&&previous.isConnected)previous.focus({preventScroll:true});}
  }
  function openVisitorChat(id,element){
    if(state.screen!=='neighborhood'||$('quest-dialog').open||$('sources-dialog').open)return;
    if(chatVisitor===element){closeVisitorChat();syncSceneMotion();return;}
    closeVisitorChat();chatVisitor=element;element.classList.add('chatting');element.setAttribute('aria-expanded','true');
    const customer=CUSTOMERS[id],row=estimate(customer.category);
    $('visitor-chat-name').textContent=customer.name;
    $('visitor-chat-fact').textContent=percent(row.rate)+' of weighted '+DAYS[state.day]+' survey days in '+data.boroughs[state.borough].name+' reported a '+TYPES[customer.category].noun+' delivery at home.';
    $('visitor-chat-line').textContent='“'+VISITOR_ASIDES[id]+'”';
    $('visitor-chat').hidden=false;syncSceneMotion();$('visitor-chat').focus({preventScroll:true});
  }
  function positionVisitor(visitor){
    visitor.element.style.left=visitor.x/160*100+'%';
    visitor.element.dataset.facing=visitor.facing===1?'right':'left';
    visitor.element.style.setProperty('--facing',visitor.facing);
  }
  function tickVisitors(){
    for(const visitor of visitors){
      if(visitor.element===chatVisitor||visitor.hovered||visitor.element===document.activeElement)continue;
      if(visitor.wait>0){visitor.wait--;continue;}
      if(visitor.x!==visitor.target){
        const direction=Math.sign(visitor.target-visitor.x);
        visitor.x+=direction*Math.min(2,Math.abs(visitor.target-visitor.x));visitor.facing=direction;
        if(visitor.x===visitor.target)visitor.wait=randomTicks(6,16);
      }else if(Math.random()<.45){
        visitor.facing*=-1;visitor.wait=randomTicks(4,12);
      }else{
        visitor.target=visitor.stops[randomTicks(0,visitor.stops.length-1)];
        if(visitor.target===visitor.x)visitor.wait=randomTicks(4,10);
      }
      positionVisitor(visitor);
    }
  }
  function scheduleSceneTick(){
    if(!sceneCanMove()||!visitors.length)return;
    ambientTimer=setTimeout(()=>{ambientTimer=null;if(!sceneCanMove())return;tickVisitors();scheduleSceneTick();},340);
  }
  function syncSceneMotion(){
    clearTimeout(ambientTimer);ambientTimer=null;
    scheduleSceneTick();
  }
  function renderVisitors(){
    closeVisitorChat();
    clearTimeout(ambientTimer);ambientTimer=null;$('background-characters').replaceChildren();
    const plan=VISITORS[state.borough],day=state.landmark,quests=new Set(dailyCustomers().map(c=>c.sprite));
    const cast=plan.cast.filter(id=>!quests.has(id));
    visitors=plan.lanes[day].map(([plannedX,y],i)=>{
      const size=personSize(y),x=Math.max(size/2+4,Math.min(160-size/2-4,plannedX));
      const id=cast[(day+i)%cast.length],element=document.createElement('button'),sprite=document.createElement('img');
      element.className='background-character';element.dataset.character=CUSTOMERS[id].name;element.style.top=y/90*100+'%';
      element.style.width=size/160*100+'%';element.style.zIndex=String(y);
      element.type='button';element.dataset.sprite=String(id);element.setAttribute('aria-label','Chat with '+CUSTOMERS[id].name+' about the home-delivery survey');element.setAttribute('aria-controls','visitor-chat');element.setAttribute('aria-expanded','false');
      sprite.src=art.customers[id];sprite.alt='';sprite.width=32;sprite.height=32;sprite.draggable=false;element.append(sprite);$('background-characters').append(element);
      // Every stop leaves room for the full sprite beside each request. The
      // short path between stops also stays clear, even when a visitor pauses.
      const stops=[-6,-4,-2,0,2,4,6].map(offset=>x+offset).filter(stop=>
        QUESTS.every((q,index)=>{const point=customerPoint(index);return Math.abs(stop-point.x)>=(size+personSize(point.y))/2+1;})
      );
      const visitor={element,home:x,x,y,stops,target:x,wait:2+i*4,facing:i%2?-1:1,hovered:false};
      element.addEventListener('click',()=>openVisitorChat(id,element));
      element.addEventListener('pointerenter',()=>{visitor.hovered=true;});element.addEventListener('pointerleave',()=>{visitor.hovered=false;});
      positionVisitor(visitor);return visitor;
    });
    syncSceneMotion();
  }
  function renderWeekProgress(){
    renderCourierHearts();
    document.querySelectorAll('[data-weekday]').forEach(item=>{
      const day=item.dataset.weekday,done=state.history.some(s=>s.day===day),current=day===state.day&&!done;
      item.classList.toggle('finished',done);if(current)item.setAttribute('aria-current','step');else item.removeAttribute('aria-current');
      item.setAttribute('aria-label',DAYS[day]+(done?', shift complete':current?', current shift':', upcoming'));
    });
  }
  function updateMapText(){
    const district=state.screen==='landmarks';
    $('map-panel').classList.toggle('landmark-mode',district);
    document.querySelectorAll('.borough-shape').forEach(shape=>{
      const borough=shape.dataset.borough,name=data.boroughs[borough].name,enabled=!weekLocked()||borough===state.borough;
      shape.setAttribute('tabindex',district?'-1':'0');shape.setAttribute('aria-disabled',String(!enabled));
      shape.setAttribute('aria-label',(weekLocked()?'Return to ':'Choose ')+name+(enabled?'':' next week'));
      const title=shape.querySelector('title');if(title)title.textContent=name+(enabled?(weekLocked()?' — your borough for the week':' — choose a starting borough'):' — available next week');
      if(district)shape.classList.remove('hovered');
    });
    $('back-city-map').hidden=!district;
    $('screen-title').textContent=district?data.boroughs[state.borough].name+' · Choose a landmark':'City map · NYC';
    $('day-kicker').textContent=district?DAYS[state.day].toUpperCase()+' · CHOOSE YOUR STOP':STORY[state.day].kicker;
    if(district&&isJourney()){$('guide-dialogue').textContent=state.stopStarted?'Return to '+scene().name+' to finish today’s stop.':'Choose any available stop for '+DAYS[state.day]+'. Each location is visited once this week.';return;}
    $('guide-dialogue').textContent=district?(state.completed.size?'Return to '+scene().name+' to finish today’s three requests.':hasRequests()?'Return to '+scene().name+' or choose another landmark. Your first completed delivery locks today’s stop.':'Choose a landmark for '+DAYS[state.day]+'. Three deliveries finish the shift. We will visit each place once this week.'):weekLocked()?'Click '+data.boroughs[state.borough].name+' to return to its landmarks. We’ll work here through Friday.':'Hover over a borough. Click to choose it. You can switch until your first completed delivery; then we’ll work there through Friday.';
  }
  function renderOverview(){
    updateMapText();renderMap();renderWeekProgress();
    if(state.screen==='overview'&&state.hoveredBorough)hoverBorough(state.hoveredBorough);
  }
  function hoverBorough(borough){
    if(!data.boroughs[borough])throw new Error('Choose a valid borough.');
    state.hoveredBorough=borough;
    document.querySelectorAll('.borough-shape').forEach(p=>p.classList.toggle('hovered',p.dataset.borough===borough));return readState();
  }

  function renderProgress(){
    $('quest-progress').textContent=state.completed.size+' / 3 deliveries';
    document.querySelectorAll('.quest-marker').forEach(b=>{
      const q=QUESTS.find(q=>q.id===b.dataset.quest),done=state.completed.has(q.id);
      b.classList.toggle('complete',done);b.querySelector('.type-square').textContent=done?'✓':TYPES[q.category].letter;
      b.setAttribute('aria-label',TYPES[q.category].label+' for '+b.dataset.customer+(done?', delivered. Review its data.':'. Open request.'));
    });
  }
  const hasRequests=()=>state.accepted.size>0||state.completed.size>0;
  const visitedLandmark=landmark=>state.history.some(item=>item.landmark===landmark);
  const landmarkAvailable=landmark=>!visitedLandmark(landmark)&&(!(state.completed.size||(isJourney()&&state.stopStarted))||state.landmark===landmark);
  function chooseBorough(borough){
    if(!data.boroughs[borough])throw new Error('Choose one of the five boroughs.');
    if(state.history.some(s=>s.day===state.day))throw new Error('Continue the day-end story before choosing the next shift.');
    if(weekLocked()&&borough!==state.borough)throw new Error('Your borough is fixed until Friday. Finish the week to choose another.');
    if(zooming)return readState();
    const animate=state.screen==='overview'&&map;
    clearDeliveryFeedback();closeDialog('quest-dialog');
    if(borough!==state.borough){state.landmark=null;state.accepted.clear();state.completed.clear();state.weekStarted=false;state.stopStarted=false;window.JourneyStory.reset();}
    state.borough=borough;window.JourneyStory.prefetch(borough);state.quest=null;state.phase='idle';showScreen('landmarks');
    updateMapText();renderWeekProgress();$('screen-title').focus({preventScroll:true});
    if(animate)zoomMap(boroughCamera(),1400);else renderMap();
    return readState();
  }
  function chooseLandmark(landmark){
    if(state.screen!=='landmarks'||zooming)throw new Error('Choose a landmark after the borough map opens.');
    if(!Number.isInteger(landmark)||landmark<0||landmark>4)throw new Error('Choose one of the five landmarks.');
    if(visitedLandmark(landmark))throw new Error('You have already delivered here this week. Choose another landmark.');
    if(!landmarkAvailable(landmark))throw new Error('Finish the requests at your current landmark before choosing another.');
    if(landmark!==state.landmark){state.accepted.clear();state.completed.clear();state.stopStarted=false;}
    state.landmark=landmark;state.quest=null;state.phase='idle';openNeighborhood();return readState();
  }
  function openNeighborhood(){
    if(isJourney()){clearDeliveryFeedback();closeDialog('quest-dialog');showScreen('brooklyn');$('screen-title').textContent=data.boroughs[state.borough].name+' · NYC';renderWeekProgress();window.JourneyStory.open(state.landmark,state.day,state.borough);return;}
    clearDeliveryFeedback();closeDialog('quest-dialog');showScreen('neighborhood');
    $('screen-title').textContent=data.boroughs[state.borough].name+' · NYC';
    const place=scene();
    $('neighborhood-art').src=art.scenes[place.key];$('neighborhood-art').alt='A playful fictional setting at '+place.name+'.';document.querySelectorAll('.scene-extension').forEach(img=>img.src=art.scenes[place.key]);
    $('neighborhood-stage').style.setProperty('--scene-art','url("'+art.scenes[place.key]+'")');
    renderMarkers();renderVisitors();renderProgress();renderWeekProgress();$('neighborhood-stage').classList.remove('entering');void $('neighborhood-stage').offsetWidth;$('neighborhood-stage').classList.add('entering');
    const featured=CUSTOMERS[Object.keys(SCENES).indexOf(state.borough)*5+state.landmark];
    setMission(state.completed.size?(3-state.completed.size)+' customers still need your help.':featured.name+' is waiting. Choose a labeled customer to see what they need.');
    $('screen-title').focus();
  }
  function showMap(){
    if(state.screen==='depot')throw new Error('Finish the equipment check before returning to the map.');
    if(state.screen==='day-end')throw new Error('Continue the story to open the next day’s map.');
    clearDeliveryFeedback();closeDialog('quest-dialog');state.quest=null;state.phase='idle';if(!hasRequests()&&!(isJourney()&&state.stopStarted))state.landmark=null;
    showScreen(state.borough?'landmarks':'overview');renderOverview();$('screen-title').focus();return readState();
  }
  function showCityMap(){
    if(state.screen==='depot')throw new Error('Finish the equipment check before returning to the map.');
    if(state.screen==='day-end')throw new Error('Continue the story to open the next day’s map.');
    if(zooming)return readState();
    const animate=state.screen==='landmarks'&&map;
    clearDeliveryFeedback();closeDialog('quest-dialog');state.quest=null;state.phase='idle';if(!hasRequests()&&!(isJourney()&&state.stopStarted))state.landmark=null;
    showScreen('overview');updateMapText();renderWeekProgress();$('screen-title').focus({preventScroll:true});
    if(animate)zoomMap([0,0,map.width,map.height],1400);else renderMap();
    return readState();
  }
  function stopZoom(){zoomTicket++;if(zoomFrame!==null)window.cancelAnimationFrame(zoomFrame);zoomFrame=null;zooming=false;$('map-panel').classList.remove('zooming');$('borough-map').setAttribute('aria-busy','false');}
  function boroughCamera(){
    const feature=geo.features.find(f=>f.properties.boroname===data.boroughs[state.borough].name);
    return L.camera(map.path.bounds(feature),map.width,map.height);
  }
  function applyCamera(box,labelOpacity,dimOpacity){
    const scale=map.width/box[2];
    map.box=box;map.labelOpacity=labelOpacity;map.dimOpacity=dimOpacity;
    map.svg.style('transform','translate3d('+(-box[0]*scale)+'px, '+(-box[1]*scale)+'px, 0) scale('+scale+')');
    map.labels.style('opacity',labelOpacity);
    map.groups.select('path').attr('opacity',feature=>state.borough&&feature.properties.boroname!==data.boroughs[state.borough].name?dimOpacity:1);
  }
  function zoomMap(target,duration){
    stopZoom();$('landmark-layer').hidden=true;
    const from=[...map.box],fromLabels=map.labelOpacity,toLabels=state.screen==='landmarks'?0:1,fromDim=map.dimOpacity,toDim=state.screen==='landmarks'?.2:1,ticket=zoomTicket;
    const finish=()=>{if(ticket!==zoomTicket)return;applyCamera(target,toLabels,toDim);zooming=false;zoomFrame=null;map.svg.style('will-change','');$('map-panel').classList.remove('zooming');$('borough-map').setAttribute('aria-busy','false');if(state.screen==='landmarks')renderLandmarks();$('screen-title').focus({preventScroll:true});};
    if(motionQuery?.matches||!window.requestAnimationFrame){finish();return;}
    zooming=true;$('map-panel').classList.add('zooming');$('borough-map').setAttribute('aria-busy','true');
    map.svg.style('will-change','transform');const start=performance.now();zoomEndsAt=start+duration;
    const tick=now=>{
      if(ticket!==zoomTicket)return;
      const progress=Math.max(0,Math.min(1,(now-start)/duration)),ease=d3.easeCubicInOut(progress);
      const labelEase=state.screen==='overview'?d3.easeCubicInOut(Math.max(0,(progress-.5)*2)):ease;
      applyCamera(from.map((value,i)=>value+(target[i]-value)*ease),fromLabels+(toLabels-fromLabels)*labelEase,fromDim+(toDim-fromDim)*ease);
      if(progress<1)zoomFrame=window.requestAnimationFrame(tick);else finish();
    };
    zoomFrame=window.requestAnimationFrame(tick);
  }
  function renderMap(resume=null){
    stopZoom();$('landmark-layer').hidden=true;
    const host=d3.select('#borough-map');host.selectAll('*').remove();
    const width=Math.max(240,$('borough-map').clientWidth||1050),height=Math.max(180,$('borough-map').clientHeight||540),padding=width<600?24:40,topPadding=width<600?48:40;
    const guideSpace=width<681?Math.min(150,Math.max(0,height-340)):0;
    const projection=d3.geoMercator().fitExtent([[padding,topPadding],[width-padding,height-padding-guideSpace]],geo),path=d3.geoPath(projection);
    const svg=host.append('svg').attr('viewBox',[0,0,width,height].join(' ')).attr('role','group').attr('aria-label','Choose a borough, then choose one of its five landmarks');
    const groups=svg.selectAll('.map-borough').data(geo.features).join('g').attr('class','map-borough');
    const idFor=f=>f.properties.boroname.toLowerCase().replaceAll(' ','-'),available=f=>!weekLocked()||state.borough===idFor(f);
    groups.append('path').attr('d',path).attr('class',f=>'borough-shape'+(state.screen==='overview'&&state.hoveredBorough===idFor(f)?' hovered':'')).attr('data-borough',idFor).attr('fill',f=>COLORS[idFor(f)]).attr('tabindex',f=>state.screen==='overview'?0:-1).attr('role','button').attr('aria-disabled',f=>String(!available(f))).attr('aria-label',f=>(weekLocked()?'Return to ':'Choose ')+f.properties.boroname+(available(f)?'':' next week')).attr('vector-effect','non-scaling-stroke').on('pointerenter',(_,f)=>{if(state.screen==='overview'&&!zooming)hoverBorough(idFor(f));}).on('focus',(_,f)=>{if(state.screen==='overview')hoverBorough(idFor(f));}).on('click',(_,f)=>{if(state.screen==='overview'&&!zooming&&available(f)){hoverBorough(idFor(f));chooseBorough(idFor(f));}}).on('keydown',(e,f)=>{if(state.screen==='overview'&&!zooming&&available(f)&&(e.key==='Enter'||e.key===' ')){e.preventDefault();chooseBorough(idFor(f));}}).append('title').text(f=>f.properties.boroname+(available(f)?(weekLocked()?' — your borough for the week':' — choose a starting borough'):' — available next week'));
    const offsets={manhattan:[-12,0],bronx:[4,0],brooklyn:[0,4],queens:[10,0],'staten-island':[0,6]};
    const labels=groups.append('text').attr('class','map-label').attr('x',f=>path.centroid(f)[0]+offsets[idFor(f)][0]).attr('y',f=>path.centroid(f)[1]+offsets[idFor(f)][1]).attr('text-anchor','middle').attr('dominant-baseline','middle').attr('font-size',width<450?13:Math.min(22,Math.max(16,width*.017))).text(f=>f.properties.boroname);
    map={svg,groups,labels,projection,path,width,height,box:[0,0,width,height],labelOpacity:1,dimOpacity:1};
    if(resume){
      const center=projection(resume.center),viewWidth=width/resume.scale,viewHeight=height/resume.scale;
      applyCamera([center[0]-viewWidth/2,center[1]-viewHeight/2,viewWidth,viewHeight],resume.labels,resume.dim);
      zoomMap(state.screen==='landmarks'?boroughCamera():[0,0,width,height],resume.remaining);
    }else if(state.screen==='landmarks'){applyCamera(boroughCamera(),0,.2);renderLandmarks();}else applyCamera([0,0,width,height],1,1);
  }
  function resizeMap(){
    if(!['overview','landmarks'].includes(state.screen))return;
    const width=Math.max(240,$('borough-map').clientWidth||1050),height=Math.max(180,$('borough-map').clientHeight||540);
    if(map&&width===map.width&&height===map.height)return;
    const resume=zooming?{center:map.projection.invert([map.box[0]+map.box[2]/2,map.box[1]+map.box[3]/2]),scale:map.width/map.box[2],labels:map.labelOpacity,dim:map.dimOpacity,remaining:Math.max(160,zoomEndsAt-performance.now())}:null;
    renderMap(resume);
  }
  function renderLandmarks(){
    $('landmark-layer').dataset.borough=state.borough;
    const places=SCENES[state.borough].streets.map((name,i)=>({name,coordinate:isJourney()?window.JourneyStory.getStops(state.borough)[i].coordinate:L.places[state.borough][i].coordinate}));
    const names=places.map(place=>place.name),points=places.map(place=>L.project(map.projection(place.coordinate),map.box,map.width,map.height));
    const labels=L.labels(points,names,map.width,map.height,state.borough),lines=d3.select('#landmark-lines');
    $('landmark-pins').replaceChildren();$('landmark-dots').replaceChildren();lines.selectAll('*').remove();lines.attr('viewBox',[0,0,map.width,map.height].join(' '));
    for(let i=0;i<places.length;i++){
      const box=labels[i],done=visitedLandmark(i),enabled=landmarkAvailable(i),[ax,ay]=points[i];
      const button=document.createElement('button');button.className='landmark-pin'+(done?' completed':'')+(hasRequests()&&state.landmark===i?' active':'');button.dataset.landmark=String(i);button.disabled=!enabled;button.style.left=box.x+'px';button.style.top=box.y+'px';button.style.width=box.w+'px';button.style.height=box.h+'px';
      const label=document.createElement('span');label.className='landmark-name';label.textContent=(done?'✓ ':'')+names[i];button.append(label);
      const description=names[i]+(done?', completed this week':enabled?', choose for '+DAYS[state.day]:', finish your current requests first');button.setAttribute('aria-label',description);
      const dot=document.createElement('button');dot.className='landmark-dot'+(done?' completed':'');dot.disabled=!enabled;dot.tabIndex=-1;dot.dataset.landmark=String(i);dot.style.left=ax+'px';dot.style.top=ay+'px';dot.setAttribute('aria-label',description);dot.title=names[i];
      const dx=ax-box.x,dy=ay-box.y,ratio=Math.max(1,Math.abs(dx)/(box.w/2),Math.abs(dy)/(box.h/2));
      const line=lines.append('line').attr('class','landmark-line'+(done?' completed':'')).attr('x1',ax).attr('y1',ay).attr('x2',box.x+dx/ratio).attr('y2',box.y+dy/ratio).node();
      const highlight=on=>{button.classList.toggle('highlighted',on);dot.classList.toggle('highlighted',on);line.classList.toggle('highlighted',on);};
      const hover=()=>{highlight(true);$('guide-dialogue').textContent=done?'You have already delivered at '+names[i]+'. Choose another landmark.':enabled?(hasRequests()&&state.landmark===i?'Return to ':'Visit ')+names[i]+'. '+(isJourney()?window.JourneyStory.getStops(state.borough)[i].mode==='deliveries'?'Read the neighbors’ requests and hand over their orders.':window.JourneyStory.getStops(state.borough)[i].intro:CUSTOMERS[Object.keys(SCENES).indexOf(state.borough)*5+i].name+' is here, along with two other customers.'):'Finish the requests at '+scene().name+' before visiting another landmark.';};
      const leave=()=>{highlight(false);if(state.screen==='landmarks')updateMapText();};
      for(const control of [button,dot]){control.addEventListener('pointerenter',hover);control.addEventListener('focus',hover);control.addEventListener('pointerleave',leave);control.addEventListener('blur',leave);control.addEventListener('click',()=>chooseLandmark(i));}
      $('landmark-pins').append(button);$('landmark-dots').append(dot);
    }
    $('landmark-layer').hidden=false;
  }

  function renderMarkers(){
    $('quest-markers').replaceChildren();
    const customers=dailyCustomers();
    QUESTS.forEach((q,i)=>{
      const t=TYPES[q.category],customer=customers[i],point=customerPoint(i),b=document.createElement('button');b.className='quest-marker';b.dataset.quest=q.id;b.dataset.customer=customer.name;b.style.left=point.x/160*100+'%';b.style.top=point.y/90*100+'%';b.style.width=personSize(point.y)/160*100+'%';b.style.zIndex=String(point.y);
      const badge=document.createElement('span');badge.className='quest-badge';
      const icon=document.createElement('span');icon.className='type-square '+q.category;icon.setAttribute('aria-hidden','true');icon.textContent=t.letter;
      const label=document.createElement('span');label.className='quest-label';label.textContent=t.label;badge.append(icon,label);
      const sprite=document.createElement('img');sprite.className='customer-art';sprite.src=art.customers[customer.sprite];sprite.alt='';sprite.width=32;sprite.height=32;
      b.append(badge,sprite);b.addEventListener('click',()=>openQuest(q.id));$('quest-markers').append(b);
    });
  }
  function openQuest(id){
    if(state.screen==='brooklyn'){const order=window.JourneyStory.getStops(state.borough)[state.landmark].orders?.find(o=>o.id===id);if(!order)throw new Error('Use this location’s delivery supplies.');window.JourneyStory.talk(order.sprite);return readState();}
    if(state.screen!=='neighborhood')throw new Error('Enter today’s setting first.');
    if(!QUESTS.some(q=>q.id===id))throw new Error('Choose an available customer request.');
    clearDeliveryFeedback();closeVisitorChat();state.quest=id;state.phase=state.accepted.has(id)?'accepted':'offer';if(!$('quest-dialog').open)$('quest-dialog').showModal();syncSceneMotion();renderQuestCard();return readState();
  }
  function renderQuestCard(){
    const q=quest(),t=TYPES[q.category],info=data.boroughs[state.borough],accepted=state.phase==='accepted',done=state.completed.has(q.id);
    $('quest-kicker').textContent=accepted?(done?'DELIVERED · YOUR DISCOVERY':'QUEST ACCEPTED'):'DELIVERY REQUEST';
    $('quest-icon').className='quest-type-icon '+q.category;$('quest-icon').textContent=t.letter;$('quest-title').textContent=q.order.title;$('quest-location').textContent=t.label+' · '+scene().name+' · '+info.name+' · '+DAYS[state.day];
    $('quest-recipient').textContent=q.customer.name;$('quest-customer').src=art.customers[q.customer.sprite];
    $('offer-description').textContent=q.order.description;$('quest-offer').hidden=accepted;$('quest-data').hidden=!accepted;
    if(accepted){
      const here=estimate(),city=estimate(q.category,state.day,'city');$('quest-rate').textContent=percent(here.rate);
      $('quest-rate-description').textContent='of weighted '+DAYS[state.day]+' survey days in '+info.name+' reported a '+t.noun+' delivery.';
      $('quest-sample').textContent=number(here.n)+' valid day records';$('quest-city-rate').textContent='NYC on '+DAYS[state.day]+': '+percent(city.rate);
      $('complete-quest').hidden=done;$('chart-note').textContent=state.day==='5'?'The whole week is revealed.':'More weekday findings unlock as your story progresses.';renderQuestChart();
    }
  }
  function acceptQuest(){if(state.phase!=='offer'||!quest())throw new Error('Open a delivery request first.');state.accepted.add(state.quest);state.phase='accepted';renderQuestCard();return readState();}
  function renderQuestChart(){
    const rows=Object.keys(DAYS).filter(day=>Number(day)<=Number(state.day)).map(day=>({...estimate(quest().category,day),label:SHORT[day]}));
    const width=Math.max(245,$('quest-chart').clientWidth||470),height=170,m={top:22,bottom:28,left:36,right:8},max=Math.max(5,Math.ceil(Math.max(...rows.map(r=>r.rate))/5)*5);
    const x=d3.scaleBand().domain(Object.keys(DAYS)).range([m.left,width-m.right]).padding(.38),y=d3.scaleLinear().domain([0,max]).range([height-m.bottom,m.top]);
    const host=d3.select('#quest-chart');host.selectAll('*').remove();
    const svg=host.append('svg').attr('viewBox','0 0 '+width+' '+height).attr('role','img').attr('aria-label',TYPES[quest().category].label+' delivery percentages in '+data.boroughs[state.borough].name+', Monday through '+DAYS[state.day]+'. Later weekdays unlock after each shift.');
    for(const value of [0,max/2,max]){
      svg.append('line').attr('x1',m.left).attr('x2',width-m.right).attr('y1',y(value)).attr('y2',y(value)).attr('stroke','#c1cbbb').attr('stroke-dasharray',value?'3 4':'none');
      svg.append('text').attr('x',m.left-5).attr('y',y(value)+4).attr('text-anchor','end').attr('font-size',12).attr('fill','#53666a').text(Number(value.toFixed(1))+'%');
    }
    for(const day of Object.keys(DAYS)){
      svg.append('text').attr('x',x(day)+x.bandwidth()/2).attr('y',height-7).attr('text-anchor','middle').attr('font-size',14).attr('font-weight',day===state.day?800:400).attr('fill',Number(day)>Number(state.day)?'#879790':'#243739').text(SHORT[day]);
      if(Number(day)>Number(state.day))svg.append('text').attr('x',x(day)+x.bandwidth()/2).attr('y',height-m.bottom-12).attr('text-anchor','middle').attr('font-size',12).attr('fill','#879790').text('…');
    }
    const bars=svg.selectAll('g').data(rows).join('g').attr('class',r=>'day-bar'+(r.day===state.day?' current':''));
    bars.append('title').text(r=>DAYS[r.day]+': '+percent(r.rate)+', '+number(r.n)+' valid day records');
    bars.append('rect').attr('class','bar').attr('x',r=>x(r.day)).attr('y',r=>y(r.rate)).attr('width',x.bandwidth()).attr('height',r=>height-m.bottom-y(r.rate)).attr('fill',r=>r.day===state.day?'#e8b647':'#9dbe91');
    bars.append('text').attr('x',r=>x(r.day)+x.bandwidth()/2).attr('y',r=>y(r.rate)-8).attr('text-anchor','middle').attr('font-size',width<340?12:14).attr('font-weight',800).attr('fill','#243739').text(r=>percent(r.rate));
  }
  function renderCourierHearts(){
    const remaining=4-(Number(state.day)-1)/2;
    document.querySelectorAll('.heart-fill-clip').forEach((clip,i)=>clip.setAttribute('width',String(14*Math.max(0,Math.min(1,remaining-i)))));
    $('courier-hearts').setAttribute('aria-label',remaining+' of 4 decorative hearts. '+DAYS[state.day]+'.');
  }
  function setMission(message){$('mission-message').textContent=message;}
  function finishDay(){
    if(!stopComplete()||state.history.some(s=>s.day===state.day))return;
    state.history.push({day:state.day,borough:state.borough,landmark:state.landmark,neighborhood:scene().name});state.phase='day-complete';showScreen('day-end');renderWeekProgress();
    const final=state.day==='5',name=data.boroughs[state.borough].name;
    $('day-end-screen').classList.toggle('bk-week-end',isJourney()&&final);$('day-findings').classList.remove('bk-week-findings');$('day-findings').hidden=false;
    $('screen-title').textContent=final?'Your week, delivered.':DAYS[state.day]+' · Shift complete';
    $('day-end-kicker').textContent=DAYS[state.day].toUpperCase()+' · '+name.toUpperCase()+' · 3 / 3 DELIVERIES';
    $('day-end-title').textContent=final?'Your week, delivered.':DAYS[state.day]+', delivered.';$('day-end-story').textContent=STORY[state.day].end;$('next-day').textContent=final?'Start a new week':'Start '+DAYS[Number(state.day)+1];
    $('day-findings').replaceChildren();
    if(isJourney()){
      $('day-end-kicker').textContent=DAYS[state.day].toUpperCase()+' · '+name.toUpperCase()+' · STOP COMPLETE';
      $('day-end-story').textContent=final?'Here are the survey findings behind the week’s deliveries.':'Your stop at '+scene().name+' is complete. Time to check the bicycle equipment before the next shift.';
      $('day-findings').hidden=!final;if(final)window.JourneyStory.renderWeek($('day-findings'));
      $('next-day').textContent='Return to the depot';$('day-end-title').focus();return;
    }
    for(const [category,t] of Object.entries(TYPES)){
      const card=document.createElement('div');card.className='finding-card';const label=document.createElement('span'),rate=document.createElement('strong'),caption=document.createElement('small');
      label.textContent=t.label;rate.textContent=percent(estimate(category).rate);caption.textContent='weighted survey days';card.append(label,rate,caption);$('day-findings').append(card);
    }
    $('next-day').textContent='Return to the depot';
    $('day-end-title').focus();
  }
  function openDepot(){
    if(!state.borough||state.screen!=='day-end'||!stopComplete()||state.phase!=='day-complete')throw new Error('Complete this stop before visiting the depot.');
    showScreen('depot');state.phase='equipment';$('screen-title').textContent=data.boroughs[state.borough].name+' · '+DAYS[state.day]+' equipment check';
    window.EquipmentDepot.show(state.day,CUSTOMERS.map(customer=>customer.name),state.borough);return readState();
  }
  function advanceStory(){
    if(!stopComplete())throw new Error('Complete this stop’s deliveries before starting the next day.');
    if(state.screen!=='depot'||state.phase!=='equipment-complete'||!window.EquipmentDepot.readState().complete)throw new Error('Finish the equipment check before starting the next day.');
    clearDeliveryFeedback();const final=state.day==='5';state.day=final?'1':String(Number(state.day)+1);
    state.quest=null;state.landmark=null;state.phase='idle';state.completed.clear();state.accepted.clear();state.stopStarted=false;window.JourneyStory.reset();
    if(final){state.history=[];state.weekStarted=false;state.borough=null;state.hoveredBorough=null;state.orders=makeWeekOrders();window.EquipmentDepot.reset();showScreen('overview');renderOverview();$('screen-title').focus();}
    else{showScreen('landmarks');renderOverview();$('screen-title').focus();}
    return readState();
  }
  function completeQuest(){
    if(state.screen!=='neighborhood'||state.phase!=='accepted'||!quest()||state.completed.has(state.quest))throw new Error('Accept an unfinished request before handing it over.');
    const q=quest();state.completed.add(q.id);state.phase='idle';closeDialog('quest-dialog');renderProgress();
    setMission(q.customer.name+' got their '+TYPES[q.category].label.toLowerCase()+'. '+(3-state.completed.size)+' requests left today.');
    if(state.completed.size===3)finishDay();
    else{$('delivered-stamp').hidden=false;stampTimer=setTimeout(()=>{$('delivered-stamp').hidden=true;},window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?0:850);}
    return {status:'delivered',quest:q.id,customer:q.customer.name,fictional:true};
  }
  function wireControls(){
    motionQuery=window.matchMedia?.('(prefers-reduced-motion: reduce)');
    motionQuery?.addEventListener?.('change',syncSceneMotion);
    $('close-visitor-chat').addEventListener('click',()=>{closeVisitorChat(true);syncSceneMotion();});
    document.addEventListener('keydown',event=>{const depot=window.EquipmentDepot.readState();if(event.key==='Escape'&&(depot.guideDialogueOpen||depot.courierDialogueOpen)){event.preventDefault();window.EquipmentDepot.closeChat(true);}if(event.key==='Escape'&&chatVisitor){event.preventDefault();closeVisitorChat(true);syncSceneMotion();}});
    document.addEventListener('click',event=>{
      window.EquipmentDepot.dismissOutside(event);
      if(!chatVisitor||event.target.closest?.('.background-character')||$('visitor-chat').contains(event.target))return;
      closeVisitorChat();syncSceneMotion();
    });
    document.addEventListener('visibilitychange',syncSceneMotion);
    window.addEventListener('pagehide',()=>{clearTimeout(ambientTimer);ambientTimer=null;});
    window.addEventListener('pageshow',syncSceneMotion);
    $('back-map').addEventListener('click',showMap);$('back-city-map').addEventListener('click',showCityMap);$('next-day').addEventListener('click',openDepot);
    $('accept-quest').addEventListener('click',acceptQuest);$('complete-quest').addEventListener('click',completeQuest);$('close-quest').addEventListener('click',()=>closeDialog('quest-dialog'));
    $('quest-dialog').addEventListener('close',()=>{if(state.phase==='offer'||state.phase==='accepted')state.phase='idle';syncSceneMotion();});
    $('close-sources').addEventListener('click',()=>closeDialog('sources-dialog'));
    $('open-data').addEventListener('click',()=>window.DeliveryData.open({borough:state.borough,day:state.day}));
    $('sources-dialog').addEventListener('close',syncSceneMotion);
    window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{resizeMap();window.EquipmentDepot.positionChat();if($('quest-dialog').open&&state.phase==='accepted')renderQuestChart();},100);});
  }
  function registerTools(){
    const context=document.modelContext;if(!context?.registerTool)return;const lifecycle=new AbortController(),empty={type:'object',properties:{},additionalProperties:false};
    const definitions=[
      {name:'read_delivery_game',title:'Read delivery story',description:'Read today’s borough, weekday, progress and real survey estimate.',inputSchema:empty,annotations:{readOnlyHint:true,untrustedContentHint:false},execute:readState},
      {name:'configure_delivery_game',title:'Choose your borough for the week',description:'Choose or switch boroughs before completing the first delivery. After that, the borough is fixed through Friday. Resume it to choose one of its five locations for the day.',inputSchema:{type:'object',properties:{borough:{type:'string',enum:Object.keys(data.boroughs)}},required:['borough'],additionalProperties:false},execute:input=>{if(!input||typeof input!=='object'||Object.keys(input).some(k=>k!=='borough'))throw new Error('Choose a borough only. Weekdays follow the story.');return chooseBorough(input.borough);}},
      {name:'choose_delivery_landmark',title:'Choose a landmark',description:'Choose an unvisited landmark on the zoomed borough map. After the first handover or activity placement, finish that stop before choosing another location.',inputSchema:{type:'object',properties:{landmark:{type:'integer',minimum:0,maximum:4}},required:['landmark'],additionalProperties:false},execute:input=>chooseLandmark(input?.landmark)},
      {name:'open_delivery_request',title:'Talk to a customer',description:'Open a fictional request from a person in today’s setting.',inputSchema:{type:'object',properties:{quest:{type:'string',enum:QUESTS.map(q=>q.id)}},required:['quest'],additionalProperties:false},execute:input=>openQuest(input?.quest)},
      {name:'continue_delivery_story',title:'Continue the story',description:'Return to the depot after finishing the daily stop and complete the equipment check before advancing in every borough.',inputSchema:empty,execute:()=>state.screen==='day-end'?openDepot():advanceStory},
      {name:'talk_to_delivery_character',title:'Talk to a character',description:'Read a scene character’s request or conversation without handing over an item.',inputSchema:{type:'object',properties:{sprite:{type:'integer',minimum:0,maximum:24}},required:['sprite'],additionalProperties:false},execute:input=>window.JourneyStory.talk(input.sprite)},
      {name:'read_delivery_activity',title:'Read the current delivery stop',description:'Read the current delivery activity and its conversation finding.',inputSchema:empty,annotations:{readOnlyHint:true,untrustedContentHint:false},execute:()=>window.JourneyStory.readState()},
      {name:'choose_delivery_item',title:'Choose a delivery item',description:'Select an order or a supply available in the current delivery stop.',inputSchema:{type:'object',properties:{item:{type:'string'}},required:['item'],additionalProperties:false},execute:input=>{if(state.screen!=='brooklyn')throw new Error('Open a delivery stop first.');return window.JourneyStory.chooseItem(input.item);}},
      {name:'place_delivery_item',title:'Hand over or place the selected item',description:'Choose a customer request ID, table slot, lane or rack at the current delivery stop.',inputSchema:{type:'object',properties:{target:{type:'string'}},required:['target'],additionalProperties:false},execute:input=>{if(state.screen!=='brooklyn')throw new Error('Open a delivery stop first.');return window.JourneyStory.interact(input.target);}},
      {name:'complete_delivery_activity',title:'Perform the scene’s next action',description:'Present the selected runway model, start the supplied hot dog contest, or serve the campsite dinner. Supply scenes finish when their placements are complete.',inputSchema:empty,execute:()=>{if(state.screen!=='brooklyn')throw new Error('Open a delivery activity first.');return window.JourneyStory.serve();}},
      {name:'finish_delivery_stop',title:'Finish the current stop',description:'Finish the completed stop and reveal Friday’s weekly recap before the equipment depot.',inputSchema:empty,execute:()=>{if(state.screen!=='brooklyn')throw new Error('Open a delivery stop first.');return window.JourneyStory.finish();}},
      {name:'read_equipment_activity',title:'Read equipment activity',description:'Read the illustrated depot task and equipment already checked.',inputSchema:empty,annotations:{readOnlyHint:true,untrustedContentHint:false},execute:()=>window.EquipmentDepot.readState()},
      {name:'select_depot_equipment',title:'Pick up depot equipment',description:'Choose an item on today’s bench. Does not change the recorded inspection figures.',inputSchema:{type:'object',properties:{item:{type:'string',enum:['apparel','helmet','bell','lamps','reflectors','id','brakes']}},required:['item'],additionalProperties:false},execute:input=>{if(state.screen!=='depot')throw new Error('Visit the depot first.');return window.EquipmentDepot.chooseItem(input?.item);}},
      {name:'fit_depot_equipment',title:'Fit the selected equipment',description:'Fit the illustrated item to the courier or bicycle.',inputSchema:{type:'object',properties:{target:{type:'string',enum:['courier','bicycle']}},required:['target'],additionalProperties:false},execute:input=>{if(state.screen!=='depot')throw new Error('Visit the depot first.');return window.EquipmentDepot.fitItem(input?.target);}}
    ];
    for(const tool of definitions){try{Promise.resolve(context.registerTool({...tool,annotations:tool.annotations||{readOnlyHint:false,untrustedContentHint:false}},{signal:lifecycle.signal})).catch(()=>{});}catch{}}
    window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
  }
  async function init(){
    try{
      if(!window.d3)throw new Error('The map and chart library could not load.');
      art=JSON.parse($('game-art').textContent);
      if(Object.keys(art.scenes).length!==25||art.customers.length!==25)throw new Error('The game art is incomplete.');
      const responses=await Promise.all([fetch('data.json'),fetch('boroughs.geojson?v=map-overlay-6'),fetch('equipment-data.json?v=depot-39')]);if(responses.some(r=>!r.ok))throw new Error('The data could not load.');
      const loaded=await Promise.all(responses.map(r=>r.json()));[data,geo]=loaded;lookup=new Map(data.rows.map(r=>[r.area+'|'+r.day+'|'+r.category,r]));
      window.JourneyStory.init({art,rows:data.rows,customers:CUSTOMERS,asides:VISITOR_ASIDES,guide:$('depot-guide').src,onMap:showMap,onFinish:finishDay,onProgress:info=>{
        if(!isJourney()||state.screen!=='brooklyn')return;
        const keys=info.progressKeys;
        state.completed=new Set(keys);state.accepted=new Set(info.readRequests);
        if(info.progress>0){state.weekStarted=true;state.stopStarted=true;}
        state.phase=info.complete?'activity-complete':'activity';
      }});
      window.EquipmentDepot.init({art,data:loaded[2],onComplete:()=>{state.phase='equipment-complete';},onContinue:advanceStory});
      window.DeliveryData.init({survey:data,equipment:loaded[2]});
      $('screen-title').setAttribute('tabindex','-1');wireControls();renderOverview();registerTools();window.deliveryGame={readState,hoverBorough,chooseBorough,chooseLandmark,showMap,showCityMap,openQuest,acceptQuest,completeQuest,openDepot,advanceStory};window.dispatchEvent(new Event('delivery-ready'));
    }catch(error){$('app-error').hidden=false;$('app-error').textContent='The delivery data could not load. Please reload the page to try again.';console.error(error);}
  }
  init();
})();
