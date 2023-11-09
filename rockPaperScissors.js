let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  if ((computerSelection = playerSelection)) {
    return prompt("It's a tie, there is no winner!");
  }
}
