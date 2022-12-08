// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

// BF iterative

const treeMinValue = (root) => {
  // todo
  let min = Infinity;
  const q = [ root ];
  while (q.length) {
    const visiting = q.shift();
    if (visiting.val < min) {
      min = visiting.val;
    }
    if (visiting.left !== null) {
      q.push visiting.left;
    }
    if (visiting.right !== null) {
      q.push visiting.right;
    }
  }
  return min;
};

// DF recursive

const treeMinValue = (root, min = Infinity) => {
  // todo
  let newMin = min;
  if (root === null) return newMin;
  if (root.val < newMin) {
    newMin = root.val
  }
  const leftMin = treeMinValue(root.left, newMin);
  const rightMin = treeMinValue(root.right);
  return leftMin < rightMin ? leftMin : rightMin;
};