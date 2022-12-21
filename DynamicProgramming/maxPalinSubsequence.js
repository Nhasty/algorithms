// Write a function, maxPalinSubsequence, that takes in a string as an argument. The function should return the length of the longest subsequence of the string that is also a palindrome.

// A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

const maxPalinSubsequence = (str, front = 0, back = (str.length - 1), memo = {}) => {
  // todo
  if (front > back) {
    return 0;
  };
  if (front === back) {
    return 1;
  };
  const indices = front + ',' + back;
  if (indices in memo) {
    return memo[indices];
  };
  if (str[front] === str[back]) {
    memo[indices] = 2 + maxPalinSubsequence(str, front + 1, back - 1, memo)
  } else {
    memo[indices] = Math.max(maxPalinSubsequence(str, front + 1, back, memo), maxPalinSubsequence(str, front, back - 1, memo))
  }
  return memo[indices];
}