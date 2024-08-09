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
  if (choice == "rock" || choice == "paper" || choice == "scissor") {
    return choice;
  } else return "Incorrect answer";
}
// debug log
// console.log(getHumanChoice());

// Declare player score variables
// Create new variables humanScore and computerScore in the global scope
// Set them up with the initial value of 0

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// 1. Create a new function named playRound.
// 2. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// 3. Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// 4. Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// 5. Increment the humanScore or computerScore variable based on the round winner.

// Function with complete win, lose and tie logic
function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  computerChoice.toLowerCase();
  if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissor')) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore = +1;
    console.log(`Computer score is ${computerScore}`);
  } else if ((humanChoice == 'rock' && computerChoice == 'scissor') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissor' && computerChoice == 'paper')) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore = +1;
    console.log(`Human score is ${humanScore}`);
  } else if (humanChoice == computerChoice) {
    console.log("Tie! None gets a point");
  }
  else console.log("Not yet added");
}

// Play game
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
// Print computer choice
console.log(`Computer chose ${computerSelection}`);
// Print human choice
console.log(`Human chose ${humanSelection}`);
playRound(humanSelection, computerSelection);



