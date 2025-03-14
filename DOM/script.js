let btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
    console.log("Button was clicked - Handler 1");
})

btn.addEventListener("click",function(){
    console.log("Button was clicked - Handler 2");
})

const handler3=()=>{
    console.log("Button was clicked - Handler 3");
}

btn.addEventListener("click",handler3);

btn.addEventListener("click",function(){
    console.log("Button was clicked - Handler 4");
});

btn.removeEventListener("click",handler3);
