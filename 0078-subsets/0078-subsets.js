/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (elements, index = 0, currentSubset = []) => {
  // todo
  if (index >= elements.length) {
    return [currentSubset];
  }
  const something = [...currentSubset, elements[index]]
  return [...subsets(elements, index + 1, currentSubset), ...subsets(elements, index + 1, something)];
};