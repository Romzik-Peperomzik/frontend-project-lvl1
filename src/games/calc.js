import _ from 'lodash';
import { gameGreeting, playerInput, resultAnnouncement } from '../index.js';

function generateDataForGame() {
  return [_.random(1, 25), _.random(1, 25), _.random(0, 2)];
}

export default function playBrainCalc() {
  const player = gameGreeting('What is the result of the expression?');
  let answerAreCorrectFlag = true;
  let roundCount = 0;
  let expressionResult = 0;
  let expressionString;
  let answer;

  while (roundCount < 3 && answerAreCorrectFlag) {
    roundCount += 1;
    const [firstNumber, secondNumber, mathSign] = generateDataForGame();
    switch (mathSign) {
      case 0: // Multiply
        expressionString = `${firstNumber} * ${secondNumber}`;
        expressionResult = firstNumber * secondNumber;
        break;

      case 1: // Subtract
        expressionString = `${firstNumber} - ${secondNumber}`;
        expressionResult = firstNumber - secondNumber;
        break;

      default: // Concatenate
        expressionString = `${firstNumber} + ${secondNumber}`;
        expressionResult = firstNumber + secondNumber;
        break;
    }

    answer = playerInput(expressionString);
    if (Number(answer) === expressionResult) {
      console.log('Correct!');
    } else {
      answerAreCorrectFlag = false;
    }
  }
  resultAnnouncement(player, answer, answerAreCorrectFlag, expressionResult);
}
