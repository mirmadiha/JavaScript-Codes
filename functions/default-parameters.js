//default parameter:in javascript we sometimes forget to pass an argument to the functions 
//due to which we get undefined but we can also set som default parameters 

const greet=function(name="John"){
    console.log(`Hello , ${name}`);
}

greet("Harry");


// Example of default parameters with multiple parameters
const greetFrnds=function(fName="Harry",lName="Doe"){
    console.log(`Hello ${fName} ${lName}`);
}

greetFrnds();


//example of default parameters where one parameter depends on another
const greetFamily=function(fName="Harry",lName=fName.toUpperCase()){
    console.log(`Hello ${fName} ${lName}`);
}

greetFamily();


// Example of default parameters with an object
const info=function(john={age:18,city:"Srinagar",birthYear:1990}){
    console.log(john);
}

info();


// Example of default parameters with a function that has a default object
const friends=function(name=["Harry","Doe","Smith"]){
    console.log(name);
}

friends();

// Example of default parameters with a function 
// that has a default value for a parameter
// and a null value passed which will be replaced by the default value
const address=function(city="Srinagar"){
    console.log(`You live in ${city}`);
}

address(null);


//undefined value passed to a function with a default parameter
// This will use the default value of "abc" for tehsil
// even if we pass undefined
const location=function(tehsil="abc"){
    console.log(`You live in ${tehsil}`);
}

location(undefined);