/* Filter method in JavaScript: it is a method in JavaScript which 
creates a new array with all elements that pass the test implemented by
the provided function.

How is it different from map?
-> Use filter() when you need to remove elements based on a condition.
-> Use map() when you need to modify each element in an array.

*/

let arr=[1,2,3,4,5,6,7,8,9,10];

let evenNumbers=arr.filter((val)=>{
    return val%2==0;
})
console.log(evenNumbers);

