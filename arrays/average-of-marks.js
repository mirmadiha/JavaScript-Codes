//For a given array with marks of students. Find the average marks of the class
let marks=[34,44,49,37,20,50];
let sum=0;
let length=marks.length;
for (let val of marks){
    sum+=val;
}
let average=sum /length;
console.log(`The average marks of students are ${average}`);