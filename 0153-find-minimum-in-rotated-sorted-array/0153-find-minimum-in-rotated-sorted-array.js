/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let result = nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] <= nums[right]) {
      result = Math.min(result, nums[left]);
      break;
    }
    const mp = Math.floor((left + right) / 2);
    if (nums[mp] >= nums[left]) {
      left = mp + 1;
    } else {
      right = mp;
    }
  }
  return result
};