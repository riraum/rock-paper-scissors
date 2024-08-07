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

// Declare player score variables

// Create new variables humanScore and computerScore in the global scope
// Set them up with the initial value of 0

// Write the logic to play a single round

// Create function playRound

