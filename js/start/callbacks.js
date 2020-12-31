const multiply = (x, y) => {
  return x * y;
};
const square = (x) => {
  return multiply(x, x);
};
const sumOfSquares = (x, y, z) => {
  return square(x) + square(y) + square(z);
};
console.log("Sum of squares of 12, 13 and 16 is: " + sumOfSquares(12, 13, 16));
