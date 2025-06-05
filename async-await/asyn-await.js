async function getData(){
let response=await fetch("https://jsonplaceholder.typicode.com/todos/1"); //asyn
let data=await response.json();
console.log(data); //sync
}                  //async returns a PROMISE
   
getData();