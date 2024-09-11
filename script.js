console.log("Game initialized");
const resultDiv = document.querySelector("#result");
const gameMessage = document.createElement("div");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const selectionOptions = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * selectionOptions.length);
  return selectionOptions[randomIndex];
}

// function gethumanSelection() {
// let choice = prompt("Enter either rock, paper or scissor!");
// choice = choice.toLowerCase();
// if (choice == "rock" || choice == "paper" || choice == "scissor") {
//   return choice;
// } else return "incorrect input";
// }

function logMessage(message) {
  console.log(message);
  gameMessage.textContent = message;
  resultDiv.appendChild(gameMessage);
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "rock")
  ) {
    logMessage(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    logMessage(
      `Computer score: ${computerScore} \n\Human score: ${humanScore}`
    );
  } else if (
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissor" && computerChoice == "paper")
  ) {
    logMessage(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    logMessage(
      `Computer score: ${computerScore} \n\Human score: ${humanScore}`
    );
  } else if (humanChoice == computerChoice) {
    logMessage("Tie! None gets a point");
  } else {
    logMessage("Error, combination not yet added");
  }
}

function playGame(humanButtonSelection) {
  playRound();

  const humanSelection = humanButtonSelection;
  const computerSelection = getComputerChoice();

  logMessage(
    `Computer chose ${computerSelection} \n\Human chose ${humanSelection}`
  );

  playRound(humanSelection, computerSelection);
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      logMessage("Human won the game, congratulations!");
    } else if (computerScore > humanScore) {
      logMessage("Computer won the game, better luck next time human!");
    } else {
      logMessage("It's a tie. Give it another go to get a winner!");
    }
  }
}
