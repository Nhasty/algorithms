// Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.

// The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.

// You may assume that every number n is guaranteed to be an integer between 1 through 9.

// You may assume that the input is valid and the decompressed string will only contain alphabetic characters.

const decompressBraces = (s) => {
  // todo
  const stack = [];
  for (let char of s) {
    if (char === '}') {
      let buildChar = stack.pop();
      let subString = buildChar
      while (isNaN(buildChar)) {
        buildChar = stack.pop();
        if (isNaN(buildChar)) {
          subString = buildChar + subString;
        }
      }
      let repeatedSubString = ''
      for (let i = 0; i < Number(buildChar); i += 1) {
        repeatedSubString += subString;
      }
      stack.push(repeatedSubString);
    } else if (char !== '{') {
      stack.push(char);
    }
  }
  return stack.join('');
};