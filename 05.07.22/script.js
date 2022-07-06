//1 Задание
const clickNewColor = document.querySelector('#newColor');

clickNewColor.addEventListener('click', () => {
    clickNewColor.classList.toggle('background-red');
})

//2 задание
const notification = document.querySelector('#show_notification');

function showNotification() {
    notification.style.width = '120px';
    notification.style.height = '20px';
    notification.style.marginLeft = '91%';
    notification.style.marginTop = '-200px';

    notification.textContent = 'Hello!';
    notification.style.textAlign = 'center';
    notification.style.color = '#dbdbdb';

    notification.style.border = '2px solid black';
    notification.style.borderRadius = '6px';
    notification.style.backgroundColor = '#292929';
}
showNotification();
setTimeout(() => notification.remove(), 1500);

