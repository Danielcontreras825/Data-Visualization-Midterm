(() => {
  'use strict';
  const p=(coordinate,icon)=>({coordinate,icon});
  const places={
    manhattan:[p([-74.017,40.7034],'statue'),p([-73.9855,40.758],'building'),p([-73.9686,40.7812],'park'),p([-73.9772,40.7527],'station'),p([-73.9857,40.7484],'building')],
    brooklyn:[p([-73.9896,40.7011],'bridge'),p([-73.9782,40.5748],'wheel'),p([-73.9701,40.6605],'park'),p([-73.9752,40.6826],'stadium'),p([-73.9636,40.6712],'museum')],
    bronx:[p([-73.9262,40.8296],'stadium'),p([-73.8782,40.8506],'zoo'),p([-73.8768,40.8624],'garden'),p([-73.8871,40.8541],'building'),p([-73.9116,40.8978],'garden')],
    queens:[p([-73.8458,40.7464],'globe'),p([-73.8458,40.7571],'stadium'),p([-73.8159,40.5842],'beach'),p([-73.9239,40.7794],'park'),p([-73.9232,40.7563],'museum')],
    'staten-island':[p([-74.0735,40.6433],'ferry'),p([-74.1013,40.6438],'garden'),p([-74.1456,40.5726],'museum'),p([-74.0608,40.6051],'fort'),p([-74.1158,40.6268],'zoo')]
  };
  function camera(bounds,width,height) {
    const padding=width<500?70:100,ratio=width/height,guideSpace=width<681?Math.min(150,Math.max(0,height-340)):0;
    const dx=Math.max(1,bounds[1][0]-bounds[0][0]),dy=Math.max(1,bounds[1][1]-bounds[0][1]);
    const scale=Math.min((width-padding)/dx,(height-padding-guideSpace)/dy),viewWidth=width/Math.max(.01,scale),viewHeight=viewWidth/ratio;
    return [(bounds[0][0]+bounds[1][0])/2-viewWidth/2,(bounds[0][1]+bounds[1][1])/2-(height-guideSpace)/(2*Math.max(.01,scale)),viewWidth,viewHeight];
  }
  function project(point,box,width,height) {return [(point[0]-box[0])/box[2]*width,(point[1]-box[1])/box[3]*height];}
  function labels(points,names,width,height,borough) {
    const guideSpace=width<681?Math.min(150,Math.max(0,height-340)):0;
    const boxes=[],top=height<280?72:width<681?80:96,bottom=Math.max(top+40,height-22-guideSpace),gap=10,h=width<500?40:44;
    const labelWidth=i=>Math.min(width<500?(width-32)/2:width-24,16+names[i].length*(width<500?6.6:7.8));
    const separated=(a,b)=>Math.abs(a.x-b.x)>=(a.w+b.w)/2+gap||Math.abs(a.y-b.y)>=(a.h+b.h)/2+gap;
    const gridLayout=()=>{
      const columns=height<240&&width>=600?3:width<500?2:3,rows=Math.ceil(points.length/columns);
      return points.map((anchor,i)=>({x:(i%columns+.5)*width/columns,y:top+(Math.floor(i/columns)+.5)*(bottom-top)/rows,w:Math.min(width/columns-24,labelWidth(i)),h,anchor}));
    };
    if(borough==='manhattan'&&height>=280){
      const result=[],columns=[[],[]],order=points.map((anchor,i)=>({anchor,i})).sort((a,b)=>a.anchor[1]-b.anchor[1]);
      order.forEach(({anchor,i},rank)=>{const side=rank%2,w=Math.min(width/2-24,labelWidth(i));const x=anchor[0]+(side?1:-1)*(w/2+32);const box={x:Math.max(w/2+12,Math.min(width-w/2-12,x)),y:Math.max(top+h/2,Math.min(bottom-h/2,anchor[1])),w,h,anchor};result[i]=box;columns[side].push(box);});
      for(const column of columns){
        for(let i=1;i<column.length;i++)column[i].y=Math.max(column[i].y,column[i-1].y+h+gap);
        if(column.at(-1).y>bottom-h/2){column.at(-1).y=bottom-h/2;for(let i=column.length-2;i>=0;i--)column[i].y=Math.min(column[i].y,column[i+1].y-h-gap);}
      }
      if(result.every((box,i)=>box.y-h/2>=top&&result.slice(i+1).every(other=>separated(box,other))))return result;
    }
    for(let i=0;i<points.length;i++){
      const [ax,ay]=points[i],w=labelWidth(i);
      const clamp=(x,y)=>({x:Math.max(w/2+12,Math.min(width-w/2-12,x)),y:Math.max(top+h/2,Math.min(bottom-h/2,y)),w,h});
      const valid=box=>boxes.every(other=>separated(box,other))&&points.every(([x,y])=>Math.abs(box.x-x)>=w/2+10||Math.abs(box.y-y)>=h/2+10)&&Math.hypot(Math.max(0,Math.abs(box.x-ax)-w/2),Math.max(0,Math.abs(box.y-ay)-h/2))>=24;
      const brooklynPreferred=[clamp(ax-w*.28,ay-58),clamp(ax,ay-52),clamp(ax+w/2+34,ay),clamp(ax,ay+54),clamp(ax+w/2+34,ay)];
      const candidates=borough==='brooklyn'?[brooklynPreferred[i],...(i===0?[clamp(ax-w/2-34,ay-54)]:[]),clamp(ax-w/2-34,ay),clamp(ax+w/2+34,ay),clamp(ax,ay-54),clamp(ax,ay+54)]:[clamp(ax,ay-35),clamp(ax-w/2-24,ay),clamp(ax+w/2+24,ay),clamp(ax,ay+35)];
      for(let radius=55;radius<=Math.max(width,height);radius+=24)for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]])candidates.push(clamp(ax+dx*radius,ay+dy*radius));
      const chosen=candidates.find(valid);
      if(!chosen)return gridLayout();
      boxes.push({...chosen,anchor:[ax,ay]});
    }
    return boxes;
  }
  window.DeliveryLandmarks={places,camera,project,labels};
})();
