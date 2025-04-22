//Este nuevo paso te permitirá crear una página de detalles de producto, donde el usuario pueda ver
// la información de un producto específico al acceder a /products/[id] en la URL.

import { useRouter } from "next/router";
import useSWR from "swr";

//  función fetcher para obtener datos en formato JSON
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function productsDetailsPage() {
  //el hook useRouter es para obtener el 'id' de la URL
  const { query } = useRouter();
  const { id } = query;

  if (!id) return <div>is loading ...</div>;

  // Usamos SWR para obtener el producto con el 'id' desde la API,
  //toma dos argumentos: La URL o ruta a la que se quiere hacer la solicitud (en este caso, la URL de la API que depende del id del producto).
  // La función que maneja la solicitud de datos, que es el fetcher en este caso.
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);
  //url: Es la dirección a la que vamos a hacer la solicitud para obtener los datos
  //fetcher  Es la función que se encargará de hacer la solicitud real a esa URL. En este caso, el fetcher es la función que usa fetch para obtener los datos en formato JSON.

  if (error) return <div>failed to load products</div>;
  if (!data) return <div>loading product</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>price: {data.price}</p>
      <p>category: {data.category}</p>
    </div>
  );
}
