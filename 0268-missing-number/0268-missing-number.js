/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  return nums.reduce((memo, num, i) => i + 1 - num + memo, 0)
};