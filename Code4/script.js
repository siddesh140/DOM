function hello() {
    console.log("this is cliked");

};
function cardClick() {
    console.log("This is second clicked");

}


// h1.addEventListener("click",cardClick);
// h1.addEventListener("click",function(){
//     console.log("bewhbfw")

// });
//  we have to print box after clicking the existing box
// by using cloneNode function 
// count is used for initializing the num
let count = 1 ;
 const card = document.querySelector(".card");
const container = document.querySelector(".container");
card.addEventListener("click", function () {
        const cardClone = card.cloneNode();
        // adding count value into cardClone
        cardClone.innerText = count++ ;
        container.append(cardClone);
});

//  by creating element

// const card = document.querySelector(".card");
// const container = document.querySelector(".container");
// card.addEventListener("click", function () {
//     const newCard = document.createElement("div");
//     newCard.classList.add('Card')
//     container.append(newCard);
//     console.log(newCard);
    
  
// });

// 