/*
functions are called first class citizens in javascript because
1. Functions can be assigned to variables
2. Functions can be passed as arguments to other functions
3. Functions can be returned from other functions
4. Functions can be stored in data structures like arrays
5. Functions can be used as properties of objects
*/


//Example 1: Functions as variables

const greet=function(){
    console.log("Hello there!");
}

greet();

//Example 2: Functions as arguments
const greetFamily=()=>console.log("Hello family!");
const greetFriends=()=>console.log("Hello friends!");

const greetName=function(name,greet){
    console.log(name);
    greet();
}

greetName("john", greet);
greetName("Doe", greetFamily);
greetName("Smith", greetFriends);


//Example 3: Functions as return values
const solve=function(number){
    return function(number){
        return number*number;
    }
}

const square=solve(5);
console.log(square(9));

//Example 4: Functions in data structures
const calculate=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];

let firstCalc=calculate[0];
console.log(firstCalc(5,3));

//Example 5: Functions as object properties
const john={
    fullName:"John Doe",
    birthYear:1990,
    calcAge:function(){
        return 2025-this.birthYear;
    }
}

console.log(john.calcAge());