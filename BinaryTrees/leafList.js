// Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.

// df rec

 const leafList = (root) => {
  // todo
  if (root.left === null && root.right === null) {
    return [root];
  }
  if (root === null) {
    return [];
  }
  return [...leafList(root.left), ...leafList(root.right)];
 }