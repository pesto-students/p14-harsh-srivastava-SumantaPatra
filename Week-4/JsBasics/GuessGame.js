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