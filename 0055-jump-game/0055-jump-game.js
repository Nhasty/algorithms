/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let stack = [0];
  const visited = new Set();
  while (stack.length) {
    const index = stack.pop();
    visited.add(index);
    if (index >= nums.length - 1) {
      return true;
    }
    for (let i = 1; i <= nums[index]; i += 1) {
      if (!(visited.has(index + i))) {
        stack.push(index + i);  
      }
    }
  }
  return false;
};