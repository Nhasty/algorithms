/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let max = 0;
  while (l < r) {
    max = Math.max(max, (r - l) * Math.min(height[l], height[r]));
    if (height[l] <= height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return max
};