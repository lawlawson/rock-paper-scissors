let humanScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

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
  } else if (humanChoice === 'Paper' && computerChoice === 'Paper') {
    console.log("It's a tie! Paper equals Paper");
  }
}

rockBtn.addEventListener('click', () => {
  const humanSelection = 'Rock';
  const computerSelection = getComputerChoice();
  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  playRound(humanSelection, computerSelection);
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
});

paperBtn.addEventListener('click', () => {
  const humanSelection = 'Paper';
  const computerSelection = getComputerChoice();
  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  playRound(humanSelection, computerSelection);
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
});

scissorsBtn.addEventListener('click', () => {
  const humanSelection = 'Scissors';
  const computerSelection = getComputerChoice();
  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  playRound(humanSelection, computerSelection);
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
});
