let div=document.querySelector("div");
div.addEventListener("click",function(){
    console.log("Hello Handler1");
})

div.addEventListener("click",function(evt){
    console.log(evt);
})

/*
The addEventListener() method allows you to add many events to the same element, 
without overwriting existing events.
*/
