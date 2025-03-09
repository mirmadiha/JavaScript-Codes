//insert new element is a two step pocess in which 
//1. create a new element
//2. insert the element in the DOM


//lets first create a Button
let newButton=document.createElement("button");
console.dir(newButton); //this will show the properties of the button

//lets add some text to the button
newButton.innerText="Click Me 1!"; //this will add text to the button


//now its time to insert the button in the DOM
//there are majorly four ways to insert an element in the DOM


// 1 node.append(element) - this will add the element at the end of the node(inside the node)
let div1=document.querySelector("div");
div1.append(newButton);


// 2 node.prepend(element) - this will add the element at the start of the node(inside the node)
let newButton2=document.createElement("button");
newButton2.innerText="Click Me 2!";
let div2=document.querySelector("div");
div2.prepend(newButton2);


// 3 node.after(element) - this will add the element after the node(outside the node)
let newButton3=document.createElement("button");
newButton3.innerText="Click Me 3!";
let div3=document.querySelector("div");
div3.after(newButton3);


// 4 node.before(element) - this will add the element before the node(outside the node)
let newButton4=document.createElement("button");
newButton4.innerText="Click Me 4!";
let div4=document.querySelector("div");
div4.before(newButton4);


//one  ore example of adding a heading to the list using prepend
let heading=document.createElement("h1");
heading.innerHTML="<i>This is  a list</i>";

let list=document.querySelector("ul");
list.prepend(heading);

