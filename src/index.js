import readlineSync from 'readline-sync';

function gameGreeting(greetingForSpecificGame) {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n${greetingForSpecificGame}`);
  return playerName;
}

function playerInput(question) {
  return readlineSync.question(`Question: ${question}\nYour answer: `);
}

function resultAnnouncement(player, playerAnswer, answerAreCorrectFlag, correctAnswer) {
  if (answerAreCorrectFlag) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${player}!`);
  }
}

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
