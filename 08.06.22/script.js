const notification = document.querySelector('#show_notification');
const button = document.querySelector('#click_button')

function showNotification(option){
    notification.classList.add('notification');
    notification.textContent = option.html;
    setTimeout(() => {
        notification.classList.remove('notification');
        notification.textContent = '';
    }, 1500);
}

button.addEventListener('click', () => {
    showNotification({
        html: 'Hello',
    })
});