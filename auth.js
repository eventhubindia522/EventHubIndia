// Show / Hide Password

document.querySelectorAll(".toggle-password").forEach(icon=>{

icon.addEventListener("click",()=>{

let input=icon.previousElementSibling;

if(input.type==="password"){

input.type="text";

icon.classList.replace("fa-eye","fa-eye-slash");

}else{

input.type="password";

icon.classList.replace("fa-eye-slash","fa-eye");

}

});

});

// Login

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Login Successful!");

window.location="index.html";

});

}

// Signup

const signupForm=document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Account Created Successfully!");

window.location="login.html";

});

}