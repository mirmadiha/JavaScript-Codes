//try-catch:the try block contains code that may throw an 
// error, the catch block handles the error if it occurs, 
// and the finally block executes code that should run 
// regardless of whether an error occurred or not.

//throw: the throw statement allows you to create a custom error
// and throw it when a specific condition is met.
try{
    console.log("This is try block");
    console.log(x);
    console.log("This is after the error");
}
catch(error){
    // console.error("this is catch block");
    throw new Error("This error is customized");
}
finally{
    console.log("this is finally block");
}

// const errorCode=104;
// if(errorCode==104){
//     throw new Error("invalid JSON");
// }