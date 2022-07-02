//1 Задание
const imgColaClick = document.querySelector('#image_cola');
const imgBikeClick = document.querySelector('#image_bike');

imgColaClick.onclick = () => {
    alert('Это Coca-Cola. 1Л');
};
imgBikeClick.onclick = () => {
    alert('Это велосипед. Белого цвета');
}

//2 Задание
const link = document.querySelector('#link_google');
const link2 = document.querySelector('#link_google2');
const link3 = document.querySelector('#link_google3');

function linkGoogle() {
    alert('Это ссылка ведёт в google.com');
}

link.onmouseover = linkGoogle;
link2.onmouseover = linkGoogle;
link3.onmouseover = linkGoogle;

//3 Задание
let arguments = [];

function UniteText(...args) {
    let array = [];
    for (let arg of args) array += arg;
    return array;
}

arguments = UniteText('Привет', ' Coca-Cola', ' напиток');
alert(arguments);