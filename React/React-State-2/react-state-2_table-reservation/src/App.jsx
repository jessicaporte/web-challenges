import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleIncrease() {
    setPeople(people + 1);
  }

  function handleDecrease() {
    setPeople(Math.max(people - 1, 1));
  }

  return (
    //pasa las funciones como prop en Counter //
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrease={handleIncrease} onDecrease={handleDecrease} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
