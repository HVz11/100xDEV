/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
    return this;
  }

  subtract(number) {
    this.result -= number;
    return this;
  }

  multiply(number) {
    this.result *= number;
    return this;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= number;
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const operations = ["+", "-", "*", "/"];
    let lastCharWasOperation = false;
    let numberBuffer = "";
    let operationBuffer = "";

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (char === " ") {
        continue;
      }

      if (operations.includes(char)) {
        if (lastCharWasOperation) {
          throw new Error("Unexpected character after an operation");
        }
        lastCharWasOperation = true;
        operationBuffer += char;
      } else {
        lastCharWasOperation = false;
        numberBuffer += char;
      }
    }

    const number = parseFloat(numberBuffer);
    if (isNaN(number)) {
      throw new Error("Invalid number");
    }

    const operation = operationBuffer[operationBuffer.length - 1];
    if (operation === "+") {
      this.add(number);
    } else if (operation === "-") {
      this.subtract(number);
    } else if (operation === "*") {
      this.multiply(number);
    } else if (operation === "/") {
      this.divide(number);
    } else {
      throw new Error("Invalid operation");
    }

    return this;
  }
}

module.exports = Calculator;
