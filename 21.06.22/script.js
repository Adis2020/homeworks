//Классная работа
const numbers = [1, 4, 3, 23, 5, 45];
const result = numbers.reduce((sum, item)=>{
    return sum + item;
}, 0)
console.log(result);
/*1) 0 + 1 = 1
2) 1 + 4 = 5
3) 5 + 3 = 23
4) 23 + 5 = 28
5) 28 + 45 = 78*/

//Д/З
//1 Задание
function mul(n, m) {
    return n + m;
}
let newResult = mul(6, 8);
console.log(newResult);

//2 Задание
function factorial(n) {
    let j = n;
    let result = 1;
    for (let i = 0; i < j; i++){
        result *= n--;
    }
    return result;
}

newResult = factorial(7);
console.log(newResult);