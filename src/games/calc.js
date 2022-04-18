import getRandomInt from '../utils.js';
import startGameLoop from '../index.js';

function getExpressionResult(firstNumber, mathSign, secondNumber) {
  switch (mathSign) {
    case '*':
      return firstNumber * secondNumber;

    case '-':
      return firstNumber - secondNumber;

    default: // addition
      return firstNumber + secondNumber;
  }
}

const getDataForCalcGame = () => {
  const signs = ['+', '-', '*'];
  const mathSign = signs[getRandomInt(0, 2)];
  const [firstNumber, secondNumber] = [getRandomInt(1, 25), getRandomInt(1, 25)];
  const expressionString = `${firstNumber} ${mathSign} ${secondNumber}`;
  const expressionResult = getExpressionResult(firstNumber, mathSign, secondNumber);

  return [expressionString, String(expressionResult)];
};

export default function playBrainCalc() {
  startGameLoop(getDataForCalcGame, 'What is the result of the expression?');
}
