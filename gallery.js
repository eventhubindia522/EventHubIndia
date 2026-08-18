// Filter Images

const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelector(".active").classList.remove("active");

btn.classList.add("active");

let filter = btn.dataset.filter;

items.forEach(item=>{

if(filter==="all" || item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});

// Lightbox

const images=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.getElementById("close");

images.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

});

close.onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=()=>{

lightbox.style.display="none";

}