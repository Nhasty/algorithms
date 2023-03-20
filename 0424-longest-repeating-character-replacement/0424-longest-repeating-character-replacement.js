/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0; 
  let right = 1;
  let max = 1;
  let replacements = k;
  while (right < s.length) {
    if (s[right] === s[left]) {
      right += 1;
    } else {
      if (replacements > 0) {
        replacements -= 1;
        right += 1
      } else {
        max = Math.max(max, right - left)
        const current = s[left];
        while (s[left] === current) {
          left += 1;
        }
        replacements = k;
        right = left + 1;
      }
    }
  }
  while (replacements > 0 && left > 0) {
    left -= 1;
    replacements -= 1;
  }
  max = Math.max(max, right - left)
  return max
};