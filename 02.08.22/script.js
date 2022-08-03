const form = document.querySelector('#form');

const createErrorElem = () => {
    const elem = document.createElement('p');
    elem.className = 'text-error';
    elem.innerText = 'Обязательное поле';
    return elem;
}

const checkElem = (event) => {
    if (event.target.value !== ''){
        event.target.classList.remove('empty-field');
        if (event.target.value !== ''){
            if (event.target.nextElementSibling === null){
                return;
            }
            event.target.nextElementSibling.remove()
        }
    }
}

const removeElem = () => {
    const elements = document.querySelectorAll('.text-error');
    if (elements.length > 0){
        for (let i = 0; i < elements.length; i++){
            elements[i].remove();
        }
    }
}

const createObject = (event) => {
    let user = {};
    for (let i = 0; i < event.length; i++){
        user[event[i].getAttribute('data-user')] = event[i].value;
    }
    console.log(user);
}

form.addEventListener('submit', () => {
    const elements = document.querySelectorAll('#form input, #form select, #form textarea');
    let a = 2;
    removeElem();
    for (let i = 0; i < elements.length; i++){
        if (elements[i].hasAttribute('data-required')){
            if (elements[i].value === ''){
                a--;
                elements[i].classList.add('empty-field');
                elements[i].after(createErrorElem());
                elements[i].addEventListener('input', checkElem)
            }
        }
    }
    if (a === 2) {
        createObject(elements);
    }
})