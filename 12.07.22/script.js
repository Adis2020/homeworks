const cards = document.querySelector('#cards');

function setCard(option){
    let card = document.createElement('div');
    let image = document.createElement('img');
    let name = document.createElement('div');
    let price = document.createElement('div');
    let links = document.createElement("a");
    card.id = option.id;
    card.className = 'card';
    image.src = option.imageURL;
    image.className = 'cards-images';
    name.innerText = option.name;
    name.className = 'cards-names';
    price.innerText = `От ${option.price} сом`;
    price.className = 'cards-prices';
    links.innerText = 'Купить';
    links.href = '#';
    links.className = 'cards-links';
    card.append(image, name, price, links);
    cards.append(card);
}

setCard({
    id: 1,
    name: "Iphone 13 Pro Max",
    imageURL: "https://istore.kg/media/products/iphone-13-pro-max-green-select.webp",
    price: 100250
})

setCard({
    id: 2,
    name: "Iphone 13 pro",
    imageURL: "https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
    price: 97000
})