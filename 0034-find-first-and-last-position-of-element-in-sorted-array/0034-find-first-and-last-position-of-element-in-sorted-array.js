/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  let lowerBound = -1;
  let upperBound = -1;
  while (i <= j && nums[i] !== target && nums[j] !== target) {
    const mp = Math.floor((i + j) / 2);
    const val = nums[mp];
    if (val < target) {
      i = mp + 1;
      } else if (val > target) {
        j = mp - 1;
      } else {
        break;
      }
    }
  
  if (i <= j) {
    lowerBound = findLowerBound(nums, i, j - 1, target);
    upperBound = findUpperBound(nums, i + 1, j, target); 
  }
  return [lowerBound, upperBound]
};

const findLowerBound = (nums, i, upper, target) => {
  if (i > upper && nums[i] !== target) {
      i += 1;
  } 
  while (nums[i] !== target && i <= upper) {
      const lmp = Math.floor((i + upper) / 2);
      const lVal = nums[lmp];
      if (lVal < target) {
        i = lmp + 1
      } else {
        i = findLowerBound(nums, i, lmp - 1, target);
      }
  }
  return i;
};

const findUpperBound = (nums, lower, j, target) => {
  if (lower > j && nums[j] !== target) {
      j -= 1;
  }
  while(nums[j] !== target && lower <= j) {
    const ump = Math.floor((lower + j) / 2);
    const uVal = nums[ump];
    if (uVal > target) {
        j = ump - 1;
    } else {
      j = findUpperBound(nums, ump + 1, j, target);
    }
  }
  return j;
}