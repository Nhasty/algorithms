// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a, b) => {
  // todo
  const aSet = new Set(b);
  const results = [];
  a.forEach((x) => {
    if (aSet.has(x)) {
      results.push(x);
    }
  });
  return results
};
