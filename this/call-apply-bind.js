//object 1
const name={
    firstName:"Madiha",
    lastName:"Aijaz",
    printName:function(city,state){
        console.log(this.firstName+" "+this.lastName+" from "+city+", "+state );
    }
}

//object 2
const name2={
    firstName:"Franz",
    lastName:"Kafka",
}
//normal way of calling function inside object having this
name.printName("Mumbai","Maharashtra");

//function borrowing using call()
name.printName.call(name2,"Goa","Panaji");

//function borrowing using apply()
name.printName.apply(name2,["Ahmadabad","Gujurat"]);

//binding method(bind())
// bind() does NOT call the function immediately.
// It returns a new function with `this` fixed to name2.

// ❗ IMPORTANT: Arguments to bind() should NOT be inside an array.
// They should be passed individually like: bind(name2, "Chennai", "Tamil Nadu")
const fullDetail=name.printName.bind(name2,"Chennai","Tamil Nadu");
fullDetail();
