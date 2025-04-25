//esto es de frondend, pero es la pagina de detalle del product

import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react"; // useState para manejar si estamos en modo edición o no
import ProductForm from "@/components/ProductForm";

export default function Product() {
  // Usamos el hook useRouter para acceder al parámetro `id` de la URL
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  // Estado para saber si estamos en modo edición o no
  const [isEditMode, setIsEditMode] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  //#### Send a `PUT` request

  //Crear la función handleEditProduct(), Esta función se va a encargar de enviar los cambios a la base de datos con PUT.
  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate(); // actualiza los datos en pantalla
      setIsEditMode(false); // salimos del modo edición
    }
  }
  async function handleDeleteProduct(id) {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/"); // Redirige a la home después de borrar
    } else {
      alert("There was an error deleting the product.");
    }
  }
  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      {/* Botón para activar o desactivar el modo edición */}
      <button
        type="button"
        onClick={() => setIsEditMode(!isEditMode)} // Cambia entre true y false
      >
        {isEditMode ? "Cancel" : "Edit Product"} {/* Texto del botón cambia */}
      </button>

      {/* Si estamos en modo edición, mostramos el formulario */}
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct} // Pasamos la función que se ejecuta al enviar el form
          defaultData={data} // Le pasamos los datos actuales para que aparezcan en el form
          heading="Edit Product" // Le pasamos un título personalizado
        />
      )}
      <button type="button" onClick={() => handleDeleteProduct(id)}>
        Delete Product
      </button>
      {/* Link para volver a la página principal */}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
