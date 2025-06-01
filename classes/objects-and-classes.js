//classes are blueprints for creating objects
// they encapsulate data and behavior related to that data

class person{
    //properties and behaviours are by default public use a # to make them private
    #name;
    #age;
    #birthYear;

    constructor(name,age,birthYear){
        this.#name=name;
        this.#age=age;
        this.#birthYear=birthYear;
    }

    get name(){
        return this.#name;
    }
    get age(){
        return this.#age;
    }
    get birthYear(){
        return this.#birthYear;
    }

    set name(name){
        this.#name=name;
    }

};

const john=new person("John",28,1995);
console.log(john.name);
console.log(john.age);
console.log(john.birthYear);

john.name="Steve"; // Using setter to change the name
console.log(john.name); // Output: Steve