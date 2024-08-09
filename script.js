console.log("Hello World!")
// Write logic to get computer choice
// Create function getComputerChoice
// Function should return randomly rock or paper or scissors
// Test that the function returns what's expected

// Refactor complete
function getComputerChoice() {
  const array = ['rock','paper','scissor'];
  const randomIndex = Math.floor(Math.random() *array.length);
  return array[randomIndex];
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

// Declare player score variables
// Create new variables humanScore and computerScore in the global scope
// Set them up with the initial value of 0

// let humanScore = 0;
// let computerScore = 0;

// Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// 1. Create a new function named playRound.
// 2. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// 3. Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// 4. Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// 5. Increment the humanScore or computerScore variable based on the round winner.

// Function with complete win, lose and tie logic
// function playRound(humanChoice, computerChoice) {
//   // humanChoice.toLowerCase();
//   // computerChoice.toLowerCase();
//   if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissor')) {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//     computerScore = +1;
//     console.log(`Computer score is ${computerScore}`);
//   } else if ((humanChoice == 'rock' && computerChoice == 'scissor') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissor' && computerChoice == 'paper')) {
//     console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//     humanScore = +1;
//     console.log(`Human score is ${humanScore}`);
//   } else if (humanChoice == computerChoice) {
//     console.log("Tie! None gets a point");
//   }
//   else console.log("Error, combination not yet added");
// }

// // Play game
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// // Print computer choice
// console.log(`Computer chose ${computerSelection}`);
// // Print human choice
// console.log(`Human chose ${humanSelection}`);
// playRound(humanSelection, computerSelection);

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
  for (let step = 0; step <5; step++) {
  // Function that has the main game logic
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice == "rock" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "scissor")
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
  // Print computer choice
  console.log(`Computer chose ${computerSelection}`);
  // Print human choice
  console.log(`Human chose ${humanSelection}`);
  playRound(humanSelection, computerSelection);
  }
}
playGame();
console.log("Game end");
