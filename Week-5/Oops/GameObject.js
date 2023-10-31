// Create an object called , Modify the game object:

// Add 2 properties: lives - initially 3, and coins - initially 0.
// Add a getter called points that returns coins * 10.
// Add a playerDies() method that subtracts 1 from lives if lives is greater than 0.
// Add a newGame() method that sets lives to 3 and coins to 0.
// The script.js file includes several console.log() statements, which should match the output below if the game object works correctly.

// lives = 3 coins = 0 points = 0 points = 20 lives = 2 lives = 0 lives = 3 coins = 0

// View the program's output in the browser's JavaScript console.

const game = {
  lives: 3,
  coins: 0,
  points: function () {
    return this.coins * 10;
  },
  playerDies: function () {
    if (this.lives > 0) {
      this.lives -= 1;
    }
  },
  newGame: function () {
    this.lives = 3;
    this.coins = 0;
  },
};

console.log("lives = ", game.lives);
console.log("coins = ", game.coins);
console.log("points = ", game.points());
game.coins = 2;
console.log("points = ", game.points());
game.playerDies();
console.log("lives = ", game.lives);
game.lives = 0;
console.log("lives = ", game.lives);
game.newGame();
console.log("lives = ", game.lives);
console.log("coins = ", game.coins);
