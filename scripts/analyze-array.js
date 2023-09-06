export const analyzeArray = (arr) => {
  if (!arr || !Array.isArray(arr) || !arr.every((x) => typeof x === "number" && !Number.isNaN(x))) throw new Error("Argument must be a number array!");
  let min = null;
  let max = null;
  let length = arr.length;
  const average =
    arr.reduce((prev, current) => {
      if (min === null || current < min) min = current;
      if (max === null || current > max) max = current;
      return prev + current;
    }, 0) / length;
  return { min, max, length, average };
};
