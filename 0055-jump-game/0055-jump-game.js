/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (i > max) {
      return false;
    }
    if (max >= nums.length - 1) {
      return true
    }
    max = Math.max(max, i + nums[i]);
  }
};