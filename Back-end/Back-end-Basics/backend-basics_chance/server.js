import { createServer } from "node:http";
import Chance from "chance";

// Crear una instancia de Chance
const chance = new Chance();

export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  const message = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  response.statusCode = 200;
  response.end(message);
});
