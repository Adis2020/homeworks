const userNameElement = document.querySelector('#name');
const surNameElement = document.querySelector('#surname');
const middleNameElement = document.querySelector('#middle_name');
const dateBirth = document.querySelector('#date_of_birth');
const placeRegistration = document.querySelector('#place_residence_registration');
const AN = document.querySelector('#ANID');
const Tin = document.querySelector('#TIN');
const DateGet = document.querySelector('#date_get');
const Bank = document.querySelector('#Bank');
const address = document.querySelector('#address');
const organization = document.querySelector('#organization');
const jobTitle = document.querySelector('#Job_title');

const button = document.querySelector('button');

let userName = {}

button.addEventListener('click', () => {




    localStorage.name = userNameElement.value;
    localStorage.surName = surNameElement.value;
    localStorage.middleName = middleNameElement.value;
    localStorage.dateBirth = dateBirth.value;
    localStorage.placeRegistration = placeRegistration.value;
    localStorage.ANID = AN.value;
    localStorage.Tin = Tin.value;
    localStorage.DateGet = DateGet.value;
    localStorage.Bank = Bank.value;
    localStorage.address = address.value;
    userName = localStorage;
    console.log(localStorage);
})