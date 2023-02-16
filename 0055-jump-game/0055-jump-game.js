/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let stack = [0];
  const visited = new Set([0]);
  while (stack.length) {
    const index = stack.pop();
    if (index >= nums.length - 1) {
      return true;
    }
    for (let i = 1; i <= nums[index]; i += 1) {
      if (!(visited.has(index + i))) {
        stack.push(index + i);
        visited.add(index + i);
      }
    }
  }
  return false;
};