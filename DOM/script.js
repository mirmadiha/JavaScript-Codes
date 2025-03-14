/*
crate  a toggle button that changes the screen to dark mode when clicked 
and light mode when clicked again.
*/

let btn = document.querySelector("#btn");
let currentMode="light";
btn.addEventListener("click",()=>{
    let body= document.querySelector("body");
    if(currentMode=="light"){
        body.style.backgroundColor="black";
        body.style.color="white";
        currentMode="dark";
    }
    else{
        body.style.backgroundColor="white";
        body.style.color="black";
        currentMode="light";
    }
});
