//Классная работа
//1 Задание
let arr = []
function calcArr(text, number) {
    for (let i = 0; i < number; i++){
        arr[i] = text;
    }
    console.log(arr);
}
calcArr('JavaScript', 10);

//2 Задание
function calcResult(a, b){
    if (a > 90 || b > 10){
        console.log('Ваша результат 100');
    }
    else if (a >= 75 & b >= 5){
        console.log('Ваш результат 90')
    }
    else if (a >= 50 & b >= 2){
        console.log('Ваш результат 75')
    }
    else if (a >= 30 & b >= 1){
        console.log('Ваш результат 50')
    }
    else console.log('Ваш результат 0')
}
calcResult(50, 2);


//Д/З
//1 Задание
arr = []
for (let i = 0; i < 10; i++){
    arr.push('x');
}
console.log(arr);

//2 Задание
arr = [1, 2, 115, 4, 58, 5 ,7 ,99]
for (let i = 0; i < arr.length; i++){
    if (arr[i] === 4){
        console.log('ЕСТЬ!');
    }
}