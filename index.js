const choiceButtons = document.querySelector('.choices');
const restartButton = document.querySelector('.button-restart');
const roundResultDiv = document.querySelector('.round-result');
const finalResultDiv = document.querySelector('.final-result');
const scoreDiv = document.querySelector('.score');
const title = document.querySelector('.title');

const possibleChoices = ['rock', 'paper', 'scissors'];
const score = {
  player: 0,
  computer: 0,
};
let rounds = 0;

function getComputerChoice() {
  const randomNumberBetween0And2 = Math.floor(
    Math.random() * possibleChoices.length
  );
  const computerChoice = possibleChoices[randomNumberBetween0And2];

  return computerChoice;
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

  if (result === 'tie') {
    roundResultDiv.textContent = "It's a tie!";
  } else if (result === 'player') {
    roundResultDiv.textContent = `You win the round! ${playerSelection} beats ${computerSelection}.`;
  } else {
    roundResultDiv.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}.`;
  }
}

function checkWinner() {
  if (score.player === score.computer) {
    finalResultDiv.textContent = `We have a tie!`;
  } else if (score.player > score.computer) {
    finalResultDiv.textContent = `You are the winner!`;
  } else {
    finalResultDiv.textContent = `Computer is the winner!`;
  }
}

function checkScore() {
  scoreDiv.textContent = `${score.player} : ${score.computer}`;
}

function updateScore(winner) {
  if (winner === 'player') {
    score.player++;
  } else if (winner === 'computer') {
    score.computer++;
  }
}

function handlePlayRound(event) {
  if (rounds < 5) {
    const computerSelection = getComputerChoice();
    const playerSelection = event.target.dataset.choice;

    playRound(playerSelection, computerSelection);

    const result = checkRoundResult(playerSelection, computerSelection);

    updateScore(result);
    checkScore();

    rounds++;
  }

  if (rounds === 5) {
    checkWinner();

    setTimeout(() => {
      title.textContent = 'The game is over!';
      choiceButtons.classList.add('hide');
      roundResultDiv.classList.add('hide');
      finalResultDiv.classList.remove('hide');
      restartButton.classList.remove('hide');
    }, 2000);
  }
}

function handleRestartGame() {
  title.textContent = "Let's play rock, paper, scissors?";
  choiceButtons.classList.remove('hide');
  roundResultDiv.classList.remove('hide');
  finalResultDiv.classList.add('hide');
  restartButton.classList.add('hide');

  score.player = 0;
  score.computer = 0;

  rounds = 0;

  roundResultDiv.textContent = '';
  scoreDiv.textContent = '0 : 0';
}

function game() {
  checkScore();
  choiceButtons.addEventListener('click', handlePlayRound);
  restartButton.addEventListener('click', handleRestartGame);
}

game();
