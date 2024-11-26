let currentInput = "";
let operator = "";
let firstNumber = null;
let secondNumber = null;

function appendValue(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function setOperator(op) {
  if (firstNumber === null) {
    firstNumber = parseFloat(currentInput);
  } else if (currentInput) {
    secondNumber = parseFloat(currentInput);
    calculateResult();
  }
  currentInput = "";
  operator = op;
}

function calculateResult() {
  if (firstNumber !== null && currentInput !== "") {
    secondNumber = parseFloat(currentInput);

    let result;
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === 0) {
          result = "Error";
        } else {
          result = firstNumber / secondNumber;
        }
          break;
      default:
        result = currentInput;
      }
    document.getElementById("display").value = result;
    currentInput = result.toString();
    firstNumber = null;
    operator = "";
  }
}

function clearDisplay() {
  currentInput = "";
  firstNumber = null;
  secondNumber = null;
  operator = "";
  document.getElementById("display").value = "";
}
