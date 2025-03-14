/*
crate  a toggle button that changes the screen to dark mode when clicked 
and light mode when clicked again.
*/

let btn = document.querySelector("#btn");
let body= document.querySelector("body");
let currentMode="light";


btn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
});
