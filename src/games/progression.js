import getRandomInt from '../utils.js';
import startGameLoop from '../index.js';

function generateDataForGame() {
  const progressionLength = getRandomInt(5, 10);
  const missedElementIndex = getRandomInt(0, progressionLength - 1);
  return [progressionLength, getRandomInt(5, 10), missedElementIndex];
}

const getDataForProgressionGame = () => {
  const progression = [];
  const [progressionLength, progressionStep, missedElementIndex] = generateDataForGame();
  let [progressionNumber, missingElement] = [getRandomInt(1, 10), 0];
  for (let index = 0; index < progressionLength; index += 1) {
    if (index === missedElementIndex) {
      progression.push('..');
      missingElement = progressionNumber;
      progressionNumber += progressionStep;
    } else {
      progression.push(progressionNumber);
      progressionNumber += progressionStep;
    }
  }
  return [progression.join(' '), String(missingElement)];
};

export default function playBrainProgression() {
  startGameLoop(getDataForProgressionGame, 'What number is missing in the progression?');
}
