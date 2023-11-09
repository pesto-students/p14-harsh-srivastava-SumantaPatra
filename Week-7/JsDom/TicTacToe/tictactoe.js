let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
  MORE_MOVES_LEFT: 1,
  HUMAN_WINS: 2,
  COMPUTER_WINS: 3,
  DRAW_GAME: 4,
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // Setup the click event for the "New game" button
  const newBtn = document.getElementById("newGameButton");
  newBtn.addEventListener("click", newGame);

  // Create click-event handlers for each game board button
  const buttons = getGameBoardButtons();
  for (let button of buttons) {
    button.addEventListener("click", function () {
      boardButtonClicked(button);
    });
  }

  // Clear the board
  newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3
// elements are the top row, the next 3 the middle row, and the last 3 the
// bottom row.
function getGameBoardButtons() {
  return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
  const buttons = getGameBoardButtons();

  // Ways to win
  const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  // Check for a winner first
  for (let indices of possibilities) {
    if (
      buttons[indices[0]].innerHTML !== "" &&
      buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
      buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML
    ) {
      // Found a winner
      if (buttons[indices[0]].innerHTML === "X") {
        return gameStatus.HUMAN_WINS;
      } else {
        return gameStatus.COMPUTER_WINS;
      }
    }
  }

  // See if any more moves are left
  for (let button of buttons) {
    if (button.innerHTML !== "X" && button.innerHTML !== "O") {
      return gameStatus.MORE_MOVES_LEFT;
    }
  }

  // If no winner and no moves left, then it's a draw
  return gameStatus.DRAW_GAME;
}

function newGame() {
  const buttons = getGameBoardButtons();
  const infoType = document.getElementById("turnInfo");
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;
  for (const button of buttons) {
    button.innerHTML = "";
    button.disabled = false;
    infoType.innerHTML = "Your Turn";
    button.classList.remove("x");
    button.classList.remove("o");
    playerTurn = true;
  }
  // TODO: Complete the function
}

function boardButtonClicked(button) {
  // TODO: Complete the function
  if (playerTurn) {
    button.innerHTML = "X";
    button.classList.add("x");
    button.disabled = true;
  }
  switchTurn();
}
function disableButton(){
    const buttons = getGameBoardButtons();
    for(const button of buttons){
        if(button.innerHTML === "") button.disabled = true
    }
}
function enableButton(){
    const buttons = getGameBoardButtons()
    for(const button of buttons){
        for(const button of buttons){
            if(button.innerHTML === "") button.disabled = false
        }
    }
}

function switchTurn() {
  // TODO: Complete the function
  const gameStatus = checkForWinner();
  const turnInfo = document.getElementById("turnInfo");
  playerTurn = !playerTurn;

  if (gameStatus === 1) {  // if more move is there
    if (playerTurn) {
        clearTimeout(computerMoveTimeout);
        turnInfo.textContent = "Your turn";
      // Use setTimeout to simulate computer "thinking"
    } else {
      // If switching from computer to player's turn, clear the timeout
      turnInfo.textContent = "Computer's turn";
      disableButton()   // disable button to prevent user clicks when its computers turn
      computerMoveTimeout = setTimeout(() => {
        makeComputerMove();
        enableButton()  // enabling button after conputers turn
      }, 1000);
   
    }
  } else {
    // If there is a winner or it's a draw game
    playerTurn = false; // Prevent the user from placing X after the game is over

    // Display the appropriate text based on the game result
    if (gameStatus === 2) {
      turnInfo.textContent = "You win!";
    } else if (gameStatus === 3) {
      turnInfo.textContent = "Computer wins!";
    } else {
      turnInfo.textContent = "Draw game";
    }
  }
}
// place O in empty place where is empty (further better logic can be applied for placing) 
function addRandomText() {
  const buttons = getGameBoardButtons();
  for (const button of buttons) {
    if (button.innerHTML === "") {
      button.innerHTML = "O";
      button.classList.add("o");
      button.disabled = true;
      return;
    }
  }
}

function makeComputerMove() {
  // TODO: Complete the function
  addRandomText();
  switchTurn();
}
