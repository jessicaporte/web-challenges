import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">articulo de wikipedia</h2>
      <label htmlFor="html"> texto</label>
      <input id="html"></input>
      <a className="article__link" href="https://es.wikipedia.org/wiki/Mundo">
        hola
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
