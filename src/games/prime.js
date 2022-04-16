import getRandomInt, { transformBoolToStatement } from '../utils.js';
import gameEventLoop from '../index.js';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const dataForPrime = () => {
  const numberForGame = getRandomInt(0, 100);
  const itIsPrime = isPrime(numberForGame);
  return [numberForGame, transformBoolToStatement(itIsPrime)];
};

export default function playBrainPrime() {
  gameEventLoop(dataForPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
}
