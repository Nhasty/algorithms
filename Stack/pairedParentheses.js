// Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

// You may assume the string contains only alphabetic characters, '(', or ')'.

const pairedParentheses = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      count += 1;
    }
    if (str[i] === ')') {
      count -= 1;
      if (count < 0) {
        return false;
      }
    }
  }
  return !count
}