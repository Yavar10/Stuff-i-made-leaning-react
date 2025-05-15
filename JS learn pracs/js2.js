const bx=document.querySelector('#container');
function b()
{
    alert('Hell yeah');
}
function cc()
{
    bx.style.backgroundColor="red";
}
bx.addEventListener("click",b);
bx.addEventListener("mouseover",cc);
console.log(bx.innerText);