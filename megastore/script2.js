const form = document.querySelector('#form');
const selector1 = document.querySelector('#see_credit');
const selector2 = document.querySelector('#point');

form.addEventListener('submit', () => {
    let inputs = document.querySelectorAll('input');
    let array = ['organization', 'jobTitle', 'jobTitle', 'salary3Month', 'phoneName', 'costItem', 'moreItem', 'resultCredit', 'seeCredit ', 'continuesCredit', 'pickupPoint'];
    for (let i = 0; i < inputs.length; i++) localStorage.setItem(array[i], inputs[i].value);
    localStorage.setItem('see_credit', selector1.value);
    localStorage.setItem('point', selector2.value);
    let user = localStorage;
    console.log(user)
})