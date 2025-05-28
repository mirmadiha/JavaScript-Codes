/*Write a JavaScript function to get the first element of an array. 
Passing the parameter 'n' will return the first 'n' elements of the array.

Test Data :

console.log(first([7, 9, 0, -2]));

console.log(first([],3));

console.log(first([7, 9, 0, -2],3));

console.log(first([7, 9, 0, -2],6));

console.log(first([7, 9, 0, -2],-3));

Expected Output :

7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] */

const first=function(num,n){

    if(n<0){
        return [];
    }

    if(n==null){
        return num[0];
    }
    
    if(n>num.length){
        return num;
    }

    return num.slice(0,n);
}


console.log(first([7, 9, 0, -2]));

console.log(first([],3));

console.log(first([7, 9, 0, -2],3));

console.log(first([7, 9, 0, -2],6));

console.log(first([7, 9, 0, -2],-3)); 