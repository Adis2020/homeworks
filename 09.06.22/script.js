//1 задания
console.log('Первое задание');
let numbers = [1, 2, 5, 6];
let result;
function additionsNumbers() {
    for (let i = 0; i < numbers.length; i++){
        result = numbers[i] * 2;
        console.log(result);
    }
}
additionsNumbers();

//2 Задание
console.log('Второе задание');
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let newNumbers;
for (let i = 0; i < numbers.length; i++){
    if (newNumbers = (numbers[i] % 2) === 0) {
        console.log(numbers[i]);
    }
}


