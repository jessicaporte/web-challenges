import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "🍌 banana", color: "yellow" },

    { id: 13378, name: "🍓 frutilla", color: "red" },

    { id: 1339, name: "🍑 durazno", color: "orange" },

    { id: 1340, name: "🍇 uva", color: "violet" },

    { id: 1341, name: "🍉 sandia", color: "green" },
  ];

  return (
    <div className="app">
      <ul>
        {fruits?.map((fruit) => (
          <li key={fruit.id}>
            <Card id={fruit.id} name={fruit.name} type={fruit.color} />
          </li>
        ))}
      </ul>
    </div>
  );
}
