//1 Задание

//2 Задание
function myFunc(array) {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i -= 1) {
        reverse.push(array[i]);
    }
    return reverse;
}
result = myFunc([1, 2, 3]);
console.log(result);