// Write a function, breakingBoundaries, that takes in 5 arguments: a number of rows (m), a number of columns (n), a number of moves (k), a starting row (r), and a starting column (c). Say you were situated in a grid with dimensions m * n. If you had to start at position (r,c), in how many different ways could you move out of bounds if you could take at most k moves. A single move is moving one space up, down, left, or right. During a path you may revisit a position.

const breakingBoundaries = (m, n, k, r, c) => {
  //to do
  if (r < 0 || r === m) {
    return 1;
  }
  if (c < 0 || c === n) {
    return 1;
  }
  if (k === 0) {
    return 0;
  }
  const key = k + ',' + r + ',' + c;
  const moveSum = breakingBoundaries(m, n, k - 1, r - 1, c) + breakingBoundaries(m, n, k - 1, r + 1, c) + breakingBoundaries(m, n, k - 1, r, c - 1) + breakingBoundaries(m, n, k -1, r, c + 1);
  return moveSum;
};