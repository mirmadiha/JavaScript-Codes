let arr=[3,100,9,34,1,0,101,60,22];

let largetsNumber=arr.reduce((previous,current)=>{
    if(previous>current){
        return previous;
    }
    else{
        return current;
    }
}
)

console.log(`The largest number in the array is ${largetsNumber}`);