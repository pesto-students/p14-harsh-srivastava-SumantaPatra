Instructions:

// Write a program that demonstrates the use of closures in JavaScript.

// Create a function named "counter" that takes no arguments and returns a function.
// The returned function should increase a count variable by 1 and return its value each time it is called.
// Create two instances of the counter function and assign them to variables named "firstCounter" and "secondCounter".
// Call the firstCounter function five times and store the returned values in an array named "firstValues".
// Call the secondCounter function three times and store the returned values in an array named "secondValues".
// Print the arrays

function counter(){
    let count=0;
    return function(){
       return ++count;
    }
}

const firstCounter = counter();
const secondCounter = counter()
const firstCounterArr=[];
const secondCounterArr = []
firstCounterArr.push(firstCounter())
firstCounterArr.push(firstCounter())
firstCounterArr.push(firstCounter())
firstCounterArr.push(firstCounter())
firstCounterArr.push(firstCounter())

secondCounterArr.push(secondCounter())
secondCounterArr.push(secondCounter())
secondCounterArr.push(secondCounter())

console.log(firstCounterArr)
console.log(secondCounterArr)