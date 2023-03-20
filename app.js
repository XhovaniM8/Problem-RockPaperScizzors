// Functions: 
//  getComputerChoice()
//  singleRound()
//  playerSelection()
//  computerSelection()
//  playRound()
//  game()
//
// HelperFunctions:
// checkSelection:

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  console.log(getComputerChoice());
  
  
  function getPlayerSelection() {
    var playerSelection= prompt("Pick 'Rock', 'Paper', or 'Scissors'");
    // checkSelection();
    return playerSelection;
  }
  console.log(getPlayerSelection());