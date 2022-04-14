#!/usr/bin/node
import _ from 'lodash';
import { gameGreeting, playerInput, resultAnnouncement } from '../index.js';

function playBrainEven(player) {
  let answerAreCorrectFlag = true;
  let roundCount = 0;
  let isGameNumberEven;
  let answer;

  while (roundCount < 3 && answerAreCorrectFlag) {
    const numberForGame = _.random(0, 100);
    roundCount += 1;
    isGameNumberEven = numberForGame % 2 === 0;
    answer = playerInput(numberForGame);

    if ((isGameNumberEven && answer !== 'yes') || (!isGameNumberEven && answer !== 'no')) {
      answerAreCorrectFlag = false;
    }
    if (answerAreCorrectFlag) {
      console.log('Correct!');
    }
  }
  const correctAnswer = isGameNumberEven ? 'yes' : 'no';
  resultAnnouncement(player, answer, answerAreCorrectFlag, correctAnswer);
}

const brainEvenGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';
playBrainEven(gameGreeting(brainEvenGreeting));
