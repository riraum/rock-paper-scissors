console.log("Hello World!")
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
// Create function getHumanChoice
// Function should return valid choice based on user input
// Test that the function returns what's expected

// Refactor to remove else if statements
function getHumanChoice() {
  let choice = prompt("Enter either rock, paper or scissor!");
  choice = choice.toLowerCase();
  if (choice == "rock" || choice == "paper" || choice == "scissor") {
    return choice;
  } else return "incorrect input";
}
// debug log
// console.log(getHumanChoice());

// Add logic to play an entire game
// Game will be 5 rounds, write function playGame that calls playRound, keeps scores and declares winner.
// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.

//     Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.

function playGame() {
  // Declare score values
  let humanScore = 0;
  let computerScore = 0;
  // Loop function, run it 5 times
  // for (let step = 0; step <5; step++) 
  {
  // Function that has the main game logic
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissor") || 
      (humanChoice == "scissor" && computerChoice == "rock")
    ) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      console.log(`Computer score: ${computerScore} \n\Human score: ${humanScore}`);
    } else if (
      (humanChoice == "rock" && computerChoice == "scissor") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissor" && computerChoice == "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      console.log(`Computer score: ${computerScore} \n\Human score: ${humanScore}`);
    } else if (humanChoice == computerChoice) {
      console.log("Tie! None gets a point");
    } else console.log("Error, combination not yet added");
  }
  // Play game
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  // Print choices
  console.log(`Computer chose ${computerSelection} \n\Human chose ${humanSelection}`);
  playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore)
    console.log("Human won the game, congratulations!");
  else if (computerScore > humanScore)
    console.log("Computer won the game, better luck next time human!");
  else console.log("It's a tie. Give it another go to get a winner!");
}
playGame();
// console.log("Game end");
const rockbtn = document.querySelector("#btn-rock");
const paperbtn = document.querySelector("#btn-paper");
const scissorsbtn = document.querySelector("#btn-scissors");