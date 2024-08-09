let he=document.querySelector("h1");
he.addEventListener("click",()=>{
    alert("now you see the home page");
    he.style.color="white";
})
let a=document.querySelectorAll("a");
console.log(a);
a[0].addEventListener("click",()=>{
    alert("Now You See the Home Page");
    a[0].style.color="red";

})
a.addEventListener("click",()=>{
    a.style.color="red";
})
let btnc=document.querySelector(".cn");
let file=document.querySelector("contact.html");
console.log(file);
let check=1;
console.log(btnc);
btnc.addEventListener("click",()=>{
    var name=prompt("enter the name");
    var id=prompt("enter your valid email address");
    var pass=prompt("set any password");

})