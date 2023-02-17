/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
  if (n === 1) {
    return 0;
  }
  const half = Math.pow(2, n - 1) / 2;
  if (k <= half) {
    return kthGrammar(n - 1, k)
  }
  if (k > half) {
    return kthGrammar(n - 1, k - half) === 0 ? 1: 0;
  }
};