/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const setNums = new Set(nums);
  for (let i = 0; i <= nums.length; i += 1) {
    if (!(setNums.has(i))) {
      return i
    }
  }
};