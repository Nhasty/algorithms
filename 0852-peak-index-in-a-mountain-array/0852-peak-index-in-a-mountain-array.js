/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    const mp = Math.floor((i + j) / 2);
    const val = arr[mp];
    if (mp - 1 === -1 || arr[mp - 1] < arr[mp]) {
      if (arr[mp + 1] <  arr[mp]) {
       return mp; 
      }
      i = mp + 1;
    } else {
      j = mp - 1;
    }
  }  
};