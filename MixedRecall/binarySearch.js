// Write a function, binarySearch, that takes in a sorted array of numbers and a target. The function should return the index where the target can be found within the array. If the target is not found in the array, then return -1.

// You may assume that the input array contains unique numbers sorted in increasing order.

// Your function must implement the binary search algorithm.

const binarySearch = (numbers, target) => {
  // todo
  let low = 0;
  let high = numbers.length - 1;
  while (low <= high) {
    const mp = Math.floor((low + high) / 2);
    const currentVal = numbers[mp];
    if (currentVal === target) {
      return mp;
    }
    if (currentVal < target) {
      low = mp + 1;
    } else {
      high = mp - 1;
    }
  }
  return -1;
};