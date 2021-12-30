//DOM variable declaration
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const allClearBtn = document.querySelector("#AC");
const deleteBtn = document.querySelector("#DEL");
const equalsBtn = document.querySelector(".equals");

const numberMemoryDisplay = document.querySelector(".number-memory");
const currentNumberDisplay = document.querySelector(".current-number");

// calc object
const calculator = {
  firstOperand: "",
  currentOperand: "",
  operation: "",
};

//functions
function updateDisplay() {
  numberMemoryDisplay.innerText = calculator.firstOperand;
  currentNumberDisplay.innerText = calculator.currentOperand;
}
function handleNumbers(e) {
  calculator.currentOperand += e.target.innerText;
  updateDisplay();
}

function allClear() {
  calculator.firstOperand = "";
  calculator.currentOperand = "";
  calculator.operation = "";
}

function operate(operator, a, b) {
  let numOne = parseFloat(a);
  let numTwo = parseFloat(b);

  function add(...params) {
    let sum = 0;
    params.forEach((item) => {
      sum = sum + item;
    });
    return sum;
  }

  function subtract(...params) {
    let difference = 0;
    params.forEach((item) => {
      difference = params[0] - params[1];
    });
    return difference;
  }

  function multiply(...params) {
    let product = 1;
    params.forEach((item) => {
      product = product * item;
    });
    return product;
  }

  function divide(...params) {
    if (params.includes(0)) {
      return "ERR";
    } else {
      let quotient = 0;
      quotient = params[0] / params[1];
      return quotient;
    }
  }

  switch (operator) {
    case "+":
      return add(numOne, numTwo);
      break;
    case "-":
      return subtract(numOne, numTwo);
      break;
    case "x":
      return multiply(numOne, numTwo);
      break;
    case "/":
      return divide(numOne, numTwo);
  }
}

//adding event listeners
numberBtns.forEach((btn) => {
  btn.addEventListener("click", handleNumbers);
});
