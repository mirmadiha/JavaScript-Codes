//Object.assign() method is used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the target object.
const original={name:"SpiderMan",age:23};
const newObject=Object.assign({},original);
console.log(newObject); // { name: 'SpiderMan', age: 23 }
console.log(original); // { name: 'SpiderMan', age: 23 }
newObject.name="Alice";
console.log(newObject); // { name: 'Alice', age: 23 }
console.log(original); // { name: 'SpiderMan', age: 23 }

//spread operator is used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the target object.
const copyObject={...original};
console.log(copyObject); // { name: 'SpiderMan', age: 23 }

//However, the spread operator does not create a deep copy of the object. 
// It creates a shallow copy of the object. This means that if the object has 
// nested objects, the nested objects will still be referenced to the original object.

//shallow copy means that the object is copied but the nested objects are 
// not copied. The nested objects are still referenced to the original object. 
// This means that if the original object is changed, the copied object will also be 
// changed.

//Deep copy means that the object is copied and the nested objects are also copied.
// This means that if the original object is changed, the copied object will not be 
// changed.


const object={
    name:"chef",
    age:3,
    address:{city:"Delhi"},//nested object
    greet(){console.log("Hello")}
}

const shallowCopy={...object};//shallow copy
shallowCopy.address.city="Mumbai"; //changing the city of the nested object
console.log(object); // { name: 'chef', age: 3, address: { city: 'Mumbai' } }
console.log(shallowCopy); // { name: 'chef', age: 3, address: { city: 'Mumbai' } }

//deep copy using JSON.parse() and JSON.stringify()
const deepCopy=JSON.parse(JSON.stringify(object)); //deep copy
deepCopy.address.city="Heyderabad"; //changing the city of the nested object
console.log(object);   // { name: 'chef', age: 3, address: { city: 'Mumbai' } }
console.log(deepCopy); // { name: 'chef', age: 3, address: { city: 'Heyderabad' } }

