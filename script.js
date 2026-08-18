

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});










const menu = document.querySelector(".menu-btn");

menu.addEventListener("click", () => {
    alert("Mobile menu will be added in the next part.");
});

Script .js// Live Search
const searchInput = document.getElementById("searchInput");
const eventItems = document.querySelectorAll(".event-item");

searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    eventItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
    });
});

// Countdown Function
function startCountdown(id, eventDate){
    const timer = document.getElementById(id);

    function update(){
        const now = new Date().getTime();
        const distance = new Date(eventDate).getTime() - now;

        if(distance <= 0){
            timer.innerHTML = "🎉 Event Started!";
            return;
        }

        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

        timer.innerHTML = `⏳ ${days} Days ${hours} Hours Left`;
    }

    update();
    setInterval(update,1000);
}

startCountdown("holiTimer","March 14, 2027 00:00:00");
startCountdown("navratriTimer","October 3, 2027 00:00:00");


 

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}


const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}




const dark=document.getElementById("darkMode");

dark.onclick=function(){

document.body.classList.toggle("dark");

}



 
