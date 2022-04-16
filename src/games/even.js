import _ from 'lodash';
import gameEventLoop from '../index.js';

const dataForEvenGame = () => {
  const numberForGame = _.random(0, 100);
  const isGameNumberEven = numberForGame % 2 === 0;
  return [numberForGame, isGameNumberEven];
};

export default function playBrainEven() {
  gameEventLoop('bool', dataForEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
}
