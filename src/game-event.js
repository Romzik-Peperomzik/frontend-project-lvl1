import { gameGreeting, playerInput, resultAnnouncement } from './index.js';

export default function gameEventLoop(answerType, gameFunction, greetingText) {
  const player = gameGreeting(greetingText);
  let answerAreCorrectFlag = true;
  let roundCount = 0;
  let playerAnswer;
  let dataToDisplay;
  let expectedAnswer;

  while (roundCount < 3 && answerAreCorrectFlag) {
    roundCount += 1;
    [dataToDisplay, expectedAnswer] = gameFunction();
    playerAnswer = playerInput(dataToDisplay);

    if (answerType === 'num') {
      if (Number(playerAnswer) === expectedAnswer) {
        console.log('Correct!');
      } else {
        answerAreCorrectFlag = false;
      }
    } else {
      if ((expectedAnswer && playerAnswer !== 'yes') || (!expectedAnswer && playerAnswer !== 'no')) {
        answerAreCorrectFlag = false;
      }
      if (answerAreCorrectFlag) {
        console.log('Correct!');
      }
    }
  }
  if (answerType === 'bool') {
    expectedAnswer = expectedAnswer ? 'yes' : 'no';
  }
  resultAnnouncement(player, playerAnswer, answerAreCorrectFlag, expectedAnswer);
}
