const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function logEntry(operation, prevResult, number, result) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: number,
    result: result,
  };
  console.log(logEntry);
}

function calculationLogic(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "devide") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  logEntry(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculationLogic("add");
}

function subtract() {
  calculationLogic("subtract");
}

function multiply() {
  calculationLogic("multiply");
}

function divide() {
  calculationLogic("devide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
