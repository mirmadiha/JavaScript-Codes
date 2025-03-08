/*
Create 3 div with common class name - "box". 
Access them and add some unique text to each of them
*/

let boxes=document.querySelectorAll(".box");
console.log(boxes);
let i =0;
for(div of boxes){
    boxes[i].innerHTML="I am box "+ i;
    i++;
}


