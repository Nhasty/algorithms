/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const opening = ['[', '{', '('];
  const closing = [']', '}', ')']
  for (let i = 0; i < s.length; i += 1) {
    if (closing.includes(s[i])) {
      if (opening.indexOf(stack.pop()) !== closing.indexOf(s[i])) {
        return false
      }
    } else {
      stack.push(s[i]);
    }
  }
  return !stack.length;
};