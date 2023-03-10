/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let solution = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (!solution.length && s[i] === ' ') {
      continue
    }
    if (s[i] === ' ') {
      break
    }
    solution.push(s[i]);
  }
  return solution.length;
};