import getRandomInt from '../utils.js';
import gameEventLoop from '../index.js';

function generateDataForGame() {
  const [progressionLength, progressionStep] = [getRandomInt(5, 10), getRandomInt(5, 10)];
  const [missingElementIndex, progressionArray] = [getRandomInt(0, progressionLength - 1), []];
  let [progressionNumber, missingElement] = [getRandomInt(1, 10), 0];
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
  return [progressionArray.join(' '), missingElement];
}

const dataForProgressionGame = () => {
  const [progressionArray, missingElement] = generateDataForGame();
  return [progressionArray, String(missingElement)];
};

export default function playBrainProgression() {
  gameEventLoop(dataForProgressionGame, 'What number is missing in the progression?');
}
