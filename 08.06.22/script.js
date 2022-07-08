function showNotification(option){
    const notification = document.querySelector('#show_notification');
    const elem = document.createElement('div');
    notification.classList.add('notification');
    elem.className = 'text-notification';
    elem.innerText = option.html;
    notification.prepend(elem);
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