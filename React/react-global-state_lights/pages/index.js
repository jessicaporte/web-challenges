import Link from "../components/Link";

export default function HomePage({ lights }) {
  const lightsOnCount = lights.filter((light) => light.isOn).length; //2a filter() recorre el arreglo de luces y
  // devuelve un nuevo arreglo con las luces que están encendidas (isOn === true). Después, con .length, obtenemos la cantidad de luces encendidas.
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOnCount} light(s) are on.</p> {/* 2b {} */}
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}

/*2 ### Counting the Lights 
A Contar las luces encendidas:
En la página de inicio, necesitamos mostrar el número de luces que están encendidas. Para hacer esto, vamos a derivar un valor de las luces que tenemos en el estado global, sin necesidad de usar useState ni useEffect.
Esto se puede hacer con una simple operación en el estado actual, usando el método .filter() para contar cuántas luces tienen el valor isOn igual a true. */
