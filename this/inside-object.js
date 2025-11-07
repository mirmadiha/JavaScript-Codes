const obj={
    a:10,
    x:function(){

        // Inside an object's method, `this` refers to the object
        // that is calling the method.

        // Here, the method is called as obj.x()
        // So `this` becomes `obj`.

        // Therefore, this will print the entire object { a: 10, x: f }

        console.log(this);
    }
}

obj.x(); // Method call → `this` points to obj
