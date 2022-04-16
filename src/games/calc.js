import getRandomInt from '../utils.js';
import gameEventLoop from '../index.js';

function generateDataForGame() {
  const signArray = ['+', '-', '*'];
  return [getRandomInt(1, 25), getRandomInt(1, 25), signArray[getRandomInt(0, 2)]];
}

function multiplyAndConvertToStr(firstNumber, secondNumber) {
  return [`${firstNumber} * ${secondNumber}`, String(firstNumber * secondNumber)];
}

function subtractionAndConvertToStr(firstNumber, secondNumber) {
  return [`${firstNumber} - ${secondNumber}`, String(firstNumber - secondNumber)];
}

function additionAndConvertToStr(firstNumber, secondNumber) {
  return [`${firstNumber} + ${secondNumber}`, String(firstNumber + secondNumber)];
}

const dataForCalcGame = () => {
  let expressionResult = 0;
  let expressionString;
  const [firstNumber, secondNumber, mathSign] = generateDataForGame();
  switch (mathSign) {
    case '*':
      [expressionString, expressionResult] = multiplyAndConvertToStr(firstNumber, secondNumber);
      break;

    case '-':
      [expressionString, expressionResult] = subtractionAndConvertToStr(firstNumber, secondNumber);
      break;

    default: // addition
      [expressionString, expressionResult] = additionAndConvertToStr(firstNumber, secondNumber);
      break;
  }
  return [expressionString, expressionResult];
};

export default function playBrainCalc() {
  gameEventLoop(dataForCalcGame, 'What is the result of the expression?');
}
