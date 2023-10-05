# Rock Paper Scissors Game

## Introduction

This project is a simple implementation of the classic "Rock Paper Scissors" game in JavaScript. The game provides functions for single rounds of play and allows the player to compete against the computer.

## Functions

The following functions are available in this project:

### Game Functions

- `singleRound(playerSelection, computerSelection)`: Plays a single round of Rock Paper Scissors.
- `game()`: Initiates a game by playing five rounds in a loop.

### Helper Functions

- `getComputerChoice()`: Generates a random choice for the computer (rock, paper, or scissors).
- `getPlayerSelection()`: Prompts the player to make a selection (rock, paper, or scissors).
- `defineWinner(playerSelection, computerSelection)`: Determines the winner of a round based on player and computer selections.
- `makeCaseInsensitive(inputString)`: Converts an input string to lowercase for case-insensitive comparison.

## Usage

To play the game, call the `game()` function. It will initiate a game by playing five rounds in a loop. Each round involves the player making a selection, and the computer generating a random choice. The winner of each round is determined by the `defineWinner()` function, and the results are displayed in the console.

## Example

```javascript
game();
