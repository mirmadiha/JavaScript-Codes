/* 
In javascript object cloning is of two type:
1. By reference 
2. By value
*/

// by reference: aliasing the object to another variable

const jack={fullName:"Jack Smith",age:30,city:"New York"};
const will=jack;
console.log(will);
console.log(jack);
jack.age=50;
console.log(will);

//by value: creating a new object with the same properties
//this has broadly two methods : deep copy and shallow copy
//shallow copy: using Object.assign() method or spread operator
//deep copy: using JSON.parse(JSON.stringify()) method

// shallow copy using spread operator
const person={name:"harry",birthYear:1991,address:{street:23,city:"Srinagar"},calcAge:function(){
    this.age=2025-this.birthYear;
    return this.age;    
}};

const Sam={...person};
console.log(Sam);
Sam.name="Freddy";
console.log(Sam);
console.log(person);

console.log("-------------------------------");
//lets make a change in the address property of the person object
person.name="Hermoinee";
console.log(Sam);
console.log(person);
person.address.city="Jammu";

console.log(Sam.address);
console.log(person.address);
//the address property is changed in both the objects because it is a reference type


const Jade= Object.assign({},person);
console.log(Jade);


console.log("-------------------------------");
console.log("DEEP COPY");
//deep copy using JSON.parse(JSON.stringify()): it creates a new object with the same properties and values
const deepCopyPerson=JSON.parse(JSON.stringify(person));
console.log(deepCopyPerson);
console.log("----made changes in the address nested object----");
deepCopyPerson.address.city="Delhi";
console.log(deepCopyPerson.address);
console.log(person.address);