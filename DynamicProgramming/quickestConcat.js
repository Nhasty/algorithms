// Write a function, quickestConcat, that takes in a string and an array of words as arguments. The function should return the minimum number of words needed to build the string by concatenating words of the array.

// You may use words of the array as many times as needed.

const quickestConcat = (s, words, i = 0, memo = {}) => {
  if (i in memo) {
    return memo[i];
  }
  if (i >= s.length) {
    return 0;
  }
  memo[i] = Infinity;
  for (let word of words) {
    if (s.startsWith(word, i)) {
      const probe = quickestConcat(s, words, i + word.length, memo);
      if (probe < memo[i] && probe >= 0) {
        memo[i] = 1 + probe;
      }
    }
  }
  if (memo[i] === Infinity) {
    memo[i] = -1;
  }
  return memo[i];
}