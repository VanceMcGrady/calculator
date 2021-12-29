const numBtns = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#AC");
const currentNumberDisplay = document.querySelector(".current-number");
const numberMemoryDisplay = document.querySelector(".number-memory");

const calculator = {
  displayValue: "",
  firstOperand: null,
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

function handleClear() {
  currentNumberDisplay.innerText = "";
  numberMemoryDisplay.innerText = "";
}

function handleNumbers(e) {
  calculator.displayValue += e.target.innerText;
  currentNumberDisplay.innerText += calculator.displayValue;
  console.log(calculator.displayValue);
}

function handleOperators(e) {
  currentNumberDisplay.innerText += e.target.innerText;
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
