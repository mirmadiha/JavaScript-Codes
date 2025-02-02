/*For a given array with prices of 5 items->[250,645,300,900,50].
All items have an offer of 10% OFF  on them. Change the array to store
final price after applying offer on each item
*/

let items=[250,645,300,900,50];
let length=items.length;

// let index=0;
// for(let val of items){
//     let offer=val/10;
//     items[index]=val-offer;
//     console.log(`The price of item at $[index] = ${val}`);
//     console.log(`The final price of item at $[index] = ${items[index]}`);
//     index++;
// }
for(let i=0;i<length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
}
console.log(items);
