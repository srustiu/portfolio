// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.onclick=function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

}

});

// Navbar shadow

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>20){

nav.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

}else{

nav.style.boxShadow="none";

}

});