// Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

// The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

// If the tree is empty, return -1.

// df recursive

const howHigh = (node) => {
  // todo
  if (node === null) return -1;
  let count = 1;
  return (count + Math.max(howHigh(node.left), howHigh(node.right)));
}