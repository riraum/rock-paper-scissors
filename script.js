console.log("Hello World!")
// Write logic to get computer choice

// Create function getComputerChoice
// Function should return randomly rock or paper or scissors
// Test that the function returns what's expected

// Create function getComputerChoice
// Assign rock, paper and scissors each to a number of 1-3
// Create variable that returns a randomized integer of 1-3
// Print return to console

function getComputerChoice(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
  // choice = Math.floor(Math.random() * max);
  // return choice;
const choice = ['rock','paper','scissor'];
const randomChoice = getComputerChoice(choice);

console.log(randomChoice);

// Write logic to get human choice

// Create function getHumanChoice
// Function should return valid choice based on user input
// Test that the function returns what's expected

// Declare player score variables

// Create new variables humanScore and computerScore in the global scope
// Set them up with the initial value of 0

// Write the logic to play a single round

// Create function playRound

