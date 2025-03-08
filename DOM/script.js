/*
Create 3 div with common class name - "box". 
Access them and add some unique text to each of them
*/

let boxes=document.querySelectorAll(".box");
console.log(boxes);
boxes[0].innerText="I am box 1";
boxes[1].innerText="I am box 2";
boxes[2].innerText="I am box 3";


