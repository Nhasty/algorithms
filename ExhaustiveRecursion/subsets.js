// Write a function, subsets, that takes in an array as an argument. The function should return a 2D array where each subarray represents one of the possible subsets of the array.

// The elements within the subsets and the subsets themselves may be returned in any order.

// You may assume that the input array contains unique elements.

const subsets = (elements, index = 0, currentSubset = []) => {
  // todo
  if (index >= elements.length) {
    return [currentSubset];
  }
  const something = [...currentSubset, elements[index]]
  return [...subsets(elements, index + 1, currentSubset), ...subsets(elements, index + 1, something)];
};