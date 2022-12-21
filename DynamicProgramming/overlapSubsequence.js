// Write a function, overlapSubsequence, that takes in two strings as arguments. The function should return the length of the longest overlapping subsequence.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
  // todo
  const indices = i + ',' + j;
  if (indices in memo) {
    return memo[indices];
  }
  if (i >= str1.length || j >= str2.length) {
    return 0;
  }
  if (str1[i] === str2[j]) {
    memo[indices] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
  } else {
    memo[indices] = Math.max(overlapSubsequence(str1, str2, i + 1, j, memo), overlapSubsequence(str1, str2, i, j + 1, memo));
  }
  return memo[indices];
};


