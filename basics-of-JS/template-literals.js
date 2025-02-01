let object={
    item:"pen",
    price:10,
};

console.log("The price of ",object.item," is ",object.price,"rupees");

//template literals
let output=`The price of ${object.item} is ${object.price} rupees`;
console.log(output);