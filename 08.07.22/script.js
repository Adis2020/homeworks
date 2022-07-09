function showNotification(option) {
    const notification = document.querySelector('#show_notification');
    const wrapper = document.createElement('div');
    if (option.className === 'alert-primary'){
        wrapper.className = option.className;
        wrapper.innerText = option.html;
        wrapper.className = 'notification';
        wrapper.style.backgroundColor = '#57b9ff';
        notification.append(wrapper);
    }else if (option.className === 'alert-secondary'){
        wrapper.className = option.className;
        wrapper.innerText = option.html;
        wrapper.className = 'notification';
        wrapper.style.backgroundColor = '#8f8f8f';
        notification.append(wrapper);
    }else if (option.className === 'alert-success'){
        wrapper.className = option.className;
        wrapper.innerText = option.html;
        wrapper.className = 'notification';
        wrapper.style.backgroundColor = '#40d66b';
        notification.append(wrapper);
    }else if (option.className === 'alert-danger'){
        wrapper.className = option.className;
        wrapper.innerText = option.html;
        wrapper.className = 'notification';
        wrapper.style.backgroundColor = '#d13636';
        notification.append(wrapper);
    }else if (option.className === 'alert-warning'){
        wrapper.className = option.className;
        wrapper.innerText = option.html;
        wrapper.className = 'notification';
        wrapper.style.backgroundColor = '#dbde50';
        notification.append(wrapper);
    }else if (option.className === 'alert-info'){
        wrapper.className = option.className;
        wrapper.innerText = option.html;
        wrapper.className = 'notification';
        wrapper.style.backgroundColor = '#50c4de';
        notification.append(wrapper);
    }else if (option.className === 'alert-light'){
        wrapper.className = option.className;
        wrapper.innerText = option.html;
        wrapper.className = 'notification';
        wrapper.style.backgroundColor = '#fff';
        notification.append(wrapper);
    }else if (option.className === 'alert-dark'){
        wrapper.className = option.className;
        wrapper.innerText = option.html;
        wrapper.className = 'notification';
        wrapper.style.backgroundColor = '#7d7d7d';
        notification.append(wrapper);
    }else {
        console.log('Ошибка побробуйте снова');
    }
    setTimeout(() => {
        wrapper.classList.remove(option.className, 'notification');
        wrapper.textContent = '';
    }, 1500);
}

showNotification({
    html: 'HELLO!',
    className: 'alert-success'
});