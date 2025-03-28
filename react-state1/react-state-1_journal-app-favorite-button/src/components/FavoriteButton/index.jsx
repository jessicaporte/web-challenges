import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  // This should be a state variable.
  const [isFavorite, setIsFavorite] = useState(false);

  function handleClick() {
    setIsFavorite(!isFavorite);
    console.log("favorite botton clicked");
  }
  return (
    <button
      className="favorite-button"
      onClick={handleClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}

/*Ubica el componente FavoriteButton.

Sustituye la variable booleana isFavorite por una variable de estado.

Pista: Usa el hook useState de React para gestionar el estado.

Actualiza el estado para alternarlo cuando se haga clic en el botón de favorito.

Pista: Usa la función despachadora (función de actualización) que devuelve useState para alternar el valor actual.

Recuerda: Puedes alternar un valor booleano usando el operador NOT !.

💡Por ahora, solo el icono responderá al cambio de estado usando renderizado condicional: {isFavorite ? <StarFilled /> : <Star />}. La pestaña de favoritos y el conteo de favoritos se implementarán en sesiones futuras.









*/
