//Задания с task.txt
//1) Задание
let x = prompt('Введите число от 1 до 10');
if (x == 7) {
	alert('Правильно');
}
else {
	alert('Неправильно');
}

//2 задание
let a = 1;
let b = 3;
if (a <= 1 && b >= 3) {
	alert(a+b);
}
else {
	alert(a-b);
}

//Смысл 3 задания я не понял

//4 задание
let test = true;
if (test == true) {
	alert('Верно');
}
else {
	alert('Неверно');
}

//Задания с Google презентации

//1 первое можно не выполнять

//2 задача
let stolica = prompt('Столица Кыргызстана?');
if (stolica == 'Бишкек') {
	alert('Верно');
}
else {
	alert('Незнаете?');
}

//3 задача
let whoCome = prompt('Кто пришёл?');
if (whoCome == 'Админ') {
	let password = prompt('Пароль?');
	if (password == 'Чёрный властелин') {
		alert('Добро пожаловать!');
	}
	else if (password == 'Отмена') {
		alert('Вход отменён');
	}
	else {
		alert('Пароль неверен');
	}
}
else if (whoCome == 'Отмена') {
	alert('Вход отменён');
}
else {
	alert('Я вас незнаю');
}