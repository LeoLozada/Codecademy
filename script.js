et humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  let difHumanGuess = Math.abs(targetNumber - humanGuess);
  let difComputerGuess = Math.abs(targetNumber - computerGuess);
  if (difHumanGuess <= difComputerGuess) {
    return true;
  } else {
    return false;
  }
} ;

let winner =  compareGuesses()  ? 'human' : 'computer';

const updateScore = winner => {
  if (winner === 'human') {
    return humanScore += 1;
  } else {
    return computerScore += 1;
  }
};

const advanceRound = () => {
  return currentRoundNumber += 1;
};