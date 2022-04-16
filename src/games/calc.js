import getRandomInt from '../utils.js';
import startGameLoop from '../index.js';

function generateDataForGame() {
  const signs = ['+', '-', '*'];
  return [getRandomInt(1, 25), getRandomInt(1, 25), signs[getRandomInt(0, 2)]];
}

function multiplyAndConvertToStr(firstNumber, secondNumber) {
  return [`${firstNumber} * ${secondNumber}`, String(firstNumber * secondNumber)];
}

function subtractAndConvertToStr(firstNumber, secondNumber) {
  return [`${firstNumber} - ${secondNumber}`, String(firstNumber - secondNumber)];
}

function addAndConvertToStr(firstNumber, secondNumber) {
  return [`${firstNumber} + ${secondNumber}`, String(firstNumber + secondNumber)];
}

const getDataForCalcGame = () => {
  let expressionResult = 0;
  let expressionString;
  const [firstNumber, secondNumber, mathSign] = generateDataForGame();
  switch (mathSign) {
    case '*':
      [expressionString, expressionResult] = multiplyAndConvertToStr(firstNumber, secondNumber);
      break;

    case '-':
      [expressionString, expressionResult] = subtractAndConvertToStr(firstNumber, secondNumber);
      break;

    default: // addition
      [expressionString, expressionResult] = addAndConvertToStr(firstNumber, secondNumber);
      break;
  }
  return [expressionString, expressionResult];
};

export default function playBrainCalc() {
  startGameLoop(getDataForCalcGame, 'What is the result of the expression?');
}
