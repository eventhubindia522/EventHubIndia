const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let age=document.getElementById("age").value.trim();
let gender=document.getElementById("gender").value;
let city=document.getElementById("city").value.trim();
let state=document.getElementById("state").value.trim();
let event=document.getElementById("event").value;
let participants=document.getElementById("participants").value.trim();
let payment=document.getElementById("payment").value;
let terms=document.getElementById("terms").checked;

if(
name==="" ||
email==="" ||
phone==="" ||
age==="" ||
gender==="" ||
city==="" ||
state==="" ||
event==="" ||
participants==="" ||
payment===""){
alert("Please fill all fields.");
return;
}

if(phone.length!=10){
alert("Enter a valid 10-digit mobile number.");
return;
}

if(!terms){
alert("Please accept the Terms & Conditions.");
return;
}

alert("🎉 Registration Successful!\n\nThank you for registering with EventHub India.");

form.reset();

});