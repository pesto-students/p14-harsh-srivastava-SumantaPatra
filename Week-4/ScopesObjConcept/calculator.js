// Instructions:

// Create a class named "Calculator" with the following methods:
// "add" method that accepts two numbers and returns their sum.
// "subtract" method that accepts two numbers and returns their difference.
// "multiply" method that accepts two numbers and returns their product.
// "divide" method that accepts two numbers and returns their quotient.
// Create a class named "ScientificCalculator" that extends the Calculator class and adds the following methods:
// "square" method that accepts a number and returns its square.
// "cube" method that accepts a number and returns its cube.
// "power" method that accepts two numbers and returns the first number raised to the power of the
// second number.

// Create an instance of the ScientificCalculator class
// Using the "call" method, invoke the "add" method of the Calculator class with arguments 10 and 5.
// Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5.
// Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result. Bind the "multiplyByTwo" method to the instance of the ScientificCalculator class.
// Using the "bind" method, create a new method named "powerOfThree" that raises a number to the power of 3 and returns the result. Bind the "powerOfThree" method to the instance of the ScientificCalculator class.


class Calculator {
  constructor() {}
  add(number1, number2) {
    return number1 + number2;
  }
  substract(number1, number2) {
    return number1 - number2;
  }
  multiply(number1, number2) {
    return number1 * number2;
  }
  divide(number1, number2) {
    return Math.trunc(number1 / number2) | 0;
  }
}

class ScientificCalculator extends Calculator {
  constructor() {
    super();
  }

  square(number) {
    return number * number;
  }
  cube(number) {
    return number * number * number;
  }
  power(base, power) {
    return Math.pow(base, power);
  }
}

function multiplyByTwo(number) {
  return 2 * number;
}

function powerOfThree(number) {
  return Math.pow(number, 3);
}

const CalculatorObj = new Calculator();
const ScientificCalculatorObj = new ScientificCalculator();
console.log(CalculatorObj.add.call(this, 10, 5));
console.log(CalculatorObj.substract.apply(this, [10, 5]));

const multiplyByTwoMethod = multiplyByTwo.bind(ScientificCalculatorObj, 10);
console.log(multiplyByTwoMethod());
const powerOfThreeMethod = powerOfThree.bind(ScientificCalculatorObj, 5);
console.log(powerOfThreeMethod());
