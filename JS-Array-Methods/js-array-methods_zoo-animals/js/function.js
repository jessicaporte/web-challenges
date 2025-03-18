function hasAnimal(animals, animalName) {
  return animals
    .map((animal) => animal.toLowerCase())
    .includes(animalName.toLowerCase());
}

export { hasAnimal };
