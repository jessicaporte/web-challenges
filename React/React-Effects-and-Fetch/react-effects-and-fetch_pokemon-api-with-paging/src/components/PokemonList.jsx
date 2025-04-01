import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offSet]);
  const handleNextPage = () => {
    if (nextUrl) {
      setOffSet(offSet + 20); // Aumentar offset por 20 para la siguiente página
    }
  };

  const handlePrevPage = () => {
    if (prevUrl) {
      setOffSet(offSet - 20); // Disminuir offset por 20 para la página anterior
    }
  };
  return (
    <main>
      <button type="button" onClick={handlePrevPage}>
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
