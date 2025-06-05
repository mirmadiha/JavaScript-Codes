//definition of a promise: it is an object that represents 
// the eventual completion (or failure) of an asynchronous 
// operation and its resulting value.

//CALLBACKS->CALLBACK HELL

let myPromise=new Promise((resolve,reject)=>{
  let a=Math.random();

  if(a<0.5){
    resolve("The number is < 0.5");
  }
  else{
    reject("The number > 0.5");
  }
});
myPromise.then(
  function(message){
    console.log( message); 
    return "forward message";
  }
).then(
  function(message){
    console.log( message); 
  }
  ).catch((message)=>console.error(message));

