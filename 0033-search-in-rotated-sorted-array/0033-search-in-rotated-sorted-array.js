/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  debugger
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right]  === target) {
      return right;
    }
    const mp = Math.floor((left + right) / 2);
    if (nums[mp] === target) {
      return mp;
    }
    if (nums[mp]  > target) {
      if (nums[left] < target || nums[left] > nums[mp]) {
        right = mp;
      } else {
        left = mp + 1; 
      } 
    } else {
      if (nums[right]  < target && nums[mp] < nums[right]) {
        right = mp
      } else {
        left = mp + 1;
      }
      
    }
  }
  return nums[left] === target ? left: -1;
};