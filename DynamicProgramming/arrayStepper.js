// Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.

const arrayStepper = (nums, i = 0, memo = {}) => {
  // todo
  if (i in memo) {
    return memo[i];
  };
  let num = nums[i];
  if ((i + num + 1) >= nums.length) {
    return true;
  };
  while (num) {
    if (arrayStepper(nums, i + num)) {
      memo[i] === true;
      return true
    };
    num -= 1;
  }
  memo[i] = false;
  return false;
};