export default function App() {
  return <Greeting name="jessica" />;
}

function Greeting({ name }) {
  return <h1> hello {name} </h1>;
}
