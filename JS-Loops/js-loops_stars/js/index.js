console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
let filledStars = 0;
function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg";
      star.alt = "filled star";
    } else {
      star.src = "assets/star-empty.svg";
      star.alt = "empty star";
    }
    star.classList.add("star");

    star.addEventListener("click", () => {
      filledStars = i;
      renderStars(filledStars);
    }); // --^-- write or modify code above this line --^--
    starContainer.append(star);
  }
}

renderStars(filledStars);
