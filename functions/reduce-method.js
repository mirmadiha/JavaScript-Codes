/*
reduce method: it is a method in JavaScript which executes a reducer function
on each element of the array, resulting in a single output value.
*/

let arr=[1,2,3,4,5,6,7,8,9,10];
let sumOfArray=arr.reduce((result,currentValue)=>{
    return result+currentValue;
})

console.log(`The sum of the elements of the array is ${sumOfArray}`);