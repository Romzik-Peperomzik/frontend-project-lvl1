import readlineSync from 'readline-sync';

function greetPlayer(greetingForSpecificGame) {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n${greetingForSpecificGame}`);
  return playerName;
}

function getPlayerInput(question) {
  return readlineSync.question(`Question: ${question}\nYour answer: `);
}

function displayWrongResult(player, playerAnswer, correctAnswer) {
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${player}!`);
}

export default function startGameLoop(runGameFunction, greetingText) {
  const player = greetPlayer(greetingText);
  const maxRound = 3;

  for (let round = 0; round < maxRound; round += 1) {
    const [dataToDisplay, expectedAnswer] = runGameFunction();
    const playerAnswer = getPlayerInput(dataToDisplay);

    if (playerAnswer !== expectedAnswer) {
      displayWrongResult(player, playerAnswer, expectedAnswer);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${player}!`);
}
