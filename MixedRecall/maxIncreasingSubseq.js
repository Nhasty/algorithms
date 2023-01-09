// Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument. The function should return the length of the longest subsequence of strictly increasing numbers.

// A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.

const maxIncreasingSubseq = (numbers, prev = -Infinity, i = 0, memo = {}) => {
  // todo
  const key = i + ',' + prev;
  if (key in memo) {
    return memo[key];
  }
  if (i === numbers.length) {
    return 0;
  }
  const leaveLength = maxIncreasingSubseq(numbers, prev, i + 1, memo);
  const first = numbers[i];
  let takeLength = 0;
  if (first > prev) {
    takeLength += 1 + maxIncreasingSubseq(numbers, first, i + 1, memo);
  }
  memo[key] = takeLength > leaveLength ? takeLength : leaveLength;
  return memo[key];
};