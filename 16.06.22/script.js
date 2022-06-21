//1 Задание
let array = [2, 3, 4, 5, 6, 7];
let result = 1;
for (let i = 0; i < array.length; i++){
    result *= array[i];
}
console.log(result);

//2 Задание
function myFunc(array) {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);
    }
    return reverse;
}
result = myFunc([1, 2, 3]);
console.log(result);