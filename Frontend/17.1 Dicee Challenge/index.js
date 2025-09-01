var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

var dice = document.querySelectorAll('.dice > img');
var title = document.querySelector('h1');

dice[0].src = './images/dice' + randomNumber1 + '.png';

dice[1].src = './images/dice' + randomNumber2 + '.png';

if (randomNumber1 > randomNumber2){
    title.innerText = 'Player 1 Win';
}
else if (randomNumber1 < randomNumber2){
    title.innerText = 'Player 2 Win';
}
else {
    title.innerText = 'Draw again!';
}