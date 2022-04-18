import getRandomInt from '../utils.js';
import startGameLoop from '../index.js';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const getDataForPrime = () => {
  const numberForGame = getRandomInt(0, 100);
  const numberArePrime = isPrime(numberForGame) ? 'yes' : 'no';
  return [numberForGame, numberArePrime];
};

export default function playBrainPrime() {
  startGameLoop(getDataForPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
}
