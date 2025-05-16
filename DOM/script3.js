// first.className="yellow text";
// first.classList.remove("yellow");
// first.classList.add("red");

// document.write("hello world!");

// let a=setTimeout(function(){
//     alert("Hey this is an alert!");
// },2000);

// const answer=prompt("Do you want to run set timeout? Yes or No?");

// if("No"==answer || "NO"==answer || "no"==answer ){
// clearTimeout(a); // This will cancel the timeout set above
// }
// console.log(a);

const sum=(a,b)=>{
    console.log("The sum function is running!"+(a+b));
    a+b;
}

setTimeout(sum,2000,6,4);
// The above line will run the sum function after 2 seconds with 6 and 4 as arguments

const Greeting=()=>{
    alert("Hello, this is a greeting function!");
}
setInterval(Greeting,2000);
// The above line will run the Greeting function every 2 seconds

