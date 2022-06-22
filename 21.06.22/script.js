//1 Задание
function mul(n, m) {
    return n + m;
}
let result = mul(6, 8);
console.log(result);

function factorial(n) {
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= n--;
    }
    return result;
}

result = factorial(6);
console.log(result);