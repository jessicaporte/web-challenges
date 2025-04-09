import { add } from ".";
import { subtract } from ".";
import { multiply } from ".";
import { divide } from ".";

test("add () return 5 if called add(2,3)", () => {
  const result = add(2, 3); //llamamos la funcion con los valores
  expect(result).toBe(5); // el resultado que esperamos de esa suma
});
test("add () return negative value if the greater argument is negative", () => {
  const result = add(-8, 3); //numero random donde el mayor es negativo
  expect(result).toBeLessThan(0); //y retomo el valor negativo osea menor a cero
});
test("add returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3, 5); //// El segundo número es la cantidad de decimales permitidos de diferencia, con una presicion de 5decimales
});

test("subtract () returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract () returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(1, 5);
  expect(result).toBeLessThan(0);
});

test("multiply() returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multipy() returns a negative value if only the first argument is negative", () => {
  const result = multiply(-5, 4);
  expect(result).toBeLessThan(0);
});

test("multipy() returns a negative value if only the second argument is negative", () => {
  const result = multiply(5, -4);
  expect(result).toBeLessThan(0);
});

test("multipy()  returns a positive value if called with two negative arguments", () => {
  const result = multiply(-5, -4);
  expect(result).toBeGreaterThan(0);
});

test("divide() returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("divide() returns `You should not do this!` if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe(`You should not do this!`);
});
