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

function defineWinner() {
    if (playerSelection === computerSelection) {
        document.getElementById("result").innerHTML = "Tie!";
      } else if (
        (getPlayerSelection === "rock" && getComputerChoice === "scissors") ||
        (getPlayerSelection === "paper" && getComputerChoice === "rock") ||
        (getPlayerSelection === "scissors" && getComputerChoice === "paper")
      ) {
       console.log("You win.")
      } else {
       console.log("You lose.")
      }
}

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let computerSelection = choices[randomIndex];
  return computerSelection;
}
console.log(getComputerChoice());

function getPlayerSelection() {
  var playerSelection = prompt("Pick 'Rock', 'Paper', or 'Scissors'");
  // checkSelection();
  return playerSelection;
}
console.log(getPlayerSelection());

function singleRound(playerSelection, computerSelection) {}
