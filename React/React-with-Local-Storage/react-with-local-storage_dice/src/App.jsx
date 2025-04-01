import useLocalStorageState from "use-local-storage-state";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] }); // Estado para guardar historial de tiradas
  const currentRoll = rolls[0]?.value || 1; // Último valor o 1 por defecto

  function onRoll() {
    const newRoll = {
      time: Date.now(),
      value: Math.floor(Math.random() * 6) + 1, // Generar número entre 1 y 6
    };

    setRolls([newRoll, ...rolls]); // Agregar nueva tirada al historial
  }

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRoll} onRoll={onRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
