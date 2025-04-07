//objects in javascript are used to store data in key-value pairs.
//objects are mutable and can be changed.
//objects are also reference types.

const person={name:"Harry",age:23, isStudent:true};
console.log(person); // { name: 'Harry', age: 23, isStudent: true }
console.log(typeof person); // object
console.log(person.name); //Harry


//to display only the keys of the object
console.log(Object.keys(person)); // [ 'name', 'age', 'isStudent' ]
console.log(Object.values(person)); // [ 'Harry', 23, true ]

//modifying object properties
person.name="Hermione";
console.log(person);// { name: 'Hermione', age: 23, isStudent: true }

//Adding new properties to an object
person.city="London";
console.log(person); // { name: 'Hermione', age: 23, isStudent: true, city: 'London' }

//Deleting properties from an object
delete person.age;
console.log(person); // { name: 'Hermione', isStudent: true, city: 'London' }

//hasOwnProperty() method checks if the object has the specified property or not.
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false

//for in loop is used to iterate over the properties of an object.

for(let key in person){
    console.log(key); // name isStudent city
    console.log(person[key]); // Hermione true London
}

//Object.assign() method is used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the target object.
const original={name:"SpiderMan",age:23};
const newObject=Object.assign({},,original);
console.log(newObject); // { name: 'SpiderMan', age: 23 }
console.log(original); // { name: 'SpiderMan', age: 23 }
newObject.name="Alice";
console.log(newObject); // { name: 'Alice', age: 23 }
console.log(original); // { name: 'SpiderMan', age: 23 }

//Merging two objects using Object.assign() method or spread operator (...)
// const person1={name:"Harry",age:23, meth:()=>{console.log("hello")}};

// const person2=Object.assign(person1);
// const person2 = JSON.parse(JSON.stringify(person1));
// console.log(person2); // { name: 'Hermione', age: 23, isStudent: true, city: 'London' }