import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div> loading...</div>;

  return (
    <div>
      <h1> list of products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>price: {product.price}</p>
            <p>category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
