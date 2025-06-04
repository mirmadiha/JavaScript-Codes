// let button=document.createElement("button");
// button.innerText="Click Me!";
// button.style.backgroundColor="blue";
// let body=document.querySelector("body");
// body.insertAdjacentElement("afterbegin",button);

// const changes=function(event){
//     console.log(event);
//     console.log("Button hovered!");
// }

// button.addEventListener("click",changes);
// // button.removeEventListener("click",changes);

// // Adding a link and preventing default behavior
// let anchorLink=document.querySelector("a");
// let noDefault=function(event){
//     event.preventDefault();
//     anchorLink.innerText="You clicked the link!";
// }

// anchorLink.addEventListener("click",noDefault);



let button=document.createElement("button");
button.innerHTML="Click Me!";
button.setAttribute("style","background-color:orange");
button.style.cssText="color:red";

let para1=document.querySelector("#para1");
para1.insertAdjacentElement("beforebegin",button);

let click=false;

let clickEvent1=function(event){
    console.log(event.eventPhase);
    if(!click){
    button.innerText="You clicked";
    button.style.backgroundColor="orange";
    click=true;
    }
    else{
        button.style.backgroundColor="";
        button.innerHTML="Click Me!";
        click=false;
    }
}
let anchorEvent=function(event){
    event.preventDefault();
    anchortag.innerText="you clicked!";
}

let anchortag=document.createElement("a");
anchortag.innerText="This is a link";
anchortag.setAttribute("href","https:www.google.com");
para1.insertAdjacentElement("afterbegin",anchortag);
anchortag.addEventListener("click",anchorEvent);

button.addEventListener("click",clickEvent1,true);

button.className="class1";
console.log(button.className);
button.classList.add("class2", "class3");
console.log(button.classList);
console.log(button.classList.contains("class3"));

console.log(button.className);
button.setAttribute("style","background-color:yellow");
