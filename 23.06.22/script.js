//1 Задание
let array = [-5,  10,  5, 55,  -1, 22,  -4 , 36, -45];
let numberPlus = array.filter(item => {
    if (item < 0) return true;
})
console.log(numberPlus);

//2 Задание
array = [2, 5, 4, 8];
let newArray = array.map(item => {
    return item * item;
});
console.log(newArray);