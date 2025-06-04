console.log("hello world!");//synchronous

let sayMyName=function(){
    alert("This is alert after 5 seconds");
}

setTimeout(sayMyName,5000); //asynchronous, handled using event loops

for(let i=0;i<8;i++){
console.log("End"+i); //synchronous 
}
