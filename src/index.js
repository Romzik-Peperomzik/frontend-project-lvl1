import readlineSync from 'readline-sync';

function gameGreeting(greetingForSpecificGame) {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n${greetingForSpecificGame}`);
  return playerName;
}

function playerInput(question) {
  return readlineSync.question(`Question: ${question}\nYour answer: `);
}

function resultWrongAnswerAnnouncement(player, playerAnswer, correctAnswer) {
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${player}!`);
}

export default function gameEventLoop(gameFunction, greetingText) {
  const player = gameGreeting(greetingText);
  const maxRounds = 3;

  for (let round = 0; round < maxRounds; round += 1) {
    const [dataToDisplay, expectedAnswer] = gameFunction();
    const playerAnswer = playerInput(dataToDisplay);

    if (playerAnswer !== expectedAnswer) {
      resultWrongAnswerAnnouncement(player, playerAnswer, expectedAnswer);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${player}!`);
}
