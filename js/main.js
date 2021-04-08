'use strict';

let guessNumber = function () {
  const randomNumber = Math.random().toFixed(2) * 100;
console.log(randomNumber);
  let guessPrompt = function () {
    let numStr = prompt('Угадай число от 1 до 100');
    console.log(numStr);
    if (numStr === null) {
      alert('Игра окончена');
      return;
    } else if (Number(numStr) === randomNumber) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    } else if (isNaN(parseInt(numStr))) {
      alert('Введи число!');
      guessPrompt();
    } else if (Number(numStr) > randomNumber) {
      alert('Загаданное число меньше');
      guessPrompt();
    } else if (Number(numStr) < randomNumber) {
      alert('Загаданное число больше');
      guessPrompt();
    }
    
  };
  guessPrompt();
};
guessNumber();