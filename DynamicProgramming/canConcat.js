// Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

// You may reuse words of the array as many times as needed.

const canConcat = (s, words, i = 0, memo = {}) => {
  // todo
  if (i in memo) {
    return memo[i];
  }
  if (i >= s.length) {
    return true;
  }
  for (let word of words) {
    if (s.startsWith(word, i)) {
      memo[i] = canConcat(s, words, i + word.length, memo);
      if (memo[i]) {
        return true;
      }
    }
  }
  return false;
}