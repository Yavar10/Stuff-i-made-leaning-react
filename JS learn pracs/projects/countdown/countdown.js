//code for snowflake animation and normal countdown

let targetdate=new Date('Jan 1,2026 00:00:00').getTime();
//console.log(tdate);
let day=document.getElementById("days");
let min=document.getElementById("mins");
let hour=document.getElementById("hours");
let sec=document.getElementById("secs");
let das;
//console.log(days.innerHTML);
let ctd=setInterval(() => {
let now= new Date().getTime();
let das=targetdate-now;
let day=Math.floor(das/(1000*60*60*24));
let hour=Math.floor(((das-1000*60*60)%(1000*60*60*24))/(1000*60*60));
let min=Math.floor((das%(1000*60*60))/(1000*60));
let sec=Math.floor((das%(1000*60))/1000);
secs.innerText=sec;
hours.innerText=hour;
mins.innerText=min;
days.innerText=day;
/*let hours=Math.floor(tdate-3600000);
let mins=Math.floor(tdate/60000);
let secs=Math.floor(tdate/1000)*/
//console.log(ds);

}, 1000);
const sC=document.querySelector('.sCon');
function csF(num)
{
for(i=0;i<num;i++ )
    {
        const sc=document.createElement('div');
        sc.classList.add('snowflake');
        sC.prepend(sc);
    }
}
csF(5)