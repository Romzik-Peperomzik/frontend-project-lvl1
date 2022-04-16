import getRandomInt from '../utils.js';
import gameEventLoop from '../index.js';

function generateDataForGame() {
  return [getRandomInt(1, 25), getRandomInt(1, 25), getRandomInt(0, 2)];
}

const dataForCalcGame = () => {
  let expressionResult = 0;
  let expressionString;
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
  return [expressionString, String(expressionResult)];
};

export default function playBrainCalc() {
  gameEventLoop(dataForCalcGame, 'What is the result of the expression?');
}
