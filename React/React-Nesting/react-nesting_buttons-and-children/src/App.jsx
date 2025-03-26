import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> boton 1</Button>
      <Button> boton 2 </Button>
      <Button> boton 3 </Button>
      <Button> boton 4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
