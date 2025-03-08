console.clear();

let operand1 = 12;
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
  const result = operand1 ** operand2;
  console.log(`Exponentiation:${operand1} ^ ${operand2} = ${result}`);
});
moduloButton.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log(`modulo: ${operand1} % ${operand2} = ${result}`);
});

// --^-- write your code here --^--

//Step 2: Add event listeners for each mathematical operation:

// --v-- write your code here --v--
const increaseByOneButton = document.querySelector(
  `[data-js="increase-by-one"]`
);
const increaseByFiveButton = document.querySelector(
  `[data-js="increase-by-five"]`
);
const decreaseByOneButton = document.querySelector(
  `[data-js="decrease-by-one"]`
);
const decreaseByFiveButton = document.querySelector(
  `[data-js="decrease-by-five"]`
);
const multiplyByTwoButton = document.querySelector(
  `[data-js="multiply-by-two"]`
);
const divideByTwoButton = document.querySelector(`[data-js="divide-by-two"]`);

increaseByOneButton.addEventListener("click", () => {
  operand1 += 1;
  console.log(`operand1 increased by 1: ${operand1}`);
});
increaseByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  console.log(`operand1 increased by 5: ${operand1}`);
});
decreaseByOneButton.addEventListener("click", () => {
  operand1 -= 1;
  console.log(`operand1 decreased by 1: ${operand1}`);
});
decreaseByFiveButton.addEventListener("click", () => {
  operand1 -= 5;
  console.log(`operand1 decreased by 5: ${operand1}`);
});
multiplyByTwoButton.addEventListener("click", () => {
  operand1 *= 2;
  console.log(`operand1 multiply by 2: ${operand1}`);
});
divideByTwoButton.addEventListener("click", () => {
  operand1 /= 2;
  console.log(`operand1 divided by 2: ${operand1}`);
});

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
