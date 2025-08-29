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
  } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
    console.log('You win! Rock beats Scissors');
    humanScore++;
  } else if (humanChoice === 'Rock' && computerChoice === 'Rock') {
    console.log("It's a tie! Rock equals Rock");
  } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
    console.log('You win! Paper beats Rock');
    humanScore++;
  } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
    console.log('You lose! Scissors beats Paper');
    computerScore++;
  } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
    console.log('You lose! Rock beats Scissors');
    computerScore++;
  } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
    console.log('You win! Scissors beats Paper');
    humanScore++;
  } else if (humanChoice === 'Scissors' && computerChoice === 'Scissors') {
    console.log("It's a tie! Scissors equals Scissors");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);
