let player = prompt('Какой сейчас год?');
let points = 0;
if (player == 2022){
    points++;
    alert('+ 1 балл');
}
else{
    points--;
    alert('-1 балл');
}
alert(`Итого у вас ${points} баллов`);

player = prompt('Когда начались курсы? Ответ надо записать в дд.мм.гг. Пример 27.05.22')
if (player == 01.03.22){
    points++;
    alert('+ 1 балл');
}
else {
    points--;
    alert('-1 балл');
}