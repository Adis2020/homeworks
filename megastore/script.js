const form = document.querySelector('#form');
const selector = document.querySelector('select');

form.addEventListener('submit', () => {
    let inputs = document.querySelectorAll('input');
    let array = ['surName', 'name', 'middleName', 'dateBirth', 'placeRegistration', 'ANID', 'tin', 'dateGet', 'bank','address'];
    for (let i = 0; i < inputs.length; i++) {
        localStorage.setItem(array[i], inputs[i].value);
    }
    localStorage.bank = selector.value;
    if (localStorage['surName'] && localStorage['name'] && localStorage['middleName']) window.location.href = 'form2.html';
    console.log(localStorage)
})