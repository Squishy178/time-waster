var clicks=0;
var time=0;
var log=['Welcome to the <b>Time Waster</b>','Click on the "click" button to start']
    
var unlocked=[];
var milestones=[
    {
        unlocked:0,
        starting:200,
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
    if (variable>=value){
        log.push("<span style='color:gray'>"+i.txt(value)+"</span>");
        i.unlocked++;
        totalMilestones++;
    }
        
        
}
function clickButton(){
    clicks+=1;
    if (clicks==3) log.push("<span style='color:gray'>Nice try, but there is no achievement for 3 clicks</span>")
}
function tick(){
    document.querySelector('#clicks').innerHTML='Estimated Calories Burned: '+clicks*0.00142857142;
    document.querySelector('#time').innerHTML='Time Wasted: '+Math.floor(time/3600/24)+' Days, '+Math.floor(time/3600)%24+' Hours, '+Math.floor(time/60)%60+' Minutes, '+Math.floor(time)%60+' seconds';


    document.querySelector('#breath').innerHTML='Estimated Breaths taken: '+Math.floor(18*time/60);
    document.querySelector('#death').innerHTML='Number of people that died since you started: '+Math.floor(1.73611111111*time);
    document.querySelector('#getajob').innerHTML='Amount of money that you could have been earning if you had a job: $'+Math.floor(100*9.2*time/3600)/100;
    document.querySelector('#total').innerHTML='Total clicks clicked: '+clicks;
    document.querySelector('#percent').innerHTML='Percent of your estimated life wasted: '+Math.floor(10000000*time/3600/24/365/80)/100000+'%';
    document.querySelector('#complete').innerHTML='Achievements completed: '+Math.floor(1000*(unlocked.length/achievementData.length))/10+'% ('+unlocked.length+' out of '+achievementData.length+')';
    let str=''
    let offset=Math.max(0,log.length-7)
    for (i=0;i<Math.min(7,log.length);i++){
        str+='<p class="txt" style="color:black">'+log[i+offset]+'</p>'
        
    }
    document.querySelector('#commentary').innerHTML=str;


    for (i=0; i<achievementData.length; i++){    
        if (achievementData[i].cond()) unlock(i);
    }
    updateMilestones(0,Math.floor(1.73611111111*time));
    updateMilestones(1,clicks);


    time+=1/60;

}

setInterval(tick,1000/60)
