/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    const mp = Math.floor((j + i) / 2);
    const val = nums[mp];
    if (val === target) {
      return mp;
    }
    if (val > target) {
      j = mp - 1; 
    } else {
      i = mp + 1;
    }
  }
  return -1
};