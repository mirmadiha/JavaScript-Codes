//create an array to store companies -> "Bloomberg","Google","Amazon","IBM","Microsoft"
//a) remove the first company from the array
//b) remove IBM and add Uber in its place
//c) add Netflix at the end

let companies=["Bloomberg","Google","Amazon","IBM","Microsoft"];
console.log(`original array of comapnies: ${companies}`);
companies.shift();
console.log(`array after removing the first company: ${companies}`);
companies.splice(2,1,"Uber");
console.log(`array after removing IBM and adding Uber: ${companies}`);
companies.push("Netflix");
console.log(`array after adding Netflix at the end: ${companies}`);