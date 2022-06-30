/******** Поиск элементов **********/

const product_card = document.getElementById('product-card');
const product_photo = document.getElementsByClassName('photo1');
const product_description = document.getElementsByTagName('span');
const product_price = document.querySelector('.price');
const elements = document.querySelectorAll('#product-card .photo');
const showModal = () => {
    alert(new Date().toDateString());
    return false;
}

const test = () => {
    console.log('work');
}

/******** Событии и обработчик **********/

const info_btn = document.querySelector('#get-info-btn');
const info_btn2 = document.querySelector('#get-info-btn2');
const info_btn3 = document.querySelector('#get-info-btn3');
const info_btn4 = document.querySelector('#get-info-btn4');
const info_btn5 = document.querySelector('#get-info-btn5');
const info_btn6 = document.querySelector('#get-info-btn6')
info_btn.onclick = showModal;
info_btn2.ondblclick = showModal;
info_btn3.oncontextmenu = showModal;
info_btn4.onmouseenter = showModal;
info_btn5.onmouseleave = test;
info_btn6.onmousemove = test;