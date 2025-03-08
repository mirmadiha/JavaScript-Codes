let button=document.getElementById("myId");
console.dir(button);
console.log(button);

let headings=document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

let paras=document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);

let element=document.querySelector(".heading-class");
// console.dir(element);
console.log(element.tagName);

let allElements=document.querySelectorAll("h1");
console.dir(allElements);

let div=document.querySelector("div");
console.dir(div);