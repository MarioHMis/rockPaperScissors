function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `It a Tie! Both chose ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const userChoice = prompt("Enter Rock, paper, or Scissors:");
    const computerChoice = getComputerChoice();
    const roundResult = playRound(userChoice, computerChoice);

    console.log(roundResult);
    if (roundResult.includes("Win")) {
      playerScore++;
    } else if (roundResult.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game. :(");
  } else {
    console.log("It's a tie!");
  }
}

game();
