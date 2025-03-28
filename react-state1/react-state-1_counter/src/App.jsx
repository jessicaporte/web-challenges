import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function sumarClick() {
    setCount(count + 1);
  }
  function restarClick() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={sumarClick}>
          {" "}
          +{" "}
        </button>
        <button type="button" onClick={restarClick}>
          {" "}
          -
        </button>
      </div>
    </div>
  );
}

/*## Tasks

Refactoriza el código para usar el estado de React y asegúrate de que los botones actualicen correctamente la variable de estado. Declara una variable de estado y conecta los botones para que ajusten esta variable de estado.

Puedes seguir estas pistas como guía:

Usar let no parece ser el enfoque correcto para declarar una variable en este escenario.

¿Existe una función incorporada de React que puedas usar en su lugar?

Asegúrate de importar esta función.

Actualmente, los controladores de eventos (onClick) de los <button> solo registran un emoji en la consola.

En su lugar, los controladores de eventos deben manejar otro tipo de funcionalidad.*/
