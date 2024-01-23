// Computer Choice
function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Win Conditions
function determineRoundWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  const winConditions = [
    ['rock', 'scissors'],
    ['paper', 'rock'],
    ['scissors', 'paper'],
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
function playGame() {
  const scores = { player: 0, computer: 0 };

  for (let round = 0; round < 5; round++) {
    const userChoice = prompt('Enter Rock, paper, or Scissors:');
    const computerChoice = getRandomChoice();
    const roundResult = determineRoundWinner(userChoice, computerChoice);

    console.log(roundResult);
    updateScores(roundResult, scores);
  }

  const gameResult = announceGameResult(scores);
  alert(gameResult);
}

function updateScores(roundResult, scores) {
  if (roundResult.includes('Win')) {
    scores.player++;
  } else if (roundResult.includes('Lose')) {
    scores.computer++;
  }
}

// Announce Game Result
function announceGameResult(scores) {
  if (scores.player > scores.computer) {
    return 'You win the game!';
  } else if (scores.player < scores.computer) {
    return 'You lose the game. :(';
  } else {
    return "It's a tie!";
  }
}

playGame();
