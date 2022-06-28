//1 задание
function stomTimer() {
    let i = 0;
    let timer = setInterval(() => {
        i++;
        console.log('Hello World');
        if (i >= 5) {
            clearInterval(timer);
            console.log('Done');
        }
    }, 1000);
}
stomTimer();

//2 Задание
