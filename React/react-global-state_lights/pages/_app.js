import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react"; // 1a

export default function App({ Component, pageProps }) {
  //Recibe dos props:
  //Component: es la página que se va a renderizar (por ejemplo HomePage, Rooms, etc.).
  //pageProps: son las propiedades que vienen desde esa página (si tuviera alguna).

  const [lights, setLights] = useState([
    // esto 1b estado llamado lights usando el hook useState.
    //lights es el valor actual (un array de luces)... setLights es la función para actualizar ese estado.
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Bedroom", isOn: false },
    { id: "4", name: "Bathroom", isOn: false },
    { id: "5", name: "Garage", isOn: false },
    { id: "6", name: "Porch", isOn: false },
    { id: "7", name: "Garden", isOn: false },
    { id: "8", name: "Office", isOn: false },
  ]);

  function turnAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }
  function turnAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function toggleLight(id) {
    //1c  función que recibe un id (por ejemplo "1") y cambia el estado de esa luz específica.
    //actualizamos el estado de las luces:
    setLights(
      (
        prevLights //prevLights es el valor anterior del estado
      ) =>
        prevLights.map(
          (
            light //.map(...) recorre cada luz. encuanto la que quiero cambiar.  Entonces cambio su estado (isOn) de false a true.
          ) => (light.id === id ? { ...light, isOn: !light.isOn } : light) // Si el ID de esta luz es el mismo que el que quiero cambiar,
          // entonces creo una copia igualita de esa luz, pero le doy el valor contrario a isOn. Si no es esa luz, la devuelvo tal como está”.
        )
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
      />
    </Layout>
  );
}

/*paso 1 : 
Crear el estado de las luces en App.
A:Crear una función para cambiar el estado (toggleLight).
B.Pasar ese estado y la función a las páginas (Component), usando pageProps.*/

/* paso 3:  ### Creating the Quick Actions
tenemos que crear las acciones rápidas en la página /actions, las cuales permiten encender y apagar todas las luces a la vez. Vamos a hacerlo paso a paso:
A. Crear las funciones para encender y apagar todas las luces:
Necesitamos dos funciones: una para encender todas las luces y otra para apagarlas. Estas funciones se crearán en el componente App y las pasaremos al componente QuickActions.
B.  Pasar las funciones a QuickActions:
Estas funciones serán pasadas como props al componente QuickActions, y ahí las utilizaremos para controlar las luces.
B 1. Hacer que los botones se desactiven cuando la acción no tenga efecto:
El botón "Turn all lights off" debe deshabilitarse si todas las luces ya están apagadas. El botón "Turn all lights on" debe deshabilitarse si todas las luces ya están encendidas. */
