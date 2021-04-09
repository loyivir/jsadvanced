'use strict';

let guessNumber = function () {
  const randomNumber = Math.random().toFixed(2) * 100;
  let tries = 10;
  console.log(randomNumber);
  let guessPrompt = function () {
    
    let numStr = prompt('Угадай число от 1 до 100');
    
    if(tries === 1) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        guessNumber();
      } else {
        tries = 0;
        return;
      }
    }else
    if (numStr === null) {
      tries = 0;
      alert('Игра окончена');
      return;
    } else if (Number(numStr) === randomNumber) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')){
       guessNumber();
      } else {
        tries = 0;
        alert('Игра окончена');
        return;
      }      
    } else if (isNaN(Number(numStr)) || numStr.trim() === '') {
      alert('Введи число!');
      guessPrompt();
    } else if (Number(numStr) > randomNumber) {
      tries--;
      alert('Загаданное число меньше, осталось попыток ' + tries);
      guessPrompt();
    } else if (Number(numStr) < randomNumber) {
      tries--;
      alert('Загаданное число больше, осталось попыток ' + tries);
      guessPrompt();
    } 
    
  };
  guessPrompt();
};
guessNumber();