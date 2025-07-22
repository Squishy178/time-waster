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
        desc:'Burn 250 calories from clicking (roughly half the amount a big mac has)',
        cond:function(){return clicks*0.00142857142>=500}
    },
    {//12
        name:'Clicking it again?',
        desc:'Click the ? a second time',
        cond:function(){return false}
    },
    {//13
        name:'Minimum Wage',
        desc:'Lose $9.20',
        cond:function(){return Math.floor(100*9.2*time/3600)/100>=9.2}
    },
    {//14
        name:'What is the cause?',
        desc:'Witness 500 deaths. What is even happening?!',
        cond:function(){return Math.floor(1.73611111111*time)>=500}
    },
    {//15
        name:'Feeling old yet?',
        desc:'Play the game for more than one hour',
        cond:function(){return time/3600>=1}
    },
    {//16
        name:'Gotta catch them all',
        desc:'Collect 10 achievements',
        cond:function(){return unlocked.length>=10}
    },
    {//17
        name:'Nice',
        desc:'All but this achievement',
        cond:function(){return unlocked.length-1==achievementData.length}
    },
    {//18
        name:'What have we found...',
        desc:'Uncover dark secrets',
        cond:function(){return false}
    },
    {//19
        name:'Last on earth. Not',
        desc:'Witness 7 billion deaths',
        cond:function(){return Math.floor(1.73611111111*time)>=7000000000}
    },
    {//20
        name:'Milestone Novice',
        desc:'Get 10 milestones',
        cond:function(){return totalMilestones>=10}
    },
    {//21
        name:'Milestone Knight',
        desc:'Get 20 milestones',
        cond:function(){return totalMilestones>=20}
    },
    {//22
        name:'Milestone Master',
        desc:'Get 30 milestones',
        cond:function(){return totalMilestones>=30}
    },
    {//23
        name:'Milestone Grandmaster',
        desc:'Get 50 milestones',
        cond:function(){return totalMilestones>=50}
    },
    {//24
        name:'Barely Lucky',
        desc:'Click and get lucky (0.5%)',
        cond:function(){return false}
    },
    {//25
        name:'Lucky',
        desc:'Click and get lucky (0.1%)',
        cond:function(){return false}
    },
    {//26
        name:'Quite Lucky',
        desc:'Click and get lucky (0.05%)',
        cond:function(){return false}
    },
    {//27
        name:'Very Lucky',
        desc:'Click and get lucky (0.01%)',
        cond:function(){return false}
    },
    {//28
        name:'Luck in its Essence',
        desc:'Click and get lucky (0.005%)',
        cond:function(){return false}
    },
]