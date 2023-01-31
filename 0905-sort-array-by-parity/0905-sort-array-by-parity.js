/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  let placeholder;
  while (i < j) {
    while (nums[i] % 2 === 0) {
      i += 1;
    }
    while (nums[j] % 2 === 1) {
      j -= 1;
    }
    if (i < j) {
      placeholder = nums[i];
      nums[i] = nums[j];
      nums[j] = placeholder;
      i += 1;
      j -= 1;
    }
  }
  return nums;
};