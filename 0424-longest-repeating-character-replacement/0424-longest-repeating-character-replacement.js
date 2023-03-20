/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let max = 0;
  let count = Array(26).fill(0);
  let left = 0;
  let right = 0;
  while (right < s.length) {
    count[s.charCodeAt(right) - 'A'.charCodeAt()] += 1;
    right += 1;
    const high = Math.max(...count);
    const visited = count.reduce((a, b) => a + b, 0);
    if (visited - high > k) {
      count[s.charCodeAt(left) - 'A'.charCodeAt()] -= 1;
      left += 1;
    }
  }
  return count.reduce((a, b) => a + b, 0);
};