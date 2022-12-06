// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
  // todo
  // iterate numbers
  let returnMe;
  numbers.forEach((num1, i, nums) => {
    nums.slice(i+1).forEach((num2, j) => {
      if ((num1 + num2) === targetSum) {
        returnMe = [i, (i + j + 1)];
      }
    });
  });
  return returnMe
};