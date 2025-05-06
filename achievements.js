const achievementData=[
    {//0
        name:'First click',
        desc:'Click the button for the first time',
        cond:function(){return clicks>=1}
    },
    {//1
        name:'Second click',
        desc:'Click the button for the <i>second</i> time',
        cond:function(){return clicks>=2}
    },
    {//2
        name:'Depression',
        desc:'Reach 0.01% of your life wasted',
        cond:function(){return Math.floor(100000*time/3600/24/365/80)/1000>=0.01}
    },
    {//3
        name:'May as well try it',
        desc:'Click on the Game Log',
        cond:function(){return false}
    },
    {//4
        name:'Question',
        desc:'Click on the the little ?',
        cond:function(){return false}
    },
    {//5
        name:'An hour\'s worth',
        desc:'Spend an hour wasted',
        cond:function(){return Math.floor(time/3600)>0}
    },
    {//6
        name:'An hour\'s worth',
        desc:'Spend an hour wasted',
        cond:function(){return Math.floor(time/3600)>0}
    },
    {//7
        name:'Fourth click',
        desc:'But there is one for <i>four</i>',
        cond:function(){return clicks>=4}
    },
    {//8
        name:'Heavy tapping',
        desc:'Burn 1 calorie from clicking',
        cond:function(){return clicks*0.00142857142>=1}
    },
    {//9
        name:'Not even breaking a sweat',
        desc:'Burn 3 calories from clicking',
        cond:function(){return clicks*0.00142857142>=3}
    },
    {//10
        name:'Breaking a sweat',
        desc:'Burn 10 calories from clicking',
        cond:function(){return clicks*0.00142857142>=10}
    },
    {//11
        name:'Big Mac',
        desc:'Burn 500 calories from clicking (roughly the amount a big mac has)',
        cond:function(){return clicks*0.00142857142>=500}
    },
    {//12
        name:'Clicking it again?',
        desc:'Click the ? a second time',
        cond:function(){return false}
    },
    {//13
        name:'',
        desc:'Click the ? a second time',
        cond:function(){return false}
    },
]