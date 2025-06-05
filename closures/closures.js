function outer(){
    let name="John";

    function inner(){
        console.log(name);
    }
    return inner;
}

let innerFunction=outer();
innerFunction();