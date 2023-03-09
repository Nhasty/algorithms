/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {  
  nums.reverse();
  const solution = []
  const placeholder = [];
  for (let i = 0; i < nums.length; i++) {
    solution[i] = sortedAdd(placeholder, nums[i], 0, i - 1);
  }
  solution.reverse();
  return solution;
};

const sortedAdd = (array, item, start, stop) => {
  if (!array.length) {
    array.push(item);
    return 0;
  }
  if (start >= stop) {
    if (item <= array[start]) {
      array.splice(start, 0, item)
      return start
    }
    array.splice(start + 1, 0, item);
    return start + 1;
  }
  const mp = Math.floor((start + stop) / 2);
  if (item <= array[mp]) {
    return sortedAdd(array, item, start, mp);
  }
  return sortedAdd(array, item, mp + 1, stop);
};