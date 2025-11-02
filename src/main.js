import "./style.css";

// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements

const countElement = document.getElementById("click-count");
const resetButton = document.getElementById("Reset");
const incrementButton = document.getElementById("Increment");
const decrementButton = document.getElementById("Decrement");

function incrementCount() {
  clickCount++;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

function decrementCount() {
  clickCount--;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

// Reset function
function resetCount() {
  clickCount = 0;
  countElement.textContent = "Button clicks: 0";
}

// Event listener - this is new! Responds to user interaction
incrementButton.addEventListener("click", incrementCount);
decrementButton.addEventListener("click", decrementCount);
resetButton.addEventListener("click", resetCount);
