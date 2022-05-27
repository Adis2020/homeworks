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
alert(`Сейчас у вас ${points} балл`);

player = prompt('Сколько будет 22+22?')
if (player == 44){
    points++;
    alert('+ 1 балл');
}
else {
    points--;
    alert('-1 балл');
}
alert(`Итого у вас ${points} баллов`);