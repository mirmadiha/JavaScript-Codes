/*for each loop is a method in array which is used to iterate over the array elements,
it takes a callback function as an argument and runs that callback function on each
element of the array. 

The forEach loop does not return anything. It is used to perform some operation on 
each element of the array.   
*/
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val+1);
})

/*The callback function takes three arguments: 
the value of the element, 
the index of the element, 
and the array itself.  */

let cities=["Delhi","Mumbai","Chennai","Kolkata"];
cities.forEach((val,index,cities)=>{
    console.log(`${val} is at index ${index} in the array ${cities}`);
})  