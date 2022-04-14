import _ from 'lodash';
import { gameGreeting, playerInput, resultAnnouncement } from '../index.js';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

export default function playBrainPrime() {
  const player = gameGreeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  let answerAreCorrectFlag = true;
  let roundCount = 0;
  let itIsPrime;
  let answer;

  while (roundCount < 3 && answerAreCorrectFlag) {
    const numberForGame = _.random(0, 100);
    roundCount += 1;
    itIsPrime = isPrime(numberForGame);
    answer = playerInput(numberForGame);

    if ((itIsPrime && answer !== 'yes') || (!itIsPrime && answer !== 'no')) {
      answerAreCorrectFlag = false;
    }
    if (answerAreCorrectFlag) {
      console.log('Correct!');
    }
  }
  const correctAnswer = itIsPrime ? 'yes' : 'no';
  resultAnnouncement(player, answer, answerAreCorrectFlag, correctAnswer);
}
