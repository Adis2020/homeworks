const form = document.querySelector('#form');

function createElement (elementName, text, className){
    const element = document.createElement(elementName);
    element.innerText = text;
    element.className = className;
    return element;
}

function checkElem (event) {
    const element = document.querySelectorAll('.error-text');
    let i;
    for (i = 0; i < element.length; i++)
    if (event.target.value !== ''){
        event.target.classList.remove('red-square');
        if (event.target.previousElementSibling === element[i]){
            event.target.previousElementSibling.remove()
        }
    }
}

function findElem () {
    const elements = document.querySelectorAll('.error-text');
    for (let i = 0; i < elements.length; i++){
        if (elements[i].className === 'error-text'){
            elements[i].remove();
        }
    }
}

form.addEventListener('submit', () => {
    let inputs = document.querySelectorAll('#form input, #form select');
    findElem();
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('data-required')){
            if (inputs[i].value === '') {
                inputs[i].classList.add('red-square');
                inputs[i].before(createElement('p', 'Обязательное поле!', 'error-text'));
                inputs[i].addEventListener('input', checkElem)
            }
        }
    }
})