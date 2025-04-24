import styled from "styled-components";
import StyledButton from "@/components/Button";
import useSWR from "swr"; //  useSWR lo usamos acá no para traer datos, sino para usar mutate(),
// que nos permite refrescar automáticamente la lista de productos luego de agregar uno nuevo.

//todo este paso : fetch your new `POST` route and send the data to your database.

export default function ProductForm() {
  const { mutate } = useSWR("/api/products"); // 👉 Usás useSWR para poder usar mutate

  async function handleSubmit(event) {
    event.preventDefault(); // evita que el navegador recargue la página

    //siempre que trabajo con formularios :
    const formData = new FormData(event.target); // obtiene los datos del formulario
    const productData = Object.fromEntries(formData); // los convierte en objeto

    const response = await fetch("/api/products", {
      method: "POST", // método POST para crear un nuevo producto
      headers: {
        "Content-Type": "application/json", // el contenido es JSON, za que haz muchas formas de pasar, tengo que aclarar que es tipo json
      },
      body: JSON.stringify(productData), // convierte el objeto a JSON
    });
    if (response.ok) {
      mutate(); // si se creó bien, vuelve a obtener los datos actualizados
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
