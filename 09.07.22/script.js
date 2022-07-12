//1 Задание
const imageSmile = document.images.src = 'images/smile.png';
const smileClick = document.querySelector('#smile_click');

function getMessage(option) {
    if (option.text === 'Здравствуйте null!') return;
    const message = document.createElement('div');
    message.innerText = option.text;
    option.chooseId.prepend(message);
    smileClick.src = option.image;
}

smileClick.addEventListener('click', () => {
    getMessage({
        text: `Здравствуйте ${prompt('Ваше имя', 'Петя')}!`,
        chooseId: document.querySelector('#text'),
        image: imageSmile
    })
})

//2 Задание