console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const toastMessage = document.createElement("li");
  toastMessage.textContent = "New toast Message";
  toastMessage.classList.add("toast-container__message");
  toastContainer.append(toastMessage);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";

  // Exercise: Clear the stack of toast messages
});
