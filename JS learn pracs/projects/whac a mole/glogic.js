const sq=document.querySelectorAll('.sq');
const mole=document.querySelector('.mole'); 
const score=document.querySelector('#score')
const tL=document.querySelector('#tleft');

let result =0;
let hpos;
let ctime=10;
function randomsq()
{
    sq.forEach(sq=>{
        sq.classList.remove('mole');
    })
    let rpos=sq[Math.floor(Math.random()*9)];
    rpos.classList.add('mole');
    hpos=rpos.id
}
function interval()
{
    let timer=null;
    timer=setInterval(randomsq,650);

}
sq.forEach(sq=>{
    sq.addEventListener('mousedown' ,() => {
        if(sq.id==hpos){
            result++;
            score.textContent=result;
            hpos=null;
        }
    })
})

interval();


function cdown()
{
    ctime--;
    tLeft.textContent=ctime;
if(ctime==0)
{clearInterval(cdownid)
alert('GAME OVER! final score is '+ result);
}
}
let cdownid=setInterval(cdown,1000)