import "./style.css";

// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const countElement = document.getElementById("click-count");
const resetButton = document.getElementById("reset-count");

// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;

  if (clickCount >= 5) {
    greetingElement.style.color = "red";
  }
}

// Reset function
function resetCount() {
  clickCount = 0;
  countElement.textContent = "Button clicks: 0";
  greetingElement.style.color = "";
}

// Event listener - this is new! Responds to user interaction
button.addEventListener("click", updateGreeting);
resetButton.addEventListener("click", resetCount);
