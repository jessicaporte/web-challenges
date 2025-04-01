import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);
  function handleAddTag(newTag) {
    setTags((prevTags) => [...(prevTags, newTag)]); // Agrega la nueva etiqueta al final del array,
    // El operador + en arrays los convierte en strings en lugar de mantener su formato de lista.
  }

  function handleDeletedTag(tagToDelete) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />

      <List tags={tags} onDeleteTag={handleDeletedTag} />
    </main>
  );
}
