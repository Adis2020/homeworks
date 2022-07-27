const form = document.querySelector('#form');

//Вызывая функцию писать все данные через кавычки
function createElement (elementName, text, className){
    const element = document.createElement(elementName);
    element.innerText = text;
    element.className = className;
    return element;
}

form.addEventListener('submit', () => {
    let inputs = document.querySelectorAll('#form input, #form select');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('data-required')){
            let p;
            if (inputs[i].value === '') {
                p = createElement('p', 'Обязательное поле!', 'error-text');
                inputs[i].before(p);
                inputs[i].classList.add('red-square');
            }
            inputs[i].addEventListener('change', () => {
                inputs[i].classList.remove('red-square');
                p.remove();
            })
        }
    }
})