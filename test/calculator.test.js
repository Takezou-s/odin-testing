import { calculator } from "../scripts/calculator";

test("add 5, 7", () => {
  expect(calculator.add(5, 7)).toBe(12);
});

test("subtract 15, 10", () => {
  expect(calculator.subtract(15, 10)).toBe(5);
});

test("multiply 12, 11", () => {
  expect(calculator.multiply(12, 11)).toBe(132);
});

test("divide 12, 4", () => {
  expect(calculator.divide(12, 4)).toBe(3);
});

test("divide by 0", () => {
  expect(() => calculator.divide(12, 0)).toThrow("Can't divide by 0!");
});
