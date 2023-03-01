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

function playRound(playerSelection, computerSelection) {
  const result = checkRoundResult(playerSelection, computerSelection);

  playerSelection = capitalize(playerSelection);
  computerSelection = capitalize(computerSelection);

  if (result === 'tie') {
    console.log("It's a tie!");
  } else if (result === 'player') {
    console.log(
      `You win the round! ${playerSelection} beats ${computerSelection}.`
    );
  } else {
    console.log(
      `You lose the round! ${computerSelection} beats ${playerSelection}.`
    );
  }
}

function checkWinner() {
  if (score.player === score.computer) {
    console.log(`We have a tie!`);
  } else if (score.player > score.computer) {
    console.log(`You are the winner!`);
  } else {
    console.log(`Computer is the winner!`);
  }
}

function checkScore() {
  const finalScore = `${score.player} : ${score.computer}`;

  console.log(finalScore);
}

function updateScore(winner) {
  if (winner === 'player') {
    score.player++;
  } else if (winner === 'computer') {
    score.computer++;
  }
}

function game() {
  for (let round = 0; round < 5; round++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    playRound(playerSelection, computerSelection);

    const result = checkRoundResult(playerSelection, computerSelection);

    updateScore(result);
  }

  checkScore();
  checkWinner();
}

game();
