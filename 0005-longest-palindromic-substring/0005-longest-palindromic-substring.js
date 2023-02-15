/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0;
  let max = 1;
  for (let i = 1; i < s.length; i += 1) {
    let left = i - 1;
    let right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const length = right - left + 1;
      if (length > max) {
        start = left;
        max = length;
      }
      left -= 1;
      right += 1;
    }  
    left = i - 1;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const length = right - left + 1;
      if (length > max) {
        start = left;
        max = length
      }
      left -= 1;
      right += 1;
    }
  }
  return s.slice(start, start + max)
};