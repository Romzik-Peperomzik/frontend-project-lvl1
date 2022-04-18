import getRandomInt from '../utils.js';
import startGameLoop from '../index.js';

function calculateGCD(a, b) {
  if (!b) {
    return a;
  }
  return calculateGCD(b, a % b);
}

const getDataForGCDGame = () => {
  const [firstNumber, secondNumber] = [getRandomInt(1, 100), getRandomInt(1, 100)];
  const gcdNumber = calculateGCD(firstNumber, secondNumber);
  return [`${firstNumber} ${secondNumber}`, String(gcdNumber)];
};

export default function playBrainGCD() {
  startGameLoop(getDataForGCDGame, 'Find the greatest common divisor of given numbers.');
}
