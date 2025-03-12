console.clear();

const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

colorInput.addEventListener("input", () => {
  const hue = colorInput.value;
  box.style.backgroundColor = `hsl(${hue}, 100%, 50%`;
});

radiusInput.addEventListener("input", () => {
  box.style.borderRadius =
    Number(radiusInput.value) === Number(radiusInput.max)
      ? "100%"
      : `${radiusInput.value}px`;
});
rotationInput.addEventListener("input", () => {
  const rotation = rotationInput.value;
  box.style.transform = `rotate(${rotation}deg)`;
});
