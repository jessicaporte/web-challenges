console.clear();

const firstinput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener("click", function () {
  firstinput.value = firstinput.value.toUpperCase();
});

const lowerCaseButton = document.querySelector('[data-js="button-lowerCase"]');

lowerCaseButton.addEventListener("click", function () {
  firstinput.value = firstinput.value.toLowerCase();
});
