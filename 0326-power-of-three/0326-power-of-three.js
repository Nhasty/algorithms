/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  debugger;
  const log = Math.log(n) / Math.log(3);
  return log.toFixed(12) % 1 === 0;
};