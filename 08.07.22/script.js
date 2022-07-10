function showNotification(option) {
    const notification = document.querySelector('#show_notification');
    const wrapper = document.createElement('div');
    const image = document.createElement('img');
    image.src = option.image;

    wrapper.innerText = option.html;
    wrapper.className = `notification ${option.className}`;
    wrapper.append(image);
    notification.append(wrapper);
    setTimeout(() => {
        wrapper.remove();
    }, 1500);
}

const buttonSuccess = document.querySelector('#button_success');
const buttonWarning = document.querySelector('#button_warning');
const buttonDanger = document.querySelector('#button_danger');

buttonSuccess.addEventListener('click', () => {
    showNotification({
        html: 'Success!',
        className: 'alert-success',
        image: 'img/success.png'
    })
});

buttonWarning.addEventListener('click', () => {
    showNotification({
        html: 'Warning!',
        className: 'alert-warning',
        image: 'img/warning.png'
    })
});

buttonDanger.addEventListener('click', () => {
    showNotification({
        html: 'Danger!',
        className: 'alert-danger',
        image: 'img/danger.png'
    })
});