// Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

// For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

const summingSquares = (n, memo = {}) => {
  // todo
  if (n === 0) {
    return 0
  };
  if (n in memo) {
    return memo[n];
  }
  let i = 1;
  let minPath = Infinity;
  while ((i * i) <= n) {
    path = 1 + summingSquares(n - (i * i), memo);
    if (path < minPath) {
      minPath = path;
    };
    i += 1;
  }
  memo[n] = minPath;
  return memo[n];
};
