const form = document.querySelector('#form');

function createElement (name, textName, className){
    const element = document.createElement(name);
    element.innerText = textName;
    element.className = className;
    return element;
}

form.addEventListener('submit', () => {
    let inputs = document.querySelectorAll('#form input, #form select');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute('data-required')){
            const p = document.createElement('p');
            if (inputs[i].value === '') {
                p.innerText = 'Обязательное поле';
                p.className = 'error-text';
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