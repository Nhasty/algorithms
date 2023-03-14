/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {};
  for (let num of nums) {
    if (!(num in map)) {
      map[num] = 0;
    }
    map[num] += 1;
  }
  const counts = Array(nums.length + 1);
  for (let num in map) {
    if (!counts[map[num]]) {
      counts[map[num]] = [];
    }
    counts[map[num]].push(num);
  }
  const solution = [];
  for (let i = nums.length + 1; i >= 0; i -= 1) {
    while (counts[i] && counts[i].length && solution.length < k) {
      solution.push(counts[i].pop())
      
    }
  }
  return solution;
};