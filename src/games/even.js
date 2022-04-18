import getRandomInt from '../utils.js';
import startGameLoop from '../index.js';

function isEven(num) {
  return num % 2 === 0;
}

const getDataForEvenGame = () => {
  const numberForGame = getRandomInt(0, 100);
  const numberForGameEvenOrOdd = isEven(numberForGame) ? 'yes' : 'no';
  return [numberForGame, numberForGameEvenOrOdd];
};

export default function playBrainEven() {
  startGameLoop(getDataForEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
}
