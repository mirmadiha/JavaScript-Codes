const name={
    firstName:"Madiha",
    lastName:"Aijaz",
    x:()=>{
        // Arrow functions do NOT have their own `this`.
        // They capture `this` from their surrounding (lexical) scope.

        // Here, x is an arrow function inside an OBJECT.
        // But the surrounding scope of this arrow function is NOT the object.
        // It is the GLOBAL scope (window in browser, global in Node).

        // Therefore, `this` here does NOT refer to the `name` object.
        // It logs the global object instead.

        console.log(this);
    }
}

name.x();
// Even though we called it with name.x(),
// arrow functions ignore how they are called and do NOT bind `this` to 'name'.


const name2={
    firstName:"Albert",
    lastName:"Camus",
    x:function (){
        // This is a NORMAL function, so `this` refers to the calling object → name2.

        const y=()=>{
            // Arrow function inside a normal function:
            // Now the arrow function inherits `this` from the surrounding normal function x().
            // Since x() was called by name2, `this` inside y() also becomes name2.

        console.log(this);

        }
        y();
    }
}

name2.x();
// Here, `this` inside y() correctly refers to the name2 object.
