const h1 = document.querySelector("h1");
let container = document.querySelector(".container");

const images = document.querySelector("img");

for (let i = 1; i < 100; i++) {
    const newCards = images.cloneNode()
    // putting source to newly created variable
    newCards.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    // appending newCards into container
    container.append(newCards);
}

// the below code is used, when we dont have that elemnt in our html like,
//  we create img element by createElement method...
for (let i = 0; i < 10; i++) {
    const imgdon = document.createElement('img');

    imgdon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.append(imgdon);
    imgdon.classList.add("AllImages")
    imgdon.innerText = "vbuehweknjf";
}


//  from this we are doing how remove elements by JS...

const remove = document.querySelector("body > div > img:nth-child(200)")

