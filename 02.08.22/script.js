const form = document.querySelector('#form');
let user = {};

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
    for (let i = 0; i < elements.length; i++){
        if (elements[i].className === 'text-error'){
            elements[i].remove();
        }
    }
}

//Собирает все данные в обьект
const createObject = (event) => {
    for (let i = 0; i < event.length; i++){
        user[event[i].getAttribute('data-user')] = event[i].value;
    }
    console.log(user)
}

form.addEventListener('submit', () => {
    const elements = document.querySelectorAll('#form input, #form select, #form textarea');
    removeElem();
    for (let i = 0; i < elements.length; i++){
        if (elements[i].hasAttribute('data-required')){
            if (elements[i].value === ''){
                elements[i].classList.add('empty-field');
                elements[i].after(createErrorElem());
                elements[i].addEventListener('input', checkElem)
            }
        }
    }
    if (elements[0].value && elements[1].value !== '') {
        createObject(elements);
    }
})