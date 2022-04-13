#!/usr/bin/node
import _ from 'lodash';
import { gameGreeting, playerInput, resultAnnouncement } from '../index.js';

function generateDataForGame() {
  const progressionLength = _.random(5, 10);
  const progressionStep = _.random(2, 5);
  let progressionNumber = _.random(1, 10);
  const missingElementIndex = _.random(0, progressionLength - 1);
  let missingElement;
  const progressionArray = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingElementIndex) {
      progressionArray.push('..');
      missingElement = progressionNumber;
      progressionNumber += progressionStep;
    } else {
      progressionArray.push(progressionNumber);
      progressionNumber += progressionStep;
    }
  }
  return [progressionArray, missingElement];
}

function playBrainProgression(player) {
  console.log(`Hello, ${player}!\nWhat number is missing in the progression?`);
  let answerAreCorrectFlag = true;
  let roundCount = 0;
  let missingElement;
  let progressionArray;
  let answer;

  while (roundCount < 3 && answerAreCorrectFlag) {
    roundCount += 1;
    [progressionArray, missingElement] = generateDataForGame();
    answer = playerInput(progressionArray.join(' '));
    if (Number(answer) === missingElement) {
      console.log('Correct!');
    } else {
      answerAreCorrectFlag = false;
    }
  }
  resultAnnouncement(player, answer, answerAreCorrectFlag, missingElement);
}

playBrainProgression(gameGreeting());
