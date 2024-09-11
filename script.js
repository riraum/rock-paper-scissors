console.log("Game initialized")

function getComputerChoice() {
  const selectionOptions = ['rock','paper','scissor'];
  const randomIndex = Math.floor(Math.random() *selectionOptions.length);
  return selectionOptions[randomIndex];
}

// function gethumanSelection() {
  // let choice = prompt("Enter either rock, paper or scissor!");
  // choice = choice.toLowerCase();
  // if (choice == "rock" || choice == "paper" || choice == "scissor") {
  //   return choice;
  // } else return "incorrect input";
// }

let humanScore = 0;
let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissor") ||
      (humanChoice == "scissor" && computerChoice == "rock")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      gameData.classList.add("gameData");
      gameData.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      resultDiv.appendChild(gameData);
      computerScore++;
      console.log(
        `Computer score: ${computerScore} \n\Human score: ${humanScore}`
      );
      gameData.classList.add("gameData");
      gameData.textContent = `Computer score: ${computerScore} \n\Human score: ${humanScore}`;
      resultDiv.appendChild(gameData);
    } else if (
      (humanChoice == "rock" && computerChoice == "scissor") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissor" && computerChoice == "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      gameData.classList.add("gameData");
      gameData.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      resultDiv.appendChild(gameData);
      humanScore++;
      console.log(
        `Computer score: ${computerScore} \n\Human score: ${humanScore}`
      );
      gameData.classList.add("gameData");
      gameData.textContent = `Computer score: ${computerScore} \n\Human score: ${humanScore}`;
      resultDiv.appendChild(gameData);
    } else if (humanChoice == computerChoice) {
      console.log("Tie! None gets a point");
      gameData.classList.add("gameData");
      gameData.textContent = "Tie! None gets a point";
      resultDiv.appendChild(gameData);
    } else {
      console.log("Error, combination not yet added");
      gameData.classList.add("gameData");
      gameData.textContent = "Error, combination not yet added";
      resultDiv.appendChild(gameData);
    }
  }
function playGame(humanButtonSelection) {
  playRound();
  const humanSelection = humanButtonSelection;
  const computerSelection = getComputerChoice();
  // Print choices
  console.log(`Computer chose ${computerSelection} \n\Human chose ${humanSelection}`);
  gameData.classList.add("gameData");
  gameData.textContent = `Computer chose ${computerSelection} \n\Human chose ${humanSelection}`;
  resultDiv.appendChild(gameData);

  playRound(humanSelection, computerSelection);
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      console.log("Human won the game, congratulations!");
      gameData.classList.add("gameData");
      gameData.textContent = "Human won the game, congratulations!";
      resultDiv.appendChild(gameData);
    }
    else if (computerScore > humanScore) {
      console.log("Computer won the game, better luck next time human!");
      gameData.classList.add("gameData");
      gameData.textContent =
        "Computer won the game, better luck next time human!";
      resultDiv.appendChild(gameData);
    }
    else {
      console.log("Computer won the game, better luck next time human!");
      gameData.classList.add("gameData");
      gameData.textContent = "It's a tie. Give it another go to get a winner!";
      resultDiv.appendChild(gameData);
    }
  }
}

const rockbtn = document.querySelector("#btn-rock");

function onRockClick(){
  playGame("rock");
}
const paperbtn = document.querySelector("#btn-paper");

function onPaperClick(){
  // console.log("Paper btn");
  playGame("paper");
}
const scissorsbtn = document.querySelector("#btn-scissors");

function onScissorsClick(){
  playGame("scissor");
}
const resultDiv = document.querySelector("#result");
const gameData = document.createElement("div");