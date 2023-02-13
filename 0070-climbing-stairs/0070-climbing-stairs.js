/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = n) {
  let a = 1;
  let b = 1;
  let fib = 1;
  for (let i = 2; i <= n; i += 1) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
};