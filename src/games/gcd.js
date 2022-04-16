import getRandomInt from '../utils.js';
import gameEventLoop from '../index.js';

function generateDataForGame() {
  return [getRandomInt(1, 100), getRandomInt(1, 100)];
}

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

const dataForGCDGame = () => {
  const [firstNumber, secondNumber] = generateDataForGame();
  const GCDNumber = gcd(firstNumber, secondNumber);
  return [`${firstNumber} ${secondNumber}`, String(GCDNumber)];
};

export default function playBrainGCD() {
  gameEventLoop(dataForGCDGame, 'Find the greatest common divisor of given numbers.');
}
