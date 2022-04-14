import readlineSync from 'readline-sync';

export function gameGreeting(greetingForSpecificGame) {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n${greetingForSpecificGame}`);
  return playerName;
}

export function playerInput(question) {
  return readlineSync.question(`Question: ${question}\nYour answer: `);
}

export function resultAnnouncement(player, playerAnswer, answerAreCorrectFlag, correctAnswer) {
  if (answerAreCorrectFlag) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${player}!`);
  }
}
