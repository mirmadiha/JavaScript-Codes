//definition of a promise: it is an object that represents 
// the eventual completion (or failure) of an asynchronous 
// operation and its resulting value.

//CALLBACKS->CALLBACK HELL

// let myPromise=new Promise((resolve,reject)=>{
//   let a=Math.random();

//   if(a<0.5){
//     resolve("The number is < 0.5");
//   }
//   else{
//     reject("The number > 0.5");
//   }
// });
// myPromise.then(
//   function(message){
//     console.log( message); 
//     return "forward message";
//   }
// ).then(
//   function(message){
//     console.log( message); 
//   }
//   ).catch((message)=>console.error(message));


// let myPromise=new Promise((resolve,reject)=>{
//   setTimeout(()=>console.log("hey"),0);
//   resolve("The timer is of 5 seconds");
// });
// myPromise
// .then((message)=>console.log(message))
// .catch((err)=>console.log(err));

//promise.All()
let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>console.log("promise1"),3000);
    resolve("Promise1 fulfilled");
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>console.log("promise2"),5000);
    reject("Promise2 rejected");
})

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>console.log("promise3"),3000);
    resolve("Promise3 fulfilled");
})
Promise.all([promise1,promise2,promise3])
.then((values)=>console.log(values))
.catch((error)=>console.error(error));

Promise.allSettled([promise1,promise2,promise3])
.then((values)=>console.log(values))
.catch((error)=>console.error(error));

Promise.race([promise1,promise2,promise3])
.then((values)=>console.log(values))
.catch((error)=>console.error(error));





