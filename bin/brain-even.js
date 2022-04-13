#!/usr/bin/node
import readlineSync from 'readline-sync';
import _ from 'lodash';

function playGame(player) {
  let answerAreCorrect = true;
  let gameCount = 0;
  let answer;
  let isGameNumberEven;

  while (gameCount < 3 && answerAreCorrect) {
    const gameNumber = _.random(0, 100);
    gameCount += 1;
    isGameNumberEven = gameNumber % 2 === 0;
    answer = readlineSync.question(`Question: ${gameNumber}\nYour answer: `);

    if ((isGameNumberEven && answer !== 'yes') || (!isGameNumberEven && answer !== 'no')) {
      answerAreCorrect = false;
    }
    if (answerAreCorrect) {
      console.log('Correct!');
    }
  }
  if (answerAreCorrect) {
    console.log(`Congratulations, ${player}!`);
  } else {
    const correctAnswer = isGameNumberEven ? 'yes' : 'no';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${player}!`);
  }
}

function gameGreeting() {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  playGame(playerName);
}

gameGreeting();
