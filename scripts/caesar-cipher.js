export const caesarCipher = (str, factor) => {
  if (Object.prototype.toString.call(str) !== "[object String]") throw new Error("First argument must be a string!");
  if (factor === null || factor === undefined || typeof factor !== "number" || Number.isNaN(factor) || factor < 0)
    throw new Error("Factor must be a number greater than or equal to zero!");
  str = str.toString();
  const arr = Array.from(str)
    .map((x) => x.charCodeAt(0))
    .map((x) => {
      if (!((x >= 65 && x <= 90) || (x >= 97 && x <= 122))) return x;
      const low = x >= 65 && x <= 90 ? 65 : 97;
      //   const high = low === 65 ? 90 : 122;
      x = low + ((x - low + factor) % 26);
      return x;
    });
  return String.fromCharCode(...arr);
};
