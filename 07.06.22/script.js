// 1 Задание
function showMessage() {
    alert('Привет, JavaScript!');
}
showMessage();

// 2 Задание
function additionsCube(number1, number2, number3) {
    let result = number1 * number2 * number3;
    alert(result);
}
additionsCube(5, 5, 5);

//3 задание
function getName(name) {
    if (name != undefined) alert(`Привет ${name}`);
    else alert('Напишите имя');
}
getName(prompt('Введите имя'))