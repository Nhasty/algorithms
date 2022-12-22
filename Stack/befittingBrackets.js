// Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

// You may assume the string contains only characters: ( ) [ ] { }

const befittingBrackets = (str) => {
  // todo
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (let char of str) {
    if (char in brackets) {
      stack.push(char)
    } else if (stack.length > 0 && stack.pop() !== char) {
      return false;
    }
  }
  return !stack.length;
};
