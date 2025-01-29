// Standard functions

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Logic

emptyScreen = "";

let screen = document.getElementById("screen");
let button_equal = document.getElementById("button_equal");
let button_reset = document.getElementById("button_creset");
let button_plus = document.getElementById("button_plus");
let button_sub = document.getElementById("button_sub");
let button_multiply = document.getElementById("button_multiply");
let button_div = document.getElementById("button_div");
let button_0 = document.getElementById("button_zero");
let button_1 = document.getElementById("button_one");
let button_2 = document.getElementById("button_two");
let button_3 = document.getElementById("button_three");
let button_4 = document.getElementById("button_four");
let button_5 = document.getElementById("button_five");
let button_6 = document.getElementById("button_six");
let button_7 = document.getElementById("button_seven");
let button_8 = document.getElementById("button_eight");
let button_9 = document.getElementById("button_nine");

function addToScreen(number) {
  const screen = document.getElementById("screen"); // Ensure the screen is selected
  const operators = ["+", "-", "/", "*"];

  // Prevent more than one operator in the screen
  if (operators.includes(number) && /[+\-/*]/.test(screen.innerText)) {
    return; // Stop function execution if an operator already exists
  }

  if (/[a-zA-Z]+/.test(screen.innerText)) {
    return;
  }

  // Prevent consecutive operators
  if (operators.includes(number)) {
    if (!operators.includes(screen.innerText.slice(-1))) {
      screen.innerText += number;
    }
  } else {
    screen.innerText += number;
  }

  console.log(screen.innerText);
}

function resetScreen() {
  screen.innerText = emptyScreen;
}

function removeScreenInput() {
  if (screen.innerText.length > 0) {
    screen.innerText = screen.innerText.slice(0, -1);
  }
}

function operate() {
  if (screen.innerText.includes("/")) {
    screen.innerText = "You cannot divide by zero!";
    return;
  }
  const expression = new Function(`return ${screen.innerText}`)();
  screen.innerText = expression.toString();
}

button_0.addEventListener("click", () => addToScreen("0"));
button_1.addEventListener("click", () => addToScreen("1"));
button_2.addEventListener("click", () => addToScreen("2"));
button_3.addEventListener("click", () => addToScreen("3"));
button_4.addEventListener("click", () => addToScreen("4"));
button_5.addEventListener("click", () => addToScreen("5"));
button_6.addEventListener("click", () => addToScreen("6"));
button_7.addEventListener("click", () => addToScreen("7"));
button_8.addEventListener("click", () => addToScreen("8"));
button_9.addEventListener("click", () => addToScreen("9"));

button_reset.addEventListener("click", () => removeScreenInput());
button_reset.addEventListener("dblclick", () => resetScreen());
button_plus.addEventListener("click", () => addToScreen("+"));
button_sub.addEventListener("click", () => addToScreen("-"));
button_multiply.addEventListener("click", () => addToScreen("*"));
button_div.addEventListener("click", () => addToScreen("/"));
button_equal.addEventListener("click", () => operate());

document.addEventListener("keydown", (event) => {
  const screen = document.getElementById("screen");
  const key = event.key;
  const operators = ["+", "-", "*", "/"];

  if (!isNaN(key)) {
    addToScreen(key);
  } else if (operators.includes(key)) {
    if (!/[+\-/*]/.test(screen.innerText)) {
      addToScreen(key);
    }
  } else if (key === "Enter") {
    event.preventDefault();
    operate();
  } else if (key === "Backspace") {
    removeScreenInput();
  } else {
    event.preventDefault();
  }
});
