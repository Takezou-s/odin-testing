import { caesarCipher } from "../scripts/caesar-cipher";

test("valid text", () => {
  expect(caesarCipher("All that is gold does not glitter, Not all those who wander are lost;", 25)).toBe(
    "Zkk sgzs hr fnkc cndr mns fkhssdq, Mns zkk sgnrd vgn vzmcdq zqd knrs;"
  );
});

test("valid text with letter 'Z'", () => {
  expect(caesarCipher("Zkk sgzs hr fnkc cndr mns fkhssdq, Mns zkk sgnrd vgn vzmcdq zqd knrs;", 7)).toBe(
    "Grr zngz oy murj juky tuz mrozzkx, Tuz grr znuyk cnu cgtjkx gxk ruyz;"
  );
});

test("shift factor > 25", () => {
  expect(caesarCipher("All that is gold does not glitter, Not all those who wander are lost;", 32)).toBe(
    "Grr zngz oy murj juky tuz mrozzkx, Tuz grr znuyk cnu cgtjkx gxk ruyz;"
  );
});

test("null string", () => {
  expect(() => caesarCipher(null, 32)).toThrow("First argument must be a string!");
});

test("undefined string", () => {
  expect(() => caesarCipher(undefined, 32)).toThrow("First argument must be a string!");
});

test("falsy string", () => {
  expect(caesarCipher("", 32)).toBe("");
});

test("null factor", () => {
  expect(() => caesarCipher("All that is gold does not glitter, Not all those who wander are lost;", null)).toThrow(
    "Factor must be a number greater than or equal to zero!"
  );
});

test("undefined factor", () => {
  expect(() => caesarCipher("All that is gold does not glitter, Not all those who wander are lost;")).toThrow(
    "Factor must be a number greater than or equal to zero!"
  );
});

test("falsy factor, factor === 0", () => {
  expect(caesarCipher("All that is gold does not glitter, Not all those who wander are lost;", 0)).toBe(
    "All that is gold does not glitter, Not all those who wander are lost;"
  );
});

test("invalid factor", () => {
  expect(() => caesarCipher("All that is gold does not glitter, Not all those who wander are lost;", "qwe")).toThrow(
    "Factor must be a number greater than or equal to zero!"
  );
});

test("negative factor", () => {
  expect(() => caesarCipher("All that is gold does not glitter, Not all those who wander are lost;", -1)).toThrow(
    "Factor must be a number greater than or equal to zero!"
  );
});
