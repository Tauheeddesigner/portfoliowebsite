let b=document.querySelector("body");
let h=document.querySelector("h1");
console.log(h);
let para=document.querySelectorAll("p");
b.addEventListener("click",()=>{
    b.style.backgroundColor="green";
    para[0].style.color="white";
    para[1].style.color="white";
    para[2].style.color="white";
    h.style.color="white";
})