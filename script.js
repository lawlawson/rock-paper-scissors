function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt('Make your choice');
  return humanChoice;
}

console.log(getHumanChoice());
