console.log("Game initialized")
// Write logic to get computer choice
// Create function getComputerChoice
// Function should return randomly rock or paper or scissors
// Test that the function returns what's expected

// Refactor complete
function getComputerChoice() {
  const selectionOptions = ['rock','paper','scissor'];
  const randomIndex = Math.floor(Math.random() *selectionOptions.length);
  return selectionOptions[randomIndex];
}
// console.log(getComputerChoice());

// Write logic to get human choice
// Create function gethumanSelection
// Function should return valid choice based on user input
// Test that the function returns what's expected

// Refactor to remove else if statements
// function gethumanSelection() {
  // let choice = prompt("Enter either rock, paper or scissor!");
  // choice = choice.toLowerCase();
  // if (choice == "rock" || choice == "paper" || choice == "scissor") {
  //   return choice;
  // } else return "incorrect input";
// }
// debug log
// console.log(gethumanSelection());

// Add logic to play an entire game
// Game will be 5 rounds, write function playGame that calls playRound, keeps scores and declares winner.
// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.

//     Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
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
      // resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
      console.log(
        `Computer score: ${computerScore} \n\Human score: ${humanScore}`
      );
      gameData.classList.add("gameData");
      gameData.textContent = `Computer score: ${computerScore} \n\Human score: ${humanScore}`;
      resultDiv.appendChild(gameData);
      // resultDiv.textContent = `Computer score: ${computerScore} \n\Human score: ${humanScore}`;
    } else if (
      (humanChoice == "rock" && computerChoice == "scissor") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissor" && computerChoice == "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      gameData.classList.add("gameData");
      gameData.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      resultDiv.appendChild(gameData);
      // resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
      console.log(
        `Computer score: ${computerScore} \n\Human score: ${humanScore}`
      );
      gameData.classList.add("gameData");
      gameData.textContent = `Computer score: ${computerScore} \n\Human score: ${humanScore}`;
      resultDiv.appendChild(gameData);
      // resultDiv.textContent = `Computer score: ${computerScore} \n\Human score: ${humanScore}`;
    } else if (humanChoice == computerChoice) {
      console.log("Tie! None gets a point");
      gameData.classList.add("gameData");
      gameData.textContent = "Tie! None gets a point";
      resultDiv.appendChild(gameData);
      // resultDiv.textContent = "Tie! None gets a point";
    } else {
      console.log("Error, combination not yet added");
      gameData.classList.add("gameData");
      gameData.textContent = "Error, combination not yet added";
      resultDiv.appendChild(gameData);
      // resultDiv.textContent = "Error, combination not yet added"
    }
  }
function playGame(humanButtonSelection) {
  // Declare score values
  // let humanScore = 0;
  // let computerScore = 0;
  // Loop function, run it 5 times
  // for (let step = 0; step <5; step++) 
  {
  // Function that has the main game logic
  // Play game
  playRound();
  const humanSelection = humanButtonSelection;
  const computerSelection = getComputerChoice();
  // Print choices
  console.log(`Computer chose ${computerSelection} \n\Human chose ${humanSelection}`);
  gameData.classList.add("gameData");
  gameData.textContent = `Computer chose ${computerSelection} \n\Human chose ${humanSelection}`;
  resultDiv.appendChild(gameData);
  // resultDiv.textContent = `Computer chose ${computerSelection} \n\Human chose ${humanSelection}`;
  playRound(humanSelection, computerSelection);
  }
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      console.log("Human won the game, congratulations!");
      gameData.classList.add("gameData");
      gameData.textContent = "Human won the game, congratulations!";
      resultDiv.appendChild(gameData);
      // resultDiv.textContent = "Human won the game, congratulations!";
    }
    else if (computerScore > humanScore) {
      console.log("Computer won the game, better luck next time human!");
      gameData.classList.add("gameData");
      gameData.textContent =
        "Computer won the game, better luck next time human!";
      resultDiv.appendChild(gameData);
      // resultDiv.textContent = "Computer won the game, better luck next time human!";
    }
    else {
      console.log("Computer won the game, better luck next time human!");
      gameData.classList.add("gameData");
      gameData.textContent = "It's a tie. Give it another go to get a winner!";
      resultDiv.appendChild(gameData);
      // resultDiv.textContent = "It's a tie. Give it another go to get a winner!";
    }
  }
}
// playGame(humanButtonChoice);
// console.log("Game end");
const rockbtn = document.querySelector("#btn-rock");
function onRockClick(){
  console.log("Rock btn");
  playGame("rock");
}
// rockbtn.addEventListener("click", () => {
//   console.log("Rock btn");
  // playRound("rock");
// })
const paperbtn = document.querySelector("#btn-paper");
function onPaperClick(){
  console.log("Paper btn");
  playGame("paper");
}
const scissorsbtn = document.querySelector("#btn-scissors");
function onScissorsClick(){
  console.log("Scissors btn");
  playGame("scissor");
}
const resultDiv = document.querySelector("#result");
const gameData = document.createElement("div");
// gameData.classList.add("gameData");
// gameData.textContent = "Test"
// resultDiv.appendChild(gameData);
// resultDiv.textContent = "Test";