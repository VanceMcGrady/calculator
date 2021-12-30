const numBtns = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#AC");
const currentNumberDisplay = document.querySelector(".current-number");
const numberMemoryDisplay = document.querySelector(".number-memory");
const equalsBtn = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");

const calculator = {
  displayValue: "",
  firstOperand: "",
  waitingForSecondOperand: false,
  operator: null,
};

//add event listener to all number buttons
numBtns.forEach((btn) => {
  btn.addEventListener("click", handleNumbers);
});

//add event listener to operator buttons
operatorBtn.forEach((btn) => {
  btn.addEventListener("click", handleOperators);
});

//add AC button event listener
clearBtn.addEventListener("click", handleClear);

//add equals button event listener
equalsBtn.addEventListener("click", equals);

//add decimal button event listener
decimalBtn.addEventListener("click", handleDecimal);

//decimal
function handleDecimal(e) {
  if (calculator.displayValue.includes(".")) {
    null;
  } else {
    calculator.displayValue += e.target.innerText;
    currentNumberDisplay.innerText = calculator.displayValue;
  }
}

//numbers
function handleNumbers(e) {
  calculator.displayValue += e.target.innerText;
  currentNumberDisplay.innerText = calculator.displayValue;
  console.log(calculator.displayValue);
}

//operators
function handleOperators(e) {
  calculator.firstOperand += `${calculator.displayValue} ${e.target.innerText} `;
  numberMemoryDisplay.innerText = calculator.firstOperand;
  calculator.displayValue = "";
  currentNumberDisplay.innerText = calculator.displayValue;
}

// equals
function equals(e) {
  calculator.firstOperand += `${calculator.displayValue}`;
  solution = calculator.firstOperand.split(" ");

  console.log(solution);
}

//clear
function handleClear() {
  calculator.displayValue = "";
  calculator.firstOperand = "";
  currentNumberDisplay.innerText = "";
  numberMemoryDisplay.innerText = "";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operation, a, b) {
  if (operation === "add") {
    return add(a, b);
  } else if (operation === "subtract") {
    return subtract(a, b);
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else if (operation === "divide") {
    return divide(a, b);
  } else {
    return "ERROR";
  }
}
