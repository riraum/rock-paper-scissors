console.log("Hello World!")
// Write logic to get computer choice

// Create function getComputerChoice
// Function should return randomly rock or paper or scissors
// Test that the function returns what's expected

// Create function getComputerChoice
// Assign rock, paper and scissors each to a number of 1-3
// Create variable that returns a randomized integer of 1-3
// Print return to console

// Working code, but not contained in the function only
// function getComputerChoice(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }
// const choice = ["rock", "paper", "scissor"];
// const randomChoice = getComputerChoice(choice);

// console.log(randomChoice);

// Returning random value
// function getComputerChoice() {
//   const array = ['rock','paper','scissor'];
//   return Math.floor(Math.random() * array.length);
// }
// console.log(getComputerChoice());

// Refactor complete
function getComputerChoice() {
  const array = ['rock','paper','scissor'];
  const randomIndex = Math.floor(Math.random() *array.length);
  return array[randomIndex];
}
console.log(getComputerChoice());

// Write logic to get human choice

// Create function getHumanChoice
// Function should return valid choice based on user input
// Test that the function returns what's expected

// Create function getHumanChoice
// Prompt user for input of rock, paper or scissors
// If input is any of those, return the value
// If not return error

// Function returns input
// function getHumanChoice() {
//   choice = prompt("Write and select either rock, paper or scissor!");
//   return choice;
// }
// console.log(getHumanChoice());

// Function returns correct input or error
// function getHumanChoice() {
//   let choice = prompt("Write and select either rock, paper or scissor!");
//     if (choice == 'rock') return choice;
//        else if (choice == 'paper') return choice;
//        else if (choice == 'rock') return choice;
//        else if (choice == 'scissor') return choice;
//     else return "Incorrect answer";
// }
// console.log(getHumanChoice());

// Refactor to remove else if statements
function getHumanChoice() {
  let choice = prompt("Enter either rock, paper or scissor!");
  if (choice == "rock" || choice == "paper" || choice == "scissor") {
    return choice;
  } else return "Incorrect answer";
}
console.log(getHumanChoice());

// Declare player score variables

// Create new variables humanScore and computerScore in the global scope
// Set them up with the initial value of 0

// Create two variables of humanScore and computerScore 
// Set initial value of 0
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// 1. Create a new function named playRound.
// 2. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// 3. Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// 4. Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// 5. Increment the humanScore or computerScore variable based on the round winner.

