/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  if (nums.every(num => num === 0)) {
    return '0'
  }
    return nums.sort((a, b) => {
      const strA = String(a);
      const strB = String(b);
      if (strB.indexOf(a) === 0 && strA + strB >= strB + strA) {
        return -1
      } else if (strA.indexOf(b) === 0 && strB + strA >= strA + strB) {
        return 1
      } else if (strA > strB) {
        return -1
      } else if (strB > strA) {
        return 1
      } 
      return 0;
    }).join('')
};