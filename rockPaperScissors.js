// Computer Choice
function getRandomChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Win Conditions
function determineRoundWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  const winConditions = [
    ["rock", "scissors"],
    ["paper", "rock"],
    ["scissors", "paper"],
  ];

  if (
    winConditions.some(
      ([player, computer]) =>
        player === playerSelection && computer === computerSelection
    )
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    winConditions.some(
      ([player, computer]) =>
        player === computerSelection && computer === playerSelection
    )
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `It's a Tie! Both chose ${playerSelection}`;
  }
}

// Score
function playRound(playerSelection) {
  const computerSelection = getRandomChoice();
  const roundResult = determineRoundWinner(playerSelection, computerSelection);

  document.getElementById("resultDisplay").textContent = roundResult;
  updateScores(roundResult);

  if (scores.player === 5 || scores.computer === 5) {
    announceGameResult();
  }
}

function updateScores(roundResult) {
  if (roundResult.includes("Win")) {
    scores.player++;
  } else if (roundResult.includes("Lose")) {
    scores.computer++;
  }

  document.getElementById("playerScore").textContent = scores.player;
  document.getElementById("computerScore").textContent = scores.computer;
}

// Announce Game Result
function announceGameResult() {
  let resultMessage = "";
  if (scores.player > scores.computer) {
    resultMessage = "Congratulations! You are the overall winner!";
  } else if (scores.player < scores.computer) {
    resultMessage = "Sorry, you didn't win the overall game.";
  } else {
    resultMessage = "It's a tie!";
  }

  document.getElementById("resultDisplay").textContent = resultMessage;
  document.getElementById("gameWinnerDisplay").textContent = resultMessage;
  document.getElementById("restartBtn").style.display = "block"; // Show restart button
}

// Function to reset the game
function resetGame() {
  scores.player = 0;
  scores.computer = 0;
  document.getElementById("playerScore").textContent = scores.player;
  document.getElementById("computerScore").textContent = scores.computer;
  document.getElementById("resultDisplay").textContent = "";
  document.getElementById("gameWinnerDisplay").textContent = "";
  document.getElementById("restartBtn").style.display = "none"; // Hide restart button
}

// Initial scores
const scores = { player: 0, computer: 0 };

// Event listeners for buttons
document.getElementById("rockBtn").addEventListener("click", function () {
  playRound("rock");
});

document.getElementById("paperBtn").addEventListener("click", function () {
  playRound("paper");
});

document.getElementById("scissorsBtn").addEventListener("click", function () {
  playRound("scissors");
});

document.getElementById("restartBtn").addEventListener("click", function () {
  resetGame();
});
