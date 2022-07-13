const cards = document.querySelector('#cards');

function setCard(option) {
    let card = document.createElement('div');
    let image = document.createElement('img');
    let name = document.createElement('div');
    let price = document.createElement('div');
    card.id = option.id;
    card.className = 'card';
    image.src = option.imageURL;
    image.className = 'cards-images';
    name.innerHTML = option.name;
    price.innerHTML = `Цена: ${option.price} сом`;
    card.append(image, name, price);
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