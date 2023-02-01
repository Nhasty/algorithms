/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let front = 0;
  let back = nums.length - 1;
  let ones = -1;
  while (front < back && (ones === -1 || ones > front)) {
    while (nums[back] === 2) {
      back -= 1;
    }
    while (nums[front] === 0) {
      front += 1;
    }
    if (nums[front] === 2 && front < back) {
      nums[front] = nums[back];
      nums[back] = 2;
    } else if (nums[front] === 1) {
      if (nums[back] === 1) {
        if (ones === -1) {
          ones = back - 1;
        }
        if (ones > front) {
          if (nums[ones] === 2) {
            nums[back] = 2;
          } else if (nums[ones] === 0) {
            nums[front] = 0;
          }
          nums[ones] = 1;
          ones -= 1;
        }
      } else {
        nums[back] = 1;
        nums[front] = 0
      }
    }
  }
  return nums;
};