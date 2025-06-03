let button=document.createElement("button");
button.innerText="Click Me!";
button.style.backgroundColor="blue";
let body=document.querySelector("body");
body.insertAdjacentElement("afterbegin",button);

const changes=function(event){
    console.log(event);
    console.log("Button hovered!");
}

button.addEventListener("click",changes);
// button.removeEventListener("click",changes);
let anchorLink=document.querySelector("a");
let noDefault=function(event){
    event.preventDefault();
    anchorLink.innerText="You clicked the link!";
}

anchorLink.addEventListener("click",noDefault);