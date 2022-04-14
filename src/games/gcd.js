import _ from 'lodash';
import gameEventLoop from '../game-event.js';

function generateDataForGame() {
  return [_.random(1, 100), _.random(1, 100)];
}

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

const dataForGCDGame = () => {
  const [firstNumber, secondNumber] = generateDataForGame();
  const isGCDNumbers = gcd(firstNumber, secondNumber);
  return [`${firstNumber} ${secondNumber}`, isGCDNumbers];
};

export default function playBrainGCD() {
  gameEventLoop('num', dataForGCDGame, 'Find the greatest common divisor of given numbers.');
}
