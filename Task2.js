#! /usr/bin/env node
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = Math.floor(Math.random() * 100);
console.log('Начало игры.\n Загадано число в диапазоне от 0 до 100\n');
const game=() => readline.question('Ваше число: ', function(answer) {
  const number = parseInt(answer);
  if (number === secret) {
    console.log('Вы угадали!');
    readline.close();
  } else if (number < secret) {
    console.log('Загаданное число больше\n');
    game();
  } else {
    console.log('Загаданное число меньше\n');
    game();
  }
})
game();
