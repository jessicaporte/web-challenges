import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {" "}
        {isActive ? "desactivate" : "activate "}
      </button>
    </main>
  );
}

/* Replace the `let` variable with the `useState` function.
  - Don't forget to import `useState` from React.
  - Set the initial state value to `false`.
- Inside the `handleClick` function, use the `set` function from `useState` to update the value of the `isActive` state.
*/
