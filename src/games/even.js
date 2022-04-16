import getRandomInt, { transformBoolToStatement } from '../utils.js';
import startGameLoop from '../index.js';

const getDataForEvenGame = () => {
  const numberForGame = getRandomInt(0, 100);
  const numberForGameEvenOrOdd = numberForGame % 2 === 0;
  return [numberForGame, transformBoolToStatement(numberForGameEvenOrOdd)];
};

export default function playBrainEven() {
  startGameLoop(getDataForEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
}
