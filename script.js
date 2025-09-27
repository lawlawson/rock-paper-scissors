let humanScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const resultsDiv = document.getElementById('results');

function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

function displayResults(
  humanSelection,
  computerSelection,
  roundResult,
  humanScore,
  computerScore
) {
  let winnerMsg = '';
  if (humanScore >= 5) {
    winnerMsg = '<strong>You win the game!</strong>';
  } else if (computerScore >= 5) {
    winnerMsg = '<strong>Computer wins the game!</strong>';
  }
  resultsDiv.innerHTML = `
    <p>You chose: ${humanSelection}</p>
    <p>Computer chose: ${computerSelection}</p>
    <p>${roundResult}</p>
    <p>Your Score: ${humanScore}</p>
    <p>Computer Score: ${computerScore}</p>
    ${winnerMsg}
  `;
}

function checkGameOver() {
  if (humanScore >= 5 || computerScore >= 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

function playRound(humanChoice, computerChoice) {
  let roundResult = '';
  if (humanChoice === 'Rock' && computerChoice === 'Paper') {
    roundResult = 'You lose! Paper beats Rock';
    computerScore++;
  } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
    roundResult = 'You win! Rock beats Scissors';
    humanScore++;
  } else if (humanChoice === 'Rock' && computerChoice === 'Rock') {
    roundResult = "It's a tie! Rock equals Rock";
  } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
    roundResult = 'You win! Paper beats Rock';
    humanScore++;
  } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
    roundResult = 'You lose! Scissors beats Paper';
    computerScore++;
  } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
    roundResult = 'You lose! Rock beats Scissors';
    computerScore++;
  } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
    roundResult = 'You win! Scissors beats Paper';
    humanScore++;
  } else if (humanChoice === 'Scissors' && computerChoice === 'Scissors') {
    roundResult = "It's a tie! Scissors equals Scissors";
  } else if (humanChoice === 'Paper' && computerChoice === 'Paper') {
    roundResult = "It's a tie! Paper equals Paper";
  }
  displayResults(
    humanChoice,
    computerChoice,
    roundResult,
    humanScore,
    computerScore
  );
  checkGameOver();
}

rockBtn.addEventListener('click', () => {
  const humanSelection = 'Rock';
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

paperBtn.addEventListener('click', () => {
  const humanSelection = 'Paper';
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});

scissorsBtn.addEventListener('click', () => {
  const humanSelection = 'Scissors';
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});
scissorsBtn.addEventListener('click', () => {
  const humanSelection = 'Scissors';
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
});
