//functiojn hoisting means that function declarations are shifted to 
// the top of their scope


greet(); //function can be called before its declaration

function greet(){
    console.log("Hey there!");
}

//but  hoisting does not work with function expressions

// greetMe(); //geetMe is not hoisted, so it will throw an error

// const greetMe=function(){
//     console.log("Hey , how are you !");
// }

console.log(greetAll); //output: undefined because  function is written in a variable which is declared with var 
                       // and we know var is hoisted but not initialized
var greetAll=function(){
    console.log("Hey everyone!");
}
