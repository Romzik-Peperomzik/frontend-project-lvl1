#!/usr/bin/node
import _ from 'lodash';
import { gameGreeting, playerInput, resultAnnouncement } from '../index.js';

function generateDataForGame() {
  return [_.random(1, 100), _.random(1, 100)];
}

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

function playBrainGCD(player) {
  let answerAreCorrectFlag = true;
  let roundCount = 0;
  let gcdNumber = 0;
  let answer;

  while (roundCount < 3 && answerAreCorrectFlag) {
    roundCount += 1;
    const [firstNumber, secondNumber] = generateDataForGame();
    gcdNumber = gcd(firstNumber, secondNumber);
    answer = playerInput(`${firstNumber} ${secondNumber}`);

    if (Number(answer) === gcdNumber) {
      console.log('Correct!');
    } else {
      answerAreCorrectFlag = false;
    }
  }
  resultAnnouncement(player, answer, answerAreCorrectFlag, gcdNumber);
}

playBrainGCD(gameGreeting('Find the greatest common divisor of given numbers.'));
