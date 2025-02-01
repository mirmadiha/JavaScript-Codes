/*prompt the user to enter their full name . Generate a username for them based 
on the input. Start username with '@' followed by the name and the length of the name.
 */
let name=prompt("Enter you name");
let username="@"+name+name.length;
console.log(username);