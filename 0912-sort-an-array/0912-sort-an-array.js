/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const mp = Math.floor(nums.length / 2)
  const left = nums.slice(0, mp);
  const right = nums.slice(mp);
  return sort2Arrays(sortArray(left), sortArray(right));
};

const sort2Arrays = (left, right) => {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    const leftElement = left[i];
    const rightElement = right[j];
    if (leftElement <= rightElement) {
      merged.push(leftElement);
      i += 1;
    } else {
      merged.push(rightElement);
      j += 1;
    }
  }
  while (i < left.length) {
    merged.push(left[i]);
    i += 1;
  }
  while (j < right.length) {
    merged.push(right[j]);
    j += 1;
  }
  return merged;
}