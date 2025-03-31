import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [counterState, setCounterState] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counterState} />
      <div className="counter__buttons-container">
        <button
          onClick={() => setCounterState(counterState + 1)}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={() => setCounterState(counterState - 1)}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
