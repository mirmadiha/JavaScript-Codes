//create a new  button element. Give it a text of "Click me!" , background color of "red"
//  and text color of "white" 
//insert the button as the first element in the body tag 

let newButton=document.createElement("button");
newButton.innerText="Click me!";
newButton.style.backgroundColor="red";
newButton.style.color="white";

let body=document.querySelector("body");
body.prepend(newButton);