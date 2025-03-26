export default function App() {
  function handleClick() {
    console.log("you clicked me ");
  }

  return (
    <div>
      <Button
        onButtonClick={handleClick}
        color="red"
        isDisabled
        text="click aqui"
      />
      <Button color="yellow" Disabled text="submit" />
    </div>
  );
}

function Button({ color, isDisabled, text, onButtonClick }) {
  return (
    <button
      onClick={onButtonClick}
      style={{ backgroundColor: color, height: "100px" }}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
