// Functions:
//  getComputerChoice()
//  singleRound()
//  playerSelection()
//  computerSelection()
//  playRound()
//  game()
//
// HelperFunctions:
// checkSelection()
// makeLowercase()

function makeCaseInsensitive(inputString) {
  return inputString.toLowerCase();
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let computerSelection = choices[randomIndex];
  makeCaseInsensitive(computerSelection);
  return computerSelection;
}

console.log(getComputerChoice());

function getPlayerSelection() {
  var playerSelection = prompt("Pick 'Rock', 'Paper', or 'Scissors'");
  makeCaseInsensitive(playerSelection);
  return playerSelection;
}

console.log(getPlayerSelection());

function defineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("Player wins");
  } else 
    console.log("Computer wins");
}

defineWinner();

function singleRound(playerSelection, computerSelection) {
  playerSelection = getPlayerSelection();
  computerSelection = getComputerChoice();
  defineWinner(playerSelection, computerSelection);
}

function game(){
  for (let i = 0; i < 5; i++) {
    singleRound();
  }
}

game();
