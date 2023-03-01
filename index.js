const possibleChoices = ['rock', 'paper', 'scissors'];
const score = {
  player: 0,
  computer: 0,
};

function getComputerChoice() {
  const randomNumberBetween0And2 = Math.floor(
    Math.random() * possibleChoices.length
  );
  const computerChoice = possibleChoices[randomNumberBetween0And2];

  return computerChoice;
}

function getPlayerChoice() {
  let validated = false;

  while (!validated) {
    const playerChoice = prompt('Rock, Paper, Scissors?')?.toLowerCase();

    if (!playerChoice || !possibleChoices.includes(playerChoice)) {
      continue;
    }

    validated = true;
    return playerChoice;
  }
}
