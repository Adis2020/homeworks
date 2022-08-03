const form = document.querySelector('#form');

function createElement (elementName, text, className){
    const element = document.createElement(elementName);
    element.innerText = text;
    element.className = className;
    return element;
}

function checkElem (event) {
    const element = document.querySelectorAll('.error-text');
    for (let i = 0; i < element.length; i++)
    if (event.target.value !== ''){
        event.target.classList.remove('red-square');
        if (event.target.previousElementSibling === element[i]){
            event.target.previousElementSibling.remove()
        }
    }
}

function findElem () {
    const elements = document.querySelectorAll('.error-text');
    if (elements.length > 0){
        for (let i = 0; i < elements.length; i++){
            elements[i].remove();
        }
    }
}

function makeObject (elements) {
    const data = {};
    for (let i = 0; i < elements.length; i++){
        localStorage[elements[i].id] = elements[i].value;
    }
}

form.addEventListener('submit', () => {
    const inputs = document.querySelectorAll('#form input, #form select');
    let count = document.querySelectorAll('[data-required]').length;
    findElem();
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('data-required')){
            if (inputs[i].value === '') {
                inputs[i].classList.add('red-square');
                inputs[i].before(createElement('p', 'Обязательное поле!', 'error-text'));
                inputs[i].addEventListener('input', checkElem);
                count--;
            }
        }
    }
    if (count === document.querySelectorAll('[data-required]').length){
        makeObject(inputs);
        window.location.href = 'form2.html';
    }
})