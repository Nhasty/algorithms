/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let max = 0;
    if (s.length <= 1) {
      return s.length
    };
    for (let i = 0; i < s.length; i++) {
      while (set.has(s[i])) {
          set.delete(s[left])
          left += 1;
      }
      set.add(s[i]);
      max = Math.max(max, i - left + 1)
    }
    return max;
}