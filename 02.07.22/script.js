const clickImage1 = document.querySelector('#click_image1');
const clickImage2 = document.querySelector('#click_image2');
const clickImage3 = document.querySelector('#click_image3');

function getInfo() {
    console.log(event.currentTarget)
}

clickImage1.addEventListener('click', getInfo);
clickImage2.addEventListener('click', getInfo);
clickImage3.addEventListener('click', getInfo);