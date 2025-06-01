//variable hoisting in js is the process when variable declaration (using var) is
//moved to the top of its scope during the compilation phase , but the initialization 
//remains in place. That is why we get undefined as the output 

console.log(age); 

var age=18;

/*at compilation it looks like this:
    var age;
    console,log(age);
    age=18;
*/
//Thats why output is undefined




//let and const declarations are not hoisted in the same way as var.
// They are hoisted, but they are not initialized. 
// Accessing them before their declaration results in a ReferenceError.
console.log(year);
let year=2025;

console.log(name);
const name="John";
