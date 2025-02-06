/*Create a function which takes a string as input and you have to return the 
number of vowels in the string  */

function numberOfVowels(name){
    let count=0;
     for(let val of name){
        if(val=='a' || val=='e' || val=='i' || val=='o' || val=='u'){
            count++;
        }
     }
     return count;
}

let result=numberOfVowels("hello");
console.log(`The number of vowels in hello is ${result} using function`);

//Create an arrow which performs the same task
const countOfVowels=(name)=>{
    let count=0;
     for(let val of name){
        if(val=='a' || val=='e' || val=='i' || val=='o' || val=='u'){
            count++;
        }
     }
     return count;
}
let arrowResult=countOfVowels("education");
console.log(`The number of vowels in education is ${arrowResult} using arrow function`);