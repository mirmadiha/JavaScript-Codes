/*for the given array print the square of each element using for each loop */

let arr=[2,3,6,4,5];
arr.forEach((val,index)=>{
    console.log(`The square of ${val} at index ${index} is ${val*val}`);
})