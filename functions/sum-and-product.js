/*Take a input number n from user and print the sum and product of all numbers from 1 to n.
and also print their product.*/

let n = prompt(`Enter a number`);

let arr =[];

for(let i=1;i<=n;i++){
    arr.push(i);
}

let sumOfElements=arr.reduce((sum,current)=>{
    return sum+current;
}
)

console.log(`The sum of the elements of the array is ${sumOfElements}`);

let productOfArray=arr.reduce((product,current)=>{
    return product*current;
}
)

console.log(`The product of the elements of the array is ${productOfArray}`);