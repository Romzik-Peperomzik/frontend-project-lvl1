import getRandomInt from '../utils.js';
import gameEventLoop from '../index.js';

function generateDataForGame() {
  const progressionLength = getRandomInt(5, 10);
  const missedElementIndex = getRandomInt(0, progressionLength - 1);
  return [progressionLength, getRandomInt(5, 10), missedElementIndex];
}

const dataForProgressionGame = () => {
  const progressionArray = [];
  const [progressionLength, progressionStep, missedElementIndex] = generateDataForGame();
  let [progressionNumber, missingElement] = [getRandomInt(1, 10), 0];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missedElementIndex) {
      progressionArray.push('..');
      missingElement = progressionNumber;
      progressionNumber += progressionStep;
    } else {
      progressionArray.push(progressionNumber);
      progressionNumber += progressionStep;
    }
  }
  return [progressionArray.join(' '), String(missingElement)];
};

export default function playBrainProgression() {
  gameEventLoop(dataForProgressionGame, 'What number is missing in the progression?');
}
