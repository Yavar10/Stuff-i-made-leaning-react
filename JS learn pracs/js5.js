document.querySelector("#Nothing").addEventListener('click',function(e){
const x=e.target.getAttribute('id');
console.log(x+" is clicked");
if(e.target.matches('li'))
e.target.style.backgroundColor="grey";
})