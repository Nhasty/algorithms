/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i = 0, memo = new Array(nums.length).fill(null)) {
  if (i >= nums.length) {
    return 0;
  }
  if (memo[i] !== null) {
    return memo[i]
  }
  memo[i] = Math.max((nums[i] + rob(nums, i + 2, memo)), rob(nums, i + 1, memo));
  return memo[i]
};