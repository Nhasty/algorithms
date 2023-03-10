/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const set = new Set();
  const random = [];
  while (random.length !== this.nums.length) {
    const rand = Math.floor(Math.random() * this.nums.length);
    if (!set.has(rand)) {
      set.add(rand);
      random.push(this.nums[rand])
    }
  }
  return random;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */