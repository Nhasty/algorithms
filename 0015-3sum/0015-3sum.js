/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => (a - b));
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i - 1] === nums[i]) {
      continue;
    }
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      if (nums[i] + nums[start] + nums[end] > 0) {
        end -= 1;
      } else if (nums[i] + nums[start] + nums[end] < 0) {
        start += 1;
      } else {
        result.push([nums[i], nums[start], nums[end]])
        start += 1;
        end -= 1;
        while (nums[start] === nums[start - 1]) {
          start += 1
        }
        while (nums[end] === nums[end + 1]) {
          end -= 1;
        }
      }
    }
  }
  return result;
};