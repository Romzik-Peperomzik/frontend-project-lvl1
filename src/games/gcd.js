import _ from 'lodash';
import gameEventLoop from '../index.js';

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
  return [`${firstNumber} ${secondNumber}`, String(isGCDNumbers)];
};

export default function playBrainGCD() {
  gameEventLoop(dataForGCDGame, 'Find the greatest common divisor of given numbers.');
}
