import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    return response.json();
  });

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000, // auto-refresh cada 5s
  });
  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al obtener datos</p>;

  const { latitude, longitude } = data;
  //const [coords, setCoords] = useState({
  //longitude: 0,
  //latitude: 0,
  //});

  //async function getISSCoords() {
  //try {
  //const response = await fetch(URL);
  //if (response.ok) {
  //const data = await response.json();
  //setCoords({ longitude: data.longitude, latitude: data.latitude });
  //}
  //} catch (error) {
  //console.error(error);
  //}
  //}

  //useEffect(() => {
  //const timer = setInterval(() => {
  //getISSCoords();
  //}, 5000);

  //return () => {
  // clearInterval(timer);
  //};
  //}, []);

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
