/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let highs = Array(k);
  let counts = Array(k).fill(0);
  let count = 0;
  nums.sort((a, b) => a - b);
  let current = nums[0];
  for (let num of nums) {
    if (current === num) {
      count += 1;
    } else {
      for (let i = 0; i < k; i+= 1) {
        if (count >= counts[i]) {
          const temp = highs[i];
          const tempCount = counts[i];
          highs[i] = current;
          counts[i] = count;
          count = tempCount;
          current = temp;
        }
      }
      current = num;
      count = 1;
    }
  }
  for (let i = 0; i < k; i+= 1) {
    if (count >= counts[i]) {
      const temp = highs[i];
      const tempCount = counts[i];
      highs[i] = current;
      counts[i] = count;
      count = tempCount;
      current = temp;
    }
  }
  return highs;
};