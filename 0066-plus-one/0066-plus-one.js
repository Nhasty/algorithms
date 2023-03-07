/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits.reverse();
  for (let i = 0; i <= digits.length; i += 1) {
    if (i === digits.length) {
      digits[i] = 0;
    }
    digits[i] += 1;
    if (digits[i] < 10) {
      break;
    }
    digits[i] = 0;
  }
  digits.reverse()
  return digits;
};