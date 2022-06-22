//1 Задание
function mul(n, m) {
    return n + m;
}
let result = mul(6, 8);
console.log(result);

//2 Задание
function factorial(n) {
    let j = n;
    let result = 1;
    for (let i = 0; i < j; i++){
        result *= n--;
    }
    return result;
}

result = factorial(7);
console.log(result);