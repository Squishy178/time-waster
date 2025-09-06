var lastΔ = Date.now()
var loadedImages={};
var tab = 1;


function preloadImage(url)
{
    let img=new Image();
    img.src=url;
    loadedImages[url]=img;
}
function getImage(url) {
    return loadedImages[url];
}
function getSfx(url) {
    return loadedSfx[url];
}
const preloadImages=[
    'secret1.png',
    'icons.png',
    'milestones.png',
];

var loadedSfx={};
const preloadSfxs=[

];
function preloadSfx(url){
    let aud=new Audio();
    aud.src=url;
    loadedSfx[url]=aud;
}
function playSfx(url) {
    loadedSfx[url].play();
}



var clicks=0;
var time=0;
var log=['Welcome to the <b>Time Waster</b>','Click on the "click" button to start']
var timestart = Date.now()  
var unlocked=[];
var milestones=[
    {
        unlocked:0,
        starting:100,
        mult:2,
        txt:function(i){return 'You have witnessed <b>'+i+'</b> deaths'},
    },
    {
        unlocked:0,
        starting:50,
        mult:2,
        txt:function(i){return 'You have clicked <b>'+i+'</b> times'},
    },
]
function visible(id,conditionifon) {
  if (conditionifon){
    document.getElementById(id).removeAttribute("hidden",'');
  }else{
    document.getElementById(id).setAttribute('hidden','');
  }
}
var totalMilestones=0;
function unlock(i){
    if (!unlocked.includes(i)){
        unlocked.push(i);
        log.push('==============================');
        log.push('Achievement Unlocked! '+'<b>"'+achievementData[i].name+'"</b>');
        log.push("<span style='color:gray'>"+achievementData[i].desc+"</span>");
    }
}
function updateMilestones(item,variable){
    let i = milestones[item];
    let value=i.starting*(i.mult**i.unlocked);
    if (i.unlocked<=13 && variable>=value){
        log.push("<span style='color:gray'>"+i.txt(value)+"</span>");
        i.unlocked++;
        totalMilestones++;
    }     
}
function clickButton(){
    clicks+=1;
    if (clicks==3) log.push("<span style='color:gray'>Nice try, but there is no achievement for 3 clicks</span>");
    if (clicks>3){
        let amt = 0
        if (Math.random()<0.005){unlock(24); amt++;}
        if (Math.random()<0.001){unlock(25); amt++;}
        if (Math.random()<0.0005){unlock(26); amt++;}
        if (Math.random()<0.0001){ unlock(27); amt++;}
        if (Math.random()<0.00005){ unlock(28); amt++;}
        if (amt>1) unlock(29);
    }
}

document.addEventListener("keydown", function(evt) {
    // evt rocks yeah?!
    if (evt.key=='Enter') {
        evt.preventDefault();
    }
}, false);


function tick(){
    let Δ = Date.now() - lastΔ;
    lastΔ = Date.now();
    document.getElementById('tab1').className = (tab==1)?'tab':'tab-closed';
    document.getElementById('tab2').className = (tab==2)?'tab':'tab-closed';
    document.getElementById('tab3').className = (tab==3)?'tab':'tab-closed';
    document.getElementById('tab4').className = (tab==4)?'tab':'tab-closed';
    let unlockedCount = 0;
    for (i=0;i<unlocked.length;i++){
        if (achievementData[unlocked[i]].tags.indexOf('secret')==-1) unlockedCount++;
    }
    let achievementCount = 0;
    for (i=0;i<achievementData.length;i++){
        if (achievementData[i].tags.indexOf('secret')==-1) achievementCount++;
    }
    document.getElementById('complete').innerHTML='Achievements completed: '+Math.floor(1000*(unlockedCount/achievementCount))/10+'% ('+unlockedCount+' out of '+achievementCount+')';

    visible('clicks',tab==1);
    visible('time',tab==1);
    visible('breath',tab==1);
    visible('death',tab==1);
    visible('getajob',tab==1);
    visible('total',tab==1);
    visible('percent',tab==1);

    visible('unlocks',tab==2);

    visible('patch',tab==3);
    
    // let string = '';
    // if (tab==2){
    //     
    //     string += '<br><h2>Milestones:</h2><br>';
    //     for (i=0;i<milestones.length;i++){
    //         string += '<div class="achievement'+((i%2==1)?'-locked':'')+'"><img onclick="" src="milestones.png" class="" style="object-position: 0px 0px;"></div>';
    //     }
    // }

    // document.getElementById('unlocks').innerHTML = string;

    document.getElementById('clicks').innerHTML='Estimated Calories Burned: '+clicks*0.00142857142;
    document.getElementById('time').innerHTML='Time Wasted: '+Math.floor(time/3600/24)+' Days, '+Math.floor(time/3600)%24+' Hours, '+Math.floor(time/60)%60+' Minutes, '+Math.floor(time)%60+' seconds';
    document.getElementById('breath').innerHTML='Estimated Breaths taken: '+Math.floor(18*time/60);
    document.getElementById('death').innerHTML='Number of people that died since you started: '+Math.floor(1.73611111111*time);
    document.getElementById('getajob').innerHTML='USD that you could have been earning if you had a job: $'+Math.floor(100*9.2*time/3600)/100;
    document.getElementById('total').innerHTML='Total clicks clicked: '+clicks;
    document.getElementById('percent').innerHTML='Percent of your estimated life wasted: '+Math.floor(10000000*time/3600/24/365/80)/100000+'%';
    
    
    
    let str=''
    let offset=Math.max(0,log.length-7)
    for (i=0;i<Math.min(7,log.length);i++){
        str+='<p class="txt" style="color:black">'+log[i+offset]+'</p>'
        
    }
    document.getElementById('commentary').innerHTML=str;

    for (i=0; i<achievementData.length; i++){    
        if (achievementData[i].cond()) unlock(i);
        //This script runs through all of the achievements and checks if they are unlocked
    }

    const canvas = document.getElementById("unlocks");
    // if (canvas.getContext) {
    //     const ctx = canvas.getContext("2d");
    //     ctx.clearRect(0,0,canvas.width,canvas.height);
    //     ctx.font = '30px Serif';
    //     ctx.fillStyle = 'black';

    //     let y = 0;
        
    //     for (i=0;i<achievementData.length;i++){
    //         ctx.drawImage(getImage('icons.png'), 0, 0, 24, 24, (i%10)*48, Math.floor(i/10)*64, 32, 32);
            
    //     }
    //     ctx.fillText("Milestones", 10, Math.floor(achievementData.length/10)*64+20);
    //     for (i=0;i<milestones.length;i++){
    //         ctx.drawImage(getImage('milestones.png'), 0, 0, 320, 320, i*70, Math.floor(achievementData.length/10)*64+Math.floor(i/10)*70+40, 64, 64);
    //     }
        
    // }


    updateMilestones(0,Math.floor(1.73611111111*time));
    updateMilestones(1,clicks);
    
    time += Δ / 1000;

}
for (var i = 0; i < preloadImages.length; i++){
    preloadImage(preloadImages[i]);
}
for (var i = 0; i < preloadSfxs.length; i++){
    preloadSfx(preloadSfxs[i]);
}
setInterval(tick,1000/60)


