
// Write a function called playGuessingGame() that has two parameters:

// numToGuess is the number that the user has to guess.
// totalGuesses is the total number of times the user is allowed to guess the number. The default value should be 10.
// The playGuessingGame() function should return the number of guesses the user took to enter the correct number. Ex: If the user guesses the correct number after 3 tries, the function should return 3. If the user does not guess the correct number before the number of guesses exceeds totalGuesses, the function should return 0.

function playGuessingGame(numToGuess,totalGuesses=10){
    let defaultMessage = "Enter a number between 1 and 1000"
    for(let i=0; i<totalGuesses; i++){
        const inputVal = prompt(defaultMessage);
        if(inputVal === null) return 0;
        const inputNumber = parseInt(inputVal);
        if(isNaN(inputNumber)) defaultMessage = "Please enter a number."
        else if(inputNumber < numToGuess) defaultMessage = "Number is too small. Guess a larger number";
        else if(inputNumber > numToGuess) defaultMessage = "Number is too large. Guess a smaller number."
        else return i+1;
    }
    return 0;
}

console.log(playGuessingGame(1,4))