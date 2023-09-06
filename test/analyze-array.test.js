import { analyzeArray } from "../scripts/analyze-array";

test("valid array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("null", () => {
  expect(() => analyzeArray(null)).toThrow("Argument must be a number array!");
});

test("non-array", () => {
  expect(() => analyzeArray(5)).toThrow("Argument must be a number array!");
});

test("invalid array", () => {
  expect(() => analyzeArray([1, 3, 8, 1, 6, "qweqwe"])).toThrow("Argument must be a number array!");
});
