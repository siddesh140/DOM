const username = document.querySelector("#username");
const h1 = document.querySelector("h1");
const paragraph = document.querySelector("p");

// username.addEventListener("input", function (e) {
//     h1.style.color = "blue";
//     // console.log(e.target.value);
//     paragraph.innerText = e.target.value;

//     console.log("input is clicked");

// })

username.addEventListener("keydown", (e) => {
    
    console.log('the value is ',e.key);
    console.log('the button clicked is' ,e.code);
   
    console.log("input is clicked");

})
// username.addEventListener("change", function (e) {
//     h1.style.color = "blue";
//     // console.log(e.type);
//     paragraph.innerText = e;

//     console.log("input is clicked");

// })