let inputs=document.querySelectorAll("input");
let a=document.querySelector("a");
console.log(a);
let para=document.querySelectorAll("p");
inputs[0].addEventListener("click",()=>{
    setTimeout(()=>{
        alert("Please fill the complete form");
        alert("set any Name,Email and password")
        para[0].classList.remove("h");

    });
    
});
inputs[1].addEventListener("click",()=>{
    setTimeout(()=>{
        para[1].classList.remove("h");
    },4000);
});


inputs[2].addEventListener("click",()=>{
setTimeout(()=>{
    alert("Submitt")
    
    para[2].classList.remove("h");
    a.classList.remove("go");
},4000);
});
a.addEventListener("click",()=>{
    alert("Now you Contact me");
    inputs[0].style.display="none";
    inputs[1].style.display="none";
    inputs[2].style.display="none";
})

