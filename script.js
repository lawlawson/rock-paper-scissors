let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoice = prompt('Make your choice');
  return humanChoice;
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'Rock' && computerChoice === 'Paper') {
    console.log('You lose! Paper beats Rock');
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);
