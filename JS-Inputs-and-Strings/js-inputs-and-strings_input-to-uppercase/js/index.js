console.clear();

const firstInput = document.querySelector("[data-js='first-input']");

const button = document.querySelector("[data-js='button-uppercase']");

button.addEventListener("click", function () {
  firstInput.value = firstInput.value.toUpperCase();
});
