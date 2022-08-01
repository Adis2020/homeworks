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
            console.log(event.target.nextElementSibling)
        }
    }
}

const findElem = () => {
    const elements = document.querySelectorAll('.text-error');
    for (let i = 0; i < elements.length; i++){
        if (elements[i].className === 'text-error'){
            for (let i = 0; i < elements.length; i++){
                elements[i].remove();
            }
        }
    }
}

form.addEventListener('submit', () => {
    const elements = document.querySelectorAll('#form input, #form select, #form textarea');
    for (let i = 0; i < elements.length; i++){
        if (elements[i].hasAttribute('data-required'))
            if (elements[i].value === ''){
                elements[i].classList.add('empty-field');
                findElem();
                elements[i].after(createErrorElem());
                elements[i].addEventListener('input', checkElem)
            }
    }
})