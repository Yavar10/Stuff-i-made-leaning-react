const tp=document.querySelector(".top");
const btm=document.querySelector(".btm");
function rev()
{
    btm.classList.remove('top');
    console.log("hell yeah");
}
tp.addEventListener("click",rev);