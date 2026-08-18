document.getElementById("eventForm").addEventListener("submit",function(e){

e.preventDefault();

alert("New Event Added Successfully!");

this.reset();

});

document.querySelectorAll(".delete").forEach(button=>{

button.add