const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const body = document.querySelector("body");


blue.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("blue is clicked");
    
})
pink.addEventListener("click", (e)=>{
    console.log("pink is clicked");
    
})
green.addEventListener("click", (e)=>{
    console.log("green is clicked");
    
})
body.addEventListener("click", (e)=>{
    console.log("body is clicked");
    
})
