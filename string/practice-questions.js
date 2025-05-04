//PROBLEM 1
//what will be the output
let name="Har\"";
console.log(name.length); //output: 4 because the string 
                        // contains 4 characters: H, a, r, and "
//the backslash is used to escape the double quote character, allowing it to be included in the string without terminating it.

//PROBLEM 2
const sentence='quick brown fox jumps over the lazy dog';
const word='fox';
console.log(sentence.includes(word)); //output: true
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence.`);

//PROBLEM 3
console.log(word.toUpperCase()); //output: FOX
console.log(word.toLowerCase()); //output: fox

//PROBLEM 4: Extract the amount of money from the string
const str="Please give Rs. 1000";
const amount=Number.parseInt(str.slice("Please give Rs. ".length));
console.log(amount); //output: 1000

console.log(typeof amount); //output: string

//PROBLEM 5:
//STRINGS ARE IMMUTABLE

const str2="France";
str2[2]='b';
console.log(str2);//it wont work as strings are immutable