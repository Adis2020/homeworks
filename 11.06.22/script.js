//1 Задание
function calcNumber(number = prompt('Первое число'), number2 = prompt('второе число')) {
    let result = number - number2;
    alert(result);
}
calcNumber();

//2 Задание
let message = prompt('Написать сообщение');
function getMessage() {
    alert(message);
}
getMessage();

//3 Задание
function twoFunctions() {
    calcNumber() + getMessage();
}
twoFunctions();

