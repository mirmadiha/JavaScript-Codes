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
console.log(newMarvelHeroes); 


//splice() changes the contents of an array by removing 
// or replacing existing elements and/or adding new elements in place.
// Syntax: array.splice(startIndex, deleteCount, item1, item2, item3)
marvelHeroes.splice(2,3,"Captain Marvel","Black Panther","Doctor Strange");
console.log(marvelHeroes);  