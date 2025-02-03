const {
  sumar,
  restar,
  multiplicar,
  dividir,
  raizCuadrada,
} = require("./calculadora");

test("Suma 2 + 3 y devuelve 5", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Suma 10 + 20 y devuelve 30", () => {
  expect(sumar(10, 20)).toBe(30);
});

test("Resta 5 - 3 y devuelve 2", () => {
  expect(restar(5, 3)).toBe(2);
});

test("Resta 20 - 15 y devuelve 5", () => {
  expect(restar(20, 15)).toBe(5);
});

test("Multiplica 2 * 3 y devuelve 6", () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test("Divide 6 / 3 y devuelve 2", () => {
  expect(dividir(6, 3)).toBe(2);
});

test("Calcula la raíz cuadrada de 9 y devuelve 3", () => {
  expect(raizCuadrada(9)).toBe(3);
});
