let div=document.querySelector("div");
div.onmouseover=function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.ClientY);
}
