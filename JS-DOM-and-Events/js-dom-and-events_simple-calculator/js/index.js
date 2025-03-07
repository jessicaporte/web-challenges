console.clear();

const operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// --v-- write your code here --v--
const addButton = document.querySelector(`[data-js="add"]`);
const subtractButton = document.querySelector(`[data-js="subtract"]`);
const multiplyButton = document.querySelector(`[data-js="multiply"]`);
const divideButton = document.querySelector(`[data-js="divide"]`);
const exponentButton = document.querySelector(`[data-js="exponent"]`);
const moduloButton = document.querySelector(`[data-js="modulo"]`);

addButton.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log(`addition:${operand1} + ${operand2} = ${result}`);
});
subtractButton.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log(`subtraction:${operand1} - ${operand2} = ${result}`);
});
multiplyButton.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log(`Multiplication:${operand1} * ${operand2} = ${result}`);
});
divideButton.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log(`division:${operand1} / ${operand2} = ${result}`);
});
exponentButton.addEventListener("click", () => {
  const result = operand1 ^ operand2;
  console.log(`Exponentiation:${operand1} ^ ${operand2} = ${result}`);
});
moduloButton.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log(`modulo: ${operand1} % ${operand2} = ${result}`);
});

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
