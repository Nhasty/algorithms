/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n, memo = {}) {
    //debugger
  if (n === 0) {
    return 0;
  }
  if (n in memo) {
    return memo[n];
  }
  if (n < 4) {
    return n;
  }
  let min = Infinity;
  for (let i = 2; (i ** 2) <= n; i++) {
    const next = n - (i ** 2);
    const squaresToSum = 1 + numSquares(next, memo);
    if (squaresToSum < min) {
      min = squaresToSum;
    }
  }
  memo[n] = min;
  return memo[n];
};