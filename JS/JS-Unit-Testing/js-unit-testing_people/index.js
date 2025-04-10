export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.map((person) => `${person.age}`);
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age) // Filtramos a los mayores de 'age'
    .map((person) => `${person.firstName} ${person.lastName}`);
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}

export function findPersonById(people, id) {
  return people.filter((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age); // Usamos 'some' para verificar si al menos uno cumple la condición
}

export function getLastNamesSortedByAge(people) {
  //debe devolver los apellidos ordenados por edad de las personas.
  return people
    .sort((a, b) => a.age - b.age) //Ordenamos por edad
    .map((person) => `${person.lastName}`);
}
