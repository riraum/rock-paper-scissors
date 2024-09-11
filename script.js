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
      let message = `You lose! ${computerChoice} beats ${humanChoice}`;
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
      computerScore++;
      message = `Computer score: ${computerScore} \n\Human score: ${humanScore}`;
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
    } else if (
      (humanChoice == "rock" && computerChoice == "scissor") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissor" && computerChoice == "paper")
    ) {
      message = `You win! ${humanChoice} beats ${computerChoice}`;
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
      humanScore++;
      message = `Computer score: ${computerScore} \n\Human score: ${humanScore}`;
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
    } else if (humanChoice == computerChoice) {
      message = "Tie! None gets a point";
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
    } else {
      message = "Error, combination not yet added";
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
    }
  }
function playGame(humanButtonSelection) {
  playRound();

  const humanSelection = humanButtonSelection;
  const computerSelection = getComputerChoice();

  let message = `Computer chose ${computerSelection} \n\Human chose ${humanSelection}`;
  console.log(message);
  gameData.classList.add("gameData");
  gameData.textContent = message;
  resultDiv.appendChild(gameData);

  playRound(humanSelection, computerSelection);
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      message = "Human won the game, congratulations!";
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
    }
    else if (computerScore > humanScore) {
      message = "Computer won the game, better luck next time human!";
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
    }
    else {
      message = "It's a tie. Give it another go to get a winner!";
      console.log(message);
      gameData.classList.add("gameData");
      gameData.textContent = message;
      resultDiv.appendChild(gameData);
    }
  }
}


function onRockClick(){
  playGame("rock");
}

function onPaperClick(){
  // console.log("Paper btn");
  playGame("paper");
}

function onScissorsClick(){
  playGame("scissor");
}
const resultDiv = document.querySelector("#result");
const gameData = document.createElement("div");