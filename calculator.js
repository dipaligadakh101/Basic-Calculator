// script.js
let displayElement = document.getElementById("display");
let currentInput = "";

// Append number to the display
function appendNumber(number) {
  if (currentInput === "0" && number === 0) return;
  currentInput += number;
  updateDisplay();
}

// Append operator to the display
function appendOperator(operator) {
  if (currentInput === "" || isNaN(currentInput.slice(-1))) return;
  currentInput += ` ${operator} `;
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// Delete the last character
function deleteLast() {
  currentInput = currentInput.trim().slice(0, -1);
  updateDisplay();
}

// Calculate the result
function calculateResult() {
  try {
    currentInput = eval(currentInput.replace(/\s/g, '')).toString();
    updateDisplay();
  } catch (error) {
    displayElement.textContent = "Error";
    currentInput = "";
  }
}

// Update the display element
function updateDisplay() {
  displayElement.textContent = currentInput || "0";
}
