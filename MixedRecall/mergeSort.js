// Write a function, mergeSort, that takes in an array of numbers as an argument. The function should return a new array containing elements of the original array sorted in ascending order. Your function must implement the merge sort algorithm.

const mergeSort = (nums) => {
  // todo
 if (nums.length <= 1) {
  return nums;
 }
 const mp = Math.floor(nums.length / 2);
 const left = nums.slice(0, mp);
 const right = nums.slice(mp);
 const sortedLeft = mergeSort(left);
 const sortedRight = mergeSort(right);
 return sortTwoArrays(sortedLeft, sortedRight)
};

const sortTwoArrays = (array1, array2) => {
  const mergedArray = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < array1.length && pointer2 < array2.length) {
    const current1 = array1[pointer1];
    const current2 = array2[pointer2];
    if (current1 <= current2) {
      mergedArray.push(current1);
      pointer1 += 1;
    } else {
      mergedArray.push(current2);
      pointer2 += 1;
    }
  }
  while (pointer1 < array1.length) {
    mergedArray.push(array1[pointer1]);
    pointer1 += 1;
  }
  while (pointer2 < array2.length) {
    mergedArray.push(array2[pointer2]);
    pointer2 += 1;
  }
  return mergedArray;
}