const possibleChoices = ['rock', 'paper', 'scissors'];
const score = {
  player: 0,
  computer: 0,
};

function capitalize(string) {
  const firstLetterInUpperCase = string[0].toUpperCase();
  const stringWithoutFirstLetter = string.slice(1, string.length);
  const capitalizedString = firstLetterInUpperCase + stringWithoutFirstLetter;

  return capitalizedString;
}

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

function checkRoundResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}
