Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.

const compress = (s) => {
  // todo
  // empty return string
  let returnMe = '';
  // count = 1
  let count = 1;
  // letter = s[0]
  let letter = s[0];
  // iterate over s starting at 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === letter) count++;
    else {
      if (count > 1) returnMe += (count + letter);
      else returnMe += letter;
      letter = s[i];
      count = 1;
    }
  }
  if (count > 1) returnMe += (count + letter);
  else returnMe += letter;
  return returnMe;
    // if current letter same as stored letter
      // increment count
    // else
      // if count > 1
        // add count and letter to return string
      // else add letter to return string
      // letter = current letter count = 1
  // if count > 1
    // add count and letter to return string
  // else add letter to return string
  // return string

};

module.exports = {
  compress,
};