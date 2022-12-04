Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
  // todo
  // empty string digit holder
  let digits = '';
  // empty string to return
  let returnMe = '';
  //iterate string
  for (let i = 0; i < s.length; i++) {
    //if current character is letter
    if (isNaN(s[i])) {
      let placeholder = '';
      while (placeholder.length < Number(digits)) {
        placeholder += s[i];
      }
      returnMe += placeholder;
      digits = '';
    }
    if (!isNaN(s[i])) {
      digits += s[i];
    }
      // add string digit amount of letters to return string
      // reset digit string to empty
    // if current char is digit
      // add to digit string
  }
  // return string
  return returnMe;
};

module.exports = {
  uncompress,
};
