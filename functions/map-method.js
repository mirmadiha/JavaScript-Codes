/*map method: it is a method in JavaScript which creates a new array with 
the results of calling a provided function on every element in the calling array.*/ 

//Syntax: array.map(function(currentValue, index, arr), thisValue)

//how different from filter?
//-> Use filter() when you need to remove elements based on a condition.
//-> Use map() when you need to modify each element in an array.

let arr=[1,2,3,4,5,6];

let squareNumbers=arr.map((val)=>{
    return val*val;
})

console.log(squareNumbers);