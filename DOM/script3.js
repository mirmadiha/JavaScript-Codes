// first.className="yellow text";
// first.classList.remove("yellow");
// first.classList.add("red");

document.write("hello world!");

let a=setTimeout(function(){
    alert("Hey this is an alert!");
},2000);

const answer=prompt("Do you want to run set timeout? Yes or No?");

if("No"==answer || "NO"==answer || "no"==answer ){
clearTimeout(a); // This will cancel the timeout set above
}
console.log(a);