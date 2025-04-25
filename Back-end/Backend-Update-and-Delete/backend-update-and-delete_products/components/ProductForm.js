//#### Send a `PUT` request

// //usar el mismo componente ProductForm para dos cosas:
// Crear productos nuevos (POST)
// Editar productos existentes (PUT)
import styled from "styled-components";
import useSWR from "swr";
import StyledButton from "@/components/Button";

//traigo el onsubmit y headline desde homepage, ya que movi la formula ahi
export default function ProductForm({
  onSubmit,
  headline = "Add a new Fish",
  defaultData = {},
}) {
  return (
    <StyledForm onSubmit={onSubmit}>
      {" "}
      {/*cambie aca por {onsubmit para que lea la form arriba} */}
      <StyledHeading>{headline}</StyledHeading>{" "}
      {/*aca nombre e headline, envez de dejar la frase add a new fish */}
      <StyledLabel htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={defaultData.name || ""}
        />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={defaultData.description || ""}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          defaultValue={defaultData.price || ""}
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select
          id="currency"
          name="currency"
          defaultValue={defaultData.currency || "EUR"}
        >
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
