// Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

const fiveSort = (nums) => {
  // todo
  let frontPoint = 0;
  for (let i = nums.length - 1; i > 0; i -= 1) {
    if (nums[i] !== 5) {
      for (let j = frontPoint; j < i; j += 1) {
        if (nums[j] === 5) {
          nums[j] = nums[i];
          nums[i] = 5;
          frontPoint = j + 1;
          break;
        }
      }
    }
    if (i <= frontPoint) {
      return nums;
    }
  }
};