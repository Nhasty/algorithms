/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    '[': ']',
    '{': '}',
    '(': ')',
  };
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] in map) {
      stack.push(s[i]);
      continue;
    }
    if (map[stack.pop()] !== s[i]) {
      return false
    }
  }
  return !stack.length;
};