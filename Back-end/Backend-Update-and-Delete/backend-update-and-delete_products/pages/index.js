import styled from "styled-components";
import ProductList from "@/components/ProductList";
import ProductForm from "@/components/ProductForm";
import useSWR from "swr";

export default function HomePage() {
  //movi todo esto de post desde product forms, y la renoombre a handleaddprodunct
  const { mutate } = useSWR("/api/products");

  async function handleAddProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate("/api/products");
    event.target.reset();
  }
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <hr />
      <ProductForm onSubmit={handleAddProduct} heading="Add a new Fish" />{" "}
      {/*pase la formula a la web*/}
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
