const container = document.querySelector(".container");

const card = document.querySelector(".card");

for(let i=0 ; i<100 ; i++){
    const newCards = card.cloneNode(true);
    // newCards.innerText = i 
    container.appendChild(newCards);

}