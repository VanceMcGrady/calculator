//DOM variable declaration
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const allClearBtn = document.querySelector("#AC");
const deleteBtn = document.querySelector("#DEL");
const equalsBtn = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");

const numberMemoryDisplay = document.querySelector(".number-memory");
const currentNumberDisplay = document.querySelector(".current-number");

// calc object
const calculator = {
  firstOperand: "",
  currentOperand: "",
  operation: "",
  operatorPressed: false,
  solution: "",
};

//functions
function updateDisplay() {
  numberMemoryDisplay.innerText = `${calculator.firstOperand} ${calculator.operation} `;
  currentNumberDisplay.innerText = calculator.currentOperand;
}
function handleNumbers(e) {
  calculator.currentOperand += e.target.innerText;
  updateDisplay();
}

function handleOperators(e) {
  const selectedOperation = e.target.innerText;

  if (calculator.operatorPressed === true) {
    null;
  } else if (
    numberMemoryDisplay.innerText.includes("+") ||
    numberMemoryDisplay.innerText.includes("-") ||
    numberMemoryDisplay.innerText.includes("x") ||
    numberMemoryDisplay.innerText.includes("/")
  ) {
    numberMemoryDisplay.innerText = `${calculator.solution} ${selectedOperation}`;
    calculator.firstOperand = calculator.solution;
    calculator.currentOperand = "";
    calculator.operation = selectedOperation;
    calculator.operatorPressed = true;
    updateDisplay();
  } else {
    calculator.firstOperand += calculator.currentOperand;
    calculator.currentOperand = "";
    calculator.operatorPressed = true;
    calculator.operation = selectedOperation;
    updateDisplay();
    calculator.solution = "equals";
  }
}

function handleEquals() {
  calculator.solution = operate(
    calculator.operation,
    calculator.firstOperand,
    calculator.currentOperand
  );

  numberMemoryDisplay.innerText += ` ${calculator.currentOperand}`;
  calculator.operatorPressed = false;
  currentNumberDisplay.innerText = calculator.solution;
  calculator.firstOperand = calculator.solution;
}

function handleDecimal() {
  if (currentNumberDisplay.innerText.includes(".")) {
    null;
  } else {
    calculator.currentOperand += ".";

    updateDisplay();
  }
}

function allClear() {
  calculator.firstOperand = "";
  calculator.currentOperand = "";
  calculator.operation = "";
  calculator.operatorPressed = false;
  calculator.solution = "";
  updateDisplay();
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
      return "I <3 MEG";
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

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", handleOperators);
});

decimalBtn.addEventListener("click", handleDecimal);

equalsBtn.addEventListener("click", handleEquals);

allClearBtn.addEventListener("click", allClear);
