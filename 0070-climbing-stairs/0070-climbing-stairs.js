/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = new Array(n + 1).fill(0)) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  if (memo[n] !== 0) {
    return memo[n];
  }
  memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
  return memo[n]
};