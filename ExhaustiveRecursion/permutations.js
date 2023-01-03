// Write a function, permutations, that takes in an array an argument. The function should return a 2D array where each subarray represents one of the possible permutations of the array.

// The subarrays may be returned in any order.

// You may assume that the input array contains unique elements.

const permutations = (items, index = 0, permutation = []) => {
  // todo
  if (permutation.length === items.length) {
    return [permutation]
  }
  let allPerms = []
  for (let i = 0; i <= permutation.length; i++) {
    const copy = [...permutation];
    copy.splice(i, 0, items[index])
    allPerms = [...allPerms, ...permutations(items, index + 1, copy)]
  }
  return allPerms
};
