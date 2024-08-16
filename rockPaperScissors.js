// Define las elecciones posibles
const choices = ["rock", "paper", "scissors"];

// Inicializa las puntuaciones del jugador y la computadora
const scores = { player: 0, computer: 0 };

/**
 * Función para obtener una elección aleatoria de la computadora.
 * @returns {string} - La elección de la computadora (rock, paper, scissors).
 */
function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

/**
 * Determina el ganador de la ronda basado en las elecciones del jugador y la computadora.
 * @param {string} playerChoice - La elección del jugador.
 * @param {string} computerChoice - La elección de la computadora.
 * @returns {string} - Resultado de la ronda.
 */
function determineRoundWinner(playerChoice, computerChoice) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerChoice === computerChoice) {
    return `It's a Tie! Both chose ${playerChoice}`;
  } else if (winConditions[playerChoice] === computerChoice) {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
}

/**
 * Actualiza la puntuación y verifica si el juego ha terminado.
 * @param {string} result - Resultado de la ronda.
 */
function updateScores(result) {
  if (result.includes("Win")) {
    scores.player++;
  } else if (result.includes("Lose")) {
    scores.computer++;
  }

  document.getElementById("playerScore").textContent = scores.player;
  document.getElementById("computerScore").textContent = scores.computer;

  if (scores.player === 5 || scores.computer === 5) {
    announceGameResult();
    disableGameButtons(); // Deshabilita los botones cuando el juego termina
  }
}

/**
 * Anuncia el resultado final del juego.
 */
function announceGameResult() {
  let resultMessage =
    scores.player > scores.computer
      ? "Congratulations! You are the overall winner!"
      : "Sorry, you didn't win the overall game.";

  document.getElementById("resultDisplay").textContent = resultMessage;
  document.getElementById("gameWinnerDisplay").textContent = resultMessage;
  document.getElementById("restartBtn").style.display = "block";
}

/**
 * Deshabilita los botones de juego para evitar más jugadas.
 */
function disableGameButtons() {
  document.getElementById("rockBtn").disabled = true;
  document.getElementById("paperBtn").disabled = true;
  document.getElementById("scissorsBtn").disabled = true;
}

/**
 * Habilita los botones de juego para permitir nuevas jugadas.
 */
function enableGameButtons() {
  document.getElementById("rockBtn").disabled = false;
  document.getElementById("paperBtn").disabled = false;
  document.getElementById("scissorsBtn").disabled = false;
}

/**
 * Reinicia el juego y restablece las puntuaciones.
 */
function resetGame() {
  scores.player = 0;
  scores.computer = 0;
  document.getElementById("playerScore").textContent = scores.player;
  document.getElementById("computerScore").textContent = scores.computer;
  document.getElementById("resultDisplay").textContent = "";
  document.getElementById("gameWinnerDisplay").textContent = "";
  document.getElementById("restartBtn").style.display = "none";
  enableGameButtons(); // Vuelve a habilitar los botones
}

/**
 * Maneja la selección del jugador y ejecuta una ronda.
 * @param {string} playerChoice - La elección del jugador.
 */
function playRound(playerChoice) {
  if (scores.player >= 5 || scores.computer >= 5) {
    return; // No permite jugar más si el juego ha terminado
  }

  const computerChoice = getRandomChoice();
  const result = determineRoundWinner(playerChoice, computerChoice);

  document.getElementById("resultDisplay").textContent = result;
  updateScores(result);
}

// Añade event listeners a los botones de elección
document
  .getElementById("rockBtn")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paperBtn")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissorsBtn")
  .addEventListener("click", () => playRound("scissors"));

// Añade event listener al botón de reinicio
document.getElementById("restartBtn").addEventListener("click", resetGame);
