const paragraph = document.querySelector("p");
let button = document.querySelector(".btn");
button.addEventListener("click", function () {
    paragraph.innerHTML = "this line is changed";
    let newElement = document.querySelector("img")
    newElement.innerHTML = "img";
    paragraph.appendChild(newElement);
})

// let doct = document.querySelector("p");
// doct.setAttribute("id", "heading");
// console.log(doct.getAttribute(id));

// let allinks = document.querySelectorAll("a");
// for(let i=0 ; i<=allinks.length;i++){
//     allinks[i].style.color = "green"
// }

// for betterement we can use FOR OF LOOP insted of for loop

let allink = document.querySelectorAll("a");
for (const index of allink) {
    index.style.color = " yellow";
}
