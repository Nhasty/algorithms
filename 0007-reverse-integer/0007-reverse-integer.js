/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  y = Number(String(Math.abs(x)).split('').reverse().join(''));
  const range = Math.pow(2, 31);
  if (y > range - 1 || y < -range) {
    return 0;
  }
  return x < 0 ? -y : y;
} ;