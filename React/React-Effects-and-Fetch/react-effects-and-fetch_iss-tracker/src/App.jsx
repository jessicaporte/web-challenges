import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    const response = await fetch(URL);
    const data = await response.json();

    console.log("data", data);
    setCoords({
      longitude: data.longitude,
      latitude: data.latitude,
    }); /*pdate the `coords` state with the new values.*/
  }
  /*Usa el hook useEffect para establecer un intervalo (usando setInterval) que actualice las 
  coordenadas de la Estación Espacial Internacional (ISS) cada 5 segundos. 
  Asegúrate de que el intervalo solo se configure en el primer renderizado de la aplicación.*/
  useEffect(() => {
    const intervalId = setInterval(
      getISSCoords,
      5 * 1000
    ); /*1000 son intervalos de segundos, esto esta en la web */
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
