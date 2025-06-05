let id = setInterval(()=>console.log("Hey There"),5000);
console.log(id);

setTimeout(()=>{clearInterval(id);console.log("stopped");process.exit();},10000);