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
