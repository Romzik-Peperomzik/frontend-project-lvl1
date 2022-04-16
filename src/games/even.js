import getRandomInt from '../utils.js';
import gameEventLoop from '../index.js';

const dataForEvenGame = () => {
  const numberForGame = getRandomInt(0, 100);
  const isGameNumberEven = numberForGame % 2 === 0 ? 'yes' : 'no';
  return [numberForGame, isGameNumberEven];
};

export default function playBrainEven() {
  gameEventLoop(dataForEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
}
