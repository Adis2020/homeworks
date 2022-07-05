const clickImage1 = document.querySelector('#headphones_click_img1');
const clickImage2 = document.querySelector('#baloon_click_img2');
const clickImage3 = document.querySelector('#backpack_click_img3');

function getInfo(event) {
    let id = event.target.id;
    if (id === 'headphones_click_img1') alert('Это наушники. Красно-серые');
    if (id === 'baloon_click_img2') alert('Это воздушный шар. Красный');
    if (id === 'backpack_click_img3') alert('Это рюкзак. Красный');
}

clickImage1.addEventListener('click', getInfo);
clickImage2.addEventListener('click', getInfo);
clickImage3.addEventListener('click', getInfo);