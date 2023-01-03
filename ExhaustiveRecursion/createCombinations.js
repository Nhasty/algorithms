// Write a function, createCombinations, that takes in an array and a length as arguments. The function should return a 2D array representing all of the combinations of the specifized length.

// The items within the combinations and the combinations themselves may be returned in any order.

// You may assume that the input array contains unique elements and 1 <= k <= items.length.

const createCombinations = (items, k) => {
  // todo
  if (items.length < k) {
    return [];
  }
  if (k === 0) {
    return [[]];
  }
  const first = items[0];
  const notFirst = items.slice(1);
  const partialCombos = createCombinations(notFirst, k - 1);
  const allCombinations = [...createCombinations(notFirst, k)];
  for (let combo of partialCombos) {
    combo.unshift(first);
    allCombinations.push(combo);
  }
  return allCombinations;
};