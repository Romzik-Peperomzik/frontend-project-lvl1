import _ from 'lodash';
import gameEventLoop from '../index.js';

function generateDataForGame() {
  const [progressionLength, progressionStep] = [_.random(5, 10), _.random(5, 10)];
  const [missingElementIndex, progressionArray] = [_.random(0, progressionLength - 1), []];
  let [progressionNumber, missingElement] = [_.random(1, 10), 0];
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
  return [progressionArray, missingElement];
};

export default function playBrainProgression() {
  gameEventLoop('num', dataForProgressionGame, 'What number is missing in the progression?');
}
