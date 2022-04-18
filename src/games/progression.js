import getRandomInt from '../utils.js';
import startGameLoop from '../index.js';

const getDataForProgressionGame = () => {
  let [progressionNumber, missingElement] = [getRandomInt(1, 10), 0];
  const progression = [];
  const [progressionLength, progressionStep] = [getRandomInt(5, 10), getRandomInt(5, 10)];
  const missedElementIndex = getRandomInt(0, progressionLength - 1);

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
