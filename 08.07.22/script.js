function showNotification(option) {
    const notification = document.querySelector('#show_notification');
    const wrapper = document.createElement('div');
    wrapper.innerText = option.html;
    wrapper.className = `notification ${option.className}`;
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
        className: 'alert-success'
    })
});

buttonWarning.addEventListener('click', () => {
    showNotification({
        html: 'Warning!',
        className: 'alert-warning'
    })
});

buttonDanger.addEventListener('click', () => {
    showNotification({
        html: 'Danger!',
        className: 'alert-danger'
    })
});