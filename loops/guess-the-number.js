let num=8;
let userNumber=prompt("Guess the number:");
console.log(userNumber);
while(userNumber!=num){
    userNumber=prompt("you entered wrong number");
}
console.log("You guessed it right!");