let boxes=document.querySelectorAll(".box");
let nbtn=document.querySelector(".new");
let rbtn=document.querySelector(".reset");

let para=document.querySelector("p");
let msg=document.querySelectorAll(".msg");
let a=1;
console.log(boxes);
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const showwinner=(pos1)=>{
    para.innerText=`Congratulation,Winner is ${pos1}`;
    
    

}
const newgame=(develop)=>{
    for(let box of boxes){
        box.disabled=true;
    
    }
}

const start=()=>{
    for(let b of boxes){
        b.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(a==1){
            box.innerText="O";
            a=0;
        }
        else{
            box.innerText="X";
           
            a=1;
        }
        box.disabled=true;
        checkwinner();
    })
});
function checkwinner(){
    for(win of winpattern){
        console.log(win[0],win[1],win[2]);
        console.log(boxes[win[0]].innerText,boxes[win[1]].innerText,boxes[win[2]].innerText);
        var pos1=boxes[win[0]].innerText;
        var pos2=boxes[win[1]].innerText;
        var pos3=boxes[win[2]].innerText;
        if(pos1 !=" " && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showwinner(pos1);
                newgame();
                
            }
        }
    }
}
nbtn.addEventListener("click",()=>{
    enable();
    para.innerText="";
})
const enable=()=>{
    for(let g of boxes){
        g.disabled=false;
        g.innerText="";
    }
}
rbtn.addEventListener("click",()=>{
    enable();
    para.innerText="";
})





