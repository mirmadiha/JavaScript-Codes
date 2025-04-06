let marvelHeroes=["Thor","Spiderman","Ironman","Hulk","Black Widow","Hawkeye"];
marvelHeroes.unshift("Captain America");//unshift() adds elements to the beginning of the array
console.log(marvelHeroes);


//shift() removes the first element of the array
marvelHeroes.shift();
console.log(marvelHeroes);


//slice() returns a shallow copy of a portion of an array into a new array 
// object selected from start to end (end not included) where start 
// and end represent the index of items in that array. 
// The original array will not be modified.Ending index is non inclusive.
// Syntax: array.slice(startIndex, endIndex)
let newMarvelHeroes=marvelHeroes.slice(1,3);       
console.log(newMarvelHeroes);// ["Spiderman", "Ironman"] 


//splice() changes the contents of an array by removing 
// or replacing existing elements and/or adding new elements in place.
// Syntax: array.splice(startIndex, deleteCount, item1, item2, item3)
marvelHeroes.splice(2,3,"Captain Marvel","Black Panther","Doctor Strange");
console.log(marvelHeroes);// ["Thor", "Spiderman", "Captain Marvel", "Black Panther", "Doctor Strange"]

//toString() method returns a string representing the specified array and its elements.
const a=[1,2,3,4,5];
const s=a.toString();
console.log(s); // 1,2,3,4,5

//join() method joins all elements of an array into a string.
// The elements will be separated by a specified separator.
const b=["hello","world","this","is","a","test"];
const j=b.join("|");
console.log(j); // hello|world|this|is|a|test
// The default separator is comma.

//delete() method removes an element from an array by its index.
// It does not change the length of the array.
// It is not recommended to use delete() method to remove elements from an array.
// It is better to use splice() method instead.
const c=[1,2,3,4,5];
delete c[2]; // removes the element at index 2
console.log(c.length); // 5
console.log(c); // [1, 2, <1 empty item>, 4, 5]

//concat() method is used to merge two or more arrays.
// It does not change the existing arrays, but instead returns a new array.
const a1=[1,2,3];
const a2=[4,5,6];
const a3=a1.concat(a2); // [1, 2, 3, 4, 5, 6]
console.log(a3); // [1, 2, 3, 4, 5, 6]

// flat() method is used to flatten the array i.e. it merges all the given array 
// and reduces all the nesting present in it.
// It does not change the existing arrays, but instead returns a new array.
const a4=[1,2,[3,4,5],[6,7,8]];
const a5=a4.flat();
console.log(a5); // [1, 2, 3, 4, 5, 6, 7, 8]

//some() method checks whether at least one of the elements of the array satisfies 
// the condition checked by the argument function.

const a6=[22,15,30,24,18,20,101,50];
const isGreater=a6.some((val)=>{
    return val%5==0;
});
console.log(isGreater); // true
