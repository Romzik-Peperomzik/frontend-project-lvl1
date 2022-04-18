import readlineSync from 'readline-sync';

export default function startGameLoop(runGameFunction, greetingText) {
  const maxRound = 3;
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n${greetingText}`);

  for (let round = 0; round < maxRound; round += 1) {
    const [question, expectedAnswer] = runGameFunction();
    const playerAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (playerAnswer !== expectedAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
}
