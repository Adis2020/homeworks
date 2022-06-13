//1 Задание
function calcNumber(a, b) {
    return a - b;
}
let number = prompt('Введите первое число');
let number2 = prompt('Введите второе число');
let result = calcNumber(number, number2);
alert(result);

//2 Задание
let message = prompt('Написать сообщение');
function getMessage() {
    alert(message);
}
getMessage();

//3 Задание
function twoFunction() {
    calcNumber();
    getMessage();
}
twoFunction();
//Обе функции работают и вызываются как одна функция. Однако функция 'calcNumber' не будет работать так как надо
