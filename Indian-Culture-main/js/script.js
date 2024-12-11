let bg=document.getElementById("bg");
let mid=document.getElementById("mid");
let front=document.getElementById("front");
let riksha=document.getElementById("riksha");
window.addEventListener("scroll",function(){
    let value=window.scrollY;
    bg.style.top=value*0.7+"px";
    mid.style.top=value*0.5+"px";
    front.style.top=value*0+"px";
    riksha.style.right=value*0.15+"%";
});

