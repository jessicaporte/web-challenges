console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    return;
  }
  hideTosError();

  tosCheckbox.addEventListener("change", () => {
    if (tosCheckbox.checked) {
      hideTosError();
    } else {
      showTosError();
    }
  });
  // --^-- write your code here --^--
  const formData = new FormData(form); // Recoger los datos del formulario
  const data = Object.fromEntries(formData.entries()); // Convertir los datos a un objeto

  console.log(data); // Mostrar los datos en la consola

  // eslint-disable-next-line no-alert
  alert("Form submitted"); // Alerta que indica que el formulario fue enviado
});

// eslint-disable-next-line no-alert
