import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const URL = `https://swapi.py4e.com`; // Definimos la URL base de la API de Star Wars

// Creamos una función 'fetcher' que se usa para traer los datos desde la API
// Esta función es lo que le pasamos a SWR para que sepa cómo hacer el fetch
const fetcher = (
  url // Hacemos una solicitud a la URL
) =>
  fetch(url).then((response) => {
    // Verificamos si la respuesta fue exitosa (código 200)
    if (!response.ok) {
      throw new Error("error al obtener datos"); // Si hubo un error, lanzamos una excepción personalizada
    }
    return response.json(); // Si todo va bien, transformamos la respuesta a JSON
  });

// Usamos SWR para obtener los datos del personaje desde la API, Le pasamos la URL completa y la función 'fetcher'
export default function Character() {
  const router = useRouter();
  const { id } = router.query; //3- Pasos para hacerlo dinámico con useRouter, si es id=1 siempre trae dato de 1,

  const { data, error, isLoading } = useSWR(
    // SWR nos devuelve: - data → los datos obtenidos, error → si hubo un problema al obtener los datos
    id ? `${URL}/api/people/${id}` : null, // - isLoading → true mientras los datos se están cargando
    fetcher
  ); // Traer los datos con SWR, La ruta de la API de Star Wars que queremos consultar, en este caso:
  ///api/people/1... para hacerlo interactivo {id} en vey de 1

  //con estos if Así controlás lo que ve el usuario mientras se carga o si hay un problema.
  if (isLoading) return <p>cargando...</p>;
  if (error) return <p>error al obtener datos</p>;
  if (!data) return null;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
